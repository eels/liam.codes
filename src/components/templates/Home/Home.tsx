import Content from 'components/molecules/Content/Content';
import Divider from 'components/atoms/Divider/Divider';
import Hero from 'components/molecules/Hero/Hero';
import Projects from 'components/molecules/Projects/Projects';
import footer from 'data/footer.json';
import hero from 'data/hero.json';
import introduction from 'data/introduction.json';
import projects from 'data/projects.json';
import { Fragment } from 'react';

export default function HomeTemplate() {
  return (
    <Fragment>
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
    </Fragment>
  );
}
