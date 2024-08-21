//const {youtubedl, youtubedlv2} = require("@bochilteam/scraper");
const yts = require("yt-search");
const {generateWAMessageFromContent} = require("@whiskeysockets/baileys");
const { default: makeWASocket, proto } = require("@whiskeysockets/baileys") 
const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom, searchAndFilterVideos, formatNumber} = require('../libs/fuctions.js')

const play = async (conn, m, command, text) => {

if (!text) return m.reply(`Ejemplo: *${prefix + command}* la mamá de liam cantando`)
	let res = await yts(text)
	let vid = res.videos[0]
	if (!vid) throw `✳️ Vídeo/Audio no encontrado`
	let { title, description, thumbnail, videoId, timestamp, views, ago, url } = vid
	//const url = 'https://www.youtube.com/watch?v=' + videoI
  let play = `
◈ 📌 *Titulo:* ${vid.title}
◈ 📆 *Publicado:* ${vid.ago}
◈ ⌚ *duración:* ${vid.timestamp}
◈ 👀 *Vistas:* ${vid.views.toLocaleString()}`

const testI = generateWAMessageFromContent(m.key.remoteJid, { 
viewOnceMessage: { 
message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2 }, 
interactiveMessage: proto.Message.InteractiveMessage.create({ 
body: proto.Message.InteractiveMessage.Body.create({ text: '' }), 
footer: proto.Message.InteractiveMessage.Footer.create({ text: '' }), 
header: proto.Message.InteractiveMessage.Header.create({ 
title: play, 
subtitle: 'xdd', 
hasMediaAttachment: false }), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [ { "name": "quick_reply", 
"buttonParamsJson": `{"display_text":"Audio","id":".ytmp3 ${text}"}` }, { 
"name": "quick_reply", 
"buttonParamsJson": `{"display_text":"Video","id":".ytmp4 ${text}"}` }, {
"name": "quick_reply", 
"buttonParamsJson": `{"display_text":"Mas resultados","id":".yts ${text}"}` }
], })})}}}, {})
conn.relayMessage(testI.key.remoteJid, testI.message, { messageId: testI.key.id }, {quoted: m})} 
  
module.exports = { play };