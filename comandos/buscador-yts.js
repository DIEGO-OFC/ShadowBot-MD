import yts from "yt-search";

function ConvertMiles(number) {
  const exp = /(\d)(?=(\d{3})+(?!\d))/g;
  const rep = "$1.";
  let arr = number.toString().split(".");
  arr[0] = arr[0].replace(exp, rep);
  return arr[1] ? arr.join(".") : arr[0];
}

let handler = async (m, { conn, text }) => {
  if (!text)
    throw "*[❗𝐈𝐍𝐅𝐎❗] 𝙸𝙽𝚂𝙴𝚁𝚃𝙴 𝙴𝙻 𝙽𝙾𝙼𝙱𝚁𝙴 𝙳𝙴 𝙰𝙻𝙶𝚄𝙽 𝚅𝙸𝙳𝙴𝙾 𝙾 𝙲𝙰𝙽𝙰𝙻 𝙳𝙴 𝚈𝙾𝚄𝚃𝚄𝙱𝙴*";
  let response = await yts(text);
  let tes = response.all;
  let txt_search = response.all
    .map((resultado) => {
      switch (resultado.type) {
        case "video":
          return `
*Titulo ∙* ${resultado.title}_*
*Link ∙* ${resultado.url}
*Duracion ∙* ${resultado.timestamp}
*Publicado ∙* ${resultado.ago}
*Vistas ∙* ${ConvertMiles(resultado.views)}
*Autor ∙* ${resultado.author.name}
*Canal ∙* ${resultado.author.url}`;
      }
    })
    .filter((v) => v)
    .join("\n\n• • ◕◕══════════════◕◕ • •\n\n");
  conn.sendMessage(
    m.chat,
    { image: { url: tes[0].image }, caption: txt_search },
    { quoted: m }
  );
};
handler.help = ["", "search"].map((v) => "yts" + v + " < Busqueda >");
handler.tags = ["tools"];
handler.command = /^yts(earch)?$/i;
export default handler;
