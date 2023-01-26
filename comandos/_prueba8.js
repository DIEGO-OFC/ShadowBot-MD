
import fetch from 'node-fetch'
import fs from 'fs'
let handler = async (m, {text, usedPrefix, command, conn}) => {
if (command == 'prueba8') {
let json = await fetch(`https://www.omdbapi.com/?t=${text}&apikey=your_api_key`)
let caption = `*⎔┉━「 ${command} 」━┉⎔*\n`
for (let response = JSON.parse(json.responseText);) {
caption += `
*TITULO: ${response.Title}*
*AÑO: ${response.Year}*
*Duración: ${response.Runtime}*
`}}}


handler.command = ['prueba8']
export default handler
