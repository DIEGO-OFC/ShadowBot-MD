require('../main.js')  
 //require("../main")(conn, m, chatUpdate, mek, color, msgs) 
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
 const {createHash} = require('crypto') 
 let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])] 
 for (let jid of mentionUser) { 
 let user = global.db.data.users[jid] 
 if (!user) continue 
 let afkTime = user.afkTime 
 if (!afkTime || afkTime < 0) continue 
 let reason = user.afkReason || '' 
 m.reply(`💤 𝙽𝙾 𝙻𝙾𝚂 𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙴 💤\n𝙴𝚜𝚝𝚎 𝚞𝚜𝚞𝚊𝚛𝚒𝚘 𝚚𝚞𝚎 𝚖𝚎𝚗𝚌𝚒𝚘𝚗𝚊𝚜 𝚎𝚜𝚝𝚊 𝙰𝙵𝙺\n\n${reason ? '🔸️ *𝚁𝙰𝚉𝙾𝙽* : ' + reason : '🔸️ *𝚁𝙰𝚉𝙾𝙽* : 𝚂𝚒𝚗 𝚛𝚊𝚣𝚘𝚗'}\n🔸️ *𝙴𝚂𝚃𝚄𝚅𝙾 𝙸𝙽𝙰𝙲𝚃𝙸𝚅𝙾 𝙳𝚄𝚁𝙰𝙽𝚃𝙴 : ${clockString(new Date - afkTime)}`.trim())} 
 if (global.db.data.users[m.sender].afkTime > -1) { 
 let user = global.db.data.users[m.sender] 
 m.reply(`╭━─━─━─≪☣️≫─━─━─━╮\n┃𝙳𝙴𝙹𝙰𝚂𝚃𝙴 𝙳𝙴 𝙴𝚂𝚃𝙰 𝙰𝙵𝙺\n┃${user.afkReason ? '\n┃🔸️ *𝚁𝙰𝚉𝙾𝙽 :* ' + user.afkReason : ''}\n┃🔸 *𝙴𝚂𝚃𝚄𝚅𝙾 𝙸𝙽𝙰𝙲𝚃𝙸𝚅𝙾 𝙳𝚄𝚁𝙰𝙽𝚃𝙴* ${clockString(new Date - user.afkTime)}\n╰━─━─━─≪☣️≫─━─━─━╯`.trim()) 
 user.afkTime = -1 
 user.afkReason = ''  
 } 
async function addDolares(conn, m, sender, text, command) { 
    let pajak = 0;
  let who; 
   if (m.isGroup) who = m.mentionedJid[0]; 
   else who = m.chat; 
   if (!who) return m.reply(`$𝘿𝙀𝘽𝙀 𝘿𝙀 𝙀𝙏𝙄𝙌𝙐𝙀𝙏𝘼𝙍 𝘼𝙇 𝙐𝙎𝙐𝘼𝙍𝙄𝙊 *@tag*`);
   let txt = text.replace("@" + who.split`@`[0], "").trim(); 
   if (!txt) return m.reply(`[❕] Ingrese la cantidad de dólares`);
   if (isNaN(txt)) return  m.reply(`𝙎𝙄𝙉 𝙎𝙄𝙈𝘽𝙊𝙇𝙊𝙎, 𝙎𝙊𝙇𝙊 𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙉𝙐𝙈𝙀𝙍𝙊𝙎\n\n𝙉𝙊 𝙎𝙔𝙈𝘽𝙊𝙇𝙎, 𝙅𝙐𝙎𝙏 𝙀𝙉𝙏𝙀𝙍 𝙉𝙐𝙈𝘽𝙀𝙍𝙎`);
   let dmt = parseInt(txt); 
   let dolares = dmt; 
   let pjk = Math.ceil(dmt * pajak); 
   dolares += pjk; 
   if (dolares < 1) return  m.reply(`𝙀𝙇 𝙉𝙐𝙈𝙀𝙍𝙊 𝙈𝙄𝙉𝙄𝙈𝙊 𝙋𝘼𝙍𝘼 DOLARES 𝙀𝙎 *1*\n\n𝙏𝙃𝙀 𝙈𝙄𝙉𝙄𝙈𝙐𝙈 𝙉𝙐𝙈𝘽𝙀𝙍 𝙁𝙊𝙍 𝘿𝙄𝘼𝙈𝙊𝙉𝘿𝙎 𝙄𝙎 *1*`);
   let users = global.db.data.users; 
   users[who].dolares += dmt; 
   conn.sendMessage( 
     m.chat, 
     { 
       text: `╭[ DOLARES 💵 ]⬣\n┃\n┃ღ *PARA:*\n┃ღ *${text}*\n┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n┃ღ *SE LE AÑADIÓ | NOW YOU HAVE*\n┃ღ *$${dmt} Dolare(s)* 💸\n┃\n╰━━━━━━━━━━━━━━⬣`, 
       mentions: [who], 
     }, 
     { quoted: m }, 
   ); 
 };
