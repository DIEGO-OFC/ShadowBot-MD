import axios from 'axios'
var shadow = async(m, { conn, usedPrefix, command }) => {
let cristiano = (await axios.get(`https://raw.githubusercontent.com/DIEGO-OFC/DORRAT-BOT-MD/master/galeria/JSON/CristianoRonaldo.json`)).data  
let ronaldo = await cristiano[Math.floor(cristiano.length * Math.random())]
let caption = `${wm3}\n\nSIUUUU`
conn.sendFile(m.chat, cristiano, "cr7.jpg", caption, m);
}
shadow.help = ['cristianoronaldo', 'cr7']
shadow.tags = ['internet']
shadow.command = /^(cristianoronaldo|cr7)$/i
export default shadow