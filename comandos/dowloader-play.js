import { youtubedl, youtubeSearch, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper' 
  
 let handler = async (m, { conn, text, args, isPrems, isOwner, usedPrefix, command }) => { 
 let q, v, yt, dl_url, ttl, size, lolhuman, lolh, n, n2, n3, n4, cap, qu, currentQuality    
 if (!text) throw `*[❕𝐈𝐍𝐅𝐎❕] NOMBRE DE LA CANCION FALTANTE, POR FAVOR INGRESE EL COMANDO MAS EL NOMBRE/TITULO DE UNA CANCIÓN*\n\n*➢ EJEMPLO:*\n*${usedPrefix + command} Phonk*`
try { 
 var vid = (await youtubeSearch(text)).video[0] 
 var { title, description, thumbnail, videoId, durationH, durationS, viewH, publishedTime } = vid 
 var url = 'https://www.youtube.com/watch?v=' + videoId 
 let vide = `https://yt.btch.bz/download?URL=${url}&videoName=video` 
 let web = `https://yt.btch.bz/downloadAudio?URL=${url}&videoName=video` 
 var tmb = thumbnail 
 let lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytplay?apikey=GataDios&query=${title}`)    
 let lolh = await lolhuman.json() 
 let n = lolh.result.title || 'error' 
 var captionvid = `╔═══════❰  *🔰*  ❱══════⬣ 
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
 ║ ${url} 
 ╚═══════❰ *${vs}* ❱══════⬣`   
  
 if (command == 'play') {         
 var pesan = await conn.sendMessage(m.chat, { 
 text: captionvid, 
 contextInfo: { 
 externalAdReply: { 
 title: title, 
 body: packname, 
 thumbnailUrl: tmb, 
 sourceUrl: web, 
 mediaType: 1, 
 showAdAttribution: true, 
 renderLargerThumbnail: true 
 }}} , { quoted: m }) 
 m.reply(`*[⏱️]EL AUDIO PUEDE TARDAR EN  ENVIARSE, PORFAVOR TENGA PACIENCIA, SON LAS APIS`)
 await conn.sendMessage(m.chat, { audio: { url: lolh.result.audio.link }, mimetype: 'audio/mpeg', contextInfo: { 
 externalAdReply: { 
 title: title, 
 body: "", 
 thumbnailUrl: tmb, 
 sourceUrl: web, 
 mediaType: 1, 
 showAdAttribution: true, 
 renderLargerThumbnail: true 
 }}} , { quoted: m })    
 } 
 if (command == 'play2') { 
 var pesan = await conn.sendMessage(m.chat, { 
 text: captionvid, 
 contextInfo: { 
 externalAdReply: { 
 title: title, 
 body: packname, 
 thumbnailUrl: tmb , 
 sourceUrl: web, 
 mediaType: 1, 
 showAdAttribution: true, 
 renderLargerThumbnail: true 
 }}} , { quoted: m }) 
 await conn.sendMessage(m.chat, { video: { url: lolh.result.video.link }, fileName: `${ttl}.mp4`, mimetype: 'video/mp4', caption: `${wm}\nTITULO\n ${title}` }, { quoted: m }) 
 } 
 } catch (e) { 
 conn.reply(m.chat, `*[❕] ERROR INTENTALO DE NUEVO.*`, m, { 
 contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null,  
 title: 'DORRAT-BOT-MD', 
 body: 'Super WhatsApp Bot Pro',          
 previewType: 0, thumbnail: fs.readFileSync("./galeria/menudorrat5.png"), 
 sourceUrl: `https://github.com/DIEGO-OFC/DORRAT-BOT-MD`}}}) 
  
 let res = await fetch("https://violetics.pw/api/media/youtube-play?apikey=beta&query="+text)  
 let json = await res.json() 
 conn.sendFile(m.chat, json.result.url, 'error.mp4', `${wm}`, m) 
 }} 
 handler.command = ['play', 'play2'] 
 handler.exp = 0 
 handler.limit = 1 
 export default handler 
  
 async function cut(url) { 
 url = encodeURIComponent(url) 
 let res = await fetch(`https://api.botcahx.live/api/linkshort/bitly?link=${url}&apikey=${btc}`) 
 if (!res.ok) throw false 
 return await res.text() 
 } 
 async function delay(ms) { 
 await new Promise(resolve => setTimeout(resolve, ms)) 
 }


/*const _0x235d2a = _0x1518;
(function (_0x5d2146, _0x2bd7b9) {
    const _0x36b967 = _0x1518, _0x31d1ec = _0x5d2146();
    while (!![]) {
        try {
            const _0x1019dd = parseInt(_0x36b967(0x1f8)) / (0x28 * -0x97 + 0x29e + 0x14fb) * (parseInt(_0x36b967(0x20c)) / (0x2 * -0x185 + -0x1aa5 + 0xb * 0x2b3)) + parseInt(_0x36b967(0x206)) / (-0x1642 + 0x9d * 0x3c + 0xe87 * -0x1) * (parseInt(_0x36b967(0x1fd)) / (-0x117a + -0x6b0 + 0x182e)) + -parseInt(_0x36b967(0x1ed)) / (-0x12f6 * 0x1 + 0x3 * 0x748 + -0x2dd) + parseInt(_0x36b967(0x209)) / (-0xe9a + -0x25c7 + 0x3467) * (parseInt(_0x36b967(0x205)) / (0xf55 + -0xc00 + -0x6 * 0x8d)) + parseInt(_0x36b967(0x201)) / (-0x6 * 0x142 + 0x10f + 0x1 * 0x685) + parseInt(_0x36b967(0x204)) / (-0xe2e + 0x17dc + -0x9a5) + -parseInt(_0x36b967(0x1fc)) / (0x1522 + -0x1481 + 0x1 * -0x97) * (parseInt(_0x36b967(0x20a)) / (-0x744 + 0x33e + 0x411));
            if (_0x1019dd === _0x2bd7b9)
                break;
            else
                _0x31d1ec['push'](_0x31d1ec['shift']());
        } catch (_0x12be37) {
            _0x31d1ec['push'](_0x31d1ec['shift']());
        }
    }
}(_0x5ed5, 0xdebb0 + -0x1 * 0x658e1 + 0x195ad));
function _0x1518(_0x3b9726, _0x22ac87) {
    const _0x141008 = _0x5ed5();
    return _0x1518 = function (_0x30d60b, _0x2e1270) {
        _0x30d60b = _0x30d60b - (-0x821 * -0x3 + 0x1 * 0x2502 + 0x1 * -0x3b7b);
        let _0x296a26 = _0x141008[_0x30d60b];
        return _0x296a26;
    }, _0x1518(_0x3b9726, _0x22ac87);
}
import {
    youtubeSearch,
    youtubedl,
    youtubedlv2,
    youtubedlv3
} from '@bochilteam/scraper';
let handler = async (_0x29866b, {
    conn: _0x4d6edf,
    command: _0x18f421,
    text: _0x32f40c,
    usedPrefix: _0x2ba8e2
}) => {
    const _0x41fd4e = _0x1518, _0x477dd4 = {
            'nqXNh': function (_0x33bb99, _0x57a019) {
                return _0x33bb99 + _0x57a019;
            },
            'heVSm': function (_0x445583, _0x5c88c4) {
                return _0x445583(_0x5c88c4);
            },
            'nGyCc': _0x41fd4e(0x217),
            'zFiOK': _0x41fd4e(0x1f4),
            'zgkou': function (_0x35f944, _0x2f8e24) {
                return _0x35f944(_0x2f8e24);
            },
            'WtZfB': _0x41fd4e(0x215),
            'mgNpG': _0x41fd4e(0x1eb),
            'Qlxpp': '*[❕]\x20ERROR,\x20INTENTA\x20DE\x20NUEVO*'
        };
    if (!_0x32f40c)
        throw '*[❕𝐈𝐍𝐅𝐎❕]\x20NOMBRE\x20DE\x20LA\x20CANCION\x20FALTANTE,\x20POR\x20FAVOR\x20INGRESE\x20EL\x20COMANDO\x20MAS\x20EL\x20NOMBRE/TITULO\x20DE\x20UNA\x20CANCIÓN*\x0a\x0a*➢\x20EJEMPLO:*\x0a*' + _0x477dd4[_0x41fd4e(0x1ee)](_0x2ba8e2, _0x18f421) + _0x41fd4e(0x1ec);
    try {
        let _0x4e0ddc = (await _0x477dd4['heVSm'](youtubeSearch, _0x32f40c))[_0x41fd4e(0x21a)][0x3ad * 0x3 + -0x2 * -0xbf6 + -0x22f3];
        if (!_0x4e0ddc)
            throw _0x477dd4[_0x41fd4e(0x1f5)];
        let {
            title: _0x5b9c1e,
            description: _0x1db13b,
            thumbnail: _0x17dd1b,
            videoId: _0x42a886,
            durationH: _0x764f3b,
            viewH: _0x58691d,
            publishedTime: _0x901964
        } = _0x4e0ddc;
        const _0xb5d8dc = _0x477dd4[_0x41fd4e(0x1ee)](_0x477dd4[_0x41fd4e(0x219)], _0x42a886);
        let _0x3d0b53 = _0x41fd4e(0x1f0) + _0x5b9c1e + _0x41fd4e(0x21b) + _0x1db13b + _0x41fd4e(0x20b) + _0x901964 + '\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*DURACION\x20|\x20DURATION*\x0a║\x20' + _0x764f3b + _0x41fd4e(0x1f1) + _0x58691d + _0x41fd4e(0x1f2) + _0x4e0ddc[_0x41fd4e(0x214)] + _0x41fd4e(0x20d) + vs + _0x41fd4e(0x1fe);
        _0x29866b[_0x41fd4e(0x1ff)]('╔═══════❰\x20\x20*🔰*\x20\x20❱══════⬣\x0a║\x20*TITULO\x20|\x20TITLE*\x0a║\x20' + _0x5b9c1e + _0x41fd4e(0x21b) + _0x1db13b + _0x41fd4e(0x20b) + _0x901964 + _0x41fd4e(0x1fa) + _0x764f3b + '\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*VISTAS\x20|\x20VIEWS*\x0a║\x20' + _0x58691d + _0x41fd4e(0x1f2) + _0x4e0ddc['url'] + _0x41fd4e(0x20d) + vs + _0x41fd4e(0x1f9));
        const _0xafbcff = await await _0x477dd4[_0x41fd4e(0x1f7)](youtubedlv2, _0xb5d8dc)['catch'](async _0x57b412 => await youtubedl(_0xb5d8dc))[_0x41fd4e(0x218)](async _0x753d8c => await youtubedlv3(_0xb5d8dc)), _0x139b21 = await _0xafbcff[_0x41fd4e(0x213)][_0x477dd4[_0x41fd4e(0x203)]][_0x41fd4e(0x216)]();
        let _0x5ee3c7 = {
            'audio': { 'url': _0x139b21 },
            'mimetype': _0x477dd4[_0x41fd4e(0x21e)],
            'fileName': '' + _0x5b9c1e,
            'contextInfo': {
                'externalAdReply': {
                    'showAdAttribution': !![],
                    'mediaType': 0x2,
                    'mediaUrl': _0xb5d8dc,
                    'title': _0x5b9c1e,
                    'body': wm,
                    'sourceUrl': _0xb5d8dc,
                    'thumbnail': await (await _0x4d6edf[_0x41fd4e(0x21c)](_0x17dd1b))[_0x41fd4e(0x207)]
                }
            }
        };
        return _0x4d6edf[_0x41fd4e(0x1ef)](_0x29866b['chat'], _0x5ee3c7, { 'quoted': _0x29866b });
    } catch {
        throw _0x477dd4['Qlxpp'];
    }
};
handler['help'] = [_0x235d2a(0x20e)][_0x235d2a(0x1ea)](_0x4fec33 => _0x4fec33 + _0x235d2a(0x202)), handler[_0x235d2a(0x1f3)] = [_0x235d2a(0x1f6)], handler[_0x235d2a(0x200)] = /^play$/i, handler[_0x235d2a(0x212)] = -0x25c7 + 0x1fe7 + 0x5e5, handler[_0x235d2a(0x210)] = -0x17e7 + -0x11 * 0x24a + -0x4d5 * -0xd, handler[_0x235d2a(0x1fb)] = !![];
export default handler;
function pickRandom(_0x260105) {
    const _0x363f1d = _0x235d2a, _0xd2fd8d = {
            'dOGqu': function (_0x3d53ae, _0x2ab59b) {
                return _0x3d53ae * _0x2ab59b;
            }
        };
    return _0x260105[Math[_0x363f1d(0x208)](_0xd2fd8d[_0x363f1d(0x211)](_0x260105[_0x363f1d(0x21d)], Math[_0x363f1d(0x20f)]()))];
}
function _0x5ed5() {
    const _0x187499 = [
        '\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*URL*\x0a║\x20',
        'tags',
        'https://www.youtube.com/watch?v=',
        'nGyCc',
        'downloader',
        'zgkou',
        '1UvQOQa',
        '*\x20❱══════⬣',
        '\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*DURACION\x20|\x20DURATION*\x0a║\x20',
        'limit',
        '1760UIncUN',
        '88Yrtmpn',
        '*\x20❱══════⬣\x0a╰────────⬣',
        'reply',
        'command',
        '1595824mTHlgm',
        '\x20<pencarian>',
        'WtZfB',
        '7459938XRzZsm',
        '12026nkPpUK',
        '97638GrtSeV',
        'data',
        'floor',
        '948CzElfx',
        '90772ShGmXE',
        '\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*PUBLICADO\x20|\x20PUBLISHE*\x0a║\x20',
        '521476WYCqaa',
        '\x0a╚═══════❰\x20*',
        'play',
        'random',
        'exp',
        'dOGqu',
        'dorracoins',
        'audio',
        'url',
        '128kbps',
        'download',
        '*El\x20video\x20no\x20se\x20encontró,\x20intente\x20ingresar\x20el\x20nombre\x20original\x20de\x20la\x20canción\x20o\x20video*',
        'catch',
        'zFiOK',
        'video',
        '\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*DESCRIPCIÓN\x20\x20|\x20DESCRIPTION*\x0a║\x20',
        'getFile',
        'length',
        'mgNpG',
        'map',
        'audio/mp4',
        '\x20Phonk*',
        '1120070OdJIKg',
        'nqXNh',
        'sendMessage',
        '╔═══════❰\x20\x20*🔰*\x20\x20❱══════⬣\x0a║\x20*TITULO\x20|\x20TITLE*\x0a║\x20',
        '\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*VISTAS\x20|\x20VIEWS*\x0a║\x20'
    ];
    _0x5ed5 = function () {
        return _0x187499;
    };
    return _0x5ed5();
}*/
