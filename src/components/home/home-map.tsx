'use client'

import { useTranslation } from '@/i18n/i18n-client.config'
import Link from 'next/link'
import React from 'react'

export const HomeMap: React.FC = () => {
	const { t } = useTranslation()

	const handleMapClick = () => {
		window.open(process.env.SMTP_PORT ?? 'https://go.2gis.com/BBmvc', '_blank')
	}

	return (
		<section
			id='location'
			className='bg-gray-50 dark:bg-gray-800 py-8 lg:py-16'
		>
			<div className='mx-auto px-4 lg:px-6 max-w-screen-xl'>
				{/* Header Section */}
				<div className='mb-8 text-center'>
					<h2 className='font-extrabold text-gray-900 dark:text-white text-4xl'>
						{t('map.title')}
					</h2>
					<p className='mt-3 text-gray-500 dark:text-gray-400 text-lg'>
						{t('map.subtitle')}
					</p>
				</div>

				{/* Map Section */}
				<div
					className='group relative border border-gray-300 dark:border-gray-700 rounded-2xl overflow-hidden cursor-pointer'
					onClick={handleMapClick}
				>
					{/* Overlay hint (optional) */}
					<div className='group-hover:bg-black/5 z-20 absolute inset-0 bg-transparent transition' />

					{/* Links Section */}
					<div className='top-0 left-0 z-30 absolute p-2 text-gray-300 text-xs pointer-events-none'>
						<Link
							href='https://yandex.kz/maps/ru/org/ggnetworks/231481640396/?lang=ru&utm_medium=mapframe&utm_source=maps'
							className='block hover:underline'
							target='_blank'
							rel='noopener noreferrer'
						>
							{t('map.links.office')}
						</Link>
						<Link
							href='https://yandex.kz/maps/ru/163/astana/category/network_equipment/184107775/?lang=ru&utm_medium=mapframe&utm_source=maps'
							className='block hover:underline'
							target='_blank'
							rel='noopener noreferrer'
						>
							{t('map.links.networkEquipment')}
						</Link>
						<Link
							href='https://yandex.kz/maps/ru/163/astana/category/telecommunication_equipment/184107777/?lang=ru&utm_medium=mapframe&utm_source=maps'
							className='block hover:underline'
							target='_blank'
							rel='noopener noreferrer'
						>
							{t('map.links.telecommunicationEquipment')}
						</Link>
					</div>

					{/* Map Iframe */}
					<iframe
						src='https://yandex.kz/map-widget/v1/?indoorLevel=1&ll=71.422577%2C51.128353&mode=search&oid=231481640396&ol=biz&sctx=ZAAAAAgBEAAaKAoSCW3%2BX3Xk21FAEZLmj2ltkklAEhIJ8bkT7L%2FO5j8R6Gor9pfdxT8iBgABAgMEBSgKOABAowFIAWoCa3qdAc3MTD2gAQCoAQC9AbrDUHzCAQbMi4ar3gaCAgpHR05FdHdvcmtzigIAkgIAmgIMZGVza3RvcC1tYXBz&sll=71.422577%2C51.128353&sspn=0.026304%2C0.006307&text=GGNEtworks&z=16.76'
						width='100%'
						height='400'
						className='z-10 relative pointer-events-auto'
						allowFullScreen
					></iframe>
				</div>

				{/* Address Section */}
				<div className='mt-8 text-center'>
					<p className='text-gray-600 dark:text-gray-400 text-lg'>
						{t('map.address')}
					</p>
					<p className='text-gray-600 dark:text-gray-400 text-lg'>
						{t('map.contact')}{' '}
						<Link
							href='tel:+77172978630'
							className='text-primary hover:underline'
						>
							+7 7172 97 86 30
						</Link>
					</p>
				</div>
			</div>
		</section>
	)
}
