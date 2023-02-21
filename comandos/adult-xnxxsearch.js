import fetch from 'node-fetch'
let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) throw `uhm.. mau cari apa?\n\nContoh: ${usedPrefix + command} bokep🐒`
	let user = global.db.data.users[m.sender]
	if (user.age < 18) throw 'umur kamu belum cukup dek!\nawas jangan nonton beginian ya dek, nanti aku bilangin ke ibu kamu loh ><';
	try {
		let res = await fetch(`https://malesin.xyz/xnxxsearch?q=${text}`)
		let rest = await res.json()
		let cap = `Hasil Pencarian Dari ${text}\n`
	for (let v of rest.result) {
	 cap += `• *Title :* ${v.title}
• *Info :* ${v.info}
• *Link :* ${v.link}
`
cap +=  '\n' + '••••••••••••••••••••••••' + '\n'
    }
  m.reply(cap)
	} catch (e) {
		console.error(e);
		throw e;
	}
}
handler.help = ["xnxxsearch"].map(v => v + ' <query>')
handler.tags = ["downloader", "premium"]
handler.command = /^xnxxsearch|xnxxs$/i

handler.register = true
handler.premium = true

export default handler
