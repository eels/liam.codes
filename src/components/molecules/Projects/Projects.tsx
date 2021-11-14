import * as Styled from './Projects.styled';
import Container from 'components/atoms/Container/Container';
import Project from 'components/molecules/Project/Project';

interface ProjectsProps {
  content: {
    description: string;
    icon: string;
    href: string;
    name: string;
    source?: string;
  }[];
}

export default function Projects({ content }: ProjectsProps) {
  return (
    <Container>
      <Styled.Projects>
        {content.map((project, index) => (
          <Project key={index} as='li' {...project} />
        ))}
      </Styled.Projects>
    </Container>
  );
}
