//creado por https://github.com/DIEGO-OFC

import axios from 'axios'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
let handler = async (m, { text, conn, args, command, usedPrefix }) => {

let fnaf1 = `https://www.mediafire.com/file/5y7jq06rb8i3vl1/Fnaf_1.apk/file`
let fnaf2 = `https://www.mediafire.com/file/io8lmvb8z0gsrqx/Fnaf_2.apk/file`
let fnaf3 = `https://www.mediafire.com/file/t3xlmeoqhb63vub/Fnaf3.apk/file`
let fnaf4 = `https://www.mediafire.com/file/aefg3xafqctvmrq/Fnaf4.apk/file`
let fnaf5 = `https://www.mediafire.com/file/2a6nfr3bly2voy6/FNAF_Sister_Location_por_Tomatito22.apk/file`
let fnaf6 = `https://www.mediafire.com/file/2bk1h9bnhgouen7/Fnaf_6.apk/file`
let ucn = `https://www.mediafire.com/file/jb17ec412gv91q6/UCN_v1.11.apk/file`
const sections = [
{
title: `JUEGOS 🎮`,
rows: [
{title: "FNAF 1", description: "DESCARGAR FIVE NIGHTS AT FREDDY'S 1", rowId: `${usedPrefix}mediafire ${fnaf1}`},
{title: "FNAF 2", description: "DESCARGAR FIVE NIGHTS AT FREDDY'S 2", rowId: `${usedPrefix}mediafire ${fnaf2}`},
{title: "FNAF 3", description: "DESCARGAR FIVE NIGHTS AT FREDDY'S 3", rowId: `${usedPrefix}mediafire ${fnaf3}`},
{title: "FNAF 4", description: "DESCARGAR FIVE NIGHTS AT FREDDY'S 4", rowId: `${usedPrefix}mediafire ${fnaf4}`},
{title: "FNAF 5", description: "DESCARGAR FIVE NIGHTS AT FREDDY'S SISTER LOCATION", rowId: `${usedPrefix}mediafire ${fnaf5}`},
{title: "FNAF 6", description: "DESCARGAR FIVE NIGHTS AT FREDDY'S 6", rowId: `${usedPrefix}mediafire ${fnaf6}`},
{title: "FNAF UCN", description: "DESCARGAR FIVE NIGHTS AT FREDDY'S UCN", rowId: `${usedPrefix}mediafire 3{ucn}`},
{title: "/script", description: "muestra el github del bot", rowId: `${usedPrefix}sc`},
]}, ]
const listMessage = {
text: wm3,
footer: `DESCARGAS MEDIAFIRE`,
title: null,
buttonText: "seleciona lo que quieres descargar", 
sections }

 conn.sendMessage(m.chat, listMessage, {quoted: m})	
}

handler.command = /^mediafiresearch$/i
export default handler
