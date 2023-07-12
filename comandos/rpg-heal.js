import {join} from "path";
import {promises} from "fs";

let handler = async (m, {conn, args, usedPrefix, __dirname}) => {
  const fkontak = {
    key: {
      participants: "0@s.whatsapp.net",
      remoteJid: "status@broadcast",
      fromMe: false,
      id: "Halo",
    },
    message: {
      contactMessage: {
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split("@")[0]}:${
          m.sender.split("@")[0]
        }\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
      },
    },
    participant: "0@s.whatsapp.net",
  };

  let imgr = flaaa.getRandom();
  let _package = JSON.parse(await promises.readFile(join(__dirname, "../package.json")).catch((_) => ({}))) || {};
  let user = global.db.data.users[m.sender];

  if (user.health >= 100)
    return m.reply(`
      𝚃𝚄 𝚂𝙰𝙻u𝙳 𝙴𝚂𝚃𝙰 𝙻𝙻𝙴𝙽𝙰 ❤️`)
      

  const heal = 40 + user.cat * 4;
  let count = Math.max(1, Math.min(Number.MAX_SAFE_INTEGER, (isNumber(args[0]) && parseInt(args[0])) || Math.round((90 - user.health) / heal))) * 1;

  if (user.potion < count)
    return m.reply(`
${htki} 𝚂𝙸𝙽 𝙿𝙾𝙲𝙸𝙾𝙽𝙴𝚂 ${htka}
𝙽𝙴𝙲𝙴𝚂𝙸𝚃𝙰𝚂 ${count - user.potion} 𝙿𝙾𝙲𝙸𝙾𝙽 🥤 𝙿𝙰𝚁𝙰 𝙲𝚄𝚁𝙰𝚁𝚃𝙴
𝚂𝙰𝙻𝚄𝙳 » ${user.health} ❤️
𝙿𝙾𝙲𝙸𝙾𝙽 » ${user.potion} 🥤
𝙲𝙾𝙼𝙿𝚁𝙰 𝙿𝙾𝙲𝙸𝙾𝙽 𝙾 𝙿𝙸𝙳𝙴𝙻𝙴 𝙰 𝙰𝙻𝙶𝚄𝙸𝙴𝙽 𝚀𝚄𝙴 𝚃𝙴 𝚃𝚁𝙰𝙽𝚂𝙵𝙸𝙴𝚁𝙰`)


  user.potion -= count * 1; //1 potion = count (1)
  user.health += heal * count;

  conn.sendButton(
    m.chat,
    `*━┈━《 ✅ 𝚂𝙰𝙻𝚄𝙳 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙰 》━┈━*`,
    `𝙴𝚇𝙸𝚃𝙾𝚂𝙰𝙼𝙴𝙽𝚃𝙴 𝚄𝚂𝙾 ${count} 𝙳𝙴 𝙿𝙾𝙲𝙸𝙾𝙽 🥤 𝙿𝙰𝚁𝙰 𝚁𝙴𝙲𝚄𝙿𝙴𝚁𝙰𝚁 𝚂𝚄 𝚂𝙰𝙻𝚄𝙳\n\𝚗𝚂𝙰𝙻𝚄𝙳 » ${user.health} ❤️`,
    imgr + "SALUD COMPLETADA",
    [[`𝙰𝚅𝙴𝙽𝚃𝚄𝚁𝙰𝚁 🏕️`, `${usedPrefix}adventure`]],
    fkontak,
    m
  );
};

handler.help = ["heal"];
handler.tags = ["rpg"];
handler.command = /^(heal|curar)$/i;

export default handler;

function isNumber(number) {
  if (!number) return number;
  number = parseInt(number);
  return typeof number == "number" && !isNaN(number);
}
