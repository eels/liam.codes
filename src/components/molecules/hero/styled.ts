import { classnames } from 'tailwind-compose';

export const Header = classnames(() => [
  'text-center',
  'space-y-2',
]);

export const Heading = classnames(() => [
  'text-[32px]/none',
  'md:text-[62px]/none',
  'font-bold',
]);

export const Subheading = classnames(() => [
  'text-[24px]/none',
  'md:text-[42px]/none',
]);
