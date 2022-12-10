

let ro = 3000
let handler = async (m, { conn, usedPrefix, command}) => {
    let time = global.db.data.users[m.sender].lastrob + 7200000
    if (new Date - global.db.data.users[m.sender].lastrob < 7200000) throw `⏱️¡Hey! Espera *${msToTime(time - new Date())}* para volver a robar`
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    else who = m.chat
    if (!who) throw `✳️ Etiqueta a alguien para robar`
    if (!(who in global.db.data.users)) throw `✳️ El usuario no se encuentra en mi base de datos`
    let users = global.db.data.users[who]
    let rob = Math.floor(Math.random() * ro)
    if (users.exp < rob) return m.reply(`😔 @${who.split`@`[0]} tiene menos de *${ro} xp*\nNo robes a un pobre v":`, null, { mentions: [who] })    
   global.db.data.users[m.sender].exp += rob
   global.db.data.users[who].exp -= rob
  
    m.reply(`
  ‣ Robaste *${rob} XP* a @${who.split`@`[0]}
  `, null, { mentions: [who] })
    global.db.data.users[m.sender].lastrob = new Date * 1
  }

  handler.help = ['rob']
  handler.tags = ['econ']
  handler.command = ['robar', 'rob']
  
  export default handler
  
  function msToTime(duration) {
    var milliseconds = parseInt((duration % 1000) / 100),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
  
    hours = (hours < 10) ? "0" + hours : hours
    minutes = (minutes < 10) ? "0" + minutes : minutes
    seconds = (seconds < 10) ? "0" + seconds : seconds
  
    return hours + " Hora(s) " + minutes + " Minuto(s)"
  }
  


/*let handler = async (m, { conn, isPrems}) => {
let hasil = Math.floor(Math.random() * 5000)
let time = global.db.data.users[m.sender].lastwork + 600000
if (new Date - global.db.data.users[m.sender].lastwork < 600000) throw `*𝙴𝚜𝚝𝚊𝚜 𝚌𝚊𝚗𝚜𝚊𝚍𝚘, 𝚍𝚎𝚋𝚎𝚜 𝚍𝚎𝚜𝚌𝚊𝚗𝚜𝚊𝚛 𝚌𝚘𝚖𝚘 𝚖𝚒𝚗𝚒𝚖𝚘 ${msToTime(time - new Date())} 𝚙𝚊𝚛𝚊 𝚟𝚘𝚕𝚟𝚎𝚛 𝚊 hacer un crimen!*`

m.reply(`${pickRandom(global.crimen)} *${hasil} XP*`)
global.db.data.users[m.sender].lastwork = new Date * 1
}
handler.help = ['robar']
handler.tags = ['xp']
handler.command = ['crimen', 'rob', "asaltar"]
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

return minutes + " m " + seconds + " s " 
}


function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}

global.crimen = ["Robaste a un politico y ganas", "Robaste al Gobierno, ganando", "Robaste una persona y ganas",
 "Robaste un Búnker y ganaste", "Robaste una Mansión y te pagaron", 
"Robaste un Avión y ganaste", 
"trabajaste para la mafia y te pagaron", "Robaste dos obra de arte del museo de España y ganaste", 
"Asaltaste dos bancos de tu ciudad y ganas", 
"Robaste a McDonald's y ganaste", "robaste a roblox y ganaste", "robaste a DIEGO-OFC y ganaste", 
"Robaste a discord y ganaste", 
"Robaste una tienda de ropa y ganaste"
]*/

/*****************************************
*CREADO POR https://github.com/DIEGO-OFC*
*****************************************/
