let handler = async (m, { conn, isPrems}) => { //lastmiming
let minar = `${pickRandom(['Que pro 😎 has minado','🌟✨ Genial!! Obtienes','WOW!! eres un(a) gran Minero(a) ⛏️ Obtienes','Felicidades!! Ahora tienes','⛏️⛏️⛏️ Obtienes'])}`
let pp = './galeria/menudorrat3.jpg'
let d = Math.floor(Math.random() * 10)
global.db.data.users[m.sender].dorracoins += d * 1  
//let hasil = Math.floor(Math.random() * 2000)
let time = global.db.data.users[m.sender].lastdiamantes + 600000
if (new Date - global.db.data.users[m.sender].lastdiamantes < 600000) throw `*⏱️ Vuelva en ${msToTime(time - new Date())} para continuar minando DorratCoins ⛏️*`  

conn.sendButton(m.chat, `*${minar} ${d} DORRAT-COINS*`, wm3, pp, 
[
['𝗠𝗜𝗡𝗔𝗥 𝗘𝗫𝗣 ⚡', `.minar`],
['𝗚𝗥𝗨𝗣𝗢 𝗢𝗙𝗜𝗖𝗜𝗔𝗟𝗘𝗦 👑', `.grupos`],
], m)
global.db.data.users[m.sender].lastdiamantes = new Date * 1  
  

//m.reply(`*${minar} *${hasil} 𝙓𝙋*`)

}
handler.help = ['minar']
handler.tags = ['dorratcoins']
handler.command = ['minardorracoins', 'miming4', 'mine4', 'minarcoins', 'minarcoims', 'minardorrecoins'] 
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

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}
