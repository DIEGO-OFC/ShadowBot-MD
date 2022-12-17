let handler = async (m, { conn, text, command, usedPrefix }) => {//prems 
const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}  
if (!db.data.chats[m.chat].antitoxic && m.isGroup) return conn.reply(m.chat, `${ag}𝙇𝘼 𝙁𝙐𝙉𝘾𝙄𝙊𝙉 *#on antitoxicos* 𝙀𝙎𝙏𝘼 𝘿𝙀𝙎𝘼𝘾𝙏𝙄𝙑𝘼𝘿𝘼, 𝘿𝙀𝘽𝙀 𝘿𝙀 𝘼𝘾𝙏𝙄𝙑𝘼𝙍 𝘿𝙄𝘾𝙃𝘼 𝙁𝙐𝙉𝘾𝙄𝙊𝙉 𝙋𝘼𝙍𝘼 𝘿𝙀𝙎𝘽𝙇𝙊𝙌𝙐𝙀𝘼𝙍 𝙀𝙎𝙏𝙀 𝘾𝙊𝙈𝘼𝙉𝘿𝙊`, fkontak, m) 
let who
let pp = './Menu2.jpg'
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
let user = global.db.data.users[who]
if (!who) throw `${mg}𝐄𝐓𝐈𝐐𝐔𝐄𝐓𝐄 𝐋𝐀 𝐏𝐄𝐑𝐒𝐎𝐍𝐀 𝐐𝐔𝐄 𝐕𝐀 𝐑𝐄𝐂𝐈𝐁𝐈𝐑 𝐀𝐃𝐕𝐄𝐑𝐓𝐄𝐍𝐂𝐈𝐀𝐒 ⚠️\n\n𝐓𝐀𝐆 𝐓𝐇𝐄 𝐏𝐄𝐑𝐒𝐎𝐍 𝐖𝐇𝐎 𝐖𝐈𝐋 𝐑𝐄𝐂𝐄𝐈𝐕𝐄 𝐓𝐇𝐄 𝐖𝐀𝐑𝐍𝐈𝐍𝐆⚠️\n\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊 | 𝙀𝙓𝘼𝙈𝙋𝙇𝙀\n*${usedPrefix + command} @tag*`
let txt = text.replace('@' + who.split`@`[0], '').trim()
if (!txt) return conn.reply(m.chat, `${mg}*ESCRIBA EL MOTIVO DE LA ADVERTENCIA*\n` + `*${usedPrefix + command} @${who.split`@`[0]} *Motivo*`, fkontak, m)  
user.warn += 1
  
await conn.sendButton(m.chat,`${user.warn == 1 ? `*@${who.split`@`[0]}*` : `*@${who.split`@`[0]}*`} 𝙍𝙀𝘾𝙄𝘽𝙄𝙊 𝙐𝙉𝘼 𝘼𝘿𝙑𝙀𝙉𝙏𝙀𝙉𝘾𝙄𝘼 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊!!\n\n𝙄 𝙍𝙀𝘾𝙀𝙄𝙑𝙀𝘿 𝘼 𝙒𝘼𝙍𝙉𝙄𝙉𝙂 𝙄𝙉 𝙏𝙃𝙄𝙎 𝙂𝙍𝙊𝙐𝙋!!\n\n🫵 *${text}*`, `*ADVERTENCIA : WARNING*\n⚠️ *${user.warn}/4*\n\n${wm}`, pp, [
[`😐 𝙇𝙊 𝙎𝙄𝙀𝙉𝙏𝙊`, '.ok'],
['💫 𝗕𝗮𝗹𝗮𝗻𝗰𝗲', '.balance'],
['🔰 𝙈𝙀𝙉𝙐', '/menu']], false, { mentions: [who] }) //[m.sender]
	
if (user.warn >= 4) {
user.warn = 0
await m.reply(`𝙏𝙀 𝙇𝙊 𝘼𝘿𝙑𝙀𝙍𝙏𝙄𝘿 𝙑𝘼𝙍𝙄𝘼𝙎 𝙑𝙀𝘾𝙀𝙎!!\n*@${who.split`@`[0]}* 𝙎𝙐𝙋𝙀𝙍𝘼𝙎𝙏𝙀 𝙇𝘼𝙎 *4* 𝘼𝘿𝙑𝙀𝙍𝙏𝙀𝙉𝘾𝙄𝘼𝙎 𝘼𝙃𝙊𝙍𝘼 𝙎𝙀𝙍𝘼𝙎 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝘿𝙊(𝘼) 🙄\n\n𝙔𝙊𝙐 𝙋𝘼𝙎𝙎𝙀𝘿 𝘼𝙇𝙇 *4* 𝙒𝘼𝙍𝙉𝙄𝙉𝙂𝙎 𝙉𝙊𝙒 𝙔𝙊𝙐 𝙒𝙄𝙇𝙇 𝘽𝙀 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙏𝙀𝘿 😐`, false, { mentions: [who] })
user.banned = true
await conn.groupParticipantsUpdate(m.chat, [who], 'remove') //@${m.sender.split`@`[0]}
//await this.updateBlockStatus(m.sender, 'block')
}
return !1
}
handler.help = ['addprem <@user>']
handler.tags = ['owner']
handler.command = /^(advertir|advertencia|warn|warning)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
export default handler
