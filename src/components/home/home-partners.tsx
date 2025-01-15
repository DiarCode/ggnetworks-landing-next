'use client'

import { useTranslation } from '@/i18n/i18n-client.config'
import Image from 'next/image'
import React from 'react'

interface Partner {
	name: string
	href: string
	src: string
	alt: string
	height: number
}

const partners: Partner[] = [
	{
		name: 'Cisco',
		href: 'https://www.cisco.com/',
		src: '/img/partners/cisco.png',
		alt: 'partners.cisco.alt',
		height: 56,
	},
	{
		name: 'Huawei',
		href: 'https://consumer.huawei.com/kz',
		src: '/img/partners/huawei.png',
		alt: 'partners.huawei.alt',
		height: 84,
	},
	{
		name: 'Juniper',
		href: 'https://www.juniper.net',
		src: '/img/partners/juniper.png',
		alt: 'partners.juniper.alt',
		height: 84,
	},
	{
		name: 'Kaspersky',
		href: 'https://www.kaspersky.kz',
		src: '/img/partners/kaspersky.png',
		alt: 'partners.kaspersky.alt',
		height: 84,
	},
	{
		name: 'Palo Alto Networks',
		href: 'https://www.paloaltonetworks.com/',
		src: '/img/partners/paloalto.png',
		alt: 'partners.paloalto.alt',
		height: 84,
	},
	{
		name: 'ZTE',
		href: 'https://www.zte.com.cn/global',
		src: '/img/partners/zte.png',
		alt: 'partners.zte.alt',
		height: 40,
	},
]

export const HomePartners: React.FC = () => {
	const { t } = useTranslation()

	return (
		<section id='partners' className='bg-white dark:bg-gray-900'>
			<div className='mx-auto px-4 py-8 lg:py-16 max-w-screen-xl'>
				<h2 className='mb-8 lg:mb-16 font-extrabold text-3xl text-center text-gray-900 md:text-4xl dark:text-white leading-tight tracking-tight'>
					{t('partners.title')}
				</h2>
				<div className='gap-8 sm:gap-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 text-gray-500 dark:text-gray-400'>
					{partners.map(partner => (
						<a
							key={partner.name}
							href={partner.href}
							target='_blank'
							rel='noopener noreferrer'
							aria-label={t(`partners.${partner.name.toLowerCase()}.aria`)}
							className='relative flex justify-center items-center transition-transform duration-200 hover:scale-105'
						>
							<Image
								src={partner.src}
								alt={t(partner.alt)}
								height={partner.height}
								width={partner.height * 2}
								className='w-auto h-auto object-contain'
								priority
							/>
						</a>
					))}
				</div>
			</div>
		</section>
	)
}
