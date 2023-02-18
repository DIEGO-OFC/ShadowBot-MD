import fs from 'fs'
import { mediafiredl } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝚄𝙽 𝙴𝙽𝙻𝙰𝙲𝙴 𝚅𝙰𝙻𝙸𝙳𝙾 𝙳𝙴 𝙼𝙴𝙳𝙸𝙰𝙵𝙸𝚁𝙴, 𝙴𝙹𝙴𝙼𝙿𝙻𝙾: ${usedPrefix + command} https://www.mediafire.com/file/xo6msugx6u2fhlw/1.19.30.apk/file*`
try {
let res = await mediafiredl(args[0])
let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
let caption = `
❒➢ 🔍 *NOMBRE:* ${filename}
❒➢ 📦 *PESO:* ${filesizeH}
❒➢ 🔰 *TIPO:* ${ext}

➢ *⏰ ENVIANDO ARCHIVO, POR FAVOR ESPERE. . . .* 
`.trim()
await conn.reply(m.chat, caption, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰𝚁 𝙳𝙴 𝙼𝙴𝙳𝙸𝙰𝙵𝙸𝚁𝙴',
body: '𝑩𝒀 𝑫𝑶𝑹𝑹𝑨𝑻-𝑩𝑶𝑻-𝑴𝑫',         
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: `https://github.com/DIEGO-OFC/DORRAT-BOT-MD`}}})
conn.sendFile(m.chat, url, filename, '', m, null, { mimetype: ext, asDocument: true })
} catch (e) {
m.reply('*[❕] ERROR, INTENTA DE NUEVO*\n\n*- COMPRUEBA QUE EL ENLACE SEA IGUAL A*\n*❍ https://www.mediafire.com/file/xo6msugx6u2fhlw/1.19.30.apk/file*')
console.log(e)
}}
handler.help = ['mediafire'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.dolares = 4
handler.command = /^(mediafire|mediafiredl|dlmediafire)$/i
export default handler
