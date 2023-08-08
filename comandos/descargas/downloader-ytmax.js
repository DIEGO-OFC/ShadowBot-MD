import { youtubedl, youtubeSearch, youtubedlv2, tiktokdl } from '@bochilteam/scraper'  
import fetch from "node-fetch"
import ytdl from 'ytdl-core'
import axios from 'axios'
var handler = async (m, {conn, args, text}) => {
let q, v, yt, dl_url, ttl, size, lolhuman, lolh, n, n2, n3, n4, cap, qu, currentQuality
  if (!args[0]) throw '[❌] *_Que quieres que busque en YouTube?_*';
//if (!args[0]) return m.reply(lenguajeGB.smsMalused2() + `*${usedPrefix + command} https://youtu.be/ejemplo*\n*${usedPrefix + command} https://www.youtube.com/ejemplo*`)
await conn.reply(m.chat, `*Aguarde un momento*`, m)
try {
q = ''
v = args[0]
yt = await youtubedl(v).catch(async _ => await youtubedlv2(v)).catch(async _ => await youtubedlv3(v))
  let quality = null
let qualities = ['2160p', '1440p', '1080p', '720p', '480p', '360p', '240p', '144p']

for (let i = 0; i < qualities.length; i++) {
currentQuality = qualities[i]
  
if (yt.video[currentQuality]) {
dl_url = await yt.video[currentQuality].download();
size = currentQuality
quality = currentQuality
break
}}
ttl = await yt.title;
await conn.sendMessage(m.chat, { video: { url: dl_url }, fileName: `${ttl}.mp4`, mimetype: 'video/mp4', caption: `➤ Titulo : ${ttl}\n➤ Peso : ${size == '720p' ? 'HD' : size == '1080p' ? 'FULL HD' : size == '1440p' ? '2K' : '4K'}*`, thumbnail: await fetch(yt.thumbnail) }, { quoted: m })
} catch (e) {
//reportError(e)
m.reply(`ERROR`) 
}}
handler.help = ['ytmax *<texto>*'];
handler.tags = ['search'];
handler.command = ['ytmax', 'ytsmax'];
export default handler;

async function cut(url) {
  url = encodeURIComponent(url)
  let res = await fetch(`https://api.botcahx.live/api/linkshort/bitly?link=${url}&apikey=${btc}`)
  if (!res.ok) throw false
  return await res.text()
}

async function Draw(propmt) {
const Blobs = await fetch(
"https://api-inference.huggingface.co/models/prompthero/openjourney-v2",
{
method: "POST",
headers: {
"content-type": "application/json",
Authorization: "Bearer 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",
},
body: JSON.stringify({ inputs: propmt }),
})
.then((res) => res.blob())
const arrayBuffer = await Blobs.arrayBuffer();
const buffer = Buffer.from(arrayBuffer);
return buffer
}

function checkMessageType(url) {
if (url.includes("www.facebook.com")) {
if (url.includes("/groups/")) {
return "groups"
} else if (url.includes("/reel/")) {
return "reel"
} else if (url.includes("/stories/")) {
return "stories"
} else if (url.includes("/posts/")) {
return "posts"
}}
return "default"
}

function formatVideoDuration(duration) {
const durationString = String(duration)
const length = durationString.length

if (length === 2) {
const seconds = durationString
return `${seconds} seg`
} else if (length === 3) {
const minutes = durationString.substring(0, 1)
const seconds = durationString.substring(1)
return `${minutes}:${seconds} min`
} else if (length === 4) {
const minutes = durationString.substring(0, 2)
const seconds = durationString.substring(2)
return `${minutes}:${seconds} min`
} else {
return "--"
}}

async function search(query, options = {}) {
const search = await yts.search({ query, hl: "es", gl: "ES", ...options });
return search.videos};

function MilesNumber(number) {
const exp = /(\d)(?=(\d{3})+(?!\d))/g;
const rep = "$1.";
let arr = number.toString().split(".");
arr[0] = arr[0].replace(exp, rep);
return arr[1] ? arr.join(".") : arr[0]};

function secondString(seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor((seconds % (3600 * 24)) / 3600);
var m = Math.floor((seconds % 3600) / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " día, " : " días, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " hora, " : " horas, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " minuto, " : " minutos, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " segundo" : " segundos") : "";
return dDisplay + hDisplay + mDisplay + sDisplay};

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
resolve({ title, result: tinyUrl, result2: resultFix, thumb })}).catch(reject)})};

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

async function spotifydl(url) {
const credentials = { clientId: 'acc6302297e040aeb6e4ac1fbdfd62c3', clientSecret: '0e8439a1280a43aba9a5bc0a16f3f009' }
const spotify = new Spotify.default(credentials)
const res = await spotify.getTrack(url).catch(() => {
return { error: 'Fallo la descarga' }})
return { data: res, audio: await spotify.downloadTrack(url) }}
