import yts from "yt-search";

/**
 *
 * @param {string} query
 * @returns
 */
async function search(query, options = {}) {
  const search = await yts.search({ query, hl: "es", gl: "ES", ...options });
  return search.videos;
}

function ConvertMiles(number) {
  const exp = /(\d)(?=(\d{3})+(?!\d))/g;
  const rep = "$1.";
  let arr = number.toString().split(".");
  arr[0] = arr[0].replace(exp, rep);
  return arr[1] ? arr.join(".") : arr[0];
}

let handler = async (m, { conn, text, args }) => {
  if (!text)
    throw "*[❗𝐈𝐍𝐅𝐎❗] 𝙸𝙽𝚂𝙴𝚁𝚃𝙴 𝙴𝙻 𝙽𝙾𝙼𝙱𝚁𝙴 𝙳𝙴 𝙰𝙻𝙶𝚄𝙽 𝚅𝙸𝙳𝙴𝙾 𝙾 𝙲𝙰𝙽𝙰𝙻 𝙳𝙴 𝚈𝙾𝚄𝚃𝚄𝙱𝙴*";
  try {
    const list = await search(args.join(" "));
    let tex = `*YouTube Search*\n`;
    let n = 1;
    for (let x of list) {
      tex += `\n*${n}. ${x.title}*\n*Canal ∙* ${x.author.name}\n*Duracion ∙* ${
        x.timestamp
      }\n*Vistas ∙* ${ConvertMiles(x.views)}\n*Publicado ∙* ${
        x.ago
      }\n*Link ∙* ${x.url}\n`;
      n++;
    }
    conn.sendMessage(
      m.chat,
      { image: { url: list[0].image }, caption: tex },
      { quoted: m }
    );
  } catch (error) {
    m.reply(error);
    console.log(error);
  }
};
handler.help = ["", "search"].map((v) => "yts" + v + " < Busqueda >");
handler.tags = ["tools"];
handler.command = /^yts(earch)?$/i;
export default handler;
