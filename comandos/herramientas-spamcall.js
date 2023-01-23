import axios from 'axios'

let handler = async(m, { conn, text, usedPrefix }) => {
    if (!text) return conn.reply(m.chat, 'Ingrese el número de destino\n\nEjemplo de uso : ' + usedPrefix + '5xxxxxxxx', m)
    new Promise((resolve, reject) => {
        axios.get(`https://www.spamcall.org/api?no=${text}`)
            .then((res) => {
                if (res.status == 200) {
                    conn.reply(m.chat, res.logs, m)
                    conn.reply(m.chat, `No se roconose el numero 0${text}`, m)
                } else {
                    conn.reply(m.chat, res.msg, m)
                }

            })
            .catch(reject)
    })
}
handler.help = ['spamcall *8xx*']
handler.tags = ['tools']
handler.command = /^spamcall?$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.limit = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

export default handler
