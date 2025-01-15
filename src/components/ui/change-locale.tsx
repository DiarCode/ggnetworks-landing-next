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

export default function ChangeLocale() {
	const locale = useLocale()

	return (
		<Select value={locale} onValueChange={v => switchLocaleAction(v)}>
			<SelectTrigger className='flex gap-2 shadow-none border-none w-fit text-base'>
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
