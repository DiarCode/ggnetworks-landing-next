import { createInstance } from 'i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import { cookies } from 'next/headers'
import { initReactI18next } from 'react-i18next/initReactI18next'
import {
	FALLBACK_LOCALE,
	getOptions,
	LANGUAGE_COOKIE,
	Locales,
} from './i18n.config'

async function initI18next(lang: Locales) {
	const i18nInstance = createInstance()
	await i18nInstance
		.use(initReactI18next)
		.use(
			resourcesToBackend(
				// Get the JSON file that matches the locale and namespace
				(lang: string) => import(`../locales/${lang}.json`)
			)
		)
		// Initialize i18next with the options we created earlier
		.init(getOptions(lang))

	return i18nInstance
}

// This function will be used in our server components for the translation
export async function createTranslation(ns: string) {
	const lang = await getLocale()
	const i18nextInstance = await initI18next(lang)

	return {
		t: i18nextInstance.getFixedT(lang, Array.isArray(ns) ? ns[0] : ns),
	}
}

// Utility function to get the locale from server components
export async function getLocale() {
	return ((await cookies()).get(LANGUAGE_COOKIE)?.value ??
		FALLBACK_LOCALE) as Locales
}
