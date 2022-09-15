import { youtubeSearch } from '@bochilteam/scraper'
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
║ 𝙏𝙄𝙏𝙐𝙇𝙊 | 𝙏𝙄𝙏𝙇𝙀
║ ${title}
║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
║ 𝘿𝙀𝙎𝘾𝙍𝙄𝙋𝘾𝙄𝙊𝙉 | 𝘿𝙀𝙎𝘾𝙍𝙄𝙋𝙏𝙄𝙊𝙉
║ ${description}
║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
║ 𝙋𝙐𝘽𝙇𝙄𝘾𝘼𝘿𝙊 | 𝙋𝙐𝘽𝙇𝙄𝙎𝙃𝙀𝘿
║ ${publishedTime}
║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
║ 𝘿𝙐𝙍𝘼𝘾𝙄𝙊𝙉 | 𝘿𝙐𝙍𝘼𝙏𝙄𝙊𝙉
║ ${durationH}
║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
║ 𝙑𝙄𝙎𝙏𝘼𝙎 | 𝙑𝙄𝙀𝙒𝙎
║ ${viewH}
║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
║ 𝙐𝙍𝙇
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
export default handler
