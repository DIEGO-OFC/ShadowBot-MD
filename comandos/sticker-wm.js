import {addExif} from "../lib/sticker.js";
var handler = async (m, {conn, text}) => {
  if (!m.quoted) throw "*[❌] Responda al sticker con el nombre que le quiera poner*";
  let stiker = false;
  try {
    let [packname, ...author] = text.split("|");
    author = (author || []).join("|");
    let mime = m.quoted.mimetype || "";
    if (!/webp/.test(mime)) throw "*[❌] Responda al sticker con el nombre que le quiera poner*";
    let img = await m.quoted.download();
    if (!img) throw "*[❌] Responda al sticker con el nombre que le quiera poner*";
    stiker = await addExif(img, packname || "", author || "");
  } catch (e) {
    console.error(e);
    if (Buffer.isBuffer(e)) stiker = e;
  } finally {
    if (stiker) conn.sendFile(m.chat, stiker, "wm.webp", "", m, false, {asSticker: true});
    else
      throw "*[⚠️] OCURRIO UN ERROR.*";
  }
};
handler.help = ["wm <packname>|<author>"];
handler.tags = ["sticker"];
handler.command = /^wm$/i;
export default handler;