async function quitardolares(conn, m, sender, text, args, command) {  
let pajak = 0; 
   let who; 
   if (m.isGroup) who = m.mentionedJid[0]; 
   else who = m.chat; 
   if (!who) return m.reply(`𝘿𝙀𝘽𝙀 𝘿𝙀 𝙀𝙏𝙄𝙌𝙐𝙀𝙏𝘼𝙍 𝘼𝙇 𝙐𝙎𝙐𝘼𝙍𝙄𝙊 *@tag*`);
   let txt = text.replace("@" + who.split`@`[0], "").trim(); 
   if (!txt) return m.reply(`[❕] Ingrese la cantidad de dólares`);
   if (isNaN(txt)) 
     throw `𝙎𝙄𝙉 𝙎𝙄𝙈𝘽𝙊𝙇𝙊𝙎, 𝙎𝙊𝙇𝙊 𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙉𝙐𝙈𝙀𝙍𝙊𝙎\n\n𝙉𝙊 𝙎𝙔𝙈𝘽𝙊𝙇𝙎, 𝙅𝙐𝙎𝙏 𝙀𝙉𝙏𝙀𝙍 𝙉𝙐𝙈𝘽𝙀𝙍𝙎`; 
   let dmt = parseInt(txt); 
   if (dmt < 1)  m.reply(`𝙀𝙇 𝙉𝙐𝙈𝙀𝙍𝙊 𝙈𝙄𝙉𝙄𝙈𝙊 𝙋𝘼𝙍𝘼 DOLARES 𝙀𝙎 *1*\n\n𝙏𝙃𝙀 𝙈𝙄𝙉𝙄𝙈𝙐𝙈 𝙉𝙐𝙈𝘽𝙀𝙍𝙊 𝙁𝙊𝙍 𝘿𝙄𝘼𝙈𝙊𝙉𝘿𝙎 𝙄𝙎 *1*`);
   let users = global.db.data.users; 
   if (!users[who]) users[who] = { dolares: 0 }; 
   if (users[who].dolares < dmt) return m.reply(`𝘿𝙊𝙇𝘼𝙍𝙀𝙎 𝙀𝙉 𝘾𝙊𝙉𝙏𝙍𝘼𝘾𝘾𝙄𝙊𝙉!`);
   users[who].dolares -= dmt; 
   conn.sendMessage(m.chat, { 
     text: `╭[ DOLARES 💵 ]⬣\n┃\n┃ღ *PARA:*\n┃ღ *${text}*\n┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n┃ღ *SE QUITARON | NOW YOU HAVE*\n┃ღ *$${dmt} Dolare(s)* 💸\n┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n┃ღ *TU SALDO ACTUAL | YOUR CURRENT BALANCE: $${users[who].dolares}*\n┃\n╰━━━━━━━━━━━━━━⬣`, 
     mentions: [who], 
   }); 
 }; 
 
  async function tranferSdw(conn, m, sender, text, command) { 
 function no(number){ 
 return number.replace(/\s/g,'').replace(/([@+-])/g,'')} 
 text = no(text) 
  
 if(isNaN(text)) { 
 var number = text.split`@`[1] 
 } else if(!isNaN(text)) { 
 var number = text 
 } 
  
 if(!text && !m.quoted) return m.reply(`*ETIQUETE AL USUARIO, ESCRIBA SU NUMERO O RESPONDA AL MENSAJE PARA REINICIAR DATOS*`) 
 if(isNaN(number)) return m.reply(`*EL NÚMERO QIE INGRESÓ NO ES VÁLIDO PARA REINICIAR LOS DATOS*`) 
 try { 
 if(text) { 
 var user = number + '@s.whatsapp.net' 
 } else if(m.quoted.sender) { 
 var user = m.quoted.sender 
 } else if(m.mentionedJid) { 
 var user = number + '@s.whatsapp.net' 
 }} catch (e) { 
 } finally { 
  
 let groupMetadata = m.isGroup ? await conn.groupMetadata(m.chat) : {} 
 let participants = m.isGroup ? groupMetadata.participants : [] 
 let users = m.isGroup ? participants.find(u => u.jid == user) : {} 
 let number = user.split('@')[0] 
  
 delete global.global.db.data.users[user] 
 m.reply(`*SE REINICIO A @${number} DE LA BASE DE DATOS*`)
         
  
 }}
