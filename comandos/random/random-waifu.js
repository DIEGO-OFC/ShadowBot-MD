import fetch from "node-fetch";
import axios from "axios";
import CLUB from "club-atticus";
let handler = async (m, {conn, usedPrefix, command}) => {
try {
 let waifu = await axios.get(`https://nekos.life/api/v2/img/waifu`);
  
let buttonMessage = {
    image: {url: waifu.data.url},
    caption: `*乂 ⺀ ANIME - WAIFU*`,
    footer: `*🔥 THE ZIRAX - BOT 🔥*`,
    buttons: null,
    headerType: 4,
  };
  conn.sendMessage(m.chat, buttonMessage, {quoted: m});
} catch {
   const waifuxd = new CLUB(); 
   const waifux = await waifuxd.waifu();  
     const caption = `*乂 ⺀ ANIME - WAIFU ⺀ 乂*`  
     await conn.sendFile(m.chat, waifux, "zirax.jpg", caption, m);
 };
};
handler.help = ["waifu"];
handler.tags = ["anime"];
handler.limit = 3;
handler.command = /^(waifu)$/i;
export default handler;
