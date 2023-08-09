import fetch from "node-fetch";
let handler = async (m, {conn}) => {
  try {
    let res = await fetch("https://nekos.life/api/v2/img/meow");
    let json = await res.json();
    let img = await json.url;
    let caption = `
_©The Ziraxbot - Bot_
`.trim();
    conn.sendFile(m.chat, img, "cat.jpg", caption, m);
  } catch (e) {
    console.log(e);
    throw "*Error!*";
  }
};
handler.help = ["cat"];
handler.tags = ["random"];
handler.command = ["cat", "gato"];
handler.fail = null;
export default handler;
