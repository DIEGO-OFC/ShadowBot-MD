let handler = async (m, { conn, text, participants, isAdmin, isOwner, usedPrefix, command}) => {

    if (!m.quoted) throw `Etiqueta un mensaje con el comando *${usedPrefix + command}*`

    conn.sendMessage(m.chat, { forward: m.quoted.fakeObj }, { quoted: m })

}

handler.help = ['reenviar']

handler.tags = ['tools']

handler.command = ['reenviar']

handler.group = true

export default handler
