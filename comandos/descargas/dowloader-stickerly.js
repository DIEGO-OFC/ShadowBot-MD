//import {sticker} from "../lib/sticker.js";
import fetch from "node-fetch";
let handler = async (m, {conn, text, args, usedPrefix, command}) => {
  if (!args[0]) throw `*✳️ EJEMPLO DE USO DEL COMANDO ${usedPrefix + command} Anya Forger*`;
  try {
       const res2 = await googleImage(text); 
     const sfoto = res2.getRandom(); 
     const json = await fetch(`https://api.lolhuman.xyz/api/stickerwa?apikey=${lolkeysapi}&query=${text}`); 
     const jsons = await json.json(); 
     const {stickers} = jsons.result[0]; 
     const res = jsons.result.map((v, index) => `🌅 • Resultado: ${1 + index}\n*🥗 • Nombre:* ${v.title}\n*🐢 • Autor:* ${v.author}\n*🍂 • Url:* ${v.url}`).join`\n\n───\n\n`; 
     await conn.sendFile(m.chat, sfoto, 'error.jpg', res, m); 
      
    } catch {
      await m.reply("*⚠️ ERROR INTENTALO DE NUEVO*");
   
  }
};
handler.command = /^stickerly$/i;

export default handler;
