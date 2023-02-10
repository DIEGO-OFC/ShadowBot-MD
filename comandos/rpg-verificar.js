if (command == 'finalizar' || command == 'end') {
if (global.db.data.users[m.sender]['registroC'] == true) {
user.name = nombre 
user.age = edad
user.genero = genero
user.identidad = identidad
//user.pasatiempo = pasatiempo
global.db.data.users[m.sender].money += 400
global.db.data.users[m.sender].limit += 7
global.db.data.users[m.sender].exp += 250
global.db.data.users[m.sender].joincount += 3	
}else{
user.name = nombre 
user.age = edad	
}
user.regTime = + new Date
user.registered = true
let sn = createHash('md5').update(m.sender).digest('hex').slice(0, 6)
	
let caption = `
╔═════ೋೋ═════╗
║ ⚡ \`\`\`VERIFICACIÓN EXITOSA\`\`\` ⚡
║ 🔥 *REGISTRADO EN*
║ ❍ ${wm3}
║ 📋 *TIPO DE REGISTRO* 
║ ❍ ${user.registroC === true ? 'Registro Completo' : 'Registro Rápido'}
║ ✅ *INSIGNIA DE VERIFICACIÓN*
║ ❍   *${user.registered === true ? 'DB ✓' : ''}*
║ 👤 *NOMBRE* 
║ ❍ ${user.name}${user.registered === true ? 'DB ✓' : ''}
║ 🔢 *EDAD* 
║ ❍ ${user.age} Años *||* ${user.age > 18 ? '(Persona Adulta)' : '(Persona Joven)'}
║ ${user.registroC === true ? `\n☘️ *GENERO*
║ ❍ ${user.genero == 'Ocultado' ? `${user.genero} 🗣️` : user.genero == 'Mujer' ? `${user.genero} 🚺` : user.genero == 'Hombre' ? `${user.genero} 🚹` : ''}
║ 🔷 *IDENTIDAD DE GÉNERO*
║ ❍ ${user.identidad}
║ 📌 *PASATIEMPO(S)*
║ ❍ ${user.pasatiempo}` : ''}
║ 🛅 *CÓDIGO DE REGISTRO*
║ ❍ ${sn}
${user.registroC === true ? 'completo' : 'Rapido'}
╚════ ≪ •❈• ≫ ════╝
`.trim()

await m.reply('🔄 ```VERIFICANDO DATOS...```')
await conn.sendButton(m.chat, caption, user.registroC === true ? wm : 'Si elimina su registro se eliminara los datos e insignia y dejara de tener acceso a los comandos con registro\n\nPuede volver a eliminar su registro y registrarse desde 0 sin problema.\n\nSu código de serie le permitirá borrar su registro ejemplo:\n' + `${usedPrefix}unreg ${sn}`, [['[ PERFIL ]', '/profile']], m)
await m.reply(`${sn}`)
	
}}
handler.command = ['verify', 'verificar', 'register', 'reg', 'reg1', 'nombre', 'name', 'nombre2', 'name2', 'edad', 'age', 'edad2', 'age2', 'genero', 'género', 'gender', 'identidad', 'pasatiempo', 'hobby', 'identity', 'finalizar']  ///^(verify|verificar|reg(ister)?)$/i
export default handler



/*import { createHash } from 'crypto'
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
  let caption = `
┌─「 *REGISTRADO* 」─
▢ *Nombre:* ${name}
▢ *Edad* : ${age} años
▢ *Numero de serie* :
${sn}
└──────────────`
let author = global.author
conn.sendButton(m.chat, caption, `¡𝚃𝚄 𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴 𝚂𝙴𝚁𝙸𝙴 𝚃𝙴 𝚂𝙴𝚁𝚅𝙸𝚁𝙰 𝙿𝙾𝚁 𝚂𝙸 𝙳𝙴𝚂𝙴𝙰𝚂 𝙱𝙾𝚁𝚁𝙰𝚁 𝚃𝚄 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙾 𝙴𝙽 𝙴𝙻 𝙱𝙾𝚃!\n${author}`, [['¡¡𝙰𝙷𝙾𝚁𝙰 𝚂𝙾𝚈 𝚄𝙽 𝚅𝙴𝚁𝙸𝙵𝙸𝙲𝙰𝙳𝙾/𝙰!!', '/profile']], m)
global.db.data.users[m.sender].money += 10000
global.db.data.users[m.sender].exp += 10000
}
handler.help = ['reg'].map(v => v + ' <nombre.edad>')
handler.tags = ['rg']

handler.command = ['verify', 'reg', 'register', 'registrar', 'verificar'] 

export default handler*/

