import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command }) => {
let res = await fetch('https://api.imgflip.com/get_memes')
if (!res.ok) throw await res.text()
let json = await res.json()
if (!json.url) throw 'Error!'
conn.sendButton(m.chat, `_${command}_`, author, json.url, [['🔄 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴 🔄', `/${command}`]], m)
}
handler.help = ['meme']
handler.tags = ['random']
handler.command = /^(meme|memes)$/i
handler.limit = 3

export default handler 






/*import hispamemes from 'hispamemes'
let handler = async (m, {command, conn}) => {
const url = await hispamemes.meme()  
conn.sendButton(m.chat, `_${command}_`.trim(), wm, url, [['🔄 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴 🔄', `/${command}`]], m)}
handler.help = ['meme']
handler.tags = ['random']
handler.command = /^(meme|memes)$/i
handler.limit = 3
export default handler*/
