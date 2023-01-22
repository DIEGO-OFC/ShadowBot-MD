//desarrollado por https://github.com/DIEGO-OFC


import MessageType from '@adiwajshing/baileys'

let handler = async (m, { conn, text, usedPrefix }) => {
    let iya = `*DORRAT-BOT-MD | STAFF*\n\nPara enviar un mensaje a un usuario escribe */sm (número|mensaje)*\n\n_Ejemplo: ${usedPrefix}sm 589999999|hola_`
    let [n, mes] = text.split('|')
    try {
        if (!n) throw iya
        if (n.startsWith('08')) throw iya
        if (!mes) throw iya
        if (mes.length > 200) throw 'Máximo 200 caracteres!'
        if (mes) {
            let n1 = .replace('-', '')
            let n2 = .replace('+', '')
            let n3 = .replace(' ', '')
            console.log(m)
            no = m.sender.split("@s.whatsapp.net")
            let teks = `📩 *SOPORTE*\n\nTienes un nuevo mensaje por parte del equipo de administración del bot, por favor léelo!\n\n📝 *Mensaje:* ${mes}\n*Ticket ID:* #702\n\n_Att: DORRAT | Soporte_`
            conn.sendMessage(`${n3}@s.whatsapp.net`, teks, MessageType.text, {
                contextInfo: {
                    mentionedJid: [m.sender]
                }
            }
            )
            m.reply('📩 *SOPORTE*\n\nMensaje enviado exitosamente al usuario seleccionado.')
        } else throw iya
    } catch (e) {
        console.log(e)
        throw iya
    }
}
handler.help = ['pesan nomor | teks']
handler.tags = ['tools']
handler.command = /^(msupp|msoporte)$/i
handler.owner = false
handler.mods = true
handler.premium = false
handler.group = false
handler.private = false
handler.limit = false
handler.admin = false
handler.botAdmin = false
handler.register = true

handler.fail = null

export default handler 
