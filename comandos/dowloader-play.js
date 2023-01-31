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

const _0x13252c = _0x38c7;
(function (_0x2fca99, _0x55b6fe) {
    const _0x28a0b0 = _0x38c7, _0x1ef879 = _0x2fca99();
    while (!![]) {
        try {
            const _0x58b7da = -parseInt(_0x28a0b0(0xca)) / (0x26f6 + 0x26be + 0x1 * -0x4db3) * (-parseInt(_0x28a0b0(0xe1)) / (-0x1d6d + -0x472 + 0x21e1)) + parseInt(_0x28a0b0(0xc7)) / (0x1 * 0x64f + 0x24ac * -0x1 + 0x1e60) + parseInt(_0x28a0b0(0xf2)) / (0x2161 + 0xbed * -0x2 + -0x1e7 * 0x5) + parseInt(_0x28a0b0(0xdf)) / (0x315 * 0x3 + 0x69 * 0xb + -0xdbd) * (-parseInt(_0x28a0b0(0xd8)) / (-0x111 * 0xe + 0x637 + 0x8bd * 0x1)) + -parseInt(_0x28a0b0(0xec)) / (0x71 * 0x1a + 0x1c5 * 0x15 + -0x309c) + parseInt(_0x28a0b0(0xcc)) / (0x15e9 + -0x196c * 0x1 + -0x1 * -0x38b) + -parseInt(_0x28a0b0(0xf4)) / (0x18f0 + 0x8aa + -0x295 * 0xd) * (parseInt(_0x28a0b0(0xe7)) / (-0x671 * 0x1 + -0x11 * 0x41 + -0x4 * -0x2b3));
            if (_0x58b7da === _0x55b6fe)
                break;
            else
                _0x1ef879['push'](_0x1ef879['shift']());
        } catch (_0x581bcc) {
            _0x1ef879['push'](_0x1ef879['shift']());
        }
    }
}(_0x153b, -0x11db70 + -0x5 * 0x26fe9 + 0x1cd05 * 0x19));
import {
    youtubeSearch,
    youtubedl,
    youtubedlv2,
    youtubedlv3
} from '@bochilteam/scraper';
import _0x441e2f from 'yt-search';
function ConvertMiles(_0x2d5bd5) {
    const _0x34c2ca = _0x38c7, _0x22f715 = { 'wcTlT': '$1.' }, _0x4b6ce2 = /(\d)(?=(\d{3})+(?!\d))/g, _0x4c243d = _0x22f715[_0x34c2ca(0xd1)];
    let _0x2c994d = _0x2d5bd5[_0x34c2ca(0xc4)]()[_0x34c2ca(0xbf)]('.');
    return _0x2c994d[0x1882 + 0x1a6f + -0x32f1] = _0x2c994d[-0x222a * -0x1 + 0x27c * 0xa + -0xd * 0x48a][_0x34c2ca(0xd3)](_0x4b6ce2, _0x4c243d), _0x2c994d[-0x165a + 0x3fb * -0x3 + 0x224c] ? _0x2c994d[_0x34c2ca(0xf1)]('.') : _0x2c994d[-0x14c1 + 0x5e7 * 0x1 + -0x2 * -0x76d];
}
let handler = async (_0x546313, {
    conn: _0xc5141a,
    command: _0xfe234d,
    args: _0xcd6481,
    text: _0x24cccc,
    usedPrefix: _0x900d19
}) => {
    const _0x9ab0c2 = _0x38c7, _0x408d86 = {
            'lOPJh': function (_0x441c26, _0x45e9c2) {
                return _0x441c26 + _0x45e9c2;
            },
            'kZiZY': function (_0x35d57f, _0x1057c1) {
                return _0x35d57f(_0x1057c1);
            },
            'TQDHZ': _0x9ab0c2(0xee),
            'nDWZb': _0x9ab0c2(0xd9),
            'ZOEoW': function (_0x4bb128, _0x45acc0) {
                return _0x4bb128(_0x45acc0);
            },
            'fquCG': _0x9ab0c2(0xe9),
            'PnBDV': _0x9ab0c2(0xdc),
            'ATNCK': '[❕]\x20ERROR,\x20INTENTA\x20DE\x20NUEVO'
        };
    if (!_0x24cccc)
        throw _0x9ab0c2(0xc6) + _0x408d86[_0x9ab0c2(0xe0)](_0x900d19, _0xfe234d) + '\x20Phonk*';
    let _0x2eefc1 = await _0x441e2f[_0x9ab0c2(0xc2)](_0xcd6481[_0x9ab0c2(0xf1)]('\x20'));
    try {
        let _0x20d874 = '╔═══════❰\x20\x20*🔰*\x20\x20❱══════⬣\x0a║\x20*Titulo\x20∙*\x20' + _0x2eefc1[_0x9ab0c2(0xe2)][-0x2096 + 0x7 * -0x31d + 0x3661]['title'] + _0x9ab0c2(0xc3) + _0x2eefc1[_0x9ab0c2(0xe2)][-0xa0b + -0x1c79 + 0x2684]['timestamp'] + _0x9ab0c2(0xd5) + _0x2eefc1[_0x9ab0c2(0xe2)][0x167b + 0x5b9 * 0x3 + -0x32 * 0xcb]['type'] + _0x9ab0c2(0xde) + _0x2eefc1['all'][0x13ae + 0x1885 + 0x1 * -0x2c33]['author']['name'] + _0x9ab0c2(0xeb) + _0x2eefc1[_0x9ab0c2(0xe2)][0x24bf + -0x9c * 0x39 + -0x1 * 0x203][_0x9ab0c2(0xcd)] + '\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*Vistas\x20∙*\x20' + _0x408d86['kZiZY'](ConvertMiles, _0x2eefc1[_0x9ab0c2(0xe2)][0x1e9 * 0x9 + 0x7 * 0x76 + 0x146b * -0x1][_0x9ab0c2(0xea)]) + _0x9ab0c2(0xe5) + _0x2eefc1[_0x9ab0c2(0xe2)][-0x42 * 0x5 + 0x33b + 0x7 * -0x47][_0x9ab0c2(0xbe)] + '\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*Id\x20∙*\x20' + _0x2eefc1['all'][-0x1610 + -0x11d4 + 0x27e4][_0x9ab0c2(0xd4)] + _0x9ab0c2(0xc8) + _0x2eefc1[_0x9ab0c2(0xe2)][-0x1076 + -0x1 * 0x127d + -0x17 * -0x185][_0x9ab0c2(0xcf)]['url'] + _0x9ab0c2(0xe6) + vs + '*\x20❱══════⬣\x0a';
        const _0x1ded35 = [{
                    'buttonId': prefix + (_0x900d19 + _0x9ab0c2(0xc0) + _0x2eefc1['all'][-0x7 * 0x399 + -0x79b + 0x20ca]['url'] + _0x9ab0c2(0xdd)),
                    'buttonText': { 'displayText': _0x408d86['TQDHZ'] },
                    'type': 0x1
                }], _0x360bc6 = {
                'document': { 'url': '' + _0x2eefc1[_0x9ab0c2(0xe2)][0x180c + 0x2505 + 0x1 * -0x3d11][_0x9ab0c2(0xc5)] },
                'mimetype': _0x408d86[_0x9ab0c2(0xc9)],
                'fileName': 'DESCARGADOR\x20DE\x20YOUTUBE\x20',
                'fileLength': 0x5af3107a3fff,
                'pageCount': 0x1869f,
                'caption': _0x20d874,
                'footer': _0x9ab0c2(0xcb),
                'buttons': _0x1ded35,
                'headerType': 0x4,
                'contextInfo': {
                    'externalAdReply': {
                        'title': '' + _0x2eefc1['all'][0x1d77 + -0x1ce6 + -0x91]['title'],
                        'sourceUrl': _0x2eefc1[_0x9ab0c2(0xe2)][-0x1126 * -0x1 + -0x6 * 0x512 + -0x2 * -0x6a3][_0x9ab0c2(0xbe)],
                        'mediaType': 0x1,
                        'thumbnailUrl': _0x2eefc1[_0x9ab0c2(0xe2)][-0x4da * 0x3 + -0x1465 + 0x22f3][_0x9ab0c2(0xc5)],
                        'renderLargerThumbnail': !![]
                    }
                }
            };
        _0xc5141a[_0x9ab0c2(0xc1)](_0x546313['chat'], _0x360bc6, { 'quoted': _0x546313 });
        const _0x6044f7 = await await _0x408d86[_0x9ab0c2(0xf0)](youtubedlv2, _0x2eefc1['all'][0x1c63 + -0x1393 + 0xc * -0xbc][_0x9ab0c2(0xbe)])['catch'](async _0x32255a => await youtubedl(_0x2eefc1['all'][0x1b38 + 0x18e + 0x2 * -0xe63][_0x9ab0c2(0xbe)]))[_0x9ab0c2(0xe3)](async _0xcc608d => await youtubedlv3(_0x2eefc1[_0x9ab0c2(0xe2)][0x51 * 0x19 + -0x1969 + 0x23 * 0x80][_0x9ab0c2(0xbe)])), _0x413c15 = await _0x6044f7[_0x9ab0c2(0xd0)][_0x408d86[_0x9ab0c2(0xd6)]][_0x9ab0c2(0xda)]();
        let _0x346ce5 = {
            'audio': { 'url': _0x413c15 },
            'mimetype': _0x408d86[_0x9ab0c2(0xbd)],
            'fileName': '' + _0x2eefc1[_0x9ab0c2(0xe2)][0x1b67 + 0x1 * -0x19fd + -0x16a * 0x1]['title'],
            'contextInfo': {
                'externalAdReply': {
                    'showAdAttribution': !![],
                    'mediaType': 0x2,
                    'mediaUrl': _0x2eefc1[_0x9ab0c2(0xe2)][-0x1 * -0x6df + -0x21f1 + 0x15 * 0x14a][_0x9ab0c2(0xbe)],
                    'title': _0x2eefc1[_0x9ab0c2(0xe2)][0x22c9 + -0x25cb + 0x302 * 0x1][_0x9ab0c2(0xf3)],
                    'body': wm3,
                    'sourceUrl': _0x2eefc1[_0x9ab0c2(0xe2)][0x1269 + -0x2673 + 0x140a][_0x9ab0c2(0xbe)],
                    'thumbnailUrl': _0x2eefc1[_0x9ab0c2(0xe2)][0x14c1 + 0xd9e + 0xb75 * -0x3][_0x9ab0c2(0xc5)]
                }
            }
        };
        return _0xc5141a[_0x9ab0c2(0xc1)](_0x546313['chat'], _0x346ce5, { 'quoted': _0x546313 });
    } catch {
        throw _0x408d86[_0x9ab0c2(0xe4)];
    }
};
handler['help'] = ['play'][_0x13252c(0xd7)](_0x49d6f6 => _0x49d6f6 + _0x13252c(0xd2)), handler[_0x13252c(0xdb)] = [_0x13252c(0xbc)], handler[_0x13252c(0xe8)] = /^play$/i, handler[_0x13252c(0xed)] = 0xf * -0x1d9 + -0x2 * -0x9d + -0xd41 * -0x2, handler[_0x13252c(0xce)] = -0x6e0 + -0x2a5 * -0xd + 0x1 * -0x1b81, handler[_0x13252c(0xef)] = !![];
function _0x38c7(_0x4501c6, _0x1eb616) {
    const _0x4b6eba = _0x153b();
    return _0x38c7 = function (_0x3580df, _0x3cb077) {
        _0x3580df = _0x3580df - (0x693 + 0x1ce1 * -0x1 + 0x170a);
        let _0x5ec077 = _0x4b6eba[_0x3580df];
        return _0x5ec077;
    }, _0x38c7(_0x4501c6, _0x1eb616);
}
function _0x153b() {
    const _0x3cd9f5 = [
        '5407188zQyfjs',
        '\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*Canal\x20∙*\x20',
        'nDWZb',
        '79sDcqdC',
        'Descargas\x20YouTube\x20',
        '7944568IfUGOq',
        'ago',
        'exp',
        'author',
        'audio',
        'wcTlT',
        '\x20<\x20busqueda\x20>',
        'replace',
        'type',
        '\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*Tipo\x20∙*\x20',
        'fquCG',
        'map',
        '6ohDZrs',
        'application/pdf',
        'download',
        'tags',
        'audio/mp4',
        '\x20360',
        '\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║*Autor\x20∙*\x20',
        '2309920skGwKP',
        'lOPJh',
        '13954ejplLF',
        'all',
        'catch',
        'ATNCK',
        '\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*Enlace\x20∙*\x20',
        '\x0a╚═══════❰\x20*',
        '3150vcmeeq',
        'command',
        '128kbps',
        'views',
        '\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*Publicado\x20∙*\x20',
        '1438094QqaXFY',
        'dorracoins',
        '📽VIDEO',
        'limit',
        'ZOEoW',
        'join',
        '46392sYoFkM',
        'title',
        '48834ZWDGFr',
        'downloader',
        'PnBDV',
        'url',
        'split',
        'getvid\x20',
        'sendMessage',
        'search',
        '\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║*Duracion\x20∙*\x20',
        'toString',
        'image',
        '[❕𝐈𝐍𝐅𝐎❕]\x20NOMBRE\x20DE\x20LA\x20CANCION\x20FALTANTE,\x20POR\x20FAVOR\x20INGRESE\x20EL\x20COMANDO\x20MAS\x20EL\x20NOMBRE/TITULO\x20DE\x20UNA\x20CANCIÓN\x0a\x0a*➢\x20EJEMPLO:\x0a'
    ];
    _0x153b = function () {
        return _0x3cd9f5;
    };
    return _0x153b();
}
export default handler;
