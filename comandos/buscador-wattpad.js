import fetch from 'node-fetch'
import translate from '@vitalets/google-translate-api'

let handler = async(m, { conn, text }) => {
  if (!text) throw `Mau Cari Apa?`
  let res = await fetch(`https://api.xyroinee.xyz/api/search/wattpad?q=${text}&apikey=uwgflzFEh6`)
  let anu = await res.json()
  anu = anu.data.map((v) => `*Title:* ${v.title}\n*Reads:* ${v.reads}\n*Vote:* ${v.vote}\n*Chapter:* ${v.chapter}\n*Link:* ${v.link}\nDescription:* ${v.desc}`).join`\n\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n\n`
  let akuariapiresult2 = await translate(`${anu}`, { to: 'es', autoCorrect: true })
  
  conn.sendFile(m.chat, anu[0].thumb, 'dorrat.jpg', akuariapiresult2.text, m)
}
handler.help = ['wattpad']
handler.tags = ['internet']
handler.command = /^(wattpad)$/i
handler.limit = true

export default handler
