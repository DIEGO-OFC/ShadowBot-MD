
import { cpus as _cpus, totalmem, freemem } from 'os'
import util from 'util'
let handler = async(m, { conn, command, usedPrefix, DevMode }) => {
   
        let NotDetect = 'Not Detect'
        let old = performance.now()
        let cpu = osu.cpu
        let cpuCore = cpu.count()
        let drive = osu.drive
        let mem = osu.mem
        let netstat = osu.netstat
        let OS = osu.os.platform()
        let cpuModel = cpu.model()
        let cpuPer
        let p1 = cpu.usage().then(cpuPercentage => {
            cpuPer = cpuPercentage
        }).catch(() => {
            cpuPer = NotDetect
        })
        let driveTotal, driveUsed, drivePer
        let p2 = drive.info().then(info => {
            driveTotal = (info.totalGb + ' GB'),
                driveUsed = info.usedGb,
                drivePer = (info.usedPercentage + '%')
        }).catch(() => {
            driveTotal = NotDetect,
                driveUsed = NotDetect,
                drivePer = NotDetect
        })
        let ramTotal, ramUsed
        let p3 = mem.info().then(info => {
            ramTotal = info.totalMemMb,
                ramUsed = info.usedMemMb
        }).catch(() => {
            ramTotal = NotDetect,
                ramUsed = NotDetect
        })
        let netsIn, netsOut
        let p4 = netstat.inOut().then(info => {
            netsIn = (info.total.inputMb + ' MB'),
                netsOut = (info.total.outputMb + ' MB')
        }).catch(() => {
            netsIn = NotDetect,
                netsOut = NotDetect
        })
        await Promise.all([p1, p2, p3, p4])
        await conn.reply(m.chat, `_Testing ${command }..._`, m)
        let _ramTotal = (ramTotal + ' MB')
        let neww = performance.now()
        let infobt = `*「 Status 」*
OS : *${OS}*
CPU Model : *${cpuModel}*
CPU Core : *${cpuCore} Core*
CPU : *${cpuPer}%*
Ram : *${ramUsed} / ${_ramTotal}(${/[0-9.+/]/g.test(ramUsed) &&  /[0-9.+/]/g.test(ramTotal) ? Math.round(100 * (ramUsed / ramTotal)) + '%' : NotDetect})*
Drive : *${driveUsed} / ${driveTotal} (${drivePer})*
Ping : *${Math.round(neww - old)} ms*
Internet IN : *${netsIn}*
Internet OUT : *${netsOut}*
`.trim()
conn.sendButton(m.chat, infobt, wm3,
[
['𝙼𝙴𝙽𝚄', `#menusimple`]], m)
}
handler.help = ['', 'bot'].map(v => 'status' + v)
handler.tags = ['info']
handler.command = /^(bot)?stat(us)?(bot)?$/i

export default handler 

function clockString(ms) {
    let h = Math.floor(ms / 3600000)
    let m = Math.floor(ms / 60000) % 60
    let s = Math.floor(ms / 1000) % 60
    console.log({ ms, h, m, s })
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}


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
