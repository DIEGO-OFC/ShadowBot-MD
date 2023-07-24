let pajak = 0;

let handler = async (m, {conn, text}) => {
  let who;

  if (m.isGroup) who = m.mentionedJid[0];
  else who = m.chat;

  if (!who) throw `${ag}𝘿𝙀𝘽𝙀 𝘿𝙀 𝙀𝙏𝙄𝙌𝙐𝙀𝙏𝘼𝙍 𝘼𝙇 𝙐𝙎𝙐𝘼𝙍𝙄𝙊 *@tag*`;

  let txt = text.replace("@" + who.split`@`[0], "").trim();

  if (!txt) throw `[❕] Ingrese la cantidad de dólares`;

  if (isNaN(txt)) throw `${mg}𝙎𝙄𝙉 𝙎𝙄𝙈𝘽𝙊𝙇𝙊𝙎, 𝙎𝙊𝙇𝙊 𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙉𝙐𝙈𝙀𝙍𝙊𝙎\n\n𝙉𝙊 𝙎𝙔𝙈𝘽𝙊𝙇𝙎, 𝙅𝙐𝙎𝙏 𝙀𝙉𝙏𝙀𝙍 𝙉𝙐𝙈𝘽𝙀𝙍𝙎`;

  let dmt = parseInt(txt);

  let dolares = dmt;

  let pjk = Math.ceil(dmt * pajak);

  dolares += pjk;

  if (dolares < 1) throw `${mg}𝙀𝙇 𝙉𝙐𝙈𝙀𝙍𝙊 𝙈𝙄𝙉𝙄𝙈𝙊 𝙋𝘼𝙍𝘼 DOLARES 𝙀𝙎 *1*\n\n𝙏𝙃𝙀 𝙈𝙄𝙉𝙄𝙈𝙐𝙈 𝙉𝙐𝙈𝘽𝙀𝙍 𝙁𝙊𝙍 𝘿𝙄𝘼𝙈𝙊𝙉𝘿𝙎 𝙄𝙎 *1*`;

  let users = global.db.data.users;

  users[who].dolares += dmt;
  conn.sendMessage(m.chat, {text: `╭[ DOLARES 💵 ]⬣\n┃\n┃ღ *PARA:*\n┃ღ *${text}*\n┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n┃ღ *SE LE AÑADIÓ | NOW YOU HAVE*\n┃ღ *$${dmt} Dolare(s)* 💸\n┃\n╰━━━━━━━━━━━━━━⬣`, mentions: [who]}, {quoted: m})
};

handler.help = ["adddi <@user>"];

handler.tags = ["xp"];

handler.command = ["añadirdolares", "dardolares", "dardolares"];

handler.group = true;

handler.botAdmin = true;

handler.rowner = true;

export default handler;
