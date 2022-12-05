import axios from 'axios'
let handler = async(m, { conn, args, usedPrefix, command }) => {
let res = (await axios.get(`https://raw.githubusercontent.com/DIEGO-OFC/DORRAT-BOT-MD/master/galeria/JSON/itzy.json`)).data  
let dorrat = await res[Math.floor(res.length * Math.random())]
conn.sendButton(m.chat, `_${command}_`, wm, dorrat, [['🔄 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴 🔄', `/${command}`]], m)}
handler.help = ['itzy','kpopitzy']
handler.tags = ['internet']
handler.command = /^(itzy|kpopitzy)$/i
export default handler
