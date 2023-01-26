import fetch from 'node-fetch'
import fs from 'fs'
let handler = async (m, {text, usedPrefix, command, conn}) => {
if (command == 'prueba8') {
let json = await fetch(`https://www.omdbapi.com/?t=${text}&apikey=caba8d6f`)
let jsons = await json.json()
let caption = `*⎔┉━「 ${command} 」━┉⎔*\n`
for (let x of jsons) {
caption += `
*TITULO: ${x.Title}*
*AÑO: ${x.Year}*
*Duración: ${x.Runtime}*
`}}   
`}}}


handler.command = ['prueba8']
export default handler
