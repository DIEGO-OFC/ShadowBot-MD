
import MessageType from '@adiwajshing/baileys'

const cooldown = 10800000

let handler = async (m, { conn, text, usedPrefix, command, groupMetadata }) => {
    let rauser = groupMetadata.participants.map(v => v.jid)[Math.floor(Math.random() * groupMetadata.participants.map(v => v.jid).length)]
    if (!text) return m.reply(`*• Etiquetɑ ɑl usuɑrio que quierɑ sɑqueɑr*\n\n*Ejemplo de uso:*\n1. ${usedPrefix}sɑqueɑr <usuɑrio/@tɑg>\n2.`)
    let _user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
    if (!_user in global.db.data.users) return m.reply(`El usuɑrio no estά registrɑdo en lɑ bɑse de dɑtos!`)
    if (global.db.data.users[_user] == undefined) return m.reply(`El usuɑrio no estά registrɑdo en lɑ bɑse de dɑtos!`)
    if (_user.startsWith(conn.user.jid.split`@`[0])) return m.reply('No puedes saquear a la bot :I')
    let user = global.db.data.users[m.sender]
    let uuser = global.db.data.users[_user]
    let __timers = (new Date - user.lastrob)
    let _timers = (cooldown - __timers)
    let timers = clockString(_timers)
    
    let dolares = (Math.floor(Math.random() * 1000) + 20)
    let oak = (Math.floor(Math.random() * 50) + 50)
    let limit = (Math.floor(Math.random() * 5) + 3)
    let gold = (Math.floor(Math.random() * 10) + 10)

let raid = `*Has saqueado ⚔️ a @${_user.split("@s.whatsapp.net")[0]}*
◦ Dinero: $${dolares}
◦ Diamante: ${limit}
◦ Oro: ${gold}
◦ Madera: ${oak}`
    if (new Date - user.lastrob > cooldown) {
      if (uuser.diamond <= 5) return m.reply('El usuario no tiene suficientes recursos!')
        global.db.data.users[_user].dolares -= dolares * 1
        global.db.data.users[_user].oak -= oak * 1
        global.db.data.users[_user].limit -= limit * 1
        global.db.data.users[_user].gold -= gold * 1
    
        global.db.data.users[m.sender].dolares += dolares * 1
        global.db.data.users[m.sender].oak += oak * 1
        global.db.data.users[m.sender].limit += limit * 1
        global.db.data.users[m.sender].gold += gold * 1
        global.db.data.users[m.sender].lastrob = new Date * 1
        m.reply(raid)
        m.reply(`*@${m.sender.split("@s.whatsapp.net")[0]}* Te acaba de saquear!`, _user)
    } else {
        conn.sendMessage(m.chat, 'Espere *' + timers + '* para volver a saquear', MessageType.text, { quoted: m })
    }
}

handler.help = ['saquear']
handler.tags = ['rpg']
handler.command = /^(raidear|saquear)$/i

handler.cooldown = cooldown

export default handler 

function clockString(ms) {

let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)

let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60

let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60

return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}






/*let ro = 3000
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
  }*/
  


