import { classnames } from 'tailwind-compose';

export const Header = classnames(() => [
  'flex',
  'flex-col',
  'gap-4',
  'md:flex-row',
  'md:gap-6',
]);

export const Headline = classnames(() => [
  'font-bold',
]);

export const Description = classnames(() => [
  'pt-4',
]);

export const SourceLink = classnames(() => [
  'inline-block',
  'pt-5',
]);
