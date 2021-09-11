import * as Styled from './Wrapper.styled';
import { ReactNode } from 'react';

interface WrapperProps {
  children: ReactNode;
}

export default function Wrapper({ children }: WrapperProps) {
  return <Styled.Wrapper>{children}</Styled.Wrapper>;
}
