import Booru from 'booru'
import fetch from 'node-fetch'
let sites = ['sb', 'kn', 'kc']

var PTM = async (m, { conn, usedPrefix, command }) => {
	let res = await Booru.search(sites.getRandom(), ['loli'], { random: true })
	let url = res[0].fileUrl
let caption = `${wm3}`
    conn.sendFile(m.chat, await shortUrl(url), "loli", caption, m);
}
PTM.help = ['loli']
PTM.tags = ['random']
PTM.command = /^(loli)$/i

export default PTM

async function shortUrl(url) {
	return await (await fetch(`https://tinyurl.com/api-create.php?url=${url}`)).text()
}