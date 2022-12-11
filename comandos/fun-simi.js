import fetch from 'node-fetch'
let handler = async (m, { text, usedPrefix, command }) => {
let name = await conn.getName(m.sender)
if (!text) {
 conn.reply(m.chat, `Hola *@${m.sender.split`@`[0]}* Quieres charlar un rato? \nResponde con *${usedPrefix + command}* (tu mensaje) \n\n*_📌 Ejemplo :_* *${usedPrefix + command}* Hola bot`, m, { mentions: [m.sender] })
 throw false
 }
let res = await fetch(global.API('https://api.simsimi.net', '/v2/', { text: encodeURIComponent(text), lc: "es" }, ''))
let json = await res.json()
if (json.success) m.reply(json.success)
else throw json }
handler.help = ['simi', 'bot'].map(v => v + ' <teks>')
handler.tags = ['fun']
handler.command = /^((sim)?simi|bot|alexa|cortana)$/i
handler.register = true

export default handler
