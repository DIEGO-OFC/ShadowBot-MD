import axios from 'axios'
let handler = async(m, { conn, args, usedPrefix, command }) => {
let res = (await axios.get(`https://raw.githubusercontent.com/DIEGO-OFC/DORRAT-BOT-MD/master/galeria/JSON/navidad.json`)).data  
let dorrat = await res[Math.floor(res.length * Math.random())]
conn.sendButton(m.chat, `_Navidad 🧑‍🎄_`, author, dorrat, [['🔄 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴 🔄', `${usedPrefix + command}`]], m)}
handler.help = ['navidad']
handler.tags = ['internet']
handler.command = /^(navidad)$/i
export default handler
