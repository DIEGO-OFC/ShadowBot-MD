let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
export async function before(m, { isAdmin, isBotAdmin }) {
if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
let db = imagen5
let delet = m.key.participant
let bang = m.key.id
let bot = global.db.data.settings[this.user.jid] || {}
const isGroupLink = linkRegex.exec(m.text)
const grupo = `https://chat.whatsapp.com`
if (isAdmin && chat.antiLink && m.text.includes(grupo)) return m.reply('*𝙷𝙴𝚈!! 𝙴𝙻 𝙰𝙽𝚃𝙸𝙻𝙸𝙽𝙺 𝙴𝚂𝚃𝙰 𝙰𝙲𝚃𝙸𝚅𝙾, 𝙿𝙴𝚁𝙾 𝙴𝚁𝙴𝚂 𝚄𝙽 𝙰𝙳𝙼𝙸𝙽 🤑, 𝚂𝙰𝙻𝚅𝙰𝙳𝙾/𝙰!*')
if (chat.antiLink && isGroupLink && !isAdmin) {
if (isBotAdmin) {
const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
if (m.text.includes(linkThisGroup)) return !0
}    
await conn.sendButton(m.chat, `*「 ANTI LINKS 」*\n*chao ${await this.getName(m.sender)} Mandaste un enlace y eso está prohibido aquí., Serás eliminado...!!*${isBotAdmin ? '' : '\n\n*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙱𝙾𝚃 𝙽𝙾 𝙴𝚂 𝙰𝙳𝙼𝙸𝙽, 𝙽𝙾 𝙿𝚄𝙴𝙳𝙴 𝙴𝚇𝚃𝙴𝚁𝙼𝙸𝙽𝙰𝚁 𝙰 𝙻𝙰𝚂 𝙿𝙴𝚁𝚂𝙾𝙽𝙰𝚂*'}`, wm3, db,  ['[DESACTIVAR ANTILINK]', '/disable antilink'], m)    
if (isBotAdmin) {
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}}
return !0
}
