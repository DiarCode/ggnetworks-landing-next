declare global {
	interface Window {
		callbackWidget?: {
			initialization?: () => void
			remove?: () => void
			reload?: () => void
			setLanguage?: (language: string) => void
			setStyle?: (style: string) => void
			token?: string
			language?: string
			domain: string
			protocol: string
			webSocket: {
				protocol: string
				path: string
				port: number
			}
			style: string
			enable: boolean
			init: boolean
		}
	}
}

export {}
