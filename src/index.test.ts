import { extractMeta, MetaData } from './index';
import fs from 'fs';
import path from 'path';

function loadTestData(filename: string): string {
  const filepath: string = path.resolve(__dirname, '../test/data', filename);
  return fs.readFileSync(filepath, 'utf8');
}

describe('Specific publishers should extract as expected', () => {
  test('citypages article', () => {
    const data: MetaData = extractMeta(loadTestData('citypages.html'));

    expect(data).toEqual({
      title: 'Bartz brothers snow sculpture survives warmth for grand opening',
      'theme-color': undefined,
      description: undefined,
      'og:image': [
        {
          alt: '',
          height: 576,
          type: '',
          url: 'https://www.twincities.com/wp-content/uploads/2020/01/whale.jpeg?w=1024&h=576',
          width: 1024,
        },
      ],
      'og:title': 'Bartz brothers’ whale sculpture survives rain, warm temps for grand opening',
      'og:site_name': 'Twin Cities',
      'og:locale': 'en_US',
      'og:url':
        'https://www.twincities.com/2020/01/04/bartz-brothers-walvis-the-whale-snow-sculpture-survives-rain-and-warm-temps-for-grand-opening-saturday-in-new-brighton/',
      'og:description':
        'Most sea creatures don’t mind a little rain. But Walvis the Whale, a 22-foot-tall snow sculpture in New Brighton, nearly became Walvis the minnow during the after-Christmas storm that brought…',
      'article:modified_time': '2020-01-05T18:16:06+00:00',
      'article:published_time': '2020-01-04T23:53:45+00:00',
      'og:type': 'article',
      news_keywords: undefined,
    });
  });

  test('tcdailyplanet article', () => {
    const data: MetaData = extractMeta(loadTestData('tcdailyplanet.html'));

    expect(data).toEqual({
      title:
        '\n\t\tStraddling personal and political, contemporary Native painter Jim Denomie identifies as both the rabbit and the ‘Renegade’ | Twin Cities Daily Planet\t',
      'theme-color': undefined,
      description:
        'One of the first things you notice at Jim Denomie’s home and studio in Shafer, Minnesota, are the horses. I’m not talking about live horses. He collects spring horses, like the ones you used to ride outside of the hardware store as a kid. There are about ten of them all in various conditions facing […]',
      'og:image': [
        {
          alt: '',
          height: 0,
          type: '',
          url: 'https://www.tcdailyplanet.net/wp-content/uploads/2017/08/JimDenomie.png',
          width: 0,
        },
      ],
      'og:title':
        'Straddling personal and political, contemporary Native painter Jim Denomie identifies as both the rabbit and the ‘Renegade’',
      'og:site_name': 'Twin Cities Daily Planet',
      'og:locale': undefined,
      'og:url':
        'https://www.tcdailyplanet.net/straddling-personal-and-political-contemporary-native-painter-jim-denomie-identifies-as-both-the-rabbit-and-the-renegade/',
      'og:description':
        'One of the first things you notice at Jim Denomie’s home and studio in Shafer, Minnesota, are the horses. I’m not talking about live horses. He collects spring horses, like the ones you used to ride outside of the hardware store as a kid. There are about ten of them all in various conditions facing […]',
      'article:modified_time': undefined,
      'article:published_time': undefined,
      'og:type': 'article',
      news_keywords: 'Arts + Culture, Indigenous Community, Visual Art',
    });
  });

  test('minnpost article', () => {
    const data: MetaData = extractMeta(loadTestData('minnpost.html'));

    expect(data).toEqual({
      title: 'A year in the arts: 25 of the best things we saw and heard in 2019 | MinnPost',
      'theme-color': '#fff',
      description:
        'From "All Is Calm" to "What If": Of the many arts events we attended in 2019, these rose to the top.',
      'og:image': [
        {
          alt: '',
          height: 0,
          type: '',
          url: 'https://www.minnpost.com/wp-content/uploads/2019/05/MoonBellMuseumThumb.jpg',
          width: 0,
        },
        {
          alt: '',
          height: 0,
          type: '',
          url: 'https://www.minnpost.com/wp-content/uploads/2019/08/GreatBlackMusicEnsemble640.jpg',
          width: 0,
        },
        {
          alt: '',
          height: 0,
          type: '',
          url: 'https://www.minnpost.com/wp-content/uploads/2019/05/BrothersParanormal640.jpg',
          width: 0,
        },
        {
          alt: '',
          height: 0,
          type: '',
          url: 'https://www.minnpost.com/wp-content/uploads/2019/04/Metamorphoses640.jpg',
          width: 0,
        },
        {
          alt: '',
          height: 0,
          type: '',
          url: 'https://www.minnpost.com/wp-content/uploads/2019/04/ClaudiaRankineCouch640.jpg',
          width: 0,
        },
      ],
      'og:title': 'A year in the arts: 25 of the best things we saw and heard in 2019 | MinnPost',
      'og:site_name': 'MinnPost',
      'og:locale': 'en_US',
      'og:url':
        'https://www.minnpost.com/artscape/2019/12/a-year-in-the-arts-25-of-the-best-things-we-saw-and-heard-in-2019/',
      'og:description':
        'From "All Is Calm" to "What If": Of the many arts events we attended in 2019, these rose to the top.',
      'article:modified_time': '2019-12-24T08:13:05-06:00',
      'article:published_time': '2019-12-24T08:13:04-06:00',
      'og:type': 'article',
      news_keywords: undefined,
    });
  });

  test('startribune article', () => {
    const data: MetaData = extractMeta(loadTestData('startribune.html'));
    expect(data).toEqual({
      title: '6 Minnesotans are 2019 Artists of the Year - StarTribune.com',
      'theme-color': undefined,
      // eslint-disable-next-line prettier/prettier
      description: 'Meet the Minnesotans at the heart of the year\'s most groundbreaking show.',
      'og:image': [
        {
          alt: '',
          height: 630,
          type: '',
          url: 'https://stmedia.stimg.co/st-aoty-thumb.png?h=630&w=1200&fit=crop&bg=999&crop=faces',
          width: 1200,
        },
      ],
      // eslint-disable-next-line prettier/prettier
      'og:title': '6 Minnesotans are the Star Tribune\'s 2019 Artists of the Year',
      'og:site_name': 'Star Tribune',
      'og:locale': undefined,
      'og:url': 'http://www.startribune.com/6-minnesotans-are-2019-artists-of-the-year/564924782/',
      // eslint-disable-next-line prettier/prettier
      'og:description': 'Meet the Minnesotans at the heart of the year\'s most groundbreaking show.',
      'article:modified_time': undefined,
      'article:published_time': undefined,
      'og:type': 'article',
      news_keywords: undefined,
    });
  });

  test('mnartists article', () => {
    const data: MetaData = extractMeta(loadTestData('mnartists.html'));
    expect(data).toEqual({
      title: 'Dance | Analog/digital | Real-time-ness - Mn Artists',
      'theme-color': undefined,
      description: undefined,
      'og:image': [],
      'og:title': undefined,
      'og:site_name': undefined,
      'og:locale': undefined,
      'og:url': undefined,
      'og:description': undefined,
      'article:modified_time': undefined,
      'article:published_time': undefined,
      'og:type': undefined,
      news_keywords: undefined,
    });
  });

  test('mplsart article', () => {
    const data: MetaData = extractMeta(loadTestData('mplsart.html'));

    expect(data).toEqual({
      // eslint-disable-next-line prettier/prettier
      title: 'Experimental Retail Review: Joshua McGarvey\'s Uselding Fridays at PMH | MPLSART.COM',
      'theme-color': undefined,
      description: 'The artist hosted a night of shopping and performance that was weird, wild, nostalgic, and new.',
      'og:image': [
        {
          alt: '',
          height: 472,
          type: '',
          url:
            'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMjM5MTgwMDAx/card_large.png',
          width: 900,
        },
      ],
      // eslint-disable-next-line prettier/prettier
      'og:title': 'Experimental Retail Review: Joshua McGarvey\'s Uselding Fridays at PMH',
      'og:site_name': 'MPLSART.COM',
      'og:locale': 'en_US',
      'og:url': undefined,
      'og:description':
        'The artist hosted a night of shopping and performance that was weird, wild, nostalgic, and new.',
      'article:modified_time': undefined,
      'article:published_time': undefined,
      'og:type': 'article',
      news_keywords: undefined,
    });
  });
});

