import {sticker} from "../lib/sticker.js";
let handler = (m) => m;

handler.all = async function (m, {}) {
  let chat = global.db.data.chats[m.chat];

  if (m.mentionedJid.includes(this.user.jid) && m.isGroup && !chat.isBanned) {
    let stiker = await sticker(imagen4, false, global.packname, global.author);
    this.sendFile(m.chat, stiker, "sticker.webp", null, m, false, {
      contextInfo: {
        externalAdReply: {title: "𝘿𝙊𝙍𝙍𝘼𝙏-𝘽𝙊𝙏-𝙈𝘿", body: "𝑫𝑰𝑬𝑮𝑶-𝑶𝑭𝑪", sourceUrl: `https://github.com/DIEGO-OFC/DORRAT-BOT-MD`, thumbnail: imagen1},
      },
    });
  }

  return !0;
};
export default handler;
