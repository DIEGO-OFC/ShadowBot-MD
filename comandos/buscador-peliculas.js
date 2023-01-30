//Creado por https://github.com/DIEGO-OFC/DORRAT-BOT-MD

import fetch from 'node-fetch'
let handler = async (m, {text, usedPrefix, command, conn}) => {
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
if (!text) throw `*[❕] Ingrese el nombre de una película*\n\n*❍ EJEMPLO: ${usedPrefix + command} Batman*`
let a = await fetch(`https://www.omdbapi.com/?t=${text}&apikey=caba8d6f`)
let x = await a.json()
let mov_txt =  `*${comienzo}「 PELÍCULAS 」${fin}*\n
*Titulo ∙* ${x.Title || '-'}
*Publicado ∙* ${x.Year || '-'}
*Duracion ∙* ${x.Runtime || '-'}
*Genero ∙* ${x.Genre || '-'}
*Director ∙* ${x.Director || '-'}
*Actores ∙* ${x.Actors || '-'}
*Lenguajes ∙* ${x.Language || '-'}
*Awards ∙* ${x.Awards || '-'}
*Votos ∙* ${x.imdbVotes || '-'}
*Score ∙* ${x.Metascore || '-'}
*Tipo ∙* ${x.Type || '-'}
*Recaudado ∙* ${x.BoxOffice || '-'}
*Grabacion ∙* ${x.Country || '-'}

   ❕Pedido por @${m.sender.split("@")[0]}
*🔥 THE DORRAT - BOT 🔥*`

conn.sendMessage(m.chat, {image: {url: x.Poster}, caption: mov_txt, mentions: [m.sender]}, {quoted: m})
  
/*let caption = `*${comienzo}「 PELÍCULAS 」${fin}*\n
🔍 *Titulo: ${x.Title || ''}*
🗒️ *Año: ${x.Year || ''}*
⏱️ *Duración: ${x.Runtime || ''}*
📗 *Género: ${x.Genre || ''}*
👥 *Actores: ${x.Actors || ''}*

❕ Pedido por ${taguser}`
conn.fakeReply(m.chat, caption, '0@s.whatsapp.net', '*🔥 THE DORRAT - BOT 🔥*', 'status@broadcast')*/

}
handler.command = /^(película|pelicula|peli)$/i
handler.limit = true 
export default handler
