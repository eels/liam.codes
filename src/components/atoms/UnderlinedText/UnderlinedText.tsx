import * as Styled from './UnderlinedText.styled';
import isInternalHref from 'utils/isInternalHref';
import { ReactNode, useMemo } from 'react';

interface UnderlinedTextProps {
  children: ReactNode;
  href?: string;
}

interface AdditionalLinkProps {
  rel?: string;
  target?: string;
}

export default function UnderlinedText({ children, href }: UnderlinedTextProps) {
  const isExternalHref = useMemo<boolean>(() => !!href && !isInternalHref(href), [href]);
  const additionalProps: AdditionalLinkProps = {};

  if (isExternalHref) {
    additionalProps.rel = 'noopener noreferrer';
    additionalProps.target = '_blank';
  }

  return (
    <Styled.Text as={href ? 'a' : null} href={href ?? undefined} {...additionalProps}>
      {children}
    </Styled.Text>
  );
}
