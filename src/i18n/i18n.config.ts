import type { InitOptions } from 'i18next'

export const FALLBACK_LOCALE = 'ru'
export const supportedLocales = ['ru', 'en', 'kk'] as const
export type Locales = (typeof supportedLocales)[number]

// You can name the cookie to whatever you want
export const LANGUAGE_COOKIE = 'GGNETWORKS_LANG'

export function getOptions(lang = FALLBACK_LOCALE): InitOptions {
	return {
		// debug: true, // Set to true to see console logs
		supportedLngs: supportedLocales,
		fallbackLng: FALLBACK_LOCALE,
		lng: lang,
	}
}
