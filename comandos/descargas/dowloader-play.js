import fetch from 'node-fetch';
import yts from 'yt-search';
import ytdl from 'ytdl-core';
import axios from 'axios';
import {youtubedl, youtubedlv2} from '@bochilteam/scraper';
const handler = async (m, {conn, command, args, text, usedPrefix}) => {
if (!text) throw `*[❕𝐈𝐍𝐅𝐎❕] NOMBRE DE LA CANCION FALTANTE, POR FAVOR INGRESE EL COMANDO MAS EL NOMBRE/TITULO DE UNA CANCIÓN*\n\n*➢ EJEMPLO:*\n*${usedPrefix + command} Phonk*` 
 try {
const yt_play = await search(args.join(' '))
const texto1 = `*╔═══════❰  *🔰*  ❱══════⬣*
║ *TITULO*:
║ ${yt_play[0].title} 
║ *PUBLICADO*:
║ ${yt_play[0].ago} 
║ *DURACION*:
║ ${secondString(yt_play[0].duration.seconds)} 
║ *VISTAS*: 
║ ${MilesNumber(yt_play[0].views)}
║ *AUTOR*:
║ ${yt_play[0].author.name} 
║ *CANAL*: 
║ ${yt_play[0].author.url} 
║ *ID*:
║ ${yt_play[0].videoId} 
║ *Tipo:* 
║ ${yt_play[0].type} 
║ *Link:* ${yt_play[0].url}\n
║ *_ENVIANDO ${additionalText}, PORFAVOR ESPERE.*
*╚═══════❰ *${vs}* ❱══════`.trim()

await conn.sendButton(m.chat, wm, texto1, yt_play[0].thumbnail, [['Audio', `yta ${yt_play[0].url}`], ['video', `ytv ${yt_play[0].url}`]], m)
} catch (e) {
await m.reply(`Error`) 
//console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)
handler.dolares = 0
}}
handler.help = ["musica", "play2"].map((v) => v + " < busqueda >")
handler.tags = ["downloader"]
handler.dolares = 4
handler.command = ["musica", "música", "play2"]

async function search(query, options = {}) {
const search = await yts.search({query, hl: 'es', gl: 'ES', ...options});
return search.videos;
}

function MilesNumber(number) {
const exp = /(\d)(?=(\d{3})+(?!\d))/g;
const rep = '$1.';
const arr = number.toString().split('.');
arr[0] = arr[0].replace(exp, rep);
return arr[1] ? arr.join('.') : arr[0];
}

function secondString(seconds) {
seconds = Number(seconds);
const d = Math.floor(seconds / (3600 * 24));
const h = Math.floor((seconds % (3600 * 24)) / 3600);
const m = Math.floor((seconds % 3600) / 60);
const s = Math.floor(seconds % 60);
const dDisplay = d > 0 ? d + (d == 1 ? ' día, ' : ' días, ') : '';
const hDisplay = h > 0 ? h + (h == 1 ? ' hora, ' : ' horas, ') : '';
const mDisplay = m > 0 ? m + (m == 1 ? ' minuto, ' : ' minutos, ') : '';
const sDisplay = s > 0 ? s + (s == 1 ? ' segundo' : ' segundos') : '';
return dDisplay + hDisplay + mDisplay + sDisplay;
}
