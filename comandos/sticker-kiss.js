import { sticker } from "../lib/sticker.js";
import fetch from "node-fetch";
import axios from "axios";
import fs from "fs";
import ffmpeg from 'ffmpeg-static'
import { exec } from 'child_process'

let handler = async (m, { conn }) => {
  let besoo = await axios.get(`https://nekos.life/api/kiss`);
  let Menssage = {
    video: { url: besoo.data.url },
    caption: `😘 +${m.sender.split("@")[0]} le dio besos a ${m.mentionedJid
      .map((user) => (user === m.sender ? "alguien " : `+${user.split("@")[0]}`))
      .join(", ")}`,
    footer: `*🔥 THE DORRAT - BOT 🔥*`,
    headerType: 4,
  };

  const attachmentData = await fetch(Menssage.video.url).then((r) => r.buffer());
  const inputPath = `./input.mp4`;
  const outputPath = `./output.gif`;

  fs.writeFileSync(inputPath, attachmentData);

    const gifData = fs.readFileSync(outputPath);

    conn.sendMessage(m.chat, gifData, { sendMediaAsSticker: true, quoted: m });
};

handler.command = /^(kiss|skiss|kis|besos|beso)$/i;
export default handler;
