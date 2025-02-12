'use client'

import { projects } from '@/constants/projects-list'
import { useTranslation } from '@/i18n/i18n-client.config'
import Image from 'next/image'
import React from 'react'

export const HomeProjects: React.FC = () => {
	const { t } = useTranslation()

	return (
		<section id='projects' className='bg-gray-50 dark:bg-gray-800'>
			<div className='mx-auto px-4 lg:px-6 py-8 lg:py-16 max-w-screen-xl'>
				{/* Header Section */}
				<div className='mb-6 max-w-screen-lg text-gray-500 dark:text-gray-400 sm:text-lg'>
					<h2 className='mb-5 font-bold text-gray-900 dark:text-white text-4xl'>
						{t('projects.title')}
					</h2>
					<p className='font-light'>{t('projects.subtitle')}</p>
				</div>

				{/* Projects Grid */}
				<div className='gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
					{projects.map(project => (
						<div
							key={project.key}
							className='relative bg-gray-100 dark:bg-gray-700 hover:shadow-xl p-6 rounded-2xl transition-shadow duration-300'
						>
							<div className='relative flex justify-center items-center mb-6 w-28 h-28'>
								<Image
									src={project.logo}
									alt={t('projects.title')}
									width={100}
									height={100}
									className='rounded-xl w-28 h-28 object-contain'
								/>
							</div>
							<h3 className='mb-2 font-bold text-gray-900 dark:text-white text-lg'>
								{t(`projects.items.${project.key}.name`)}
							</h3>
							<p className='text-gray-500 dark:text-gray-300 text-sm'>
								{t(`projects.items.${project.key}.description`)}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
