import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '**',
			},
		],
	},
	experimental: {
		serverActions: {
			allowedOrigins: ['*', 'localhost:3000', 'localhost:5080'],
		},
	},
}

export default nextConfig
