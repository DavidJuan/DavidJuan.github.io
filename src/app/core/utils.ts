export function debounce(delay: number = 300): MethodDecorator {

    let interval;
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const original = descriptor.value;
        descriptor.value = function (...args) {
        clearTimeout(interval);

        interval = setTimeout(() => {
            interval = null;
            original.apply(this, args);
          }, delay);
        };

        return interval;
    };
}

/*
 * Returns the entry of an "internationalizations" list that matches the given locale,
 * falling back to English when the locale is not available.
 */
export function pickLocale<T extends { language: string }>(entries: T[], locale: string): T {
    if (!entries) {
        return undefined;
    }
    return entries.find(entry => entry.language === locale)
        || entries.find(entry => entry.language === "en")
        || entries[0];
}

export interface IResumeFile {
    href: string;
    fileName: string;
}

/*
 * Resume (CV) PDF for each locale. Both files are shipped with every locale build,
 * so a relative "assets/" path works from /en/ and /pt/ alike.
 */
export function resumeFile(locale: string): IResumeFile {
    return locale === "pt"
        ? { href: "assets/David-Juan-pt.pdf", fileName: "David-Juan-Curriculo-Engenheiro-de-Software-Senior-NET.pdf" }
        : { href: "assets/David-Juan-en.pdf", fileName: "David-Juan-Resume-Senior-Software-Engineer-NET.pdf" };
}
