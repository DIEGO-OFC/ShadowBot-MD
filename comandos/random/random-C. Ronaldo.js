
import axios from 'axios'
import fetch from 'node-fetch'
var shadow = async(m, { conn, usedPrefix, command }) => {
//let cristiano = (await fetch(`https://raw.githubusercontent.com/DIEGO-OFC/DORRAT-BOT-MD/master/galeria/JSON/CristianoRonaldo.json`)).data 
let cristiano = (await axios.get(`https://gist.githubusercontent.com/felipecsl/63e16660a58071250b51/raw/b32e55d90ac24504c3499d6f9fd33d3f1f608194/cristiano_ronaldo.json`)).data  
let ronaldo = await cristiano[Math.floor(cristiano.length * Math.random())]
let caption = `${wm3}\n\nSIUUUU`
conn.sendFile(m.chat, ronaldo, "cr7.jpg", caption, m);
}
shadow.help = ['cristianoronaldo', 'cr7']
shadow.tags = ['internet']
shadow.command = /^(cristianoronaldo|cr7)$/i
export default shadow