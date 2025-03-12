'use client'

import { useTranslation } from '@/i18n/i18n-client.config'
import Link from 'next/link'
import { useState } from 'react'

const menuItems = [
	{ key: 'home', href: '/#main' },
	{ key: 'services', href: '/#services' },
	{ key: 'certificates', href: '/#certificates' },
	{ key: 'projects', href: '/#projects' },
	{ key: 'contacts', href: '/#location' },
]

export const PolicyHeader = () => {
	const { t } = useTranslation()
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const toggleMenu = () => {
		setIsMenuOpen(prev => !prev)
	}

	return (
		<header className='top-0 z-10 sticky sm:py-2'>
			<nav className='bg-white bg-opacity-50 backdrop-blur-sm mx-auto px-4 sm:px-6 py-4 rounded-[32px] max-w-screen-xl'>
				<div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
					{/* Brand */}
					<Link href='/' className='flex items-center' aria-label='GGNetworks'>
						<span className='self-center font-semibold text-xl whitespace-nowrap'>
							GGNetworks
						</span>
					</Link>

					<ul className='hidden lg:flex space-x-6 font-medium'>
						{menuItems.map(item => (
							<li key={item.key}>
								<Link
									href={item.href}
									className='text-gray-700 hover:text-primary dark:hover:text-white dark:text-gray-400'
								>
									{t(`menu.${item.key}`)}
								</Link>
							</li>
						))}
					</ul>

					{/* Phone and Locale Switcher */}
					<div className='hidden lg:flex items-center space-x-4'>
						<a
							href='tel:+7 7172 97 86 30'
							className='font-medium text-gray-800 dark:text-white hover:underline'
						>
							+7 7172 97 86 30
						</a>
					</div>

					{/* Mobile Menu Toggle Button */}
					<button
						type='button'
						className='lg:hidden inline-flex items-center hover:bg-gray-100 dark:hover:bg-gray-700 ml-2 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600 text-gray-500 dark:text-gray-400 text-sm'
						onClick={toggleMenu}
						aria-controls='mobile-menu'
						aria-expanded={isMenuOpen}
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

				{/* Mobile Menu */}
				{isMenuOpen && (
					<div
						id='mobile-menu'
						className='lg:hidden flex flex-col items-center space-y-4 mt-4'
					>
						{/* Mobile Navigation Menu */}
						<ul className='flex flex-col items-center space-y-4'>
							{menuItems.map(item => (
								<li key={item.key}>
									<Link
										href={item.href}
										className='block hover:bg-gray-50 dark:hover:bg-gray-700 px-4 py-2 dark:border-gray-700 text-gray-900 hover:text-primary dark:hover:text-white dark:text-gray-400'
										onClick={() => setIsMenuOpen(false)} // Close menu on click
									>
										{t(`menu.${item.key}`)}
									</Link>
								</li>
							))}
						</ul>

						{/* Mobile Phone and Locale Switcher */}
						<div className='flex flex-col items-center space-y-2 p-2 border-b rounded-xl w-full'>
							<a
								href='tel:+7 7172 97 86 30'
								className='font-medium text-gray-800 dark:text-white hover:underline'
							>
								+7 7172 97 86 30
							</a>
						</div>
					</div>
				)}
			</nav>
		</header>
	)
}
