
import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command, text }) => {
if (!text) throw `*[❕] INGRESA UNA CANCION PARA ENVIAR LA LISTA, EJEMPLO*:\n*■ ${usedPrefix + command} phonk*`
try {
const { video } = await youtubeSearch(text)
const listSections = []
let teks = [...video ].map(v => {
switch (v.type) {
case 'video': {
listSections.push([`${v.title}`, [
['Video 🎦', `${usedPrefix}ytmp4 ${v.url}`, `descargar: ${v.title} (${v.url})`],
['Videodoc 🎦', `${usedPrefix}ytmp4doc ${v.url}`, `descargar: ${v.title} (${v.url})`],    
['Audio 🎵', `${usedPrefix}ytmp3 ${v.url}`, `descargar: ${v.title} (${v.url})`],
['Audiodoc 🎵', `${usedPrefix}ytmp3doc ${v.url}`, `descargar: ${v.title} (${v.url})`]
]])
}}}).filter(v => v).join('\n\n========================\n\n')
conn.sendList(m.chat, ' *『 LISTA YOUTUBE  』*', `*📍 Musica relacionada con: ${args.join(" ")}*`, '*📗 Elije una opción y presiona enviar*', '[🔍 𝐑𝐄𝐒𝐔𝐋𝐓𝐀𝐃𝐎𝐒 🔍]', listSections, m)
} catch {
await m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚁𝚁𝙾𝚁, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚅𝚄𝙴𝙻𝚅𝙰 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁𝙻𝙾 𝙲𝙾𝙽 𝙾𝚃𝚁𝙾 𝙽𝙾𝙼𝙱𝚁𝙴 𝙳𝙴 𝚄𝙽𝙰 𝙲𝙰𝙽𝙲𝙸𝙾𝙽*')
}}
handler.dorracoins = 5
handler.command = /^playlist|playlist2$/i
export default handler
