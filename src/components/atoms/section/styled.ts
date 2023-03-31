import { classnames } from 'tailwind-compose';

interface StyledSection {
  hasTopPadding: boolean;
}

const TopPaddingStyles = [
  'pt-24',
  'md:pt-44',
];

export const Section = classnames<StyledSection>((conditional) => [
  'pb-24',
  'md:pb-44',
  conditional(TopPaddingStyles, ({ hasTopPadding }) => hasTopPadding),
]);
