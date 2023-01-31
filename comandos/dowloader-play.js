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

const _0xaa9f6d = _0x59f8;
(function (_0x4f4b0e, _0x571412) {
    const _0x3222a3 = _0x59f8, _0x2c24cd = _0x4f4b0e();
    while (!![]) {
        try {
            const _0x3af932 = parseInt(_0x3222a3(0x169)) / (0xa * -0x80 + -0x1ded + 0x11 * 0x20e) * (-parseInt(_0x3222a3(0x182)) / (0xc2d + 0x3b3 * -0x3 + -0x1 * 0x112)) + parseInt(_0x3222a3(0x176)) / (0x194d + 0x2386 + 0x79a * -0x8) * (parseInt(_0x3222a3(0x17f)) / (-0x1e90 + -0x169c + 0x3530)) + parseInt(_0x3222a3(0x165)) / (-0x2213 + 0x1 * 0x577 + 0x1 * 0x1ca1) + parseInt(_0x3222a3(0x187)) / (-0x83 * 0x23 + 0x1362 + -0x173) + parseInt(_0x3222a3(0x17d)) / (0x23ed + 0x32e * 0xb + 0x6 * -0xbd0) * (-parseInt(_0x3222a3(0x160)) / (-0x1383 + -0x1f * 0x35 + -0xcfb * -0x2)) + parseInt(_0x3222a3(0x178)) / (0x1660 * -0x1 + -0x1e81 + 0x34ea) + parseInt(_0x3222a3(0x16f)) / (0x53 * -0x77 + -0x1a4e + 0x40ed);
            if (_0x3af932 === _0x571412)
                break;
            else
                _0x2c24cd['push'](_0x2c24cd['shift']());
        } catch (_0x4d883a) {
            _0x2c24cd['push'](_0x2c24cd['shift']());
        }
    }
}(_0x3b5c, 0x2 * 0x15d03 + 0x4047b * 0x1 + -0x3b0d7));
import {
    youtubeSearch,
    youtubedl,
    youtubedlv2,
    youtubedlv3
} from '@bochilteam/scraper';
import _0x3cf4f9 from 'yt-search';
function ConvertMiles(_0x5553ae) {
    const _0x5d49ad = _0x59f8, _0x545e9d = { 'LFrlC': _0x5d49ad(0x173) }, _0x41acea = /(\d)(?=(\d{3})+(?!\d))/g, _0x487248 = _0x545e9d[_0x5d49ad(0x17a)];
    let _0x4cf6c7 = _0x5553ae['toString']()[_0x5d49ad(0x184)]('.');
    return _0x4cf6c7[-0xc53 + -0x3 * 0xafe + -0x1 * -0x2d4d] = _0x4cf6c7[0x1be * -0xa + 0x95 * -0x17 + 0x21 * 0xef][_0x5d49ad(0x171)](_0x41acea, _0x487248), _0x4cf6c7[0x19 * -0x59 + -0x173e + -0x4 * -0x7fc] ? _0x4cf6c7['join']('.') : _0x4cf6c7[-0x1e53 * 0x1 + -0x28 * -0xe9 + 0x3 * -0x207];
}
let handler = async (_0x47824a, {
    conn: _0x571e22,
    command: _0x139bb2,
    args: _0x401b1e,
    text: _0x14eee6,
    usedPrefix: _0x2bac47
}) => {
    const _0x48cc04 = _0x59f8, _0x2c9785 = {
            'GWcCO': function (_0x412b4b, _0x460fb6) {
                return _0x412b4b + _0x460fb6;
            },
            'VCpSz': function (_0x4c3a48, _0x40c6c7) {
                return _0x4c3a48(_0x40c6c7);
            },
            'sSriL': _0x48cc04(0x157)
        };
    if (!_0x14eee6)
        throw _0x48cc04(0x167) + _0x2c9785['GWcCO'](_0x2bac47, _0x139bb2) + '\x20Phonk*';
    let _0x62558e = await _0x3cf4f9[_0x48cc04(0x161)](_0x401b1e['join']('\x20'));
    try {
        let _0x4c4941 = _0x48cc04(0x162) + _0x62558e['all'][-0x2 * 0xdf7 + -0x1250 + 0x2e3e][_0x48cc04(0x189)] + _0x48cc04(0x183) + _0x62558e['all'][0x3a * 0x1f + 0x10f4 + -0x17fa][_0x48cc04(0x16d)] + _0x48cc04(0x168) + _0x62558e['all'][-0x7cd * 0x1 + 0x245 * 0x10 + -0x32b * 0x9][_0x48cc04(0x164)] + _0x48cc04(0x177) + _0x62558e[_0x48cc04(0x15a)][-0x1f * 0x2c + 0xb91 + -0x63d]['author'][_0x48cc04(0x170)] + _0x48cc04(0x158) + _0x62558e[_0x48cc04(0x15a)][-0x6 * 0x38c + -0x3 * -0x41f + 0x8eb][_0x48cc04(0x174)] + '*\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*Vistas\x20∙\x20' + _0x2c9785['VCpSz'](ConvertMiles, _0x62558e['all'][0x1 * 0x232b + 0x26e6 + -0x4a11]['views']) + _0x48cc04(0x15e) + _0x62558e['all'][-0x1372 + 0xc95 + 0xfb * 0x7][_0x48cc04(0x166)] + _0x48cc04(0x180) + _0x62558e[_0x48cc04(0x15a)][0x4 * -0x40a + -0x5d9 * -0x2 + 0x476]['type'] + _0x48cc04(0x175) + _0x62558e[_0x48cc04(0x15a)][0x19 * -0x17e + 0x1172 * 0x2 + 0x26a]['author']['url'] + '*\x0a╚═══════❰\x20*' + vs + _0x48cc04(0x16e);
        const _0x1098f0 = [{
                    'buttonId': prefix + (_0x2bac47 + 'getvid\x20' + _0x62558e[_0x48cc04(0x15a)][0x1 * -0x1a2f + 0x1476 + 0x5b9][_0x48cc04(0x166)] + _0x48cc04(0x17c)),
                    'buttonText': { 'displayText': _0x2c9785[_0x48cc04(0x179)] },
                    'type': 0x1
                }], _0x44e2cb = {
                'document': { 'url': '' + _0x62558e[_0x48cc04(0x15a)][0xd * -0x2b + -0x24f2 + -0x35 * -0xbd][_0x48cc04(0x181)] },
                'mimetype': _0x48cc04(0x15d),
                'fileName': _0x48cc04(0x17b),
                'fileLength': 0x5af3107a3fff,
                'pageCount': 0x1869f,
                'caption': _0x4c4941,
                'footer': wm3,
                'buttons': _0x1098f0,
                'headerType': 0x4,
                'contextInfo': {
                    'externalAdReply': {
                        'title': '' + _0x62558e['all'][-0x1bc5 + 0x2109 + -0x544]['title'],
                        'sourceUrl': _0x62558e[_0x48cc04(0x15a)][0x1d5 * 0x4 + -0x61c * 0x3 + 0xb00][_0x48cc04(0x166)],
                        'mediaType': 0x1,
                        'thumbnailUrl': _0x62558e[_0x48cc04(0x15a)][-0xd * -0x89 + 0x1 * -0x1bf2 + 0x14fd]['image'],
                        'renderLargerThumbnail': !![]
                    }
                }
            };
        _0x571e22['sendMessage'](_0x47824a[_0x48cc04(0x172)], _0x44e2cb, { 'quoted': _0x47824a });
        const _0xcd79c7 = await await youtubedlv2(_0x62558e[_0x48cc04(0x15a)][-0x26c4 + 0x241c * 0x1 + 0x2a8][_0x48cc04(0x166)])[_0x48cc04(0x18a)](async _0x2b17f9 => await youtubedl(_0x62558e[_0x48cc04(0x15a)][-0x4db + -0x11af * 0x1 + 0x168a][_0x48cc04(0x166)]))[_0x48cc04(0x18a)](async _0x4b4c75 => await youtubedlv3(_0x62558e[_0x48cc04(0x15a)][-0x36b * 0xb + 0x2418 + 0x181][_0x48cc04(0x166)])), _0x4385ed = await _0xcd79c7[_0x48cc04(0x16c)][_0x48cc04(0x188)]['download']();
        let _0x599c1b = {
            'audio': { 'url': _0x4385ed },
            'mimetype': _0x48cc04(0x185),
            'fileName': '' + _0x62558e[_0x48cc04(0x15a)][-0x1 * 0x472 + 0x1d76 + -0x1904]['title'],
            'contextInfo': {
                'externalAdReply': {
                    'showAdAttribution': !![],
                    'mediaType': 0x2,
                    'mediaUrl': _0x62558e[_0x48cc04(0x15a)][-0x481 * 0x3 + 0x1 * -0x1453 + -0x8e * -0x3d][_0x48cc04(0x166)],
                    'title': _0x62558e[_0x48cc04(0x15a)][-0x147 * -0x1 + 0x829 * -0x3 + 0xc * 0x1ef][_0x48cc04(0x189)],
                    'body': wm3,
                    'sourceUrl': _0x62558e['all'][-0x8fa * -0x1 + -0xf3d + 0x643][_0x48cc04(0x166)],
                    'thumbnailUrl': _0x62558e[_0x48cc04(0x15a)][-0x107 + 0x1 * -0x347 + 0x2 * 0x227]['image']
                }
            }
        };
        return _0x571e22[_0x48cc04(0x16a)](_0x47824a[_0x48cc04(0x172)], _0x599c1b, { 'quoted': _0x47824a });
    } catch {
        throw _0x48cc04(0x186);
    }
};
function _0x3b5c() {
    const _0x4d6239 = [
        '\x20360',
        '113470InRcUh',
        'exp',
        '86648BTgfHu',
        '*\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*Id\x20∙\x20',
        'image',
        '4UqoCYn',
        '*\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*Duracion\x20∙\x20',
        'split',
        'audio/mp4',
        '[❕]\x20ERROR,\x20INTENTA\x20DE\x20NUEVO',
        '1023150SgyOHi',
        '128kbps',
        'title',
        'catch',
        '📽VIDEO',
        '*\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*Publicado\x20∙\x20',
        'command',
        'all',
        'tags',
        '\x20<\x20busqueda\x20>',
        'application/pdf',
        '*\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*Enlace\x20∙\x20',
        'dorracoins',
        '184IGHKEh',
        'search',
        '╔═══════❰\x20\x20*🔰*\x20\x20❱══════⬣\x0a║\x20*Titulo\x20∙\x20',
        'map',
        'type',
        '1276725ZhQNCB',
        'url',
        '[❕𝐈𝐍𝐅𝐎❕]\x20NOMBRE\x20DE\x20LA\x20CANCION\x20FALTANTE,\x20POR\x20FAVOR\x20INGRESE\x20EL\x20COMANDO\x20MAS\x20EL\x20NOMBRE/TITULO\x20DE\x20UNA\x20CANCIÓN\x0a\x0a*➢\x20EJEMPLO:\x0a',
        '*\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*Tipo\x20∙\x20',
        '162417BIgqjd',
        'sendMessage',
        'help',
        'audio',
        'timestamp',
        '*\x20❱══════⬣\x0a',
        '785190fARDhA',
        'name',
        'replace',
        'chat',
        '$1.',
        'ago',
        '*\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*Canal\x20∙\x20',
        '6IprLhy',
        '*\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*Autor\x20∙\x20',
        '3150513VLcKYT',
        'sSriL',
        'LFrlC',
        'DESCARGADOR\x20DE\x20YOUTUBE\x20'
    ];
    _0x3b5c = function () {
        return _0x4d6239;
    };
    return _0x3b5c();
}
function _0x59f8(_0x3f06f7, _0x236e78) {
    const _0x1fb30d = _0x3b5c();
    return _0x59f8 = function (_0x457c67, _0x2a6fe0) {
        _0x457c67 = _0x457c67 - (0x16d6 * -0x1 + -0x1262 * 0x1 + 0x2a8f);
        let _0x3ff721 = _0x1fb30d[_0x457c67];
        return _0x3ff721;
    }, _0x59f8(_0x3f06f7, _0x236e78);
}
handler[_0xaa9f6d(0x16b)] = ['play'][_0xaa9f6d(0x163)](_0x1faebe => _0x1faebe + _0xaa9f6d(0x15c)), handler[_0xaa9f6d(0x15b)] = ['downloader'], handler[_0xaa9f6d(0x159)] = /^play$/i, handler[_0xaa9f6d(0x15f)] = 0x153a + -0x2 * 0xe20 + 0x70b, handler[_0xaa9f6d(0x17e)] = 0x1597 * 0x1 + 0x13d2 + -0x2969;
export default handler;
