'use client'

import { PolicyHeader } from '@/components/policy/policy-header'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
	{ label: 'Политика конфиденциальности', link: '/terms/privacy' },
	{ label: 'Пользовательское соглашение', link: '/terms/service' },
]

export default function PolicyLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const pathname = usePathname()

	return (
		<div className='relative bg-white w-full min-h-screen'>
			<PolicyHeader />

			<div className='flex md:flex-row flex-col gap-6 mx-auto p-6 max-w-screen-xl'>
				<aside className='top-20 sticky bg-white shadow-xl px-5 py-4 rounded-2xl w-fit h-fit'>
					<nav className='flex flex-col space-y-2'>
						{links.map(({ label, link }) => (
							<Link
								key={link}
								href={link}
								className={`p-2 rounded-xl transition-all ${
									pathname === link
										? 'bg-blue-500 text-white'
										: 'text-gray-700 hover:bg-gray-100'
								}`}
							>
								{label}
							</Link>
						))}
					</nav>
				</aside>
				<main className='flex-1 mx-auto px-6'>{children}</main>
			</div>
		</div>
	)
}
