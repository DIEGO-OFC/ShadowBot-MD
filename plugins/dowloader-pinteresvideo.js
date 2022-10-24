import { spin } from '../lib/scrape.js'

let handler = async (m, { conn, args, usedPrefix, command }) => {

    if (!args[0]) throw `**Este comando para descargar videos de pinterest con enlace*\n\nejemplo:\n${usedPrefix + command} https://id.pinterest.com/pin/27162403992537372/*`
    if (!args[0].match(/https:\/\/.*pinterest.com\/pin|pin.it/gi)) throw `*¡Enlace incorrecto! Este comando para descargar videos de pinterest con enlace*\n\nejemplo:\n${usedPrefix + command} https://id.pinterest.com/pin/27162403992537372/*`
    await spin(args[0]).then(async res => {
        let pin = JSON.stringify(res)
        let json = JSON.parse(pin)
        if (!json.status) throw `No se puede descargar`
        await conn.sendButton(m.chat, json.data.url, `*Mythia Batford*`, m)
    })

}
handler.help = ['pinterestvideo'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^pinterestvideo$/i

handler.limit = true

export default handler
