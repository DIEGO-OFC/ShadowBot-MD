import { WAMessageStubType } from '@adiwajshing/baileys'

export async function before(m, { conn }) {
	if (!m.messageStubType || !m.isGroup)
	    return !0
	let type = {
	    messageStubType: m.messageStubType,
	    messageStubParameters: m.messageStubParameters,
	    type: WAMessageStubType[m.messageStubType]
	}
	await conn.reply(m.chat, JSON.stringify(type, null, 1))
}
