import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
	
 let name = conn.getName(m.sender)
  if (!text) throw `[❕𝐈𝐍𝐅𝐎❕] *Ejemplo :*\n\n *${usedPrefix + command}* me baño?`
  //let res = await fetch(global.API('https://api.simsimi.net', '/v2/', { text: encodeURIComponent(text), lc: "es" }, ''))
  let res = await fetch(`https://api.simsimi.net/v2/?text=${text}&lc=es`)
  let json = await res.json()
  if (json.success) 
m.reply(`╔═══════════════════
║≡ *❗ 𝐏𝐑𝐄𝐆𝐔𝐍𝐓𝐀𝐒 ❗*
║-----------------------
║➢ *𝙿𝚁𝙴𝙶𝚄𝙽𝚃𝙰:* ${text}
║-----------------------
║➢ *𝚁𝙴𝚂𝙿𝚄𝙴𝚂𝚃𝙰:* ${json.success.replace('simsimi', 'DyLux').replace('Simsimi', 'DyLux').replace('sim simi', 'DyLux')} 
╚═══════════════════`)
  else throw json
}

handler.help = ['pregunta']
handler.tags = ['fun']
handler.command = ['pregunta', 'preg'] 

export default handler
