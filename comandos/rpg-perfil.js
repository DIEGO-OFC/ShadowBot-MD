import { xpRange } from '../lib/levelling.js'
import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import fetch from 'node-fetch'
let { dorracoins, joincount } = global.db.data.users[m.sender]
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let handler = async (m, { conn, usedPrefix, participants }) => {
let pp = './Menu2.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `El usuario que está mencionando no está registrado en mi base de datos`
try {
pp = await conn.profilePictureUrl(who)
} catch (e) {

} finally {
let { name, limit, lastclaim, registered, regTime, age } = global.db.data.users[who]
let username = conn.getName(who)
let prem = global.prems.includes(who.split`@`[0])
let sn = createHash('md5').update(who).digest('hex')
let str = `
*NOMBRE:* ${username} ${registered ? '(' + name + ') ': ''}
*NUMERO:* ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
*LINK:* wa.me/${who.split`@`[0]}${registered ? '\n*𝙴𝙳𝙰𝙳:* ' + age + ' años' : ''}
*DORRACOINS*: ${dorracoins}
*LIMITE:* ${limit} 𝚄𝚂𝙾𝚂
*REGISTRADO:* ${registered ? 'Si': 'No'}
*PREMIUM:* ${prem ? 'Si' : 'No'}
*NUMERO DE SERIE:* 
${sn}`
conn.fakeReply(m.chat, str, '0@s.whatsapp.net', '*🔥 THE DORRAT - BOT 🔥*', 'status@broadcast')
//conn.sendButton(m.chat, str, author, pp, [['𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻', '/menu']], m)
}}
handler.help = ['profile [@user]']
handler.tags = ['xp']
handler.command = /^perfil|profile?$/i
export default handler
