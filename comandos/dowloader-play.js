import { youtubeSearch } from '@bochilteam/scraper' 
 import fetch from 'node-fetch' 
 let handler = async (m, { conn, command, text, usedPrefix }) => { 
 if (!text) throw `*[❕𝐈𝐍𝐅𝐎❕] NOMBRE DE LA CANCION FALTANTE, POR FAVOR INGRESE EL COMANDO MAS EL NOMBRE/TITULO DE UNA CANCIÓN*\n\n*➢ EJEMPLO:*\n*${usedPrefix + command} Phonk*` 
 try { 
 let vid = (await youtubeSearch(text)).video[0] 
 let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid 
 const urll = 'https://www.youtube.com/watch?v=' + videoId 
 var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document'] 
 var document = doc[Math.floor(Math.random() * doc.length)] 
 const buttons = [ 
 { buttonId: `#ytmp3 ${urll}`, buttonText: { displayText: '🎶 𝗔𝗨𝗗𝗜𝗢 🎶' }, type: 1 }, 
 { buttonId: `#ytmp4 ${urll}`, buttonText: { displayText: '🎦 𝗩𝗜𝗗𝗘𝗢 🎦' }, type: 1 }, 
 { buttonId: `#playlist ${text}`, buttonText: { displayText: '🔍 𝗠𝗔𝗦 𝗥𝗘𝗦𝗨𝗟𝗧𝗔𝗗𝗢𝗦  🔍' }, type: 1 }, ]     
 let texto1 = ` 
 ╔═══════❰  *🔰*  ❱══════⬣ 
 ║ *TITULO | TITLE* 
 ║ ${title} 
 ║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
 ║ *DESCRIPCIÓN  | DESCRIPTION* 
 ║ ${description} 
 ║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
 ║ *PUBLICADO | PUBLISHE* 
 ║ ${publishedTime} 
 ║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
 ║ *DURACION | DURATION* 
 ║ ${durationH} 
 ║┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
 ║ *VISTAS | VIEWS* 
 ║ ${viewH} 
 ║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
 ║ *URL* 
 ║ ${urll} 
 ╚═══════❰ *${vs}* ❱══════⬣`.trim() 
 let buttonMessage = { "document": { url: "https://wa.me/593959425715" }, "fileName": '➢ 🗂️ ʀᴇᴘʀᴏᴅᴜᴄᴛᴏʀ ᴅᴇ ʏᴏᴜᴛᴜʙᴇ', "mimetype": 'application/vnd.ms-excel', "caption": texto1, "fileLength": '99999999999999', "mentions": [m.sender], "footer": wm, "buttons": buttons, "headerType": 4, contextInfo: { "mentionedJid": [m.sender], "externalAdReply": { "showAdAttribution": true, "title": `${title}`, "mediaType": 2, "previewType": "VIDEO", "thumbnail": await (await fetch(thumbnail)).buffer(), "mediaUrl": `${urll}`, "sourceUrl": `https://github.com/DIEGO-OFC/DORRAT-BOT-MD` }}}  
 conn.sendMessage(m.chat, buttonMessage, { quoted: m }) 
 } catch { 
 try { 
 let vid2 = await (await fetch(`https://api.lolhuman.xyz/api/ytsearch?apikey=${lolkeysapi}&query=${text}`)).json() 
 let { videoId, title, views, published, thumbnail } = await vid2.result[0] 
 const url = 'https://www.youtube.com/watch?v=' + videoId 
 let ytLink = await fetch(`https://api.lolhuman.xyz/api/ytplay2?apikey=${lolkeysapi}&query=${text}`) 
 let jsonn = await ytLink.json() 
 let aud = await jsonn.result.audio 
 let capt = `➢ *TITULO:* ${title}\n➢ *PUBLICADO:* ${published}\n➢ *VISTAS:* ${views}` 
 const buttons = [{buttonId: `#playlist ${title}`, buttonText: {displayText: '⏱️ 𝗠𝗔𝗦 𝗥𝗘𝗦𝗨𝗟𝗧𝗔𝗗𝗢𝗦'}, type: 1}] 
 const buttonMessage = { image: {url: thumbnail}, caption: capt, footer: '*ᴇɴᴠɪᴀɴᴅᴏ ᴀᴜᴅɪᴏ, ᴀɢᴜᴀʀᴅᴇ ᴜɴ ᴍᴏᴍᴇɴᴛᴏ...*', buttons: buttons, headerType: 4 } 
 let msg = await conn.sendMessage(m.chat, buttonMessage, { quoted: m }) 
 conn.sendMessage(m.chat, { audio: { url: aud }, mimetype: 'audio/mp4', fileName: `${title}.mp3`}, {quoted: msg}) 
 } catch {   
 throw '*[❕] ERROR, POR FAVOR INTÉNTELO DE NUEVO*'}}} 
 handler.help = ['play', 'play2'].map(v => v + ' <pencarian>') 
 handler.tags = ['downloader'] 
 handler.command = /^play2?$/i 
 handler.exp = 20 
 // handler.register = true 
