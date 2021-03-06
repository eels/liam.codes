import styles from './Hero.module.scss';
import { create } from 'chic-modules';

const styled = create(styles);

export const Header = styled.header('header');

export const Heading = styled.h1('heading');

export const Subheading = styled.h2('subheading');
