'use client'

import { useTranslation } from '@/i18n/i18n-client.config'
import Link from 'next/link'
import React from 'react'

const contact = {
	phone: '+7-7172-97-86-30',
	email: 'info@ggnetworks.kz',
}

const socialLinks = [
	{
		platformKey: 'footer.social.instagram',
		href: 'https://www.instagram.com/ggnetworks_llp/',
	},
]

const legal = [
	{ labelKey: 'footer.legal.privacyPolicy', href: '/terms/privacy' },
	{ labelKey: 'footer.legal.servicePolicy', href: '/terms/service' },
]

export const HomeFooter: React.FC = () => {
	const { t } = useTranslation()
	const currentYear = new Date().getFullYear()

	return (
		<footer className='bg-gray-50 dark:bg-gray-800 p-4 sm:p-6'>
			<div className='mx-auto max-w-screen-xl'>
				<div className='flex justify-between'>
					{/* Brand and Contact Section */}
					<div className='mb-6 md:mb-0'>
						<Link href='/' className='flex items-center'>
							<span className='font-semibold dark:text-white text-2xl whitespace-nowrap'>
								GGNetworks
							</span>
						</Link>
						<div className='flex flex-col gap-1 mt-3'>
							<a
								className='text-gray-600 dark:text-gray-400 hover:underline'
								href={`tel:${contact.phone}`}
							>
								{contact.phone}
							</a>
							<a
								className='text-gray-600 dark:text-gray-400 hover:underline'
								href={`mailto:${contact.email}`}
							>
								{contact.email}
							</a>
						</div>
					</div>

					{/* Links Section */}
					<div className='gap-8 sm:gap-6 grid grid-cols-2'>
						{/* Follow Us */}
						<div>
							<h2 className='mb-6 font-semibold text-gray-900 dark:text-white text-sm uppercase'>
								{t('footer.followUs')}
							</h2>
							<ul className='text-gray-600 dark:text-gray-400'>
								{socialLinks.map(({ platformKey, href }, index) => (
									<li key={index} className='mb-4'>
										<a
											href={href}
											target='_blank'
											rel='noopener noreferrer'
											className='flex items-center space-x-2 hover:underline'
										>
											<span>{t(platformKey)}</span>
										</a>
									</li>
								))}
							</ul>
						</div>

						{/* Legal Info */}
						<div>
							<h2 className='mb-6 font-semibold text-gray-900 dark:text-white text-sm uppercase'>
								{t('footer.legal.title')}
							</h2>
							<ul className='text-gray-600 dark:text-gray-400'>
								{legal.map(({ labelKey, href }, index) => (
									<li key={index} className='mb-4'>
										<a href={href} className='hover:underline'>
											{t(labelKey)}
										</a>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>

				<hr className='sm:mx-auto my-6 lg:my-8 border-gray-200 dark:border-gray-700' />

				{/* Footer Bottom Section */}
				<div className='sm:flex sm:justify-start sm:items-center'>
					<span className='text-gray-500 dark:text-gray-400 text-sm sm:text-center'>
						© {currentYear} GGNetworks. {t('footer.rightsReserved')}
					</span>
				</div>
			</div>
		</footer>
	)
}
