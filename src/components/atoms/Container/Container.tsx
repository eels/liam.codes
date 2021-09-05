import * as Styled from './Container.styled';
import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return <Styled.Container>{children}</Styled.Container>;
}
