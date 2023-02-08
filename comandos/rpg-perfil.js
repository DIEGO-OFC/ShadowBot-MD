import { xpRange } from '../lib/levelling.js'
import fs from 'fs'
import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command, participants }) => {
let { dolares, joincount } = global.db.data.users[m.sender]
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/9b1353deceded7f387713.jpg')
if (!(who in global.db.data.users)) throw `El usuario que está mencionando no está registrado en mi base de datos`
try {

} catch (e) {

} finally {
let { name, limit, lastclaim, registered, regTime, age } = global.db.data.users[who]
let username = conn.getName(who)
let prem = global.prems.includes(who.split`@`[0])
let sn = createHash('md5').update(who).digest('hex')
let info = `*tus datos están guardados en nuestra base de datos.*\n\n${wm3}`
let str = `╔═════「 *${command}* 」═════╗
║ *🔥 NOMBRE:* ${username} ${registered ? '(' + name + ') ': ''}
║ *#️⃣ NUMERO:* ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
║ *🔗 LINK:* wa.me/${who.split`@`[0]}${registered ? '\n*𝙴𝙳𝙰𝙳:* ' + age + ' años' : ''}
║ *💌 NIVEL:* ${level}
║ *⚡ RANGO:* ${role}
║ *💸 DOLARES*: ${dolares}
║ *🎉 EXPERIENCIA/XP:* ${xp}
║ *💎 DIAMANTES:* ${limit}
║ *📦 REGISTRADO:* ${registered ? 'Si': 'No'}
║ *💳 PREMIUM:* ${prem ? 'Si' : 'No'}
╚════ ≪ •❈• ≫ ════╝`
conn.sendButton(m.chat, str,  info, pp, [['🔰 MENU PRINCIPAL', '/menu']], m)
conn.sendMessage(who, {text: `*❕ NUMERO DE SERIE: ${sn}*`}, {quoted: m})
}}
handler.help = ['profile [@user]']
handler.tags = ['xp']
handler.command = /^perfil|profile?$/i
export default handler