async function cazar(conn, m, sender, text, fkontak) {  
 /* const getRandom = (ext) => {  
        return `${Math.floor(Math.random() * 10000)}${ext}`; 
      }*/
let user = global.db.data.users[m.sender] 
                 let randomaku1 = `${Math.floor(Math.random() * 5)}` 
                 let randomaku2 = `${Math.floor(Math.random() * 5)}` 
                 let randomaku4 = `${Math.floor(Math.random() * 5)}` 
                 let randomaku3 = `${Math.floor(Math.random() * 5)}` 
                 let randomaku5 = `${Math.floor(Math.random() * 5)}` 
                 let randomaku6 = `${Math.floor(Math.random() * 5)}` 
                 let randomaku7 = `${Math.floor(Math.random() * 5)}` 
                 let randomaku8 = `${Math.floor(Math.random() * 5)}` 
                 let randomaku9 = `${Math.floor(Math.random() * 5)}` 
                 let randomaku10 = `${Math.floor(Math.random() * 5)}` 
                 let randomaku11 = `${Math.floor(Math.random() * 5)}` 
                 let randomaku12 = `${Math.floor(Math.random() * 5)}`.trim() 
  
                 let rbrb1 = (randomaku1 * 1) 
                 let rbrb2 = (randomaku2 * 1) 
                 let rbrb3 = (randomaku3 * 1) 
                 let rbrb4 = (randomaku4 * 1) 
                 let rbrb5 = (randomaku5 * 1) 
                 let rbrb6 = (randomaku6 * 1) 
                 let rbrb7 = (randomaku7 * 1) 
                 let rbrb8 = (randomaku8 * 1) 
                 let rbrb9 = (randomaku9 * 1) 
                 let rbrb10 = (randomaku10 * 1) 
                 let rbrb11 = (randomaku11 * 1) 
                 let rbrb12 = (randomaku12 * 1) 
  
                 let anti1 = `${rbrb1}` 
                 let anti2 = `${rbrb2}` 
                 let anti3 = `${rbrb3}` 
                 let anti4 = `${rbrb4}` 
                 let anti5 = `${rbrb5}` 
                 let anti6 = `${rbrb6}` 
                 let anti7 = `${rbrb7}` 
                 let anti8 = `${rbrb8}` 
                 let anti9 = `${rbrb9}` 
                 let anti10 = `${rbrb10}` 
                 let anti11 = `${rbrb11}` 
                 let anti12 = `${rbrb12}` 
  
                 let ar1 = `${['🪚','⛏️','🧨','💣','🔫','🔪','🗡️','🏹','🦾','🥊','🧹','🔨','🛻']}` 
                 let ar2 = `${['🪚','⛏️','🧨','💣','🔫','🔪','🗡️','🏹','🦾','🥊','🧹','🔨','🛻']}` 
                 let ar3 = `${['🪚','⛏️','🧨','💣','🔫','🔪','🗡️','🏹','🦾','🥊','🧹','🔨','🛻']}` 
                 let ar4 = `${['🪚','⛏️','🧨','💣','🔫','🔪','🗡️','🏹','🦾','🥊','🧹','🔨','🛻']}` 
                 let ar5 = `${['🪚','⛏️','🧨','💣','🔫','🔪','🗡️','🏹','🦾','🥊','🧹','🔨','🛻']}` 
                 let ar6 = `${['🪚','⛏️','🧨','💣','🔫','🔪','🗡️','🏹','🦾','🥊','🧹','🔨','🛻']}` 
                 let ar7 = `${['🪚','⛏️','🧨','💣','🔫','🔪','🗡️','🏹','🦾','🥊','🧹','🔨','🛻']}` 
                 let ar8 = `${['🪚','⛏️','🧨','💣','🔫','🔪','🗡️','🏹','🦾','🥊','🧹','🔨','🛻']}` 
                 let ar9 = `${['🪚','⛏️','🧨','💣','🔫','🔪','🗡️','🏹','🦾','🥊','🧹','🔨','🛻']}` 
                 let ar10 = `${['🪚','⛏️','🧨','💣','🔫','🔪','🗡️','🏹','🦾','🥊','🧹','🔨','🛻']}` 
                 let ar11 = `${['🪚','⛏️','🧨','💣','🔫','🔪','🗡️','🏹','🦾','🥊','🧹','🔨','🛻']}` 
                 let ar12 = `${['🪚','⛏️','🧨','💣','🔫','🔪','🗡️','🏹','🦾','🥊','🧹','🔨','🛻']}` 
  
 let hsl = ` 
 *✧ Resultados de la caza ✧* 
  
  *🐂 ${ar1} ${anti1}*                         *🐃 ${ar7} ${anti7}* 
  *🐅 ${ar2} ${anti2}*                         *🐮 ${ar8} ${anti8}* 
  *🐘 ${ar3} ${anti3}*                         *🐒 ${ar9} ${anti9}* 
  *🐐 ${ar4} ${anti4}*                         *🐗 ${ar10} ${anti10}* 
  *🐼 ${ar5} ${anti5}*                         *🐖 ${ar11} ${anti11}* 
  *🐊 ${ar6} ${anti6}*                    *🐓 ${ar12} ${anti12}*` 
  
                 global.db.data.users[m.sender].banteng += rbrb1 
                 global.db.data.users[m.sender].harimau += rbrb2 
                 global.db.data.users[m.sender].gajah += rbrb3 
                 global.db.data.users[m.sender].kambing += rbrb4 
                 global.db.data.users[m.sender].panda += rbrb5 
                 global.db.data.users[m.sender].buaya += rbrb6 
                 global.db.data.users[m.sender].kerbau += rbrb7 
                 global.db.data.users[m.sender].sapi += rbrb8 
                 global.db.data.users[m.sender].monyet += rbrb9 
                 global.db.data.users[m.sender].babihutan += rbrb10 
                 global.db.data.users[m.sender].babi += rbrb11 
                 global.db.data.users[m.sender].ayam += rbrb12 
  
 let time = global.db.data.users[m.sender].lastberburu + 2700000 //45 Minutos 
 if (new Date - global.db.data.users[m.sender].lastberburu < 2700000) return conn.adReply(m.chat, `Descansa :v\n\n⫹⫺ 𝙏𝙄𝙀𝙈𝙋𝙊 : 𝙏𝙄𝙈𝙀 ${clockString(time - new Date())}\n${wm}`, fkontak, m) 
  
 setTimeout(() => { 
 conn.adReply(m.chat, hsl, fkontak, m) 
 }, 20000) 
 setTimeout(() => { 
 conn.adReply(m.chat, `@${m.sender.split("@s.whatsapp.net")[0]} *${['OBJETIVO FIJADO 🎯','Carnada en Marcha 🍫 🍇 🍖','ANIMALES DETECTADOS!! 🐂 🐅 🐘 🐼','ANIMALES DETECTADOS!! 🐖 🐃 🐮 🐒'].getRandom()}*`, null, { mentions: [m.sender]})}, 18000)         
  
 setTimeout(() => { 
  const getRandom = (ext) => {  

        return `${Math.floor(Math.random() * 10000)}${ext}`;  

      };  
 conn.adReply(m.chat, `@${m.sender.split("@s.whatsapp.net")[0]} *${['Armas lista para la Caza!!','Probando Armas 🔫 💣 🪓 🏹','CARROS PARA LA CAZA!! 🚗 🏍️ 🚜','TIEMPO BUENO PARA LA CAZA 🧤'].getRandom()}*`, null, { mentions: [m.sender]})}, 15000)          
  
 setTimeout(() => { 
 conn.adReply(m.chat, `@${m.sender.split("@s.whatsapp.net")[0]} *${['Looking for hunting implements...','Getting everything ready for the hunt!!','Establishing Hunting Place...','PREPARING HUNTING PLACE!!'].getRandom()}*`, null, { mentions: [m.sender]})}, 18000)         
  
 setTimeout(() => { 
 conn.adReply(m.chat, `@${m.sender.split("@s.whatsapp.net")[0]} *${['Buscando implementos de caza...','Alistando todo para la caza!!','Estableciendo Lugar de la Caza...','PREPARANDO LUGAR DE CAZA!!'].getRandom()}*`, null, { mentions: [m.sender]})}, 18000)         
 user.lastberburu = new Date * 1         
 }
 async function reg(conn, m, sender, text, fkontak) {  
  let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i  
  let user = global.db.data.users[m.sender]  
  if (user.registered === true) return reply(`*Ya estas registrado 🧐*`)   
  if (!Reg.test(text)) return reply(`*❎ Incorrecto*\nUse de esta forma\nEjemplo: ${prefix}reg nombre.edad`)   
  let [_, name, splitter, age] = text.match(Reg)  
  if (!name) return reply('El nombre no puede estar vacio')   
  if (!age) return reply('La edad no puede esta vaciar (Numeros)')   
  age = parseInt(age)  
  if (age > 100) return reply('Que viejo (。-`ω´-)')   
  if (age < 5) return reply('🚼  Basado, los bebes saben escribir.✍️😳')   
  if (name.length >= 30) return reply('🐈 Fua que basado, el nombre es muy largo que quiere un puente como nombre😹')   
  user.name = name.trim()  
  user.age = age  
  user.regTime = + new Date  
  user.registered = true  
  // let sn = createHash('md5').update(m.sender).digest('hex')  
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? conn.user.jid : m.sender  
  const date = moment.tz('America/Bogota').format('DD/MM/YYYY')  
  const time = moment.tz('America/Argentina/Buenos_Aires').format('LT')  
  global.db.data.users[m.sender].limit += 2  
  global.db.data.users[m.sender].exp += 200  
  conn.sendMessage(m.chat, { text: `*[ ✅ REGISTRO COMPLETADO ]*\n◉ *Nombre:* ${name}\n◉ *Edad:* ${age}\n◉ *Hora:* ${time}\n◉ *Fecha:* ${date}\n◉ *Número:* wa.me/${sender.split("@")[0]}\n\n🎁 Recompensa\n◉ 2 diamante 💎\n◉ 200 exp\n\n*Para ver los comandos del bot usar:*\n\n${prefix}menu`,  
  contextInfo:{  
  mentionedJid:[name],  
  forwardingScore: 9999999,  
  isForwarded: true,   
  "externalAdReply": {  
  "showAdAttribution": true,  
  "containsAutoReply": true,  
  "title": `${botname}`,  
  "body": `${name}`,  
  "previewType": "PHOTO",  
  "thumbnailUrl": ``,  
  "thumbnail": imagen1,   
  "sourceUrl": md}}},  
  { quoted: m})} 
  async function levelxd(conn, m, sender, text, fkontak) {  
  //const {canLevelUp, xpRange} = "../libs/fuctions2.js";    
  let who;   
     if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender;   
     else who = m.sender;   
      if (!(who in global.db.data.users)) return m.reply(`✳️ ᴇʟ ᴜsᴜᴀʀɪᴏ ɴᴏ sᴇ ᴇɴᴄᴜᴇɴᴛʀᴀ ᴇɴ ᴍɪ ʙᴀsᴇ ᴅᴇ ᴅᴀᴛᴏs`)    
   let user = global.db.data.users[m.sender]; 
   if (!canLevelUp(user.level, user.exp, global.multiplier)) { 
     let {min, xp, max} = xpRange(user.level, global.multiplier); 
     return m.reply(` 
 ╔════ *NIVEL* 
 ➢ 👥 Nombre : @${who.split('@')[0]} 
 ➢ 🧰 Nivel : *${user.level}*
 ➢ 👑 XP : *${`${ConvertMiles(user.exp - min)}`} / ${`${ConvertMiles(xp)}`}* 
 ╚══════════════ 
 Te falta *${`${ConvertMiles(max - user.exp)}`}* de *XP* para subir de nivel 
  
 ${wm} 
 `);
   } 
   let before = user.level * 1; 
   while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++; 
   if (before !== user.level) { 
     let teks = `🎊 Bien hecho @${who.split('@')[0]} Nivel:

 ╔════  *LEVEL UP* 
 ➢ 👥 Nivel anterior : *${before}* 
 ➢ 🧰 Nivel actual : *${user.level}* 
 ╚══════════════ 
 *_Cuanto más interactúes con los bots, mayor será tu nivel_* 
  
 ${wm} 
 `.trim(); 
     try { 
       m.reply(teks)

     } catch (e) { 
       m.reply(str); 
     } 
   } }
 async function rob(conn, m, sender, fkontak) { 
   // let _user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender;

    const user = global.db.data.users[m.sender];  
  let time = global.db.data.users[m.sender].lastrob+ 7200000;   
     if (new Date() - global.db.data.users[m.sender].lastrob < 7200000)   
       return m.reply(`*𝙴𝚜𝚝𝚊𝚜 𝚌𝚊𝚗𝚜𝚊𝚍𝚘, 𝚍𝚎𝚋𝚎𝚜 𝚍𝚎𝚜𝚌𝚊𝚗𝚜𝚊𝚛 𝚌𝚘𝚖𝚘 𝚖𝚒𝚗𝚒𝚖𝚘 ${msToTime(time - new Date())} 𝚙𝚊𝚛𝚊 𝚟𝚘𝚕𝚟𝚎𝚛 𝚊 robar!*`);   
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false;  
  else who = m.chat;  
    if (!who) {  
      return m.reply('⚠️ Debes etiquetar a la persona que quieres robar');  
    }  
    try {  
      if (!(who in global.db.data.users)) {  
        return m.reply('⚠️ El usuario no se encuentra en mi base de datos.');  
      }  
      if (m.quoted?.sender) m.mentionedJid.push(m.quoted.sender);      
        //  if (_user.startsWith(conn.user.jid.split`@`[0])) return m.reply("No puedes saquear a la bot :I");  
      const targetUser = global.db.data.users[who];  
      const dolares = Math.floor(Math.random() * 15) + 10;  
      const limit = Math.floor(Math.random() * 5) + 3;  
      const rob = Math.floor(Math.random() * 500);  
      if (targetUser.limit < 10) {  
        return m.reply('[😹] El usuario no tiene suficientes recursos, talvez tiene el dinero en su banco!'
);  
      }  
      if (targetUser.dolares < 2) {  
        return m.reply('[😹] El usuario no tiene suficientes recursos, talvez tiene el dinero en su banco!');  
      }  
      user.dolares += dolares;  
      user.limit += limit;  
      targetUser.dolares -= dolares;  
      targetUser.limit -= limit;  
      await conn.sendMessage(  
        m.chat,  
        {  
          text: `Has saqueado a @${who.split('@')[0]}:  
          - Dinero: ${dolares}  
          - Diamante: ${limit}  
          Robado por: @${m.sender.split('@')[0]} 
  
 Rob By DEV.DIEGO-OFC`,  
          mentions: [who, m.sender]  
        },  
        { quoted: m }  
      );  
      global.db.data.users[m.sender].lastrob = new Date() * 1;   
    } catch {  
      await m.reply(  
        '❕ ERROR, POR FAVOR INTÉNTELO DE NUEVO, SEGURAMENTE EL USUARIO ESTÁ AFK'  
      );  
  
    }} 
  
 async function bal(conn, m, sender, fkontak) { 
  let who;  
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender;  
    else who = m.sender;  
     if (!(who in global.db.data.users)) return m.reply(`✳️ ᴇʟ ᴜsᴜᴀʀɪᴏ ɴᴏ sᴇ ᴇɴᴄᴜᴇɴᴛʀᴀ ᴇɴ ᴍɪ ʙᴀsᴇ ᴅᴇ ᴅᴀᴛᴏs`)  
  //  let name = conn.getName(who);  
    let db = await conn.profilePictureUrl(who, "image").catch((_) => "https://telegra.ph/file/e01c177fb1c61f453c659.jpg");  
    let bank = `╭━━━━ 𝐁𝐀𝐍𝐂𝐎 🏦 ━━━╾•  
  ❍ *Nombre:* @${who.split('@')[0]} 
  ❍ *Diamantes:* ${global.db.data.users[who].limit} 💎  
  ❍ *Dolares:* $${global.db.data.users[who].dolares} 💸  
 ❍ *Banco:* ${global.db.data.users[who].bank}  
  ╰━━━━━━━━━━━━╾•`.trim();  
     
  conn.sendMessage(m.chat, { react: { text: "💳" , key: m.key }})
    conn.sendMessage(  
      m.chat,  
      {  
        image: {  
          url: "https://telegra.ph/file/e01c177fb1c61f453c659.jpg",  
        },  
        caption: bank,  
        contextInfo: {  
          mentionedJid: [m.sender],  
          externalAdReply: {  
            title: `RPG - BANK`,  
            sourceUrl: "http://paypal.me/DorratBotOficial",  
            mediaType: 1,  
            showAdAttribution: true,  
            thumbnailUrl: "https://telegra.ph/file/e01c177fb1c61f453c659.jpg",  
          },  
        },  
      },  
      {  
        quoted: m,  
      }  
    );  
  } 
 async function work(conn, m, sender, fkontak) { 
   let d = Math.floor(Math.random() * 20);      
    let time = global.db.data.users[m.sender].lastwork + 600000;      
    if (new Date() - global.db.data.users[m.sender].lastwork < 600000) {  
      return m.reply(`*𝙴𝚜𝚝𝚊𝚜 𝚌𝚊𝚗𝚜𝚊𝚍𝚘, 𝚍𝚎𝚋𝚎𝚜 𝚍𝚎𝚜𝚌𝚊𝚗𝚜𝚊𝚛 𝚌𝚘𝚖𝚘 𝚖𝚒𝚗𝚒𝚖𝚘 ${msToTime(time - new Date())} 𝚙𝚊𝚛𝚊 𝚟𝚘𝚕𝚟𝚎𝚛 𝚊 𝚝𝚛𝚊𝚋𝚊𝚓𝚊𝚛!*`);  
    }      
    //let pp = "galeria/menudorrat3.jpg";      
    m.reply(`*${pickRandom(global.work)} $${d}* *DOLARES*`);      
    global.db.data.users[m.sender].dolares += d * 1;   
     global.db.data.users[m.sender].lastwork = new Date() * 1;   
  };   
  
 async function mine(conn, m, sender, fkontak) { 
 if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra) 
 const date = global.db.data.users[m.sender].lastmiming + 600000; 
 if (new Date - global.db.data.users[m.sender].lastmiming < 600000) return m.reply(`*[ ⏳ ] Espera ${msToTime(date - new Date())} min para volver a minar*`)  
 const exp = Math.floor(Math.random() * 1000) 
 global.db.data.users[m.sender].exp += exp; 
 m.reply(`*Genial minaste ${exp} XP*`) 
 global.db.data.users[m.sender].lastmiming = new Date * 1; 
 } 
  
 async function buy(conn, m, sender, args, command, replace, fkontak) { 
 if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra) 
 let count = command.replace(/^buy/i, ''); 
 count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].exp / 450) : parseInt(count) : args[0] ? parseInt(args[0]) : 1; 
 count = Math.max(1, count); 
 if (global.db.data.users[m.sender].exp >= 450 * count) { 
 global.db.data.users[m.sender].exp -= 450 * count; 
 global.db.data.users[m.sender].limit += count; 
 m.reply(`╔═❖ *ɴᴏᴛᴀ ᴅᴇ ᴘᴀɢᴏ*\n║‣ *ʜᴀs ᴄᴏᴍᴘʀᴀᴅᴏ :* ${count}💎\n║‣ *ʜᴀs ɢᴀsᴛᴀᴅᴏ :* ${450 * count} XP\n╚═══════════════`); 
 } else m.reply(`🔶 ɴᴏ ᴛɪᴇɴᴇ sᴜғɪᴄɪᴇɴᴛᴇ xᴘ ᴘᴀʀᴀ ᴄᴏᴍᴘʀᴀʀ *${count}* ᴅɪᴀᴍᴀɴᴛᴇ 💎 ᴘᴜᴇᴅᴇs ᴄᴏɴsᴇɢᴜɪʀ *xᴘ* ᴜsᴀɴᴅᴏ ᴇʟ ᴄᴏᴍᴀɴᴅᴏs #minar`) 
 } 
  async function lb(conn, participants, args, m) { 
 const participants2 = [...m.split()];
const users = global.db.data.users;

const sortedExp = users
  .map(({ exp }) => exp)
  .sort((a, b) => b - a);
const sortedDolares = users
  .map(({ dolares }) => dolares)
  .sort((a, b) => b - a);
const sortedLevel = users
  .map(({ level }) => level)
  .sort((a, b) => b - a);

const usersExp = sortedExp.map((exp) => users.find((user) => user.exp === exp));
const usersDolares = sortedDolares.map((dolares) => users.find((user) => user.dolares === dolares));
const usersLevel = sortedLevel.map((level) => users.find((user) => user.level === level));

const len = args[0];
 const texto = `𝚃𝙰𝙱𝙻𝙰 𝙳𝙴 𝙲𝙻𝙰𝚂𝙸𝙵𝙸𝙲𝙰𝙲𝙸𝙾𝙽 
  
 ╔═❖ *𝚃𝙾𝙿 ${len} 𝚇𝙿* 🧬  
 ║𝚃𝚞 : ${usersExp.indexOf(m.sender) + 1} 𝚍𝚎 ${usersExp.length} 
 ${sortedExp.slice(0, len).map(({jid, exp}, i) => `║${i + 1}. ${participants2.some((p) => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} ➭ *${exp} exp*`).join`\n`} 
 ╚═══════════════   
  
 ╔═❖ *𝚃𝙾𝙿 ${len} DOLARES 💵* 
 ║𝚃𝚞 : ${usersDolares.indexOf(m.sender) + 1} 𝚍𝚎 ${usersDolares.length} 
 ${sortedDolares.slice(0, len).map(({jid, dolares}, i) => `║${i + 1}. ${participants2.some((p) => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} ➭ *${dolares} dolares*`).join`\n`} 
 ╚═══════════════   
  
 ╔═❖ *𝚃𝙾𝙿 ${len} 𝙽𝙸𝚅𝙴𝙻* ⬆️ 
 ║𝚃𝚞 : ${usersLevel.indexOf(m.sender) + 1} 𝚍𝚎 ${usersLevel.length} 
 ${sortedLevel.slice(0, len).map(({jid, level}, i) => `║${i + 1}. ${participants2.some((p) => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} ➭ *nivel ${level}*`).join`\n`} 
 ╚═══════════════ `.trim(); 
    conn.sendTextWithMentions(m.chat, texto, m)}
 async function afk(conn, m, sender, args, pushname, text) { 
 if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra) 
 let user = global.db.data.users[m.sender] 
 user.afkTime = + new Date 
 user.afkReason = text 
 m.reply(`╭━─━─━─≪ 𝙰𝙺𝙵 ≫─━─━─━╮ 
 ┃ 𝙴𝚂𝚃𝙴 𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂 ${pushname} 
 ┃ 𝙴𝚂𝚃𝙰 𝙸𝙽𝙰𝙲𝚃𝙸𝚅𝙾 😴 
 ┃ ≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋ 
 ┃ 💤 𝙽𝙾 𝙻𝙾𝚂 𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙴 💤 
 ┃ ☣️ 𝙼𝙾𝚃𝙸𝚅𝙾𝚂 : ${text ? text : ''} 
 ╰━─━─━─≪ ${vs} ≫─━─━─━╯`)} 
  
 async function claim(conn, m, sender) { 
 const free = 5000;  
  const prem = 20000; 
  let time = global.db.data.users[m.sender].lastclaim + 86400000;  
  if (new Date() - global.db.data.users[m.sender].lastclaim < 86400000)  
  return m.reply( `🎁 *Ya recogiste tu recompensa diaria*\n\n🕚 Vuelve en *${msToTime(time - new Date())}* `); 
  global.db.data.users[m.sender].exp += free; 
  m.reply(`  
  🎁 *RECOMPENSA DIARIA*  
  💥 *Has recibido:*  
  🆙 *XP* : +${free}`);  
  global.db.data.users[m.sender].lastclaim = new Date() * 1;  
  };
const growth = Math.pow(Math.PI / Math.E, 1.618) * Math.E * 0.75; 
function xpRange(level, multiplier = global.multiplier || 1) { 
   if (level < 0) throw new TypeError("level cannot be negative value"); 
   level = Math.floor(level); 
   let min = level === 0 ? 0 : Math.round(Math.pow(level, growth) * multiplier) + 1; 
   let max = Math.round(Math.pow(++level, growth) * multiplier); 
   return { 
     min, 
     max, 
     xp: max - min, 
   }; 
 } 
 function findLevel(xp, multiplier = global.multiplier || 1) { 
   if (xp === Infinity) return Infinity; 
   if (isNaN(xp)) return NaN; 
   if (xp <= 0) return -1; 
   let level = 0; 
   do level++; 
   while (xpRange(level, multiplier).min <= xp); 
   return --level; 
 } 
function canLevelUp(level, xp, multiplier = global.multiplier || 1) { 
   if (level < 0) return false; 
   if (xp === Infinity) return true; 
   if (isNaN(xp)) return false; 
   if (xp <= 0) return false; 
   return level < findLevel(xp, multiplier); 
 }
 //función pickrandow 
function sort(property, ascending = true) { 
   if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]; 
   else return (...args) => args[ascending & 1] - args[!ascending & 1]; 
 } 
  
 function toNumber(property, _default = 0) { 
   if (property) { 
     return (a, i, b) => { 
       return {...b[i], [property]: a[property] === undefined ? _default : a[property]}; 
     }; 
   } else return (a) => a === undefined ? _default : a; 
 } 
  
 function enumGetKey(a) { 
   return a.jid; 
 }
 function pickRandom(list) { 
 return list[Math.floor(list.length * Math.random())] 
 } 
 //temporarily 
    function ConvertMiles(number) { 
   const exp = /(\d)(?=(\d{3})+(?!\d))/g; 
   const rep = "$1."; 
   let arr = number.toString().split("."); 
   arr[0] = arr[0].replace(exp, rep); 
   return arr[1] ? arr.join(".") : arr[0]; 
 }   
 function msToTime(duration) {  
    var milliseconds = parseInt((duration % 1000) / 100),  
    seconds = Math.floor((duration / 1000) % 60),  
    minutes = Math.floor((duration / (1000 * 60)) % 60),  
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);  
    hours = hours < 10 ? "0" + hours : hours;  
    minutes = minutes < 10 ? "0" + minutes : minutes;  
    seconds = seconds < 10 ? "0" + seconds : seconds;  
    return minutes + " m y " + seconds + " s ";  
 } 
