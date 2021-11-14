import styles from './Project.module.scss';
import { create } from 'chic-modules';

const styled = create(styles);

export const Project = styled.div('project');

export const Header = styled.div('header');

export const Heading = styled.h3('heading');

export const Icon = styled.span('icon');

export const Description = styled.div('description');

export const ViewSource = styled.div('view-source');
