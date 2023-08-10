import axios from "axios";

var  handler = async (m, { usedPrefix, conn }) => {
  const foxgirl_irius = await axios.get(`https://nekos.life/api/v2/img/fox_girl`);

  const buttonMessage = {
    image: { url: foxgirl_irius.data.url },
    caption: `*乂 ⺀ ANIME - RANDOM ⺀ 乂*`,
    footer: `*🔥 THE Zirax - BOT 🔥*`,
    buttons: null,
    headerType: 4,
  };

  await conn.sendMessage(m.chat, buttonMessage, { quoted: m });
};

handler.command = /^(foxgirl|girlfox)$/i;

export default handler;
