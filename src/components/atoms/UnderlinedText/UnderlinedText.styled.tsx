import styles from './UnderlinedText.module.scss';
import { create } from 'chic-modules';

const styled = create(styles);

export const Text = styled.span('text');
