import * as Styled from './Project.styled';
import UnderlinedText from 'components/atoms/UnderlinedText/UnderlinedText';

interface ProjectProps {
  as?: string;
  description: string;
  icon: string;
  href: string;
  name: string;
  source?: string;
}

export default function Project({ as, description, href, icon, name, source }: ProjectProps) {
  return (
    <Styled.Project as={as}>
      <Styled.Header>
        <Styled.Icon className={`em em-${icon}`} />
        <Styled.Heading>
          <UnderlinedText href={href}>{name}</UnderlinedText>
        </Styled.Heading>
      </Styled.Header>
      <Styled.Description>{description}</Styled.Description>
      {source && (
        <Styled.ViewSource>
          <UnderlinedText href={source}>View Source on GitHub</UnderlinedText>
        </Styled.ViewSource>
      )}
    </Styled.Project>
  );
}
