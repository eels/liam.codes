import * as Styled from './Project.styled';
import UnderlinedText from 'components/atoms/UnderlinedText/UnderlinedText';

interface ProjectProps {
  as?: string;
  description: string;
  icon: string;
  href: string;
  name: string;
}

export default function Project({ as, description, href, icon, name }: ProjectProps) {
  return (
    <Styled.Project as={as}>
      <Styled.Header>
        <Styled.Icon className={`em em-${icon}`} />
        <Styled.Heading>
          <UnderlinedText href={href}>{name}</UnderlinedText>
        </Styled.Heading>
      </Styled.Header>
      <Styled.Description>{description}</Styled.Description>
    </Styled.Project>
  );
}
