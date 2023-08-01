
import axios from 'axios'
var handler = async (m, {conn, args, command, usedPrefix}) => {
  const r = await axios.get("https://api.lolhuman.xyz/api/pornhub?apikey=GataDios&url=${text}")
  const ress = r.data.result
  const img = r.data.result.thumb;
  const a = `*Titulo :* ${ress.title}
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
};
handler.command = /^(porndl)$/i;
export default handler
