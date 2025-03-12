'use client'

import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import { useTranslation } from '@/i18n/i18n-client.config'
import { ChevronRight } from 'lucide-react'

export function PrivacyPolicyDialog() {
	const { t } = useTranslation()

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button
					className='px-6 py-6 text-base'
					aria-label={t('hero.buttonLabel')}
				>
					{t('hero.buttonText')}
					<ChevronRight />
				</Button>
			</DialogTrigger>
			<DialogContent className='sm:max-w-[425px]'>
				<DialogHeader>
					<DialogTitle>{t('contactDialog.title')}</DialogTitle>
					<DialogDescription>
						{t('contactDialog.description')}
					</DialogDescription>
				</DialogHeader>
				...text
			</DialogContent>
		</Dialog>
	)
}
