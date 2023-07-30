import fetch from "node-fetch";
import axios from "axios";
let handler = async (m, {conn, usedPrefix, command}) => {
 let waifu = await axios.get(`https://nekos.life/api/v2/img/waifu`);
  
let buttonMessage = {
    image: {url: foxgirl_irius.data.url},
    caption: `*乂 ⺀ ANIME - WAIFU*`,
    footer: `*🔥 THE DORRAT - BOT 🔥*`,
    buttons: null,
    headerType: 4,
  };
  conn.sendMessage(m.chat, buttonMessage, {quoted: m});
};
handler.help = ["waifu"];
handler.tags = ["anime"];
handler.limit = 3;
handler.command = /^(waifu)$/i;
export default handler;
