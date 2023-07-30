import hispamemes from "hispamemes";
import fetch from "node-fetch'
let handler = async (m, {command, conn}) => {
    let res = await fetch(global.API('https://some-random-api.ml', '/meme'));
   if (!res.ok) throw await res.text();
   let json = await res.json();
   if (!json.image) throw 'Err!';
   conn.sendFile(m.chat, json.image, 'meme.png', json.caption, m) 
 
};
handler.help = ["meme"];
handler.tags = ["random"];
handler.command = /^(meme|memes)$/i;
handler.limit = 3;
export default handler;
