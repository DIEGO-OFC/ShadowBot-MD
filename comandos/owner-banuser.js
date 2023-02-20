import PhoneNumber from 'awesome-phonenumber'

let handler = async (m, { conn, text, command, usedPrefix }) => {//prems 

let who
//let pp = './galeria/menudorrat3.jpg'
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender
let name = conn.getName(who)
let pp = await conn.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/9b1353deceded7f387713.jpg')
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text

let user = global.db.data.users[who]
if (!who) throw `*[❕] ETIQUETA A LA PERSONA QUE SERA BANEADA*`
let users = global.db.data.users
users[who].banned = true
await conn.sendButton(m.chat, `*✅ USUARIO BANEADO*\n*NOMBRE:* ${name}\n*NUMERO:* ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}\nRazon: ${text ? ': ' + text : ''}*`, wm,  pp,[
['𝙼𝙴𝙽𝚄', `#menusimple`]], m)}
handler.help = ['banuser']
handler.tags = ['owner']
handler.command = /^banuser$/i
handler.rowner = true
export default handler
