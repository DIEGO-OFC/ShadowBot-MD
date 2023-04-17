let { generateWAMessageFromContent } = (await import("@adiwajshing/baileys")).default 
import fs from 'fs'
let handler  = async (m, { conn, usedPrefix: _p }) => {

function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var days = Math.floor(seconds / (24 * 60 * 60 * 1000));
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `❍ https://github.com/DIEGO-OFC/DORRAT-BOT-MD\n\n*⏰ TIEMPO ACTIVO*\n \t${pad(days)} Dias\t ${pad(hours)} Horas ${pad(minutes)} Minutos ${pad(seconds)} Segudos \t\n`
}
					const runtime = process.uptime()
		            const teks = `${kyun(runtime)}`
					const itsme = `0@s.whatsapp.net`
					const split = `uwu >//<`
					const rtimebro = {
					contextInfo: {
					participant: itsme,
					quotedMessage: {
					extendedTextMessage: {
				    text: split
									}
								}
							}
					}
						    
						  let prep = generateWAMessageFromContent(m.chat, { orderMessage: { 
itemCount: -10062007, status: 500,
surface: 999,
message: teks,
description: '^^',
orderTitle: 'Hi Sis',
token: '9',
curreyCode: 'IDR',
totalCurrencyCode: '>〰<',
totalAmount1000: '1000000',
sellerJid: 'https://github.com/DIEGO-OFC/DORRAT-BOT-MD',
thumbnail: fs.readFileSync('./galeria/menudorrat3.jpg')
}}, {contextInfo: null, quoted: m})
conn.relayWAMessage(prep)
				/*	conn.sendMessage(m.chat, `${teks}`, MessageType.text, rtimebro)*/
}

handler.help = ['runtime']
handler.tags = ['info']
handler.command = /^(runtime|sc|activo)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null


export default handler
