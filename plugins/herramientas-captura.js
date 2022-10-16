import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command, args }) => {
  let full = /f$/i.test(command)
  if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙴𝙻 𝙻𝙸𝙽𝙺 𝙳𝙴 𝚄𝙽𝙰 𝙿𝙰𝙶𝙸𝙽𝙰 𝙿𝙰𝙵𝙰 𝙷𝙰𝙲𝙴𝚁 𝙲𝙰𝙿𝚃𝚄𝚁𝙰n\n*卐 Ejemplo:*\n ${usedPrefix + command} https://github.com/DIEGO-OFC/DORRAT-BOT-MD`
  conn.reply(m.chat, global.wait, m)
  let url = /https?:\/\//.test(args[0]) ? args[0] : 'https://' + args[0]
  let ss = await (await fetch(global.API('nrtm', '/api/ssweb', { delay: 1000, url, full }))).buffer()
  conn.sendFile(m.chat, ss, 'Error.png', '*卐🎌 Captura de la Pagina🎌卐*', m)
}

handler.help = ['captura']
handler.tags = ['herramientas']
handler.command = /^(ssweb|ss|cap|screenshot|captura)$/i

export default handler
