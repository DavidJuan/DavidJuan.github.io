export interface ISkills {
    internationalizations: ISkillsInternationalization[];
}

export interface ISkillsInternationalization {
    language: string;
    title: string;
    synopsis: string;
    categories: ISkillCategory[];
    certificationsTitle: string;
    certifications: { title: string; issuer?: string }[];
    educationTitle: string;
    education: { title: string; institution: string; period: string }[];
    languagesTitle: string;
    languages: { title: string; level: string }[];
}

export interface ISkillCategory {
    icon: string; // Font Awesome solid icon name
    title: string;
    items: string[];
}
