import fetch from 'node-fetch'
let handler = async (m, { text, usedPrefix, command }) => {
try {
if (!text) throw `*[❗] 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝚄𝙽 𝚃𝙴𝚇𝚃𝙾 𝙿𝙰𝚁𝙰 𝙷𝙰𝙱𝙻𝙰𝚁 𝙲𝙾𝙽 𝚂𝙸𝙼𝚂𝙸𝙼𝙸 𝙾 𝙴𝙻 𝙱𝙾𝚃*\n\n*𝙴𝙹𝙴𝙼𝙿𝙻𝙾: ${usedPrefix + command} Hola bot*`
let res = await fetch(`https://api.simsimi.net/v2/?text=${text}&lc=es`)
let json = await res.json()
m.reply(json.success)}
} catch {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝐎𝐂𝐔𝐑𝐑𝐈𝐎 𝐔𝐍 𝐄𝐑𝐑𝐎𝐑, 𝐒𝐄𝐆𝐔𝐑𝐎 𝐋𝐀 𝐀𝐏𝐈 𝐄𝐒𝐓𝐀 𝐂𝐀𝐈𝐃𝐀, 𝐈𝐍𝐓𝐄𝐍𝐓𝐄𝐋𝐎 𝐃𝐄 𝐍𝐔𝐄𝐕𝐎*', m)
}}
handler.help = ['simi', 'bot'].map(v => v + ' <teks>')
handler.tags = ['fun']
handler.command = /^((sim)?simi|bot|alexa|cortana)$/i
export default handler
