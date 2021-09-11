import Head from 'next/head';
import NotFoundTemplate from 'components/templates/NotFound/NotFound';
import seo from 'data/seo.json';
import { Fragment } from 'react';

export default function NotFound() {
  return (
    <Fragment>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
        <title>{seo.title}</title>
        <meta name='description' content={seo.description} />
      </Head>
      <NotFoundTemplate />
    </Fragment>
  );
}
