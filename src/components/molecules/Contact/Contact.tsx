import Container from 'components/atoms/Container/Container';
import UnderlinedText from 'components/atoms/UnderlinedText/UnderlinedText';

export default function Contact() {
  return (
    <Container>
      <p>
        Feel free to reach out by sending an <UnderlinedText>Email</UnderlinedText>, or by
        connecting on <UnderlinedText>LinkedIn</UnderlinedText>.
      </p>
    </Container>
  );
}
