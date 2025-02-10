'use client'

import { useTranslation } from '@/i18n/i18n-client.config'
import Image from 'next/image'
import React from 'react'

interface Project {
	logo: string
	alt: string
	key: string
}

const projects: Project[] = [
	{
		logo: '/img/projects/ktz-logo.svg',
		alt: 'project.ktz.alt',
		key: 'ktz',
	},
	{
		logo: '/img/projects/kaztemirtrans-logo.webp',
		alt: 'project.kaztemirtrans.alt',
		key: 'kaztemirtrans',
	},
	{
		logo: '/img/projects/ttk-logo.svg',
		alt: 'project.ttk.alt',
		key: 'ttk',
	},
	{
		logo: '/img/projects/cik-logo.webp',
		alt: 'project.cik.alt',
		key: 'cik',
	},
	{
		logo: '/img/projects/airastana-logo.png',
		alt: 'project.airastana.alt',
		key: 'airastana',
	},
	{
		logo: '/img/projects/astanatower-logo.png',
		alt: 'project.astanatower.alt',
		key: 'astanatower',
	},
	{
		logo: '/img/projects/marriott-logo.png',
		alt: 'project.marriott.alt',
		key: 'marriott',
	},
]

export const HomeProjects: React.FC = () => {
	const { t } = useTranslation()

	return (
		<section id='projects' className='bg-gray-50 dark:bg-gray-800'>
			<div className='mx-auto px-4 lg:px-6 py-8 lg:py-16 max-w-screen-xl'>
				{/* Header Section */}
				<div className='mb-6 max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400'>
					<h2 className='mb-5 font-bold text-4xl text-gray-900 dark:text-white'>
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
									alt={t(project.alt)}
									width={112}
									height={112}
									className='w-28 h-28 object-contain'
								/>
							</div>
							<h3 className='mb-2 font-bold text-gray-900 text-xl dark:text-white'>
								{t(`projects.items.${project.key}.name`)}
							</h3>
							<p className='text-gray-500 dark:text-gray-300'>
								{t(`projects.items.${project.key}.description`)}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
