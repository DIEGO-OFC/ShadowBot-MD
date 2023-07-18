import fetch from 'node-fetch'
import cheerio from 'cheerio'
import gpt from 'api-dylux'
let handler = async (m, { text, usedPrefix, command }) => {
if (!text) throw `*[❕] HAGA PETICIÓN, EJEMPLO ${usedPrefix + command}que es el planeta\nSI QUIERES EN MODO HARD:${usedPrefix + command}cuento donde violen a skid salvajemente*`
try {
let jailbreak = await fetch('https://raw.githubusercontent.com/Skidy89/chat-gpt-jailbreak/main/Text.txt').then(v => v.text());
await conn.sendPresenceUpdate('composing', m.chat)
var syms = `${jailbreak}`


let res = await gpt.ChatGpt(text, syms)
let rgapt = `${res.text}`
 await await conn.sendMessage(
      m.chat,
      {
        image: {
          url: "https://telegra.ph/file/10e013d9ae4d9cdf5af14.jpg",
        },
        caption: rgapt,
        contextInfo: {
          mentionedJid: [m.sender],
          externalAdReply: {
            title: `TOOLS - CHATGPT`,
            sourceUrl: "http://paypal.me/DorratBotOficial",
            mediaType: 1,
            showAdAttribution: true,
            thumbnailUrl: "https://telegra.ph/file/10e013d9ae4d9cdf5af14.jpg",
          },
        },
      },
      {
        quoted: m,
      }
    )
} catch {
try {   
let IA2 = await fetch(`https://api.amosayomide05.cf/gpt/?question=${text}&string_id=${m.sender}`)  
let IAR2 = await IA2.json()
let grtp = `${IAR2.response}`
   await await conn.sendMessage(
      m.chat,
      {
        image: {
          url: "https://telegra.ph/file/10e013d9ae4d9cdf5af14.jpg",
        },
        caption: grtp,
        contextInfo: {
          mentionedJid: [m.sender],
          externalAdReply: {
            title: `TOOLS - CHATGPT`,
            sourceUrl: "http://paypal.me/DorratBotOficial",
            mediaType: 1,
            showAdAttribution: true,
            thumbnailUrl: "https://telegra.ph/file/10e013d9ae4d9cdf5af14.jpg",
          },
        },
      },
      {
        quoted: m,
      }
    )
} catch {
try {   
let rrEes = await fetch(`https://api.ibeng.tech/api/info/openai?text=${text}&apikey=tamvan`)
let jjJson = await rrEes.json()
let chatgt = `${jjJson.data.data.trim()}`
   await await conn.sendMessage(
      m.chat,
      {
        image: {
          url: "https://telegra.ph/file/10e013d9ae4d9cdf5af14.jpg",
        },
        caption: chatgt,
        contextInfo: {
          mentionedJid: [m.sender],
          externalAdReply: {
            title: `TOOLS - CHATGPT`,
            sourceUrl: "http://paypal.me/DorratBotOficial",
            mediaType: 1,
            showAdAttribution: true,
            thumbnailUrl: "https://telegra.ph/file/10e013d9ae4d9cdf5af14.jpg",
          },
        },
      },
      {
        quoted: m,
      }
    )
} catch {      
try {    
let tioress = await fetch(`https://api.lolhuman.xyz/api/openai?apikey=BrunoSobrino&text=${text}&user=${m.sender}`)
let hasill = await tioress.json()
let gpt = `${hasill.result}`
   await await conn.sendMessage(
      m.chat,
      {
        image: {
          url: "https://telegra.ph/file/10e013d9ae4d9cdf5af14.jpg",
        },
        caption: gpt,
        contextInfo: {
          mentionedJid: [m.sender],
          externalAdReply: {
            title: `TOOLS - CHATGPT`,
            sourceUrl: "http://paypal.me/DorratBotOficial",
            mediaType: 1,
            showAdAttribution: true,
            thumbnailUrl: "https://telegra.ph/file/10e013d9ae4d9cdf5af14.jpg",
          },
        },
      },
      {
        quoted: m,
      }
    )
} catch {        
throw `*[❗] 𝙴𝚁𝚁𝙾𝚁, 𝚅𝚄𝙴𝙻𝚅𝙰 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁𝙻𝙾*`
}}}}}
handler.command = ['openai', 'chatgpt', 'ia', 'robot']
handler.dolares = 3
export default handler
