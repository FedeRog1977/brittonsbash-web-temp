import { Project } from '~/libs/types';

export type ProjectNamesResponse = Array<Pick<Project, 'id' | 'name'>>;
