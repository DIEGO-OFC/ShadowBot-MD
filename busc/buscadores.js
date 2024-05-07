require('../main.js') 
const fs = require("fs")
const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom } = require('../libs/fuctions.js'); 
const path = require("path")
const chalk = require("chalk");
const moment = require('moment-timezone') 
const gradient = require('gradient-string') 
const fetch = require('node-fetch') 
const axios = require('axios')
const cheerio = require('cheerio')
const Jimp = require('jimp')
const os = require('os')

async function yt(conn, m, text, from, command, fkontak, prefix) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (!text) return m.reply(`*Ejemplo:*\n${prefix + command} anime`)
const yts = require("youtube-yts");
const search = await yts(text);
const {key} = await conn.sendMessage(from, {text: info.wait}, { quoted: fkontak })
await conn.sendMessage(from, {text: info.waitt, edit: key}, { quoted: fkontak })
await conn.sendMessage(from, {text: info.waittt, edit: key}, { quoted: fkontak })
await conn.sendMessage(from, {text: info.waitttt, edit: key}, { quoted: fkontak })	
let teks = '💫 Resultados de ' + text + '\n\n';
let no = 1;
let themeemoji = "∆"
for (let i of search.all) {
  teks += `${themeemoji} OPCIÓN : ${no++}\n${themeemoji} TIPO: ${i.type}\n${themeemoji} ID DEL VIDEO : ${i.videoId}\n${themeemoji} TITULO: ${i.title}\n${themeemoji} VISTAS : ${i.views}\n${themeemoji} DURACIÓN : ${i.timestamp}\n${themeemoji} SUBIDOS: ${i.ago}\n${themeemoji} URL: ${i.url}\n\n✧⋄⋆⋅⋆⋄✧⋄⋆⋅⋆⋄✧⋄⋆⋅⋆⋄✧⋄⋆⋅⋆⋄✧\n\n`;
}
await conn.sendMessage(from, { image: { url: search.all[0].thumbnail }, caption: teks }, { quoted: fkontak });
await conn.sendMessage(from, {text: info.result, edit: key}, { quoted: fkontak })
}
async function pinteresdw(conn, m, text, args, commands) {
const pim = `https://xanax-apis.online/api/pinterest?text=${text}&apitoken=xanax-apis`
m.reply('cargando, por favor espera')
conn.sendMessage(m.chat, {image: {url: pim}}, {quoted: m})}
async function aptoide(conn, m, text, args, command) {
let { search, download } = require('aptoide-scraper') 
     if (!text) throw '*❗Que vas a buscar*' 
       try {      
      let searchA = await search(text);  
      let data5 = await download(searchA[0].id);  
      let response = `📲 *Descargador de Aptoide* 📲\n\n📌 *Nombre:* ${data5.name}\n📦 *Package:* ${data5.package}\n🕒 *Última actualización:* ${data5.lastup}\n📥 *Tamaño:* ${data5.size}`  
      await conn.sendMessage(m.chat, {image: {url: data5.icon}, caption: response}, {quoted: m});  
      if (data5.size.includes('GB') || data5.size.replace(' MB', '') > 999) {  
      return await conn.sendMessage(m.chat, {text: '*[ ⛔ ] El archivo es demasiado pesado por lo que no se enviará.*'}, {quoted: m});  
      }  
      await conn.sendMessage(m.chat, {document: {url: data5.dllink}, mimetype: 'application/vnd.android.package-archive', fileName: data5.name + '.apk', caption: null}, {quoted: m});  
      } catch {  
      throw `*[❗] Error, no se encontrarón resultados para su búsqueda.*`;  
      }}     
  
  async function planetnime(conn, m, text, args, command) {
const translate = require('@vitalets/google-translate-api');
  if (!args[0]) return m.reply(`*[❗] INGRESE EL NAME DEL ANIME QUE DESEA BUSCAR*`);
  try {

    const xn = await fetch(`https://xanax-apis.online/api/animes?q=${text}&apitoken=${xanax}`)
    const gPlay = await xn.json();

    if (gPlay.error) {
      throw new Error(gPlay.error);
    }

    let caption = `*⊜ RESULTADOS🔎*\n`;
    for (let x of gPlay.resultado) {
      caption += `🔍 titulo: 
${x.titulo}

⛓️ Link: ${x.link}  
🖼️ Imagen: ${x.image}
  `;
    }
    conn.sendMessage(m.chat, {text: caption}, {quoted: m});
  } catch (error) {
    await m.reply('*[❗𝐈𝐍𝐅𝐎❗] ERROR, POR FAVOR VUELVE A INTENTARLO*');
  }
}
async function acortar(conn, m, text, command) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
 if (!text) return m.reply(`*Ingresa un link para acortar!*`)
