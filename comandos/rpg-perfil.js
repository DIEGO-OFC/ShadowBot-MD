import { xpRange } from '../lib/levelling.js'
import fs from 'fs'
import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, participants }) => {
let { dolares, joincount } = global.db.data.users[m.sender]
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let pp = await conn.profilePictureUrl(who, 'image')
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `El usuario que está mencionando no está registrado en mi base de datos`
try {

} catch (e) {

} finally {
let { name, limit, lastclaim, registered, regTime, age } = global.db.data.users[who]
let username = conn.getName(who)
let prem = global.prems.includes(who.split`@`[0])
let sn = createHash('md5').update(who).digest('hex')
let str = `
╔═════「 *PERFIL* 」═════╗
║ *⚔️ NOMBRE:* ${username} ${registered ? '(' + name + ') ': ''}
║ *#️⃣ NUMERO:* ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
║ *🔗 LINK:* wa.me/${who.split`@`[0]}${registered ? '\n*𝙴𝙳𝙰𝙳:* ' + age + ' años' : ''}
║ *🎖️ NIVEL:* ${level}
║ *⚓ RANGO:* ${role}
║ *💸 DOLARES*: ${dolares}
║ *🎉 EXPERIENCIA/XP:* ${xp}
║ *☯️ TOKENS:* ${joincount}
║ *💎 DIAMANTES:* ${limit}
║ *📦 REGISTRADO:* ${registered ? 'Si': 'No'}
║ *💳 PREMIUM:* ${prem ? 'Si' : 'No'}
║ *❕ NUMERO DE SERIE:* 
║ ${sn}
╚════ ≪ •❈• ≫ ════╝`
conn.sendButton(m.chat, str, author, pp, [['🔰 MENU PRINCIPAL', '/menu']], m)
}}
handler.help = ['profile [@user]']
handler.tags = ['xp']
handler.command = /^perfil|profile?$/i
export default handler
