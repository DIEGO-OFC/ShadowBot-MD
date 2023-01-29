import fetch from 'node-fetch'
let handler = async (m, { conn, command, args }) => {
if (!args[0]) return conn.reply(m.chat, '*[🔎] 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙻𝙰 𝚄𝚁𝙻 𝙳𝙴 𝚄𝙽𝙰 𝙿𝙰𝙶𝙸𝙽𝙰*', m)
let link = `https://api.screenshotmachine.com/?key=c04d3a&url=${args[0]}&screenshotmachine.com&dimension=720x720`
conn.sendMessage(m.chat, {image:{url:link}}, {quoted:m})}
handler.help = ['ss', 'ssf'].map(v => v + ' <url>')
handler.tags = ['internet']
handler.command = /^ss(web)?f?$/i
export default handler
