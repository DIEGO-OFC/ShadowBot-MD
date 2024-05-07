 const baileys = require('@whiskeysockets/baileys')
 const moment = require('moment-timezone') 
 const gradient = require('gradient-string') 
 const fetch = require('node-fetch') 
 const axios = require('axios')
 const cheerio = require('cheerio')
 const Jimp = require('jimp')
 const os = require('os')
 const chalk = require('chalk')
 const fs = require("fs")
  
const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom } = require('../libs/fuctions.js'); 

async function state(conn, m, speed, sender, fkontak) {
//let data = await obtenerDatos()
const totalMemory = Math.round(os.totalmem() / (1024 * 1024 * 1024))
const freeMemory = Math.round(os.freemem() / (1024 * 1024 * 1024))
const usedMemory = totalMemory - freeMemory
const cpuUsage = os.loadavg()[0]
let me = m.sender
var timestamp = speed();  
var latensi = speed() - timestamp  
let stateRun = `┏━━━━❰･𝐄𝐒𝐓𝐀𝐃𝐎 𝐃𝐄𝐋 𝐁𝐎𝐓･❱━━━━
┃
┃웃 Hola @${me.split('@')[0]}
┃
┃╍╍╍╍╍╍╍╍╍╍╍╍╍
┃
┃➢ 𝚁𝙰𝙼 𝙳𝙴𝙻 𝚂𝙴𝚁𝚅𝙸𝙳𝙾𝚁 : ${usedMemory} GB / ${totalMemory} GB
┃➢ 𝙿𝙻𝙰𝚃𝙰𝙵𝙾𝚁𝙼𝙰 : ${os.platform()}
┃➢ 𝙷𝙾𝚃𝚂 : ${os.hostname()}
┃➢ 𝙲𝙿𝚄 𝚄𝚂𝙰𝙽𝙳𝙾 : ${cpuUsage.toFixed(2)}%
┃➢ 𝙼𝙴𝙼𝙾𝚁𝙸𝙰 𝚃𝙾𝚃𝙰𝙻 : ${totalMemory} GB
┃➢ 𝙰𝙲𝚃𝙸𝚅𝙾 : ${runtime(process.uptime())}
┃➢ 𝙼𝙾𝙳𝙾 : ${conn.public ? 'Público' : `Privado`}
┃╍╍╍╍╍╍╍╍╍╍╍╍╍
┃➢ 𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂 : ${Object.keys(global.db.data.users).length}
┗━━━━━━━━━━━━━`.trim()
let ments = [me]        
await conn.sendMessage(m.chat, {image: imagen1, caption: stateRun, mentionedJid:[sender]}, { quoted: fkontak })
}
  
module.exports = { state }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})