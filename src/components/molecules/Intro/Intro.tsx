import Container from 'components/atoms/Container/Container';
import UnderlinedText from 'components/atoms/UnderlinedText/UnderlinedText';

export default function Intro() {
  return (
    <Container>
      <p>
        Experienced full-stack engineer working alongside brands such as{' '}
        <UnderlinedText>The Spectator</UnderlinedText>,{' '}
        <UnderlinedText>The Telegraph</UnderlinedText> and{' '}
        <UnderlinedText>The Wall Street Journal</UnderlinedText>.
      </p>
      <p>
        I aim to take complex problems and look to solve them with efficient and striking solutions.
      </p>
    </Container>
  );
}
