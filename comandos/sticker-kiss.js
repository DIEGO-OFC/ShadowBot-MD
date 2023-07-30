import {sticker} from "../lib/sticker.js";
import fetch from "node-fetch";
import axios from "axios";
let handler = async (m, {conn}) => {
let besoo = await axios.get(`https://nekos.life/api/kiss`);
let Menssage = {
    video: {url: besoo.data.url},
    caption: `😘 +${m.sender.split("@")[0]} le dio besos a ${m.mentionedJid
        .map((user) => (user === m.sender ? "alguien " : `+${user.split("@")[0]}`))
        .join(", ")}`,
    footer: `*🔥 THE DORRAT - BOT 🔥*`,
    headerType: 4,
  };
  conn.sendMessage(m.chat, Menssage, {quoted: m});
 
};
handler.command = /^(kiss|skiss|kis|besos|beso)$/i;
export default handler;
