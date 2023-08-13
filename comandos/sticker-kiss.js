import {sticker} from "../lib/sticker.js";
import fetch from "node-fetch";
import axios from "axios";
import ffmpeg from "fluent-ffmpeg";

let handler = async (m, {conn}) => {
  let besoo = await axios.get(`https://nekos.life/api/kiss`);
  let videoUrl = besoo.data.url;
  let gifData = await convertMP4toGIF(videoUrl);

  let Menssage = {
    video: {url: `data:image/gif;base64,${gifData}`},
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
  const ffmpeg = new ffmpeg();
  const output = await ffmpeg.run(`-i ${videoUrl} -vf "fps=10" -f gif -y output.gif`);
  const data = await fetch(output).buffer();
  return data.toString("base64");
}