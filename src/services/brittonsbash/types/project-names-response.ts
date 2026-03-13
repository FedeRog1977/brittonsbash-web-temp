import { Project } from '~/types';

export type ProjectNamesResponse = Array<Pick<Project, 'id' | 'name'>>;
