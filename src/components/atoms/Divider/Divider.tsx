import * as Styled from './Divider.styled';
import { ReactNode } from 'react';

interface DividerProps {
  children: ReactNode;
}

export default function Divider({ children }: DividerProps) {
  return <Styled.Divider>{children}</Styled.Divider>;
}
