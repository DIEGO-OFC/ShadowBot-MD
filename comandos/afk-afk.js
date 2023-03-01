let handler = async (m, { text }) => {
let user = global.db.data.users[m.sender]
user.afk = + new Date
user.afkReason = text
let afk2 = `*❍ MOTIVO (𝙰𝙵𝙺)${text ? ': ' + text : ''}*\n❍ NO LO ETIQUETEN`
let afkinfo = `*DORRAT - AFK*\n\n*👤 USUARIO QUE ESTARA AFK: ${conn.getName(m.sender)}*`
await conn.sendButton(m.chat, afkinfo, afk2, 
[
['ok', `ok`]], m)}
handler.help = ['afk [alasan]']
handler.tags = ['main']
handler.command = /^afk$/i
handler.dolares = 10
export default handler
