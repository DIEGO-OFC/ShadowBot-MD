import axios from 'axios'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
let handler = async (m, { text, conn, args, command, usedPrefix }) => {
const sections = [
{
title: `𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐂𝐈𝐎𝐍`,
rows: [
{title: "/grupos", description: "muestra los grupos del bot", rowId: `${usedPrefix}grupos`},
{title: "/estado", description: "para ver el estado del bot", rowId: `${usedPrefix}estado`},
{title: "/terminos", description: "para leer los términos y condiciones del bot", rowId: `${usedPrefix}términos`},
{title: "/instalarbot", description: "información para instalar al bot", rowId: `${usedPrefix}instalarbot`},
{title: "/infobot", description: "informacion del bot", rowId: `${usedPrefix}infobot`},
{title: "/grouplist", description: "muestra los grupos en donde está el bot", rowId: `${usedPrefix}grouplist`},
{title: "/owner", description: "muestra los creadores del bot", rowId: `${usedPrefix}owner`},
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
