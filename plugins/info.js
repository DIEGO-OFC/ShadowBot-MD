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
let stateRun = `╔═[ *∆.SHADOW-𝑩𝑶𝑻.∆* ]
║ *➤ 𝙷𝙾𝙻𝙰 @${me.split('@')[0]}*
║
║ *=➢ 🤖 TIEMPO ACTIVO:* ${runtime(process.uptime())}
║ *=➢ 👑 CREADOR: DIEGO-OFC*
║ *=➢ 🔗 PAGINA OFICIAL:* web-shadow.vercel.app
╚════════════════
[número del creador]:
wa.me/528442286089`.trim()
let ments = [me]        
await conn.sendMessage(m.chat, {image: imagen1, caption: stateRun, mentions:[sender]}, { quoted: fkontak })
}
  
module.exports = { state }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
