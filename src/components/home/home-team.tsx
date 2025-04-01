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
				<div className='font-light text-gray-500 dark:text-gray-400 sm:text-lg'>
					<h2 className='mb-6 font-extrabold text-gray-900 dark:text-white text-4xl'>
						{t('teams.title')}
					</h2>
					<p className='mb-4'>{t('teams.paragraph1')}</p>
					<p>{t('teams.paragraph2')}</p>
				</div>

				{/* Image Section */}
				<div className='relative gap-4 grid grid-cols-2 mt-8'>
					<div className='relative overflow-hidden'>
						<Image
							src='/img/team/team_1.webp'
							alt={t('teams.imageAlt1')}
							width={800}
							height={400}
							className='rounded-xl object-cover'
						/>
					</div>
					<div className='relative mt-4 lg:mt-10 overflow-hidden'>
						<Image
							src='/img/team/team_2.webp'
							alt={t('teams.imageAlt2')}
							width={800}
							height={400}
							className='rounded-xl object-cover'
						/>
					</div>
				</div>
			</div>
		</section>
	)
}
