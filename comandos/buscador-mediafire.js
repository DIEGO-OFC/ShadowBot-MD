//creado por https://github.com/DIEGO-OFC

let handler = async (m, { text, conn, args, command, usedPrefix }) => {

//Juegos 🎮
//Si se cae un enlace cambialo.
let fnaf1 = `https://www.mediafire.com/file/5y7jq06rb8i3vl1/Fnaf_1.apk/file`
let fnaf2 = `https://www.mediafire.com/file/io8lmvb8z0gsrqx/Fnaf_2.apk/file`
let fnaf3 = `https://www.mediafire.com/file/t3xlmeoqhb63vub/Fnaf3.apk/file`
let fnaf4 = `https://www.mediafire.com/file/aefg3xafqctvmrq/Fnaf4.apk/file`
let fnaf5 = `https://www.mediafire.com/file/2a6nfr3bly2voy6/FNAF_Sister_Location_por_Tomatito22.apk/file`
let fnaf6 = `https://www.mediafire.com/file/2bk1h9bnhgouen7/Fnaf_6.apk/file`
let ucn = `https://www.mediafire.com/file/jb17ec412gv91q6/UCN_v1.11.apk/file`
//apps 📂
//Si se cae un enlace cambialo.
let PicsArt = `https://www.mediafire.com/file/iwylgkdw4o22k45/v20.4.2.apk/file`
let VivaCutPro = `https://www.mediafire.com/file/l2xro1fapo8v68h/v2.16.0.apk/file`
let InShotPro = `https://www.mediafire.com/file/i30zxa81luipmec/v1.852.1371.apk/file`
let SnapTube = `https://www.mediafire.com/file/gi94c68i9bva77f/v6.11.0.6116410.apk/file`
let InstaPro = `https://www.mediafire.com/file/mb5r6pjmlu2qgg7/v9.30.apk/file`
let SpotifyPremium = `https://www.mediafire.com/file/nbhlxz1zeej04wo/V8.7.30.1221.apk/file`
let TiktokPremium = `https://www.mediafire.com/file/e3vbd4qkp8rullq/TikTok_v26.0.3_MOD.apk/file`
let jgp = `JUEGOS 🎮`
let app = `APPS PREMIUM`
const sections = [{
title: comienzo + ' ' + jgp + ' ' + fin,
rows: [
{title: "📂 FNAF 1", description: "[⬇️] DESCARGAR FIVE NIGHTS AT FREDDY'S 1", rowId: `${usedPrefix}mediafire ${fnaf1}`},
{title: "📂 FNAF 2", description: "[⬇️] DESCARGAR FIVE NIGHTS AT FREDDY'S 2", rowId: `${usedPrefix}mediafire ${fnaf2}`},
{title: "📂 FNAF 3", description: "[⬇️] DESCARGAR FIVE NIGHTS AT FREDDY'S 3", rowId: `${usedPrefix}mediafire ${fnaf3}`},
{title: "📂 FNAF 4", description: "[⬇️] DESCARGAR FIVE NIGHTS AT FREDDY'S 4", rowId: `${usedPrefix}mediafire ${fnaf4}`},
{title: "📂 FNAF 5", description: "[⬇️] DESCARGAR FIVE NIGHTS AT FREDDY'S SISTER LOCATION", rowId: `${usedPrefix}mediafire ${fnaf5}`},
{title: "📂 FNAF 6", description: "[⬇️] DESCARGAR FIVE NIGHTS AT FREDDY'S 6", rowId: `${usedPrefix}mediafire ${fnaf6}`},
{title: "📂 FNAF UCN", description: "[⬇️] DESCARGAR FIVE NIGHTS AT FREDDY'S UCN", rowId: `${usedPrefix}mediafire ${ucn}`}
]}, {
title: comienzo + ' ' + app + ' ' + fin,
rows: [
{title: "📂 PicsArt Premium", description: "[⬇️] Descargar PicsArt Premium Photo editor", rowId: `${usedPrefix}mediafire ${PicsArt}`},
{title: "📂 VivaCut Premium", description: "[⬇️] Descargar VivaCutPro", rowId: `${usedPrefix}mediafire ${VivaCutPro}`},
{title: "📂 InShot Premium", description:  "[⬇️] Descargar inShotPro", rowId: `${usedPrefix}mediafire ${InShotPro}`},
{title: "📂 SnapTube Premium", description: "[⬇️] Descargar SnapTube Premium", rowId: `${usedPrefix}mediafire ${SnapTube}`},
{title: "📂 InstaPro Premium", description: "[⬇️] Descargar InstaPro", rowId: `${usedPrefix}mediafire ${InstaPro}`},
{title: "📂 Spotify Premium", description: "[⬇️] Descargar SpotifyPremium", rowId: `${usedPrefix}mediafire ${SpotifyPremium}`},
{title: "📂 Tiktok Premium", description: "[⬇️] Descargar TiktokPremium(Sin marca de agua)", rowId: `${usedPrefix}mediafire ${TiktokPremium}`}
]}]
const listMessage = {
text: wm3,
footer: `DESCARGAS MEDIAFIRE`,
title: null,
buttonText: "seleciona lo que quieres descargar", 
sections }

await conn.sendMessage(m.chat, listMessage, {quoted: m})	
}

handler.command = /^mediafiresearch$/i
export default handler
