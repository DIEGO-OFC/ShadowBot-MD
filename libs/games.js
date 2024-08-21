require('../main.js')  
 const fs = require("fs") 
 const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom } = require('../libs/fuctions.js');  
 const path = require("path") 
 const chalk = require("chalk"); 
 const moment = require('moment-timezone')  
 const gradient = require('gradient-string')  
 const fetch = require('node-fetch')  
 const axios = require('axios') 
 const cheerio = require('cheerio') 
 const Jimp = require('jimp') 
 const os = require('os') 
  
 async function game(conn, m, text, quoted) { 
 if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra) 
 if (!text) return conn.sendMessage(m.chat, { text: `*INGRESE UN TEXTO PARA HABLAR CONMIGO*` }, { quoted: m }) 
 await conn.sendPresenceUpdate('composing', m.chat) 
 let anu = await fetchJson(`https://api.simsimi.net/v2/?text=${text}&lc=es&cf=false`) 
 let res = anu.success; 
 m.reply(res)} 
  
 async function game1(conn, m, text, participants, sender) { 
if (!text) return m.reply(`*Ingrese el @ o el nombre de la persona*`)  
let ra = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100', '232', '400'] 
 let kah = ra[Math.floor(Math.random() * ra.length)]     
  let me = m.sender 

 let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender     
conn.sendMessage(m.chat, { text: `
_*${text}* *ES 🏳️‍🌈* *${kah}%* *GAY*_ 
 `, mentionedJid: [user] }, { quoted: m})
}
async function game2(conn, m, pushname, participants, sender) { 
 if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra) 
 if (!m.isGroup) return m.reply(info.group)  
 let member = participants.map(u => u.id) 
 let me = m.sender 
 let jodoh = member[Math.floor(Math.random() * member.length)] 
 let love = member[Math.floor(Math.random() * member.length)] 
 conn.sendMessage(m.chat, { text: `*@${me.split('@')[0]} Te deberias casar con @${love.split('@')[0]} hacen una bonita pareja 💕*`, 
 contextInfo:{ 
 mentionedJid:[me, love], 
 forwardingScore: 9999999, 
 isForwarded: true,  
 "externalAdReply": { 
 "showAdAttribution": true, 
 "containsAutoReply": true, 
 "title": ` ${botname}`, 
 "body": `${pushname}`, 
 "previewType": "PHOTO", 
 "thumbnailUrl": ``, 
 "thumbnail": imagen1,  
 "sourceUrl": md}}}, 
 { quoted: m}) 
 } 
  
 async function game3(conn, text, prefix, command, body, from, m, sender, quoted, target, bot, participant) { 
 if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra) 
 var gh = body.slice(11); 
 var mentioned = m.message.extendedTextMessage && m.message.extendedTextMessage.contextInfo && m.message.extendedTextMessage.contextInfo.mentionedJid ? m.message.extendedTextMessage.contextInfo.mentionedJid[0] : null; 
 var replace = gh.split("|")[0]; 
 var target = gh.split("|")[1]; 
 var bot = gh.split("|")[2]; 
 if (mentioned && target && bot) { 
 var quotedMessage = { 
 key: { 
 fromMe: false, 
 participant: mentioned 
 }, 
 message: { 
 conversation: target 
 }}; 
 var sendMessageOptions = { 
 text: `${bot}`, 
 quoted: quotedMessage 
 }; 
 conn.sendMessage(m.chat, sendMessageOptions, { quoted: quotedMessage }); 
 } else { 
 conn.sendMessage(m.chat, { text: `Ejemplo: ${prefix + command} @tag|puto|😯`}, { quoted: m }) 
 }} 
  
 async function game4(conn, m, pushname, text, sender) { 
 if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra) 
 if (!text) return m.reply(`*Ingrese el @ o el nombre de la persona*`)  
 let me = m.sender 
 let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender 
 conn.sendMessage(m.chat, { text: `🤤👅🥵 *𝐀𝐂𝐀𝐁𝐀𝐒 𝐃𝐄 𝐅𝐎𝐋𝐋𝐀𝐑𝐓𝐄𝐋@!*🥵👅🤤 
  
 𝙏𝙚 𝙖𝙘𝙖𝙗𝙖𝙨 𝙙𝙚 𝙛𝙤𝙡𝙡𝙖𝙧 𝙖 𝙡𝙖 𝙥𝙚𝙧𝙧𝙖 𝙙𝙚 ${text} 𝙖 𝟰 𝙥𝙖𝙩𝙖𝙨 𝙢𝙞𝙚𝙣𝙩𝙧𝙖𝙨 𝙩𝙚 𝙜𝙚𝙢𝙞𝙖 𝙘𝙤𝙢𝙤 𝙪𝙣𝙖 𝙢𝙖𝙡𝙙𝙞𝙩𝙖 𝙥𝙚𝙧𝙧𝙖 "𝐀𝐚𝐚𝐡.., 𝐀𝐚𝐚𝐡𝐡, 𝐬𝐢𝐠𝐮𝐞, 𝐧𝐨 𝐩𝐚𝐫𝐞𝐬, 𝐧𝐨 𝐩𝐚𝐫𝐞𝐬.." 𝙮 𝙡𝙖 𝙝𝙖𝙨 𝙙𝙚𝙟𝙖𝙙𝙤 𝙩𝙖𝙣 𝙧𝙚𝙫𝙚𝙣𝙩𝙖𝙙𝙖 𝙦𝙪𝙚 𝙣𝙤 𝙥𝙪𝙚𝙙𝙚 𝙨𝙤𝙨𝙩𝙚𝙣𝙚𝙧 𝙣𝙞 𝙨𝙪 𝙥𝙧𝙤𝙥𝙞𝙤 𝙘𝙪𝙚𝙧𝙥𝙤 𝙡𝙖 𝙢𝙖𝙡𝙙𝙞𝙩𝙖 𝙯𝙤𝙧𝙧𝙖! 
  
 ${text} 
 🤤🥵 *¡𝐘𝐀 𝐓𝐄 𝐇𝐀𝐍 𝐅𝐎𝐋𝐋𝐀𝐃𝐎!* 🥵🤤`, mentionedJid: [user] }, { quoted: m})} 
  
 async function game5(conn, m, pushname, text, astro, sender, prefix, command) { 
 if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra) 
 if (!text) return m.reply(`🥌ᴘɪᴇᴅʀᴀ, 📄ᴘᴀᴘᴇʟ, ᴏ ✂️ᴛɪᴊᴇʀᴀ\nᴘᴜᴇᴅᴇ ᴜsᴀʀ ᴇsᴛᴏs ᴄᴏᴍᴀɴᴅᴏ\n🥌.ppt piedra\n📄 .ppt papel\n✂️.ppt tijera\n\nᴜsᴇ ᴇɴ ᴍɪɴᴜsᴄᴜʟᴀs\n\n*Ejemplo :* #ppt papel\n`)  
 var astro = Math.random() 
 if (astro < 0.34) { 
 astro = 'piedra'  
 } else if (astro > 0.34 && astro < 0.67) { 
 astro = 'tijera'  
 } else { 
 astro = 'papel' 
 } 
 if (text == astro) { 
 global.db.data.users[m.sender].exp += 500 
 m.reply(`🔰 EMPATE! 🤝\n\n👉🏻 TU: ${text}\n👉🏻 EL BOT: ${astro}\n🎁 PREMIOS +500 XP`) 
 } else if (text == 'papel') { 
 if (astro == 'piedra') { 
 global.db.data.users[m.sender].exp += 2000 
 m.reply(`🥳 HA GANADO! 🎉\n\n👉🏻 TU: ${text}\n👉🏻 EL BOT: ${astro}\n🎁 PREMIO +2000 XP`) 
 } else { 
 global.db.data.users[m.sender].exp -= 300 
 m.reply(`HA PERDIDO ! 🤡\n\n👉🏻 TU: ${text}\n👉🏻 EL BOT: ${astro}\n❌ PREMIO -300 XP`) 
 } 
 } else if (text == 'tijera') { 
 if (astro == 'papel') { 
 global.db.data.users[m.sender].exp += 1000 
 m.reply(`🥳 HA GANADO! 🎉\n\n👉🏻 TU: ${text}\n👉🏻 EL BOT: ${astro}\n🎁 PREMIO +1000 XP`) 
 } else { 
 global.db.data.users[m.sender].exp -= 300 
 m.reply(`HA PERDIDO! 🤡\n\n👉🏻 TU: ${text}\n👉🏻 EL BOT: ${astro}\n❌ PREMIO -300 XP`) 
 } 
 } else if (text == 'tijera') { 
 if (astro == 'papel') { 
 global.db.data.users[m.sender].exp += 1000 
 m.reply(`🥳 HA GANADO! 🎉\n\n👉🏻 TU: ${text}\n👉🏻 EL BOT: ${astro}\n🎁 PREMIO +1000 XP`) 
 } else { 
 global.db.data.users[m.sender].exp -= 300 
 m.reply(`HA PERDIDO! 🤡\n\n👉🏻 TU: ${text}\n👉🏻 EL BOT: ${astro}\n❌ PREMIO -300 XP`) 
 } 
 } else if (text == 'papel') { 
 if (astro == 'piedra') { 
 global.db.data.users[m.sender].exp += 1000 
 m.reply(`🥳 HA GANADO! 🎉\n\n👉🏻 TU: ${text}\n👉🏻 EL BOT: ${astro}\n🎁 PREMIO +1000 XP`) 
 } else { 
 global.db.data.users[m.sender].exp -= 300 
 m.reply(`HA PERDIDO! 🤡\n\n👉🏻 TU: ${text}\n👉🏻 EL BOT: ${astro}\n❌ PREMIO -300 XP`) 
 } 
 } else if (text == 'piedra') { 
 if (astro == 'tijera') { 
 global.db.data.users[m.sender].exp += 1000 
 m.reply(`🥳 HA GANADO! 🎉\n\n👉🏻 TU: ${text}\n👉🏻 EL BOT: ${astro}\n🎁 PREMIO +1000 XP`) 
 } else { 
 global.db.data.users[m.sender].exp -= 300 
 m.reply(`HA PERDIDO! 🤡\n\n👉🏻 TU: ${text}\n👉🏻 EL BOT: ${astro}\n❌ PREMIO -300 XP`) 
 }}} 
  
 module.exports = {game, game1, game2, game3, game4, game5} 
  
 let file = require.resolve(__filename) 
 fs.watchFile(file, () => { 
         fs.unwatchFile(file) 
         console.log(chalk.redBright(`Update ${__filename}`)) 
         delete require.cache[file] 
         require(file) 
 })