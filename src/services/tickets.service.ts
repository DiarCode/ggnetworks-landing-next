import nodemailer from 'nodemailer'

export interface Ticket {
	name: string
	phone: string
	message: string
}

class TicketsService {
	private transporter = nodemailer.createTransport({
		host: process.env.SMTP_HOST,
		port: Number(process.env.SMTP_PORT),
		secure: process.env.SMTP_SECURE === 'true',
		auth: {
			user: process.env.SMTP_USER,
			pass: process.env.SMTP_PASS,
		},
	})

	private readonly telegramBotToken = process.env.TELEGRAM_BOT_TOKEN
	private readonly telegramChatId = process.env.TELEGRAM_CHAT_ID

	constructor() {
		if (!this.telegramBotToken || !this.telegramChatId) {
			console.error('Ошибка: TELEGRAM_BOT_TOKEN или TELEGRAM_CHAT_ID не заданы')
		}
	}

	// Helper function to format date in Russian locale
	private getFormattedDate(): string {
		return new Date().toLocaleDateString('ru-RU', {
			day: '2-digit',
			month: '2-digit',
			year: 'numeric',
			hour: '2-digit',
			minute: '2-digit',
			timeZoneName: 'short',
		})
	}

	// Escape special characters for Markdown (Telegram)
	private escapeMarkdown(text: string): string {
		return text.replace(/([_*`\[\]()])/g, '\\$1')
	}

	// Send email using Nodemailer
	private async sendEmail(ticket: Ticket): Promise<void> {
		const formattedDate = this.getFormattedDate()
		const mailOptions = {
			from: `"Техническая поддержка GG Networks" <${process.env.SMTP_USER}>`,
			to: process.env.COMPANY_EMAIL,
			subject: `Новый тикет от клиента (${formattedDate})`,
			text: `Дата: ${formattedDate}\nИмя клиента: ${ticket.name}\nТелефон: ${ticket.phone}\nСообщение: ${ticket.message}`,
			html: `
        <h2>Новый тикет от клиента</h2>
        <p><strong>Дата:</strong> ${formattedDate}</p>
        <p><strong>Имя клиента:</strong> ${ticket.name}</p>
        <p><strong>Номер телефона:</strong> ${ticket.phone}</p>
        <p><strong>Сообщение:</strong></p>
        <p>${ticket.message}</p>
      `,
		}
		await this.transporter.sendMail(mailOptions)
	}

	// Send message to Telegram
	private async sendTelegram(ticket: Ticket): Promise<void> {
		if (!this.telegramBotToken || !this.telegramChatId) return

		const formattedDate = this.getFormattedDate()
		const timestamp = new Date().toLocaleTimeString('ru-RU', {
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit',
		})

		// Properly escape Markdown special characters
		const customerName = this.escapeMarkdown(ticket.name)
		const customerPhone = this.escapeMarkdown(ticket.phone)
		const customerMessage = this.escapeMarkdown(ticket.message)

		const whatsappLink = `https://wa.me/${customerPhone.replace(/\D/g, '')}`

		const text = `
📩 *Новый тикет от клиента*  

📅 *Дата:* ${formattedDate}  
🕒 *Время:* ${timestamp}  
👤 *Имя клиента:* ${customerName}  
✉️ *Телефон:* ${customerPhone}  
🔗 *WhatsApp:* [Открыть чат](${whatsappLink})  
📝 *Сообщение:*  \`${customerMessage}\`  
`

		const url = `https://api.telegram.org/bot${this.telegramBotToken}/sendMessage`

		try {
			const response = await fetch(url, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					chat_id: this.telegramChatId,
					text,
					parse_mode: 'Markdown',
					disable_web_page_preview: true,
				}),
			})

			if (!response.ok) {
				const errorResponse = await response.json()
				throw new Error(
					`Failed to send message to Telegram: ${
						errorResponse.description || response.statusText
					}`
				)
			}
		} catch (error) {
			console.error('❌ Ошибка при отправке сообщения в Telegram:', error)
			throw error
		}
	}

	// Main method to send ticket via both email and Telegram
	async sendTicket(ticket: Ticket): Promise<void> {
		try {
			await Promise.all([this.sendEmail(ticket), this.sendTelegram(ticket)])
			console.log('✅ Тикет успешно отправлен на Email и Telegram.')
		} catch (error) {
			console.error('❌ Ошибка при отправке тикета:', error)
			throw new Error('Ticket sending failed: ' + (error as Error).message)
		}
	}
}

export const ticketsService = new TicketsService()
