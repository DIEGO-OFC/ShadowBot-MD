const _0x3aa6fe = _0x203f;
function _0x203f(_0xde2a0b, _0x4352d9) {
    const _0x54348e = _0x289b();
    return _0x203f = function (_0x2ebdf8, _0x4aedbe) {
        _0x2ebdf8 = _0x2ebdf8 - (0x1b31 + -0x2bf + 0x16c4 * -0x1);
        let _0x4af856 = _0x54348e[_0x2ebdf8];
        return _0x4af856;
    }, _0x203f(_0xde2a0b, _0x4352d9);
}
(function (_0x384c65, _0x887e99) {
    const _0x23af65 = _0x203f, _0x19e78e = _0x384c65();
    while (!![]) {
        try {
            const _0x1e2e07 = parseInt(_0x23af65(0x1cd)) / (-0x79a + 0x7f8 + -0x3 * 0x1f) + -parseInt(_0x23af65(0x1d3)) / (0x888 + -0x155c + -0x1 * -0xcd6) * (parseInt(_0x23af65(0x1bd)) / (-0xdb + 0x979 + -0x89b * 0x1)) + parseInt(_0x23af65(0x1b7)) / (0x31 * 0x5d + 0x2586 * -0x1 + 0x13bd) * (-parseInt(_0x23af65(0x1dd)) / (0x23e1 + 0x26dc + -0xc74 * 0x6)) + -parseInt(_0x23af65(0x1dc)) / (-0x7 * -0x65 + 0x69 * -0x5d + 0x2368) * (parseInt(_0x23af65(0x1c0)) / (0x9 * 0x15c + 0x10cd + -0x2f * 0x9e)) + -parseInt(_0x23af65(0x1d5)) / (-0x3f1 * 0x3 + -0x2 * 0xa2d + -0x1e5 * -0x11) * (-parseInt(_0x23af65(0x1af)) / (0x710 + -0x1 * 0x277 + 0x92 * -0x8)) + parseInt(_0x23af65(0x1e0)) / (-0x35 + 0x1 * -0x1d4f + 0x1d8e) * (parseInt(_0x23af65(0x1bb)) / (-0x1 * -0x25c7 + -0x13b8 + -0x4 * 0x481)) + parseInt(_0x23af65(0x1e6)) / (0x19 * 0x104 + -0x785 + -0x15f * 0xd) * (-parseInt(_0x23af65(0x1e3)) / (-0x8a5 * -0x4 + -0x2bd * -0x1 + 0x3 * -0xc6c));
            if (_0x1e2e07 === _0x887e99)
                break;
            else
                _0x19e78e['push'](_0x19e78e['shift']());
        } catch (_0x41ea71) {
            _0x19e78e['push'](_0x19e78e['shift']());
        }
    }
}(_0x289b, -0x48b7d + -0x13f3e + 0x81e84));
import {
    youtubeSearch,
    youtubedl,
    youtubedlv2,
    youtubedlv3
} from '@bochilteam/scraper';
let handler = async (_0xca6e7d, {
    conn: _0x14c65f,
    command: _0x11d591,
    text: _0x2b715b,
    usedPrefix: _0x2150de
}) => {
    const _0x4e03d1 = _0x203f, _0x598a38 = {
            'RHUyQ': function (_0x473ca5, _0x55f7e3) {
                return _0x473ca5 + _0x55f7e3;
            },
            'htczf': function (_0x2bb19c, _0x52f530) {
                return _0x2bb19c(_0x52f530);
            },
            'WXYWL': function (_0x4ce684, _0x1f07e9) {
                return _0x4ce684 + _0x1f07e9;
            },
            'LUpdT': _0x4e03d1(0x1bf),
            'AfeFF': _0x4e03d1(0x1b0),
            'nDOOd': _0x4e03d1(0x1e5),
            'VRZWP': function (_0x331e24, _0x2ccc44) {
                return _0x331e24(_0x2ccc44);
            },
            'nHcmN': _0x4e03d1(0x1cb),
            'QcBDe': 'audio/mp4',
            'enzyU': _0x4e03d1(0x1ca)
        };
    if (!_0x2b715b)
        throw '*[❕𝐈𝐍𝐅𝐎❕]\x20NOMBRE\x20DE\x20LA\x20CANCION\x20FALTANTE,\x20POR\x20FAVOR\x20INGRESE\x20EL\x20COMANDO\x20MAS\x20EL\x20NOMBRE/TITULO\x20DE\x20UNA\x20CANCIÓN*\x0a\x0a*➢\x20EJEMPLO:*\x0a*' + _0x598a38[_0x4e03d1(0x1c7)](_0x2150de, _0x11d591) + _0x4e03d1(0x1ba);
    try {
        let _0x1f4bc4 = (await _0x598a38[_0x4e03d1(0x1b9)](youtubeSearch, _0x2b715b))[_0x4e03d1(0x1ae)][-0x1074 + 0x16 * -0x16 + -0x24b * -0x8];
        if (!_0x1f4bc4)
            throw _0x4e03d1(0x1b2);
        let {
            title: _0xafe2f0,
            description: _0x2d1974,
            thumbnail: _0x1c4bd7,
            videoId: _0x585865,
            durationH: _0x19f3b7,
            viewH: _0x210d1e,
            publishedTime: _0x1ef260
        } = _0x1f4bc4;
        const _0x146ecb = _0x598a38[_0x4e03d1(0x1c9)](_0x598a38[_0x4e03d1(0x1b5)], _0x585865);
        let _0x46b25b = _0x4e03d1(0x1b1) + _0xafe2f0 + _0x4e03d1(0x1be) + _0x2d1974 + _0x4e03d1(0x1e1) + _0x1ef260 + _0x4e03d1(0x1d9) + _0x19f3b7 + _0x4e03d1(0x1e2) + _0x210d1e + _0x4e03d1(0x1c3) + _0x1f4bc4[_0x4e03d1(0x1cc)] + '\x0a╚═══════❰\x20*' + vs + _0x4e03d1(0x1c8);
        _0x14c65f[_0x4e03d1(0x1d4)](_0xca6e7d[_0x4e03d1(0x1df)], '╔═══════❰\x20\x20*🔰*\x20\x20❱══════⬣\x0a║\x20*TITULO\x20|\x20TITLE*\x0a║\x20' + _0xafe2f0 + _0x4e03d1(0x1be) + _0x2d1974 + _0x4e03d1(0x1e1) + _0x1ef260 + '\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*DURACION\x20|\x20DURATION*\x0a║\x20' + _0x19f3b7 + _0x4e03d1(0x1e2) + _0x210d1e + '\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*URL*\x0a║\x20' + _0x1f4bc4['url'] + _0x4e03d1(0x1da) + vs + '*\x20❱══════⬣', author[_0x4e03d1(0x1b6)](), await (await _0x14c65f['getFile'](_0x1c4bd7))[_0x4e03d1(0x1d6)], ![], {
            'quoted': _0xca6e7d,
            'document': { 'url': _0x598a38[_0x4e03d1(0x1cf)] },
            'mimetype': global[_0x4e03d1(0x1c1)],
            'fileName': '𝕐𝕠𝕦𝕋𝕦𝕓𝕖\x20ℙ𝕝𝕒𝕪',
            'fileLength': 0x25e546dd9aaaa,
            'pageCount': 0x29a,
            'contextInfo': {
                'externalAdReply': {
                    'showAdAttribution': !![],
                    'mediaType': 0x2,
                    'mediaUrl': '' + _0x146ecb,
                    'title': _0x4e03d1(0x1e4),
                    'body': wm,
                    'sourceUrl': _0x598a38[_0x4e03d1(0x1b3)],
                    'thumbnail': await (await _0x14c65f[_0x4e03d1(0x1b8)](_0x1c4bd7))[_0x4e03d1(0x1d6)]
                }
            }
        });
        const _0x5128f4 = await await _0x598a38[_0x4e03d1(0x1de)](youtubedlv2, _0x146ecb)[_0x4e03d1(0x1d8)](async _0x3f3fda => await youtubedl(_0x146ecb))['catch'](async _0x2165f8 => await youtubedlv3(_0x146ecb)), _0x2b5738 = await _0x5128f4['audio'][_0x598a38['nHcmN']]['download']();
        let _0xd043b3 = {
            'audio': { 'url': _0x2b5738 },
            'mimetype': _0x598a38['QcBDe'],
            'fileName': '' + _0xafe2f0,
            'contextInfo': {
                'externalAdReply': {
                    'showAdAttribution': !![],
                    'mediaType': 0x2,
                    'mediaUrl': _0x146ecb,
                    'title': _0xafe2f0,
                    'body': wm,
                    'sourceUrl': _0x146ecb,
                    'thumbnail': await (await _0x14c65f['getFile'](_0x1c4bd7))[_0x4e03d1(0x1d6)]
                }
            }
        };
        return _0x14c65f[_0x4e03d1(0x1b4)](_0xca6e7d[_0x4e03d1(0x1df)], _0xd043b3, { 'quoted': _0xca6e7d });
    } catch {
        throw _0x598a38[_0x4e03d1(0x1d7)];
    }
};
handler[_0x3aa6fe(0x1ce)] = [_0x3aa6fe(0x1c6)]['map'](_0xb2d3fd => _0xb2d3fd + _0x3aa6fe(0x1c4)), handler[_0x3aa6fe(0x1db)] = ['downloader'], handler[_0x3aa6fe(0x1c5)] = /^play$/i, handler['dorracoins'] = 0x1aee + 0x49 * -0x1 + 0x47 * -0x60, handler[_0x3aa6fe(0x1bc)] = -0x966 + -0x22a5 + 0x2c0b, handler['limit'] = !![];
export default handler;
function pickRandom(_0x338a80) {
    const _0x49c985 = _0x3aa6fe, _0x2a9c38 = {
            'JGRck': function (_0x7c7f78, _0x553ebe) {
                return _0x7c7f78 * _0x553ebe;
            }
        };
    return _0x338a80[Math[_0x49c985(0x1d2)](_0x2a9c38[_0x49c985(0x1c2)](_0x338a80[_0x49c985(0x1d1)], Math[_0x49c985(0x1d0)]()))];
}
function _0x289b() {
    const _0x59263d = [
        '\x0a╚═══════❰\x20*',
        'tags',
        '12XOzUtV',
        '155rfjFjc',
        'VRZWP',
        'chat',
        '103590hyItoQ',
        '\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*PUBLICADO\x20|\x20PUBLISHE*\x0a║\x20',
        '\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*VISTAS\x20|\x20VIEWS*\x0a║\x20',
        '64792SpyIjK',
        '⏰\x20Enviando\x20audio',
        'https://github.com/DIEGO-OFC/DORRAT-BOT-MD',
        '120DVDbmX',
        'video',
        '18LfLLDr',
        'https://wa.me/12522518391',
        '╔═══════❰\x20\x20*🔰*\x20\x20❱══════⬣\x0a║\x20*TITULO\x20|\x20TITLE*\x0a║\x20',
        '*El\x20video\x20no\x20se\x20encontró,\x20intente\x20ingresar\x20el\x20nombre\x20original\x20de\x20la\x20canción\x20o\x20video*',
        'nDOOd',
        'sendMessage',
        'LUpdT',
        'trim',
        '16692sEFqQO',
        'getFile',
        'htczf',
        '\x20Phonk*',
        '110OIYJLi',
        'exp',
        '15laFCYS',
        '\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*DESCRIPCIÓN\x20\x20|\x20DESCRIPTION*\x0a║\x20',
        'https://www.youtube.com/watch?v=',
        '569317xsvuGK',
        'dpdf',
        'JGRck',
        '\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*URL*\x0a║\x20',
        '\x20<pencarian>',
        'command',
        'play',
        'RHUyQ',
        '*\x20❱══════⬣\x0a╰────────⬣',
        'WXYWL',
        '*[❕]\x20ERROR,\x20INTENTA\x20DE\x20NUEVO*',
        '128kbps',
        'url',
        '285883WqsexN',
        'help',
        'AfeFF',
        'random',
        'length',
        'floor',
        '34154cIKYzt',
        'sendButton',
        '761192BEOqjA',
        'data',
        'enzyU',
        'catch',
        '\x0a║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\x0a║\x20*DURACION\x20|\x20DURATION*\x0a║\x20'
    ];
    _0x289b = function () {
        return _0x59263d;
    };
    return _0x289b();
}