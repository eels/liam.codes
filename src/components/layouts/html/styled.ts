import { classnames } from 'tailwind-compose';

export const Body = classnames(() => [
  'bg-neutral-950',
  'text-white',
  'text-lg',
  'md:text-2xl',
  'selection:text-white',
  'selection:bg-neutral-950',
]);

export const Container = classnames(() => [
  'min-h-screen',
  'bg-rose-400',
  'bg-gradient-to-b',
  'md:bg-gradient-to-r',
  'from-30%',
  'from-rose-500',
  'to-rose-400',
  'px-5',
  'md:px-0',
]);
