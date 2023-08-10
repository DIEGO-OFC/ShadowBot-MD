import fetch from "node-fetch";
import akaneko from "akaneko";
let handler = async (m, { conn, command }) => {
    const Neko = await akaneko.neko(); 
   const caption = `*乂 ⺀ ANIME - NEKO ⺀ 乂*`
   await conn.sendFile(m.chat, Neko, `zirax.jpg`, caption, m);
}
handler.command = /^(neko)$/i;
handler.tags = ["anime"];
handler.help = ["neko"];
handler.limit = 3;
export default handler;
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}
