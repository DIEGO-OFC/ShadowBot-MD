import { youtubedl, youtubedlv2 } from '@bochilteam/scraper';

let handler = async (m, { conn, text, args, isPrems, isOwner, usedPrefix, command }) => {
  if (!args || !args[0]) throw `✳️ Example :\n${usedPrefix + command} https://youtu.be/YzkTFFwxtXI`;
  if (!args[0].match(/youtu/gi)) throw `❎ Verify that it is a YouTube link.`;

 
  
        var data = await youtubedl(text)
        var url = await data.audio['128kbps'].download()
        var hasil = await getBuffer(url)
        await conn.sendMessage(from, {
          document: hasil,
          mimetype: "audio/mp4",
          fileName: `${data.title}.mp3`,
          jpegThumbnail: fs.readFileSync('./sticker/thumb.jpg'),
        }, { quoted: msg })
        await sleep(500)
        await conn.sendMessage(from, { audio: hasil, mimetype: "audio/mp4" }, { quoted: msg })}
handler.help = ['ytmp3 <url>']
handler.tags = ['downloader']
handler.command = ['ytmp3', 'yta'] 

export default handler