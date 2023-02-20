import PhoneNumber from 'awesome-phonenumber'

let handler = async (m, { conn, text, command, usedPrefix }) => {//prems 

let who
//let pp = './galeria/menudorrat3.jpg'
let txt = text.replace('@' + who.split`@`[0], '').trim()
if (!txt) return conn.reply(m.chat, `$*ESCRIBA EL MOTIVO DEL BANEO\n` + `*${usedPrefix + command} @${who.split`@`[0]} *Motivo*`, m)  
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender
let name = conn.getName(who)
let pp = await conn.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/9b1353deceded7f387713.jpg')
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
let banu = `Tal vez el ban los haga reflexionar`
let banu2 = `*✅ USUARIO BANEADO*\n*NOMBRE:* ${name}\n*NUMERO:* ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}\nRazon: ${text}*`
let user = global.db.data.users[who]
if (!who) throw `*[❕] ETIQUETA A LA PERSONA QUE SERA BANEADA*`
let users = global.db.data.users
users[who].banned = true
await conn.sendButton(m.chat, banu2,  banu,  pp,[
['𝙼𝙴𝙽𝚄', `#menusimple`]], m)}
handler.help = ['banuser']
handler.tags = ['owner']
handler.command = /^banuser$/i
handler.rowner = true
export default handler