// handler.dorracoins = 100 
 //handler.limit = 5 
 export default handler





/*import fetch from "node-fetch" 
 import yts from "yt-search" 
 import ytdl from 'ytdl-core' 
 import axios from 'axios' 
 import { youtubedl, youtubedlv2 } from '@bochilteam/scraper' 
 let handler = async (m, { conn, command, args, text, usedPrefix }) => { 
 if (!text) throw `*[❕𝐈𝐍𝐅𝐎❕] NOMBRE DE LA CANCION FALTANTE, POR FAVOR INGRESE EL COMANDO MAS EL NOMBRE/TITULO DE UNA CANCIÓN*\n\n*➢ EJEMPLO:*\n*${usedPrefix + command} Phonk*` 
 try { 
 const yt_play = await search(args.join(" ")) 
 let additionalText = '' 
 if (command === 'play') { 
 additionalText = 'audio 🔊' 
 } else if (command === 'play2') { 
 additionalText = 'video 🎥'} 
 let texto1 = `╔═══════❰  *🔰*  ❱══════⬣
║ *TITULO*:
║ ${yt_play[0].title} 
║ *PUBLICADO*:
║ ${yt_play[0].ago} 
║ *DURACION*:
║ ${secondString(yt_play[0].duration.seconds)} 
║ *VISTAS*: 
║ ${`${MilesNumber(yt_play[0].views)}`} 
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
╚═══════❰ *${vs}* ❱══════⬣`.trim() 
 conn.sendMessage(m.chat, { image: { url: yt_play[0].thumbnail }, caption: texto1 }, { quoted: m }) 
 if (command == 'play') { 
 try { 
 let q = '128kbps' 
 let v = yt_play[0].url 
 const yt = await youtubedl(v).catch(async _ => await youtubedlv2(v)) 
 const dl_url = await yt.audio[q].download() 
 const ttl = await yt.title 
 const size = await yt.audio[q].fileSizeH 
 await conn.sendFile(m.chat, dl_url, ttl + '.mp3', null, m, false, { mimetype: 'audio/mp4' }) 
 } catch { 
 try { 
 const dataRE = await fetch(`https://api.akuari.my.id/downloader/youtube?link=${yt_play[0].url}`) 
 const dataRET = await dataRE.json() 
 conn.sendMessage(m.chat, { audio: { url: dataRET.mp3[1].url }, fileName: yt_play[0].title + '.mp3', mimetype: 'audio/mp4' }, { quoted: m })     
 } catch { 
 try { 
 let humanLol = await fetch(`https://api.lolhuman.xyz/api/ytplay?apikey=${lolkeysapi}&query=${yt_play[0].title}`) 
 let humanRET = await humanLol.json() 
 conn.sendMessage(m.chat, { audio: { url: humanRET.result.audio.link }, fileName: yt_play[0].title + '.mp3', mimetype: 'audio/mp4' }, { quoted: m })          
 } catch {      
 try { 
 let lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${lolkeysapi}&url=${yt_play[0].url}`)     
 let lolh = await lolhuman.json() 
 let n = lolh.result.title || 'error' 
 await conn.sendMessage(m.chat, { audio: { url: lolh.result.link }, fileName: `${n}.mp3`, mimetype: 'audio/mp4' }, { quoted: m })   
 } catch {    
 try { 
 let searchh = await yts(yt_play[0].url) 
 let __res = searchh.all.map(v => v).filter(v => v.type == "video") 
 let infoo = await ytdl.getInfo('https://youtu.be/' + __res[0].videoId) 
 let ress = await ytdl.chooseFormat(infoo.formats, { filter: 'audioonly' }) 
 conn.sendMessage(m.chat, { audio: { url: ress.url }, fileName: __res[0].title + '.mp3', mimetype: 'audio/mp4' }, { quoted: m })   
 } catch { 
 await conn.reply(m.chat, '*[❗] 𝙴𝚁𝚁𝙾𝚁 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰𝚁 𝙴𝙻 𝙰𝚄𝙳𝙸𝙾*', m)}}}}} 
 }   
 if (command == 'play2') { 
 try { 
 let qu = '360' 
 let q = qu + 'p' 
 let v = yt_play[0].url 
 const yt = await youtubedl(v).catch(async _ => await youtubedlv2(v)) 
 const dl_url = await yt.video[q].download() 
 const ttl = await yt.title 
 const size = await yt.video[q].fileSizeH 
 await await conn.sendMessage(m.chat, { video: { url: dl_url }, fileName: `${ttl}.mp4`, mimetype: 'video/mp4', caption: `▢ 𝚃𝙸𝚃𝚄𝙻𝙾: ${ttl}\n▢ 𝙿𝙴𝚂𝙾 𝙳𝙴𝙻 𝚅𝙸𝙳𝙴𝙾: ${size}`, thumbnail: await fetch(yt.thumbnail) }, { quoted: m }) 
 } catch {    
 try {   
 let mediaa = await ytMp4(yt_play[0].url) 
 await conn.sendMessage(m.chat, { video: { url: mediaa.result }, fileName: `error.mp4`, caption: `_𝐓𝐡𝐞 𝐌𝐲𝐬𝐭𝐢𝐜 - 𝐁𝐨𝐭_`, thumbnail: mediaa.thumb, mimetype: 'video/mp4' }, { quoted: m })      
 } catch {   
 try { 
 let lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${lolkeysapi}&url=${yt_play[0].url}`)     
 let lolh = await lolhuman.json() 
 let n = lolh.result.title || 'error' 
 let n2 = lolh.result.link 
 let n3 = lolh.result.size 
 let n4 = lolh.result.thumbnail 
 await conn.sendMessage(m.chat, { video: { url: n2 }, fileName: `${n}.mp4`, mimetype: 'video/mp4', caption: `▢ 𝚃𝙸𝚃𝚄𝙻𝙾: ${n}\n▢ 𝙿𝙴𝚂𝙾 𝙳𝙴𝙻 𝚅𝙸𝙳𝙴𝙾: ${n3}`, thumbnail: await fetch(n4) }, { quoted: m }) 
 } catch { 
 await conn.reply(m.chat, '*[❗] 𝙴𝚁𝚁𝙾𝚁 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰𝚁 𝙴𝙻 𝚅𝙸𝙳𝙴𝙾*', m)}}}     
 }} catch { 
 throw "*[❕] ERROR INTENTALO DE NUEVO.*"} 
 } 
 handler.help = ["play", "play2"].map((v) => v + " < busqueda >") 
 handler.tags = ["downloader"] 
 handler.command = /^play2?$/i 
 export default handler 
  
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
 resolve(getVideo)}).catch(reject)})};*/




