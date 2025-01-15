'use client'

import { useTranslation } from '@/i18n/i18n-client.config'
import {
	LayoutDashboard,
	LucideIcon,
	Phone,
	Server,
	Shield,
	Thermometer,
	Video,
} from 'lucide-react'
import React from 'react'

interface Service {
	icon: LucideIcon
	key: string
}

const services: Service[] = [
	{ icon: Server, key: 'dataCenters' },
	{ icon: Shield, key: 'dataProtection' },
	{ icon: Thermometer, key: 'infrastructure' },
	{ icon: Video, key: 'videoSurveillance' },
	{ icon: LayoutDashboard, key: 'dispatching' },
	{ icon: Phone, key: 'ipTelephony' },
]

export const HomeServices: React.FC = () => {
	const { t } = useTranslation()

	return (
		<section id='services' className='bg-gray-50 dark:bg-gray-800'>
			<div className='mx-auto px-4 lg:px-6 py-8 sm:py-16 max-w-screen-xl'>
				<div className='mb-8 lg:mb-16 max-w-screen-md'>
					<h2 className='mb-4 font-extrabold text-4xl text-gray-900 dark:text-white'>
						{t('services.title')}
					</h2>
					<p className='!text-lg text-gray-500 sm:text-xl dark:text-gray-400'>
						{t('services.subtitle')}
					</p>
				</div>
				<div className='md:gap-12 space-y-8 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3'>
					{services.map((service, index) => (
						<div key={index}>
							<div className='flex justify-center items-center bg-primary/10 dark:bg-primary-900 mb-4 rounded-full w-10 lg:w-12 h-10 lg:h-12'>
								<service.icon className='w-5 lg:w-6 h-5 lg:h-6 text-primary dark:text-primary' />
							</div>
							<h3 className='mb-2 font-bold text-xl dark:text-white'>
								{t(`services.items.${service.key}.title`)}
							</h3>
							<p className='text-gray-500 dark:text-gray-400'>
								{t(`services.items.${service.key}.description`)}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
