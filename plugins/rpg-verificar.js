
import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
  let user = global.db.data.users[m.sender]
  let name2 = conn.getName(m.sender)
  if (user.registered === true) throw `[❗𝐈𝐍𝐅𝐎❗] 𝚈𝙰 𝙴𝚂𝚃𝙰𝚂 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙰𝙳𝙾\n\n¿𝚀𝚄𝙸𝚁𝚁𝙴 𝚅𝙾𝙻𝚅𝙴𝚁 𝙰 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙰𝚁𝚂𝙴?\n\n 📌𝚄𝚂𝙴 𝙴𝚂𝚃𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙿𝙰𝚁𝙰 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝚁 𝚂𝚄 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙾\n*${usedPrefix}unreg* <Número de serie>`
  if (!Reg.test(text)) throw `[❗𝐈𝐍𝐅𝐎❗]  Formato incorrecto\n\n 📦 Uso del comamdo: *${usedPrefix + command} nombre.edad*\n📌Ejemplo : *${usedPrefix + command}* diego.16`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw '[❗𝐖𝐀𝐑𝐍❗] 𝙳𝙴𝙱𝙴𝚂 𝙿𝙾𝙽𝙴𝚁 𝚄𝙽 𝙽𝙾𝙼𝙱𝚁𝙴'
  if (!age) throw '[❗𝐖𝐀𝐑𝐍❗] 𝙻𝙰 𝙴𝙳𝙰𝙳 𝙽𝙾 𝙿𝚄𝙴𝙳𝙴 𝙴𝚂𝚃𝙰𝚁 𝚅𝙰𝙲𝙸𝙰'
  if (name.length >= 30) throw '[❗𝐖𝐀𝐑𝐍❗] 𝙴𝙻 𝙽𝙾𝙼𝙱𝚁𝙴 𝙴𝚂 𝙳𝙴𝙼𝙰𝚂𝙸𝙰𝙳𝙾 𝙻𝙰𝚁𝙶𝙾' 
  age = parseInt(age)
  if (age > 100) throw '👴🏻 nmms viejo de mrd xd'
  if (age < 5) throw '🤡 un bebé 🤡'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  m.reply(`
┌─「 *REGISTRADO* 」─
▢ *Nombre:* ${name}
▢ *Edad* : ${age} años
▢ *Numero de serie* :
${sn}
└──────────────
 *${usedPrefix}help* para ver el Menu
`.trim())
}
handler.help = ['reg'].map(v => v + ' <nombre.edad>')
handler.tags = ['rg']

handler.command = ['verify', 'reg', 'register', 'registrar'] 

export default handler



/*import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
  let user = global.db.data.users[m.sender]
  let name2 = conn.getName(m.sender)
  if (user.registered === true) throw `✳️ Ya estás registrado\n\n¿Quiere volver a registrarse?\n\n 📌 Use este comando para eliminar su registro \n*${usedPrefix}unreg* <Número de serie>`
  if (!Reg.test(text)) throw `⚠️ Formato incorrecto\n\n ✳️ Uso del comamdo: *${usedPrefix + command} nombre.edad*\n📌Ejemplo : *${usedPrefix + command}* ${name2}.16`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw '✳️ El nombre no puede estar vacío'
  if (!age) throw '✳️ La edad no puede estar vacía'
  if (name.length >= 30) throw '✳️ El nombre es demasiado largo' 
  age = parseInt(age)
  if (age > 100) throw '👴🏻 Wow el abuelo quiere jugar al bot'
  if (age < 5) throw '🚼  hay un abuelo bebé jsjsj '
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  m.reply(`
┌─「 *REGISTRADO* 」─
▢ *Nombre:* ${name}
▢ *Edad* : ${age} años
▢ *Numero de serie* :
${sn}
└──────────────
 *${usedPrefix}help* para ver el Menu
`.trim())
}
handler.help = ['reg'].map(v => v + ' <nombre.edad>')
handler.tags = ['rg']

handler.command = ['verify', 'reg', 'register', 'registrar'] 

export default handler*/
