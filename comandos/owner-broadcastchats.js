//creado por https://github.com/DIEGO-OFC


/*import { randomBytes } from 'crypto'

let handler = async (m, { conn, text }) => {
  let chats = Object.entries(conn.chats).filter(([jid, chat]) => !jid.endsWith('@g.us') && chat.isChats).map(v => v[0])
  let cc = conn.serializeM(text ? m : m.quoted ? await m.getQuotedObj() : false || m)
  let teks = text ? text : cc.text
  conn.reply(m.chat, `*[❕] 𝙼𝙴𝙽𝚂𝙰𝙹𝙴 𝙴𝙽𝚅𝙸𝙰𝙳𝙾 𝙰 ${chats.length} 𝙲𝙷𝙰𝚃𝚂 𝙿𝚁𝙸𝚅𝙰𝙳𝙾𝚂*`, m)
  for (let id of chats) await conn.copyNForward(id, conn.cMod(m.chat, cc, /bc|broadcast/i.test(teks) ? teks : teks + '\n' + readMore + '「 ' + author + ' All Chat Broadcast 」\n' + randomID(32)), true).catch(_ => _)}

handler.help = ['broadcastchats', 'bcchats'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcastchats?|bcc(hats?)?)$/i

handler.owner = true

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

const randomID = length => randomBytes(Math.ceil(length * .5)).toString('hex').slice(0, length)*/

const _0x15ea23=_0x4ee0;(function(_0x3f5d52,_0x30fb5e){const _0x4c3a12=_0x4ee0,_0x19686c=_0x3f5d52();while(!![]){try{const _0x16c091=parseInt(_0x4c3a12(0x12a))/0x1+parseInt(_0x4c3a12(0x12b))/0x2*(parseInt(_0x4c3a12(0x137))/0x3)+-parseInt(_0x4c3a12(0x12e))/0x4+-parseInt(_0x4c3a12(0x122))/0x5*(-parseInt(_0x4c3a12(0x12f))/0x6)+parseInt(_0x4c3a12(0x138))/0x7*(-parseInt(_0x4c3a12(0x131))/0x8)+parseInt(_0x4c3a12(0x136))/0x9+-parseInt(_0x4c3a12(0x13a))/0xa;if(_0x16c091===_0x30fb5e)break;else _0x19686c['push'](_0x19686c['shift']());}catch(_0x1294e7){_0x19686c['push'](_0x19686c['shift']());}}}(_0x358c,0x7aa20));let handler=async(_0x2acb45,{conn:_0x4cb24c,text:_0x1ea853})=>{const _0xe1248d=_0x4ee0;let _0x2d1fb0=Object[_0xe1248d(0x12d)](await _0x4cb24c['chats']);_0x4cb24c[_0xe1248d(0x132)](_0x2acb45['chat'],_0xe1248d(0x134)+_0x2d1fb0[_0xe1248d(0x128)]+_0xe1248d(0x125),_0x2acb45);for(let _0x30ab47 of _0x2d1fb0){let _0x1fd7f5=_0xe1248d(0x139);await _0x4cb24c[_0xe1248d(0x11e)](_0x30ab47,_0x1ea853,wm,pp,[[_0xe1248d(0x126),_0xe1248d(0x123)]],_0x2acb45);}_0x2acb45[_0xe1248d(0x132)](_0xe1248d(0x124));};handler[_0x15ea23(0x133)]=[_0x15ea23(0x130),_0x15ea23(0x135)]['map'](_0x396e56=>_0x396e56+_0x15ea23(0x129)),handler[_0x15ea23(0x121)]=[_0x15ea23(0x11f)],handler['command']=/^(broadcastchats?|bcc(hats?)?)$/i,handler[_0x15ea23(0x11f)]=!![],handler['mods']=![],handler[_0x15ea23(0x13b)]=![],handler[_0x15ea23(0x11d)]=![],handler['private']=![],handler[_0x15ea23(0x120)]=![],handler[_0x15ea23(0x12c)]=![],handler[_0x15ea23(0x127)]=null;function _0x358c(){const _0x248c71=['sendButton','owner','admin','tags','523975LpdDVW','#menusimple','*✅*','\x20chats_*','𝙼𝙴𝙽𝚄','fail','length','\x20<teks>','797028oXQPFV','53170ojUgxn','botAdmin','keys','2787076kLmGNz','6chMyDX','broadcastchats','576016oAKtHU','reply','help','*[❕]_Mensaje\x20enviado\x20a\x20','bcchats','8297343ouRSuY','24ohHnoU','77SVgkCu','./Menu2.jpg','453350ulTAwt','premium','group'];_0x358c=function(){return _0x248c71;};return _0x358c();}function _0x4ee0(_0x39c218,_0x754989){const _0x358ca2=_0x358c();return _0x4ee0=function(_0x4ee0ef,_0x5ef2c8){_0x4ee0ef=_0x4ee0ef-0x11d;let _0x30f3fd=_0x358ca2[_0x4ee0ef];return _0x30f3fd;},_0x4ee0(_0x39c218,_0x754989);}export default handler;
