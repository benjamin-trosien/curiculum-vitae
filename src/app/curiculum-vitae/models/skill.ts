export interface Item {
    label: string,
    level: number,
}

export interface Skill {
    items: Item[];
    title: string;
}
