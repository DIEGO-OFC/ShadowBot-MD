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

function _0x26b0() {
    const _0x417296 = [
        'title',
        '7gTsrJZ',
        '44988mzWKGS',
        '\x20<\x20busqueda\x20>',
        '[❕𝐈𝐍𝐅𝐎❕]\x20NOMBRE\x20DE\x20LA\x20CANCION\x20FALTANTE,\x20POR\x20FAVOR\x20INGRESE\x20EL\x20COMANDO\x20MAS\x20EL\x20NOMBRE/TITULO\x20DE\x20UNA\x20CANCIÓN\x0a\x0a*➢\x20EJEMPLO:\x0a',
        '╔═══════❰\x20\x20*🔰*\x20\x20❱══════⬣\x0a║\x20*Titulo\x20∙\x20',
        '1311810plghJf',
        '*\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*Duracion\x20∙\x20',
        'chat',
        '94497cxRmuo',
        'downloader',
        'author',
        'JIkeX',
        '4026zixoIo',
        'BRMiH',
        '9423090QPMkQv',
        'timestamp',
        'audio/mp4',
        'all',
        'AnZvq',
        '[❕]\x20ERROR,\x20INTENTA\x20DE\x20NUEVO',
        'DVOSN',
        'join',
        'toString',
        'DESCARGADOR\x20DE\x20YOUTUBE\x20',
        '42904pRGBaB',
        'replace',
        'nMpCc',
        'help',
        'search',
        'split',
        'map',
        '4JppPEd',
        'views',
        'KIBOT',
        '895469mwKrnh',
        'url',
        '\x20Phonk*',
        'image',
        '*\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*Publicado\x20∙\x20',
        'ago',
        '*\x0a\x0a║\x20*NOTA:\x20SU\x20AUDIO\x20SE\x20ESTA\x20ENVIANDO*\x0a╚═══════❰\x20*',
        '*\x20❱══════⬣\x0a',
        'name',
        '*\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*Autor\x20∙\x20',
        'EPYQa',
        '\x20360',
        '📽VIDEO',
        'command',
        'type',
        'getvid\x20',
        '28Zsbccb',
        'audio',
        '2771960XNOLOr',
        '*\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*Tipo\x20∙\x20',
        'sendMessage',
        'dorracoins',
        '522EZvyfa',
        'play'
    ];
    _0x26b0 = function () {
        return _0x417296;
    };
    return _0x26b0();
}
const _0x330843 = _0x347d;
(function (_0x66bf96, _0x2b4640) {
    const _0x13c4fa = _0x347d, _0x26dc37 = _0x66bf96();
    while (!![]) {
        try {
            const _0x4b06af = -parseInt(_0x13c4fa(0x17f)) / (-0x974 * -0x2 + 0x22d9 + -0x35c0) + parseInt(_0x13c4fa(0x154)) / (0x2192 + -0x22b2 + 0x3a * 0x5) * (-parseInt(_0x13c4fa(0x165)) / (-0x15f * -0x1 + 0x2608 + -0x2764)) + parseInt(_0x13c4fa(0x17c)) / (-0x1a12 * -0x1 + -0x1 * 0x25a1 + 0xb93) * (-parseInt(_0x13c4fa(0x156)) / (0x2 * -0xb3 + 0x1117 + -0x7d6 * 0x2)) + parseInt(_0x13c4fa(0x162)) / (0xc72 + 0xbc * 0x10 + 0x182c * -0x1) * (-parseInt(_0x13c4fa(0x15d)) / (-0xe98 + 0x21e0 + -0x1341)) + -parseInt(_0x13c4fa(0x175)) / (0x63 * -0x2b + 0x70f + 0x99a) * (-parseInt(_0x13c4fa(0x15a)) / (-0x2495 + -0x5 * 0x63b + -0x3 * -0x1697)) + parseInt(_0x13c4fa(0x16b)) / (-0x250a + -0x2 * 0x4d6 + 0x2 * 0x1760) + -parseInt(_0x13c4fa(0x169)) / (-0x161 + 0x113 * 0x1f + -0x1fe1) * (-parseInt(_0x13c4fa(0x15e)) / (0x1 * 0x54d + 0x13b9 + -0x17 * 0x116));
            if (_0x4b06af === _0x2b4640)
                break;
            else
                _0x26dc37['push'](_0x26dc37['shift']());
        } catch (_0x45d961) {
            _0x26dc37['push'](_0x26dc37['shift']());
        }
    }
}(_0x26b0, -0x1 * -0x478ef + 0xa1d78 + -0x51d8 * 0x15));
function _0x347d(_0x229e4b, _0xfd4756) {
    const _0x471ca2 = _0x26b0();
    return _0x347d = function (_0xb94237, _0x45ee86) {
        _0xb94237 = _0xb94237 - (-0x213b + 0x89 * -0x2d + 0x3 * 0x1387);
        let _0x4205fe = _0x471ca2[_0xb94237];
        return _0x4205fe;
    }, _0x347d(_0x229e4b, _0xfd4756);
}
import {
    youtubeSearch,
    youtubedl,
    youtubedlv2,
    youtubedlv3
} from '@bochilteam/scraper';
import _0x4948e9 from 'yt-search';
function ConvertMiles(_0x2fc7ad) {
    const _0x194a4a = _0x347d, _0x1da4af = { 'KIBOT': '$1.' }, _0x487fbc = /(\d)(?=(\d{3})+(?!\d))/g, _0x34775f = _0x1da4af[_0x194a4a(0x17e)];
    let _0x4af54f = _0x2fc7ad[_0x194a4a(0x173)]()[_0x194a4a(0x17a)]('.');
    return _0x4af54f[0x102c + -0x1f37 + -0xf0b * -0x1] = _0x4af54f[0x4b9 * 0x1 + -0x14f2 + 0x1039][_0x194a4a(0x176)](_0x487fbc, _0x34775f), _0x4af54f[-0x19fc + -0x5b * -0x6b + 0x303 * -0x4] ? _0x4af54f[_0x194a4a(0x172)]('.') : _0x4af54f[0x15d * -0xc + 0x1439 + -0x3dd];
}
let handler = async (_0xc22612, {
    conn: _0x5f137e,
    command: _0x360d54,
    args: _0x38ce8f,
    text: _0x512aa3,
    usedPrefix: _0x56990c
}) => {
    const _0x34401e = _0x347d, _0x599746 = {
            'DVOSN': function (_0x135d69, _0x2cd273) {
                return _0x135d69 + _0x2cd273;
            },
            'EPYQa': function (_0xee28f5, _0x5d0ae1) {
                return _0xee28f5(_0x5d0ae1);
            },
            'gePea': function (_0x4dd29f, _0x2cc42a) {
                return _0x4dd29f + _0x2cc42a;
            },
            'MlQhO': _0x34401e(0x150),
            'AnZvq': 'application/pdf',
            'JIkeX': '128kbps',
            'nMpCc': _0x34401e(0x16d),
            'BRMiH': _0x34401e(0x170)
        };
    if (!_0x512aa3)
        throw _0x34401e(0x160) + _0x599746[_0x34401e(0x171)](_0x56990c, _0x360d54) + _0x34401e(0x146);
    let _0x123261 = await _0x4948e9[_0x34401e(0x179)](_0x38ce8f[_0x34401e(0x172)]('\x20'));
    try {
        let _0x4b52f0 = _0x34401e(0x161) + _0x123261[_0x34401e(0x16e)][-0x1bc5 * 0x1 + -0xf6d + -0x13 * -0x246][_0x34401e(0x15c)] + _0x34401e(0x163) + _0x123261[_0x34401e(0x16e)][-0x20c3 + -0x1b90 + 0x3c53 * 0x1][_0x34401e(0x16c)] + _0x34401e(0x157) + _0x123261[_0x34401e(0x16e)][0x1e8d + -0xb7 * -0xb + 0x37e * -0xb][_0x34401e(0x152)] + _0x34401e(0x14d) + _0x123261[_0x34401e(0x16e)][0x6f2 + 0x1d60 + -0x2452][_0x34401e(0x167)][_0x34401e(0x14c)] + _0x34401e(0x148) + _0x123261[_0x34401e(0x16e)][0x1e41 * -0x1 + -0x2 * 0x7c1 + -0x163 * -0x21][_0x34401e(0x149)] + '*\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*Vistas\x20∙\x20' + _0x599746[_0x34401e(0x14e)](ConvertMiles, _0x123261[_0x34401e(0x16e)][0x1 * 0x21d7 + 0xe51 + 0x5c * -0x86][_0x34401e(0x17d)]) + '*\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*Enlace\x20∙\x20' + _0x123261['all'][0x21b4 + -0xe04 + -0x13b0][_0x34401e(0x145)] + '*\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*Id\x20∙\x20' + _0x123261[_0x34401e(0x16e)][-0x1c9e + -0x25b2 * 0x1 + 0x4250][_0x34401e(0x152)] + '*\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*Canal\x20∙\x20' + _0x123261[_0x34401e(0x16e)][0x14ef + -0x1d7a + 0x88b][_0x34401e(0x167)]['url'] + _0x34401e(0x14a) + vs + _0x34401e(0x14b);
        const _0x38099a = [{
                    'buttonId': _0x599746['gePea'](prefix, _0x56990c + _0x34401e(0x153) + _0x123261[_0x34401e(0x16e)][-0xe98 + 0x15d9 + 0x1 * -0x741][_0x34401e(0x145)] + _0x34401e(0x14f)),
                    'buttonText': { 'displayText': _0x599746['MlQhO'] },
                    'type': 0x1
                }], _0xf80e34 = {
                'document': { 'url': '' + _0x123261['all'][0x2518 + -0x124a * -0x1 + -0x3762][_0x34401e(0x147)] },
                'mimetype': _0x599746[_0x34401e(0x16f)],
                'fileName': _0x34401e(0x174),
                'fileLength': 0x5af3107a3fff,
                'pageCount': 0x1869f,
                'caption': _0x4b52f0,
                'footer': wm3,
                'buttons': _0x38099a,
                'headerType': 0x4,
                'contextInfo': {
                    'externalAdReply': {
                        'title': '' + _0x123261[_0x34401e(0x16e)][0x1 * 0x8e + -0x1 * -0x221a + 0x1 * -0x22a8]['title'],
                        'sourceUrl': _0x123261['all'][0x744 + -0x108 + -0x63c]['url'],
                        'mediaType': 0x1,
                        'thumbnailUrl': _0x123261[_0x34401e(0x16e)][-0xa00 + 0x171 * 0x3 + 0x5ad * 0x1][_0x34401e(0x147)],
                        'renderLargerThumbnail': !![]
                    }
                }
            };
        _0x5f137e[_0x34401e(0x158)](_0xc22612['chat'], _0xf80e34, { 'quoted': _0xc22612 });
        const _0x569b94 = await await youtubedlv2(_0x123261[_0x34401e(0x16e)][-0x1fd * -0x4 + -0x1b4e + 0x9ad * 0x2]['url'])['catch'](async _0x13b444 => await youtubedl(_0x123261['all'][0x1 * 0x182c + 0x8a8 + -0x20d4]['url']))['catch'](async _0xff1c3 => await youtubedlv3(_0x123261[_0x34401e(0x16e)][0x935 + -0x10f9 * -0x2 + 0x1 * -0x2b27]['url'])), _0x385223 = await _0x569b94[_0x34401e(0x155)][_0x599746[_0x34401e(0x168)]]['download']();
        let _0x482cdf = {
            'audio': { 'url': _0x385223 },
            'mimetype': _0x599746[_0x34401e(0x177)],
            'fileName': '' + _0x123261[_0x34401e(0x16e)][-0xd2b * 0x2 + 0x15fa + 0x45c][_0x34401e(0x15c)],
            'contextInfo': {
                'externalAdReply': {
                    'showAdAttribution': !![],
                    'mediaType': 0x2,
                    'mediaUrl': _0x123261[_0x34401e(0x16e)][-0x1342 + -0x110f * -0x2 + -0xedc][_0x34401e(0x145)],
                    'title': _0x123261[_0x34401e(0x16e)][0x1f * 0x25 + -0x1d89 + 0x1 * 0x190e]['title'],
                    'body': wm3,
                    'sourceUrl': _0x123261['all'][-0x12b2 + -0xe35 * -0x1 + -0x47d * -0x1][_0x34401e(0x145)],
                    'thumbnailUrl': _0x123261['all'][-0xa4 * -0x15 + -0x1c8 + -0xbac][_0x34401e(0x147)]
                }
            }
        };
        return _0x5f137e[_0x34401e(0x158)](_0xc22612[_0x34401e(0x164)], _0x482cdf, { 'quoted': _0xc22612 });
    } catch {
        throw _0x599746[_0x34401e(0x16a)];
    }
};
handler[_0x330843(0x178)] = [_0x330843(0x15b)][_0x330843(0x17b)](_0x4b3927 => _0x4b3927 + _0x330843(0x15f)), handler['tags'] = [_0x330843(0x166)], handler[_0x330843(0x151)] = /^play$/i, handler[_0x330843(0x159)] = 0x5c3 * 0x1 + -0x5 * 0x7bf + -0x233 * -0xf, handler['exp'] = -0x1f * 0x11 + 0x118 + 0x1 * 0xf7;
export default handler;
