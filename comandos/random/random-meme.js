//import meme from "../lib/memes.js";

var handler = async (m, {conn}) => {
  const memeGen = memexd();
  await conn.sendFile(m.chat, memeGen, "", "", m);
};
handler.help = ["memes"];
handler.tags = ["internet"];
handler.command = ["meme", "memes"];
handler.diamond = true;

export default handler;
