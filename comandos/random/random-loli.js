import Booru from 'booru'
import fetch from 'node-fetch'
let sites = ['sb', 'kn', 'kc']

let handler = async (m, { conn, usedPrefix, command }) => {
	let res = await Booru.search(sites.getRandom(), ['loli'], { random: true })
	let url = res[0].fileUrl
let caption = `${wm3}`
    conn.sendFile(m.chat, await shortUrl(url), "loli", caption, m);
}
handler.help = ['loli']
handler.tags = ['random']
handler.command = /^(fotololi)$/i

export default handler

async function shortUrl(url) {
	return await (await fetch(`https://tinyurl.com/api-create.php?url=${url}`)).text()
}