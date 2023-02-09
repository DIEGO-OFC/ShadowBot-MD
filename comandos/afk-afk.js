let handler = async (m, { text }) => {
let user = global.db.data.users[m.sender]
user.afk = + new Date
user.afkReason = text
let afk2 = `*❍ MOTIVO (𝙰𝙵𝙺)${text ? ': ' + text : ''}*`
let afkinfo = `DORRAT - AFK\n\n*⚡ ${conn.getName(m.sender)} ESTARA AFK*`
conn.sendButton(m.chat, afkinfo, afk2, 
[
['ok', `ok`]], m)}
handler.help = ['afk [alasan]']
handler.tags = ['main']
handler.command = /^afk$/i
handler.dolares = 4
export default handler
