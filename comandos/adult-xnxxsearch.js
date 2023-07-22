import fetch from "node-fetch";
let handler = async (m, {text, usedPrefix, command}) => {
  if (!text) throw `uhm.. mau cari apa?\n\nContoh: ${usedPrefix + command} bokep🐒`;
if (text.includes(`${antiyaoi}`)) return m.reply('${sinyaoi}')
  try {
    let res = await xnxxsearch(text);
    let json = res.result;
    let cap = `Hasil Pencarian Dari ${text}\n`;
    for (let v of json) {
      cap += `• *Title :* ${v.title}
• *Info :* ${v.info}
• *Link :* ${v.link}
`;
      cap += "\n" + "••••••••••••••••••••••••" + "\n";
    }
    m.reply(cap);
  } catch (e) {
    console.error(e);
    throw e;
  }
};
handler.help = ["xnxxsearch"].map((v) => v + " <query>");
handler.tags = ["downloader", "premium"];
handler.command = /^xnxxsearch|xnxxs$/i;

handler.register = false;
handler.premium = true;

export default handler;

async function xnxxsearch(query) {
  return new Promise((resolve, reject) => {
    const baseurl = "https://www.xnxx.com";
    fetch(`${baseurl}/search/${query}/${Math.floor(Math.random() * 3) + 1}`, {method: "get"})
      .then((res) => res.text())
      .then((res) => {
        let $ = cheerio.load(res, {xmlMode: false});
        let title = [];
        let url = [];
        let desc = [];
        let results = [];
        $("div.mozaique").each(function (a, b) {
          $(b)
            .find("div.thumb")
            .each(function (c, d) {
              url.push(baseurl + $(d).find("a").attr("href").replace("/THUMBNUM/", "/"));
            });
        });
        $("div.mozaique").each(function (a, b) {
          $(b)
            .find("div.thumb-under")
            .each(function (c, d) {
              desc.push($(d).find("p.metadata").text());
              $(d)
                .find("a")
                .each(function (e, f) {
                  title.push($(f).attr("title"));
                });
            });
        });
        for (let i = 0; i < title.length; i++) {
          results.push({title: title[i], info: desc[i], link: url[i]});
        }
        resolve({code: 200, status: true, result: results});
      })
      .catch((err) => reject({code: 503, status: false, result: err}));
  });
}
