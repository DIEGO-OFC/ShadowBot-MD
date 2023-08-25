
import axios from 'axios'
import fetch from 'node-fetch'
var shadow = async(m, { conn, usedPrefix, command }) => {
let cristiano = (await axios.get(`https://raw.githubusercontent.com/Guru322/api/Guru/BOT-JSON/CristianoRonaldo.json`)).data  
let ronaldo = await cristiano[Math.floor(cristiano.length * Math.random())]
let caption = `${wm3}\n\nSIUUUU`
conn.sendFile(m.chat, ronaldo, "cr7.jpg", caption, m);
}
shadow.help = ['cristianoronaldo', 'cr7']
shadow.tags = ['internet']
shadow.command = /^(cristianoronaldo|cr7)$/i
export default shadow