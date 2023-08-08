import fetch from "node-fetch";
let handler = async (m, {conn, text}) => {
  try {
    let res = await fetch("https://nekos.life/api/v2/img/woof");
    let json = await res.json();
    let img = await json.url;
    let caption = `
_©The DorrAt - Bot_
`.trim();
    conn.sendFile(m.chat, img, "dog.jpg", caption, m);
  } catch (e) {
    console.log(e);
    throw "*Error!*";
  }
};
handler.help = ["dog"];
handler.tags = ["animals"];
handler.command = ["dog", "perro"];
handler.fail = null;
export default handler;
