let handler = async (m, { conn, text }) => {
    let name = await conn.getName(m.sender)


  conn.reply(m.chat, `
*[ ⚠ ️] No etiquetes a mi creador, si es algo urgente contacta con el a su chat privado*
`.trim(), m)
    let mentionedJid = [m.sender]
}
handler.customPrefix = /@584125778026/i
handler.command = new RegExp

export default handler
