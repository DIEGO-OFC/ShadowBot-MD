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

const _0x3e3b56 = _0x4a6d;
(function (_0x3297f6, _0x43a97f) {
    const _0x44f613 = _0x4a6d, _0x443194 = _0x3297f6();
    while (!![]) {
        try {
            const _0x4cb54b = parseInt(_0x44f613(0x127)) / (-0x1b31 * 0x1 + -0xe55 * -0x1 + 0x1 * 0xcdd) * (parseInt(_0x44f613(0x100)) / (-0xbf * 0xd + -0x1bd * 0xb + -0x3c * -0x7b)) + -parseInt(_0x44f613(0x11c)) / (-0x19d3 + 0xffb + 0x9db) * (-parseInt(_0x44f613(0x125)) / (0x2072 + -0x1c5 * 0x11 + -0x1 * 0x259)) + parseInt(_0x44f613(0xfc)) / (-0x481 + -0x3e5 * -0x2 + -0x344) * (parseInt(_0x44f613(0x102)) / (0x16af * -0x1 + -0x1 * 0x10be + 0x2773)) + parseInt(_0x44f613(0x105)) / (-0xd8b + 0x1369 * 0x2 + -0x1940) + parseInt(_0x44f613(0x12b)) / (0xb * 0x353 + -0x3d4 + 0xae7 * -0x3) * (parseInt(_0x44f613(0x114)) / (-0x96b * 0x2 + -0x14a3 + -0x2782 * -0x1)) + -parseInt(_0x44f613(0x113)) / (-0x215d + 0x1c4e + -0x519 * -0x1) * (-parseInt(_0x44f613(0x121)) / (0xc16 + -0x1f2d + 0x1322)) + -parseInt(_0x44f613(0x11d)) / (0x12ab + -0x90e + 0x991 * -0x1);
            if (_0x4cb54b === _0x43a97f)
                break;
            else
                _0x443194['push'](_0x443194['shift']());
        } catch (_0x18cdb5) {
            _0x443194['push'](_0x443194['shift']());
        }
    }
}(_0x1fbd, 0x159dd7 + -0xfa1 * -0x1bb + -0x217c05));
import {
    youtubeSearch,
    youtubedl,
    youtubedlv2,
    youtubedlv3
} from '@bochilteam/scraper';
function _0x1fbd() {
    const _0x2c04d9 = [
        'eKhrx',
        'nopBP',
        'ago',
        '28136pZaRfF',
        'join',
        'downloader',
        'split',
        'author',
        'sendMessage',
        '*\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*Id\x20∙\x20',
        'hGqFU',
        'replace',
        'application/pdf',
        '[❕𝐈𝐍𝐅𝐎❕]\x20NOMBRE\x20DE\x20LA\x20CANCION\x20FALTANTE,\x20POR\x20FAVOR\x20INGRESE\x20EL\x20COMANDO\x20MAS\x20EL\x20NOMBRE/TITULO\x20DE\x20UNA\x20CANCIÓN\x0a\x0a*➢\x20EJEMPLO:\x0a',
        'LpJYc',
        '19990eCMIQh',
        'command',
        'all',
        'dorracoins',
        '1018OTKlaM',
        'audio/mp4',
        '2082ziZnfO',
        'play',
        'type',
        '7851851PuzbKO',
        '*\x20❱══════⬣\x0a',
        'map',
        'views',
        '\x20360',
        '128kbps',
        'search',
        '*\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*Autor\x20∙\x20',
        '*\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*Publicado\x20∙\x20',
        'url',
        'image',
        'audio',
        '*\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*Tipo\x20∙\x20',
        '*\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*Canal\x20∙\x20',
        '348230jGBzKE',
        '2997OpKXYm',
        '*\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*Vistas\x20∙\x20',
        'catch',
        'WPOhz',
        '╔═══════❰\x20\x20*🔰*\x20\x20❱══════⬣\x0a║\x20*Titulo\x20∙\x20',
        'title',
        '*\x0a╚═══════❰\x20*',
        'timestamp',
        '3diWDoX',
        '57533052guTJhS',
        'getvid\x20',
        'chat',
        'tags',
        '77Huvgrf',
        '📽VIDEO',
        'help',
        '$1.',
        '2266840fPHATK',
        '*\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*Duracion\x20∙\x20',
        '2551zVLgVN'
    ];
    _0x1fbd = function () {
        return _0x2c04d9;
    };
    return _0x1fbd();
}
import _0x2d53ea from 'yt-search';
function _0x4a6d(_0x240a91, _0x41722c) {
    const _0x4c0e6c = _0x1fbd();
    return _0x4a6d = function (_0x42beae, _0xf2fedb) {
        _0x42beae = _0x42beae - (-0x1385 + 0x1 * 0x1723 + -0x2ad);
        let _0x10a8a2 = _0x4c0e6c[_0x42beae];
        return _0x10a8a2;
    }, _0x4a6d(_0x240a91, _0x41722c);
}
function ConvertMiles(_0x11703a) {
    const _0x23fffc = _0x4a6d, _0x14a24f = { 'LpJYc': _0x23fffc(0x124) }, _0x138e84 = /(\d)(?=(\d{3})+(?!\d))/g, _0x5cb022 = _0x14a24f[_0x23fffc(0xfb)];
    let _0x2ecafb = _0x11703a['toString']()[_0x23fffc(0xf3)]('.');
    return _0x2ecafb[0x3c9 + -0xa3 * -0x29 + -0x1 * 0x1de4] = _0x2ecafb[-0xbad + 0x18 * 0x8b + 0x15b * -0x1][_0x23fffc(0xf8)](_0x138e84, _0x5cb022), _0x2ecafb[0x15c6 + 0x13fd + -0x29c2] ? _0x2ecafb[_0x23fffc(0xf1)]('.') : _0x2ecafb[-0x1 * -0xf2b + -0x1d82 + 0xe57];
}
let handler = async (_0x523ff1, {
    conn: _0x35bf11,
    command: _0x3e27d8,
    args: _0x44f9b1,
    text: _0xa3624e,
    usedPrefix: _0x3f8b45
}) => {
    const _0x464157 = _0x4a6d, _0x21ca94 = {
            'nopBP': function (_0x196bc9, _0x54feac) {
                return _0x196bc9 + _0x54feac;
            },
            'hGqFU': function (_0x25e027, _0x14be41) {
                return _0x25e027(_0x14be41);
            },
            'eKhrx': _0x464157(0x122),
            'mHwNf': _0x464157(0xf9),
            'WPOhz': _0x464157(0x101)
        };
    if (!_0xa3624e)
        throw _0x464157(0xfa) + _0x21ca94[_0x464157(0x129)](_0x3f8b45, _0x3e27d8) + '\x20Phonk*';
    let _0x4d3b7a = await _0x2d53ea[_0x464157(0x10b)](_0x44f9b1[_0x464157(0xf1)]('\x20'));
    try {
        let _0x88a99 = _0x464157(0x118) + _0x4d3b7a[_0x464157(0xfe)][0x2e * -0xca + -0x589 * -0x4 + 0xe28][_0x464157(0x119)] + _0x464157(0x126) + _0x4d3b7a[_0x464157(0xfe)][-0x25fa + 0x15f0 + 0x100a * 0x1][_0x464157(0x11b)] + _0x464157(0x111) + _0x4d3b7a[_0x464157(0xfe)][-0x184e + 0xbf9 + 0xc55][_0x464157(0x104)] + _0x464157(0x10c) + _0x4d3b7a[_0x464157(0xfe)][0x2028 + -0xe6d + 0x11bb * -0x1][_0x464157(0xf4)]['name'] + _0x464157(0x10d) + _0x4d3b7a['all'][-0x1bad + -0xa38 + 0x25e5 * 0x1][_0x464157(0x12a)] + _0x464157(0x115) + _0x21ca94[_0x464157(0xf7)](ConvertMiles, _0x4d3b7a['all'][-0x1 * -0x183b + 0xe * -0x24f + 0x817][_0x464157(0x108)]) + '*\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*Enlace\x20∙\x20' + _0x4d3b7a[_0x464157(0xfe)][-0x11 * -0xe3 + -0x2 * -0xcc + -0x11 * 0xfb][_0x464157(0x10e)] + _0x464157(0xf6) + _0x4d3b7a[_0x464157(0xfe)][0x3 * -0xce9 + -0x1b79 + 0x4234][_0x464157(0x104)] + _0x464157(0x112) + _0x4d3b7a['all'][-0x5 * -0x397 + -0x2ef + -0x2 * 0x782][_0x464157(0xf4)][_0x464157(0x10e)] + _0x464157(0x11a) + vs + _0x464157(0x106);
        const _0x19a2ea = [{
                    'buttonId': prefix + (_0x3f8b45 + _0x464157(0x11e) + _0x4d3b7a['all'][0x1 * -0x1de9 + 0xda8 + 0x1041 * 0x1]['url'] + _0x464157(0x109)),
                    'buttonText': { 'displayText': _0x21ca94[_0x464157(0x128)] },
                    'type': 0x1
                }], _0x33b0c5 = {
                'document': { 'url': '' + _0x4d3b7a[_0x464157(0xfe)][0x20c + -0x161b + -0x403 * -0x5][_0x464157(0x10f)] },
                'mimetype': _0x21ca94['mHwNf'],
                'fileName': 'DESCARGADOR\x20DE\x20YOUTUBE\x20',
                'fileLength': 0x5af3107a3fff,
                'pageCount': 0x1869f,
                'caption': _0x88a99,
                'footer': wm3,
                'buttons': _0x19a2ea,
                'headerType': 0x4,
                'contextInfo': {
                    'externalAdReply': {
                        'title': '' + _0x4d3b7a[_0x464157(0xfe)][-0x3b * 0xb + -0x19d + 0x162 * 0x3][_0x464157(0x119)],
                        'sourceUrl': _0x4d3b7a[_0x464157(0xfe)][0x1 * 0x1319 + -0x112 * -0xe + 0x2215 * -0x1][_0x464157(0x10e)],
                        'mediaType': 0x1,
                        'thumbnailUrl': _0x4d3b7a[_0x464157(0xfe)][-0x1c * -0x52 + -0x4a1 * 0x4 + -0x4 * -0x263][_0x464157(0x10f)],
                        'renderLargerThumbnail': !![]
                    }
                }
            };
        _0x35bf11[_0x464157(0xf5)](_0x523ff1[_0x464157(0x11f)], _0x33b0c5, { 'quoted': _0x523ff1 });
        const _0x49dbb2 = await await _0x21ca94[_0x464157(0xf7)](youtubedlv2, _0x4d3b7a[_0x464157(0xfe)][-0x63 * -0x39 + -0x1f63 * -0x1 + -0x356e]['url'])[_0x464157(0x116)](async _0x127b0f => await youtubedl(_0x4d3b7a[_0x464157(0xfe)][-0x1 * -0x199 + 0x2624 + 0x1 * -0x27bd][_0x464157(0x10e)]))[_0x464157(0x116)](async _0x3e158a => await youtubedlv3(_0x4d3b7a[_0x464157(0xfe)][0x1d57 + 0x16fc + -0x3453][_0x464157(0x10e)])), _0x7188b8 = await _0x49dbb2[_0x464157(0x110)][_0x464157(0x10a)]['download']();
        let _0x54eb7b = {
            'audio': { 'url': _0x7188b8 },
            'mimetype': _0x21ca94[_0x464157(0x117)],
            'fileName': '' + _0x4d3b7a['all'][-0x1610 + 0xb58 + 0xab8][_0x464157(0x119)],
            'contextInfo': {
                'externalAdReply': {
                    'showAdAttribution': !![],
                    'mediaType': 0x2,
                    'mediaUrl': _0x4d3b7a[_0x464157(0xfe)][-0x1190 + 0x2 * 0x67a + -0x24e * -0x2][_0x464157(0x10e)],
                    'title': _0x4d3b7a[_0x464157(0xfe)][-0x3 * -0x5fc + -0xd74 + -0x480][_0x464157(0x119)],
                    'body': wm3,
                    'sourceUrl': _0x4d3b7a[_0x464157(0xfe)][-0x11a * 0x8 + 0x3 * 0x65c + -0x522 * 0x2][_0x464157(0x10e)],
                    'thumbnailUrl': _0x4d3b7a[_0x464157(0xfe)][0x4a * 0x6f + 0xe34 + 0xed * -0x32][_0x464157(0x10f)]
                }
            }
        };
        return _0x35bf11[_0x464157(0xf5)](_0x523ff1[_0x464157(0x11f)], _0x54eb7b, { 'quoted': _0x523ff1 });
    } catch {
        throw '[❕]\x20ERROR,\x20INTENTA\x20DE\x20NUEVO';
    }
};
handler[_0x3e3b56(0x123)] = [_0x3e3b56(0x103)][_0x3e3b56(0x107)](_0x28686a => _0x28686a + '\x20<\x20busqueda\x20>'), handler[_0x3e3b56(0x120)] = [_0x3e3b56(0xf2)], handler[_0x3e3b56(0xfd)] = /^play$/i, handler[_0x3e3b56(0xff)] = 0x17bf + 0x3 * -0x1a + -0x176c, handler['exp'] = 0xb08 + -0xfef * -0x2 + 0x2ae6 * -0x1;
export default handler;
