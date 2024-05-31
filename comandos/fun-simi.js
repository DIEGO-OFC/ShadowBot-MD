import fetch from "node-fetch";
let handler = async (m, {text, usedPrefix, command}) => {
  if (!text) {
    conn.reply(
      m.chat,
      `Hola *@${m.sender.split`@`[0]}* Quieres charlar un rato? \nResponde con *${usedPrefix + command}* (tu mensaje) \n\n*_📌 Ejemplo :_* *${
        usedPrefix + command
      }* Hola bot`,
      m,
      {mentions: [m.sender]}
    );
    throw false;
  }
   let gpt = await fetch(`https://delirius-api-oficial.vercel.app/api/simi?text=${text}`)
let res = await gpt.json()
await m.reply(res.data.message)
};
handler.help = ["simi", "bot"].map((v) => v + " <teks>");
handler.tags = ["fun"];
handler.command = /^((sim)?simi|bot|alexa|cortana)$/i;
handler.register = true;

export default handler;
