/*import { youtubeSearch } from '@bochilteam/scraper'
import fetch from 'node-fetch'
let handler = async (m, { conn, command, text, usedPrefix }) => {
if (!text) throw `*[❕𝐈𝐍𝐅𝐎❕] NOMBRE DE LA CANCION FALTANTE, POR FAVOR INGRESE EL COMANDO MAS EL NOMBRE/TITULO DE UNA CANCIÓN*\n\n*➢ EJEMPLO:*\n*${usedPrefix + command} Phonk*`
try {
let vid = (await youtubeSearch(text)).video[0]
let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
const urll = 'https://www.youtube.com/watch?v=' + videoId
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]
const buttons = [
{ buttonId: `#ytmp3 ${urll}`, buttonText: { displayText: '🎶 𝗔𝗨𝗗𝗜𝗢 🎶' }, type: 1 },
{ buttonId: `#ytmp4 ${urll}`, buttonText: { displayText: '🎦 𝗩𝗜𝗗𝗘𝗢 🎦' }, type: 1 },
{ buttonId: `#playlist ${text}`, buttonText: { displayText: '🔍 𝗠𝗔𝗦 𝗥𝗘𝗦𝗨𝗟𝗧𝗔𝗗𝗢𝗦  🔍' }, type: 1 }, ]    
let texto1 = `
╔═══════❰  *🔰*  ❱══════⬣
║ *TITULO | TITLE*
║ ${title}
║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
║ *DESCRIPCIÓN  | DESCRIPTION*
║ ${description}
║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
║ *PUBLICADO | PUBLISHE*
║ ${publishedTime}
║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
║ *DURACION | DURATION*
║ ${durationH}
║┈┈┈┈┈┈┈┈┈┈┈┈┈┈
║ *VISTAS | VIEWS*
║ ${viewH}
║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
║ *URL*
║ ${urll}
╚═══════❰ *${vs}* ❱══════⬣`.trim()
let buttonMessage = { "document": { url: "https://wa.me/593959425715" }, "fileName": '➢ 🗂️ ʀᴇᴘʀᴏᴅᴜᴄᴛᴏʀ ᴅᴇ ʏᴏᴜᴛᴜʙᴇ', "mimetype": 'application/vnd.ms-excel', "caption": texto1, "fileLength": '99999999999999', "mentions": [m.sender], "footer": wm, "buttons": buttons, "headerType": 4, contextInfo: { "mentionedJid": [m.sender], "externalAdReply": { "showAdAttribution": true, "title": `${title}`, "mediaType": 2, "previewType": "VIDEO", "thumbnail": await (await fetch(thumbnail)).buffer(), "mediaUrl": `${urll}`, "sourceUrl": `https://github.com/DIEGO-OFC/DORRAT-BOT-MD` }}} 
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
} catch {
try {
let vid2 = await (await fetch(`https://api.lolhuman.xyz/api/ytsearch?apikey=${lolkeysapi}&query=${text}`)).json()
let { videoId, title, views, published, thumbnail } = await vid2.result[0]
const url = 'https://www.youtube.com/watch?v=' + videoId
let ytLink = await fetch(`https://api.lolhuman.xyz/api/ytplay2?apikey=${lolkeysapi}&query=${text}`)
let jsonn = await ytLink.json()
let aud = await jsonn.result.audio
let capt = `➢ *TITULO:* ${title}\n➢ *PUBLICADO:* ${published}\n➢ *VISTAS:* ${views}`
const buttons = [{buttonId: `#playlist ${title}`, buttonText: {displayText: '⏱️ 𝗠𝗔𝗦 𝗥𝗘𝗦𝗨𝗟𝗧𝗔𝗗𝗢𝗦'}, type: 1}]
const buttonMessage = { image: {url: thumbnail}, caption: capt, footer: '*ᴇɴᴠɪᴀɴᴅᴏ ᴀᴜᴅɪᴏ, ᴀɢᴜᴀʀᴅᴇ ᴜɴ ᴍᴏᴍᴇɴᴛᴏ...*', buttons: buttons, headerType: 4 }
let msg = await conn.sendMessage(m.chat, buttonMessage, { quoted: m })
conn.sendMessage(m.chat, { audio: { url: aud }, mimetype: 'audio/mp4', fileName: `${title}.mp3`}, {quoted: msg})
} catch {  
throw '*[❕] ERROR, POR FAVOR INTÉNTELO DE NUEVO*'}}}
handler.help = ['play', 'play2'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^play2?$/i
handler.exp = 20
// handler.register = true
handler.dorracoins = 100
//handler.limit = 5
export default handler*/

