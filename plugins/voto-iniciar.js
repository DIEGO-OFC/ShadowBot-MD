let handler = async (m, { conn, text, usedPrefix, isAdmin, isOwner, participants }) => {
let username = conn.getName(m.sender)
let users = participants.map(u => conn.decodeJid(u.id))
    if (m.isGroup) {
        if (!(isAdmin || isOwner)) return dfail('admin', m, conn)
    }
    conn.vote = conn.vote ? conn.vote : {}
    let id = m.chat
    if (id in conn.vote) await conn.sendButton(m.chat, `*Todavía hay votos en este chat.!*`, dorre, null, [
                ['𝙱𝙾𝚁𝚁𝙰𝚁🗑️', `${usedPrefix}-vote`]
            ], m)
            let caption = `🔰◌*̥₊ *El admin ${username} ha comenzado una votación*
            
❏ *${usedPrefix}listvote* - comprobar votos 
❏ *${usedPrefix}delvote* - borrar votacion`
            const sections = [
{
title: `𝐋𝐈𝐒𝐓𝐀 𝐃𝐄 𝐎𝐏𝐂𝐈𝐎𝐍𝐄𝐒`,
rows: [
{title: "「 ✅ 」𝐕𝐎𝐓𝐎 𝐀 𝐅𝐀𝐕𝐎𝐑", 
rowId: `#upvote`},
{title: "「 ❌ 」𝐕𝐎𝐓𝐎 𝐄𝐍 𝐂𝐎𝐍𝐓𝐑𝐀", 
rowId: `#devote`},
]}, ]
const listMessage = {
text: caption,
footer: wm,
title: null,
mentions: users,
buttonText: "𝕊𝔼𝕃𝔼ℂℂ𝕀𝕆ℕ𝔼 𝔸ℚ𝕌𝕀́",
sections }
await conn.sendMessage(m.chat, listMessage, { quoted: m})
    conn.vote[id] = [
        text,
        [],
        []
    ]
}
handler.help = ['votar *<razón>*']
handler.tags = ['vote']
handler.command = /^(vote|votar)$/i
handler.admin = true
handler.group = true

export default handler
