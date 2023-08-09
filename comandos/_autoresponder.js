import { sticker } from "../lib/sticker.js";

const handler = (m) => m;

handler.all = async function (m, {}) {
  const chat = global.db.data.chats[m.chat];

  if (m.mentionedJid.includes(this.user.jid) && m.isGroup && !chat.isBanned) {
    const sticker = await sticker(imagen4, false, global.packname, global.author);
    this.sendFile(
      m.chat,
      stiker,
      "sticker.webp",
      null,
      m,
      false,
      {
        contextInfo: {
          externalAdReply: {
            title: "𝐙𝐈𝐑𝐀𝐗-𝐁𝐎𝐓-𝐌𝐃",
            body: "𝑫𝑰𝑬𝑮𝑶-𝑶𝑭𝑪",
            sourceUrl: `https://github.com/DIEGO-OFC/Zirax-Bot-MD`,
            thumbnail: imagen1,
          },
        },
      }
    );
  }

  return !0;
};

export default handler;

