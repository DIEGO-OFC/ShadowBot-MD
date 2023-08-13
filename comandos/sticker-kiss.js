import {sticker} from "../lib/sticker.js";
import fetch from "node-fetch";
import axios from "axios";

let handler = async (m, {conn}) => {
  let besoo = await axios.get(`https://nekos.life/api/kiss`);
  let videoUrl = besoo.data.url;
  let gifUrl = await convertMP4toGIF(videoUrl);

  let Menssage = {
    video: {url: gifUrl},
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

async function convertMP4toGIF(videoUrl) {
  const response = await fetch(videoUrl);
  const blob = await response.blob();
  const reader = new FileReader();
  reader.onload = async () => {
    const gifData = await reader.result;
    const base64 = btoa(gifData);
    const gifUrl = `data:image/gif;base64,${base64}`;
    return gifUrl;
  };
  reader.readAsBinaryString(blob);
}