import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en-GB'>
        <Head>
          <meta httpEquiv='x-ua-compatible' content='ie=edge' />
          <meta name='robots' content='index,follow,noimageindex' />
          <meta name='application-name' content='Liam Howell' />
          <meta name='theme-color' content='#f15d5d' />
          <link rel='canonical' href='https://liam.codes' />
          <link rel='author' href='/humans.txt' type='text/plain' />
          <link rel='manifest' href='/site.webmanifest' />
          <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
          <link rel='apple-touch-icon' type='image/png' sizes='180x180' href='apple-touch.png' />
          <link rel='preconnect dns-prefetch' href='//emoji-css.afeld.me' />
          <link rel='preconnect dns-prefetch' href='//fonts.googleapis.com' />
          <link rel='preconnect dns-prefetch' href='//fonts.gstatic.com' />
          <link rel='preconnect dns-prefetch' href='//twemoji.maxcdn.com' />
          <link rel='preconnect dns-prefetch' href='//www.google-analytics.com' />
          <link rel='stylesheet' href='https://emoji-css.afeld.me/emoji.css' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
