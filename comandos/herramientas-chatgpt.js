import fetch from 'node-fetch'
let handler = async (m, { text, usedPrefix, command }) => {
try {
if (!text) throw `*[❕] INGRESE UN TEXTO/ORDEN PARA EJECUTAR LA FUNCIÓN CHATGPT*\n\n*❍ EJEMPLO DE PETICIONES Y ORDENES*\n*❍ ${usedPrefix + command} Reflexion sobre la serie Merlina 2022 de netflix*\n*❍ ${usedPrefix + command} Codigo en JS para un juego de cartas*`
await await m.reply(`*[ 𝐂𝐀𝐑𝐆𝐀𝐍𝐃𝐎 ]*`)
let tiores = await await fetch(`https://api.lolhuman.xyz/api/openai?apikey=${lolkeysapi}&text=${text}&user=user-unique-id`)
let hasil = await await tiores.json()
let openAi = `${hasil.result}`
await await conn.sendMessage(m.chat, {
     image: {
         url: "https://telegra.ph/file/10e013d9ae4d9cdf5af14.jpg"
     },
     caption: openAi,
     contextInfo: {
         mentionedJid: [m.sender],
         externalAdReply: {
             title: `TOOLS - CHATGPT`,
             sourceUrl: 'http://paypal.me/DorratBotOficial',
             mediaType: 1,
             showAdAttribution: true,
             thumbnailUrl: "https://telegra.ph/file/10e013d9ae4d9cdf5af14.jpg",
             
         }
     }
 }, {
     quoted: m
 })
} catch {
conn.reply(m.chat,`*[❕] ERROR, INTENTA DE NUEVO*`)
}}
handler.command = ['openai', 'ia', 'robot']
handler.dolares = 4
export default handler
