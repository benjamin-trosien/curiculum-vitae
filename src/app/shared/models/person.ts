export interface Item {
    label: string,
    level: number,
}

export interface Skill {
    items: Item[];
    title: string;
}

export interface Career {
    employer: string;
    end?: string;
    start?: string;
    tasks?: string[];
    title: string;
}

export interface Person {
    career: Career[];
    degreeList: Career[];
    education: Career[];
    interestList: Career[];
    name: string;
    personal: { [ key: string ]: string }[];
    photo: string;
    title: string;
    skillList: Skill[];
}
