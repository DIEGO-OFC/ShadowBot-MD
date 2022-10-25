//by https://github.com/DIEGO-OFC/DORRAT-BOT-MD

import { sandroid1 } from '../lib/scrape.js'
import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
  if (!text) return conn.reply(m.chat, 'Ingrese la consulta', m)

  await m.reply('buscando...')
    let res = await sandroid1(text)
    let dapet = res.data
	let row = Object.values(dapet).map((v, index) => ({
		title: v.judul,
		description: '\n⌚ desarrollador: ' + v.dev + '\n⏲️ clasificación: ' + v.rating + '\n👁️ thumb: ' + v.thumb + '\n📎 link: ' + v.link,
		rowId: usedPrefix + 'ss ' + v.link
	}))
	let button = {
		buttonText: `☂️ apkpure Busca aquí ☂️`,
		description: `⚡ Seleccione Buscar apkpure en el botón de abajo...\n*El texto que envió:* ${text}\n\nVuelva a escribir *${usedPrefix + command}* su texto para cambiar el texto de nuevo`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}
handler.help = ['apkpure'].map(v => v + ' <query>')
handler.tags = ['buscador']
handler.command = /^(apkpure)$/i
handler.owner = false

handler.exp = 0
handler.limit = true

export default handler
