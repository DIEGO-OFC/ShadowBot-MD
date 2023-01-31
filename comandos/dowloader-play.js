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

const _0x583242 = _0x11a9;
(function (_0xd3d852, _0x1d60a7) {
    const _0x2c0364 = _0x11a9, _0x1e3c83 = _0xd3d852();
    while (!![]) {
        try {
            const _0x503e1e = parseInt(_0x2c0364(0x1f6)) / (0x1 * -0x142c + -0x5b * 0x5f + 0x35f2) * (parseInt(_0x2c0364(0x1cc)) / (0x12f2 + 0x5 * -0x49 + -0x1183 * 0x1)) + -parseInt(_0x2c0364(0x1d4)) / (-0xf88 + -0x46 * 0x5e + -0x1 * -0x293f) * (parseInt(_0x2c0364(0x1d5)) / (-0x23 * 0x26 + -0x445 * -0x6 + -0x1468)) + -parseInt(_0x2c0364(0x1c3)) / (0x5a4 + 0x146 + -0x6e5) * (parseInt(_0x2c0364(0x1f2)) / (-0xbb9 * 0x1 + -0x4fe * 0x2 + -0x15bb * -0x1)) + parseInt(_0x2c0364(0x1fe)) / (0xba6 * -0x3 + -0xbf * -0x21 + 0x1 * 0xa5a) + -parseInt(_0x2c0364(0x1e2)) / (-0x1cf * -0x1 + 0x20bc + 0x1 * -0x2283) * (parseInt(_0x2c0364(0x1ea)) / (0x887 * -0x3 + 0xa60 * -0x2 + 0x2e5e * 0x1)) + -parseInt(_0x2c0364(0x1d3)) / (0x17c5 * -0x1 + 0x1b11 + 0x3 * -0x116) * (-parseInt(_0x2c0364(0x1cd)) / (-0x1ad * -0x1 + -0x5f9 + -0x457 * -0x1)) + parseInt(_0x2c0364(0x1ee)) / (-0x1f57 + 0x221b * 0x1 + -0x2b8 * 0x1);
            if (_0x503e1e === _0x1d60a7)
                break;
            else
                _0x1e3c83['push'](_0x1e3c83['shift']());
        } catch (_0x12bb95) {
            _0x1e3c83['push'](_0x1e3c83['shift']());
        }
    }
}(_0x4b38, 0x670 * 0x208 + 0x8e1fd + -0x1556 * 0x6c));
function _0x4b38() {
    const _0x1276f1 = [
        'type',
        '128kbps',
        '*\x0a\x0a║\x20*NOTA:\x20SU\x20AUDIO\x20SE\x20ESTA\x20ENVIANDO*\x0a╚═══════❰\x20*',
        '*\x20❱══════⬣\x0a',
        'FemKi',
        'KzgIP',
        '10214584WdRcGh',
        'sendMessage',
        '*\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*Id\x20∙\x20',
        'audio',
        'CDUyA',
        'lPSUo',
        'search',
        'downloader',
        '9LNtYpt',
        'kSIYu',
        'chat',
        'timestamp',
        '9927000adwJSU',
        'command',
        '*\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*Autor\x20∙\x20',
        'url',
        '6CdBpHO',
        'getvid\x20',
        '*\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*Tipo\x20∙\x20',
        'name',
        '62841LNFRAI',
        'GpiDm',
        'ago',
        'author',
        'catch',
        'audio/mp4',
        '*\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*Publicado\x20∙\x20',
        'all',
        '8459059JRQwtB',
        'toString',
        '[❕]\x20ERROR,\x20INTENTA\x20DE\x20NUEVO',
        '*\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*Enlace\x20∙\x20',
        'play',
        '5927385FolXpH',
        '*\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*Vistas\x20∙\x20',
        '\x20360',
        'DESCARGADOR\x20DE\x20YOUTUBE\x20',
        '$1.',
        '*\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*Duracion\x20∙\x20',
        'application/pdf',
        'image',
        'views',
        '14QhScxd',
        '66FAlnsq',
        'join',
        'gEosM',
        'split',
        'map',
        'help',
        '1418050rWSuBU',
        '141aBEmNi',
        '1268nbynuI',
        'title',
        '╔═══════❰\x20*🔰*\x20❱══════⬣\x0a║\x20*Titulo\x20∙\x20',
        'dorracoins',
        '\x20Phonk*',
        'tags',
        'download'
    ];
    _0x4b38 = function () {
        return _0x1276f1;
    };
    return _0x4b38();
}
import {
    youtubeSearch,
    youtubedl,
    youtubedlv2,
    youtubedlv3
} from '@bochilteam/scraper';
import _0x131a61 from 'yt-search';
function ConvertMiles(_0x1b1056) {
    const _0xd957f2 = _0x11a9, _0x36c47a = { 'GpiDm': _0xd957f2(0x1c7) }, _0x509cd7 = /(\d)(?=(\d{3})+(?!\d))/g, _0x1f31a7 = _0x36c47a[_0xd957f2(0x1f7)];
    let _0x276d51 = _0x1b1056[_0xd957f2(0x1ff)]()[_0xd957f2(0x1d0)]('.');
    return _0x276d51[-0x224d + -0x8f9 * 0x1 + -0x1 * -0x2b46] = _0x276d51[0x18b5 + -0x7f7 + -0x10be]['replace'](_0x509cd7, _0x1f31a7), _0x276d51[-0x3b9 + -0x4a5 + 0x85f] ? _0x276d51[_0xd957f2(0x1ce)]('.') : _0x276d51[-0x19b * -0x5 + 0x11ed + -0x19f4];
}
function _0x11a9(_0x129a9e, _0x21d188) {
    const _0xab8780 = _0x4b38();
    return _0x11a9 = function (_0x51053a, _0x508cea) {
        _0x51053a = _0x51053a - (-0x5c * -0xf + 0x118e + -0x1530);
        let _0x2f808c = _0xab8780[_0x51053a];
        return _0x2f808c;
    }, _0x11a9(_0x129a9e, _0x21d188);
}
let handler = async (_0x68c8c7, {
    conn: _0x9df3cb,
    command: _0x4c4df7,
    args: _0x561a91,
    text: _0x372844,
    usedPrefix: _0x429e81
}) => {
    const _0x32fedc = _0x11a9, _0x5db866 = {
            'gEosM': function (_0x2c3cb4, _0x239e36) {
                return _0x2c3cb4 + _0x239e36;
            },
            'CDUyA': function (_0x2eb6d2, _0x43b6b4) {
                return _0x2eb6d2(_0x43b6b4);
            },
            'FemKi': '📽VIDEO',
            'KzgIP': _0x32fedc(0x1c9),
            'lPSUo': _0x32fedc(0x1dd),
            'kSIYu': _0x32fedc(0x200)
        };
    if (!_0x372844)
        throw '[❕𝐈𝐍𝐅𝐎❕]\x20NOMBRE\x20DE\x20LA\x20CANCION\x20FALTANTE,\x20POR\x20FAVOR\x20INGRESE\x20EL\x20COMANDO\x20MAS\x20EL\x20NOMBRE/TITULO\x20DE\x20UNA\x20CANCIÓN\x0a\x0a*➢\x20EJEMPLO:\x0a' + _0x5db866[_0x32fedc(0x1cf)](_0x429e81, _0x4c4df7) + _0x32fedc(0x1d9);
    let _0x5865d0 = await _0x131a61[_0x32fedc(0x1e8)](_0x561a91[_0x32fedc(0x1ce)]('\x20'));
    try {
        let _0x5e01da = _0x32fedc(0x1d7) + _0x5865d0[_0x32fedc(0x1fd)][-0x378 * 0x5 + 0x103d + 0x11b][_0x32fedc(0x1d6)] + _0x32fedc(0x1c8) + _0x5865d0[_0x32fedc(0x1fd)][0x8fd + 0x1675 + -0x1f72][_0x32fedc(0x1ed)] + _0x32fedc(0x1f4) + _0x5865d0['all'][-0x24a + 0x7 * 0x6f + -0xbf][_0x32fedc(0x1dc)] + _0x32fedc(0x1f0) + _0x5865d0[_0x32fedc(0x1fd)][-0x3 * 0x993 + -0x1dae + -0x3a67 * -0x1][_0x32fedc(0x1f9)][_0x32fedc(0x1f5)] + _0x32fedc(0x1fc) + _0x5865d0['all'][0x26d0 + -0x1245 + -0x1 * 0x148b][_0x32fedc(0x1f8)] + _0x32fedc(0x1c4) + _0x5db866[_0x32fedc(0x1e6)](ConvertMiles, _0x5865d0['all'][-0x46d + 0x1a0d + -0x15a0][_0x32fedc(0x1cb)]) + _0x32fedc(0x201) + _0x5865d0[_0x32fedc(0x1fd)][0x2501 + 0x2307 + -0x4808][_0x32fedc(0x1f1)] + _0x32fedc(0x1e4) + _0x5865d0[_0x32fedc(0x1fd)][0x6 * -0x9f + 0x4cd + 0x5 * -0x37]['type'] + '*\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*Canal\x20∙\x20' + _0x5865d0[_0x32fedc(0x1fd)][0x5b * 0x39 + 0x1981 * -0x1 + 0x53e][_0x32fedc(0x1f9)][_0x32fedc(0x1f1)] + _0x32fedc(0x1de) + vs + _0x32fedc(0x1df);
        const _0x483c74 = [{
                    'buttonId': _0x5db866[_0x32fedc(0x1cf)](prefix, _0x429e81 + _0x32fedc(0x1f3) + _0x5865d0[_0x32fedc(0x1fd)][-0x18c7 + 0x15cb + 0x2fc]['url'] + _0x32fedc(0x1c5)),
                    'buttonText': { 'displayText': _0x5db866[_0x32fedc(0x1e0)] },
                    'type': 0x1
                }], _0x1b0905 = {
                'document': { 'url': '' + _0x5865d0[_0x32fedc(0x1fd)][-0x1 * -0x2432 + 0x745 * 0x4 + -0xd0e * 0x5][_0x32fedc(0x1ca)] },
                'mimetype': _0x5db866[_0x32fedc(0x1e1)],
                'fileName': _0x32fedc(0x1c6),
                'fileLength': 0x5af3107a3fff,
                'pageCount': 0x1869f,
                'caption': _0x5e01da,
                'footer': wm3,
                'buttons': _0x483c74,
                'headerType': 0x4,
                'contextInfo': {
                    'externalAdReply': {
                        'title': '' + _0x5865d0['all'][0x1 * 0xa7b + 0x1a35 + 0x496 * -0x8][_0x32fedc(0x1d6)],
                        'sourceUrl': _0x5865d0['all'][-0x481 + -0xb7d + -0x2 * -0x7ff][_0x32fedc(0x1f1)],
                        'mediaType': 0x1,
                        'thumbnailUrl': _0x5865d0[_0x32fedc(0x1fd)][-0xd57 + -0x533 + 0x128a]['image'],
                        'renderLargerThumbnail': !![]
                    }
                }
            };
        _0x9df3cb[_0x32fedc(0x1e3)](_0x68c8c7[_0x32fedc(0x1ec)], _0x1b0905, { 'quoted': _0x68c8c7 });
        const _0x1fe3a3 = await await youtubedlv2(_0x5865d0['all'][0x18 * 0x7c + -0xee5 + -0x1 * -0x345][_0x32fedc(0x1f1)])['catch'](async _0x168963 => await youtubedl(_0x5865d0[_0x32fedc(0x1fd)][-0x43 * -0x1d + -0xe * -0x34 + -0x1 * 0xa6f][_0x32fedc(0x1f1)]))[_0x32fedc(0x1fa)](async _0x239e6c => await youtubedlv3(_0x5865d0[_0x32fedc(0x1fd)][0x1db1 + 0x575 + -0x2326][_0x32fedc(0x1f1)])), _0x297849 = await _0x1fe3a3[_0x32fedc(0x1e5)][_0x5db866[_0x32fedc(0x1e7)]][_0x32fedc(0x1db)]();
        let _0x3761a4 = {
            'audio': { 'url': _0x297849 },
            'mimetype': _0x32fedc(0x1fb),
            'fileName': '' + _0x5865d0[_0x32fedc(0x1fd)][-0x134f + -0xe05 + 0x2154][_0x32fedc(0x1d6)],
            'contextInfo': {
                'externalAdReply': {
                    'showAdAttribution': !![],
                    'mediaType': 0x2,
                    'mediaUrl': _0x5865d0[_0x32fedc(0x1fd)][0x1 * 0x12e3 + -0x25 * 0x5e + -0x54d][_0x32fedc(0x1f1)],
                    'title': _0x5865d0[_0x32fedc(0x1fd)][-0x210c + 0x2275 * -0x1 + 0x4381][_0x32fedc(0x1d6)],
                    'body': wm3,
                    'sourceUrl': _0x5865d0['all'][0x59 * 0x23 + -0x24b9 + -0x2 * -0xc47][_0x32fedc(0x1f1)],
                    'thumbnailUrl': _0x5865d0[_0x32fedc(0x1fd)][-0x23fb + -0x1d7f + 0x417a][_0x32fedc(0x1ca)]
                }
            }
        };
        return _0x9df3cb[_0x32fedc(0x1e3)](_0x68c8c7[_0x32fedc(0x1ec)], _0x3761a4, { 'quoted': _0x68c8c7 });
    } catch {
        throw _0x5db866[_0x32fedc(0x1eb)];
    }
};
handler[_0x583242(0x1d2)] = [_0x583242(0x1c2)][_0x583242(0x1d1)](_0x38c066 => _0x38c066 + '\x20<\x20busqueda\x20>'), handler[_0x583242(0x1da)] = [_0x583242(0x1e9)], handler[_0x583242(0x1ef)] = /^play$/i, handler[_0x583242(0x1d8)] = 0x1d4c + 0x1 * 0x266f + 0x12 * -0x3c3, handler['exp'] = 0xd * -0x1dd + 0x556 * 0x1 + 0x12e3;
export default handler;
