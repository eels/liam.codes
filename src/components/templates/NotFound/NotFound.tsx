import * as Styled from './NotFound.styled';
import Container from 'components/atoms/Container/Container';
import Content from 'components/molecules/Content/Content';
import Link from 'next/link';
import UnderlinedText from 'components/atoms/UnderlinedText/UnderlinedText';
import notfound from 'data/not-found.json';
import { Fragment } from 'react';

export default function NotFoundTemplate() {
  return (
    <Fragment>
      <Styled.Spacer>
        <Content content={notfound.content} />
      </Styled.Spacer>
      <Container>
        <Styled.Link>
          <Link href={notfound.return.url} passHref>
            <UnderlinedText>{notfound.return.copy}</UnderlinedText>
          </Link>
        </Styled.Link>
      </Container>
    </Fragment>
  );
}
