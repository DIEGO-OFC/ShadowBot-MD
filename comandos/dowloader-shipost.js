import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
let shipost = 'shipost'
const res = await googleImage(shipost)
let image = await res.getRandom()
let link = image
let captionn = `🔎 *𝚁𝙴𝚂𝚄𝙻𝚃𝙰𝙳𝙾 𝙳𝙴:* shipost\n🔗 *𝙻𝙸𝙽𝙺* ${link}`
await conn.sendButton(m.chat, captionn, author, link, [['🔷 [STICKER]', `#s`]], m)}
handler.help = ['shipost <query>', 'shipost <query>']
handler.tags = ['internet', 'tools']
handler.command = /^(shipost)$/i
handler.bitcoins = 5
export default handler
