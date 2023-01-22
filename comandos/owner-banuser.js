let handler = async (m, { conn, text}) => {
let who
let pp = './Menu2.jpg'
let ban = `✅ USUARIO BANEADO\nBANEADO: @${who.split`@`[0]}*`}\RAZON: *${text}*`.trim()
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
let user = global.db.data.users[who]
if (!who) throw `*[❕] ETIQUETA A LA PERSONA QUE SERA BANEADA*`
let txt = text.replace('@' + who.split`@`[0], '').trim()
if (!txt) return conn.reply(m.chat, `[❕] Ingresé la razón del baneo`, m)
let users = global.db.data.users
users[who].banned = true
conn.reply(m.chat, `*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 𝙵𝚄𝙴 𝙱𝙰𝙽𝙴𝙰𝙳𝙾 𝙲𝙾𝙽 𝙴𝚇𝙸𝚃𝙾*\n*—◉ 𝙴𝙻 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 𝙽𝙾 𝙿𝙾𝙳𝚁𝙰 𝚄𝚂𝙰𝚁 𝙴𝙻 𝙱𝙾𝚃 𝙷𝙰𝚂𝚃𝙰 𝚀𝚄𝙴 𝚂𝙴𝙰 𝙳𝙴𝚂𝙱𝙰𝙽𝙴𝙰𝙳𝙾*`,pp, m)
}
handler.help = ['banuser']
handler.tags = ['owner']
handler.command = /^banuser$/i
handler.rowner = true
export default handler
