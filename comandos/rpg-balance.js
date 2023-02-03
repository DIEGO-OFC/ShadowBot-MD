let handler = async (m, {usedPrefix}) => {	
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender
let name = conn.getName(who) 
m.reply(`
╭━━━━━━ 𝐁𝐀𝐍𝐂𝐎 🏦 ━━━╾•
❍ *Nombre:* ${name}
❍ *Diamantes:* ${global.db.data.users[who].limit}💎
❍ *Tokens:* ${global.db.data.users[who].joincount}☯️
❍ *Dólares:* $${global.db.data.users[who].dolares} 💸
╰━━━━━━━━━━━━━━━━╾•
*𝙽𝙾𝚃𝙰:* 
*PUEDES COMPRAR USANDO LOS COMANDOS:*
❏ *${usedPrefix}buy <cantidad>*
❏ *${usedPrefix}buyall*

${wm3}`)
}
handler.help = ['bal']
handler.tags = ['xp']
handler.command = ['bal', 'diamantes', 'diamond', 'balance', 'banco'] 
export default handler
