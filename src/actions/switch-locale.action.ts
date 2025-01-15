'use server'

import { LANGUAGE_COOKIE } from '@/i18n/i18n.config'
import { cookies } from 'next/headers'

export async function switchLocaleAction(value: string) {
	const cookiesRequest = await cookies()
	cookiesRequest.set(LANGUAGE_COOKIE, value)

	return {
		status: 'success',
	}
}
