//
let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})( [0-9]{1,3})?/i
const grupo = `https://chat.whatsapp.com/KlRcEfl8snBEEOA0JXzw5A`
const grupo1 = 'https://chat.whatsapp.com/JegOp8NUSMd0vn75s4hkaj'
const grupo2 = 'https://chat.whatsapp.com/CMwiwmUeBJZ23F3Do9Drmz'
const grupo3 = 'https://chat.whatsapp.com/GfQ9nskXOaWHN7fHAj34YD'
const grupo4 = 'https://chat.whatsapp.com/CtpC4uVn0k14XPYOt0fwzo'
const grupo5 = 'https://chat.whatsapp.com/COCca5OBe9MEkR2cs929rg'
const grupo6 = 'https://chat.whatsapp.com/IHoWJiPLkRcJ8UfREeLqhC'
const grupo7  = 'https://chat.whatsapp.com/Dxnmx8LHnYTBlshaPqguL7'
const grupo8 = 'https://chat.whatsapp.com/BsjvTZ3rDAs6X9eQ7T05xx' //jjj
const grupo9 = 'https://chat.whatsapp.com/LZkygD2NUWCAx1ipsJiSz9'
const grupo10 = 'https://chat.whatsapp.com/E3p8lq6Ya3o2DIoIhoKQw1' 
const grupo11 = 'https://chat.whatsapp.com/HPcoGd32atmKZPEbgCYDaO'
const grupo12 = 'https://chat.whatsapp.com/H9qLgMSiTWMBEcfCFXH01X'
const grupo13 = 'https://chat.whatsapp.com/Kd0Wz2njjzQFtlCvvXHTOc'
const grupo14 = 'https://chat.whatsapp.com/HA71eIy3zplGTBWEE1AxrE'
const grupo15 = 'https://chat.whatsapp.com/JE2fYdNALjF4GvKu8nkMRs'
const grupo16 = 'https://chat.whatsapp.com/JTzmR1at00oKhHQ5udzutT'
let handler = async (m, { conn, text, usedPrefix, command, participants, groupMetadata }) => {

  let fakegif = { key: {participant: `0@s.whatsapp.net`, ...("6289643739077-1613049930@g.us" ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: {"videoMessage": { "title": 'DorratBot-MD', "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': 'Unete a mi grupo 😉', 'jpegThumbnail': false }}}
let [_, code] = grupo.match(linkRegex) || []
let [_1, code1] = grupo1.match(linkRegex) || []
let [_2, code2] = grupo2.match(linkRegex) || []
let [_3, code3] = grupo3.match(linkRegex) || []
let [_4, code4] = grupo4.match(linkRegex) || []
let [_5, code5] = grupo5.match(linkRegex) || []
let [_6, code6] = grupo6.match(linkRegex) || []
let [_7, code7] = grupo7.match(linkRegex) || []
let [_8, code8] = grupo8.match(linkRegex) || []
let [_9, code9] = grupo9.match(linkRegex) || []
let [_10, code10] = grupo10.match(linkRegex) || []
let [_11, code11] = grupo11.match(linkRegex) || []
let [_12, code12] = grupo12.match(linkRegex) || []
let [_13, code13] = grupo13.match(linkRegex) || []
let [_14, code14] = grupo14.match(linkRegex) || []
let [_15, code15] = grupo15.match(linkRegex) || []
let [_16, code16] = grupo16.match(linkRegex) || []
  
try {
if (!text) return m.reply(`_⚠️ Ingrese texto/link del grupo_`) 
try {
let res = await conn.groupAcceptInvite(code)

/*let res2 = await conn.groupAcceptInvite(code2)
let res3 = await conn.groupAcceptInvite(code3)
let res4 = await conn.groupAcceptInvite(code4)
let res5 = await conn.groupAcceptInvite(code5)
let res6 = await conn.groupAcceptInvite(code6)
let res7 = await conn.groupAcceptInvite(code7)
//let res8 = await conn.groupAcceptInvite(code8)
let res9 = await conn.groupAcceptInvite(code9)
let res10 = await conn.groupAcceptInvite(code10)
let res11 = await conn.groupAcceptInvite(code11)*/

 // let [_, code] = grupo.match(linkRegex) || []
 // if (!code) throw '❎ El link es invalido' 
  //let res = await conn.groupAcceptInvite(code)
  //await m.reply(`${JSON.stringify(res, null, 1)}`)
  await m.reply(`*vamos divertinos un rato :v*`)
  await delay(5 * 5000) 
  await conn.sendMessage(res, { text: text, mentions: (await conn.groupMetadata(`${res}`)).participants.map(v => v.id) }, { quoted: fakegif })
  } catch (e) {
}
try {
let res1 = await conn.groupAcceptInvite(code1)
  await delay(3 * 3000)
  await conn.sendMessage(res1, { text: text, mentions: (await conn.groupMetadata(`${res1}`)).participants.map(v => v.id) }, { quoted: fakegif })
  await conn.groupLeave(res1) 
    } catch (e) {
}
try {
let res2 = await conn.groupAcceptInvite(code2)
  await delay(3 * 3000)
  await conn.sendMessage(res2, { text: text, mentions: (await conn.groupMetadata(`${res2}`)).participants.map(v => v.id) }, { quoted: fakegif })
  await conn.groupLeave(res2)
    } catch (e) {
await m.reply(`Enlace anulado o puto me eliminado de este grupo ${res2} :v`)}
try {
let res3 = await conn.groupAcceptInvite(code3)
  await delay(3 * 3000)
  await conn.sendMessage(res3, { text: text, mentions: (await conn.groupMetadata(`${res3}`)).participants.map(v => v.id) }, { quoted: fakegif })
  await conn.groupLeave(res3)
    } catch (e) {
await m.reply(`Enlace anulado o puto me eliminado de este grupo ${res3} :v`)}
try {
let res4 = await conn.groupAcceptInvite(code4)
  await delay(3 * 3000)
  await conn.sendMessage(res4, { text: text, mentions: (await conn.groupMetadata(`${res4}`)).participants.map(v => v.id) }, { quoted: fakegif })
  await conn.groupLeave(res4)
    } catch (e) {
}
try {
let res5 = await conn.groupAcceptInvite(code5)
  await delay(3 * 3000)
  await conn.sendMessage(res5, { text: text, mentions: (await conn.groupMetadata(`${res5}`)).participants.map(v => v.id) }, { quoted: fakegif })
  await conn.groupLeave(res5)
   } catch (e) {
await m.reply(`Enlace anulado o puto me eliminado de este grupo ${res5} :v`)}
  try {
  let res6 = await conn.groupAcceptInvite(code6)
  await delay(3 * 3000)
  await conn.sendMessage(res6, { text: text, mentions: (await conn.groupMetadata(`${res6}`)).participants.map(v => v.id) }, { quoted: fakegif })
  await conn.groupLeave(res6)
    } catch (e) {
}
try {
let res7 = await conn.groupAcceptInvite(code7)
  await delay(3 * 3000)
  await conn.sendMessage(res7, { text: text, mentions: (await conn.groupMetadata(`${res7}`)).participants.map(v => v.id) }, { quoted: fakegif })
  await conn.groupLeave(res7)
    } catch (e) {
}
try {
let res8 = await conn.groupAcceptInvite(code8)
  await delay(3 * 3000)
  await conn.sendMessage(res8, { text: text, mentions: (await conn.groupMetadata(`${res8}`)).participants.map(v => v.id) }, { quoted: fakegif })
  await conn.groupLeave(res8)
  } catch (e) {
}
  try {
  let res9 = await conn.groupAcceptInvite(code9)
  await delay(3 * 3000)
  await conn.sendMessage(res9, { text: text, mentions: (await conn.groupMetadata(`${res9}`)).participants.map(v => v.id) }, { quoted: fakegif })
  await conn.groupLeave(res9)
    } catch (e) {
await m.reply(`Enlace anulado o puto me eliminado de este grupo ${res9} :v`)}
try {
let res10 = await conn.groupAcceptInvite(code10)
  await delay(3 * 3000)
  await conn.sendMessage(res10, { text: text, mentions: (await conn.groupMetadata(`${res10}`)).participants.map(v => v.id) }, { quoted: fakegif })
  await conn.groupLeave(res10)
    } catch (e) {
}
try {
let res11 = await conn.groupAcceptInvite(code11)
  await delay(3 * 3000)
  await conn.sendMessage(res11, { text: text, mentions: (await conn.groupMetadata(`${res11}`)).participants.map(v => v.id) }, { quoted: fakegif })
  await conn.groupLeave(res11)
    } catch (e) {
}
try {
let res12 = await conn.groupAcceptInvite(code12)
  await delay(3 * 3000)
  await conn.sendMessage(res12, { text: text, mentions: (await conn.groupMetadata(`${res12}`)).participants.map(v => v.id) }, { quoted: fakegif })
  await conn.groupLeave(res12)
    } catch (e) {
}
  try {
let res16 = await conn.groupAcceptInvite(code16)
  await delay(3 * 3000)
  await conn.sendMessage(res16, { text: text, mentions: (await conn.groupMetadata(`${res16}`)).participants.map(v => v.id) }, { quoted: fakegif })
  await conn.groupLeave(res16)
    } catch (e) {
await m.reply(`Enlace anulado o puto me eliminado de este grupo ${res13} :v`)}

  try { 
let res13 = await conn.groupAcceptInvite(code13)
  await delay(3 * 3000)
  await conn.sendMessage(res13, { text: text, mentions: (await conn.groupMetadata(`${res13}`)).participants.map(v => v.id) }, { quoted: fakegif })
  await conn.groupLeave(res13)
    } catch (e) {
await m.reply(`Enlace anulado o puto me eliminado de este grupo ${res13} :v`)}
 try {
let res14 = await conn.groupAcceptInvite(code14)
  await delay(3 * 3000)
  await conn.sendMessage(res14, { text: text, mentions: (await conn.groupMetadata(`${res14}`)).participants.map(v => v.id) }, { quoted: fakegif })
  await conn.groupLeave(res14)
    } catch (e) {
await m.reply(`Enlace anulado o puto me eliminado de este grupo ${res14} :v`)}
try {
let res15 = await conn.groupAcceptInvite(code15)
  await delay(3 * 3000)
  await conn.sendMessage(res15, { text: text, mentions: (await conn.groupMetadata(`${res15}`)).participants.map(v => v.id) }, { quoted: fakegif })
  await conn.groupLeave(res15)
    } catch (e) {
}
  /*await conn.groupLeave(res2)
  await conn.groupLeave(res3)
  await conn.groupLeave(res4)
  await conn.groupLeave(res5)
  await conn.groupLeave(res6)
  await conn.groupLeave(res7)
  await conn.groupLeave(res8)
  await conn.groupLeave(res9)
  await conn.groupLeave(res10)
  await conn.groupLeave(res11)*/
  await m.reply(`*Listo :D*`)
} catch (e) {
await m.reply(`ERROR 404 :v`) 
}}
handler.help = ['enlace1']
handler.tags = ['owner']
handler.command = ['enlace1'] 

handler.owner = true

export default handler
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
