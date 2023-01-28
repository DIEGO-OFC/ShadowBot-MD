/*import fetch from 'node-fetch'
let handler = async (m, { text, usedPrefix, command }) => {
if (!text) throw `*[❕] INGRESE UN TEXTO/ORDEN PARA EJECUTAR LA FUNCIÓN CHATGPT*\n\n*❍ EJEMPLO DE PETICIONES Y ORDENES*\n*❍ ${usedPrefix + command} Reflexion sobre la serie Merlina 2022 de netflix*\n*❍ ${usedPrefix + command} Codigo en JS para un juego de cartas*`
try {
m.reply(`*⏰ Cargando, espere un momento*`)
let tiores = await fetch(`https://api.lolhuman.xyz/api/openai?apikey=${lolkeysapi}&text=${text}&user=user-unique-id`)
let hasil = await tiores.json()
m.reply(`${hasil.result}`.trim())
} catch {
throw `*[❕] ERROR, INTENTA DE NUEVO*`
}}
handler.command = ['openai', 'chatgpt', 'ia', 'robot']

export default handler*/

const _0x5d33de=_0x16be;(function(_0x49774e,_0x3cb7d6){const _0x3727df=_0x16be,_0x5de382=_0x49774e();while(!![]){try{const _0x50603e=-parseInt(_0x3727df(0x9b))/0x1+parseInt(_0x3727df(0x9a))/0x2+-parseInt(_0x3727df(0xa2))/0x3+parseInt(_0x3727df(0xa9))/0x4+parseInt(_0x3727df(0xa5))/0x5+parseInt(_0x3727df(0xa0))/0x6*(-parseInt(_0x3727df(0xaa))/0x7)+-parseInt(_0x3727df(0x99))/0x8;if(_0x50603e===_0x3cb7d6)break;else _0x5de382['push'](_0x5de382['shift']());}catch(_0x16b7c8){_0x5de382['push'](_0x5de382['shift']());}}}(_0x2040,0x7d42c));import _0x250d78 from'node-fetch';let handler=async(_0x5ed389,{conn:_0x29e691,text:_0x10f51c})=>{const _0x3e6f98=_0x16be;if(!_0x10f51c)return _0x5ed389[_0x3e6f98(0x9f)](_0x3e6f98(0xa8));let _0x1119a2=await openAi(_0x10f51c);await _0x5ed389[_0x3e6f98(0x9f)](_0x1119a2['choices'][0x0]['text'][_0x3e6f98(0x9d)]());};function _0x2040(){const _0x2dadf3=['2924096ZPridh','1264060UpWdQK','62562YztDdT','POST','trim','chatgpt','reply','6JaPUPT','text-davinci-003','170430oiuwgf','command','https://api.openai.com/v1/completions','269435PLobAI','stringify','application/json','Ingrese\x20un\x20texto','3326944ONTvPU','3637907ircZEf','Bearer\x20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'];_0x2040=function(){return _0x2dadf3;};return _0x2040();}handler[_0x5d33de(0xa3)]=[_0x5d33de(0x9e)];function _0x16be(_0x5ede4f,_0x5877ec){const _0x2040bb=_0x2040();return _0x16be=function(_0x16bed5,_0x5abded){_0x16bed5=_0x16bed5-0x99;let _0x381ef5=_0x2040bb[_0x16bed5];return _0x381ef5;},_0x16be(_0x5ede4f,_0x5877ec);}export default handler;async function openAi(_0x312cf7){const _0x49f258=_0x5d33de;let _0x10b31d=await _0x250d78(_0x49f258(0xa4),{'method':_0x49f258(0x9c),'headers':{'Content-Type':_0x49f258(0xa7),'Authorization':_0x49f258(0xab)},'body':JSON[_0x49f258(0xa6)]({'model':_0x49f258(0xa1),'prompt':_0x312cf7,'temperature':0.5,'max_tokens':0xbb8,'top_p':0x1})});return await _0x10b31d['json']();}
