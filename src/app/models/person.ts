import { Skill } from './skill';

export interface Person {
    job: string;
    name: string;
    personal?: any;
    skills?: Skill[];
}
