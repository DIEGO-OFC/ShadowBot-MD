import fetch from 'node-fetch'
let handler = async (m, { text, usedPrefix, command }) => {
try {
if (!text) throw `*[❕] INGRESE UN TEXTO/ORDEN PARA EJECUTAR LA FUNCIÓN CHATGPT*\n\n*❍ EJEMPLO DE PETICIONES Y ORDENES*\n*❍ ${usedPrefix + command} Reflexion sobre la serie Merlina 2022 de netflix*\n*❍ ${usedPrefix + command} Codigo en JS para un juego de cartas*`
await await m.reply(`*[ 𝐂𝐀𝐑𝐆𝐀𝐍𝐃𝐎 ]*`)
let tiores = await await fetch(`https://api.lolhuman.xyz/api/openai?apikey=${zds}&text=${text}&user=user-unique-id`)
let hasil = await await tiores.json()
await await await await await await m.reply(`${hasil.result}`.trim())
} catch {
conn.reply(m.chat,`*[❕] ERROR, INTENTA DE NUEVO*`)
}}
handler.command = ['openai', 'ia', 'robot']
handler.dolares = 4
export default handler
