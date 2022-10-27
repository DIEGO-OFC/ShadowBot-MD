import fetch from 'node-fetch'
let handler = async (m, { text }) => {
  let res = await fetch(global.API('https://covid19.mathdro.id', '/api/countries/'+ (text)))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.confirmed) throw 'pais?'
  if (json.confirmed) m.reply(`
🌏pais: ${text}
✅confirmados: ${json.confirmed.value}
📉Curados : ${json.recovered.value}
☠️muertes : ${json.deaths.value}
💌Info hace : ${json.lastUpdate}
`.trim())
  else throw json
}
handler.help = ['covid'].map(v => v + ' <pais>')
handler.tags = ['info']
handler.limit = true
handler.command = /^(corona|covid|covid19)$/i
export default handler