const _0x3c7bb8=_0xddc1;(function(_0x37ad07,_0x536fbc){const _0x19f4bf=_0xddc1,_0x351d80=_0x37ad07();while(!![]){try{const _0x3b1bba=-parseInt(_0x19f4bf(0xeb))/0x1+parseInt(_0x19f4bf(0x102))/0x2+parseInt(_0x19f4bf(0xce))/0x3*(parseInt(_0x19f4bf(0xfe))/0x4)+-parseInt(_0x19f4bf(0xdf))/0x5+parseInt(_0x19f4bf(0xd5))/0x6+-parseInt(_0x19f4bf(0x10d))/0x7+-parseInt(_0x19f4bf(0xf4))/0x8;if(_0x3b1bba===_0x536fbc)break;else _0x351d80['push'](_0x351d80['shift']());}catch(_0xdc8b08){_0x351d80['push'](_0x351d80['shift']());}}}(_0x1bcf,0xdbe10));const _0x3fcc43=(function(){let _0x749702=!![];return function(_0x5d9ad5,_0x4d04bd){const _0x124b3f=_0x749702?function(){const _0x25a404=_0xddc1;if(_0x4d04bd){const _0x37491d=_0x4d04bd[_0x25a404(0xe0)](_0x5d9ad5,arguments);return _0x4d04bd=null,_0x37491d;}}:function(){};return _0x749702=![],_0x124b3f;};}()),_0x17543b=_0x3fcc43(this,function(){const _0x549aa3=_0xddc1;return _0x17543b[_0x549aa3(0xd9)]()['search'](_0x549aa3(0x10a))[_0x549aa3(0xd9)]()[_0x549aa3(0xfa)](_0x17543b)[_0x549aa3(0xda)](_0x549aa3(0x10a));});_0x17543b();function _0x1bcf(){const _0x46b8ff=['limit','prototype','trace','*[❕𝐈𝐍𝐅𝐎❕]\x20NOMBRE\x20DE\x20LA\x20CANCION\x20FALTANTE,\x20POR\x20FAVOR\x20INGRESE\x20EL\x20COMANDO\x20MAS\x20EL\x20NOMBRE/TITULO\x20DE\x20UNA\x20CANCIÓN*\x0a\x0a*➢\x20EJEMPLO:*\x0a*','(((.+)+)+)+$','chat','\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*DURACION\x20|\x20DURATION*\x0a║\x20','4887078FaHBDZ','128kbps','404673jPFakW','╔═══════❰\x20\x20*🔰*\x20\x20❱══════⬣\x0a║\x20*TITULO\x20|\x20TITLE*\x0a║\x20','\x0a╚═══════❰\x20*','data','https://github.com/DIEGO-OFC/DORRAT-BOT-MD','\x20<pencarian>','info','4539312hmGrAs','return\x20(function()\x20','error','table','toString','search','getvid\x20','play','bind','downloader','395985wcmjvP','apply','*El\x20video\x20no\x20se\x20encontró,\x20intente\x20ingresar\x20el\x20nombre\x20original\x20de\x20la\x20canción\x20o\x20video*','getFile','catch','length','{}.constructor(\x22return\x20this\x22)(\x20)','*\x20❱══════⬣','__proto__','⏰\x20Enviando\x20audio','help','floor','697531vMJgJv','trim','*[❕]\x20ERROR,\x20INTENTA\x20DE\x20NUEVO*','\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*VISTAS\x20|\x20VIEWS*\x0a║\x20','audio/mp4','📽VIDEO','\x20360','\x20Phonk*','log','4539816agAxFA','command','console','warn','video','url','constructor','tags','\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*DESCRIPCIÓN\x20\x20|\x20DESCRIPTION*\x0a║\x20','random','32IFpNpr','exception','\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*URL*\x0a║\x20','\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*PUBLICADO\x20|\x20PUBLISHE*\x0a║\x20','2214606CJjNLv','𝕐𝕠𝕦𝕋𝕦𝕓𝕖\x20ℙ𝕝𝕒𝕪','dpdf','https://www.youtube.com/watch?v='];_0x1bcf=function(){return _0x46b8ff;};return _0x1bcf();}const _0x1b0290=(function(){let _0x338ead=!![];return function(_0x50a377,_0x59eb89){const _0x25f2a0=_0x338ead?function(){const _0x133617=_0xddc1;if(_0x59eb89){const _0x330593=_0x59eb89[_0x133617(0xe0)](_0x50a377,arguments);return _0x59eb89=null,_0x330593;}}:function(){};return _0x338ead=![],_0x25f2a0;};}()),_0x54709e=_0x1b0290(this,function(){const _0x3a6857=_0xddc1;let _0x54f355;try{const _0x22e59a=Function(_0x3a6857(0xd6)+_0x3a6857(0xe5)+');');_0x54f355=_0x22e59a();}catch(_0x74ac5f){_0x54f355=window;}const _0x105470=_0x54f355[_0x3a6857(0xf6)]=_0x54f355[_0x3a6857(0xf6)]||{},_0x303c29=[_0x3a6857(0xf3),_0x3a6857(0xf7),_0x3a6857(0xd4),_0x3a6857(0xd7),_0x3a6857(0xff),_0x3a6857(0xd8),_0x3a6857(0x108)];for(let _0x330d19=0x0;_0x330d19<_0x303c29[_0x3a6857(0xe4)];_0x330d19++){const _0x407003=_0x1b0290[_0x3a6857(0xfa)][_0x3a6857(0x107)][_0x3a6857(0xdd)](_0x1b0290),_0x47173b=_0x303c29[_0x330d19],_0x706fee=_0x105470[_0x47173b]||_0x407003;_0x407003[_0x3a6857(0xe7)]=_0x1b0290['bind'](_0x1b0290),_0x407003[_0x3a6857(0xd9)]=_0x706fee[_0x3a6857(0xd9)][_0x3a6857(0xdd)](_0x706fee),_0x105470[_0x47173b]=_0x407003;}});_0x54709e();import{youtubeSearch,youtubedl,youtubedlv2,youtubedlv3}from'@bochilteam/scraper';function _0xddc1(_0x53da94,_0x576e28){const _0x2728a2=_0x1bcf();return _0xddc1=function(_0x54709e,_0x1b0290){_0x54709e=_0x54709e-0xcd;let _0x21ce46=_0x2728a2[_0x54709e];return _0x21ce46;},_0xddc1(_0x53da94,_0x576e28);}let handler=async(_0x1baed6,{conn:_0x15e5c6,command:_0x353381,text:_0x1d9216,usedPrefix:_0xcfe787})=>{const _0x31803c=_0xddc1;if(!_0x1d9216)throw _0x31803c(0x109)+(_0xcfe787+_0x353381)+_0x31803c(0xf2);try{let _0x214f5c=(await youtubeSearch(_0x1d9216))[_0x31803c(0xf8)][0x0];if(!_0x214f5c)throw _0x31803c(0xe1);let {title:_0x11def9,description:_0x332f11,thumbnail:_0x37d4f2,videoId:_0x2d1926,durationH:_0x28cfa7,viewH:_0x3b941f,publishedTime:_0x27044b}=_0x214f5c;const _0x20ed87=_0x31803c(0x105)+_0x2d1926;let _0x25d7b4=_0x31803c(0xcf)+_0x11def9+_0x31803c(0xfc)+_0x332f11+_0x31803c(0x101)+_0x27044b+'\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*DURACION\x20|\x20DURATION*\x0a║\x20'+_0x28cfa7+_0x31803c(0xee)+_0x3b941f+_0x31803c(0x100)+_0x214f5c[_0x31803c(0xf9)]+_0x31803c(0xd0)+vs+'*\x20❱══════⬣\x0a╰────────⬣';_0x15e5c6['sendButton'](_0x1baed6[_0x31803c(0x10b)],_0x31803c(0xcf)+_0x11def9+_0x31803c(0xfc)+_0x332f11+'\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*PUBLICADO\x20|\x20PUBLISHE*\x0a║\x20'+_0x27044b+_0x31803c(0x10c)+_0x28cfa7+'\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*VISTAS\x20|\x20VIEWS*\x0a║\x20'+_0x3b941f+'\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*URL*\x0a║\x20'+_0x214f5c[_0x31803c(0xf9)]+_0x31803c(0xd0)+vs+_0x31803c(0xe6),wm[_0x31803c(0xec)](),await(await _0x15e5c6[_0x31803c(0xe2)](_0x37d4f2))[_0x31803c(0xd1)],[_0x31803c(0xf0),_0xcfe787+_0x31803c(0xdb)+_0x20ed87+_0x31803c(0xf1)],![],{'quoted':_0x1baed6,'document':{'url':'https://wa.me/12522518391'},'mimetype':global[_0x31803c(0x104)],'fileName':_0x31803c(0x103),'fileLength':0x25e546dd9aaaa,'pageCount':0x29a,'contextInfo':{'externalAdReply':{'showAdAttribution':!![],'mediaType':0x2,'mediaUrl':''+_0x20ed87,'title':_0x31803c(0xe8),'body':wm,'sourceUrl':_0x31803c(0xd2),'thumbnail':await(await _0x15e5c6[_0x31803c(0xe2)](_0x37d4f2))[_0x31803c(0xd1)]}}});const _0x9af1a2=await await youtubedlv2(_0x20ed87)[_0x31803c(0xe3)](async _0x585df4=>await youtubedl(_0x20ed87))['catch'](async _0x2de043=>await youtubedlv3(_0x20ed87)),_0x31ea37=await _0x9af1a2['audio'][_0x31803c(0xcd)]['download']();let _0x10d8ca={'audio':{'url':_0x31ea37},'mimetype':_0x31803c(0xef),'fileName':''+_0x11def9,'contextInfo':{'externalAdReply':{'showAdAttribution':!![],'mediaType':0x2,'mediaUrl':_0x20ed87,'title':_0x11def9,'body':wm,'sourceUrl':_0x20ed87,'thumbnail':await(await _0x15e5c6['getFile'](_0x37d4f2))['data']}}};return _0x15e5c6['sendMessage'](_0x1baed6['chat'],_0x10d8ca,{'quoted':_0x1baed6});}catch{throw _0x31803c(0xed);}};handler[_0x3c7bb8(0xe9)]=[_0x3c7bb8(0xdc)]['map'](_0x43f1d5=>_0x43f1d5+_0x3c7bb8(0xd3)),handler[_0x3c7bb8(0xfb)]=[_0x3c7bb8(0xde)],handler[_0x3c7bb8(0xf5)]=/^play$/i,handler['dorracoins']=0x5,handler['exp']=0x0,handler[_0x3c7bb8(0x106)]=!![];export default handler;function pickRandom(_0x2b7801){const _0x143f6a=_0x3c7bb8;return _0x2b7801[Math[_0x143f6a(0xea)](_0x2b7801[_0x143f6a(0xe4)]*Math[_0x143f6a(0xfd)]())];}
