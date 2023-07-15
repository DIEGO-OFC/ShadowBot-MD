import fetch from "node-fetch";
let handler = async (m, {conn, text, args, command, usedPrefix}) => {
  if (!text) throw `_Ingresa el nombre del paquete npm_\n_Ejemplo_ : ${usedPrefix}npmsearch whatsapp-web.js`;
  let res = await fetch(`http://registry.npmjs.com/-/v1/search?text=${text}`);
  let {objects} = await res.json();
  if (!objects.length) return m.reply(`Paquete "${text}" no encontrado`);
  let bg = "./Menu2.jpg";
  let txt2 = objects.map(({package: pkg}) => {
    return `*◦ Paquete:* ${pkg.name || "-"}
*🔍 Version:* ${pkg.version || "-"}
*🔗 Enlace:* ${pkg.links.npm || "-"}
*📗 Descripcion:* ${pkg.description || "-"}
*📌 KeyWords:* ${pkg.keywords || "-"}
*📦 Publicado:* ${pkg.date}
*👥 Username:* ${pkg.publisher.username || "-"}
*💳 Gmail:* ${pkg.publisher.email || "-"}
*🖊️ HomePage:* ${pkg.links.homepage || "-"} `;
  }).join`\n\n`;
  m.reply(`${txt2}`)
};

handler.command = /(npmsh)/i;
export default handler;
