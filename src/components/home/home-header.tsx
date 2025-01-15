'use client'

import { useTranslation } from '@/i18n/i18n-client.config'
import Link from 'next/link'
import ChangeLocale from '../ui/change-locale'

const menuItems = [
	{ key: 'home', href: '#main' },
	{ key: 'services', href: '#services' },
	{ key: 'projects', href: '#projects' },
	{ key: 'certificates', href: '#certificates' },
	{ key: 'contacts', href: '#location' },
]

export const HomeHeader = () => {
	const { t } = useTranslation()

	return (
		<header className='top-0 z-10 sticky bg-white'>
			<nav className='border-gray-200 bg-white dark:bg-gray-800 px-4 lg:px-6 py-2.5'>
				<div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
					{/* Brand */}
					<Link href='/' className='flex items-center' aria-label='GGNetworks'>
						<span className='font-semibold text-xl whitespace-nowrap self-center'>
							GGNetworks
						</span>
					</Link>

					{/* Contact and Language Selector */}
					<div className='flex items-center lg:order-2'>
						<a
							href='tel:+7 7172 97 86 30'
							className='hover:bg-gray-50 dark:hover:bg-gray-700 mr-2 px-5 py-2.5 rounded-lg focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-800 font-medium text-base text-gray-800 dark:text-white focus:outline-none'
							rel='noopener'
						>
							+7 7172 97 86 30
						</a>

						<ChangeLocale />

						{/* Mobile Menu Toggle Button */}
						<button
							type='button'
							className='inline-flex items-center lg:hidden hover:bg-gray-100 dark:hover:bg-gray-700 ml-2 p-2 rounded-lg focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600 text-gray-500 text-sm dark:text-gray-400 focus:outline-none'
							aria-controls='mobile-menu'
							aria-expanded='false'
							aria-label={t('menu.toggle')}
						>
							<svg
								className='w-6 h-6'
								fill='currentColor'
								viewBox='0 0 20 20'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									fillRule='evenodd'
									d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
									clipRule='evenodd'
								/>
							</svg>
						</button>
					</div>

					{/* Menu Items */}
					<div
						id='mobile-menu'
						className='lg:flex justify-between items-center lg:order-1 hidden w-full lg:w-auto'
					>
						<ul className='flex lg:flex-row flex-col lg:space-x-8 mt-4 lg:mt-0 font-medium'>
							{menuItems.map(item => (
								<li key={item.key}>
									<Link
										href={item.href}
										className='block lg:border-0 dark:border-gray-700 lg:hover:bg-transparent lg:dark:hover:bg-transparent hover:bg-gray-50 dark:hover:bg-gray-700 py-2 lg:p-0 pr-4 pl-3 text-gray-700 lg:hover:text-primary lg:dark:hover:text-white dark:hover:text-white dark:text-gray-400'
									>
										{t(`menu.${item.key}`)}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			</nav>
		</header>
	)
}
