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

const _0x543e4a = _0x1211;
(function (_0x3ee2c6, _0x35c0ca) {
    const _0x1ebb9c = _0x1211, _0x273e87 = _0x3ee2c6();
    while (!![]) {
        try {
            const _0x9a9f6c = parseInt(_0x1ebb9c(0x9a)) / (-0x3 * -0x739 + 0x377 * 0x6 + 0xf7 * -0x2c) + -parseInt(_0x1ebb9c(0xb8)) / (0x1592 + -0x2 * -0x4cf + -0x1f2e) * (-parseInt(_0x1ebb9c(0xb0)) / (-0x27e + 0xfe0 + -0xd5f)) + parseInt(_0x1ebb9c(0xaa)) / (0x4 * 0x211 + -0x127a + 0xa3a) + parseInt(_0x1ebb9c(0x98)) / (-0x3 * -0x9a3 + 0x7ec + -0x24d0) * (-parseInt(_0x1ebb9c(0xb7)) / (-0x2320 + -0x1e67 + 0x418d * 0x1)) + parseInt(_0x1ebb9c(0x9d)) / (-0x1cd * 0x4 + 0x137 * -0x6 + 0xe85) * (-parseInt(_0x1ebb9c(0xb5)) / (0x49b + -0xc08 + 0x775)) + parseInt(_0x1ebb9c(0xbd)) / (0x163d + 0xb2a * -0x3 + -0x5 * -0x242) + -parseInt(_0x1ebb9c(0xc3)) / (0x14a7 + -0x2033 + 0xb96) * (-parseInt(_0x1ebb9c(0x9b)) / (0x1405 * 0x1 + 0x8bf + -0x1cb9));
            if (_0x9a9f6c === _0x35c0ca)
                break;
            else
                _0x273e87['push'](_0x273e87['shift']());
        } catch (_0x35b0ef) {
            _0x273e87['push'](_0x273e87['shift']());
        }
    }
}(_0x4ada, -0x1 * -0x12ff5 + 0x3144b + -0x16cff * 0x1));
function _0x1211(_0x3e25f6, _0x300b14) {
    const _0x1f8f72 = _0x4ada();
    return _0x1211 = function (_0x578bb8, _0xda1854) {
        _0x578bb8 = _0x578bb8 - (-0x9f * 0x1b + 0x8f9 * 0x1 + -0x4a * -0x1d);
        let _0xe27fc9 = _0x1f8f72[_0x578bb8];
        return _0xe27fc9;
    }, _0x1211(_0x3e25f6, _0x300b14);
}
import {
    youtubeSearch,
    youtubedl,
    youtubedlv2,
    youtubedlv3
} from '@bochilteam/scraper';
import _0xe9b113 from 'yt-search';
function _0x4ada() {
    const _0x882f4a = [
        '12250poKSiw',
        'DESCARGADOR\x20DE\x20YOUTUBE\x20',
        'type',
        '128kbps',
        'timestamp',
        'catch',
        '*[❕]\x20ERROR,\x20INTENTA\x20DE\x20NUEVO*',
        '15VPRjEY',
        'downloader',
        '333919RYHdgK',
        '132PlpGFH',
        '$1.',
        '1166669hUitTv',
        'application/pdf',
        'name',
        'title',
        '*\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*Tipo\x20∙\x20',
        'audio',
        'Kxuwb',
        'all',
        'dolares',
        'help',
        'download',
        'bXoag',
        'image',
        '55520YqFImh',
        '*\x0a║\x20*NOTA:\x20SU\x20AUDIO\x20SE\x20ESTA\x20ENVIANDO*\x0a╚═══════❰\x20*',
        '*\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*Vistas\x20∙\x20',
        'join',
        'search',
        '*\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*Duracion\x20∙\x20',
        '85440bVXeYQ',
        '*\x20❱══════⬣',
        'chat',
        'author',
        'toString',
        '16ZHpurx',
        'views',
        '347586PIuZnM',
        '10YOYlaA',
        'ago',
        'NdnKb',
        '*\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*Autor\x20∙\x20',
        'sendMessage',
        '1695645JaLzUn',
        'UfXer',
        'Wrgeg',
        'tags',
        'url',
        '\x20<\x20busqueda\x20>'
    ];
    _0x4ada = function () {
        return _0x882f4a;
    };
    return _0x4ada();
}
function ConvertMiles(_0x23f36b) {
    const _0x3f64b4 = _0x1211, _0x3073b2 = /(\d)(?=(\d{3})+(?!\d))/g, _0x52bdff = _0x3f64b4(0x9c);
    let _0x30bb74 = _0x23f36b[_0x3f64b4(0xb4)]()['split']('.');
    return _0x30bb74[-0x3 * -0xbce + -0x1 * 0x345 + -0x2025] = _0x30bb74[-0x2 * 0x1349 + -0xe3 * -0xc + 0x226 * 0xd]['replace'](_0x3073b2, _0x52bdff), _0x30bb74[0x4d * 0x45 + 0x1a8 * -0x17 + 0x1158] ? _0x30bb74[_0x3f64b4(0xad)]('.') : _0x30bb74[-0x29 * -0x18 + 0x68 + -0x440];
}
let handler = async (_0x419bcc, {
    conn: _0x3e7b14,
    command: _0x14971c,
    args: _0x3a5cfa,
    text: _0x5cd8aa,
    usedPrefix: _0x22f839
}) => {
    const _0x501ddb = _0x1211, _0x295689 = {
            'Kxuwb': function (_0x5d8b9f, _0xc9ee15) {
                return _0x5d8b9f + _0xc9ee15;
            },
            'UfXer': function (_0x531e10, _0x46bd59) {
                return _0x531e10(_0x46bd59);
            },
            'ZOXIQ': '📽VIDEO',
            'bXoag': _0x501ddb(0x9e),
            'Wrgeg': _0x501ddb(0xc6),
            'ltraH': 'audio/mp4',
            'NdnKb': _0x501ddb(0x97)
        };
    if (!_0x5cd8aa)
        throw '[❕𝐈𝐍𝐅𝐎❕]\x20NOMBRE\x20DE\x20LA\x20CANCION\x20FALTANTE,\x20POR\x20FAVOR\x20INGRESE\x20EL\x20COMANDO\x20MAS\x20EL\x20NOMBRE/TITULO\x20DE\x20UNA\x20CANCIÓN\x0a\x0a*➢\x20EJEMPLO:\x0a' + _0x295689[_0x501ddb(0xa3)](_0x22f839, _0x14971c) + '\x20Phonk*';
    let _0xbe9ceb = await _0xe9b113[_0x501ddb(0xae)](_0x3a5cfa[_0x501ddb(0xad)]('\x20'));
    try {
        let _0x284e3f = '╔═══════❰\x20\x20*🔰*\x20\x20❱══════⬣\x0a║\x20*Titulo\x20∙\x20' + _0xbe9ceb['all'][-0x19 * -0x2f + -0x21e1 + -0x2 * -0xea5]['title'] + _0x501ddb(0xaf) + _0xbe9ceb[_0x501ddb(0xa4)][-0x1c22 + -0x872 + 0x2494][_0x501ddb(0xc7)] + _0x501ddb(0xa1) + _0xbe9ceb['all'][-0xbe0 + -0x725 * -0x3 + 0x98f * -0x1][_0x501ddb(0xc5)] + _0x501ddb(0xbb) + _0xbe9ceb[_0x501ddb(0xa4)][0x2529 + 0x1209 + -0x1b99 * 0x2][_0x501ddb(0xb3)][_0x501ddb(0x9f)] + '*\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*Publicado\x20∙\x20' + _0xbe9ceb[_0x501ddb(0xa4)][-0x251c + -0xb3 * 0xc + -0x380 * -0xd][_0x501ddb(0xb9)] + _0x501ddb(0xac) + _0x295689[_0x501ddb(0xbe)](ConvertMiles, _0xbe9ceb[_0x501ddb(0xa4)][0x2552 * 0x1 + 0x1e95 + -0x43e7][_0x501ddb(0xb6)]) + '*\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*Enlace\x20∙\x20' + _0xbe9ceb[_0x501ddb(0xa4)][0x12d4 + -0x139 * -0x15 + -0x2c81 * 0x1][_0x501ddb(0xc1)] + '*\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*Id\x20∙\x20' + _0xbe9ceb[_0x501ddb(0xa4)][0x351 + -0x238 + -0x119 * 0x1]['type'] + '*\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*Canal\x20∙\x20' + _0xbe9ceb['all'][-0xfbd + 0x1 * -0x104e + -0xd * -0x277][_0x501ddb(0xb3)]['url'] + _0x501ddb(0xab) + vs + _0x501ddb(0xb1);
        const _0x229e68 = [{
                    'buttonId': prefix + (_0x22f839 + '#ytmp4\x20' + _0xbe9ceb[_0x501ddb(0xa4)][0x23 * -0xa + -0x166 * 0x15 + 0x4 * 0x7af][_0x501ddb(0xc1)] + '\x20360'),
                    'buttonText': { 'displayText': _0x295689['ZOXIQ'] },
                    'type': 0x1
                }], _0x437487 = {
                'document': { 'url': '' + _0xbe9ceb[_0x501ddb(0xa4)][-0x350 + -0x1 * -0xf4f + 0x1 * -0xbff]['image'] },
                'mimetype': _0x295689[_0x501ddb(0xa8)],
                'fileName': _0x501ddb(0xc4),
                'fileLength': 0x5af3107a3fff,
                'pageCount': 0x1869f,
                'caption': _0x284e3f,
                'footer': wm3,
                'buttons': _0x229e68,
                'headerType': 0x4,
                'contextInfo': {
                    'externalAdReply': {
                        'title': '' + _0xbe9ceb[_0x501ddb(0xa4)][0x343 * 0x5 + 0x20d6 + -0x3125][_0x501ddb(0xa0)],
                        'sourceUrl': _0xbe9ceb['all'][-0x10b4 + 0x6a9 + -0x3 * -0x359][_0x501ddb(0xc1)],
                        'mediaType': 0x1,
                        'thumbnailUrl': _0xbe9ceb[_0x501ddb(0xa4)][-0x139c + -0x10 * 0x215 + 0x34ec * 0x1][_0x501ddb(0xa9)],
                        'renderLargerThumbnail': !![]
                    }
                }
            };
        _0x3e7b14[_0x501ddb(0xbc)](_0x419bcc[_0x501ddb(0xb2)], _0x437487, { 'quoted': _0x419bcc });
        const _0x1df0e1 = await await _0x295689[_0x501ddb(0xbe)](youtubedlv2, _0xbe9ceb[_0x501ddb(0xa4)][-0x1196 + -0x40 * -0x6a + -0x8ea][_0x501ddb(0xc1)])[_0x501ddb(0x96)](async _0x1c54d1 => await youtubedl(_0xbe9ceb['all'][0x11 * -0xef + 0x1 * -0xd85 + 0x1d64][_0x501ddb(0xc1)]))['catch'](async _0x3c1b9a => await youtubedlv3(_0xbe9ceb['all'][0x1 * 0x923 + 0x1f89 + -0x28ac][_0x501ddb(0xc1)])), _0x3bffc0 = await _0x1df0e1[_0x501ddb(0xa2)][_0x295689[_0x501ddb(0xbf)]][_0x501ddb(0xa7)]();
        let _0x1fd42d = {
            'audio': { 'url': _0x3bffc0 },
            'mimetype': _0x295689['ltraH'],
            'fileName': '' + _0xbe9ceb[_0x501ddb(0xa4)][-0x98 * -0x3b + -0x1b * 0xca + 0xfb * -0xe][_0x501ddb(0xa0)],
            'contextInfo': {
                'externalAdReply': {
                    'showAdAttribution': !![],
                    'mediaType': 0x2,
                    'mediaUrl': _0xbe9ceb[_0x501ddb(0xa4)][0x4 * -0x882 + -0xdc * -0x28 + -0x58][_0x501ddb(0xc1)],
                    'title': _0xbe9ceb['all'][-0x1858 + -0x19ff + 0x3257]['title'],
                    'body': wm3,
                    'sourceUrl': _0xbe9ceb['all'][0x1224 + -0x76d * -0x2 + -0x20fe][_0x501ddb(0xc1)],
                    'thumbnailUrl': _0xbe9ceb[_0x501ddb(0xa4)][-0x1e1a + 0x5cf + 0x184b][_0x501ddb(0xa9)]
                }
            }
        };
        return _0x3e7b14[_0x501ddb(0xbc)](_0x419bcc['chat'], _0x1fd42d, { 'quoted': _0x419bcc });
    } catch {
        throw _0x295689[_0x501ddb(0xba)];
    }
};
handler[_0x543e4a(0xa6)] = ['play']['map'](_0x4209bb => _0x4209bb + _0x543e4a(0xc2)), handler[_0x543e4a(0xc0)] = [_0x543e4a(0x99)], handler['command'] = /^play$/i, handler[_0x543e4a(0xa5)] = -0x3 * 0x982 + 0x1e6d + -0x1dd, handler['exp'] = -0x71c + 0x1422 + -0xd06;
export default handler;
