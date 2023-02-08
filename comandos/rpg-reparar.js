const Uppickaxe = 3000
const Uprod = 1000
const Upaxe = 20

let handler = async (m, { conn, usedPrefix, command, args }) => {

let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
let type = (args[0] || ' ').toLowerCase()

switch (type) {
case 'pico':
      if (global.db.data.users[m.sender].pickaxe > 0) {
      if (global.db.data.users[m.sender].pickaxedurability >= 5000) return conn.reply(m.chat, 'Tu pico tiene la durabilidad máxima', m)
      if (global.db.data.users[m.sender].dolares > Uppickaxe * 1) {
      	global.db.data.users[m.sender].pickaxedurability += 500
          global.db.data.users[m.sender].dolares -= Uppickaxe * 1
          conn.reply(m.chat, `Se aumento la *durabilidad de tu pico* por ${Uppickaxe} de dinero` ,m)
          } else conn.reply(m.chat, `Tu dinero no es suficiente para aumentar la durabilidad de tu pico que cuesta ${Uppickaxe} de dinero`, m)
          } else conn.reply(m.chat, `Todavía no tienes un pico, compralo escribiendo ${usedPrefix}comprar pico`, m)
      break

case 'caña':
      if (global.db.data.users[m.sender].rod > 0) { 
      if (global.db.data.users[m.sender].roddurability >= 5000) return conn.reply(m.chat, 'Tu caña tiene la durabilidad máxima', m)
      if (global.db.data.users[m.sender].dolares > Uprod * 1) {
      	global.db.data.users[m.sender].roddurability += 500
          global.db.data.users[m.sender].dolares -= Uprod * 1
          conn.reply(m.chat, `Se aumento la *durabilidad de tu caña* por ${Uprod} de dinero` ,m)
          } else conn.reply(m.chat, `Tu dinero no es suficiente para aumentar la durabilidad de tu caña que cuesta ${Uprod} de dinero`, m)
          } else conn.reply(m.chat, `Todavía no tienes una caña, compralo escribiendo ${usedPrefix}comprar caña`, m)
      break

case 'hacha':
      if (global.db.data.users[m.sender].axe > 0) { 
      if (global.db.data.users[m.sender].axedurability >= 5000) return conn.reply(m.chat, 'Tu hacha tiene la durabilidad máxima', m)
      if (global.db.data.users[m.sender].dolares > Upaxe * 1) {
      	global.db.data.users[m.sender].axedurability += 500
          global.db.data.users[m.sender].dolares -= Upaxe * 1
          conn.reply(m.chat, `Se aumento la *durabilidad de tu hacha* por ${Upaxe} de dinero` ,m)
          } else conn.reply(m.chat, `Tu dinero no es suficiente para aumentar la durabilidad de tu hacha que cuesta ${Upaxe} de dinero`, m)
          } else conn.reply(m.chat, `Todavía no tienes una hacha, compralo escribiendo ${usedPrefix}comprar hacha`, m)
      break

    default:
let rep = `
*Ingrese la herramienta que quiere reparar*
- Ejemplo: ${usedPrefix + command} pico
*Lista de herramientas*
- Pico
- Hacha
- Caña
`.trim()
return m.reply(rep)
  }
}

handler.help = ['reparar']
handler.tags = ['rpg']
handler.command = /^(reparar)$/i

export default handler 
