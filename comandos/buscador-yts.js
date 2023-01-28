import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { text }) => {
if (!text) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙸𝙽𝚂𝙴𝚁𝚃𝙴 𝙴𝙻 𝙽𝙾𝙼𝙱𝚁𝙴 𝙳𝙴 𝙰𝙻𝙶𝚄𝙽 𝚅𝙸𝙳𝙴𝙾 𝙾 𝙲𝙰𝙽𝙰𝙻 𝙳𝙴 𝚈𝙾𝚄𝚃𝚄𝙱𝙴*'
const { video, channel } = await youtubeSearch(text)
let pp = './galeria/menudorrat3.jpg'
let teks = [...video, ...channel].map(v => {
switch (v.type) {
case 'video': return `
*🔍 ${v.title} (${v.url})*
*⏱️ Duración: ${v.durationH}*
*📗 Publicado ${v.publishedTime}*
*🗒️ ${v.view} Vistas*
`.trim()
case 'channel': return `
🔍 *${v.channelName}* (${v.url})
👥 _${v.subscriberH} 𝚜𝚞𝚜𝚌𝚛𝚒𝚙𝚝𝚘𝚛𝚎𝚜_
🎦 ${v.videoCount} 𝚟𝚒𝚍𝚎𝚘𝚜
`.trim()
}
}).filter(v => v).join('\n\n• • ◕◕═════════════════◕◕ • •\n\n')
conn.sendButton(m.chat, teks, wm, pp,
[
['null', `null`]], m)
     }
handler.help = ['', 'earch'].map(v => 'yts' + v + ' <pencarian>')
handler.tags = ['tools']
handler.command = /^yts(earch)?$/i
export default handler
