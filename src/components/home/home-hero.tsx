'use client'

import { useTranslation } from '@/i18n/i18n-client.config'
import Image from 'next/image'
import { HomeContactDialog } from './home-contact-dialog'

export const HomeHero: React.FC = () => {
	const { t } = useTranslation()

	return (
		<section id='main' className='bg-white dark:bg-gray-900'>
			<div className='lg:gap-8 xl:gap-6 grid lg:grid-cols-12 mx-auto px-4 sm:px-6 max-w-screen-xl'>
				{/* Text Section */}
				<div className='place-self-center lg:col-span-6 mr-auto'>
					<h1 className='mb-6 max-w-2xl font-bold dark:text-white text-4xl md:text-5xl'>
						{t('hero.title')}
					</h1>
					<p className='mb-6 lg:mb-8 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:text-xl'>
						{t('hero.subtitle')}
					</p>
					<HomeContactDialog />
				</div>

				{/* Image Section */}
				<div className='hidden relative lg:flex lg:col-span-6 lg:mt-0'>
					<Image
						src='/img/hero.jpg'
						alt={t('hero.imageAlt')}
						width={700}
						height={700}
						priority
						className='rounded-lg w-full object-cover'
					/>
				</div>
			</div>
		</section>
	)
}