describe('Image Extraction handles', () => {
  test('multiple structured properties', () => {
    // Setup Test Data
    const html =
      '<head> \
        <meta property="og:image" content="https://example.com/image1.jpg" /> \
        <meta property="og:image:url" content="https://example.com/image1.jpg" />\
        <meta property="og:image:width" content="1200" />\
        <meta property="og:image:height" content="630" />\
        <meta property="og:image:alt" content="An excellent image." />\
        <meta property="og:image:type" content="image/jpeg" />\
        \
        <meta property="og:image" content="https://example.com/image2.png"/>\
        <meta property="og:image:height" content="472"/>\
        <meta property="og:image:width" content="900"/>\
        <meta property="og:image:alt" content="Another excellent image." />\
        <meta property="og:image:type" content="image/png" />\
        </head>';

    // Run Code to test
    const data: MetaData = extractMeta(html);

    // Check Results
    expect(data['og:image']).toEqual([
      {
        url: 'https://example.com/image1.jpg',
        height: 630,
        width: 1200,
        type: 'image/jpeg',
        alt: 'An excellent image.',
      },
      {
        url: 'https://example.com/image2.png',
        height: 472,
        width: 900,
        type: 'image/png',
        alt: 'Another excellent image.',
      },
    ]);
  });

  test('multiple images with incomplete structured properties', () => {
    // Setup Test Data
    const html =
      '<head> \
        <meta property="og:image" content="https://example.com/image1.jpg" /> \
        <meta property="og:image:height" content="630" />\
        <meta property="og:image" content="https://example.com/image2.png"/>\
        <meta property="og:image:width" content="900"/>\
    </head>';

    // Run Code to test
    const data: MetaData = extractMeta(html);

    // Check Results
    expect(data['og:image']).toEqual([
      {
        url: 'https://example.com/image1.jpg',
        height: 630,
        width: 0, // The missing one
        type: '',
        alt: '',
      },
      {
        url: 'https://example.com/image2.png',
        height: 0,
        width: 900,
        type: '',
        alt: '',
      },
    ]);
  });
  test('multiple images with no structured properties', () => {
    // Setup Test Data
    const html =
      '<head> \
        <meta property="og:image" content="https://example.com/image1.jpg" /> \
        <meta property="og:image" content="https://example.com/image2.png"/>\
    </head>';

    // Run Code to test
    const data: MetaData = extractMeta(html);

    // Check Results
    expect(data['og:image']).toEqual([
      {
        url: 'https://example.com/image1.jpg',
        height: 0,
        width: 0,
        type: '',
        alt: '',
      },
      {
        url: 'https://example.com/image2.png',
        height: 0,
        width: 0,
        type: '',
        alt: '',
      },
    ]);
  });

  test('single og:image tag with no structured properties', () => {
    // Setup Test Data
    const html = '<head> \
        <meta property="og:image" content="https://example.com/image1.jpg" /> \
    </head>';

    // Run Code to test
    const data: MetaData = extractMeta(html);

    // Check Results
    expect(data['og:image']).toEqual([
      {
        url: 'https://example.com/image1.jpg',
        height: 0,
        width: 0,
        type: '',
        alt: '',
      },
    ]);
  });
});
