import fs from 'fs'
const linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})( [0-9]{1,3})?/i
const grupo = 'https://chat.whatsapp.com/LFi7P4vAQJW0qlYERTdLGn'

let handler = async (m, { conn, text, usedPrefix, command, participants, groupMetadata }) => { 
let fkontak2 = { key: { participant: '0@s.whatsapp.net' }, message: { contactMessage: { displayName: `~ 𝐃𝐈𝐄𝐆𝐎-𝐎𝐅𝐂`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;${author},;;;\nFN:${author},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, jpegThumbnail: fs.readFileSync('./galería/menudorra3.jpg'), thumbnail: fs.readFileSync('./galería/menudorra3.jpg'), sendEphemeral: true }}}
if (!text) throw `*Falta Texto*`
let [_, code] = grupo.match(linkRegex) || []

try{
let res = await conn.groupAcceptInvite(code)
await conn.sendMessage(res, { text: text, mentions: (await conn.groupMetadata(`${res}`)).participants.map(v => v.id) }, { quoted: fkontak2 })
await m.reply(`✅ *MENSAJE ENVIADO CON ÉXITO* `)
}
handler.command = ['mensaje']
handler.owner = true

export default handler
