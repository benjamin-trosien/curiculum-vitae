export enum SkillType {
    LEVEL,
    VALUE,
}

export interface Skill {
    items: {
        label: string,
        level?: 1 | 2 | 3 | 4 | 5,
        value?: string,
    }[];
    title?: string;
    type: SkillType,
}
