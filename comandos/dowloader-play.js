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

const _0x3b90f4 = _0x2a52;
function _0x2157() {
    const _0xf2fcca = [
        '*\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*Tipo\x20∙\x20',
        '5rUPYrO',
        '416941xBAJNH',
        'all',
        'search',
        'exp',
        'CWIPx',
        'ago',
        '*\x20❱══════⬣\x0a',
        '*\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*Vistas\x20∙\x20',
        '75141BLZOfR',
        'replace',
        'type',
        '[❕]\x20ERROR,\x20INTENTA\x20DE\x20NUEVO',
        'tags',
        'sendMessage',
        '3828516GUTSTn',
        '\x20Phonk*',
        'split',
        'audio',
        '109496yJfPuK',
        'image',
        'ubMmA',
        'name',
        'dorracoins',
        '58076AoTApl',
        'FFSgL',
        'join',
        '$1.',
        'url',
        'limit',
        'map',
        'sckDV',
        'views',
        'play',
        '5BEDQhP',
        'chat',
        'title',
        '88vdauyD',
        'IFIbK',
        '*\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*Id\x20∙\x20',
        '2404053XCjqGw',
        'toString',
        '[❕𝐈𝐍𝐅𝐎❕]\x20NOMBRE\x20DE\x20LA\x20CANCION\x20FALTANTE,\x20POR\x20FAVOR\x20INGRESE\x20EL\x20COMANDO\x20MAS\x20EL\x20NOMBRE/TITULO\x20DE\x20UNA\x20CANCIÓN\x0a\x0a*➢\x20EJEMPLO:\x0a',
        'author',
        '324KbFCUM',
        '*\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║*Duracion\x20∙\x20',
        'getvid\x20',
        '10aZZKGD',
        '📽VIDEO',
        '636119qWDelv',
        '*\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*Canal\x20∙\x20',
        'catch',
        '\x20360',
        '╔═══════❰\x20\x20*🔰*\x20\x20❱══════⬣\x0a║\x20*Titulo\x20∙\x20',
        'download',
        'help',
        '*\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║*Autor\x20∙\x20'
    ];
    _0x2157 = function () {
        return _0xf2fcca;
    };
    return _0x2157();
}
function _0x2a52(_0x57a282, _0x298b3d) {
    const _0x167dfe = _0x2157();
    return _0x2a52 = function (_0x28a88b, _0x4530e8) {
        _0x28a88b = _0x28a88b - (-0x669 + -0xe96 + 0x1581 * 0x1);
        let _0x4ec268 = _0x167dfe[_0x28a88b];
        return _0x4ec268;
    }, _0x2a52(_0x57a282, _0x298b3d);
}
(function (_0x11fcee, _0x35a6e2) {
    const _0x338f60 = _0x2a52, _0x261da = _0x11fcee();
    while (!![]) {
        try {
            const _0x352968 = -parseInt(_0x338f60(0xb1)) / (-0x4a9 * 0x2 + 0x9a * -0x14 + 0x47 * 0x4d) * (parseInt(_0x338f60(0xa7)) / (-0xc * 0x306 + -0xdf5 + 0x323f)) + parseInt(_0x338f60(0x98)) / (-0x1 * 0xf6b + 0x1aad * 0x1 + -0x1 * 0xb3f) + -parseInt(_0x338f60(0xa2)) / (-0x2 * -0xd6e + 0xafe + 0x12eb * -0x2) * (parseInt(_0x338f60(0x8f)) / (-0x854 * 0x2 + -0xc6d * 0x1 + -0x1d1a * -0x1)) + -parseInt(_0x338f60(0x9e)) / (-0x1 * -0x628 + -0x16f * 0x4 + -0x66) + -parseInt(_0x338f60(0x90)) / (0x2379 + -0xc91 + 0x16e1 * -0x1) * (parseInt(_0x338f60(0xb4)) / (-0xffa + -0x108 + -0x6 * -0x2d7)) + -parseInt(_0x338f60(0xb7)) / (0x15e2 * 0x1 + -0x1a5 * -0xd + -0x2b3a) * (-parseInt(_0x338f60(0x84)) / (0x98 * 0x2c + 0xb5f * 0x1 + -0x2575)) + -parseInt(_0x338f60(0x86)) / (-0x5 * -0x676 + 0x6e5 + -0xe * 0x2cc) * (-parseInt(_0x338f60(0xbb)) / (-0x1acd + -0x4 * -0x22a + 0x1231));
            if (_0x352968 === _0x35a6e2)
                break;
            else
                _0x261da['push'](_0x261da['shift']());
        } catch (_0x2f01df) {
            _0x261da['push'](_0x261da['shift']());
        }
    }
}(_0x2157, -0x26 * 0x46d3 + -0x2a207 + -0x53 * -0x3acb));
import {
    youtubeSearch,
    youtubedl,
    youtubedlv2,
    youtubedlv3
} from '@bochilteam/scraper';
import _0x1d4254 from 'yt-search';
function ConvertMiles(_0x354796) {
    const _0x53dbc0 = _0x2a52, _0x230e02 = { 'ubMmA': _0x53dbc0(0xaa) }, _0x470d80 = /(\d)(?=(\d{3})+(?!\d))/g, _0x1bbfd0 = _0x230e02[_0x53dbc0(0xa4)];
    let _0x5b85e4 = _0x354796[_0x53dbc0(0xb8)]()[_0x53dbc0(0xa0)]('.');
    return _0x5b85e4[-0x181d + -0xa * 0x309 + 0x3677 * 0x1] = _0x5b85e4[0x1e49 + -0xaa * -0x29 + 0x3983 * -0x1][_0x53dbc0(0x99)](_0x470d80, _0x1bbfd0), _0x5b85e4[0x13 * -0xe3 + -0x1547 + 0x2621] ? _0x5b85e4['join']('.') : _0x5b85e4[-0x1 * 0x355 + -0xf5 * -0x18 + -0x13a3];
}
let handler = async (_0x243afa, {
    conn: _0xb6ffa4,
    command: _0x61cace,
    args: _0x45dfac,
    text: _0xc1b2dd,
    usedPrefix: _0x5d4035
}) => {
    const _0x49b899 = _0x2a52, _0x19b866 = {
            'sckDV': function (_0x7292f3, _0x4c38b2) {
                return _0x7292f3(_0x4c38b2);
            },
            'CWIPx': function (_0x28eb68, _0x494ced) {
                return _0x28eb68 + _0x494ced;
            },
            'HYfGZ': _0x49b899(0x85),
            'FFSgL': '128kbps',
            'LjXrq': 'audio/mp4',
            'IFIbK': _0x49b899(0x9b)
        };
    if (!_0xc1b2dd)
        throw _0x49b899(0xb9) + (_0x5d4035 + _0x61cace) + _0x49b899(0x9f);
    let _0x7907ce = await _0x1d4254[_0x49b899(0x92)](_0x45dfac[_0x49b899(0xa9)]('\x20'));
    try {
        let _0x1f59e7 = _0x49b899(0x8a) + _0x7907ce[_0x49b899(0x91)][-0x11ad + -0x19d2 + 0x83 * 0x55][_0x49b899(0xb3)] + _0x49b899(0x82) + _0x7907ce[_0x49b899(0x91)][0x6 * -0x679 + -0x14e * -0x4 + 0x10cf * 0x2]['timestamp'] + _0x49b899(0x8e) + _0x7907ce[_0x49b899(0x91)][0x7 * -0x23b + 0xa4e + 0x97 * 0x9][_0x49b899(0x9a)] + _0x49b899(0x8d) + _0x7907ce['all'][0x20ac + 0x51a + 0x2 * -0x12e3][_0x49b899(0xba)][_0x49b899(0xa5)] + '*\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*Publicado\x20∙\x20' + _0x7907ce[_0x49b899(0x91)][-0x1f52 + -0xf57 + 0x2ea9][_0x49b899(0x95)] + _0x49b899(0x97) + _0x19b866[_0x49b899(0xae)](ConvertMiles, _0x7907ce[_0x49b899(0x91)][-0x1317 + 0x1 * -0x1a17 + 0x2d2e][_0x49b899(0xaf)]) + '*\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*Enlace\x20∙\x20' + _0x7907ce[_0x49b899(0x91)][0x1952 + -0x3 * 0x113 + -0x1 * 0x1619][_0x49b899(0xab)] + _0x49b899(0xb6) + _0x7907ce['all'][0x1c * -0xb7 + 0x1 * -0x2317 + -0x371b * -0x1][_0x49b899(0x9a)] + _0x49b899(0x87) + _0x7907ce[_0x49b899(0x91)][-0xd4c + -0x11e * -0x2 + -0x1 * -0xb10][_0x49b899(0xba)]['url'] + '*\x0a╚═══════❰\x20*' + vs + _0x49b899(0x96);
        const _0x48dec6 = [{
                    'buttonId': _0x19b866[_0x49b899(0x94)](prefix, _0x5d4035 + _0x49b899(0x83) + _0x7907ce[_0x49b899(0x91)][-0x1 * 0x222e + -0x1bef + 0x3e1d][_0x49b899(0xab)] + _0x49b899(0x89)),
                    'buttonText': { 'displayText': _0x19b866['HYfGZ'] },
                    'type': 0x1
                }], _0x4aeba3 = {
                'document': { 'url': '' + _0x7907ce['all'][0xb51 + -0xf5d + 0x40c][_0x49b899(0xa3)] },
                'mimetype': 'application/pdf',
                'fileName': 'DESCARGADOR\x20DE\x20YOUTUBE\x20',
                'fileLength': 0x5af3107a3fff,
                'pageCount': 0x1869f,
                'caption': _0x1f59e7,
                'footer': wm3,
                'buttons': _0x48dec6,
                'headerType': 0x4,
                'contextInfo': {
                    'externalAdReply': {
                        'title': '' + _0x7907ce[_0x49b899(0x91)][0x1 * -0x761 + -0x1507 + -0x4bc * -0x6][_0x49b899(0xb3)],
                        'sourceUrl': _0x7907ce[_0x49b899(0x91)][0x2f6 * 0x1 + -0x19 * 0x7 + -0x247]['url'],
                        'mediaType': 0x1,
                        'thumbnailUrl': _0x7907ce[_0x49b899(0x91)][0x17 * -0xa7 + 0x1ed * 0x3 + 0x93a][_0x49b899(0xa3)],
                        'renderLargerThumbnail': !![]
                    }
                }
            };
        _0xb6ffa4[_0x49b899(0x9d)](_0x243afa[_0x49b899(0xb2)], _0x4aeba3, { 'quoted': _0x243afa });
        const _0x5d148e = await await _0x19b866['sckDV'](youtubedlv2, _0x7907ce[_0x49b899(0x91)][-0x2 * -0x897 + 0xb * 0x61 + -0x1559 * 0x1][_0x49b899(0xab)])[_0x49b899(0x88)](async _0x4b900a => await youtubedl(_0x7907ce[_0x49b899(0x91)][0x1edd + 0x128b + 0x3e * -0xcc][_0x49b899(0xab)]))['catch'](async _0x59e002 => await youtubedlv3(_0x7907ce[_0x49b899(0x91)][-0x158f + 0x1901 + -0x372][_0x49b899(0xab)])), _0xb1328d = await _0x5d148e[_0x49b899(0xa1)][_0x19b866[_0x49b899(0xa8)]][_0x49b899(0x8b)]();
        let _0x48cfa2 = {
            'audio': { 'url': _0xb1328d },
            'mimetype': _0x19b866['LjXrq'],
            'fileName': '' + _0x7907ce[_0x49b899(0x91)][-0xb * 0x59 + 0x1 * 0x82c + 0x1 * -0x459][_0x49b899(0xb3)],
            'contextInfo': {
                'externalAdReply': {
                    'showAdAttribution': !![],
                    'mediaType': 0x2,
                    'mediaUrl': _0x7907ce[_0x49b899(0x91)][-0x18eb + -0x11 * 0x12e + -0x2cf9 * -0x1]['url'],
                    'title': _0x7907ce[_0x49b899(0x91)][0xcde + 0x1 * 0x163d + -0x231b][_0x49b899(0xb3)],
                    'body': wm3,
                    'sourceUrl': _0x7907ce[_0x49b899(0x91)][0x37e + -0x45 * -0xa + -0x630]['url'],
                    'thumbnailUrl': _0x7907ce[_0x49b899(0x91)][-0x2590 + -0x1ff * -0xe + -0x2 * -0x4cf][_0x49b899(0xa3)]
                }
            }
        };
        return _0xb6ffa4[_0x49b899(0x9d)](_0x243afa[_0x49b899(0xb2)], _0x48cfa2, { 'quoted': _0x243afa });
    } catch {
        throw _0x19b866[_0x49b899(0xb5)];
    }
};
handler[_0x3b90f4(0x8c)] = [_0x3b90f4(0xb0)][_0x3b90f4(0xad)](_0x2d55aa => _0x2d55aa + '\x20<\x20busqueda\x20>'), handler[_0x3b90f4(0x9c)] = ['downloader'], handler['command'] = /^play$/i, handler[_0x3b90f4(0xa6)] = 0x2 * -0x15a + 0x22e3 + -0x202a, handler[_0x3b90f4(0x93)] = 0x3 * -0x19 + 0x1ab9 + -0x1a6e, handler[_0x3b90f4(0xac)] = !![];
export default handler;
