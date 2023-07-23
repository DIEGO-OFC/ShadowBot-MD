
import { wallpaper } from '@bochilteam/scraper' 
 let handler = async (m, { conn, text, usedPrefix, command }) => { 
 if (!text) throw `*[❌] BUSQUE UNA IMÁGEN, EJEMPLO DE USO: ${usedPrefix + command} Minecraft*` 
 const res = await wallpaper(text) 
 const img = res[Math.floor(Math.random() * res.length)] 
 conn.sendFile(m.chat, img, 'error.jpg', `*RESULTADO DE: ${text}*`, m) 
 } 
 handler.help = ['', '2'].map(v => 'wallpaper' + v + ' <query>') 
 handler.tags = ['downloader'] 
 handler.command = /^(wallpaper2?)$/i 
 export default handler
