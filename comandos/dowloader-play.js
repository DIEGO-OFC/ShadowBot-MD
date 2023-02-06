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

function _0x3d5b() {
    const _0xb2f51a = [
        'all',
        '╔═══════❰\x20\x20*🔰*\x20\x20❱══════⬣\x0a║\x20*Titulo\x20∙\x20',
        'myDCG',
        'search',
        '*\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*Duracion\x20∙\x20',
        '128kbps',
        '#ytmp4\x20',
        'split',
        'views',
        '*\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*Autor\x20∙\x20',
        '*\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*Vistas\x20∙\x20',
        'audio',
        '56572OelcbK',
        'cvYFE',
        'audio/mp4',
        'ago',
        '*\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*Enlace\x20∙\x20',
        'url',
        'join',
        'type',
        '1589HmzMVq',
        'download',
        'chat',
        '8269272QSoDBC',
        '\x20<\x20busqueda\x20>',
        'gLMEE',
        'timestamp',
        'catch',
        '\x20Phonk*',
        '3smhypN',
        '213875qBeoVB',
        '*\x20❱══════⬣',
        'help',
        '3314824MtqoAE',
        'toString',
        'HOnJH',
        '207864LXBLEX',
        '*\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*Id\x20∙\x20',
        'title',
        '*\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*Tipo\x20∙\x20',
        '150hQNfPd',
        '23336VKPkdj',
        'BKywM',
        'downloader',
        'author',
        'play',
        '*\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*Canal\x20∙\x20',
        '21996PBmctB',
        'DESCARGADOR\x20DE\x20YOUTUBE\x20',
        '*\x0a║\x20*NOTA:\x20SU\x20AUDIO\x20SE\x20ESTA\x20ENVIANDO*\x0a╚═══════❰\x20*',
        '$1.',
        'command',
        '\x20360',
        'image',
        'sendMessage',
        'name',
        '📽VIDEO',
        '10yLGSQL'
    ];
    _0x3d5b = function () {
        return _0xb2f51a;
    };
    return _0x3d5b();
}
const _0xd75aca = _0x56e7;
(function (_0x5ea242, _0x55a7ab) {
    const _0xcff2e8 = _0x56e7, _0x335851 = _0x5ea242();
    while (!![]) {
        try {
            const _0x4d0cb9 = parseInt(_0xcff2e8(0x117)) / (-0x2 * -0xe73 + 0xb * -0x17f + 0x4 * -0x31c) + -parseInt(_0xcff2e8(0x13f)) / (0x1956 + 0x1 * 0x8f7 + 0x1 * -0x224b) * (-parseInt(_0xcff2e8(0x116)) / (-0x436 + -0x20c9 + 0x2502)) + -parseInt(_0xcff2e8(0x11a)) / (0x3e4 + 0x194b + -0x1 * 0x1d2b) + -parseInt(_0xcff2e8(0x132)) / (0x749 + 0x1971 + -0x20b5) * (-parseInt(_0xcff2e8(0x128)) / (-0x24b2 + -0xa45 + -0x2efd * -0x1)) + parseInt(_0xcff2e8(0x10d)) / (-0x1b * -0xe7 + -0x1 * 0x25f9 + -0xda3 * -0x1) * (parseInt(_0xcff2e8(0x122)) / (0x199f * 0x1 + 0xa * -0x1b7 + -0x1 * 0x871)) + parseInt(_0xcff2e8(0x11d)) / (0x1 * -0x148d + 0xb87 + -0x3 * -0x305) * (-parseInt(_0xcff2e8(0x121)) / (-0x61 * -0x3d + 0xbb * -0x7 + 0x13 * -0xf2)) + parseInt(_0xcff2e8(0x110)) / (0x1 * -0x45 + 0x2198 + 0x47 * -0x78);
            if (_0x4d0cb9 === _0x55a7ab)
                break;
            else
                _0x335851['push'](_0x335851['shift']());
        } catch (_0xa6319b) {
            _0x335851['push'](_0x335851['shift']());
        }
    }
}(_0x3d5b, -0xe8465 * -0x1 + 0x37c36 + -0xa8d59));
import {
    youtubeSearch,
    youtubedl,
    youtubedlv2,
    youtubedlv3
} from '@bochilteam/scraper';
import _0x1e4eed from 'yt-search';
function ConvertMiles(_0x320211) {
    const _0x172603 = _0x56e7, _0x1533d5 = { 'SzPAl': _0x172603(0x12b) }, _0x4dbaca = /(\d)(?=(\d{3})+(?!\d))/g, _0x4d7f5a = _0x1533d5['SzPAl'];
    let _0xce8995 = _0x320211[_0x172603(0x11b)]()[_0x172603(0x13a)]('.');
    return _0xce8995[0x1 * 0x26da + -0xa21 * -0x3 + -0xdd9 * 0x5] = _0xce8995[0x9b6 + 0x1b17 + 0x1 * -0x24cd]['replace'](_0x4dbaca, _0x4d7f5a), _0xce8995[0x1623 + -0x818 + -0x4ae * 0x3] ? _0xce8995[_0x172603(0x10b)]('.') : _0xce8995[0x714 + -0x3ec * 0x5 + 0xc88];
}
let handler = async (_0x3f28b1, {
    conn: _0xd4ff22,
    command: _0x1bc661,
    args: _0x45a8ef,
    text: _0x361818,
    usedPrefix: _0x467192
}) => {
    const _0x10b818 = _0x56e7, _0x2a9a58 = {
            'myDCG': function (_0x1e03e7, _0x1fd1cc) {
                return _0x1e03e7(_0x1fd1cc);
            },
            'dstVK': function (_0x1d062a, _0x5df141) {
                return _0x1d062a + _0x5df141;
            },
            'HOnJH': _0x10b818(0x131),
            'ttWuL': 'application/pdf',
            'gLMEE': function (_0x1ab799, _0x507b66) {
                return _0x1ab799(_0x507b66);
            },
            'BKywM': _0x10b818(0x138),
            'cvYFE': '*[❕]\x20ERROR,\x20INTENTA\x20DE\x20NUEVO*'
        };
    if (!_0x361818)
        throw '[❕𝐈𝐍𝐅𝐎❕]\x20NOMBRE\x20DE\x20LA\x20CANCION\x20FALTANTE,\x20POR\x20FAVOR\x20INGRESE\x20EL\x20COMANDO\x20MAS\x20EL\x20NOMBRE/TITULO\x20DE\x20UNA\x20CANCIÓN\x0a\x0a*➢\x20EJEMPLO:\x0a' + (_0x467192 + _0x1bc661) + _0x10b818(0x115);
    let _0x5d5f02 = await _0x1e4eed[_0x10b818(0x136)](_0x45a8ef[_0x10b818(0x10b)]('\x20'));
    try {
        let _0x26efc6 = _0x10b818(0x134) + _0x5d5f02[_0x10b818(0x133)][-0xe1 * 0x1 + 0x676 * -0x1 + 0x757][_0x10b818(0x11f)] + _0x10b818(0x137) + _0x5d5f02[_0x10b818(0x133)][-0x10f8 + 0x1dbd * -0x1 + -0x43f * -0xb][_0x10b818(0x113)] + _0x10b818(0x120) + _0x5d5f02[_0x10b818(0x133)][0x3cb * 0x1 + 0x17cb * 0x1 + -0x1b96][_0x10b818(0x10c)] + _0x10b818(0x13c) + _0x5d5f02[_0x10b818(0x133)][-0x23eb + -0x24a8 + 0x4893][_0x10b818(0x125)][_0x10b818(0x130)] + '*\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*Publicado\x20∙\x20' + _0x5d5f02[_0x10b818(0x133)][-0xc6b * -0x3 + -0x1884 + -0xcbd][_0x10b818(0x142)] + _0x10b818(0x13d) + _0x2a9a58[_0x10b818(0x135)](ConvertMiles, _0x5d5f02[_0x10b818(0x133)][-0x60c + 0x22 * -0x10d + 0x2 * 0x14e3][_0x10b818(0x13b)]) + _0x10b818(0x143) + _0x5d5f02[_0x10b818(0x133)][0x241f + 0xe * -0x263 + 0x7 * -0x63][_0x10b818(0x144)] + _0x10b818(0x11e) + _0x5d5f02[_0x10b818(0x133)][0x9 * -0x1e7 + 0xccd + 0x452][_0x10b818(0x10c)] + _0x10b818(0x127) + _0x5d5f02['all'][-0x51b + 0x25ea + 0x1 * -0x20cf][_0x10b818(0x125)][_0x10b818(0x144)] + _0x10b818(0x12a) + vs + _0x10b818(0x118);
        const _0x263ad7 = [{
                    'buttonId': _0x2a9a58['dstVK'](prefix, _0x467192 + _0x10b818(0x139) + _0x5d5f02[_0x10b818(0x133)][0x1dc2 + 0xfd7 * -0x1 + -0xdeb]['url'] + _0x10b818(0x12d)),
                    'buttonText': { 'displayText': _0x2a9a58[_0x10b818(0x11c)] },
                    'type': 0x1
                }], _0x2d7d26 = {
                'document': { 'url': '' + _0x5d5f02[_0x10b818(0x133)][-0x1ed2 + -0x4 * 0x1f5 + 0x26a6][_0x10b818(0x12e)] },
                'mimetype': _0x2a9a58['ttWuL'],
                'fileName': _0x10b818(0x129),
                'fileLength': 0x5af3107a3fff,
                'pageCount': 0x1869f,
                'caption': _0x26efc6,
                'footer': wm3,
                'buttons': _0x263ad7,
                'headerType': 0x4,
                'contextInfo': {
                    'externalAdReply': {
                        'title': '' + _0x5d5f02[_0x10b818(0x133)][0x1 * -0x25c + 0x23c3 + -0x2167][_0x10b818(0x11f)],
                        'sourceUrl': _0x5d5f02[_0x10b818(0x133)][0x12d7 + -0xb9 + -0x121e][_0x10b818(0x144)],
                        'mediaType': 0x1,
                        'thumbnailUrl': _0x5d5f02[_0x10b818(0x133)][-0x3 * -0xbdd + -0x390 + -0x2007][_0x10b818(0x12e)],
                        'renderLargerThumbnail': !![]
                    }
                }
            };
        _0xd4ff22[_0x10b818(0x12f)](_0x3f28b1[_0x10b818(0x10f)], _0x2d7d26, { 'quoted': _0x3f28b1 });
        const _0x454bf6 = await await _0x2a9a58[_0x10b818(0x112)](youtubedlv2, _0x5d5f02[_0x10b818(0x133)][0x16af * -0x1 + -0x1 * 0x196d + 0x301c][_0x10b818(0x144)])[_0x10b818(0x114)](async _0x28daee => await youtubedl(_0x5d5f02[_0x10b818(0x133)][-0x2665 + -0x206 + 0x286b]['url']))[_0x10b818(0x114)](async _0x5e201c => await youtubedlv3(_0x5d5f02['all'][0x1 * -0x64c + -0x1a54 * -0x1 + 0x1408 * -0x1][_0x10b818(0x144)])), _0x29e55a = await _0x454bf6[_0x10b818(0x13e)][_0x2a9a58[_0x10b818(0x123)]][_0x10b818(0x10e)]();
        let _0x5e2d9b = {
            'audio': { 'url': _0x29e55a },
            'mimetype': _0x10b818(0x141),
            'fileName': '' + _0x5d5f02[_0x10b818(0x133)][0x63f * 0x5 + 0xff6 + -0x2f31][_0x10b818(0x11f)],
            'contextInfo': {
                'externalAdReply': {
                    'showAdAttribution': !![],
                    'mediaType': 0x2,
                    'mediaUrl': _0x5d5f02[_0x10b818(0x133)][-0x3 * -0x8e1 + 0xac9 + 0x12b6 * -0x2][_0x10b818(0x144)],
                    'title': _0x5d5f02['all'][0xfe8 + -0x1 * -0x1aff + -0x2ae7][_0x10b818(0x11f)],
                    'body': wm3,
                    'sourceUrl': _0x5d5f02[_0x10b818(0x133)][-0x1a9 * -0x13 + -0x1 * -0x15df + -0x356a]['url'],
                    'thumbnailUrl': _0x5d5f02[_0x10b818(0x133)][-0x2 * 0x85c + -0x1a * 0x15b + 0x5c6 * 0x9][_0x10b818(0x12e)]
                }
            }
        };
        return _0xd4ff22['sendMessage'](_0x3f28b1[_0x10b818(0x10f)], _0x5e2d9b, { 'quoted': _0x3f28b1 });
    } catch {
        throw _0x2a9a58[_0x10b818(0x140)];
    }
};
function _0x56e7(_0x3f6f60, _0x274b35) {
    const _0x1b16e0 = _0x3d5b();
    return _0x56e7 = function (_0x4ef154, _0x5b73e1) {
        _0x4ef154 = _0x4ef154 - (0x21b1 + -0x56a * -0x6 + -0xe * 0x4a7);
        let _0x63d86c = _0x1b16e0[_0x4ef154];
        return _0x63d86c;
    }, _0x56e7(_0x3f6f60, _0x274b35);
}
handler[_0xd75aca(0x119)] = [_0xd75aca(0x126)]['map'](_0x486f2d => _0x486f2d + _0xd75aca(0x111)), handler['tags'] = [_0xd75aca(0x124)], handler[_0xd75aca(0x12c)] = /^play$/i, handler['dolares'] = 0x14ea + 0xbc2 + 0x20a7 * -0x1, handler['exp'] = 0x224 * -0x9 + -0xb19 + 0x1e5d;
export default handler;
