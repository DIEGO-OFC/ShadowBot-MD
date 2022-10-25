import MessageType from '@adiwajshing/baileys'
import fetch from 'node-fetch'
import fs from 'fs'
let handler = async (m, { conn, text, usedPrefix, command }) => {
try {
if (!text) throw `⚠️ 𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙀𝙇 𝙉𝙊𝙈𝘽𝙍𝙀 𝘿𝙀 𝙐𝙉 𝙍𝙀𝙋𝙊𝙎𝙄𝙏𝙊𝙍𝙄𝙊 𝘿𝙀 𝙂𝙄𝙏𝙃𝙐𝘽\n\n📌 Ejemplo: ${usedPrefix + command} DORRAT-BOT-MD`
let res = await fetch(global.API('https://api.github.com', '/search/repositories', { q: text }))
let json = await res.json()
if (res.status !== 200) throw json
let str = json.items.map((repo, index) => {
return `
▢ 📦 Resultado: ${1 + index}
▢ 📎 Link: ${repo.html_url}
▢ 🍁 Creador: ${repo.owner.login}
▢ 🔍 Nombre: ${repo.name}
▢ 📅 Creado: ${formatDate(repo.created_at)}
▢ ⏱️ Actualizado: ${formatDate(repo.updated_at)}
▢ 👀 Visitas: ${repo.watchers}
▢ ⚜️ Bifurcado: ${repo.forks}
▢ ⭐ Estrellas: ${repo.stargazers_count}
▢ 🎭 Issues: ${repo.open_issues}
▢ 📓 Descripción: ${repo.description ? `${repo.description}` : 'Sin Descripción'}
▢ 🥃 Clone: ${repo.clone_url}
`.trim()}).join('\n\n─────────────────\n\n')
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]
let buttonMessage= {
'document': { url: `https://github.com/DIEGO-OFC/DORRAT-BOT-MD` },
'mimetype': `application/${document}`,
'fileName': `𝐷𝑂𝑅𝑅𝐴𝑇-𝐵𝑂𝑇-𝑀𝐷`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'https://github.com/DIEGO-OFC/DORRAT-BOT-MD',
'mediaType': 2,
'previewType': 'pdf',
'title': `• Resultados Encontrados🔎`,
'body': global.author,
'thumbnail': await (await fetch(json.items[0].owner.avatar_url)).buffer(),
'sourceUrl': 'https//wa.me/593959425714'}},
'caption': str,
'footer': `• 𝚂𝙸 𝙳𝙴𝚂𝙴𝙰 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰𝚁 𝚄𝙽\n*𝚁𝙴𝙿𝙾𝚂𝙸𝚃𝙾𝚁𝙸𝙾 𝙳𝙴 𝙶𝙸𝚃𝙷𝚄𝙱*\n*𝙴𝚂𝙲𝚁𝙸𝙱𝙰 ${usedPrefix}gitclone <LINK>*`,
'buttons':[
{buttonId: `${usedPrefix}menu`, buttonText: {displayText: 'Menú 🤖'}, type: 1}, 
{buttonId: `${usedPrefix}infobot`, buttonText: {displayText: 'Info 📦'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
} catch {
    m.reply('⚠️ *_𝙍𝙀𝙎𝙐𝙇𝙏𝘼𝘿𝙊𝙎 𝙉𝙊 𝙀𝙉𝘾𝙊𝙉𝙏𝙍𝘼𝘿𝙊𝙎_*')
  }
}
handler.help = ['githubsearch'].map(v => v + '')
handler.tags = ['search']

handler.command = /^(githubsearch)$/i
handler.register = true

export default handler 

function formatDate(n, locale = 'es') {
    let d = new Date(n)
    return d.toLocaleDateString(locale, {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }
