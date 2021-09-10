import * as Styled from './Hero.styled';

interface HeroProps {
  content: {
    heading: string;
    subheading: string;
  };
}

export default function Hero({ content }: HeroProps) {
  return (
    <Styled.Header>
      <Styled.Heading>{content.heading}</Styled.Heading>
      <Styled.Subheading>{content.subheading}</Styled.Subheading>
    </Styled.Header>
  );
}