/*import { youtubedl, youtubeSearch, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper' 
  
 let handler = async (m, { conn, text, args, isPrems, isOwner, usedPrefix, command }) => { 
 let q, v, yt, dl_url, ttl, size, lolhuman, lolh, n, n2, n3, n4, cap, qu, currentQuality    
 if (!text) throw `*[❕𝐈𝐍𝐅𝐎❕] NOMBRE DE LA CANCION FALTANTE, POR FAVOR INGRESE EL COMANDO MAS EL NOMBRE/TITULO DE UNA CANCIÓN*\n\n*➢ EJEMPLO:*\n*${usedPrefix + command} Phonk*`
try { 
 var vid = (await youtubeSearch(text)).video[0] 
 var { title, description, thumbnail, videoId, durationH, durationS, viewH, publishedTime } = vid 
 var url = 'https://www.youtube.com/watch?v=' + videoId 
 let vide = `https://yt.btch.bz/download?URL=${url}&videoName=video` 
 let web = `https://yt.btch.bz/downloadAudio?URL=${url}&videoName=video` 
 var tmb = thumbnail 
 let lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytplay?apikey=GataDios&query=${title}`)    
 let lolh = await lolhuman.json() 
 let n = lolh.result.title || 'error' 
 var captionvid = `╔═══════❰  *🔰*  ❱══════⬣ 
 ║ *TITULO | TITLE* 
 ║ ${title} 
 ║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
 ║ *DESCRIPCIÓN  | DESCRIPTION* 
 ║ ${description} 
 ║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
 ║ *PUBLICADO | PUBLISHE* 
 ║ ${publishedTime} 
 ║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
 ║ *DURACION | DURATION* 
 ║ ${durationH} 
 ║┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
 ║ *VISTAS | VIEWS* 
 ║ ${viewH} 
 ║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
 ║ *URL* 
 ║ ${url} 
 ╚═══════❰ *${vs}* ❱══════⬣`   
  
 if (command == 'play') {         
 var pesan = await conn.sendMessage(m.chat, { 
 text: captionvid, 
 contextInfo: { 
 externalAdReply: { 
 title: title, 
 body: packname, 
 thumbnailUrl: tmb, 
 sourceUrl: web, 
 mediaType: 1, 
 showAdAttribution: true, 
 renderLargerThumbnail: true 
 }}} , { quoted: m }) 
 m.reply(`*[⏱️]EL AUDIO PUEDE TARDAR EN  ENVIARSE, HASTA 10 MINUTOS,  PORFAVOR TENGA PACIENCIA SON LAS APIS*`)
 await conn.sendMessage(m.chat, { audio: { url: lolh.result.audio.link }, mimetype: 'audio/mpeg', contextInfo: { 
 externalAdReply: { 
 title: title, 
 body: "", 
 thumbnailUrl: tmb, 
 sourceUrl: web, 
 mediaType: 1, 
 showAdAttribution: true, 
 renderLargerThumbnail: true 
 }}} , { quoted: m })    
 } 
 if (command == 'play2') { 
 var pesan = await conn.sendMessage(m.chat, { 
 text: captionvid, 
 contextInfo: { 
 externalAdReply: { 
 title: title, 
 body: packname, 
 thumbnailUrl: tmb , 
 sourceUrl: web, 
 mediaType: 1, 
 showAdAttribution: true, 
 renderLargerThumbnail: true 
 }}} , { quoted: m }) 
 await conn.sendMessage(m.chat, { video: { url: lolh.result.video.link }, fileName: `${ttl}.mp4`, mimetype: 'video/mp4', caption: `${wm}\nTITULO\n ${title}` }, { quoted: m }) 
 } 
 } catch (e) { 
 conn.reply(m.chat, `*[❕] ERROR INTENTALO DE NUEVO.*`, m, { 
 contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null,  
 title: 'DORRAT-BOT-MD', 
 body: 'Super WhatsApp Bot Pro',          
 previewType: 0, thumbnail: fs.readFileSync("./galeria/menudorrat5.png"), 
 sourceUrl: `https://github.com/DIEGO-OFC/DORRAT-BOT-MD`}}}) 
  
 let res = await fetch(`https://api.lolhuman.xyz/api/ytplay?apikey=GataDios&query=${title}`)  
 let json = await res.json() 
 conn.sendFile(m.chat, json.result.url, 'error.mp4', `${wm}`, m) 
 }} 
 handler.command = ['play', 'play2'] 
 handler.exp = 0 
 handler.limit = 1 
 export default handler 
  
 async function cut(url) { 
 url = encodeURIComponent(url) 
 let res = await fetch(`https://api.botcahx.live/api/linkshort/bitly?link=${url}&apikey=${btc}`) 
 if (!res.ok) throw false 
 return await res.text() 
 }*/
 


    
