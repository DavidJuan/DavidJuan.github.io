export interface IAbout {
    contact?: IAboutContact;
    internationalizations: IAboutInternationalization[];
    medias?: IAboutMedia[];
}

export interface IAboutContact {
    name: string;
    email: string;
    phone?: string;
    linkedin?: string;
    github?: string;
    portfolio?: string;
}

export interface IAboutInternationalization {
    language: string;
    kicker: string;
    headline: string;
    tagline: string;
    location: string;
    description: string;
    metrics?: IAboutMetric[];
    cv: {
        download: string;
        other: string;
    };
}

export interface IAboutMetric {
    value: string;
    label: string;
}

export interface IAboutMedia {
    icon: string; // Use the official names of Brand Icons (https://www.w3schools.com/icons/fontawesome_icons_brand.asp)
    title: string;
    http: string;
}
