import Booru from 'booru'
import fetch from 'node-fetch'
let sites = ['sb', 'kn', 'kc']

var shadow = async (m, { conn, usedPrefix, command }) => {
	let res = await Booru.search(sites.getRandom(), ['loli'], { random: true })
	let url = res[0].fileUrl
let caption = `${wm3}`
    conn.sendFile(m.chat, await shortUrl(url), "loli", caption, m);
}
shadow.help = ['loli']
shadow.tags = ['random']
shadow.command = /^(loli)$/i

export default shadow

async function shortUrl(url) {
	return await (await fetch(`https://tinyurl.com/api-create.php?url=${url}`)).text()
}