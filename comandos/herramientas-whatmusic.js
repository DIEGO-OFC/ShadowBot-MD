import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import FormData from 'form-data'

let handler = async (m) => {
	let q = m.quoted ? m.quoted : m
	let mime = q.mediaType || ''
	if (/image|video|audio|sticker|document/.test(mime)) {
		let media = await q.download(true)
		let data = await uploadFile(media)
		let res = await fetch(`https://api.audd.io/?url=${data.url}&return=apple_music&api_token=945881d8079d620d74e93a218c42f8c6`)
  let json = await res.json()
  let x = json.result
 return m.reply(`*RESULTADOS* :\n
🔍 *TÍTULO ${x.title}*
📍 *ARTISTA : ${x.artist}*
⬇️ *Label* : ${x.label}*
📂 *Album* : ${x.album}*
📅 *FECHA* : ${x.release_date}*
📎 *Link* : ${x.song_link}*`)
	} else throw 'No media found'
}
handler.help = ['whatmusic']
handler.tags = ['tools']

handler.command = /^(whatmusic)$/i

export default handler

async function uploadFile(path) {
	let form = new FormData()
	form.append('file', fs.createReadStream(path))
	let res = await (await fetch('https://api.anonfiles.com/upload', {
		method: 'post',
		headers: {
			...form.getHeaders()
		},
		body: form
	})).json()
	await fs.promises.unlink(path)
	if (!res.status) throw res.error.message
	let data = await fetch(res.data.file.url.full)
	let $ = cheerio.load(await data.text())
	return {
		url: res.data.file.url.full
		url2: res.data.file.url.short
	}
}
