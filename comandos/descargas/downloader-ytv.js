import { youtubedl, youtubedlv2 } from '@bochilteam/scraper'
import fetch from 'node-fetch'
import yts from 'yt-search'
import ytdl from 'ytdl-core'
import axios from 'axios'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw '*[❗] Uso incorrecto del comando, ingrese un enlace / link de YouTube.*';
let youtubeLink = '';
if (args[0].includes('you')) {
youtubeLink = args[0]; 
} else {
const index = parseInt(args[0]) - 1;
if (index >= 0) {
if (Array.isArray(global.videoList) && global.videoList.length > 0) {
const matchingItem = global.videoList.find(item => item.from === m.sender);
if (matchingItem) {
if (index < matchingItem.urls.length) {
youtubeLink = matchingItem.urls[index];
} else {
throw `*[❗] No se encontro un enlace para ese numero, por favor ingrese un numero entre el 1 y el ${matchingItem.urls.length}*`;
}} else {
throw `*[❗] Para poder hacer uso del comando de esta forma (${usedPrefix + command} <numero>), por favor realiza la busqueda de videos con el comando ${usedPrefix}playlist <texto>*`; 
}} else {
throw `*[❗] Para poder hacer uso del comando de esta forma (${usedPrefix + command} <numero>), por favor realiza la busqueda de videos con el comando ${usedPrefix}playlist <texto>*`; 
}}}  
   let info = `*_⏰ Enviando video... ⏰_*\n\n*🔄 Sɪ Sᴜ ᴠɪᴅᴇᴏ ɴᴏ ᴇs ᴇɴᴠɪᴀᴅᴏ, ᴘʀᴜᴇʙᴇ ᴄᴏɴ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ #playdoc ᴏ #play.2 ᴏ #ytmp4doc ◉*`;
   const { key } = await conn.sendMessage(m.chat, {image: fs.readFileSync("./galeria/Shadow.jpg"), caption: info}, {quoted: m});
try {
let qu = args[1] || '360'
let q = qu + 'p'
let v = youtubeLink
const yt = await youtubedl(v).catch(async _ => await youtubedlv2(v))
const dl_url = await yt.video[q].download()
const ttl = await yt.title
const size = await yt.video[q].fileSizeH
await await conn.sendMessage(m.chat, { video: { url: dl_url }, fileName: `${ttl}.mp4`, mimetype: 'video/mp4', caption: `╭━❰  ${wm}  ❱━⬣\n┃ 💜 ${mid.smsYT1}\n┃ ${ttl}\n╰━━━━━❰ *𓃠 ${vs}* ❱━━━━⬣}`, thumbnail: await fetch(yt.thumbnail) }, { quoted: m })
await conn.sendMessage(m.chat, {text: `*[ ✔ ] Video descargado exitosamente.*`, edit: key}, {quoted: m}); 
} catch (E1) {
//console.log('Error 1 ' + E1)  
try {  
let mediaa = await ytMp4(youtubeLink)
await conn.sendMessage(m.chat, { video: { url: mediaa.result }, fileName: `error.mp4`, caption: ``, thumbnail: mediaa.thumb, mimetype: 'video/mp4' }, { quoted: m })     
await conn.sendMessage(m.chat, {text: `*[ ✔ ] Video descargado exitosamente.*`, edit: key}, {quoted: m}); 
} catch (E2) {  
//console.log('Error 2 ' + E2)   
try {
let lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${lolkeysapi}&url=${youtubeLink}`)    
let lolh = await lolhuman.json()
let n = lolh.result.title || 'error'
let n2 = lolh.result.link
let n3 = lolh.result.size
let n4 = lolh.result.thumbnail
await conn.sendMessage(m.chat, { video: { url: n2 }, fileName: `${n}.mp4`, mimetype: 'video/mp4', caption: `*▢ Titulo:* ${n}\n*▢ Peso Del Video:* ${n3} MB`, thumbnail: await fetch(n4) }, { quoted: m })
await conn.sendMessage(m.chat, {text: `*[ ✔ ] Video descargado exitosamente.*`, edit: key}, {quoted: m}); 
} catch (E3) {
//console.log('Error 3 ' + E3)   
await conn.reply(m.chat, '*[❗] Error, no fue posible descargar el video.*', m); 
       } 
}}}
handler.command = /^videomp4?$/i
export default handler

function bytesToSize(bytes) {
return new Promise((resolve, reject) => {
const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
if (bytes === 0) return 'n/a';
const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
if (i === 0) resolve(`${bytes} ${sizes[i]}`);
resolve(`${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`)})};

async function ytMp3(url) {
return new Promise((resolve, reject) => {
ytdl.getInfo(url).then(async(getUrl) => {
let result = [];
for(let i = 0; i < getUrl.formats.length; i++) {
let item = getUrl.formats[i];
if (item.mimeType == 'audio/webm; codecs=\"opus\"') {
let { contentLength } = item;
let bytes = await bytesToSize(contentLength);
result[i] = { audio: item.url, size: bytes }}};
let resultFix = result.filter(x => x.audio != undefined && x.size != undefined) 
let tiny = await axios.get(`https://tinyurl.com/api-create.php?url=${resultFix[0].audio}`);
let tinyUrl = tiny.data;
let title = getUrl.videoDetails.title;
let thumb = getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url;
resolve({ title, result: tinyUrl, result2: resultFix, thumb })}).catch(reject)})}

async function ytMp4(url) {
return new Promise(async(resolve, reject) => {
ytdl.getInfo(url).then(async(getUrl) => {
let result = [];
for(let i = 0; i < getUrl.formats.length; i++) {
let item = getUrl.formats[i];
if (item.container == 'mp4' && item.hasVideo == true && item.hasAudio == true) {
let { qualityLabel, contentLength } = item;
let bytes = await bytesToSize(contentLength);
result[i] = { video: item.url, quality: qualityLabel, size: bytes }}};
let resultFix = result.filter(x => x.video != undefined && x.size != undefined && x.quality != undefined) 
let tiny = await axios.get(`https://tinyurl.com/api-create.php?url=${resultFix[0].video}`);
let tinyUrl = tiny.data;
let title = getUrl.videoDetails.title;
let thumb = getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url;
resolve({ title, result: tinyUrl, rersult2: resultFix[0].video, thumb })}).catch(reject)})};

async function ytPlay(query) {
return new Promise((resolve, reject) => {
yts(query).then(async(getData) => {
let result = getData.videos.slice( 0, 5 );
let url = [];
for (let i = 0; i < result.length; i++) { url.push(result[i].url) }
let random = url[0];
let getAudio = await ytMp3(random);
resolve(getAudio)}).catch(reject)})};

async function ytPlayVid(query) {
return new Promise((resolve, reject) => {
yts(query).then(async(getData) => {
let result = getData.videos.slice( 0, 5 );
let url = [];
for (let i = 0; i < result.length; i++) { url.push(result[i].url) }
let random = url[0];
let getVideo = await ytMp4(random);
resolve(getVideo)}).catch(reject)})};
