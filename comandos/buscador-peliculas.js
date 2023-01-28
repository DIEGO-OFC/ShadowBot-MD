//Creado por https://github.com/DIEGO-OFC/DORRAT-BOT-MD

import fetch from 'node-fetch'
let handler = async (m, {text, usedPrefix, command, conn}) => {
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
if (!text) throw `*[❕] Ingrese el nombre de una película*\n\n*❍ EJEMPLO: ${usedPrefix + command} Batman*`
let a = await fetch(`https://www.omdbapi.com/?t=${text}&apikey=caba8d6f`)
let x = await a.json()
let caption = `*⎔┉━「 ${command} 」━┉⎔*\n
🔍 *TITULO: ${x.Title || ''}*
🗒️ *AÑO: ${x.Year || ''}*
⏱️ *Duración: ${x.Runtime || ''}*
📗 *Género: ${x.Genre || ''}*
👥 *Actores: ${x.Actors || ''}*

❕ Pedido por ${taguser}`
conn.fakeReply(m.chat, caption, '0@s.whatsapp.net', '*🔥 THE DORRAT - BOT 🔥*', 'status@broadcast')

}
handler.command = /^(película|pelicula|peli)$/i

export default handler
