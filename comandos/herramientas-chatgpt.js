
import fetch from 'node-fetch'
let handler = async (m, { text, usedPrefix, command }) => {
if (!text) throw `*[❕] INGRESE UN TEXTO/ORDEN PARA EJECUTAR LA FUNCIÓN CHATGPT*\n\n*❍ EJEMPLO DE PETICIONES Y ORDENES*\n*❍ ${usedPrefix + command} Reflexion sobre la serie Merlina 2022 de netflix*\n*❍ ${usedPrefix + command} Codigo en JS para un juego de cartas*`
try {
/*m.reply(`*⏰ Cargando, espere un momento*`)*/
let tiores = await fetch(`https://api.lolhuman.xyz/api/openai?apikey=${lolkeysapi}&text=${text}&user=user-unique-id`)
let hasil = await tiores.json()
handler.dorracoins = 1
conn.fakeReply(`${hasil.result}`,'0@s.whatsapp.net', '*🔥 THE DORRAT - BOT 🔥*', 'status@broadcast'.trim())
} catch {
throw `*[❕] ERROR, INTENTA DE NUEVO*`
}}
handler.command = ['openai', 'chatgpt', 'ia', 'robot']
export default handler
