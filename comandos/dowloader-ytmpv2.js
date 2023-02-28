import { 
    youtubedl,
    youtubedlv2 
} from '@bochilteam/scraper'

import fetch from 'node-fetch'


let handler = async (m, { conn, args, isPrems, isOwner }) => {
    if (!args[0]) return m.reply('Link?')
    const sections = [
	{
	title: "Select Type Media Here !",
	rows: [
	    {title: "Audio", rowId: `-getaud ${args[0]} audio`}
	]
    },
    {
	title: "Video",
	rows: [
	    {title: "1080p", rowId: `-getvid ${args[0]} 1080`},
{title: "720p", rowId: `-getvid ${args[0]} 720`},
{title: "480p", rowId: `-getvid ${args[0]} 480`},
{title: "360p", rowId: `-getvid ${args[0]} 360`}

	]
    },
   
]

const listMessage = {
  text: `›  ᴩʟᴇᴀꜱᴇ ꜱᴇʟᴇᴄᴛ yᴏᴜʀ ᴍᴇᴅɪᴀ ᴛyᴩᴇ...`,
  footer: wm,
  title: "『 - - - - - 𝚈𝚘𝚞𝚝𝚞𝚋𝚎 𝙳𝚘𝚠𝚗𝚕𝚘𝚊𝚍𝚎𝚛 - - - - - 』",
  buttonText: "Click Here !",
  sections
}

return conn.sendMessage(m.chat, listMessage, { quoted: m })
}

handler.help = ['ytd']
handler.tags = ['downloader']
handler.command = ['ytv2']
handler.exp = 3

export default handler
