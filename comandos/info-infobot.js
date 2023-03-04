import util from 'util'
import si from 'systeminformation'
import { performance } from 'perf_hooks'
import { sizeFormatter } from 'human-readable'
let format = sizeFormatter({
  std: 'JEDEC', // 'SI' (default) | 'IEC' | 'JEDEC'
  decimalPlaces: 2,
  keepTrailingZeroes: false,
  render: (literal, symbol) => `${literal} ${symbol}B`,
})

import { cpus as _cpus, totalmem, freemem } from 'os'
import MessageType from '@adiwajshing/baileys'
import fs from 'fs'
let handler = async (m, { conn, usedPrefix }) => {
  const used = process.memoryUsage()
  const cpus = _cpus().map(cpu => {
    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
    return cpu
  })
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
    }
  })
  let old = performance.now()
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 
let totalreg = Object.keys(global.db.data.users).length
const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
const groupsIn = chats.filter(([id]) => id.endsWith('@g.us'))
const groups = chats.filter(([id]) => id.endsWith('@g.us'))
const { restrict, antiCall, antiprivado } = global.db.data.settings[conn.user.jid] || {}
const { autoread, gconly, pconly, self } = global.opts || {}
let pp = './galeria/menudorrat3.jpg'
let neww = performance.now()
let speed = neww - old
let ram = await si.mem()
let info = `
╠═〘 𝐈𝐍𝐅𝐎 𝐃𝐄𝐋 𝐁𝐎𝐓 〙 ═`.trim()
let info2 = `
╠
║❒  [👑] *CREADOR: DIEGO-OFC*
║❒  [#️⃣] *NUMERO: +593 95 942 5714*
║❒  [🛠️] *PREFIJO: ${usedPrefix}*
║❒  [💬] *CHATS PRIVADOS: ${chats.length - groups.length}*
║❒  [💭] *CHAT DE GRUPOS: ${groups.length}* 
║❒  [🗯️] *CHATS TOTALES: ${chats.length}* 
║❒  [🚀] *ACTIVIDAD: ${uptime}*
║❒  [🎩] *USUARIOS: ${totalreg} 𝚗𝚞𝚖𝚎𝚛𝚘𝚜*
║❒  [☑️] *AUTOREAD:* ${autoread ? '*𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*' : '*𝚍𝚎𝚜𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*'}
║❒  [❕] *RESTRICT:* ${restrict ? '*𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*' : '*𝚍𝚎𝚜𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*'} 
║❒  [🔒] *ANTIPRIVADO*: ${antiprivado ? '*𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*' : '*𝚍𝚎𝚜𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*'}
║❒  [📞] *ANTILLAMADA:* ${antiCall ? '*𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*' : '*𝚍𝚎𝚜𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*'}
║❒  [💬] *PCONLY*: ${pconly ? '*𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*' : '*𝚍𝚎𝚜𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*'}
║❒  [🏢] *GCONLY*: ${gconly ? '*𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*' : '*𝚍𝚎𝚜𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*'}
║❒  [🗺️] *MODO*: ${self ? '*𝚙𝚛𝚒𝚟𝚊𝚍𝚘*' : '*𝚙𝚞𝚋𝚕𝚒𝚌𝚘*'}
║❒  [🔴] *RAM:* memory: ram.free + ' libre de ' + ram.total,  memory_used: ram.used
║❒  [🔥] *VELOCIDAD*: 
║  *${speed} ms* 
╠
*╠═〘 Dorrat-Bot-MD 〙 ═*
`.trim() 
conn.sendButton(m.chat, info, info2, pp, [
['[ GRUPOS ]', '#grupos']
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
