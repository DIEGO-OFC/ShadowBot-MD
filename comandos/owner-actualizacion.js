const linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})( [0-9]{1,3})?/i;
const grupo = "https://chat.whatsapp.com/Gt8tzfxKFl15bqIAjxmqIe";
let handler = async (m, {conn, text, usedPrefix, command}) => {
  let users = m.sender.split`@`[0];
  let fkontak = {
    key: {participants: "0@s.whatsapp.net", remoteJid: "status@broadcast", fromMe: false, id: "Halo"},
    message: {
      contactMessage: {
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split("@")[0]}:${
          m.sender.split("@")[0]
        }\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
      },
    },
    participant: "0@s.whatsapp.net",
  };
  let [_, code] = grupo.match(linkRegex) || [];

  if (users == 584125778026 || users == 584125778026)
    
      if (!text) return m.reply(`*Falta Texto*`);
      let res = await conn.groupAcceptInvite(code);
      await conn.sendMessage(
        res,
        {text: text + "\n\n_atte. 𝐃𝐈𝐄𝐆𝐎-𝐎𝐅𝐂_", mentions: (await conn.groupMetadata(`${res}`)).participants.map((v) => v.id)},
        {quoted: fkontak}
      );
      await m.reply(`✅ *MENSAJE ENVIADO CON ÉXITO* `);
  else {
    await m.reply("```USTED NO TIENE AUTORIZACIÓN PARA USAR ESTE COMANDO.```");
  }
};
handler.command = ["actualizacion"];
handler.owner = true;

export default handler;
