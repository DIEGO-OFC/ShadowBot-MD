import hispamemes from 'hispamemes'

let handler = async (m, { conn, usedPrefix, command }) => {
	const meme = await hispamemes.meme()
    await conn.sendFile(m.chat, meme, '', '', m)
    
}
handler.help = ['hispamemes']
handler.tags = ['internet']
handler.command = ['meme', 'memes'] 
handler.diamond = true

export default handler

