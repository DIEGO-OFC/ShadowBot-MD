//import {sticker} from "../lib/sticker.js";
import fetch from "node-fetch";
import fetch from 'node-fetch'; 
 import {sticker} from '../lib/sticker.js'; 
 const handler = async (m, {conn, text, usedPrefix, command}) => { 
   if (!text) throw `*[❗] 𝙴𝙹𝙴𝙼𝙿𝙻𝙾 𝙳𝙴 𝚄𝚂𝙾 𝙳𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 ${usedPrefix + command}* https://getstickerpack.com/stickers/flork-memes-4-1`; 
   try { 
     const url = text; 
     const res = await fetch(`https://api.akuari.my.id/downloader/stickerpack?link=${url}`); 
     const json = await res.json(); 
     for (const data of (json.result || json)) { 
       const stikers = await sticker(false, data, global.packname, global.author); 
       conn.sendFile(m.chat, stikers, null, {asSticker: true}, m, true, {contextInfo: {'forwardingScore': 200, 'isForwarded': true}}, {quoted: m}); 
       // await delay(1500) 
     } 
   } catch { 
     await m.reply('*[❗] 𝙴𝚁𝚁𝙾𝚁, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚅𝚄𝙴𝙻𝚅𝙰 𝙰 𝙸𝙽𝚃𝙴𝚁𝙽𝚃𝙰𝚁𝙻𝙾*'); 
   } 
 }; 
 handler.command = /^stickerpack$/i; 
 export default handler;
