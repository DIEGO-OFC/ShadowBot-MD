import { xpRange } from '../lib/levelling.js'

const { levelling } = '../lib/levelling.js'

import PhoneNumber from 'awesome-phonenumber'

import { promises } from 'fs'

import { join } from 'path'

let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {

try {

let vn = './media/menu.mp3'

let pp = './Menu2.jpg'

let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}

let { exp, limit, level, role } = global.db.data.users[m.sender]

let { min, xp, max } = xpRange(level, global.multiplier)

let name = await conn.getName(m.sender)

let d = new Date(new Date + 3600000)

let locale = 'es'

let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]

let week = d.toLocaleDateString(locale, { weekday: 'long' })

let date = d.toLocaleDateString(locale, {

day: 'numeric',

month: 'long',

year: 'numeric'

})

let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {

day: 'numeric',

month: 'long',

year: 'numeric'

}).format(d)

let time = d.toLocaleTimeString(locale, {

hour: 'numeric',

minute: 'numeric',

second: 'numeric'

})

let _uptime = process.uptime() * 1000

let _muptime

if (process.send) {

process.send('uptime')

_muptime = await new Promise(resolve => {

process.once('message', resolve)

setTimeout(resolve, 1000)

}) * 1000

}

let muptime = clockString(_muptime)

let uptime = clockString(_uptime)

let totalreg = Object.keys(global.db.data.users).length

let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length

let replace = {

'%': '%',

p: _p, uptime, muptime,

me: conn.getName(conn.user.jid),

npmname: _package.name,

npmdesc: _package.description,

version: _package.version,

exp: exp - min,

maxexp: xp,

totalexp: exp,

xp4levelup: max - exp,

github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',

level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,

readmore: readMore

}

text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])

 

    

let str = `

💗 *¡HOLA | HI!* ${name}
╭━━〔 *${wm}* 〕━━⬣
┃🧸🧸🧸🧸🧸🧸🧸🧸🧸 
┃✪ *EXPERIENCIA | EXP ➺ ${exp}*
┃✪ *NIVEL | LEVEL ➺ ${level}*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃✪ *FECHA ➺ ${week}, ${date}*
┃✪ *USUARIOS | USERS ➺ ${Object.keys(global.db.data.users).length}* 
┃🧸🧸🧸🧸🧸🧸🧸🧸🧸 
╰━━━━━━〔 𓃠 *${vs}* 〕━━━━━━⬣

╭━〔 𝙈𝙀𝙉𝙐 𝙎𝙏𝙄𝘾𝙆𝙀𝙍𝙎 𝙔 𝙁𝙄𝙇𝙏𝙍𝙊𝙎 〕━⬣
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🎐 _${usedPrefix}sticker | s *imagen o video*_
┃🎐 _${usedPrefix}sticker | s *url de tipo jpg*_
┃🎐 _${usedPrefix}emojimix *😺+😆*_
┃🎐 _${usedPrefix}scircle | círculo *imagen*_
┃🎐 _${usedPrefix}semoji | emoji *tipo emoji*_
┃🎐 _${usedPrefix}attp *texto*_
┃🎐 _${usedPrefix}attp2 *texto*_
┃🎐 _${usedPrefix}ttp *texto*_
┃🎐 _${usedPrefix}ttp2 *texto*_
┃🎐 _${usedPrefix}ttp3 *texto*_
┃🎐 _${usedPrefix}ttp4 *texto*_
┃🎐 _${usedPrefix}ttp5 *texto*_
┃🎐 _${usedPrefix}ttp6 *texto*_
┃🎐 _${usedPrefix}palmaditas | pat *@tag*_
┃🎐 _${usedPrefix}bofetada | slap *@tag*_
┃🎐 _${usedPrefix}besar | kiss *@tag*_
┃🎐 _${usedPrefix}alimentar | food *@tag*_
┃🎐 _${usedPrefix}dado_
┃🎐 _${usedPrefix}wm *packname|author*_
┃🎐 _${usedPrefix}wm *texto1|texto2*_
┃🎐 _${usedPrefix}stickermarker *efecto : responder a imagen*_
┃🎐 _${usedPrefix}stickerfilter *efecto : responder a imagen*_
┃🎐 _${usedPrefix}cs *:* cs2_
╰━━━━━━━━━━━━━━━━━━━⬣`.trim()

conn.sendHydrated2(m.chat, str, wm, pp, 'https://www.paypal.me/TheShadowBrokers133', '𝙿𝙰𝚈𝙿𝙰𝙻', 'https://github.com/BrunoSobrino/TheMystic-Bot-MD', '𝙶𝙸𝚃𝙷𝚄𝙱', [

['📮 𝙳𝙾𝙽𝙰𝚁 📮', '/donasi'],

['🌹 𝙾𝚆𝙽𝙴𝚁 🌹', '/owner'],

['🐾 𝙸𝙽𝙵𝙾𝙱𝙾𝚃 🐾', '/infobot']

], m,)

//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, {

//type: 'audioMessage', 

//ptt: true})

} catch (e) {

conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m)

throw e

}}

handler.command = /^(stickermenu|stickermenu)$/i

handler.exp = 50

handler.fail = null

export default handler

const more = String.fromCharCode(8206)

const readMore = more.repeat(4001)

function clockString(ms) {

let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)

let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60

let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60

return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}