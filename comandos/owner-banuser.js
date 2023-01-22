let handler = async (m, { conn, text}) => {
let who
let pp = './Menu2.jpg'
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
let user = global.db.data.users[who]
if (!who) throw `*[❕] ETIQUETA A LA PERSONA QUE SERA BANEADA*`
let txt = text.replace('@' + who.split`@`[0], '').trim()
if (!txt) return conn.reply(m.chat, `[❕] Ingresé la razón del baneo`, m)
let users = global.db.data.users
users[who].banned = true
conn.sendButton(m.chat `✅ USUARIO BANEADO\nBANEADO @${who.split`@`[0]}*`} RAZON ${text}`, wm,  pp,[
['𝙼𝙴𝙽𝚄', `#menusimple`]], m)}
handler.help = ['banuser']
handler.tags = ['owner']
handler.command = /^banuser$/i
handler.rowner = true
export default handler
