let handler = m => m
handler.before = async function (m, {conn, isAdmin, isBotAdmin} ) {
	
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]

if (isBotAdmin && chat.antiArab) {
		
if (m.sender.startsWith('92' || '92')) {
global.db.data.users[m.sender].banned = true
m.reply(`💥 Anti árabes está activo para evitar spam\n\nHasta la próxima`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}
   
if (m.sender.startsWith('212' || '212')) {
global.db.data.users[m.sender].banned = true
m.reply(`💥 Anti árabes está activo para evitar spam\n\nHasta la próxima`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')} 
   
}}
export default handler

