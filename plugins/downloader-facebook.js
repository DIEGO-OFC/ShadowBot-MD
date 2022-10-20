import fg from 'api-dylux' 
let handler = async (m, { conn, args, usedPrefix, command }) => {
 
 if (!args[0]) throw `[❗𝐈𝐍𝐅𝐎❗] 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝚄𝙽 𝙻𝙸𝙽𝙺 𝙳𝙴 𝚄𝙽 𝚅𝙸𝙳𝙴𝙾 𝙳𝙴 𝙵𝙰𝙲𝙴𝙱𝙾𝙾𝙺\n\n📌 𝐄𝐉𝐄𝐌𝐏𝐋𝐎 :\n*${usedPrefix + command}* https://fb.watch/d7nB8-L-gR/`
    m.react(rwait)
   try {
  let res = await fg.fbdl(args[0])
  let vid = res.data[0].url
  let cal = res.data[0].quality   
  let te = `
┌─⊷ FBDL
📦 *Calidad:* ${cal}
└───────────`
  conn.sendFile(m.chat, vid, 'fb.mp4', te, m)
  m.react(done)
  } catch (e) {
	m.reply('[❗𝐈𝐍𝐅𝐎❗] 𝙾𝙲𝚄𝚁𝚁𝙸𝙾 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁, 𝚁𝙴𝚅𝙸𝚂𝙰 𝚀𝚄𝙴 𝙴𝙻 𝙻𝙸𝙽𝙺 𝚂𝙴𝙰 𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙾')
	} 
	
}
handler.help = ['facebook'].map(v => v + ' <url>')
handler.tags = ['dl']
handler.command = /^((facebook|fb)(downloder|dl)?)$/i
handler.diamond = true

export default handler
