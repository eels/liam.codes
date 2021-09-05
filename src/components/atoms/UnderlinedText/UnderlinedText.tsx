import * as Styled from './UnderlinedText.styled';
import isInternalHref from 'utils/isInternalHref';
import { ReactNode, useMemo } from 'react';

interface UnderlinedTextProps {
  children: ReactNode;
  href?: string;
}

export default function UnderlinedText({ children, href }: UnderlinedTextProps) {
  const isExternalHref = useMemo(() => href && !isInternalHref(href), [href]);
  const additionalProps = {
    rel: isExternalHref ? 'noopener noreferrer' : undefined,
    target: isExternalHref ? '_blank' : undefined,
  };

  return (
    <Styled.Text as={href ? 'a' : null} href={href ?? undefined} {...additionalProps}>
      {children}
    </Styled.Text>
  );
}
