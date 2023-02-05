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

function _0x1bcb(_0x4475b7, _0x134ec9) {
    const _0x508abb = _0x219d();
    return _0x1bcb = function (_0x1dbbe8, _0x1c28e3) {
        _0x1dbbe8 = _0x1dbbe8 - (-0xd76 + 0x280 + 0xcd7);
        let _0x13b303 = _0x508abb[_0x1dbbe8];
        return _0x13b303;
    }, _0x1bcb(_0x4475b7, _0x134ec9);
}
const _0xdd0f21 = _0x1bcb;
(function (_0x244aad, _0x4dd447) {
    const _0x5bd1b7 = _0x1bcb, _0x4c1e69 = _0x244aad();
    while (!![]) {
        try {
            const _0x5bbc89 = -parseInt(_0x5bd1b7(0x206)) / (0x141f + -0x1ce8 + 0x1 * 0x8ca) * (parseInt(_0x5bd1b7(0x1f3)) / (-0x421 * 0x7 + -0x1eb * -0x2 + 0x7 * 0x395)) + parseInt(_0x5bd1b7(0x1ee)) / (0x9dd + 0x1e47 + 0x1 * -0x2821) + -parseInt(_0x5bd1b7(0x217)) / (0x59 * 0x6b + 0x22e5 + 0x7 * -0xa4c) * (-parseInt(_0x5bd1b7(0x1fd)) / (0x1d1d + 0x402 + -0x211a)) + parseInt(_0x5bd1b7(0x1e3)) / (0x22e1 * 0x1 + -0xa7 + -0x2234) * (-parseInt(_0x5bd1b7(0x1e6)) / (-0x229c + 0xa25 + 0xb * 0x23a)) + -parseInt(_0x5bd1b7(0x20b)) / (-0x116a + 0x1cfb + -0x1 * 0xb89) + parseInt(_0x5bd1b7(0x214)) / (-0x45f * 0x7 + 0x1a3f + 0x463 * 0x1) + parseInt(_0x5bd1b7(0x209)) / (-0x33 * 0x2b + 0x2033 + -0x1798) * (parseInt(_0x5bd1b7(0x210)) / (-0x1aae + 0x225 * -0x3 + -0x2 * -0x1094));
            if (_0x5bbc89 === _0x4dd447)
                break;
            else
                _0x4c1e69['push'](_0x4c1e69['shift']());
        } catch (_0x3dcb37) {
            _0x4c1e69['push'](_0x4c1e69['shift']());
        }
    }
}(_0x219d, 0x2 * -0x276b3 + -0x7c02d + 0x90d5b * 0x2));
import {
    youtubeSearch,
    youtubedl,
    youtubedlv2,
    youtubedlv3
} from '@bochilteam/scraper';
import _0x27e39e from 'yt-search';
function ConvertMiles(_0xea9b38) {
    const _0x249492 = _0x1bcb, _0x1c9d11 = /(\d)(?=(\d{3})+(?!\d))/g, _0x3ff336 = '$1.';
    let _0x2a794a = _0xea9b38[_0x249492(0x1f9)]()[_0x249492(0x20e)]('.');
    return _0x2a794a[0x1556 * -0x1 + -0x7cd + 0x1d23] = _0x2a794a[-0x90e + 0x3e2 + 0x14b * 0x4][_0x249492(0x20d)](_0x1c9d11, _0x3ff336), _0x2a794a[0x268f + -0x1d7e + 0x74 * -0x14] ? _0x2a794a[_0x249492(0x207)]('.') : _0x2a794a[0x8ef * -0x1 + -0x2337 + 0x2c26];
}
let handler = async (_0x4a00ec, {
    conn: _0x48d154,
    command: _0x1e1b8f,
    args: _0x4459ac,
    text: _0x534939,
    usedPrefix: _0x5121e7
}) => {
    const _0x5a3d71 = _0x1bcb, _0x3911b7 = {
            'KKMXf': function (_0x26af3f, _0x42e541) {
                return _0x26af3f + _0x42e541;
            },
            'rexRn': _0x5a3d71(0x1e1),
            'qtppN': _0x5a3d71(0x204),
            'qQBWc': function (_0x558fe6, _0x1d9190) {
                return _0x558fe6(_0x1d9190);
            },
            'ycwzb': _0x5a3d71(0x1fa),
            'ewnni': 'audio/mp4',
            'yBrVf': _0x5a3d71(0x1e9)
        };
    if (!_0x534939)
        throw _0x5a3d71(0x1e5) + (_0x5121e7 + _0x1e1b8f) + _0x5a3d71(0x1ff);
    let _0x2826a3 = await _0x27e39e[_0x5a3d71(0x208)](_0x4459ac[_0x5a3d71(0x207)]('\x20'));
    try {
        let _0x38b578 = '╔═══════❰\x20\x20*🔰*\x20\x20❱══════⬣\x0a║\x20*Titulo\x20∙\x20' + _0x2826a3[_0x5a3d71(0x1e8)][-0x3 * -0x94 + -0x13ff + 0x1243][_0x5a3d71(0x205)] + '*\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*Duracion\x20∙\x20' + _0x2826a3[_0x5a3d71(0x1e8)][-0x1489 + -0x1472 + 0x28fb][_0x5a3d71(0x1ef)] + '*\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*Tipo\x20∙\x20' + _0x2826a3[_0x5a3d71(0x1e8)][-0x565 + 0xa5d + -0x4f8][_0x5a3d71(0x1fc)] + '*\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*Autor\x20∙\x20' + _0x2826a3[_0x5a3d71(0x1e8)][-0x1f66 * -0x1 + -0x1948 + -0x61e]['author'][_0x5a3d71(0x212)] + _0x5a3d71(0x1f8) + _0x2826a3[_0x5a3d71(0x1e8)][0x1 * 0x1a8c + -0xee5 + -0xba7]['ago'] + _0x5a3d71(0x1ec) + ConvertMiles(_0x2826a3[_0x5a3d71(0x1e8)][0x591 * 0x1 + -0x87f + -0x1e * -0x19][_0x5a3d71(0x201)]) + '*\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*Enlace\x20∙\x20' + _0x2826a3[_0x5a3d71(0x1e8)][0x1 * 0x1dad + -0xdf * 0xc + -0x1339][_0x5a3d71(0x1f1)] + _0x5a3d71(0x203) + _0x2826a3[_0x5a3d71(0x1e8)][-0x6 * -0x3ca + -0x50 * -0x4d + -0x2ecc]['type'] + _0x5a3d71(0x211) + _0x2826a3[_0x5a3d71(0x1e8)][-0x160e + -0xb * 0xef + 0x2053][_0x5a3d71(0x213)][_0x5a3d71(0x1f1)] + _0x5a3d71(0x1fb) + vs + _0x5a3d71(0x20f);
        const _0xdeeb05 = [{
                    'buttonId': _0x3911b7[_0x5a3d71(0x218)](prefix, _0x5121e7 + _0x5a3d71(0x216) + _0x2826a3[_0x5a3d71(0x1e8)][0x2f + 0x1093 + -0xa * 0x1ad][_0x5a3d71(0x1f1)] + _0x5a3d71(0x1f5)),
                    'buttonText': { 'displayText': _0x3911b7['rexRn'] },
                    'type': 0x1
                }], _0x1a910c = {
                'document': { 'url': '' + _0x2826a3[_0x5a3d71(0x1e8)][0x5db * -0x1 + -0x1736 * -0x1 + -0x115b][_0x5a3d71(0x1e7)] },
                'mimetype': _0x3911b7[_0x5a3d71(0x20a)],
                'fileName': _0x5a3d71(0x1f4),
                'fileLength': 0x5af3107a3fff,
                'pageCount': 0x1869f,
                'caption': _0x38b578,
                'footer': wm3,
                'buttons': _0xdeeb05,
                'headerType': 0x4,
                'contextInfo': {
                    'externalAdReply': {
                        'title': '' + _0x2826a3[_0x5a3d71(0x1e8)][-0xd5e + 0x1058 * -0x2 + 0x2e0e][_0x5a3d71(0x205)],
                        'sourceUrl': _0x2826a3[_0x5a3d71(0x1e8)][0x2 * -0xce8 + -0x595 * -0x6 + 0x2 * -0x3d7][_0x5a3d71(0x1f1)],
                        'mediaType': 0x1,
                        'thumbnailUrl': _0x2826a3[_0x5a3d71(0x1e8)][-0x1d24 + 0x1c7e + -0x53 * -0x2]['image'],
                        'renderLargerThumbnail': !![]
                    }
                }
            };
        _0x48d154[_0x5a3d71(0x200)](_0x4a00ec[_0x5a3d71(0x1e4)], _0x1a910c, { 'quoted': _0x4a00ec });
        const _0x44bb1c = await await _0x3911b7[_0x5a3d71(0x1f7)](youtubedlv2, _0x2826a3[_0x5a3d71(0x1e8)][0x4 * 0x946 + 0xcb5 * 0x1 + 0x13 * -0x29f][_0x5a3d71(0x1f1)])[_0x5a3d71(0x202)](async _0x361f6b => await youtubedl(_0x2826a3[_0x5a3d71(0x1e8)][0x1f02 + -0x7 * -0x19 + 0x487 * -0x7][_0x5a3d71(0x1f1)]))[_0x5a3d71(0x202)](async _0x1f0c20 => await youtubedlv3(_0x2826a3[_0x5a3d71(0x1e8)][0xe5 * -0x4 + 0x2 * 0x1c7 + -0x1 * -0x6][_0x5a3d71(0x1f1)])), _0x3f8400 = await _0x44bb1c['audio'][_0x3911b7[_0x5a3d71(0x1f0)]][_0x5a3d71(0x1ed)]();
        let _0x3f4c02 = {
            'audio': { 'url': _0x3f8400 },
            'mimetype': _0x3911b7['ewnni'],
            'fileName': '' + _0x2826a3['all'][0x6 * -0x4fd + 0x89f + -0x5 * -0x443][_0x5a3d71(0x205)],
            'contextInfo': {
                'externalAdReply': {
                    'showAdAttribution': !![],
                    'mediaType': 0x2,
                    'mediaUrl': _0x2826a3[_0x5a3d71(0x1e8)][-0xf42 * -0x1 + -0x3 * 0x848 + 0x3 * 0x332][_0x5a3d71(0x1f1)],
                    'title': _0x2826a3[_0x5a3d71(0x1e8)][-0x8b * 0x13 + -0x2014 + 0x2a65 * 0x1]['title'],
                    'body': wm3,
                    'sourceUrl': _0x2826a3[_0x5a3d71(0x1e8)][0xefc + -0x1 * 0xfc1 + 0xc5][_0x5a3d71(0x1f1)],
                    'thumbnailUrl': _0x2826a3[_0x5a3d71(0x1e8)][0x141 * 0xc + -0x1 * 0xf6f + 0x63]['image']
                }
            }
        };
        return _0x48d154['sendMessage'](_0x4a00ec[_0x5a3d71(0x1e4)], _0x3f4c02, { 'quoted': _0x4a00ec });
    } catch {
        throw _0x3911b7['yBrVf'];
    }
};
handler[_0xdd0f21(0x1e2)] = [_0xdd0f21(0x1eb)][_0xdd0f21(0x1fe)](_0x465417 => _0x465417 + '\x20<\x20busqueda\x20>'), handler[_0xdd0f21(0x1f2)] = [_0xdd0f21(0x1f6)], handler[_0xdd0f21(0x215)] = /^play$/i, handler[_0xdd0f21(0x1ea)] = 0x506 + 0x2447 * 0x1 + -0x2948, handler[_0xdd0f21(0x20c)] = 0xb30 * 0x1 + -0x1610 + 0xae0;
export default handler;
function _0x219d() {
    const _0x347694 = [
        'name',
        'author',
        '5550768HHwvFj',
        'command',
        'getvid\x20',
        '4rMSyjL',
        'KKMXf',
        '📽VIDEO',
        'help',
        '106626mlPUbP',
        'chat',
        '[❕𝐈𝐍𝐅𝐎❕]\x20NOMBRE\x20DE\x20LA\x20CANCION\x20FALTANTE,\x20POR\x20FAVOR\x20INGRESE\x20EL\x20COMANDO\x20MAS\x20EL\x20NOMBRE/TITULO\x20DE\x20UNA\x20CANCIÓN\x0a\x0a*➢\x20EJEMPLO:\x0a',
        '14jaXPhq',
        'image',
        'all',
        '*[❕]\x20ERROR,\x20INTENTA\x20DE\x20NUEVO*',
        'dolares',
        'play',
        '*\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*Vistas\x20∙\x20',
        'download',
        '1457757OZVCTL',
        'timestamp',
        'ycwzb',
        'url',
        'tags',
        '997878dtOBPT',
        'DESCARGADOR\x20DE\x20YOUTUBE\x20',
        '\x20360',
        'downloader',
        'qQBWc',
        '*\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*Publicado\x20∙\x20',
        'toString',
        '128kbps',
        '*\x0a║\x20*NOTA:\x20SU\x20AUDIO\x20SE\x20ESTA\x20ENVIANDO*\x0a╚═══════❰\x20*',
        'type',
        '1106905yZrUkX',
        'map',
        '\x20Phonk*',
        'sendMessage',
        'views',
        'catch',
        '*\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*Id\x20∙\x20',
        'application/pdf',
        'title',
        '1sfYTMY',
        'join',
        'search',
        '972030BUQvRJ',
        'qtppN',
        '5026864dQuTVV',
        'exp',
        'replace',
        'split',
        '*\x20❱══════⬣',
        '22zzaCjV',
        '*\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*Canal\x20∙\x20'
    ];
    _0x219d = function () {
        return _0x347694;
    };
    return _0x219d();
}
