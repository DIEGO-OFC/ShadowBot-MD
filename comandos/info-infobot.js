

import si from "systeminformation";
import {performance} from "perf_hooks";
import {sizeFormatter} from "human-readable";
import {cpus as _cpus} from "os";
let handler = async (m, {conn, usedPrefix}) => {

  let _uptime = process.uptime() * 1000
  let uptime = clockString(_uptime)
  let totalreg = Object.keys(global.db.data.users).length;
  const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats);
  const groupsIn = chats.filter(([id]) => id.endsWith("@g.us"))
  const groups = chats.filter(([id]) => id.endsWith("@g.us"))
  const {restrict, antiCall, antiprivado} = global.db.data.settings[conn.user.jid] || {}
  const {autoread, gconly, pconly, self} = global.opts || {}
  let pp = "./galeria/menudorrat3.jpg"  
 let formatSize = sizeFormatter({ 
   std: "JEDEC", 
   decimalPlaces: 2, 
   keepTrailingZeroes: false, 
   render: (literal, symbol) => `${literal} ${symbol}B`, 
 }); 
 let ram = await si.mem(); 
 let cpu = await si.cpuCurrentSpeed(); 
 let disk = await si.fsSize(); 
 let json = { 
   memory: formatSize(ram.free) + " de " + formatSize(ram.total), 
   memory_used: formatSize(ram.used), 
   cpu: cpu.avg + " Ghz", 
   disk: formatSize(disk[0].available), 
 };
let info = `
╠═〘 𝐈𝐍𝐅𝐎 𝐃𝐄𝐋 𝐁𝐎𝐓 〙 ═
╠
║❒  [👑] *CREADOR: DIEGO-OFC*
║❒  [#️⃣] *NUMERO: +51906662557*
║❒  [🛠️] *PREFIJO: ${usedPrefix}*
║❒  [💬] *CHATS PRIVADOS: ${chats.length - groups.length}*
║❒  [💭] *CHAT DE GRUPOS: ${groups.length}* 
║❒  [🗯️] *CHATS TOTALES: ${chats.length}* 
║❒  [🚀] *ACTIVIDAD: ${uptime}*
║❒  [🎩] *USUARIOS: ${totalreg} 𝚗𝚞𝚖𝚎𝚛𝚘𝚜*
║❒  [☑️] *AUTOREAD:* ${autoread ? "*𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*" : "*𝚍𝚎𝚜𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*"}
║❒  [❕] *RESTRICT:* ${restrict ? "*𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*" : "*𝚍𝚎𝚜𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*"} 
║❒  [🔒] *ANTIPRIVADO*: ${antiprivado ? "*𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*" : "*𝚍𝚎𝚜𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*"}
║❒  [📞] *ANTILLAMADA:* ${antiCall ? "*𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*" : "*𝚍𝚎𝚜𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*"}
║❒  [💬] *PCONLY*: ${pconly ? "*𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*" : "*𝚍𝚎𝚜𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*"}
║❒  [🏢] *GCONLY*: ${gconly ? "*𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*" : "*𝚍𝚎𝚜𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*"}
║❒  [🗺️] *MODO*: ${self ? "*𝚙𝚛𝚒𝚟𝚊𝚍𝚘*" : "*𝚙𝚞𝚋𝚕𝚒𝚌𝚘*"}
║❒  [🔴] *RAM USADA:* ${json.memory_used}
║❒  [📦] *DISCO DURO:*  ${json.disk}
║❒  [🖥️] *CPU USADA:*  ${json.cpu} 
╠
*╠═〘 𝐓𝐡𝐞 𝐒𝐡𝐚𝐝𝐨𝐰 𝐁𝐫𝐨𝐜𝐤𝐞𝐫𝐬 - 𝐁𝐨𝐭 〙 ═*`.trim();
  
conn.sendMessage(m.chat, { image: { url: "https://telegra.ph/file/7ec5032386dfe878f99ab.jpg", }, caption: info,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
title: `INFO - BOT`,
sourceUrl: "http://paypal.me/DorratBotOficial",
mediaType: 1,
showAdAttribution: true,
thumbnailUrl: "https://telegra.ph/file/7ec5032386dfe878f99ab.jpg",
}}}, { quoted: m })
}  
handler.help = ["infobot"]
handler.tags = ["info", "tools"]
handler.command = /^(infobot|informacionbot|infodorrat|informacióndorrat|informaciondorrats)$/i;
export default handler
function clockString(ms) {
  let h = Math.floor(ms / 3600000);
  let m = Math.floor(ms / 60000) % 60;
  let s = Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
}
