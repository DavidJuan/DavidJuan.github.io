export class Contact {
    name: string;
    email: string;
    message: string;
    date: Date;
    honeypot?: string; // hidden field that only bots fill in
}
