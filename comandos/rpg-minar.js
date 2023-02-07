import fs from 'fs'
let handler = async (m, { conn, isPrems, usedPrefix}) => {
let hasil = Math.floor(Math.random() * 1000)
//let time = global.db.data.users[m.sender].lastmiming + 60000
//if (new Date - global.db.data.users[m.sender].lastmiming < 600000) throw `*⏰ Espera ${msToTime(time - new Date())} Para volver a minar*`
let user = global.db.data.users[m.sender] 
if (user.health < 80) return m.reply(`Requiere al menos 80 ❤️Salud para la minería!!
compre ❤️ Salud primero escribiendo *${usedPrefix}buy potion <cantidad>*,
y despues
*${usedPrefix}heal <cantidad>*
`.trim()) 
let db = './Menu2.jpg'
let info = `
*[ ⛏️ ] Genial minaste ${hasil} XP*`.trim()
global.db.data.users[m.sender].lastmiming = new Date * 1


conn.sendMessage(m.chat, {image: imagen5}, caption: info}, {quoted: m})}
handler.help = ['minar']
handler.tags = ['xp']
handler.command = ['minar', 'miming', 'mine'] 
handler.fail = null
handler.exp = 0
export default handler

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds

return minutes + " m y " + seconds + " s " 
}
