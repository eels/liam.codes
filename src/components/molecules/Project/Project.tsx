import * as Styled from './Project.styled';
import UnderlinedText from 'components/atoms/UnderlinedText/UnderlinedText';

interface ProjectProps {
  description: string;
  icon: string;
  link: string;
  name: string;
}

export default function Project({ description, icon, link, name }: ProjectProps) {
  return (
    <Styled.Project>
      <Styled.Wrapper>
        <Styled.Icon className={`em em-${icon}`} />
        <Styled.Heading>
          <UnderlinedText href={link}>{name}</UnderlinedText>
        </Styled.Heading>
      </Styled.Wrapper>
      <Styled.Description>{description}</Styled.Description>
    </Styled.Project>
  );
}