let shortUrl1 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text()  
if (!shortUrl1) return m.reply(`*⚠️ ERROR*`)
let done = `*❇️ LINK ACORTADO*\n\n*➵ link: ${text}*\n➵ *Link Acortado: ${shortUrl1}*`
m.reply(done)
}
async function kataAnime(conn, m, text, command) {
 const translate = require('@vitalets/google-translate-api');  
if (!text) return m.reply(`*Ingresa un texto!*`)
 m.reply('Enviando tu manga') 
 let res = await fetch('https://api.jikan.moe/v4/manga?q=' + text) 
 if (!res.ok) throw 'xd' 
 let json = await res.json() 
 let { chapters, url, type, score, scored, scored_by, rank, popularity, members, background, status, volumes, synopsis, favorites } = json.data[0] 
 let judul = json.data[0].titles.map(jud => `${jud.title} [${jud.type}]`).join('\n'); 
 let xnuvers007 = json.data[0].authors.map(Xnuvers007 => `${Xnuvers007.name} (${Xnuvers007.url})`).join('\n'); 
 let genrenya = json.data[0].genres.map(xnvrs007 => `${xnvrs007.name}`).join('\n'); 
    let bake2 = await translate(`${background}`, {to: "es", autoCorrect: true});
 let bake3 = await translate(`${synopsis}`, {to: "es", autoCorrect: true});
 let animeingfo = `📚 Titulo: ${judul} 
 📑 Capitulo: ${chapters} 
 ✉️ Transmisi: ${type} 
 🗂 Status: ${status} 
 😎 Genre: ${genrenya} 
 🗃 Volumes: ${volumes} 
 🌟 Favorite: ${favorites} 
 🧮 Puntaje: ${score} 
 🧮 Anotado: ${scored} 
 🧮 Anotado por: ${scored_by} 
 🌟 Estrella: ${rank} 
 🤩 Popularidad: ${popularity} 
 👥 Miembros: ${members} 
 ⛓️ Url: ${url} 
 👨‍🔬 Author: ${xnuvers007} 
 📝 Fondo: ${bake2.text} 
 💬 Sinopsis: ${bake3.text} 
 ` 
 m.reply(animeingfo)
 }
 
async function google(conn, m, text, command) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (!text) return m.reply(`*Ejemplo:*\n${prefix + command} gatito`)
let google = require('google-it')
google({'query': text}).then(res => {
let teks = `💫 𝘙𝘌𝘚𝘜𝘓𝘛𝘈𝘋𝘖𝘚 𝘋𝘌 : ${text}\n\n`
for (let g of res) {
teks += `🔶 *Titulo* : ${g.title}\n`
teks += `🔶 *Descripcion* : ${g.snippet}\n`
teks += `🔶 *Link* : ${g.link}\n\n✧⋄⋆⋅⋆⋄✧⋄⋆⋅⋆⋄✧⋄⋆⋅⋆⋄✧⋄⋆⋅⋆⋄✧\n\n`
} 
m.reply(teks)})
}

async function imagen(conn, m, text, command) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (!text) return m.reply(`*Que esta buscando?*\n*Ejemplo:*\n${prefix + command} gatito`)
m.reply('cargando, por favor espera')
image = await fetchJson(`https://api.akuari.my.id/search/googleimage?query=${text}`)
n = image.result
images = n[Math.floor(Math.random() * n.length)]
conn.sendMessage(m.chat, { image: { url: images}, caption: `*💫 𝘙𝘌𝘚𝘜𝘓𝘛𝘈𝘋𝘖𝘚 𝘋𝘌 :* ${text}`}, { quoted: m })
}

async function tran(conn, m, args, quoted, prefix, command) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (!args || !args[0]) return m.reply(`*Ejemplo:*\n${prefix + command} es hello`)
let lang = args[0];
let text = args.slice(1).join(' ');
const defaultLang = 'es';
if ((args[0] || '').length !== 2) {
lang = defaultLang;
text = args.join(' ')}
if (!text && m.quoted && m.quoted.text) text = m.quoted.text;
const lol = await fetch(`https://api.lolhuman.xyz/api/translate/auto/${lang}?apikey=${lolkeysapi}&text=${text}`);
const loll = await lol.json();
const result2 = loll.result.translated;
await m.reply('*> Traducción:* ' + result2)}

async function tts(conn, m, q, text, quoted) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (!q) return m.reply("*Y EL TEXTO?*")
await conn.sendPresenceUpdate('recording', m.chat)
let texttosay = text
? text
: m.quoted && m.quoted.text
? m.quoted.text
: m.text;
const SpeakEngine = require("google-tts-api"); 
const texttospeechurl = SpeakEngine.getAudioUrl(texttosay, {lang: "es", slow: false, host: "https://translate.google.com",});
conn.sendMessage(m.chat, { audio: { url: texttospeechurl }, contextInfo: { "externalAdReply": { "title": botname, "body": ``, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": md, "showAdAttribution": true}}, seconds: '4556', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })}

async function ia(conn, m, text, quoted) {
           if (!text) return m.reply(`*ingresa un texto para hablar con chatgpt*`) 
           try {      
          let tioress = await fetch(`https://api.lolhuman.xyz/api/openai-turbo?apikey=${lolkeysapi}&text=${text}`)  
          let hasill = await tioress.json()  
          m.reply(`${hasill.result}`.trim())     
          } catch {
          try {
          let mygpt = await fetch(`https://vihangayt.me/tools/chatgpt4?q=${text}`) 
          let _result = await mygpt.json() 
          m.reply(`${_result.data}`)
          } catch {
          try {
 let mygpt2 = await fetch(`https://vihangayt.me/tools/chatgpt?q=${text}`) 

let _result2 = await mygpt2.json()
m.reply(`${_result2.data}`)  
 } catch {
let mygpt8 = await fetch(`https://xanax-apis.online/ias/bard?q=${text}&apitoken=${xanax}`) 

let _result5 = await mygpt8.json()

m.reply(`${_result5.resultado}`)       
         } }}

db.data.users[m.sender].limit -= 1
}

async function ssw(conn, m, q, prefix, command, quoted, scp1) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (!q) return m.reply(`*Ejemplo:* ${prefix+command} link`)
conn.fakeReply(m.chat, `⏳ *Aguarde un momento....*`, '0@s.whatsapp.net', 'No haga spam')
let krt = await scp1.ssweb(q)
conn.sendMessage(m.chat, {image:krt.result, caption: info.result}, {quoted:m})}

module.exports = {yt, acortar, google, imagen, tran, tts, ia, ssw, kataAnime, planetnime, aptoide, pinteresdw}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
