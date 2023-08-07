import { youtubedl, youtubedlv2 } from '@bochilteam/scraper' 
 import fetch from 'node-fetch' 
 import yts from 'yt-search' 
 import ytdl from 'ytdl-core' 
 let handler = async (m, { text, conn, args, usedPrefix, command }) => { 
 if (!args[0]) throw '*[❌] INGRESE EL COMANDO MAS UN ENLACE DE YOUTUBE.*' 
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
 throw `*[❌] NO SE ENCONTRO UN ENLACE PARA ESE NUMERO INGRESA UN NUMERO DEL 1 AL ${matchingItem.urls.length}*`; 
 }} else { 
 throw `*[✳️] PARA PODER USAR ESTE COMANDO DE LA MANERA (${usedPrefix + command} <numero>), REALIZA LA BUSQUEDA DE VIDEOS CON ${usedPrefix}playlist <texto>*`; 
 }} else { 
 throw `*[✳️] PARA PODER USAR ESTE COMANDO DE LA MANERA (${usedPrefix + command} <numero>), REALIZA LA BUSQUEDA DE VIDEOS CON ${usedPrefix}playlist <texto>*`; 
 }}}   
 await conn.sendMessage(m.chat, {text: `*_⏳Sᴇ ᴇsᴛᴀ ᴘʀᴏᴄᴇsᴀɴᴅᴏ Sᴜ ᴀᴜᴅɪᴏ...⏳_*\n\n*◉ Sɪ Sᴜ ᴀᴜᴅɪᴏ ɴᴏ ᴇs ᴇɴᴠɪᴀᴅᴏ, ᴘʀᴜᴇʙᴇ ᴄᴏɴ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ #playdoc ᴏ #play.2 ᴏ #ytmp4doc ◉*`}, {quoted: m}); 
 try { 
 let q = '128kbps' 
 let v = youtubeLink 
 const yt = await youtubedl(v).catch(async _ => await youtubedlv2(v)) 
 const dl_url = await yt.audio[q].download() 
 const ttl = await yt.title 
 const size = await yt.audio[q].fileSizeH 
 await conn.sendFile(m.chat, dl_url, ttl + '.mp3', null, m, false, { mimetype: 'audio/mp4' }) 
 } catch { 
 try { 
 let lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${lolkeysapi}&url=${youtubeLink}`)     
 let lolh = await lolhuman.json() 
 let n = lolh.result.title || 'error' 
 await conn.sendMessage(m.chat, { audio: { url: lolh.result.link }, fileName: `${n}.mp3`, mimetype: 'audio/mp4' }, { quoted: m })   
 } catch {    
 try { 
 let searchh = await yts(youtubeLink) 
 let __res = searchh.all.map(v => v).filter(v => v.type == "video") 
 let infoo = await ytdl.getInfo('https://youtu.be/' + __res[0].videoId) 
 let ress = await ytdl.chooseFormat(infoo.formats, { filter: 'audioonly' }) 
 conn.sendMessage(m.chat, { audio: { url: ress.url }, fileName: __res[0].title + '.mp3', mimetype: 'audio/mp4' }, { quoted: m })  
 } catch { 
 await conn.reply(m.chat, '*[⚠️] NO PUDE ENVIAR SU AUDIO*', m)} 
 }}} 
 handler.command = /^audio|fgmp3|dlmp3|getaud|yt(a|mp3)$/i 
 export default handler
