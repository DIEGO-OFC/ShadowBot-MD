require('../main.js')  
 //require("../main")(conn, m, chatUpdate, mek, color, msgs) 
 const fs = require("fs") 
 const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom } = require('../libs/fuctions.js');  
 const path = require("path") 
  const QrCode = require('qrcode-reader')
  const qrcode = require('qrcode')  
 const chalk = require("chalk"); 
 const moment = require('moment-timezone')  
 const gradient = require('gradient-string')  
 const fetch = require('node-fetch')  
 const axios = require('axios') 
 const cheerio = require('cheerio') 
 const Jimp = require('jimp') 
 const os = require('os') 
    
 
 async function toqr(conn, m,  text, sender) { 
      const budy = (typeof m.text == 'string' ? m.text : '') 
     //const args = body.trim().split(/ +/).slice(1)  

 const q = text
   if (!text) return m.reply('*por favor manda un link para convertirlo en qr*') 
    let qruwu = await qrcode.toDataURL(q, { scale: 35 }) 
    let data = new Buffer.from(qruwu.replace('data:image/png;base64,', ''), 'base64') 
    let buff = getRandom('.jpg') 
    await fs.writeFileSync('./'+buff, data) 
    let medi = fs.readFileSync('./' + buff) 
   await conn.sendMessage(m.chat, { image: medi, caption: `*aqui tienes tu qr*\n*${botname}*`}, { quoted: m }) 
    setTimeout(() => { fs.unlinkSync(buff) }, 10000) 
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
 module.exports = { toqr } 
  
 let file = require.resolve(__filename) 
 fs.watchFile(file, () => { 
         fs.unwatchFile(file) 
         console.log(chalk.redBright(`Update ${__filename}`)) 
         delete require.cache[file] 
         require(file) 
 })