import { Skill } from './skill';

export interface Person {
    name: string;
    personal: { [ key: string ]: string }[];
    title: string;
    skillList: Skill[];
}
