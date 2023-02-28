import ytdl from 'ytdl-core'
import fs from 'fs'

let handler = async (m, { conn, args, isPrems, isOwner }) => {

  const getRandom = (ext) => { return `${Math.floor(Math.random() * 10000)}${ext}`; };
  if (args.length === 0) { reply(`*Ingresa un enlace de YouTube.*`); return; }
  try {
      let urlYt = args[0];
      if (!urlYt.startsWith("http")) { reply(`Ingresa un link de youtube`); return; }
     let infoYt = await ytdl.getInfo(urlYt);
     let titleYt = infoYt.videoDetails.title;
     let randomName = getRandom(".mp4");
     const stream = ytdl(urlYt, { filter: (info) => info.itag == 22 || info.itag == 18,}).pipe(fs.createWriteStream(`./${randomName}`));
     console.log(" downloading ->", urlYt);
     await new Promise((resolve, reject) => { stream.on("error", reject); stream.on("finish", resolve); });
     let stats = fs.statSync(`./${randomName}`);
     let fileSizeInBytes = stats.size;
     let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
     console.log("Video downloaded ! tamaño: " + fileSizeInMegabytes);
     if (fileSizeInMegabytes <= 999) {
     conn.sendMessage(from, { video: fs.readFileSync(`./${randomName}`), caption: `${titleYt}`}, { quoted: m });
     } else {
     reply(`*El archivo es superior a 999 MB.*`);
     }
     fs.unlinkSync(`./${randomName}`);
  } catch (e) {
     reply(e.toString())
  }

}
handler.help = ['ytd']
handler.tags = ['downloader']
handler.command = ['ytdocumento']
handler.exp = 3

export default handler

