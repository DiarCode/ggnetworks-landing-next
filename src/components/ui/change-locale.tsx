'use client'

import { switchLocaleAction } from '@/actions/switch-locale.action'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { useLocale } from '@/providers/locale.provider'
import { useTransition } from 'react'

export default function ChangeLocale() {
	const locale = useLocale()
	const [isPending, startTransition] = useTransition()

	const handleChange = (value: string) => {
		startTransition(async () => {
			await switchLocaleAction(value)
			window.location.reload()
		})
	}

	return (
		<Select value={locale} onValueChange={handleChange} disabled={isPending}>
			<SelectTrigger className='flex gap-2 shadow-none border-none w-fit font-medium text-gray-800 dark:text-white text-base'>
				<SelectValue />
			</SelectTrigger>
			<SelectContent>
				<SelectItem value='ru'>Русский</SelectItem>
				<SelectItem value='en'>English</SelectItem>
				<SelectItem value='kk'>Қазақ тілі</SelectItem>
			</SelectContent>
		</Select>
	)
}
