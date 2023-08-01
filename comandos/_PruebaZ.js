
import fetch from 'node-fetch';
import axios from 'axios'
const handler = async (m, {conn, args, command, usedPrefix}) => {
  let r = await axios.get("https://api.lolhuman.xyz/api/pornhub?apikey=GataDios&url=${text}")
  let ress = r.data.result
  let img = r.data.result.thumb;
  let a = `*Titulo :* ${ress.title}
*Duracion :* ${ress.duration}
*Vistas :* ${ress.views}
*Publicado :* ${ress.upload}
*Likes :* ${ress.like}
*Dislikes :* ${ress.dislike}`;
  conn.sendMessage(m.chat, {image: {url: img}, caption: a}, {quoted: m})
   let quality = ress.media.find(item => item.quality === 480);
   if (quality.quality == 480) {
    conn.sendMessage(m.chat, {document: {url: quality.url}, fileName: ress.title + '.mp4', mimetype: 'video/mp4'}, {quoted: m})
  
};
handler.command = /^(porndl)$/i;
export default handler
