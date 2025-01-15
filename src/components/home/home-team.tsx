'use client'

import { useTranslation } from '@/i18n/i18n-client.config'
import Image from 'next/image'
import React from 'react'

export const HomeTeam: React.FC = () => {
	const { t } = useTranslation()

	return (
		<section id='team' className='bg-white dark:bg-gray-900'>
			<div className='items-center gap-16 lg:grid lg:grid-cols-2 mx-auto px-4 lg:px-6 py-8 lg:py-16 max-w-screen-xl'>
				{/* Text Section */}
				<div className='font-light text-gray-500 sm:text-lg dark:text-gray-400'>
					<h2 className='mb-6 font-extrabold text-4xl text-gray-900 dark:text-white'>
						{t('teams.title')}
					</h2>
					<p className='mb-4'>{t('teams.paragraph1')}</p>
					<p>{t('teams.paragraph2')}</p>
				</div>

				{/* Image Section */}
				<div className='relative gap-4 grid grid-cols-2 mt-8'>
					<div className='relative rounded-lg overflow-hidden'>
						<Image
							src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png'
							alt={t('teams.imageAlt1')}
							width={800}
							height={400}
							className='w-full h-auto object-cover'
						/>
					</div>
					<div className='relative mt-4 lg:mt-10 rounded-lg overflow-hidden'>
						<Image
							src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png'
							alt={t('teams.imageAlt2')}
							width={800}
							height={400}
							className='w-full h-auto object-cover'
						/>
					</div>
				</div>
			</div>
		</section>
	)
}