function special(type) { 
   let b = type.toLowerCase(); 
   let special = ["common", "uncommon", "mythic", "legendary", "pet"].includes(b) ? " Crate" : ""; 
   return special; 
 } 
 /*function before(m, conn, participants ) { 
   if (!m.messageStubType || !m.isGroup) return true 
   const groupName = (await conn.groupMetadata(m.chat)).subject 
   const groupAdmins = participants.filter((p) => p.admin) 
   const pp = await conn.profilePictureUrl(m.chat, 'image').catch((_) => null) || './media/sinfoto.jpg' 
   const img = await (await fetch(pp)).buffer() 
   const chat = global.db.data.chats[m.chat] 
   const mentionsString = [m.sender, m.messageStubParameters[0], ...groupAdmins.map((v) => v.id)] 
   const mentionsContentM = [m.sender, m.messageStubParameters[0]] 
  }*/
  
   
 function isNumber(x) { 
   return !isNaN(x); 
 }
 module.exports = { rob, reg, bal, work, mine, afk, buy, claim, levelxd, tranferSdw, quitardolares, addDolares, cazar, lb}
  
 let file = require.resolve(__filename) 
 fs.watchFile(file, () => { 
         fs.unwatchFile(file) 
         console.log(chalk.redBright(`Update ${__filename}`)) 
         delete require.cache[file] 
         require(file) 
 })