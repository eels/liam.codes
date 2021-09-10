import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en-GB'>
        <Head>
          <meta httpEquiv='x-ua-compatible' content='ie=edge' />
          <meta name='robots' content='index,follow,noimageindex' />
          <link rel='canonical' href='https://liam.codes' />
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
