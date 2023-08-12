import { xpRange } from "../lib/levelling.js";
import { createHash } from "crypto";
import PhoneNumber from "awesome-phonenumber";

var handler = async (m, { conn, command }) => {
  const who =
    m.mentionedJid && m.mentionedJid[0]
      ? m.mentionedJid[0]
      : m.fromMe
      ? conn.user.jid
      : m.sender;
  const sender = m.sender;
  const mentionedJid = m.mentionedJid;
  const user = mentionedJid[0] || sender;

  // Check if the user is registered in the database
  if (!global.db.data.users.hasOwnProperty(user)) {
    throw new Error(`El usuario que está mencionando no está registrado en mi base de datos`);
  }

  // Get the user's data from the database
  const data = global.db.data.users[user];

  // Format the user's data
  const name = data.name || "";
  const phone = PhoneNumber("+" + user.replace("@s.whatsapp.net", "")).getNumber("international");
  const link = `wa.me/${user.split`@`[0]}`;
  const age = data.age || "";
  const level = data.level;
  const role = data.role;
  const dollars = data.dolares;
  const xp = xpRange(level, global.multiplier)[0];
  const diamonds = data.limit;
  const registered = data.registered;
  const premium = global.prems.includes(user.split`@`[0]);
  const sn = createHash("md5").update(user).digest("hex");
  let pp = await conn
    .profilePictureUrl(who, "image")
    .catch((_) => "https://telegra.ph/file/9b1353deceded7f387713.jpg");
  // Send the profile message
  const message = `
    * 🔥 NOMBRE:* ${name}
    * #️⃣ NUMERO:* ${phone}
    * 🔗 LINK:* ${link}
    * 💌 NIVEL:* ${level}
    * ⚡ RANGO:* ${role}
    * 💸 DOLARES:* ${dollars}
    * 🎉 EXPERIENCIA/XP:* ${xp}
    * 💎 DIAMANTES:* ${diamonds}
    * 📦 REGISTRADO:* ${registered}
    * 💳 PREMIUM:* ${premium}
  `;
  conn.sendMessage(m.chat, {
    text: message,
    image: {
      url: pp,
    },
    contextInfo: {
      mentionedJid: [sender],
      externalAdReply: {
        title: `RPG - PERFIL`,
        sourceUrl: "http://paypal.me/DorratBotOficial",
        mediaType: 1,
        showAdAttribution: true,
        //thumbnailUrl: "https://telegra.ph/file/7ec5032386dfe878f99ab.jpg",
        thumbnailUrl: pp,
      },
    },
  });

  // Send the serial number message
  const snMessage = `*❕ NUMERO DE SERIE: ${sn}*`;
  conn.sendMessage(user, { text: snMessage });
};

handler.help = ["profile [@user]"];
handler.tags = ["xp"];
handler.command = /^perfil|profile?$/i;

export default handler;
