'use client'

import { zodResolver } from '@hookform/resolvers/zod'
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
import { ChevronRight } from 'lucide-react'

const FormSchema = z.object({
	fullName: z
		.string()
		.min(2, { message: 'contactDialog.validation.fullName.minLength' }),
	email: z
		.string()
		.email({ message: 'contactDialog.validation.email.invalid' }),
	message: z
		.string()
		.min(10, { message: 'contactDialog.validation.message.minLength' }),
})

export function HomeContactDialog() {
	const { t } = useTranslation()

	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
	})

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	function onSubmit(data: z.infer<typeof FormSchema>) {
		toast({
			title: t('contactDialog.toast.title'),
			description: t('contactDialog.toast.description'),
		})
	}

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

						{/* Email */}
						<FormField
							control={form.control}
							name='email'
							render={({ field, fieldState }) => (
								<FormItem>
									<FormLabel>{t('contactDialog.emailLabel')}</FormLabel>
									<FormControl>
										<Input
											type='email'
											placeholder={t('contactDialog.emailPlaceholder')}
											{...field}
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
							<Button type='submit'>{t('contactDialog.submitButton')}</Button>
						</DialogFooter>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	)
}
