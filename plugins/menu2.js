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

//const menu = (main, prefix, pushname, sender, m) => {

let user = global.db.data.users[m.sender]
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
const date = moment.tz('America/Bogota').format('DD/MM/YYYY')
const time = moment.tz('America/Argentina/Buenos_Aires').format('LT')
/*const d = new Date(new Date + 3600000);
const locale = 'es';
const week = d.toLocaleDateString(locale, {weekday: 'long'});
const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});*/
let wa = m.key.id.length > 21 ? 'Android' : m.key.id.substring(0, 2) == '3A' ? 'IOS' : 'whatsapp web'
case 'menu2': {
const menuxd = `╔══════ ≪ •❈• ≫ ══════╗
║◤━━━━━ ☆. ∆ .☆ ━━━━━◥
║✾ Hola @${sender.split("@")[0]} 👋🏻 
║◤━━━━━ ☆. ∆ .☆ ━━━━━◥
║✾ ᴘʀᴇғɪᴊᴏ: [ ${prefix} ]
║✾ ғᴇᴄʜᴀ: ${date}
║✾ ʜᴏʀᴀ: ${time}
║✾ ᴜsᴜᴀʀɪᴏ : ${Object.keys(global.db.data.users).length}
║✾ ᴀᴄᴛɪᴠɪᴅᴀᴅ : ${runtime(process.uptime())}
║✾ ᴍᴏᴅᴏ : ${conn.public ? 'publico' : 'privado'}
║
║✾ ʟɪᴍɪᴛᴇ : ${user.limit}
║✾ ɴɪᴠᴇʟ : ${user.level}
║✾ ʀᴀɴɢᴏ : ${user.role}
║✾ ᴇxᴘ : ${user.exp}
║ 
║✾ ʀᴇɢɪsᴛʀᴀᴅᴏ : ${rtotalreg} de ${totalreg}
║◤━━━━━ ☆. ∆ .☆ ━━━━━◥
╚══════ ≪ •❈• ≫ ══════╝

\`\`\`🟢 ＩＮＦＯＲＭＡＣＩＯＮ 🟢\`\`\`
\`\`\`♨️ ᴇʟ ʙᴏᴛ ᴇs ɴᴜᴇᴠᴏ ᴛᴏᴅᴀᴠɪᴀ ᴇsᴛᴀ en ᴅᴇsᴀʀʀᴏʟʟᴀᴅᴏ,  sɪ ᴘʀᴇsᴇɴᴛᴀ ᴀʟɢᴜɴ ᴘʀᴏʙʟᴇᴍᴀ, ᴄᴏᴍᴜɴɪᴄᴀʀsᴇ ᴄᴏɴ ᴍɪ ᴄʀᴇᴀᴅᴏʀ ᴇsᴄʀɪʙɪʀ #creador\`\`\`

===============================
\`\`\`♨️ ＬＩＳＴＡ ＤＥ ＣＯＭＡＮＤＯ ♨️\`\`\`
\`\`\`ʙᴏᴛ sɪᴍᴘʟᴇ ᴄᴏɴ ᴘᴏᴄᴏs ᴄᴏᴍᴀɴᴅᴏs\`\`\`
===============================

*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*⃐ℹ️ ＩＮＦＯ ＢＯＴ*️⃟ᬽ፝֟━*
├❥ᰰຼ ❏ ${prefix}reg 
├❥ᰰຼ _(registrarte para poder usar el bot)_
├❥ᰰຼ ❏ ${prefix}estado 
├❥ᰰຼ _(comprueba el estado del bot)_
├❥ᰰຼ ❏ ${prefix}ping 
├❥ _(Velocidad del bot)_
├❥ᰰຼ ❏ ${prefix}grupos 
├❥ _(unirte al los grupos oficiales y divirte con el bot 😸)_
├❥ᰰຼ ❏ ${prefix}owner
├❥ᰰຼ ❏ ${prefix}creador
├❥ᰰຼ _(te envia los contactos del mi creador)_
├❥ᰰຼ ❏ ${prefix}instalarbot (pronto) 
├❥ᰰຼ ❏ ${prefix}report 
├❥ᰰຼ _(reporta comando con falla/errores/ortografía, etc)_
*╰┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭۫*

*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*⃐🤖ＪＡＤＩＢＯＴ*️⃟ᬽ፝֟━*
├❥ᰰຼ  *(Este serbot esta modo beta)*
├ *✧･ﾟ: *✧･ﾟ:*✧･ﾟ: *✧･ﾟ:*✧･ﾟ: *✧･ﾟ:
├❥ᰰຼ ❏ ${prefix}serbot
├❥ᰰຼ ❏ ${prefix}jadibot
├❥ _(General un qr para convertirte el un sub bot)_
├❥ᰰຼ ❏ ${prefix}bots
├❥ _(comprueba si hay sub bot conectado)_
*╰┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭۫*

*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*⃐🔄ＤＥＳＣＡＲＧＡ*️⃟ᬽ፝֟━*
├❥ᰰຼ ❏ ${prefix}play 
├❥ᰰຼ _(Titulo/nombre de la canción para descargar el audio)_
├❥ᰰຼ ❏ ${prefix}play2
├❥ᰰຼ  _(Titulo/nonbre de la canción para descarga el video)_
├❥ᰰຼ ❏ ${prefix}yts 
├❥ᰰຼ  _(buscar los links para descarga el video)_
├❥ᰰຼ ❏ ${prefix}ytmp3
├❥ᰰຼ _(ingresa el link para descargar el audio)_
├❥ᰰຼ ❏ ${prefix}ytmp4
├❥ᰰຼ _(ingresa el link para descargar el video)_
├❥ᰰຼ ❏ ${prefix}gitclone
├❥ᰰຼ _(ingresa el link del GitHub para descargar el repositorio)_
├❥ᰰຼ ❏ ${prefix}tiktok
├❥ᰰຼ (Ingresa el link del tiktok para descargar el video)
├❥ᰰຼ ❏ ${prefix}Facebook
├❥ᰰຼ (ingresa un link de Facebook para descargar el video)
*╰┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭۫*

*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*🔰⃐ＧＲＵＰＯＳ*️⃟ᬽ፝֟━*
├❥ᰰຼ ❏ ${prefix}antilink _(Elimina a los que manda link de otro grupo)_
├❥ᰰຼ ❏ ${prefix}antifake _(eliminar a los números virtuales)_
├❥ᰰຼ ❏ ${prefix}antiarabe _(eliminar a los numero arabe)_
├❥ᰰຼ ❏ ${prefix}welcome _(dar las bienvenida)_
├❥ᰰຼ ❏ ${prefix}detect _(detectan las funciones del Grupo)_
├❥ᰰຼ ❏ ${prefix}kick _(@tag)_
├❥ᰰຼ ❏ ${prefix}add _(@tag)_
├❥ᰰຼ ❏ ${prefix}invita _(@tag)_
├❥ᰰຼ ❏ ${prefix}promote _(@tag)_
├❥ᰰຼ ❏ ${prefix}demote _(@tag)_
├❥ᰰຼ ❏ ${prefix}grupo close/open 
├❥ᰰຼ ❏ ${prefix}setppname _(cambia el nombre del grupo)_
├❥ᰰຼ ❏ ${prefix}setdesc _(cambia la descripción del Grupo)_
├❥ᰰຼ ❏ ${prefix}setppgroup _(cambia la foto del Grupo)_
├❥ᰰຼ ❏ ${prefix}hidetag _(etiqueta a todos el un mensaje)_
├❥ᰰຼ ❏ ${prefix}tagall _(etiqueta a todos el una listas)_
*╰┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭۫*

*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*🔎⃐ＢＵＳＣＡＤＯＲＥＳ*️⃟ᬽ፝֟━*
├❥ᰰຼ ❏ ${prefix}google 
├❥ᰰຼ _(ingresa nombre de que quiera buscar)_
├❥ᰰຼ ❏ ${prefix}ia 
├❥ᰰຼ _(ingresa el texto de que quiera buscar con la (IA)_
├❥ᰰຼ ❏ ${prefix}imagen
├❥ᰰຼ _ingresa texto de la imagen que quiere buscar_
├❥ᰰຼ ❏ ${prefix}ss 
├❥ᰰຼ _(ingresa un link para manda captura)_
*╰┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭۫*

*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*⃐👾ＪＵＥＧＯＳ*️⃟ᬽ፝֟━*
├❥ᰰຼ ❏ ${prefix}simi 
├❥ᰰຼ _(Hablar con el bot)_
├❥ᰰຼ ❏ ${prefix}ppt
├❥ᰰຼ _(Esta mantenimiento funciona pero responde cuando quiere xd)_
├❥ᰰຼ ❏ ${prefix}fake
├❥ᰰຼ _(Ingresa el texto + tag para joder a alguien con chat fake😹)_
*╰┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭۫*

*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*⃐🥵COMANDO +18*️⃟ᬽ፝֟━*
├❥ᰰຼ  *Activa con (antiNsfw on)*
├ *✧･ﾟ: *✧･ﾟ:*✧･ﾟ: *✧･ﾟ:*✧･ﾟ: *✧･ﾟ:
├❥ᰰຼ ❏ ${prefix}waifu
├❥ᰰຼ ❏ ${prefix}pussy
├❥ᰰຼ ❏ ${prefix}nsfwloli
├❥ᰰຼ ❏ ${prefix}hentai
├❥ᰰຼ ❏ ${prefix}lewd'
├❥ᰰຼ ❏ ${prefix}feed'
├❥ᰰຼ ❏ ${prefix}gasm
├❥ᰰຼ ❏ ${prefix}anal	    	
├❥ᰰຼ ❏ ${prefix}holo	    	
├❥ᰰຼ ❏ ${prefix}tits	    	
├❥ᰰຼ ❏ ${prefix}kuni
├❥ᰰຼ ❏ ${prefix}kiss
├❥ᰰຼ ❏ ${prefix}erok
├❥ᰰຼ ❏ ${prefix}smug
├❥ᰰຼ ❏ ${prefix}solog
├❥ᰰຼ ❏ ${prefix}feetg
├❥ᰰຼ ❏ ${prefix}lewdk    
├❥ᰰຼ ❏ ${prefix}femdom
├❥ᰰຼ ❏ ${prefix}cuddle
├❥ᰰຼ ❏ ${prefix}eroyuri
├❥ᰰຼ ❏ ${prefix}cum	    
├❥ᰰຼ ❏ ${prefix}blowjob
├❥ᰰຼ ❏ ${prefix}holoero
├❥ᰰຼ ❏ ${prefix}erokemo
├❥ᰰຼ ❏ ${prefix}fox_girl
├❥ᰰຼ ❏ ${prefix}futanari
├❥ᰰຼ ❏ ${prefix}wallpaper	   
├❥ᰰຼ *Nota: usarlo baja tu responsabilidad*
*╰┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭۫* 	
	
*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*⃐🪙 ＥＣＯＮＯＭＩＡ*️⃟ᬽ፝֟━*
├❥ᰰຼ ❏ ${prefix}minar _(para minar exp)_
├❥ᰰຼ ❏ ${prefix}robar
├❥ᰰຼ ❏ ${prefix}rob _(roban exp algun usuarios)_
├❥ᰰຼ ❏ ${prefix}trabajar
├❥ᰰຼ ❏ ${prefix}work _(trabajar y ganas exp)_
├❥ᰰຼ ❏ ${prefix}buy _(comprar mas diamante (limit)_
├❥ᰰຼ ❏ ${prefix}afk
*╰┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭۫*

*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*⃐👽ＳＴＩＣＫＥＲ*️⃟ᬽ፝֟━*
├❥ᰰຼ ❏ ${prefix}s
├❥ᰰຼ ❏ ${prefix}sticker 
├❥ᰰຼ ❏ ${prefix}wm
├❥ᰰຼ ❏ ${prefix}attp
*╰┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭۫*

*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*⃐👑ＯＷＮＥＲ*️⃟ᬽ፝֟━*
├❥ _(Comando explusivo para propietario/owner del bot)_
├ *✧･ﾟ: *✧･ﾟ:*✧･ﾟ: *✧･ﾟ:*✧･ﾟ: *✧･ﾟ:
├❥ᰰຼ ❏ ${prefix}anticall
├❥ᰰຼ ❏ ${prefix}modojadibot
├❥ᰰຼ ❏ ${prefix}autoadmin 
├❥ᰰຼ ❏ ${prefix}bc (difusión a todos los chat)
├❥ᰰຼ ❏ ${prefix}bcgc (difusión solo a grupos)
├❥ᰰຼ ❏ ${prefix}join 
├❥ᰰຼ ❏ ${prefix}setpp (cambia la foto del bot) 
├❥ᰰຼ ❏ ${prefix}public (modo público) 
├❥ᰰຼ ❏ ${prefix}privado (modo privado) 
├❥ᰰຼ ❏ ${prefix}getcase
├❥ᰰຼ ❏ $
├❥ᰰຼ ❏ >
├❥ᰰຼ ❏ => 
*╰┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭۫*`.trim()
m.reply(menuxd)
}



