import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, args, command, text }) => {
if (!text) throw `Linknya Mana?\nExample: *.twitterdl https://www.xnxx.com/video-141ewlbb/free_use_anytime_sex_big_ass_latina_milf_step_mom_after_deal_with_step_son*`
m.reply(wait)
  let res = await fetch(`https://api.xyroinee.xyz/api/downloader/pornhub?url=${text}&apikey=uwgflzFEh6`)
  let json = await res.json()
  conn.sendMessage(m.chat, { video: { url: json.data.files.low }, caption: `Title: ${json.data.title}\nDuration: ${json.data.duration}\nInfo: ${json.data.info}` }, { quoted: m })
  }
handler.help = ['porndl']
handler.tags = ['downloader']
handler.command = /^porndl$/i
handler.premium = true

export default handler
