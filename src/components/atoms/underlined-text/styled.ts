import { classnames } from 'tailwind-compose';

interface StyledText {
  isLink: boolean;
}

const LinkTextStyles = [
  'transition-[background-position]',
  'ease-linear',
  'duration-75',
  'hover:bg-[0_98%]',
  'cursor-pointer',
];

export const Text = classnames<StyledText>((conditional) => [
  'bg-no-repeat',
  'bg-[0_85%]',
  'bg-[length:100%_5px]',
  'md:bg-[length:100%_8px]',
  'bg-gradient-to-r',
  'from-white/50',
  'to-white/50',
  conditional(LinkTextStyles, ({ isLink }) => isLink),
]);
