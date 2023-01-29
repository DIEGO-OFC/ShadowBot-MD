import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
 let response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Parameter'
  m.reply('*[ ❗ ] Wait,Proses...*')
  let res = `https://api.zeks.xyz/api/wolflogo?apikey=apivinz&text1=${response[0]}&text2=${response[1]}`
  conn.sendFile(m.chat, res, 'wolflogo.jpg', `Nih kak`, m, false)
}
handler.help = ['wolflogo'].map(v => v + ' <text|text>')
handler.tags = ['sticker']
handler.command = /^(wolflogo)$/i

export default handler 
