
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import moment from 'moment-timezone'
let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
let locale = 'es'
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let d = new Date(new Date + 3600000)
let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
//let _uptime = process.uptime() * 1000
//let _muptime
//if (process.send) {
//process.send('uptime')
//let uptime = clockString(_uptime)
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 
wm = global.wm
vs = global.vs
let { exp, limit, dorracoins, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
//let name = await conn.getName(m.sender)

const sections = [{
title: comienzo + ' ' + lenguajeGB['smsLista1']() + ' ' + fin,
rows: [
{title: lenguajeGB['smsLista2'](), rowId:`${usedPrefix}creator`},  
{title: lenguajeGB['smsLista3'](), rowId:`${usedPrefix}infobot`},
{title: lenguajeGB['smsLista4'](), rowId:`${usedPrefix}allmenu`},
{title: lenguajeGB['smsLista5'](), rowId:`${usedPrefix}grupos`},
{title: lenguajeGB['smsLista6'](), rowId:`${usedPrefix}jadibot`},
{title: lenguajeGB['smsLista7'](), rowId:`${usedPrefix}instalarbot`}

]},{
title: comienzo + ' ' + lenguajeGB['smsLista8']() + ' ' + fin,
rows: [
{title: lenguajeGB['smsLista9'](),  rowId: `${usedPrefix}lb`},
{title: lenguajeGB['smsLista10'](), rowId: `${usedPrefix}minar`},
{title: lenguajeGB['smsLista11'](), rowId: `${usedPrefix}work`},
{title: lenguajeGB['smsLista12'](), rowId: `${usedPrefix}bal`},
{title: lenguajeGB['smsLista13'](), rowId: `${usedPrefix}rpgmenu`},
{title: lenguajeGB['smsLista14'](), rowId:  `${usedPrefix}buyall`}
]},{	
title: comienzo + ' ' + lenguajeGB['smsLista15']() + ' ' + fin,
rows: [
{title: "📦 𝐌𝐄𝐍𝐔 𝐃𝐄 𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐒", rowId: `${usedPrefix}descargasmenu`},
{title: "🎧 𝐌𝐄𝐍𝐔 𝐀𝐔𝐃𝐈𝐎𝐒", rowId: `${usedPrefix}audios`},  
{title: "🎮 𝐌𝐄𝐍𝐔 𝐉𝐔𝐄𝐆𝐎𝐒", rowId: `${usedPrefix}juegosdelgrupo`},
 {title: "🔰 𝐌𝐄𝐍𝐔 𝐒𝐓𝐈𝐂𝐊𝐄𝐑𝐒", rowId: `${usedPrefix}stickermenu`},
 {title: "🏛 𝐌𝐄𝐍𝐔 𝐀𝐍𝐈𝐌𝐄", rowId: `${usedPrefix}animemenu`},
 {title: "👑 𝐌𝐄𝐍𝐔 𝐎𝐖𝐍𝐄𝐑", rowId: `${usedPrefix}soloparaelpropietario`},  
{title: "🔞 𝐌𝐄𝐍𝐔 +18", rowId: `${usedPrefix}hornymenu`}
]},{	
title: comienzo + '🗂️ 𝐄𝐍𝐀𝐁𝐋𝐄/𝐃𝐈𝐒𝐀𝐁𝐋𝐄 ' + fin,
rows: [
{title: "🕋 𝐄𝐍𝐀𝐁𝐋𝐄 𝐌𝐄𝐍𝐔 𝐂𝐎𝐌𝐏𝐋𝐄𝐓𝐎", rowId: `${usedPrefix}enable`},  
{title: "✨ 𝐄𝐍𝐀𝐁𝐋𝐄 𝐖𝐄𝐋𝐂𝐎𝐌𝐄", rowId: `${usedPrefix}enable welcome`},
 {title: "✨ 𝐃𝐈𝐒𝐀𝐁𝐋𝐄 𝐖𝐄𝐋𝐂𝐎𝐌𝐄 ", rowId: `${usedPrefix}disable welcome`},
{title: "🔗 𝐄𝐍𝐀𝐁𝐋𝐄 𝐀𝐍𝐓𝐈𝐋𝐈𝐍𝐊", rowId: `${usedPrefix}enable antilink`},  
 {title: "🔗 𝐃𝐈𝐒𝐀𝐁𝐋𝐄 𝐀𝐍𝐓𝐈𝐋𝐈𝐍𝐊", rowId: `${usedPrefix}disable antilink`},
{title: "🧬 𝐄𝐍𝐀𝐁𝐋𝐄 𝐀𝐍𝐓𝐈𝐀𝐑𝐀𝐁𝐄𝐒", rowId: `${usedPrefix}enable antiarabes`},    
{title: "🧬 𝐃𝐈𝐒𝐀𝐁𝐋𝐄 𝐀𝐍𝐓𝐈𝐀𝐑𝐀𝐁𝐄𝐒", rowId: `${usedPrefix}disable antiarabes`},
 {title: "🥵 𝐄𝐍𝐀𝐁𝐋𝐄 𝐌𝐎𝐃𝐎𝐇𝐎𝐑𝐍𝐘", rowId: `${usedPrefix}enable modohorny`},
 {title: "🥵 𝐃𝐈𝐒𝐀𝐁𝐋𝐄 𝐌𝐎𝐃𝐎𝐇𝐎𝐑𝐍𝐘", rowId: `${usedPrefix}disable modohorny`},
{title: "⛔ 𝐄𝐍𝐀𝐁𝐋𝐄 𝐑𝐄𝐒𝐓𝐑𝐈𝐂𝐓", rowId: `${usedPrefix}enable restrict`},
{title: "⛔ 𝐃𝐈𝐒𝐀𝐁𝐋𝐄 𝐑𝐄𝐒𝐓𝐑𝐈𝐂𝐓", rowId: `${usedPrefix}disable restrict`},
 {title: "📵 𝐄𝐍𝐀𝐁𝐋𝐄 𝐀𝐍𝐓𝐈𝐋𝐋𝐀𝐌𝐀𝐃𝐀", rowId: `${usedPrefix}enable anticall`},
 {title: "📵 𝐃𝐈𝐒𝐀𝐁𝐋𝐄 𝐀𝐍𝐓𝐈𝐋𝐋𝐀𝐌𝐀𝐃𝐀", rowId: `${usedPrefix}disable anticall`},   
{title: "🎵 𝐄𝐍𝐀𝐁𝐋𝐄 𝐀𝐔𝐃𝐈𝐎𝐒", rowId: `${usedPrefix}enable audios`},
{title: "🎵 𝐃𝐈𝐒𝐀𝐁𝐋𝐄 𝐀𝐔𝐃𝐈𝐎𝐒", rowId: `${usedPrefix}disable audios`}
]}]





let name = await conn.getName(m.sender)

//let name = conn.getName(m.sender)

const listMessage = {
      
text: `
┏─────────────────────⬣\n│${ucapan()}\n│💚•.¸💚¸.• *${taguser}* •.¸💚¸.•💚\n┗───────────────────── ⳹

╔═══〔 *${wm}* 〕═══⬣
║ ⏱️ ▢ *Hora*    
║ ⌚ ▢ ${time}   
║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
║ ⚡ ▢ *Activo durante*
║ ⚡ ▢ ${uptime}
║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
║ 💎 ▢ *Versión de 𝐃𝐎𝐑𝐑𝐀𝐓-𝐁𝐎𝐓-𝐌𝐃*
║ 💎 ▢ ${vs}
║ 🔳 ▢ Library:
║ 🖥️ ▢ ${library}
║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
║ 👥 ▢ *Usuario(s)*
║ 💫 ▢ ${Object.keys(global.db.data.users).length} 
║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
╚══════════════════⬣`, footer: `${wm}`, 
//${name} ${ucapan()}

title: null,

buttonText: "🔰 𝗦𝗘𝗟𝗘𝗖𝗖𝗜𝗢𝗡𝗘 𝗔𝗤𝗨𝗜 🔰", 

sections }

await conn.sendMessage(m.chat, listMessage, {quoted: fkontak})	


}

handler.help = ['en', 'dis'].map(v => v + 'able <option>')

handler.tags = ['group', 'owner']

handler.command = /^(menu|menú|memu|memú|help|info|comandos|2help|menu1.2|ayuda|commands|commandos|m|menulista|\?)$/i

handler.exp = 20


export default handler

function clockString(ms) {

  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)

  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60

  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60

  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')

}

function ucapan() {

  const time = moment.tz('America/Los_Angeles').format('HH')  //America/Los_Angeles  Asia/Jakarta   America/Toronto

  let res = "🌉Buenas madrugadas"

  if (time >= 4) {

    res = "🌇Buenos Días"

  }

  if (time >= 11) {

    res = "🏙️Buenas Tardes"

  }

  if (time >= 15) {

    res = "🌆Buenas tardes"

  }

  if (time >= 17) {

    res = "🌃Buenas noches"

  }

  return res

}

