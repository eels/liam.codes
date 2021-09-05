import * as Styled from './index.styled';
import Contact from 'components/molecules/Contact/Contact';
import Divider from 'components/atoms/Divider/Divider';
import Head from 'next/head';
import Hero from 'components/molecules/Hero/Hero';
import Intro from 'components/molecules/Intro/Intro';
import Projects from 'components/molecules/Projects/Projects';
import React from 'react';
import seo from 'data/seo.json';

export default function Home() {
  const sections = [Intro, Projects, Contact];

  return (
    <React.Fragment>
      <Head>
        <meta httpEquiv='x-ua-compatible' content='ie=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
        <title>{seo.title}</title>
        <meta name='description' content={seo.description} />
        <meta name='robots' content='index,follow,noimageindex' />
        <link rel='canonical' href='https://liam.codes' />
        <link rel='preconnect dns-prefetch' href='//emoji-css.afeld.me' />
        <link rel='preconnect dns-prefetch' href='//fonts.googleapis.com' />
        <link rel='preconnect dns-prefetch' href='//fonts.gstatic.com' />
        <link rel='preconnect dns-prefetch' href='//twemoji.maxcdn.com' />
        <link rel='preconnect dns-prefetch' href='//www.google-analytics.com' />
        <link rel='stylesheet' href='https://emoji-css.afeld.me/emoji.css' />
      </Head>
      <Styled.Wrapper>
        <Hero />
        {sections.map((Section, index) => (
          <Divider key={index}>
            <Section />
          </Divider>
        ))}
      </Styled.Wrapper>
    </React.Fragment>
  );
}
