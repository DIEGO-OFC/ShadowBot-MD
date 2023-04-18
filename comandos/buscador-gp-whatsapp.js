import fetch from "node-fetch";
let handler = async (m, {text, conn}) => {
  if (!text) throw `*⚠️ 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙴𝙻 𝙽𝙾𝙼𝙱𝚁𝙴 𝙳𝙴 𝙻𝙰 𝙰𝙿𝙿 𝙾 𝙰𝙿𝙺 𝚀𝚄𝙴 𝙳𝙴𝚂𝙴𝙰 𝙱𝚄𝚂𝙲𝙰𝚁*`;

  let json = await fetch(`https://dhn-api.herokuapp.com/api/search/whatsapp-group?query=${text}&apikey=4709b3d201416e985351`);
  let jsons = await json.json();
  let caption = `*⊜ RESULTADOS🔎*\n`;
  for (let x of jsons.result) {
    caption += `
*• 🏷 Nombre:* ${x.data_title}
*• 🔗 Link:* _${x.data_url}_\n───
`;
  }
  await conn.reply(m.chat, caption, m);
};
handler.tags = ["search"];
handler.command = handler.help = ["groupsearch"];
handler.register = true;
export default handler;
