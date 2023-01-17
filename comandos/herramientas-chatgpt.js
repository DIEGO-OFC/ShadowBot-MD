import fetch from 'node-fetch'
let handler = async (m, { text, usedPrefix, command }) => {
if (!text) throw `*[❕] INGRESE UN TEXTO/ORDEN PARA EJECUTAR LA FUNCIÓN CHATGPT*\n\n*❍ EJEMPLO DE PETICIONES Y ORDENES*\n*❍ ${usedPrefix + command} Reflexion sobre la serie Merlina 2022 de netflix*\n*❍ ${usedPrefix + command} Codigo en JS para un juego de cartas*`
try {
m.reply('🔥 *1 DORRAT-COINS USADO*')
m.reply('*⏰ Cargando, Por favor espere*')
let tiores = await fetch(`https://api.lolhuman.xyz/api/openai?apikey=${lolkeysapi}&text=${text}&user=user-unique-id`)
let hasil = await tiores.json()
m.reply(`${hasil.result}`.trim())
} catch {
throw `*[❕] ERROR, INTENTA DE NUEVO*`
}}
handler.command = ['openai', 'chatgpt', 'ia', 'robot']
handler.dorracoins = 1
export default handler
