import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) throw `*Usage : ${usedPrefix + command} url*\n\nExample: ${usedPrefix + command} https://open.spotify.com/track/0ZEYRVISCaqz5yamWZWzaA\n\n*Tips :* Untuk mencari link spotify, bisa juga dengan command *${usedPrefix}spotsearch*`
    if (!(text.includes('http://') || text.includes('https://'))) throw `url invalid, please input a valid url. Try with add http:// or https://`
	let res = await fetch(`https://api.lolhuman.xyz/api/spotify?apikey=${global.APIs}&url=${text}`)
    if (!res.ok) throw `Invalid Spotify url / terjadi kesalahan.`
    let json = await res.json()
    if (json.status != '200') throw `Terjadi kesalahan, coba lagi nanti.`
	let get_result = json.result
	let ini_txt = `Found : ${text}\n\n`
	ini_txt += `Title : *${get_result.title}*\n`
	ini_txt += `Artists : ${get_result.artists}\n`
	ini_txt += `Duration : ${get_result.duration}\n`
	ini_txt += `Popularity : ${get_result.popularity}\n`
	ini_txt += `${get_result.preview_url ? `Preview : ${get_result.preview_url}\n` : ''}`
	await conn.sendFile(m.chat, get_result.thumbnail, 'spot.jpg', ini_txt, m)
	await conn.sendMessage(m.chat, {document: { url: get_result.link }, mimetype: 'audio/mpeg', fileName: `${get_result.artists} - ${get_result.title}.mp3`}, { quoted : m })
}

handler.menudownload = ['spotify <url>']
handler.tagsdownload = ['search']
handler.command = /^spotify$/i

handler.premium = true
handler.limit = true

export default handler





/*import fetch from 'node-fetch'
let handler = async(m, { conn, text }) => {
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙴𝙻 𝙽𝙾𝙼𝙱𝚁𝙴 𝙳𝙴 𝙰𝙻𝙶𝚄𝙽𝙰 𝙲𝙰𝙽𝙲𝙸𝙾𝙽 𝙰 𝙱𝚄𝚂𝙲𝙰𝚁*`
try {
let res = await fetch(`https://api.lolhuman.xyz/api/spotifysearch?apikey=${lolkeysapi}&query=${text}`)
let json = await res.json()
let { link } = json.result[0]
let res2 = await fetch(`https://api.lolhuman.xyz/api/spotify?apikey=${lolkeysapi}&url=${link}`)
let json2 = await res2.json()
let { thumbnail, title, artists, preview_url } = json2.result
let spotifyi = `❒═════❬ 𝐒𝐏𝐎𝐓𝐈𝐅𝐘 ❭═════╾❒\n┬\n├‣✨ *𝚃𝙸𝚃𝚄𝙻𝙾:* ${title}\n┴\n┬\n├‣🗣️ *𝙰𝚁𝚃𝙸𝚂𝚃𝙰:* ${artists}\n┴\n┬\n├‣🌐 *𝚄𝚁𝙻*: ${link}\n┴\n┬\n├‣💚 *𝚄𝚁𝙻 𝙳𝙴 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰:* ${preview_url}\n┴`
conn.sendFile(m.chat, thumbnail, 'error.jpg', spotifyi, m)
await conn.sendFile(m.chat, preview_url, 'error.mp3', null, m, false, { mimetype: 'audio/mp4' }) 
} catch (e) {
throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚁𝚁𝙾𝚁, 𝙽𝙾 𝚂𝙴 𝙻𝙾𝙶𝚁𝙾 𝙱𝚄𝚂𝙲𝙰𝚁 𝙻𝙰 𝙲𝙰𝙽𝙲𝙸𝙾𝙽 𝙾 𝙻𝙰 𝙿𝙰𝙶𝙸𝙽𝙰 𝙳𝙴 𝙰𝚈𝚄𝙳𝙰 𝙿𝙰𝚁𝙰 𝙱𝚄𝚂𝙲𝙰𝚁 𝙻𝙰 𝙲𝙰𝙽𝙲𝙸𝙾𝙽 𝙴𝚂𝚃𝙰 𝙲𝙰𝙸𝙳𝙰, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚅𝚄𝙴𝙻𝚅𝙰 𝙰 𝙸𝙽𝚃𝙴𝚁𝙽𝚃𝙰𝚁𝙻𝙾 𝙼𝙰𝚂 𝚃𝙰𝚁𝙳𝙴*'
}}
handler.command = /^(spotify|music)$/i
export default handler*/
