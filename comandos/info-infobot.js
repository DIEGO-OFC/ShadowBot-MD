import os from 'os'
import util from 'util'
import sizeFormatter from 'human-readable'
import MessageType from '@adiwajshing/baileys'
import fs from 'fs'
import { performance } from 'perf_hooks'
let handler = async (m, { conn, usedPrefix }) => {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 
let totalreg = Object.keys(global.db.data.users).length
const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
const groupsIn = chats.filter(([id]) => id.endsWith('@g.us'))
const groups = chats.filter(([id]) => id.endsWith('@g.us'))
const used = process.memoryUsage()
const { restrict, antiCall, antiprivado } = global.db.data.settings[conn.user.jid] || {}
const { autoread, gconly, pconly, self } = global.opts || {}
let pp = './Menu2.jpg'
let old = performance.now()
let neww = performance.now()
let speed = neww - old

let info = `
╠═〘 𝐈𝐍𝐅𝐎 𝐃𝐄𝐋 𝐁𝐎𝐓 〙 ═
╠
╠➢ [🤴🏻] *CREADOR: ༒︎𝙳𝙸𝙴𝙶𝙾-𝙾𝙵𝙲༒︎*
╠➢ [#️⃣] *NUMERO: +593 95 942 5714*
╠➢ [🎳] *PREFIJO: ${usedPrefix}*
╠➢ [🔐] *CHATS PRIVADOS: ${chats.length - groups.length}*
╠➢ [🦜] *CHAT DE GRUPOS: ${groups.length}* 
╠➢ [💡] *CHATS TOTALES: ${chats.length}* 
╠➢ [🚀] *ACTIVIDAD: ${uptime}*
╠➢ [🎩] *USUARIOS: ${totalreg} 𝚗𝚞𝚖𝚎𝚛𝚘𝚜*
╠➢ [☑️] *AUTOREAD:* ${autoread ? '*𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*' : '*𝚍𝚎𝚜𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*'}
╠➢ [❗] *RESTRICT:* ${restrict ? '*𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*' : '*𝚍𝚎𝚜𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*'} 
╠➢ [💬] *ANTIPRIVADO*: ${antiprivado ? '*𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*' : '*𝚍𝚎𝚜𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*'}
╠➢ [📵] *ANTILLAMADA:* ${antiCall ? '*𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*' : '*𝚍𝚎𝚜𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*'}
╠➢ [💬] *PCONLY*: ${pconly ? '*𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*' : '*𝚍𝚎𝚜𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*'}
╠➢ [🏢] *GCONLY*: ${gconly ? '*𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*' : '*𝚍𝚎𝚜𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*'}
╠➢ [🌎] *MODO*: ${self ? '*𝚙𝚛𝚒𝚟𝚊𝚍𝚘*' : '*𝚙𝚞𝚋𝚕𝚒𝚌𝚘*'}
╠➢ [👨‍🦯] *VELOCIDAD*: 
╠  *${speed} ms* 
╠
╠═〘 𝐃⃟𝕺𝐑⃯𝐑𝐇⃯𝚵𝐓᪣𝕭⃯𝚹⃯𝐓⃤ 〙 ═
`.trim() 
conn.sendButton(m.chat, info, wm, pp, [
['📦 𝐆𝐑𝐔𝐏𝐎𝐒', '#grupos'],
['🛡️ 𝐌𝐄𝐍𝐔', '.menu']
], m)

//conn.reply(m.chat, info, m)
}
handler.help = ['infobot']
handler.tags = ['info', 'tools']
handler.command = /^(infobot|informacionbot|infodorrat|informacióndorrat|informaciondorrats)$/i
export default handler
function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ms,h,m,s})
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')}
