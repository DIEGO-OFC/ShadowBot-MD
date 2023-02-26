import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
const res = await googleImage(shipost)
let shipost = 'shipost'
let image = await res.getRandom()
let link = image
let captionn = `🔎 *𝚁𝙴𝚂𝚄𝙻𝚃𝙰𝙳𝙾 𝙳𝙴:* ${text}\n🔗 *𝙻𝙸𝙽𝙺* ${link}\n🌎 *𝙱𝚄𝚂𝙲𝙰𝙳𝙾𝚁:* Google`
await conn.sendButton(m.chat, captionn, author, link, [['🔷 [STICKER]', `#s`]], m)}
handler.help = ['shipost <query>', 'shipost <query>']
handler.tags = ['internet', 'tools']
handler.command = /^(shipost)$/i
handler.bitcoins = 5
export default handler
