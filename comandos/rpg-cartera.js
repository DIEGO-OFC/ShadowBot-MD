import fetch from 'node-fetch'
let handler = async (m, { usedPrefix, conn}) => {	
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender
let name = conn.getName(who) 
let grupos = [md, yt]
let dorrat = [imagen1, imagen4]
let dos = [md]

let user = global.db.data.users[who]
let premium = user.premium
const cartera = {
    economia: {
    exp: true,
    limit: true,
    dorracoins: true,
  },
}
const recursos = Object.keys(cartera.economia).map(v => user[v] && `*${global.rpgshop.emoticon(v)} ⇢ ${user[v]}*`).filter(v => v).join('\n').trim()
await conn.sendButton(m.chat, `🎟️ 𝗣 𝗥 𝗘 𝗠 𝗜 𝗨 𝗠 ⇢ ${premium ? '✅' : '❌'}\n${wm}`, `👝 ⇢ ${name}\n` + recursos + `\n\n*PARA VER MÁS RECURSOS VISITE EL INVENTARIO*`, imagen1, [
['𝙄𝙣𝙫𝙚𝙣𝙩𝙖𝙧𝙞𝙤 🎒', '/inventario'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́☘️', '/menu']], m, md)  
}
handler.help = ['bal']
handler.tags = ['xp']
handler.command = ['bal2', 'cartera', 'wallet', 'cartera2', 'balance2'] 
export default handler
