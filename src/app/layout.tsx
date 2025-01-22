import { Toaster } from '@/components/ui/toaster'
import { createTranslation, getLocale } from '@/i18n/i18n-server.config'
import { LocaleProvider } from '@/providers/locale.provider'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const montserratSans = Montserrat({
	variable: '--font-montserrat-sans',
	subsets: ['latin', 'cyrillic'],
})

export async function generateMetadata(): Promise<Metadata> {
	const { t } = await createTranslation()

	const title = t('seo.title')
	const description = t('seo.description')
	const keywords = t('seo.keywords')

	return {
		title: title,
		description: description,
		keywords: keywords,
		openGraph: {
			title: title,
			description: description,
			type: 'website',
			url: 'https://ggnetworks.kz/',
		},
		twitter: {
			title: title,
			description: description,
		},
		alternates: {
			canonical: 'https://ggnetworks.kz/',
		},
	}
}

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const locale = await getLocale()

	return (
		<html lang={locale}>
			<body className={`${montserratSans.variable} antialiased`}>
				<LocaleProvider value={locale}>
					<Toaster />
					{children}
				</LocaleProvider>
			</body>
		</html>
	)
}
