let handler = async (m, { text }) => {
let user = global.db.data.users[m.sender]
user.afk = + new Date
user.afkReason = text
m.reply(`*⚡ ${conn.getName(m.sender)} ESTARA AFK*\n\n*❍ MOTIVO (𝙰𝙵𝙺)${text ? ': ' + text : ''}*
`)}
handler.help = ['afk [alasan]']
handler.tags = ['main']
handler.command = /^afk$/i
handler.dolares = 4
export default handler
