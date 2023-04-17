import axios from "axios";

let handler = async (m, {usedPrefix, conn}) => {
  let foxgirl_irius = await axios.get(`https://nekos.life/api/v2/img/fox_girl`);
  let buttons = [
    {
      buttonId: `${usedPrefix}foxgirl`,
      buttonText: {displayText: "Siguiente 🦊"},
      type: 1,
    },
  ];
  let buttonMessage = {
    image: {url: foxgirl_irius.data.url},
    caption: `*乂 ⺀ ANIME - RANDOM ⺀ 乂*`,
    footer: `*🔥 THE DORRAT - BOT 🔥*`,
    buttons: buttons,
    headerType: 4,
  };
  conn.sendMessage(m.chat, buttonMessage, {quoted: m});
};

handler.command = /^(foxgirl|girlfox)$/i;
export default handler;
