let handler = async (m, {usedPrefix}) => {
  let who;
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender;
  else who = m.sender;
  let name = conn.getName(who);
  let db = await conn.profilePictureUrl(who, "image").catch((_) => "https://telegra.ph/file/e01c177fb1c61f453c659.jpg");
  let bank = `╭━━━━ 𝐁𝐀𝐍𝐂𝐎 🏦 ━━━╾•
❍ *Nombre:* ${name}
❍ *Diamantes:* ${global.db.data.users[who].limit} 💎
❍ *Tokens:* ${global.db.data.users[who].joincount} ☯️
❍ *Dólares:* $${global.db.data.users[who].dolares} 💸
╰━━━━━━━━━━━━╾•`.trim();
  conn.sendMessage(
    m.chat,
    {
      image: {
        url: "https://telegra.ph/file/e01c177fb1c61f453c659.jpg",
      },
      caption: bank,
      contextInfo: {
        mentionedJid: [m.sender],
        externalAdReply: {
          title: `RPG - BANK`,
          sourceUrl: "http://paypal.me/DorratBotOficial",
          mediaType: 1,
          showAdAttribution: true,
          thumbnailUrl: "https://telegra.ph/file/e01c177fb1c61f453c659.jpg",
        },
      },
    },
    {
      quoted: m,
    }
  );
};
handler.help = ["bal"];
handler.tags = ["xp"];
handler.command = ["bal", "diamantes", "diamond", "balance", "banco"];
export default handler;
