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

function _0x560e(_0x4ef556, _0x4910a9) {
    const _0x43c476 = _0xcb81();
    return _0x560e = function (_0x1cf845, _0x46397f) {
        _0x1cf845 = _0x1cf845 - (0xe15 + 0x3 * -0x766 + 0x9dd);
        let _0xbcb84d = _0x43c476[_0x1cf845];
        return _0xbcb84d;
    }, _0x560e(_0x4ef556, _0x4910a9);
}
const _0x3411d7 = _0x560e;
function _0xcb81() {
    const _0x3c6886 = [
        '34149OciiZI',
        'dolares',
        'exp',
        '[❕]\x20ERROR,\x20INTENTA\x20DE\x20NUEVO',
        '*\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*Duracion\x20∙\x20',
        'all',
        'type',
        '45UEApih',
        'getvid\x20',
        '*\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*Tipo\x20∙\x20',
        'image',
        '128kbps',
        'TjFiO',
        'search',
        '2108305fccTIz',
        'EDrDT',
        'join',
        'downloader',
        'split',
        'audio',
        'DESCARGADOR\x20DE\x20YOUTUBE\x20',
        'replace',
        'Lyrmv',
        '[❕𝐈𝐍𝐅𝐎❕]\x20NOMBRE\x20DE\x20LA\x20CANCION\x20FALTANTE,\x20POR\x20FAVOR\x20INGRESE\x20EL\x20COMANDO\x20MAS\x20EL\x20NOMBRE/TITULO\x20DE\x20UNA\x20CANCIÓN\x0a\x0a*➢\x20EJEMPLO:\x0a',
        'ago',
        'application/pdf',
        'download',
        '6927552cqOJfU',
        'WvMot',
        'tags',
        'toString',
        '*\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*Id\x20∙\x20',
        '257760WWCUAT',
        'jRgkV',
        '\x20360',
        'title',
        'audio/mp4',
        'author',
        '52322mTZrqZ',
        '*\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*Enlace\x20∙\x20',
        '╔═══════❰\x20\x20*🔰*\x20\x20❱══════⬣\x0a║\x20*Titulo\x20∙\x20',
        'chat',
        '📽VIDEO',
        'timestamp',
        'map',
        'sendMessage',
        '605038HEuPvk',
        '3244640HIFiSG',
        '*\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*Autor\x20∙\x20',
        'play',
        '$1.',
        'url',
        '6WlKfxj'
    ];
    _0xcb81 = function () {
        return _0x3c6886;
    };
    return _0xcb81();
}
(function (_0x420083, _0x4082d9) {
    const _0x3b80ee = _0x560e, _0x545931 = _0x420083();
    while (!![]) {
        try {
            const _0x1166c5 = -parseInt(_0x3b80ee(0x1eb)) / (0x9f1 + -0x14d1 + -0x22d * -0x5) + -parseInt(_0x3b80ee(0x1dc)) / (0x16d9 + 0x240e + -0x3ae5 * 0x1) * (parseInt(_0x3b80ee(0x1f2)) / (-0x4 * 0x5e6 + -0x2ec * -0xd + -0xe61)) + -parseInt(_0x3b80ee(0x1d6)) / (0x1b2a + 0x243c + -0x10a * 0x3d) + -parseInt(_0x3b80ee(0x1c4)) / (-0x486 + -0x1f05 * 0x1 + 0x2390) * (-parseInt(_0x3b80ee(0x1ea)) / (0x56 * -0x40 + 0x182e + -0x2 * 0x154)) + parseInt(_0x3b80ee(0x1e4)) / (-0x126 + -0x593 + -0x6c0 * -0x1) + -parseInt(_0x3b80ee(0x1e5)) / (-0x41d * 0x2 + 0xa49 * -0x3 + 0x13 * 0x20f) + parseInt(_0x3b80ee(0x1d1)) / (-0x21f1 + -0x24b2 + 0x46ac);
            if (_0x1166c5 === _0x4082d9)
                break;
            else
                _0x545931['push'](_0x545931['shift']());
        } catch (_0x3a35f4) {
            _0x545931['push'](_0x545931['shift']());
        }
    }
}(_0xcb81, 0xa7a50 + -0x97cb6 + -0x1 * -0x4d39d));
import {
    youtubeSearch,
    youtubedl,
    youtubedlv2,
    youtubedlv3
} from '@bochilteam/scraper';
import _0x16b744 from 'yt-search';
function ConvertMiles(_0x1562f5) {
    const _0x42bc62 = _0x560e, _0x347d9a = /(\d)(?=(\d{3})+(?!\d))/g, _0x573697 = _0x42bc62(0x1e8);
    let _0x130477 = _0x1562f5[_0x42bc62(0x1d4)]()[_0x42bc62(0x1c8)]('.');
    return _0x130477[0x1ae2 + 0x219 * -0xd + -0x21 * -0x3] = _0x130477[-0x1fc8 + 0x3 * 0xb1a + 0x27 * -0xa][_0x42bc62(0x1cb)](_0x347d9a, _0x573697), _0x130477[-0xf3 * 0x5 + 0x2016 + -0xdab * 0x2] ? _0x130477['join']('.') : _0x130477[-0x3 * -0x60d + -0x6 * 0x547 + -0x1 * -0xd83];
}
let handler = async (_0x1f5dd8, {
    conn: _0x4120db,
    command: _0x4631d2,
    args: _0x3f027f,
    text: _0x31d270,
    usedPrefix: _0x4d6807
}) => {
    const _0x1431be = _0x560e, _0x5548ce = {
            'EDrDT': function (_0xb24095, _0x5be6fa) {
                return _0xb24095 + _0x5be6fa;
            },
            'Lyrmv': function (_0x37c2d2, _0x53ee00) {
                return _0x37c2d2(_0x53ee00);
            },
            'WdQyX': function (_0x5e41ca, _0x5b0bc8) {
                return _0x5e41ca + _0x5b0bc8;
            },
            'mPPVF': _0x1431be(0x1cf),
            'GkyHA': function (_0x5cbe41, _0x2f13c5) {
                return _0x5cbe41(_0x2f13c5);
            },
            'TjFiO': _0x1431be(0x1c1),
            'WvMot': _0x1431be(0x1da),
            'jRgkV': _0x1431be(0x1ee)
        };
    if (!_0x31d270)
        throw _0x1431be(0x1cd) + _0x5548ce[_0x1431be(0x1c5)](_0x4d6807, _0x4631d2) + '\x20Phonk*';
    let _0x2371c8 = await _0x16b744[_0x1431be(0x1c3)](_0x3f027f[_0x1431be(0x1c6)]('\x20'));
    try {
        let _0x1fd77c = _0x1431be(0x1de) + _0x2371c8[_0x1431be(0x1f0)][-0x210a + 0x3 * 0x46f + 0x13bd]['title'] + _0x1431be(0x1ef) + _0x2371c8['all'][-0x1e40 + 0x1860 + 0x5e0][_0x1431be(0x1e1)] + _0x1431be(0x1f4) + _0x2371c8['all'][0x20f5 + 0x311 + -0x3a * 0x9f][_0x1431be(0x1f1)] + _0x1431be(0x1e6) + _0x2371c8[_0x1431be(0x1f0)][-0x922 * -0x1 + 0x228 + -0xb4a][_0x1431be(0x1db)]['name'] + '*\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*Publicado\x20∙\x20' + _0x2371c8['all'][-0x607 * -0x2 + 0x1 * 0x1322 + -0x1f30][_0x1431be(0x1ce)] + '*\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*Vistas\x20∙\x20' + _0x5548ce[_0x1431be(0x1cc)](ConvertMiles, _0x2371c8[_0x1431be(0x1f0)][0x12 * 0x12 + 0xd74 + -0xeb8]['views']) + _0x1431be(0x1dd) + _0x2371c8[_0x1431be(0x1f0)][-0x15b0 + 0x2c6 * -0x7 + 0x2 * 0x148d][_0x1431be(0x1e9)] + _0x1431be(0x1d5) + _0x2371c8[_0x1431be(0x1f0)][0x1012 + 0xbb9 * 0x3 + 0x3f1 * -0xd][_0x1431be(0x1f1)] + '*\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*Canal\x20∙\x20' + _0x2371c8[_0x1431be(0x1f0)][0xc2 * 0xb + -0x2677 + 0x9 * 0x359][_0x1431be(0x1db)][_0x1431be(0x1e9)] + '*\x0a\x0a║\x20*NOTA:\x20SU\x20AUDIO\x20SE\x20ESTA\x20ENVIANDO*\x0a╚═══════❰\x20*' + vs + '*\x20❱══════⬣\x0a\x0a';
        const _0x5e8ade = [{
                    'buttonId': _0x5548ce['WdQyX'](prefix, _0x4d6807 + _0x1431be(0x1f3) + _0x2371c8['all'][-0x1 * -0x243a + -0x4 * -0x39a + -0x32a2][_0x1431be(0x1e9)] + _0x1431be(0x1d8)),
                    'buttonText': { 'displayText': _0x1431be(0x1e0) },
                    'type': 0x1
                }], _0x5ada47 = {
                'document': { 'url': '' + _0x2371c8['all'][-0x207b + -0xbdd + 0x2c58][_0x1431be(0x1c0)] },
                'mimetype': _0x5548ce['mPPVF'],
                'fileName': _0x1431be(0x1ca),
                'fileLength': 0x5af3107a3fff,
                'pageCount': 0x1869f,
                'caption': _0x1fd77c,
                'footer': wm3,
                'buttons': _0x5e8ade,
                'headerType': 0x4,
                'contextInfo': {
                    'externalAdReply': {
                        'title': '' + _0x2371c8[_0x1431be(0x1f0)][-0x25ad + 0x1900 + 0xcad * 0x1][_0x1431be(0x1d9)],
                        'sourceUrl': _0x2371c8[_0x1431be(0x1f0)][0x18cd + -0x1 * 0x1d03 + 0x436][_0x1431be(0x1e9)],
                        'mediaType': 0x1,
                        'thumbnailUrl': _0x2371c8[_0x1431be(0x1f0)][0x2085 + -0x146 * -0xf + -0x3 * 0x1135][_0x1431be(0x1c0)],
                        'renderLargerThumbnail': !![]
                    }
                }
            };
        _0x4120db[_0x1431be(0x1e3)](_0x1f5dd8[_0x1431be(0x1df)], _0x5ada47, { 'quoted': _0x1f5dd8 });
        const _0x393862 = await await _0x5548ce['GkyHA'](youtubedlv2, _0x2371c8[_0x1431be(0x1f0)][-0x7 * -0x495 + -0x1ffa + 0x5 * -0x5]['url'])['catch'](async _0x5cf5c6 => await youtubedl(_0x2371c8[_0x1431be(0x1f0)][0x20df + -0x1 * -0x1999 + -0x3a78]['url']))['catch'](async _0x10d2f4 => await youtubedlv3(_0x2371c8[_0x1431be(0x1f0)][-0x2ce + 0xa * 0xe7 + -0x638][_0x1431be(0x1e9)])), _0x5168fe = await _0x393862[_0x1431be(0x1c9)][_0x5548ce[_0x1431be(0x1c2)]][_0x1431be(0x1d0)]();
        let _0x344320 = {
            'audio': { 'url': _0x5168fe },
            'mimetype': _0x5548ce[_0x1431be(0x1d2)],
            'fileName': '' + _0x2371c8['all'][0x19a0 + -0x1f2b + 0x21 * 0x2b]['title'],
            'contextInfo': {
                'externalAdReply': {
                    'showAdAttribution': !![],
                    'mediaType': 0x2,
                    'mediaUrl': _0x2371c8['all'][0x161 + 0x1c97 * 0x1 + -0x1df8][_0x1431be(0x1e9)],
                    'title': _0x2371c8['all'][-0xcec + -0x10f * -0x1d + -0x5ed * 0x3][_0x1431be(0x1d9)],
                    'body': wm3,
                    'sourceUrl': _0x2371c8[_0x1431be(0x1f0)][0x2 * 0x92f + 0x4e8 * -0x1 + -0x1 * 0xd76][_0x1431be(0x1e9)],
                    'thumbnailUrl': _0x2371c8[_0x1431be(0x1f0)][-0x1484 + -0x1 * 0x158a + 0x2a0e][_0x1431be(0x1c0)]
                }
            }
        };
        return _0x4120db[_0x1431be(0x1e3)](_0x1f5dd8[_0x1431be(0x1df)], _0x344320, { 'quoted': _0x1f5dd8 });
    } catch {
        throw _0x5548ce[_0x1431be(0x1d7)];
    }
};
handler['help'] = [_0x3411d7(0x1e7)][_0x3411d7(0x1e2)](_0xb41afb => _0xb41afb + '\x20<\x20busqueda\x20>'), handler[_0x3411d7(0x1d3)] = [_0x3411d7(0x1c7)], handler['command'] = /^play$/i, handler[_0x3411d7(0x1ec)] = 0x3b8 + -0x39 * 0x8a + 0x1b07, handler[_0x3411d7(0x1ed)] = 0x5b1 + -0xc * 0x135 + 0x8cb;
export default handler;
