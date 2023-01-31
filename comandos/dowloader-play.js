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

const _0x4980c6 = _0x3722;
(function (_0x4f80a4, _0x47499e) {
    const _0x207811 = _0x3722, _0x5d307c = _0x4f80a4();
    while (!![]) {
        try {
            const _0x512f4f = -parseInt(_0x207811(0x1ef)) / (-0x1 * 0x12d1 + 0xa * 0xc1 + -0x1 * -0xb48) * (parseInt(_0x207811(0x216)) / (0x1d6 + 0x2142 + -0x2316)) + -parseInt(_0x207811(0x205)) / (0xda3 + 0x2555 + 0xa31 * -0x5) + parseInt(_0x207811(0x20f)) / (-0x1b12 + 0x139 * -0xd + -0x1 * -0x2afb) * (-parseInt(_0x207811(0x1ec)) / (0x1dde * 0x1 + -0x160c + -0x7cd)) + -parseInt(_0x207811(0x1e6)) / (0x1e12 + -0x23bf * 0x1 + -0x1 * -0x5b3) + -parseInt(_0x207811(0x218)) / (0x1096 + -0x99b * -0x1 + -0x1a2a) + -parseInt(_0x207811(0x1fb)) / (-0x19e9 + 0x2c * 0x3 + 0x196d * 0x1) * (parseInt(_0x207811(0x21a)) / (0x23e2 + 0x3 * -0x6da + -0xf4b)) + parseInt(_0x207811(0x1ea)) / (0x417 * -0x8 + -0x1573 + 0x3635) * (parseInt(_0x207811(0x211)) / (0xa42 + -0x4 * 0x99e + 0x1c41 * 0x1));
            if (_0x512f4f === _0x47499e)
                break;
            else
                _0x5d307c['push'](_0x5d307c['shift']());
        } catch (_0x37dc27) {
            _0x5d307c['push'](_0x5d307c['shift']());
        }
    }
}(_0x153f, -0x30671 * 0x1 + -0x287cf + -0x2 * -0x3998c));
import {
    youtubeSearch,
    youtubedl,
    youtubedlv2,
    youtubedlv3
} from '@bochilteam/scraper';
function _0x3722(_0x5de62f, _0x5c0d5f) {
    const _0x436342 = _0x153f();
    return _0x3722 = function (_0x559448, _0x3dbdd4) {
        _0x559448 = _0x559448 - (-0x26ba + -0x7 * 0x3e4 + -0x10f7 * -0x4);
        let _0x22ab4c = _0x436342[_0x559448];
        return _0x22ab4c;
    }, _0x3722(_0x5de62f, _0x5c0d5f);
}
import _0x11ba39 from 'yt-search';
function ConvertMiles(_0x2e646a) {
    const _0x2b3402 = _0x3722, _0x1d805e = { 'bYZaR': _0x2b3402(0x1e8) }, _0x48c051 = /(\d)(?=(\d{3})+(?!\d))/g, _0x5051fb = _0x1d805e[_0x2b3402(0x213)];
    let _0x19facc = _0x2e646a['toString']()['split']('.');
    return _0x19facc[0xef * -0x1f + -0xb7e + -0x286f * -0x1] = _0x19facc[-0x6ca + -0xb65 + 0x122f]['replace'](_0x48c051, _0x5051fb), _0x19facc[0x10d * -0x17 + -0x1068 + 0x2894] ? _0x19facc[_0x2b3402(0x1ff)]('.') : _0x19facc[-0x1b8d * 0x1 + 0x1933 + 0x25a];
}
let handler = async (_0x3b2625, {
    conn: _0x2037ee,
    command: _0x4a0b7d,
    args: _0x3e1ba3,
    text: _0x3050fd,
    usedPrefix: _0x1aad24
}) => {
    const _0xa8a471 = _0x3722, _0x128236 = {
            'zpKAK': function (_0x490dfe, _0xaea0d6) {
                return _0x490dfe + _0xaea0d6;
            },
            'stZQY': function (_0xaae7b9, _0x43a9d0) {
                return _0xaae7b9(_0x43a9d0);
            },
            'rHzbt': _0xa8a471(0x202),
            'zBrNt': 'application/pdf',
            'oVsRu': _0xa8a471(0x219),
            'fZFhi': _0xa8a471(0x21b),
            'EMvMT': _0xa8a471(0x203)
        };
    if (!_0x3050fd)
        throw _0xa8a471(0x20c) + _0x128236[_0xa8a471(0x1eb)](_0x1aad24, _0x4a0b7d) + _0xa8a471(0x1ed);
    let _0x17d8e2 = await _0x11ba39[_0xa8a471(0x1f2)](_0x3e1ba3[_0xa8a471(0x1ff)]('\x20'));
    try {
        let _0x30fae6 = '╔═══════❰\x20\x20*🔰*\x20\x20❱══════⬣\x0a║\x20*Titulo\x20∙\x20' + _0x17d8e2['all'][-0x257 + 0x1e2 * -0x1 + 0x2f * 0x17][_0xa8a471(0x1fe)] + _0xa8a471(0x207) + _0x17d8e2[_0xa8a471(0x1fa)][0x2 * 0xd4d + -0xd5 + -0x2dd * 0x9][_0xa8a471(0x209)] + '*\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*Tipo\x20∙\x20' + _0x17d8e2[_0xa8a471(0x1fa)][0x3 * 0x1c3 + -0x1fbc + 0xb7 * 0x25][_0xa8a471(0x1f0)] + _0xa8a471(0x214) + _0x17d8e2[_0xa8a471(0x1fa)][-0x2313 + 0x1 * -0x259 + 0x256c][_0xa8a471(0x1f4)][_0xa8a471(0x1f6)] + _0xa8a471(0x1f7) + _0x17d8e2[_0xa8a471(0x1fa)][0x16b1 + -0x1 * 0x2635 + 0x52c * 0x3][_0xa8a471(0x1ee)] + _0xa8a471(0x1f3) + _0x128236['stZQY'](ConvertMiles, _0x17d8e2[_0xa8a471(0x1fa)][-0xb11 + 0x515 + 0x5fc * 0x1][_0xa8a471(0x1f8)]) + _0xa8a471(0x212) + _0x17d8e2[_0xa8a471(0x1fa)][-0xa3f + 0x169c + 0x5 * -0x279][_0xa8a471(0x204)] + '*\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*Id\x20∙\x20' + _0x17d8e2[_0xa8a471(0x1fa)][0x1 * -0x18c1 + -0x10c8 + -0x2989 * -0x1][_0xa8a471(0x1f0)] + _0xa8a471(0x1e9) + _0x17d8e2[_0xa8a471(0x1fa)][0x19a9 + 0x26 * -0x13 + -0x3 * 0x79d][_0xa8a471(0x1f4)]['url'] + _0xa8a471(0x1f5) + vs + _0xa8a471(0x1fc);
        const _0xf3bec6 = [{
                    'buttonId': prefix + (_0x1aad24 + 'getvid\x20' + _0x17d8e2[_0xa8a471(0x1fa)][-0x1921 + 0x1d5d + 0x10f * -0x4]['url'] + _0xa8a471(0x20e)),
                    'buttonText': { 'displayText': _0x128236[_0xa8a471(0x20b)] },
                    'type': 0x1
                }], _0x41f3c = {
                'document': { 'url': '' + _0x17d8e2[_0xa8a471(0x1fa)][-0x32b * 0x3 + 0x20dc + -0x175b][_0xa8a471(0x210)] },
                'mimetype': _0x128236[_0xa8a471(0x21c)],
                'fileName': 'DESCARGADOR\x20DE\x20YOUTUBE\x20',
                'fileLength': 0x5af3107a3fff,
                'pageCount': 0x1869f,
                'caption': _0x30fae6,
                'footer': wm3,
                'buttons': _0xf3bec6,
                'headerType': 0x4,
                'contextInfo': {
                    'externalAdReply': {
                        'title': '' + _0x17d8e2[_0xa8a471(0x1fa)][0xbdf + -0x32 * -0x8d + -0x2769][_0xa8a471(0x1fe)],
                        'sourceUrl': _0x17d8e2[_0xa8a471(0x1fa)][-0x191e + 0x2aa * -0x8 + 0x2e6e][_0xa8a471(0x204)],
                        'mediaType': 0x1,
                        'thumbnailUrl': _0x17d8e2[_0xa8a471(0x1fa)][-0x2ed * 0xb + -0xc * -0x11b + 0x12eb]['image'],
                        'renderLargerThumbnail': !![]
                    }
                }
            };
        _0x2037ee['sendMessage'](_0x3b2625['chat'], _0x41f3c, { 'quoted': _0x3b2625 });
        const _0x5749b4 = await await _0x128236[_0xa8a471(0x215)](youtubedlv2, _0x17d8e2[_0xa8a471(0x1fa)][0xd5b + -0x1aab * -0x1 + -0xda * 0x2f][_0xa8a471(0x204)])[_0xa8a471(0x206)](async _0x1c9844 => await youtubedl(_0x17d8e2[_0xa8a471(0x1fa)][-0x1 * -0x605 + -0x1972 + -0x136d * -0x1][_0xa8a471(0x204)]))[_0xa8a471(0x206)](async _0x4dfa68 => await youtubedlv3(_0x17d8e2[_0xa8a471(0x1fa)][-0x53b * -0x1 + -0x1e0b * 0x1 + -0x2 * -0xc68][_0xa8a471(0x204)])), _0x54aaaa = await _0x5749b4['audio'][_0x128236[_0xa8a471(0x1e7)]][_0xa8a471(0x20d)]();
        let _0x58e77d = {
            'audio': { 'url': _0x54aaaa },
            'mimetype': _0x128236['fZFhi'],
            'fileName': '' + _0x17d8e2[_0xa8a471(0x1fa)][0x143 * 0x1c + 0x27 * -0x3b + -0x265 * 0xb]['title'],
            'contextInfo': {
                'externalAdReply': {
                    'showAdAttribution': !![],
                    'mediaType': 0x2,
                    'mediaUrl': _0x17d8e2['all'][0x5 * 0x297 + 0x21dc + -0x2ecf][_0xa8a471(0x204)],
                    'title': _0x17d8e2[_0xa8a471(0x1fa)][-0x98c * -0x1 + -0x4ff * -0x6 + -0x2786]['title'],
                    'body': wm3,
                    'sourceUrl': _0x17d8e2[_0xa8a471(0x1fa)][0x17 * -0xe9 + 0x23e0 + 0x5 * -0x2fd][_0xa8a471(0x204)],
                    'thumbnailUrl': _0x17d8e2[_0xa8a471(0x1fa)][0xf49 + 0x1f65 + -0x2eae][_0xa8a471(0x210)]
                }
            }
        };
        return _0x2037ee['sendMessage'](_0x3b2625[_0xa8a471(0x208)], _0x58e77d, { 'quoted': _0x3b2625 });
    } catch {
        throw _0x128236[_0xa8a471(0x1f1)];
    }
};
handler['help'] = [_0x4980c6(0x20a)]['map'](_0x2960d5 => _0x2960d5 + _0x4980c6(0x1fd)), handler[_0x4980c6(0x21d)] = [_0x4980c6(0x201)], handler[_0x4980c6(0x217)] = /^play$/i, handler['dorracoins'] = 0x1 * -0xa3 + -0x2261 + 0x2309, handler[_0x4980c6(0x1f9)] = -0x1287 + 0x1a6e + -0x1 * 0x7e7, handler[_0x4980c6(0x200)] = !![];
function _0x153f() {
    const _0x32ce1a = [
        'image',
        '27665aFanip',
        '*\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*Enlace\x20∙\x20',
        'bYZaR',
        '*\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║*Autor\x20∙\x20',
        'stZQY',
        '6928ZVnRrb',
        'command',
        '997878ftBGtj',
        '128kbps',
        '621XwmEnc',
        'audio/mp4',
        'zBrNt',
        'tags',
        '397584aEjpwX',
        'oVsRu',
        '$1.',
        '*\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*Canal\x20∙\x20',
        '2950CJOvUb',
        'zpKAK',
        '11640sPeyFl',
        '\x20Phonk*',
        'ago',
        '33IiQICJ',
        'type',
        'EMvMT',
        'search',
        '*\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*Vistas\x20∙\x20',
        'author',
        '*\x0a╚═══════❰\x20*',
        'name',
        '*\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*Publicado\x20∙\x20',
        'views',
        'exp',
        'all',
        '14768fYSzYB',
        '*\x20❱══════⬣\x0a',
        '\x20<\x20busqueda\x20>',
        'title',
        'join',
        'limit',
        'downloader',
        '📽VIDEO',
        '[❕]\x20ERROR,\x20INTENTA\x20DE\x20NUEVO',
        'url',
        '390423IfUEMq',
        'catch',
        '*\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║*Duracion\x20∙\x20',
        'chat',
        'timestamp',
        'play',
        'rHzbt',
        '[❕𝐈𝐍𝐅𝐎❕]\x20NOMBRE\x20DE\x20LA\x20CANCION\x20FALTANTE,\x20POR\x20FAVOR\x20INGRESE\x20EL\x20COMANDO\x20MAS\x20EL\x20NOMBRE/TITULO\x20DE\x20UNA\x20CANCIÓN\x0a\x0a*➢\x20EJEMPLO:\x0a',
        'download',
        '\x20360',
        '92RoDbfR'
    ];
    _0x153f = function () {
        return _0x32ce1a;
    };
    return _0x153f();
}
export default handler;
