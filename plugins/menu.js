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
const menu = (main, prefix, pushname, sender, m) => {


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

return `*╭━━❍SHADOW-𝐁𝐎𝐓-𝐌𝐃❍━━╮* 
 *┣━━━▢ ❤𝐇𝐎𝐋𝐀, @${sender.split("@")[0]} ❤*• 
 *┃╭━━━━━━━━━━━━━━━━╾•* 
 *┃┃  ❍ ${ucapan()} ❍* 
 *┃┣━━━━━━━━━━━━━━━━╾•* 
 *┃┃ ⋄ NUMERO DEL CREADOR: wa.me/528442286089 (𝐍𝐎 𝐁𝐎𝐓)* 
 *┃┃ ⋄ VERSION » ${vs}* 
 *┃┃ ⋄ FECHA » ${date} ${time}* 
 *┃┃ ⋄ TIEMPO ACTIVO » ${runtime(process.uptime())}*
 *┃┃ ⋄ LIBRERIA » Bailleys*
 *┃┃ ⋄ USUARIOS » ${Object.keys(global.db.data.users).length}*
 *┃┃ ⋄ MODO » ${conn.public ? 'publico' : 'privado'}*
 *┃╰━━━━━━━━━━━━━━━━╾•* 
 *╰━━━╼SHADOW-𝐁𝐎𝐓-𝐌𝐃╾━━━╯* 

 ▧ 「 *I N F O R M A C I O N* 」  
 │ ‣ ︎ _${prefix}grupos_ 
 │ ‣  _${prefix}estado_ 
 │ ‣  _${prefix}instalarbot_ 
 │ ‣  _${prefix}infobot_ 
 │ ‣  _${prefix}grouplist_ 
 │ ‣  _${prefix}owner_ 
 │ ‣  _${prefix}script_ 
 │ ‣  _Bot_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜) 
 └──···

 ╔═════════════╗  
 ║ *<UNE UN BOT A TU GRUPO/>* 
 ║══════════════════ 
 ║ ➱_${prefix}join *link del grupo*_  
 ║ ➱_*minimo 30 miembros*_ 
 ╚════ ≪ •❈• ≫ ════╝ 
  
 ╔═════ JADIBOT 🤖 ═════╗  
 ║ ❒ ︎_${prefix}serbot_ 
 ║ ❒ ︎_${prefix}jadibot_
 ║ ❒ ︎_${prefix}stop_ 
 ║ ❒ ︎_${prefix}bots_ 
 ╚════ ≪ •❈• ≫ ════╝ 
 
  ┌─「💻𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑」 
 ├➢${prefix}videodocumento <enlace / link / url 
 ├➢${prefix}fb <enlace / link / url 
 ├➢${prefix}twitter *<enlace / link / url>*_
 ├➢${prefix}xnxxdl *<enlace / link / url>*
 ├➢${prefix}xvideosdl *<enlace / link / url>*
 ├➢${prefix}instagram <enlace / link / url 
 ├➢${prefix}mediafire <enlace / link / url 
 ├➢${prefix}gdrive *<enlace / link / url>*
 ├➢${prefix}gitclone <enlace / link / url 
 ├➢${prefix}tiktok <enlace / link / url 
 ├➢${prefix}ytmp3 <enlace / link / url 
 ├➢${prefix}video <enlace / link / url 
 ├➢${prefix}play.1 <texto / enlace / link / url 
 ├➢${prefix}play.2 <texto / enlace / link / url 
 ├➢${prefix}play <texto 
 ├➢${prefix}spotify <texto 
 ├➢${prefix}imagen <texto 
 ├➢${prefix}pinteret <texto 
 ├➢${prefix}wallpaper <texto 
 ├➢${prefix}wallpaper2 <texto 
 ├➢${prefix}pptiktok <nombre de usuario 
 ├➢${prefix}igstalk <nombre de usuario 
 ├➢${prefix}igstory *<nombre de usuario>*_
 ├➢${prefix}tiktokstalk <nombre de usuario 
 └────ׂ─ׂ─ׂ─ׂ── 

┌─「👾 ᘜᗩᗰᗴ 」 
├➢ ${prefix}simi
├➢ ${prefix}ppt 
├➢ ${prefix}tictactoe
├➢ ${prefix}ttt
├➢ ${prefix}delttt
├➢ ${prefix}formarpareja
├➢ ${prefix}follar
├➢ ${prefix}cojer
├➢ ${prefix}pregunta
├➢ ${prefix}preg
├➢ ${prefix}verdad
├➢ ${prefix}reto
├➢ ${prefix}piropo
├➢ ${prefix}formapareja5
├➢ ${prefix}top
├➢ ${prefix}topgays
├➢ ${prefix}topotakus
├➢ ${prefix}love
├➢ ${prefix}personalidad
├➢ ${prefix}slot
├➢ ${prefix}apuesta
├➢ ${prefix}ship
├➢ ${prefix}doxear
├➢ ${prefix}doxxeo
├➢ ${prefix}racista
├➢ ${prefix}fake
└────ׂ─ׂ─ׂ─ׂ── 
 
 ┌──「🔞𝐂𝐨𝐦𝐚𝐧𝐝𝐨𝐬 +𝟏𝟖」  
  ├➢ *${prefix}pack*
  ├➢ *${prefix}pack2*
  ├➢ *${prefix}pack3*
  ├➢ *${prefix}videoxxx*
  ├➢ *${prefix}videolesbixxx*
  ├➢ *${prefix}tetas*
  ├➢ *${prefix}tetas2*
  ├➢ *${prefix}booty*
  ├➢ *${prefix}ecchi*
  ├➢ *${prefix}furro*
  ├➢ *${prefix}imagenlesbians*
  ├➢ *${prefix}pussy*
  ├➢ *${prefix}panties*
  ├➢ *${prefix}pene*
  ├➢ *${prefix}porno*
  ├➢ *${prefix}randomxxx*
  ├➢ *${prefix}pechos*
  ├➢ *${prefix}yuri*
  ├➢ *${prefix}yuri2*
  ├➢ *${prefix}trapito*
  ├➢ *${prefix}hentai*
  ├➢ *${prefix}pornololi*
  ├➢ *${prefix}pornoorgy*
  ├➢ *${prefix}pornofoot*
  ├➢ *${prefix}pornoass* 
  ├➢ *${prefix}pornouniform*
  ├➢ *${prefix}pornobdsm*
  ├➢ *${prefix}pornocum*
  ├➢ *${prefix}pornonetorare
  ├➢ *${prefix}pornofeet*
  ├➢ *${prefix}pornoero*
  ├➢ *${prefix}pornofemdom*
  ├➢ *${prefix}pornoglass*
  ├➢ *${prefix}pornosuccubus*
  ├➢ *${prefix}pornochupada
  ├➢ *${prefix}pornomuslos*
  ├➢ *${prefix}pornoschool*
  ├➢ *${prefix}hentaipdf* *<texto>*_  
  └────ׂ─ׂ─ׂ─ׂ─── 
   
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
├❥ᰰຼ ❏ ${prefix}cosplay
├❥ᰰຼ ❏ ${prefix}ia 
├❥ᰰຼ _(ingresa el texto de que quiera buscar con la (IA)_
├❥ᰰຼ ❏ ${prefix}imagen
├❥ᰰຼ _ingresa texto de la imagen que quiere buscar_
├❥ᰰຼ ❏ ${prefix}pinterest
├❥ᰰຼ ❏ ${prefix}otakudesu (ingresa un texto)
├❥ᰰຼ ❏ ${prefix}ss 
├❥ᰰຼ _(ingresa un link para manda captura)_
*╰┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭۫*

*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*⃐🪙 ＥＣＯＮＯＭＩＡ*️⃟ᬽ፝֟━*
├❥ᰰຼ ❏ ${prefix}minar _(para minar exp)_
├❥ᰰຼ ❏ ${prefix}robar
├❥ᰰຼ ❏ ${prefix}claim
├❥ᰰຼ ❏ ${prefix}rob 
├❥ᰰຼ ❏ ${prefix}dep
├❥ᰰຼ ❏ ${prefix}beg
├❥ᰰຼ ❏ ${prefix}crimen
├❥ᰰຼ ❏ ${prefix}trabajar
├❥ᰰຼ ❏ ${prefix}work _(trabajar y ganar dólares)_
├❥ᰰຼ ❏ ${prefix}buy _(comprar mas diamante (limit)_
├❥ᰰຼ ❏ ${prefix}afk
*╰┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭۫*

*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*⃐👽ＳＴＩＣＫＥＲ*️⃟ᬽ፝֟━*
├❥ᰰຼ ❏ ${prefix}s
├❥ᰰຼ ❏ ${prefix}sticker 
├❥ᰰຼ ❏ ${prefix}wm
├❥ᰰຼ ❏ ${prefix}attp
*╰┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭۫*

*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*⃐✳️ Herramientas *️⃟ᬽ፝֟━*
├❥ᰰຼ ❏ ${prefix}hd (responda a una imagen)
├❥ᰰຼ ❏ ${prefix}emojimix
├❥ᰰຼ ❏ ${prefix}jpg (responda a un sticker)
├❥ᰰຼ ❏ ${prefix}toqr
├❥ᰰຼ ❏ ${prefix}ofuscar
├❥ᰰຼ ❏ ${prefix}nowa
├❥ᰰຼ ❏ ${prefix}traducir
*╰┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭۫*

*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*⃐👑ＯＷＮＥＲ*️⃟ᬽ፝֟━*
├❥ _(Comlando explusivo para propietario/owner del bot)_
├ *✧･ﾟ: *✧･ﾟ:*✧･ﾟ: *✧･ﾟ:*✧･ﾟ: *✧･ﾟ:
├❥ᰰຼ ❏ ${prefix}anticall
├❥ᰰຼ ❏ ${prefix}modojadibot
├❥ᰰຼ ❏ ${prefix}autoadmin 
├❥ᰰຼ ❏ ${prefix}bc (difusión a todos los chat)
├❥ᰰຼ ❏ ${prefix}bcgc (difusión solo a grupos)
├❥ᰰຼ ❏ ${prefix}join 
├❥ᰰຼ ❏ ${prefix}setppbot (cambia la foto del bot) 
├❥ᰰຼ ❏ ${prefix}public (modo público) 
├❥ᰰຼ ❏ ${prefix}privado (modo privado) 
├❥ᰰຼ ❏ ${prefix}getcase
├❥ᰰຼ ❏ $
├❥ᰰຼ ❏ >
├❥ᰰຼ ❏ => 
*╰┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭۫*`
}

module.exports = { menu }

function pickRandom(list) {

    return list[Math.floor(list.length * Math.random())]

}

function ucapan() {
  const time = moment.tz("America/Los_Angeles").format("HH"); //America/Los_Angeles  Asia/Jakarta   America/Toronto

  let res = "🌉Buenas madrugadas";

  if (time >= 4) {
    res = "🌇Buenos Días";
  }

  if (time >= 11) {
    res = "🏙️Buenas Tardes";
  }

  if (time >= 15) {
    res = "🌆Buenas tardes";
  }

  if (time >= 17) {
    res = "🌃Buenas noches";
  }

  return res;
}

 let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
