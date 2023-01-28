let handler = async(m, { conn, text }) => {
if (!text) return m.reply("*Ingresa un texto.*")
const templateButtonsxd = [
  { index: 1, urlButton: { displayText: "Copy Text", url: 'https://www.whatsapp.com/otp/copy/' + text}}
]
const templateMessage = {
	viewOnceMessage: {
		message: {
			templateMessage: {
				hydratedTemplate: {
					hydratedContentText: `Da click en el boton de copy`,
					hydratedFooterText: 'Testing',
					hydratedButtons: templateButtonsxd
				}
			}
		}
	}
}

conn.relayMessage(m.chat, templateMessage ,{})

}
handler.command = /^(copy|copytext)$/i
export default handler
