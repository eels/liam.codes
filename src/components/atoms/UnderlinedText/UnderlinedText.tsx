import * as Styled from './UnderlinedText.styled';
import { ReactNode } from 'react';

interface UnderlinedTextProps {
  children: ReactNode;
  href?: string;
}

export default function UnderlinedText({ children, href }: UnderlinedTextProps) {
  return (
    <Styled.Text as={href ? 'a' : null} href={href ?? undefined}>
      {children}
    </Styled.Text>
  );
}
