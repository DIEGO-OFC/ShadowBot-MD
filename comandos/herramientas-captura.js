import https from 'https'
import fetch from 'node-fetch'

let handler = async (m, { args, usedPrefix, command }) => {
	if (!args[0]) throw `*[❕] INGRESE EL LINK DE UNA PAGINA EJEMPLO: ${usedPrefix + command} https://github.com/DIEGO-OFC/DORRAT-BOT-MD*`
	let res = await checkWeb(args)
	m.reply(res.map(v => `*• Domain:* ${v.Domain}\n*• Status:* ${v.Status}`).join('\n\n'))
}
handler.command = /^web(check|cek)|(check|cek)web$/i

export default handler

async function checkWeb(url) {
	let res = await (await fetch('https://trustpositif.kominfo.go.id/Rest_server/getrecordsname_home', {
		agent: new https.Agent({ rejectUnauthorized: false }),
		method: 'post',
		body: new URLSearchParams(Object.entries({ name: url.join('%0A') }))
	})).json()
	return res.values
}



/*import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command, args }) => {
  let full = /f$/i.test(command)
  if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙴𝙻 𝙻𝙸𝙽𝙺 𝙳𝙴 𝚄𝙽𝙰 𝙿𝙰𝙶𝙸𝙽𝙰 𝙿𝙰𝙵𝙰 𝙷𝙰𝙲𝙴𝚁 𝙲𝙰𝙿𝚃𝚄𝚁𝙰n\n*卐 Ejemplo:*\n ${usedPrefix + command} https://github.com/DIEGO-OFC/DORRAT-BOT-MD`
  conn.reply(m.chat, global.wait, m)
  let url = /https?:\/\//.test(args[0]) ? args[0] : 'https://' + args[0]
  let ss = await (await fetch(global.API('nrtm', '/api/ssweb', { delay: 1000, url, full }))).buffer()
  conn.sendFile(m.chat, ss, 'Error.png', '*📦 Captura de la Pagina*', m)
}

handler.help = ['captura']
handler.tags = ['herramientas']
handler.command = /^(ssweb|ss|cap|screenshot|captura)$/i

export default handler*/
