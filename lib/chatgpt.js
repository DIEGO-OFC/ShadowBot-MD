function _0x1cd2() {
    const _0x5687e8 = [
        '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',
        '5685222yrSfeH',
        'random',
        'application/json',
        'floor',
        '5257008JtLrzV',
        '1508095YZAtSN',
        'text',
        '1157233USWrsS',
        '548sYqgdE',
        'iaJDv',
        'https://api.openai.com/v1/completions',
        'POST',
        'OWgMQ',
        '424813YdHfkQ',
        '16XtiyOr',
        '24237945PDkNkL',
        'choices',
        'replace',
        '8712SsctGM',
        'Bearer\x20'
    ];
    _0x1cd2 = function () {
        return _0x5687e8;
    };
    return _0x1cd2();
}
const _0x53ff89 = _0x2019;
(function (_0x1993d2, _0xb80caa) {
    const _0x2e9d51 = _0x2019, _0x25d48b = _0x1993d2();
    while (!![]) {
        try {
            const _0x3cff56 = parseInt(_0x2e9d51(0x140)) / (-0x813 + -0x83 * -0x1f + 0x1 * -0x7c9) + parseInt(_0x2e9d51(0x13b)) / (-0x1 * 0x2324 + 0x131c * -0x1 + 0x3642) * (-parseInt(_0x2e9d51(0x145)) / (-0x939 + -0x1 * -0xcbf + 0x383 * -0x1)) + -parseInt(_0x2e9d51(0x141)) / (0xf * -0xa9 + 0x1f2 * -0x10 + 0x85 * 0x4f) * (parseInt(_0x2e9d51(0x138)) / (-0xf77 * 0x2 + 0x1581 * -0x1 + 0x45f * 0xc)) + -parseInt(_0x2e9d51(0x148)) / (-0xe4e + -0x20cf + -0xb * -0x449) + -parseInt(_0x2e9d51(0x13a)) / (0x1fa0 * -0x1 + -0x17fd + 0xde9 * 0x4) + parseInt(_0x2e9d51(0x137)) / (-0x2272 * 0x1 + 0x115c + 0x111e) + parseInt(_0x2e9d51(0x142)) / (-0x22e6 + 0x1 * -0x598 + 0x2887);
            if (_0x3cff56 === _0xb80caa)
                break;
            else
                _0x25d48b['push'](_0x25d48b['shift']());
        } catch (_0x1e691d) {
            _0x25d48b['push'](_0x25d48b['shift']());
        }
    }
}(_0x1cd2, -0x37a36 + -0x4bd * -0x217 + 0x3a56b));
import _0x172582 from 'request';
let API_KEY = [_0x53ff89(0x147)], randKey = API_KEY[Math[_0x53ff89(0x136)](Math[_0x53ff89(0x149)]() * API_KEY['length'])];
function _0x2019(_0x3496d9, _0x15f9cd) {
    const _0x29be1b = _0x1cd2();
    return _0x2019 = function (_0x5176a0, _0x4e68e6) {
        _0x5176a0 = _0x5176a0 - (0x1677 + -0x143f + 0x1 * -0x102);
        let _0x3bed55 = _0x29be1b[_0x5176a0];
        return _0x3bed55;
    }, _0x2019(_0x3496d9, _0x15f9cd);
}
async function openAi(_0x27131e) {
    const _0x369ac6 = _0x53ff89, _0x17e982 = {
            'iaJDv': function (_0x26968f, _0x2eecce) {
                return _0x26968f(_0x2eecce);
            },
            'Dbpyk': _0x369ac6(0x13e),
            'QiIXi': _0x369ac6(0x13d),
            'OWgMQ': _0x369ac6(0x14a),
            'eqFVc': 'text-davinci-003'
        };
    return new Promise(async function (_0x1dd8ef, _0x28c79b) {
        const _0x483e37 = _0x369ac6;
        try {
            const _0x2b5bf2 = {
                'method': _0x17e982['Dbpyk'],
                'url': _0x17e982['QiIXi'],
                'headers': {
                    'Content-Type': _0x17e982[_0x483e37(0x13f)],
                    'Authorization': _0x483e37(0x146) + randKey
                },
                'json': !![],
                'body': {
                    'prompt': _0x27131e,
                    'model': _0x17e982['eqFVc'],
                    'max_tokens': 0xbb8,
                    'n': 0x1,
                    'temperature': 0.5
                }
            };
            _0x172582(_0x2b5bf2, function (_0x25b298, _0x43a598, _0x36e23a) {
                const _0x370462 = _0x483e37;
                if (_0x25b298)
                    throw new Error(_0x25b298);
                const _0x49beaa = _0x36e23a[_0x370462(0x143)][-0x264c + 0x11ef * 0x2 + 0x26e * 0x1][_0x370462(0x139)], _0x1c50e6 = _0x49beaa[_0x370462(0x144)]('\x0a\x0a', '');
                _0x17e982[_0x370462(0x13c)](_0x1dd8ef, { 'dorrat': _0x1c50e6 });
            });
        } catch (_0x41b369) {
        }
    });
}
export {
    openAi
};
