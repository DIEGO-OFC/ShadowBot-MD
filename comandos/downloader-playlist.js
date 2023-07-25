import yts from 'yt-search'; 
 import fs from 'fs'; 
 let handler = async (m, { conn, text, usedPrefix, command }) => { 
 if (!text) throw `*[❕] INGRESA UNA CANCION PARA ENVIAR LA LISTA, EJEMPLO*:\n*■ ${usedPrefix + command} phonk*`;
 try { 
 let vids_ = {  
 from: m.sender,  
 urls: []  
 } 
 if (!global.videoList) { 
 global.videoList = []; 
 } 
 /*if (global.videoList[0]?.from == m.sender) { 
 delete global.videoList; 
 }*/ 
 if (global.videoList[0]?.from == m.sender) { 
   global.videoList.splice(0, global.videoList.length); 
 } 
 let results = await yts(text); 
 let textoInfo = `*[❗] Puedes descargar el video que quieras de la siguiente forma:* 
 ❍ ${usedPrefix}audio <numero> 
 ❍ ${usedPrefix}video <numero>  
  
 *➢ Ejemplos:* 
 *❍ ${usedPrefix}audio 5* 
 *❍ ${usedPrefix}video 8*`.trim()   
 let teks = results.all.map((v, i) => { 
 let link = v.url; 
 vids_.urls.push(link); 
 return `[${i + 1}] ${v.title} 
 ❒ 🧷 *_Link :_* ${v.url} 
 ❒ ⏱️ *_Duración :_* ${v.timestamp} 
 ❒ 📥 *_Subido :_* ${v.ago} 
 ❒ 👁 *_Vistas :_* ${v.views}`}).join('\n\n◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦\n\n') 
 await conn.sendFile(m.chat, results.all[0].thumbnail, 'yts.jpeg', textoInfo + '\n\n' + teks, m) 
 global.videoList.push(vids_); 
 } catch {     
    await m.reply("*[⚠️] ERROR, VUELVA A INTENTARLO*");
 
 }} 
 handler.help = ['playlist *<texto>*']; 
 handler.tags = ['search']; 
 handler.command = /^playlist|playlist2$/i
 handler.dolares = 8
 export default handler;







/*import {youtubeSearch} from "@bochilteam/scraper";
let handler = async (m, {conn, args, usedPrefix, command, text}) => {
  if (!text) throw `*[❕] INGRESA UNA CANCION PARA ENVIAR LA LISTA, EJEMPLO*:\n*■ ${usedPrefix + command} phonk*`;
  try {
    const {video} = await youtubeSearch(text);
    const listSections = [];
    let teks = [...video]
      .map((v) => {
        switch (v.type) {
          case "video": {
            listSections.push([
              `${v.title}`,
              [
                ["Video 🎦", `${usedPrefix}ytmp4 ${v.url}`, `descargar: ${v.title} (${v.url})`],
                ["Videodoc 🎦", `${usedPrefix}ytmp4doc ${v.url}`, `descargar: ${v.title} (${v.url})`],
                ["Audio 🎵", `${usedPrefix}ytmp3 ${v.url}`, `descargar: ${v.title} (${v.url})`],
                ["Audiodoc 🎵", `${usedPrefix}ytmp3doc ${v.url}`, `descargar: ${v.title} (${v.url})`],
              ],
            ]);
          }
        }
      })
      .filter((v) => v)
      .join("\n\n========================\n\n");
    conn.sendList(
      m.chat,
      " *『 LISTA YOUTUBE  』*",
      `*📍 Musica relacionada con: ${args.join(" ")}*`,
      "*📗 Elije una opción y presiona enviar*",
      "*[🔍 RESULTADOS 🔍]*",
      listSections,
      m
    );
  } catch {
    await m.reply("*[⚠️] ERROR, VUELVA A INTENTARLO*");
  }
};
handler.dorracoins = 5;
handler.command = /^playlist|playlist2$/i;
export default handler;*/
