import fetch from 'node-fetch' 
 let handler = async (m, {conn}) => { 
 let res = await fetch(`https:\/\/fifa15.content.easports.com\/fifa\/fltOnlineAssets\/8D941B48-51BB-4B87-960A-06A61A62EBC0\/2015\/fut\/items\/images`) 
  
 let json = await res.json() 
  
 conn.sendMessage(m.chat, {image: {url: json.message }}, {quoted: m}) 
 } 
 handler.help = ['fish'] 
 handler.command = ['cr7', 'cris'] 
 export default handler 




/*import axios from 'axios'
var shadow = async(m, { conn, usedPrefix, command }) => {
let cristiano = (await axios.get(`https://raw.githubusercontent.com/DIEGO-OFC/DORRAT-BOT-MD/master/galeria/JSON/CristianoRonaldo.json`)).data  
let ronaldo = await cristiano[Math.floor(cristiano.length * Math.random())]
let caption = `${wm3}\n\nSIUUUU`
conn.sendFile(m.chat, ronaldo, "cr7.jpg", caption, m);
}
shadow.help = ['cristianoronaldo', 'cr7']
shadow.tags = ['internet']
shadow.command = /^(cristianoronaldo|cr7)$/i
export default shadow*/