import fecth from 'node-fetch'
let handler  = async (m, { conn }) => {
let info = await fetch('https://raw.githubusercontent.com/DIEGO-OFC/DORRAT-BOT-MD/blob/main/galeria/traba.txt').then(v => v.text());
conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '🔥 *by   ͩ ͥ ͤ ᷚ ͦ- ͦ ᷫ  ⷭ⁩* 🔥', 'status@broadcast')}
handler.command = ['virus2', 'c2', 'binario2', 'traba2', 'crash2', 'bughole'] 
handler.rowner = true
handler.fail = null
export default handler 
