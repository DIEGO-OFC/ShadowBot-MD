import fetch from "node-fetch";
import MessageType from '@adiwajshing/baileys'
let handler = async (m, { conn, text, usedPrefix, command, groupMetadata }) => {

  if (!text) throw `_Ingresa el nombre del paquete npm_\n_Ejemplo_ : ${usedPrefix}npmsearch whatsapp-web.js`;
let who 
 if (m.isGroup) who = m.mentionedJid[0] 
 else who = m.chat 
 let user = global.db.data.users 
 if (global.db.data.users[user] == undefined) 
 if (m.quoted?.sender) m.mentionedJid.push(m.quoted.sender); 
 if (!m.mentionedJid.length) m.mentionedJid.push(m.sender);
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
 m.reply(`${txt2}`);
   
};

handler.command = /(npmsh)/i;
export default handler;
