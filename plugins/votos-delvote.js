let handler = async (m, { conn, usedPrefix, isAdmin, isOwner }) => {
    if (m.isGroup) {
        if (!(isAdmin || isOwner)) return dfail('admin', m, conn)
    }
    let id = m.chat
    conn.vote = conn.vote ? conn.vote : {}
    if (!(id in conn.vote)) await conn.sendButton(m.chat, `⚠️ *_No hay votaciones activas en este grupo!_*`, wm, null, [
    ['𝚅𝙾𝚃𝙰𝚁📦', `${usedPrefix}vote`],
    ['𝙼𝙴𝙽𝚄́🔰', `${usedPrefix}menu`]
], m)
    delete conn.vote[id]
    m.reply(`💥 *_Votación acabada con éxito._*`)
}
handler.help = ['delvote']
handler.tags = ['vote']
handler.command = /^(del|hapus|-)vote$/i

export default handler
