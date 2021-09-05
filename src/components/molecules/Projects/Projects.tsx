import * as Styled from './Projects.styled';
import Container from 'components/atoms/Container/Container';
import Project from 'components/molecules/Project/Project';
import projects from 'data/projects.json';

export default function Projects() {
  return (
    <Container>
      <Styled.Projects>
        {projects.items.map((project, index) => (
          <Project key={index} as='li' {...project}></Project>
        ))}
      </Styled.Projects>
    </Container>
  );
}
