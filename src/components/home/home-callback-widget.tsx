'use client'

import { useLocale } from '@/providers/locale.provider'
import Script from 'next/script'
import { useEffect } from 'react'

const tokens = {
	kk: '2fe2d97d-915d-4e4d-abc8-123f7c267ba2',
	ru: '144e53b5-575c-425d-9e22-c3415e6f06ab',
	en: '684a6d9d-ffdf-4abc-8b97-bb24228bc866',
}

const locales = {
	kk: 'KZ',
	ru: 'RU',
	en: 'EN',
}

const CallbackWidget = () => {
	const locale = useLocale()

	useEffect(() => {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		;(window as any).callbackWidget = {
			language: locales[locale],
			domain: 'pbx.ggnet.kz',
			protocol: 'https://',
			token: tokens[locale],
			webSocket: {
				protocol: 'wss://',
				path: '/ws',
				port: 8089,
			},
			text: {
				method: {
					RU: 'Пожалуйста, выберите способ вызова',
					EN: 'Please select a call method',
					KZ: 'Қоңырау әдісін таңдаңыз',
				},
				webcall: {
					select: {
						RU: 'Звонок из браузера',
						EN: 'Call from browser',
						KZ: 'Браузерден қоңырау шалу',
					},
					confirm: {
						RU: 'Начать звонок из браузера',
						EN: 'Start a call from browser',
						KZ: 'Браузерден қоңырау шалу бастау',
					},
					alert: {
						RU: 'Пожалуйста, убедитесь, что у вас подключен микрофон и наушники',
						EN: 'Please make sure you have a microphone and headphones connected',
						KZ: 'Микрофон мен құлақаспап қосылғанына көз жеткізіңіз',
					},
					dial: {
						RU: 'Вызов в процессе',
						EN: 'Call in progress',
						KZ: 'Қоңырау орындалуда',
					},
					hangup: {
						RU: 'Прекратить вызов',
						EN: 'Hang up',
						KZ: 'Қоңырауды аяқтау',
					},
					error: {
						RU: 'Вызов не может быть установлен',
						EN: 'The call cannot be established',
						KZ: 'Қоңырауды орнату мүмкін емес',
					},
				},
				callback: {
					select: {
						RU: 'Запросить звонок на мобильный',
						EN: 'Request a mobile phone call',
						KZ: 'Ұялы телефон қоңырауын сұраңыз',
					},
					info: {
						RU: 'Введите Ваш номер телефона, мы перезвоним вам',
						EN: 'Enter your phone number, we will call you back',
						KZ: 'Телефон нөміріңізді енгізіңіз, біз сізге хабарласамыз',
					},
					button: {
						RU: 'Позвоните мне!',
						EN: 'Call me!',
						KZ: 'Маған хабарласыңыз!',
					},
					result: {
						RU: 'Ожидайте вызов',
						EN: 'Waiting for a call',
						KZ: 'Қоңырау күтіңіз',
					},
				},
			},
			close: false,
			phoneMask: {
				mask: '+{7} (000) 000-00-00',
				lazy: false,
				placeholderChar: '_',
			},
			style: 'RightBlue',
			enable: true,
			init: true,
			onHide: null,
			onFormClose: null,
			onFormOpen: null,
		}
	}, [locale])

	return (
		<Script
			id={locale}
			src='https://pbx.ggnet.kz/api/Callback/index.js'
			type='module'
			strategy='lazyOnload'
		/>
	)
}

export default CallbackWidget
