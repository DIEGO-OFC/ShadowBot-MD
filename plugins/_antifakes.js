
let handler = m => m
handler.before = async function (m, {conn, isAdmin, isBotAdmin} ) {
	
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]

if (isBotAdmin && chat.antifake) {
		
if (m.sender.startsWith('212' || '212')) {
   	global.db.data.users[m.sender].banned = false
conn.reply('Antifake  Activado lo siento seras expulsado del grupo.😄')
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}
   }
   
   if (m.sender.startsWith('265' || '265')) {
   	global.db.data.users[m.sender].banned = true
conn.reply('Antifake  Activado lo siento seras expulsado del grupo.😄')
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}
   } 
if (m.sender.startsWith('92' || '92')) {
   	global.db.data.users[m.sender].banned = true
conn.reply('Antifake  Activado lo siento seras expulsado del grupo.😄')
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}
   } 
   if (m.sender.startsWith('84' || '84')) {
   	global.db.data.users[m.sender].banned = true
m.reply('Antifake  Activado lo siento seras expulsado del grupo.😄')
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}
   } 
   if (m.sender.startsWith('62' || '62')) {
   	global.db.data.users[m.sender].banned = true
conn.reply('Antifake  Activado lo siento seras expulsado del grupo.😄')
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}
   } 
   if (m.sender.startsWith('7' || '7')) {
   	global.db.data.users[m.sender].banned = true
conn.reply('Antifake  Activado lo siento seras expulsado del grupo.😄')
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}
   } 
   if (m.sender.startsWith('213' || '213')) {
   	global.db.data.users[m.sender].banned = true
conn.reply('Antifake  Activado lo siento seras expulsado del grupo.😄')
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}
   } 
   if (m.sender.startsWith('48' || '48')) {
   	global.db.data.users[m.sender].banned = true
conn.reply('Antifake  Activado lo siento seras expulsado del grupo.😄')
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}
   } 
   if (m.sender.startsWith('371' || '371')) {
   	global.db.data.users[m.sender].banned = true
conn.reply('Antifake  Activado lo siento seras expulsado del grupo.😄')
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}
   } 
   if (m.sender.startsWith('98' || '98')) {
   	global.db.data.users[m.sender].banned = true
conn.reply('Antifake  Activado lo siento mirey seras expulsado del grupo.😄')
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}
   }
   if (m.sender.startsWith('377' || '377')) {
   	global.db.data.users[m.sender].banned = true
conn.reply('Antifake  Activado lo siento seras expulsado del grupo.😄')
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}
   } 
    }

export default handler
