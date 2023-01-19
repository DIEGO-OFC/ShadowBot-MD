/*
Creado por https://github.com/DIEGO-OFC | https://github.com/GataNina-Li
*/
import fetch from 'node-fetch'
let handler = async (m, { conn, text }) => {
let groups = Object.keys(await conn.groupFetchAllParticipating())
m.reply(`_mensaje enviando a ${groups.length}`)
for (let id of groups) {
let d = './Menu2.jpg'
        
await conn.sendButtonLoc(id, d, text, wm, "Okey", "Ok", m)
}
m.reply('*✅*')
}
handler.help = ['bcloc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(pruebaloc)$/i
handler.owner = true

export default handler
