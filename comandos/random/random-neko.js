import fetch from "node-fetch";
import akaneko from "akaneko";
let handler = async (m, {conn, command}) => {
    const Neko = await akaneko.neko(); 
   await conn.sendFile(m.chat, memeGen, "", "", m);
handler.command = /^(neko)$/i;
handler.tags = ["anime"];
handler.limit = 3;
handler.help = ["neko"];
export default handler;
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}
