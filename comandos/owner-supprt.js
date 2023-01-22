//desarrollado por https://github.com/DIEGO-OFC



import MessageType from '@adiwajshing/baileys'

let handler = async (m, { conn, text, usedPrefix }) => {
    let [n, mes] = text.split('|')
            m = m.sender.split("@s.whatsapp.net")
            let teks = `📩 *SOPORTE*\n\nTienes un nuevo mensaje por parte del equipo de administración del bot, por favor léelo!\n\n📝 *Mensaje:* ${mes}\n*Ticket ID:* #702\n\n_Att: DORRAT | Soporte_`
            conn.reply('56964787183@s.whatsapp.net',teks, MessageType.text,  {
           contextInfo: {
           mentionedJid: [m.sender]
        
      }
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
