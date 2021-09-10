import * as Styled from './index.styled';
import Content from 'components/molecules/Content/Content';
import Divider from 'components/atoms/Divider/Divider';
import Head from 'next/head';
import Hero from 'components/molecules/Hero/Hero';
import Projects from 'components/molecules/Projects/Projects';
import React from 'react';
import footer from 'data/footer.json';
import hero from 'data/hero.json';
import introduction from 'data/introduction.json';
import projects from 'data/projects.json';
import seo from 'data/seo.json';

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
        <title>{seo.title}</title>
        <meta name='description' content={seo.description} />
      </Head>
      <Styled.Wrapper>
        <Hero content={hero.content} />
        <Divider>
          <Content content={introduction.content} />
        </Divider>
        <Divider>
          <Projects content={projects.items} />
        </Divider>
        <Divider>
          <Content content={footer.content} />
        </Divider>
      </Styled.Wrapper>
    </React.Fragment>
  );
}
