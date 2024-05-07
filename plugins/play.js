//const {youtubedl, youtubedlv2} = require("@bochilteam/scraper");
const search = require("yt-search");
const {generateWAMessageFromContent} = require("@whiskeysockets/baileys");
const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom, searchAndFilterVideos, formatNumber} = require('../libs/fuctions.js')

const play = async (conn, m, command, text) => {

  if (!text) return m.reply(`Ejemplo: *${prefix + command}* la mamá de liam cantando`)
m.reply(`cargando, si solo se envía el audio en 1KB use yts seleccione su enlace y luego use #ytmp3 mas el enlace`)
const yt = await fetch(`https://xanax-apis.online/youtube/play?query=${text}&apitoken=xanax-apis`);
const json = await yt.json();
const titulo = json.Title;
const link = json.Link;
const desc = json.Description;
const xnx = `https://xanax-apis.online/youtube/mp3?url=${link}&apitoken=xanax-apis`
const cap = titulo + '\n' + link + '\n' + desc

conn.sendMessage(m.chat, {image: {url: json.Thumb}, caption: cap}, {quoted: m});
conn.sendMessage(m.chat, { audio: { url: xnx }, fileName:  'xd.mp3', mimetype: 'audio/mp4' }, { quoted: m })}

  

module.exports = { play };