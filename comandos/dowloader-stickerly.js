import { sticker } from '../lib/sticker.js'
import fetch from 'node-fetch'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `*✳️ EJEMPLO DE USO DEL COMANDO ${usedPrefix + command} Anya Forger*`
try {
let res = await fetch(`https://api.xteam.xyz/sticker/stickerly?q=${args[0]}&APIKEY=HIRO`)
let json = await res.json()
for (let data of (json.result.stickerlist || json)) {
const stikers = await sticker(false, data, global.packname, global.author)
conn.sendFile(m.chat, stikers, 'sticker.webp', '', m, { asSticker: true })}
//await delay(1500)
} catch { 
try {
let res2 = await fetch(`https://api.xteam.xyz/sticker/stickerly?q=${args[0]}&APIKEY=${keysxteam}`)
let json2 = await res2.json()
for (let data2 of (json2.result.stickerlist || json2)) {
const stikers2 = await sticker(false, data2, global.packname, global.author)
conn.sendFile(m.chat, stikers2, 'sticker.webp', '', m, { asSticker: true })}
//await delay(1500)  
} catch {   
await m.reply('*⚠️ ERROR INTENTALO DE NUEVO*')  
}}}
handler.command = /^stickerly$/i

export default handler 
