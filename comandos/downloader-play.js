import fetch from 'node-fetch'
import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, command, text, usedPrefix }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝙽𝙾𝙼𝙱𝚁𝙴 𝙳𝙴 𝙻𝙰 𝙲𝙰𝙽𝙲𝙸𝙾𝙽 𝙵𝙰𝙻𝚃𝙰𝙽𝚃𝙴, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙼𝙰𝚂 𝙴𝙻 𝙽𝙾𝙼𝙱𝚁𝙴/𝚃𝙸𝚃𝚄𝙻𝙾 𝙳𝙴 𝚄𝙽𝙰 𝙲𝙰𝙽𝙲𝙸𝙾𝙽*\n\n*—◉ 𝙴𝙹𝙴𝙼𝙿𝙻𝙾:*\n*${usedPrefix + command} Good Feeling - Flo Rida*`
let vid = (await youtubeSearch(text)).video[0]
if (!vid) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙻𝙾 𝚂𝙸𝙴𝙽𝚃𝙾, 𝙽𝙾 𝙿𝚄𝙳𝙴 𝙴𝙽𝙲𝙾𝙽𝚃𝚁𝙰𝚁 𝙴𝙻 𝙰𝚄𝙳𝙸𝙾/𝚅𝙸𝙳𝙴𝙾, 𝙸𝙽𝚃𝙴𝙽𝚃𝙴 𝙲𝙾𝙽 𝙾𝚃𝚁𝙾 𝙽𝙾𝙼𝙱𝚁𝙴/𝚃𝙸𝚃𝚄𝙻𝙾*'
try {
let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
const url = 'https://www.youtube.com/watch?v=' + videoId
 
await conn.sendButton(m.chat, wm, `
╔═══════❰  *🔰*  ❱══════⬣
║ 𝑻𝑰𝑻𝑼𝑳𝑶 | 𝑻𝑰𝑻𝑳𝑬
║ ${title}
║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
║ 𝑫𝑬𝑺𝑪𝑹𝑰𝑻𝑪𝑰𝑶𝑵 | 𝑫𝑬𝑺𝑪𝑹𝑰𝑷𝑻𝑰𝑶𝑵
║ ${description}
║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
║ 𝑷𝑼𝑩𝑳𝑰𝑪𝑨𝑫𝑶 | 𝑷𝑼𝑩𝑳𝑰𝑺𝑯𝑬
║ ${publishedTime}
║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
║ 𝑫𝑼𝑹𝑨𝑪𝑰𝑶𝑵 | 𝑫𝑼𝑹𝑨𝑻𝑰𝑶𝑵
║ ${durationH}
║┈┈┈┈┈┈┈┈┈┈┈┈┈┈
║ 𝑽𝑰𝑺𝑻𝑨𝑺 | 𝑽𝑰𝑬𝑾𝑺
║ ${viewH}
║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
║ 𝑼𝑹𝑳
║ ${url}
╚═══════❰ *${vs}* ❱══════⬣`, thumbnail, [['𝐌 𝐄 𝐍 𝐔 ☘️', '/menu']], m)
  
const sections = [{
title: comienzo + ' 📡 𝐓𝐈𝐏𝐎𝐒 𝐃𝐄 𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐒 ' + fin,
rows: [
{title: "𝐀𝐔𝐃𝐈𝐎 (Opcion 1)", rowId: `${usedPrefix}yta ${url}`, description: `${title}\n`},
{title: "𝐀𝐔𝐃𝐈𝐎 (Opcion 2)", rowId: `${usedPrefix}play.1 ${url}`, description: `${title}\n`},
{title: "𝐀𝐔𝐃𝐈𝐎 𝐃𝐎𝐂", rowId: `${usedPrefix}ytadoc ${url}`, description: `${title}\n`},
{title: "𝐕𝐈𝐃𝐄𝐎 (Opcion 1)", rowId: `${usedPrefix}ytv ${url}`, description: `${title}\n`},
{title: "𝐕𝐈𝐃𝐄𝐎 (Opcion 2)", rowId: `${usedPrefix}play.2 ${url}`, description: `${title}\n`},
{title: "𝐕𝐈𝐃𝐄𝐎 𝐃𝐎𝐂", rowId: `${usedPrefix}ytvdoc ${url}`, description: `${title}\n`}
]},{
title: comienzo + ' 🔎 𝐁𝐔𝐒𝐐𝐔𝐄𝐃𝐀 𝐀𝐕𝐀𝐍𝐙𝐀𝐃𝐀 ' + fin,
rows: [
{title: "𝐌𝐀𝐒 𝐑𝐄𝐒𝐔𝐋𝐓𝐀𝐃𝐎𝐒", rowId: `${usedPrefix}ytsearch ${text}`}
]}]

const listMessage = {
  text: `*𝐄𝐋𝐈𝐉𝐀 𝐐𝐔𝐄 𝐕𝐀 𝐇𝐀𝐂𝐄𝐑 𝐂𝐎𝐍  ${text}*`,
  footer: global.wm,
  title: `${htki} *♻️ 𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐒* ${htka}`,
  buttonText: `🍄 𝐄𝐋𝐄𝐆𝐈𝐑 🍁`,
  sections
}

await conn.sendMessage(m.chat, listMessage, {quoted: fkontak})
}catch(e){
m.reply(`${fg}𝐈𝐍𝐓𝐄𝐍𝐓𝐄 𝐃𝐄 𝐍𝐔𝐄𝐕𝐎\n𝐓𝐑𝐘 𝐀𝐆𝐀𝐈𝐍`)
console.log(e)
}}
handler.help = ['play', 'play2'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^play2?$/i
handler.exp = 20
// handler.register = true
handler.dorracoins = 1
//handler.limit = 1
export default handler


/*import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, command, text, usedPrefix }) => {
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝙽𝙾𝙼𝙱𝚁𝙴 𝙳𝙴 𝙻𝙰 𝙲𝙰𝙽𝙲𝙸𝙾𝙽 𝙵𝙰𝙻𝚃𝙰𝙽𝚃𝙴, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙼𝙰𝚂 𝙴𝙻 𝙽𝙾𝙼𝙱𝚁𝙴/𝚃𝙸𝚃𝚄𝙻𝙾 𝙳𝙴 𝚄𝙽𝙰 𝙲𝙰𝙽𝙲𝙸𝙾𝙽*\n\n*—◉ 𝙴𝙹𝙴𝙼𝙿𝙻𝙾:*\n*${usedPrefix + command} Good Feeling - Flo Rida*`
let vid = (await youtubeSearch(text)).video[0]
if (!vid) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙻𝙾 𝚂𝙸𝙴𝙽𝚃𝙾, 𝙽𝙾 𝙿𝚄𝙳𝙴 𝙴𝙽𝙲𝙾𝙽𝚃𝚁𝙰𝚁 𝙴𝙻 𝙰𝚄𝙳𝙸𝙾/𝚅𝙸𝙳𝙴𝙾, 𝙸𝙽𝚃𝙴𝙽𝚃𝙴 𝙲𝙾𝙽 𝙾𝚃𝚁𝙾 𝙽𝙾𝙼𝙱𝚁𝙴/𝚃𝙸𝚃𝚄𝙻𝙾*'
try {
let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
const url = 'https://www.youtube.com/watch?v=' + videoId
//m.reply("[⚠️AVISO⚠️] por favor usar el /play sin ningún tipo de spam.")
conn.sendHydrated(m.chat, `
╔═══════❰  *🔰*  ❱══════⬣
║ 𝑻𝑰𝑻𝑼𝑳𝑶 | 𝑻𝑰𝑻𝑳𝑬
║ ${title}
║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
║ 𝑫𝑬𝑺𝑪𝑹𝑰𝑻𝑪𝑰𝑶𝑵 | 𝑫𝑬𝑺𝑪𝑹𝑰𝑷𝑻𝑰𝑶𝑵
║ ${description}
║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
║ 𝑷𝑼𝑩𝑳𝑰𝑪𝑨𝑫𝑶 | 𝑷𝑼𝑩𝑳𝑰𝑺𝑯𝑬
║ ${publishedTime}
║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
║ 𝑫𝑼𝑹𝑨𝑪𝑰𝑶𝑵 | 𝑫𝑼𝑹𝑨𝑻𝑰𝑶𝑵
║ ${durationH}
║┈┈┈┈┈┈┈┈┈┈┈┈┈┈
║ 𝑽𝑰𝑺𝑻𝑨𝑺 | 𝑽𝑰𝑬𝑾𝑺
║ ${viewH}
║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
║ 𝑼𝑹𝑳
║ ${url}
╚═══════❰ *${vs}* ❱══════⬣`.trim(), wm, thumbnail, '', '', null, null, [
    ['𝐕𝐈𝐃𝐄𝐎 | 1️⃣', `${usedPrefix}ytv ${url} yes`],
    ['𝐕𝐈𝐃𝐄𝐎 | 2️⃣', `${usedPrefix}play.2 ${url} yes`],
    ['𝐀𝐔𝐃𝐈𝐎 | 1️⃣', `${usedPrefix}yta ${url} yes`]
  ], m)
    
}catch(e){
m.reply(`${fg}𝐈𝐍𝐓𝐄𝐍𝐓𝐄 𝐃𝐄 𝐍𝐔𝐄𝐕𝐎\n𝐓𝐑𝐘 𝐀𝐆𝐀𝐈𝐍`)
console.log(e)
}}
handler.help = ['play', 'play2'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^play2?$/i
handler.exp = 20
handler.register = true
handler.limit = 1
export default handler*/
