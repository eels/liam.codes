import 'styles/style.scss';
import Wrapper from 'components/atoms/Wrapper/Wrapper';
import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Wrapper>
      <Component {...pageProps} />
    </Wrapper>
  );
}
