let handler = async (m, {text, conn}) => {
let name = "término de búsqueda";
let link = `https://www.bing.com/search?q=${encodeURIComponent(text)}`;
m.reply(link)
}
handler.command = ["bing"]
export default handler;
