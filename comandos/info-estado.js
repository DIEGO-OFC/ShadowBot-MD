import { cpus as _cpus, totalmem, freemem } from 'os'
import util from 'util'
import { performance } from 'perf_hooks'
import { sizeFormatter } from 'human-readable'
let format = sizeFormatter({
  std: 'JEDEC', // 'SI' (default) | 'IEC' | 'JEDEC'
  decimalPlaces: 2,
  keepTrailingZeroes: false,
  render: (literal, symbol) => `${literal} ${symbol}B`,
})
let handler = async (m, { conn, usedPrefix, command }) => {
  const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
  const groupsIn = chats.filter(([id]) => id.endsWith('@g.us')) //groups.filter(v => !v.read_only)
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
  
  let neww = performance.now()
  let speed = neww - old
  
let infobt = `
╔═[ *∆.𝑫𝑶𝑹𝑹𝑯∆𝑻-𝑩𝑶𝑻.∆* ]
║ *➤ 𝙷𝙾𝙻𝙰 ${taguser}*
║
║ *=➢ 🤖 TIEMPO ACTIVO:* ${uptime}
║ *=➢ 👑 CREADOR: DIEGO-OFC*
║ *=➢ 🔗 PAGINA OFICIAL:* dorrat-bot-oficial.ml
╚════════════════
 *≡ S E R V E R*
*🛑 RAM:* ${format(totalmem() - freemem())} / ${format(totalmem())}
*🔵 FreeRAM:* ${format(freemem())}
*≡  NodeJS Uso de memoria*
${'```' + Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v => v.length)), ' ')}: ${format(used[key])}`).join('\n') + '```'}
`.trim()
let buttons = [{ buttonId: '#menu', buttonText: { displayText: ' 𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻 ✅' }, type: 1 }]
let buttonMessage = { image: pp, caption: infobt.trim(), mentions: [m.sender], footer: global.wm3, buttons: buttons, headerType: 4, contextInfo: { mentionedJid: [m.sender], externalAdReply: { showAdAttribution: true, mediaType: 'VIDEO', mediaUrl: null, title: 'PÁGINA OFICIAL', body: 'BY @DIEGO-OFC', thumbnail: img, sourceUrl: `https://dorrat-bot-oficial.ml/`}}}
conn.sendMessage(m.chat, buttonMessage, { quoted: m })

let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)    

handler.help = ['info']
handler.tags = ['main']
handler.command = ['info', 'infobot', 'botinfo']

export default handler

function clockString(ms) {
let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [`\n║ *=➢ ⏱️ ` + d, ' Día(s)* ', `\n║ *=➢ ⌚ ` + h, ' Hora(s)* ', `\n║ *=➢ 🕰️ ` + m, ' Minuto(s)* ', `\n║ *=➢ ⏲️ ` + s, ' Segundo(s)* '].map(v => v.toString().padStart(2, 0)).join('')}

/*let handler = async (m, { conn }) => {
try {
let pp = imagen4
let img = imagen5
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `╔═[ *∆.𝑫𝑶𝑹𝑹𝑯∆𝑻-𝑩𝑶𝑻.∆* ]
║ *➤ 𝙷𝙾𝙻𝙰 ${taguser}*
║
║ *=➢ 🤖 TIEMPO ACTIVO:* ${uptime}
║ *=➢ 👑 CREADOR: DIEGO-OFC*
║ *=➢ 🔗 PAGINA OFICIAL:* dorrat-bot-oficial.ml
╚════════════════`.trim()
let buttons = [{ buttonId: '#menu', buttonText: { displayText: ' 𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻 ✅' }, type: 1 }]
let buttonMessage = { image: pp, caption: str.trim(), mentions: [m.sender], footer: global.wm, buttons: buttons, headerType: 4, contextInfo: { mentionedJid: [m.sender], externalAdReply: { showAdAttribution: true, mediaType: 'VIDEO', mediaUrl: null, title: 'PÁGINA OFICIAL', body: 'BY @DIEGO-OFC', thumbnail: img, sourceUrl: `https://dorrat-bot-oficial.ml/`}}}
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
} catch {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)    
throw `*🤖 TIEMPO ACTIVO:* ${uptime} ┃ 👑 BY DIEGO-OFC ┃ 🔗 PAGINA OFC: dorrar-bot-oficial.ml`}}
handler.help = ['estado']
handler.tags = ['main']
handler.command = /^(estado|status|estate|state|stado|stats)$/i
export default handler
function clockString(ms) {
let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [`\n║ *=➢ ⏱️ ` + d, ' Día(s)* ', `\n║ *=➢ ⌚ ` + h, ' Hora(s)* ', `\n║ *=➢ 🕰️ ` + m, ' Minuto(s)* ', `\n║ *=➢ ⏲️ ` + s, ' Segundo(s)* '].map(v => v.toString().padStart(2, 0)).join('')}*/
