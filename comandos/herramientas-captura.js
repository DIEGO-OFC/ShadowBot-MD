import fetch from 'node-fetch'
let handler = async (m, { conn, command, args, text }) => {
      
    if (!args[0]) return m.reply('✳️ Ingrese la Url de una página')
     
	let full = /f$/i.test(command)
    let u = /https?:\/\//.test(args[0]) ? args[0] : 'https://' + args[0]
    let ss = await (await fetch(global.API('nrtm', '/api/ssweb', { delay: 1000, url: u }))).buffer()
    conn.sendFile(m.chat, ss, 'ssweb.png', '✅ Captura de la Pagina', m) 
   m.react(done) 
}
handler.help = ['ssweb <url>']
handler.tags = ['tools']
handler.command = ['ssweb', 'ss', 'captura'] 
handler.diamond = true

export default handler
