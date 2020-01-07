import cheerio from 'cheerio';

export interface ImageData {
  url?: string;
  height?: number;
  width?: number;
  alt?: string;
  type?: string;
}

export interface MetaData {
  title?: string;
  description?: string;
  'og:title'?: string;
  'theme-color'?: string;
  'og:image'?: ImageData[];
  'og:site_name'?: string;
  'og:locale'?: string;
  'og:url'?: string;
  'og:description'?: string;
  'og:type'?: string;

  news_keywords?: string;

  'article:modified_time'?: string;
  'article:published_time'?: string;
}

interface RawImageMeta {
  pos: number;
  property: string;
  content: string;
}

export function extractImageMeta($: CheerioStatic): ImageData[] {
  const returnData: ImageData[] = [];

  // exported only for testing purposes...

  //console.log(html);

  const imageNodes = $('meta[property^="og:imag"]');

  // Collect all OG Image Meta tags into an easily iterable
  const ogImageMeta: RawImageMeta[] = [];
  imageNodes.each(function(i: number, elem: CheerioElement) {
    $(elem).attr('content');

    ogImageMeta.push({
      pos: i,
      property: $(elem).attr('property') || '',
      content: $(elem).attr('content') || '',
    });
  });

  //const x = 0;
  let i = 0;
  let x = 0;
  let imgData: ImageData;
  const totalImageTags = ogImageMeta.length;

  for (i = 0; i < totalImageTags; i++) {
    if (ogImageMeta[i].property == 'og:image') {
      imgData = { url: ogImageMeta[i].content, height: 0, width: 0, type: '', alt: '' };

      // iterate until we see the next one
      x = i + 1;
      while (x + 1 <= totalImageTags) {
        if (ogImageMeta[x].property == 'og:image') {
          break;
        } else if (ogImageMeta[x].property == 'og:image:height') {
          imgData.height = Number(ogImageMeta[x].content);
        } else if (ogImageMeta[x].property == 'og:image:width') {
          imgData.width = Number(ogImageMeta[x].content);
        } else if (ogImageMeta[x].property == 'og:image:url') {
          imgData.url = ogImageMeta[x].content;
        } else if (ogImageMeta[x].property == 'og:image:type') {
          imgData.type = ogImageMeta[x].content;
        } else if (ogImageMeta[x].property == 'og:image:alt') {
          imgData.alt = ogImageMeta[x].content;
        }
        i += 1; // This moves the cursor
        x++;
      }

      returnData.push(imgData);
    }
  }

  return returnData;
}

export function extractMeta(html: string): MetaData {
  // TODO: Throw exception if HTML is falsy

  // Initialize default data result
  const data: MetaData = {};

  // Load input into dom
  const $ = cheerio.load(html);

  data['title'] = $('title').text();

  // TODO: Read all meta tags and iterate... typescript this..
  data['theme-color'] = $('meta[name="theme-color"]').attr('content');
  data['description'] = $('meta[name="description"]').attr('content');

  data['og:image'] = [];
  data['og:title'] = $('meta[property="og:title"]').attr('content');

  data['og:site_name'] = $('meta[property="og:site_name"]').attr('content');
  data['og:locale'] = $('meta[property="og:locale"]').attr('content');
  data['og:url'] = $('meta[property="og:url"]').attr('content');
  data['og:description'] = $('meta[property="og:description"]').attr('content');
  data['article:modified_time'] = $('meta[property="article:modified_time"]').attr('content');
  data['article:published_time'] = $('meta[property="article:published_time"]').attr('content');
  data['og:type'] = $('meta[property="og:type"]').attr('content');

  data['news_keywords'] = $('meta[name="news_keywords"]').attr('content');

  data['og:image'] = extractImageMeta($);

  return data;
}
