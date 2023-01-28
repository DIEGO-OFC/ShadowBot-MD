//Creado por https://github.com/DIEGO-OFC/DORRAT-BOT-MD

import fetch from 'node-fetch'
let handler = async (m, {text, usedPrefix, command, conn}) => {
try {
if (!text) throw `*[❕] Ingrese el nombre de una película*\n\n*❍ EJEMPLO: ${usedPrefix + command} Batman*`
let a = await fetch(`https://www.omdbapi.com/?t=${text}&apikey=caba8d6f`)
let x = await a.json()
let caption = `*⎔┉━「 ${command} 」━┉⎔*\n
*TITULO: ${x.Title || ''}*
*AÑO: ${x.Year || ''}*
*Duración: ${x.Runtime || ''}*
*Género: ${x.Genre || ''}*
*Actores: ${x.Actors || ''}*`
m.reply(caption) 
} catch {
await conn.reply(m.chat, '*⚠️ Ocurrio un error, inténtelo de nuevo*', m)}

handler.command = /^(película|pelicula|peli)$/i

export default handler
