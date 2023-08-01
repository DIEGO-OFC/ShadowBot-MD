// ADAPTADO POR @gata_dios

import fetch from 'node-fetch'
import translate from '@vitalets/google-translate-api'

let handler = async (m, { conn, text }) => {
if (!text) throw `*Falta texto*`
let res = await fetch(`https://api.xyroinee.xyz/api/search/wattpad?q=${text}&lc=es&apikey=uwgflzFEh6`)
let anu = await res.json()
let translatedResults = await Promise.all(anu.data.map(async (v) => {
let titulo = await translate(v.title, { to: 'es', autoCorrect: true })
let descs = await translate(v.desc, { to: 'es', autoCorrect: true })
return `*Título:* ${titulo.text}\n*Leídos:* ${v.reads}\n*Votos:* ${v.vote}\n*Capítulos:* ${v.chapter}\n*Enlace:* ${v.link}\n*Descripción:* ${descs.text}`
}))
let resultText = translatedResults.join('\n\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n\n')
await m.reply(resultText)   
}
handler.command = /^(wattpad)$/i

export default handler
