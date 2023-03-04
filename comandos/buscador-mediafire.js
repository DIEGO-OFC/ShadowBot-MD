import axios from 'axios'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
let handler = async (m, { text, conn, args, command, usedPrefix }) => {
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙹𝙴𝙼𝙿𝙻𝙾 𝙳𝙴 𝚄𝚂𝙾 𝙳𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 ${usedPrefix + command} WhatsApp*`
//try {
let res = await axios.get(`https://www.mediafire.com/api/1.5/search/get_web_results.php?search_term=${text}`)
let json = res.result
let listSerch = []
const sections = [{
title: comienzo + ' ' + lenguajeGB['smsLista1']() + ' ' + fin,
rows: [
{title: "│🌐│MINECRAFT-SERVER", rowId:`${usedPrefix}mc-server`},  
{title: lenguajeGB['smsLista7'](), rowId:`${usedPrefix}instalarbot`}]}]
handler.command = /^mediafiresearch$/i
export default handler
