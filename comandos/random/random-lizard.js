import fetch from "node-fetch";
let handler = async (m, {conn}) => {
  try {
    let res = await fetch("https://nekos.life/api/v2/img/lizard");
    let json = await res.json();
    let img = await json.url;
    let caption = `${wm}`
    conn.sendFile(m.chat, img, "lizard.jpg", caption, m);
  } catch (e) {
    console.log(e);
    throw "*Error!*";
  }
};
handler.help = ["lizard"];
handler.tags = ["random"];
handler.command = ["lizard", "lagarto"];
handler.fail = null;
export default handler;
