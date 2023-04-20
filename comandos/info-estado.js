import {cpus as _cpus, totalmem, freemem} from "os";
import {sizeFormatter} from "human-readable";
let format = sizeFormatter({
  std: "JEDEC", // 'SI' (default) | 'IEC' | 'JEDEC'
  decimalPlaces: 2,
  keepTrailingZeroes: false,
  render: (literal, symbol) => `${literal} ${symbol}B`,
});
let handler = async (m, {conn}) => {
  const used = process.memoryUsage();

  let _uptime = process.uptime() * 1000;
  let uptime = clockString(_uptime);
  let taguser = "@" + m.sender.split("@s.whatsapp.net")[0];
  let pp = "./menu2.jpg";
  let db = `╔═[ *∆.𝑫𝑶𝑹𝑹𝑯∆𝑻-𝑩𝑶𝑻.∆* ]
║ *➤ 𝙷𝙾𝙻𝙰 ${taguser}*
║
║ *=➢ 🤖 TIEMPO ACTIVO:* ${uptime}
║ *=➢ 👑 CREADOR: DIEGO-OFC*
║ *=➢ 🔗 PAGINA OFICIAL:* dorrat-bot-oficial.ml
╚════════════════`.trim();
  let infobt = `
 *≡ S E R V E R*
*🔴 RAM DEL NODO:* ${format(totalmem() - freemem())} / ${format(totalmem())}
*🔵 RAM DEL BOT:* ${format(freemem())}
*≡  NodeJS Uso de memoria*
${
  "```" +
  Object.keys(used)
    .map((key, _, arr) => `${key.padEnd(Math.max(...arr.map((v) => v.length)), " ")}: ${format(used[key])}`)
    .join("\n") +
  "```"
}
`.trim();
  let buttons = [{buttonId: `#menu`, buttonText: {displayText: "𝙼𝙴𝙽𝚄"}, type: 1}];
  let buttonMessage = {
    image: pp,
    caption: db,
    footer: infobt,
    buttons: buttons,
    headerType: 4,
    mentions: [m.sender],
  };
  conn.sendMessage(m.chat, buttonMessage, {quoted: m});

  /*conn.sendButton(m.chat, db, infobt, pp,
[
['𝙼𝙴𝙽𝚄', `#menusimple`]], m)*/
};
handler.help = ["estado"];
handler.tags = ["main"];
handler.command = /^(estado|status|estate|state|stado|stats)$/i;

export default handler;

function clockString(ms) {
  let d = isNaN(ms) ? "--" : Math.floor(ms / 86400000);
  let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000) % 24;
  let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
  let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
  return [`\n║ *=➢ ⏱️ ` + d, " Día(s)* ", `\n║ *=➢ ⌚ ` + h, " Hora(s)* ", `\n║ *=➢ 🕰️ ` + m, " Minuto(s)* ", `\n║ *=➢ ⏲️ ` + s, " Segundo(s)* "]
    .map((v) => v.toString().padStart(2, 0))
    .join("");
}
