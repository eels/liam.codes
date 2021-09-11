import Head from 'next/head';
import HomeTemplate from 'components/templates/Home/Home';
import seo from 'data/seo.json';
import { Fragment } from 'react';

export default function Home() {
  return (
    <Fragment>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
        <title>{seo.title}</title>
        <meta name='description' content={seo.description} />
      </Head>
      <HomeTemplate />
    </Fragment>
  );
}
