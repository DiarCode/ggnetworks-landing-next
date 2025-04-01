'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { toast } from '@/hooks/use-toast'
import { useTranslation } from '@/i18n/i18n-client.config'
import { Ticket } from '@/services/tickets.service'
import { parsePhoneNumberFromString } from 'libphonenumber-js'
import { ChevronRight, Loader2 } from 'lucide-react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const FormSchema = z.object({
	fullName: z
		.string()
		.min(2, { message: 'contactDialog.validation.fullName.minLength' }),
	phone: z.string().refine(
		val => {
			const phoneNumber = parsePhoneNumberFromString(`+${val}`)
			return phoneNumber?.isValid()
		},
		{ message: 'contactDialog.validation.phone.invalid' }
	),
	message: z
		.string()
		.min(5, { message: 'contactDialog.validation.message.minLength' }),
})

export function HomeContactDialog() {
	const { t } = useTranslation()
	const [loading, setLoading] = useState(false)
	const [open, setOpen] = useState(false)

	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
	})

	async function onSubmit(data: z.infer<typeof FormSchema>) {
		setLoading(true)

		const ticket: Ticket = {
			name: data.fullName,
			phone: `+${data.phone}`,
			message: data.message,
		}

		try {
			const response = await fetch('/api/contacts', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(ticket),
			})

			if (!response.ok) {
				throw new Error('Failed to send ticket')
			}

			toast({
				title: t('contactDialog.toast.successTitle'),
				description: t('contactDialog.toast.successDescription'),
			})

			form.reset()
			setOpen(false)
		} catch (error) {
			console.error('Ticket submission error:', error)
			toast({
				title: t('contactDialog.toast.errorTitle'),
				description: t('contactDialog.toast.errorDescription'),
				variant: 'destructive',
			})
		} finally {
			setLoading(false)
		}
	}

	return (
		<Dialog open={open} onOpenChange={setOpen}>
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
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
						{/* Full Name */}
						<FormField
							control={form.control}
							name='fullName'
							render={({ field, fieldState }) => (
								<FormItem>
									<FormLabel>{t('contactDialog.fullNameLabel')}</FormLabel>
									<FormControl>
										<Input
											placeholder={t('contactDialog.fullNamePlaceholder')}
											{...field}
											disabled={loading}
										/>
									</FormControl>
									{fieldState.error?.message && (
										<p className='text-red-500 text-sm'>
											{t(fieldState.error.message)}
										</p>
									)}
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name='phone'
							render={({ field, fieldState }) => (
								<FormItem>
									<FormLabel>{t('contactDialog.phoneLabel')}</FormLabel>
									<FormControl>
										<PhoneInput
											country='kz'
											placeholder={t('contactDialog.phonePlaceholder')}
											disabled={loading}
											inputClass='min-w-full !border !border-input !bg-transparent !shadow-sm !placeholder:text-muted-foreground'
											containerClass='!rounded-md'
											buttonClass='!bg-slate-50 !border-input'
											value={field.value}
											onChange={value => field.onChange(value)}
											inputProps={{
												name: field.name,
												disabled: loading,
											}}
										/>
									</FormControl>
									{fieldState.error?.message && (
										<p className='text-red-500 text-sm'>
											{t(fieldState.error.message)}
										</p>
									)}
								</FormItem>
							)}
						/>

						{/* Message */}
						<FormField
							control={form.control}
							name='message'
							render={({ field, fieldState }) => (
								<FormItem>
									<FormLabel>{t('contactDialog.messageLabel')}</FormLabel>
									<FormControl>
										<Textarea
											placeholder={t('contactDialog.messagePlaceholder')}
											{...field}
											disabled={loading}
										/>
									</FormControl>
									{fieldState.error?.message && (
										<p className='text-red-500 text-sm'>
											{t(fieldState.error.message)}
										</p>
									)}
								</FormItem>
							)}
						/>

						{/* Footer */}
						<DialogFooter>
							<Button type='submit' disabled={loading}>
								{loading ? (
									<>
										<Loader2 className='animate-spin' />
									</>
								) : (
									t('contactDialog.submitButton')
								)}
							</Button>
						</DialogFooter>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	)
}
