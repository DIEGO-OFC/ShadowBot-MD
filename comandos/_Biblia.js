let WAMessageStubType = (await import(global.baileys)).default;
export async function before(m, {conn}) {
  if (!m.messageStubType || !m.isGroup) return;
  let usuario = `@${m.sender.split`@`[0]}`;
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
  if (m.messageStubType == 21) {
    await this.sendMessage(
      m.chat,
      {text: `*[✔️] ${usuario} CAMBIO EL NOMBRE  DEL GRUPO A:*\n\n*${m.messageStubParameters[0]}*`, mentions: [m.sender]},
      {quoted: fkontak}
    );
  } else if (m.messageStubType == 22) {
    await this.sendMessage(m.chat, {text: `*[👀] ${usuario} CAMBIO LA FOTO DEL GRUPO*`, mentions: [m.sender]}, {quoted: fkontak});
  } else if (m.messageStubType == 24) {
    await this.sendMessage(
      m.chat,
      {text: `*${usuario} LA NUEVA DESCRIPCIÓN DEL GRUPO ES*:\n\n${m.messageStubParameters[0]}`, mentions: [m.sender]},
      {quoted: fkontak}
    );
  } else if (m.messageStubType == 25) {
    await this.sendMessage(
      m.chat,
      {
        text: `[✳️] AHORA *${m.messageStubParameters[0] == "on" ? "SOLO LOS ADMINISTRADORES" : "MIEMBROS"}* PUEDEN EDITAR LA INFO DEL GRUPO`,
        mentions: [m.sender],
      },
      {quoted: fkontak}
    );
  } else if (m.messageStubType == 26) {
    await this.sendMessage(
      m.chat,
      {
        text: `[⚠️] GRUPO *${m.messageStubParameters[0] == "on" ? "CERRADO 🔒" : "ABIERTO 🔓"}*\n ${
          m.messageStubParameters[0] == "on" ? "SOLO LOS ADMINISTRADORES PUEDEN ESCRIBIR" : "YA PUEDEN ESCRIBIR TODOS"
        } 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊`,
        mentions: [m.sender],
      },
      {quoted: fkontak}
    );
  } else if (m.messageStubType == 29) {
    await this.sendMessage(
      m.chat,
      {
        text: `*[✅] @${m.messageStubParameters[0].split`@`[0]}Es administrador*\n\n*[⚠️]LE DIO ADMIN:* ${usuario}`,
        mentions: [`${m.sender}`, `${m.messageStubParameters[0]}`],
      },
      {quoted: fkontak}
    );
  } else if (m.messageStubType == 30) {
    await this.sendMessage(
      m.chat,
      {
        text: `[❌] @${m.messageStubParameters[0].split`@`[0]} YA NO ES ADMIN\n\n[⚠️]LE QUITO ADMIN: ${usuario}`,
        mentions: [`${m.sender}`, `${m.messageStubParameters[0]}`],
      },
      {quoted: fkontak}
    );
  } else if (m.messageStubType == 72) {
    await this.sendMessage(
      m.chat,
      {text: `[⏰] ${usuario} CAMBIO LA DURACION DE LOS MENSAJES A: *@${m.messageStubParameters[0]}*`, mentions: [m.sender]},
      {quoted: fkontak}
    );
  } else if (m.messageStubType == 123) {
    await this.sendMessage(m.chat, {text: `[✳️] ${usuario} DESACTIVO LOS MENSAJES TEMPORALES.`, mentions: [m.sender]}, {quoted: fkontak});
  } else {
    console.log({
      messageStubType: m.messageStubType,
      messageStubParameters: m.messageStubParameters,
      type: WAMessageStubType[m.messageStubType],
    });
  }
}
