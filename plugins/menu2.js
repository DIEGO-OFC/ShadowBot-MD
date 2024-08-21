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
const menu2 = (main, prefix, pushname, sender, m) => {


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

return `┌─「💻𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑」  
  ├Comando: ${prefix}modapk 
  ├Descripcion: Descargar apks mod 
  ├Ejemplo: ${prefix}modapk Facebook  
  ├➢Comando: ${prefix}videodocumento 
  ├Descripcion: Descargar videos pesados en documento. 
  ├ejemplo: *${prefix}videodocumento <enlace>* 
  ├➢Comando: ${prefix}fb 
  ├Descripcion: Descargar videos de Facebook 
  ├ejemplo: *${prefix}fb <link>* 
  ├➢Comando: ${prefix}twitter  
  ├Descripcion: Descargar videos de twitter 
  ├ejemplo: *${prefix}Twitter <link>*_ 
  ├➢Comando: ${prefix}xnxxdl 
  ├Descripción: descargar videos de xnxx.com 
  ├Ejemplo: ${prefix}xnxxdl *<enlace / link / url>* 
  ├➢Comando: ${prefix}instagram 
  ├Descripciob: Descargar videos de instagram  
  ├ejemplo: *${prefix}ig <enlace / link / url* 
  ├➢Comando: ${prefix}mediafire 
  ├Descripción: Descargar archivos de mediafire 
  ├Ejemplo: ${prefix}Mediafire <enlace / link / url  
  ├➢Comando: ${prefix}gdrive  
  ├Descripción: Descargar archivos de gdrive 
  ├Ejemolo: ${prefix}gdrive *<enlace / link / url>* 
  ├➢Comando: ${prefix}gitclone 
  ├Descripción: Descargar repositorios de Github 
  ├Ejemplo: ${prefix}gitclone *<enlace / link / url>* 
  ├➢Comando: ${prefix}tiktok  
  ├Descripción: Descargar videos de tintok 
  ├ejemplo:${prefix}Tintok *<enlace / link / url* 
  ├➢Comando: ${prefix}ytmp3 
  ├Descripcion:Descargar Audios de Youtube 
  ├Ejemplo: ${prefix}ytmp3 *<enlace / link / url*  
  ├➢Comando: ${prefix}video  
  ├Descripcion: Descargar videos de Youtube 
  ├Ejemplo: ${prefix}video <enlace / link / url  
  ├➢${prefix}play.1  
  ├Descripción: Descargar audios de Youtube 
  ├Ejemplo: ${prefix}play.1 <texto / enlace / link / url  
  ├➢Comando: ${prefix}play.2  
  ├Descripción:Descargar videos de Youtube 
  ├Ejemplo: ${prefix}play.2 <texto / enlace / link / url  
  ├➢Comando: ${prefix}musica 
  ├Descripción: Descargar musicas de Youtube 
  ├Ejemplo: ${prefix}musica <texto  
  ├➢Comando: ${prefix}spotify  
  ├Descripción: Descargar musica de Spotify 
  ├Ejemplo: ${prefix}spotify *texto* 
  ├➢Comando: ${prefix}imagen  
  ├Ejemplo: ${prefix}spotify *texto* 
  ├➢Comando: ${prefix}pinteret *texto* 
  ├Descripción: Descargar imágenes de pinterest 
  ├➢Comando: ${prefix}wallpaper  
  ├Descripcion: Descargar wallpaper/fondos 
  ├Ejemplo: ${prefix}wallpaper *texto* 
  ├➢${prefix}wallpaper2 <texto  
  ├➢Comando: ${prefix}pptiktok 
  ├Descripción: ver perfiles de tintok 
  ├Ejemplo: ${prefix}pptiktok <nombre de usuario  
  ├➢${prefix}igstalk <nombre de usuario  
  ├➢${prefix}igstory *<nombre de usuario>*_ 
  ├➢${prefix}tiktokstalk <nombre de usuario  
  └────ׂ─ׂ─ׂ─ׂ──`
}

module.exports = { menu2 }

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
