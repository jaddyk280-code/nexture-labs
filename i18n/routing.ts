import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
    // List of all locales that are supported
    locales: ['ko', 'en'],

    // Default locale - Korean
    defaultLocale: 'ko',

    // Locale detection from browser Accept-Language header
    localeDetection: true,

    // Don't show /ko prefix for Korean (default locale)
    localePrefix: 'as-needed'
});
