import hispamemes from 'hispamemes'
let handler = async (m, {command, conn}) => {
const url = await hispamemes.meme()  
conn.sendButton(m.chat, `_${command}_`.trim(), wm, url, [['🔄 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴 🔄', `/${command}`]], m)}
handler.help = ['meme']
handler.tags = ['random']
handler.command = /^(meme|memes)$/i
handler.limit = 3
export default handler
