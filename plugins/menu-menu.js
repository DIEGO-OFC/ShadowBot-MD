import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {
try {
let vn = './media/menu.mp3'
let pp = './Menu2.jpg'
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
 
let str = `
*╭━━━〔 †𝐃⃟𝕺𝐑⃯𝐑𝐇⃯𝚵𝐓᪣𝕭⃯𝚹⃯𝐓⃤† 〕━━━⬣*
*┃ ▢ 𝙑𝙀𝙍𝙎𝙄𝙊𝙉 » ${vs}*
*┃ ▢ 𝙁𝙀𝘾𝙃𝘼 » ${week}, ${date}*
*┃ ▢ 𝙏𝙄𝙀𝙈𝙋𝙊 𝘼𝘾𝙏𝙄𝙑𝙊 » ${uptime}*
*┃ ▢ 𝙐𝙎𝙐𝘼𝙍𝙄𝙊𝙎 » ${Object.keys(global.db.data.users).length}*
*╰━━━━━━━━━━━━━━━━━━━━━━━⬣

*╭━〔*${name}*〕━━⬣*
*┆🧰 EXPERIENCIA ➟ ${exp}*
*┆💎 DIAMANTES ➟ ${limit}*
*┆⚓ RANGO ➟* ${role}*
*┆🎟️ PREMIUM ➟* ${global.prem ? '✅' : '❌'}
*╰*┅┅┅┅┅┅┅┅┅┅┅┅┅ *✧*

*╭━〔 INFORMACIÓN DE DORR∆T-BOT 〕━⬣*
 ┃ 🔰 _${usedPrefix}grupos_
 ┃ 🔰 _${usedPrefix}estado_
 ┃ 🔰 _${usedPrefix}infobot_
 ┃ 🔰 _${usedPrefix}donar_
 ┃ 🔰 _${usedPrefix}grouplist_
 ┃ 🔰 _${usedPrefix}owner_
 ┃ 🔰 _${usedPrefix}script_
 ┃ 🔰 _Bot_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
 *╰━━━━━━━━━━━━⬣*

*╭━〔 REPORTAR COMANDO 〕━⬣*
┃ *Reporta con este comando de haber*
┃ *Fallas para poder Solucionar!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 💌 _${usedPrefix}reporte *texto*_
┃ 💌 _${usedPrefix}report *texto*_
*╰━━━━━━━━━━━━⬣*

┏━━━━━━━━━━━━━┓
┃ *<UNE UN BOT A TU GRUPO/>*
║≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋
┣ ➱🤖 _${usedPrefix}join *link del grupo*_ 
┣ ➱🛡️ minimo 30 miembros.
┗━━━━━━━━━━━━━┛

┌──「🌱𝐑𝐏𝐆」─
├➢🪴${usedPrefix}aventura
├➢🪴${usedPrefix}balance
├➢💐${usedPrefix}claim
├➢🌱${usedPrefix}top
├➢🥀${usedPrefix}levelup
├➢🍃${usedPrefix}myns
├➢🪴${usedPrefix}perfil
├➢💐${usedPrefix}work
├➢🌱${usedPrefix}minar
├➢🥀${usedPrefix}buy
├➢🍃${usedPrefix}buyall
├➢🪴${usedPrefix}transfer <tipo> <cantidad> <@tag
├➢🌱${usedPrefix}verificar
├➢🌱${usedPrefix}unreg <numero de serie>
└────ׂ─ׂ─ׂ─ׂ───

┌──「🎮𝐆𝐀𝐌𝐄」─
├➢🎡${usedPrefix}mates <noob / easy / medium / hard / extreme /impossible /impossible2>
├➢🎪${usedPrefix}ppt <papel / tijera /piedra
├➢🎾${usedPrefix}prostituto <nombre / @tag
├➢⛳${usedPrefix}prostituta <nombre / @tag
├➢🥌${usedPrefix}gay2 <nombre / @tag
├➢🪀${usedPrefix}lesbiana <nombre / @tag
├➢🔫${usedPrefix}pajero <nombre / @tag
├➢🕹️${usedPrefix}pajera <nombre / @tag
├➢🧩${usedPrefix}puto <nombre / @tag
├➢🎮${usedPrefix}puta <nombre / @tag
├➢🪁${usedPrefix}manco <nombre / @tag
├➢🪃${usedPrefix}manca <nombre / @tag
├➢🎱${usedPrefix}rata <nombre / @tag
├➢🎯${usedPrefix}love <nombre / @tag
├➢🏹${usedPrefix}doxear <nombre / @tag
├➢🥏${usedPrefix}pregunta <texto
├➢🛹${usedPrefix}slot <apuesta
├➢🎳${usedPrefix}simi <texto
├➢♟️${usedPrefix}topgays
├➢🏓${usedPrefix}topotakus
├➢🎲${usedPrefix}formarpareja
├➢🪄${usedPrefix}verdad
├➢🎾${usedPrefix}reto
└────ׂ─ׂ─ׂ─ׂ───

┌「🕋𝐏𝐑𝐄𝐍𝐃𝐄𝐑 𝐘 𝐀𝐏𝐀𝐆𝐀𝐑 」
├➢🕋${usedPrefix}enable *welcome*_
├➢📴${usedPrefix}disable *welcome*_
├➢⚠️${usedPrefix}enable *modohorny*_
├➢❎${usedPrefix}disable *_modohorny*
├➢🏧${usedPrefix}enable *antilink*_
├➢🕋${usedPrefix}disable *antilink*_
├➢📴${usedPrefix}enable *antilink2*_
├➢⚠️${usedPrefix}disable *antilink2*_
├➢❎${usedPrefix}enable *detect*_
├➢🏧${usedPrefix}disable *detect*_
├➢🕋${usedPrefix}enable *audios*_
├➢📴${usedPrefix}disable *audios*_
├➢⚠️${usedPrefix}enable *autosticker*_
├➢❎${usedPrefix}disable *autosticker*_
├➢🛡️${usedPrefix}enable *antiviewonce*_ 
└────ׂ─ׂ─ׂ─ׂ───

┌─「💻𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑」
├➢📑${usedPrefix}facebook <enlace / link / url
├➢🗃️${usedPrefix}instagram <enlace / link / url
├➢🗂️${usedPrefix}mediafire <enlace / link / url
├➢📰${usedPrefix}instagram <enlace / link / url
├➢📇${usedPrefix}gitclone <enlace / link / url
├➢📑${usedPrefix}tiktok <enlace / link / url
├➢🗃️${usedPrefix}ytmp3 <enlace / link / url
├➢🗂️${usedPrefix}ytmp4 <enlace / link / url
├➢📰${usedPrefix}play.1 <texto / enlace / link / url
├➢📇${usedPrefix}play.2 <texto / enlace / link / url
├➢📑${usedPrefix}play <texto
├➢🗃️${usedPrefix}spotify <texto
├➢🗂️${usedPrefix}imagen <texto
├➢📰${usedPrefix}pinteret <texto
├➢📇${usedPrefix}wallpaper <texto
├➢📑${usedPrefix}wallpaper2 <texto
├➢🗃️${usedPrefix}pptiktok <nombre de usuario
├➢🗂️${usedPrefix}igstalk <nombre de usuario
├➢📰${usedPrefix}tiktokstalk <nombre de usuario
└────ׂ─ׂ─ׂ─ׂ──

┌──「🏢𝐆𝐑𝐎𝐔𝐏」─
├➢💎${usedPrefix}add <numero
├➢📎${usedPrefix}kick <@tag
├➢🖇️${usedPrefix}grupo <abrir / cerrar
├➢🗄️${usedPrefix}promote <@tag
├➢⛓️${usedPrefix}demote <@tag
├➢💎${usedPrefix}banchat
├➢📎${usedPrefix}unbanchat
├➢🖇️admins *<texto>_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
├➢🗄️${usedPrefix}demote <@tag
├➢⛓️${usedPrefix}infogroup
├➢💎${usedPrefix}link
├➢📎${usedPrefix}setname <texto
├➢🖇️${usedPrefix}setdesc <texto
├➢🗄️${usedPrefix}invocar <texto
├➢⛓️${usedPrefix}setwelcome <texto
├➢💎${usedPrefix}setbye <texto
├➢📎${usedPrefix}hidetag <texto
├➢🖇️${usedPrefix}simular <welcome / bye / promote / demote>
└────ׂ─ׂ─ׂ─ׂ───

┌──「🛡️𝐆𝐈𝐓𝐇𝐔𝐁」─
├➢/instalarbot
└────ׂ─ׂ─ׂ─ׂ───

┌──「🎑𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐈𝐃𝐎𝐑𝐄𝐒」
├➢🧧 _${usedPrefix}togifaud *<responde a un video>*_
├➢🧧 _${usedPrefix}toimg *<responde a un sticker>*_
├➢🧧 _${usedPrefix}tomp3 *<responde a un video / nota de voz>*_
├➢🧧 _${usedPrefix}toptt *<responde a un video / audio>*_
├➢🧧 _${usedPrefix}tovideo *<responde a un sticker>*_
├➢🧧 _${usedPrefix}tourl *<responde a un video / imagen / audio>*_
├➢🧧 _${usedPrefix}tts es *<texto>*_
└────ׂ─ׂ─ׂ─ׂ───

┌──「📑𝐋𝐎𝐆𝐎𝐒」─
├❏📌${usedPrefix}logos <efecto <texto
├❏🧧${usedPrefix}simpcard <@tag
├❏🧨${usedPrefix}hornycard <@tag
├❏📌${usedPrefix}lolice <@tag
├❏🧧${usedPrefix}ytcomment <texto
├❏🧨${usedPrefix}itssostupid
├❏📌${usedPrefix}pixelar
├❏🧨${usedPrefix}blur
└────ׂ─ׂ─ׂ─ׂ───

*<𝔽ℝ𝔸𝕊𝔼𝕊 𝕐 𝕋𝔼𝕏𝕋𝕆𝕊/>*

° ඬ⃟🥀 _${usedPrefix}consejo_
° ඬ⃟🥀 _${usedPrefix}fraseromantica_
° ඬ⃟🥀 _${usedPrefix}historiaromantica_

*<ℝ𝔸ℕ𝔻𝕆𝕄/>*

° ඬ⃟👾 _${usedPrefix}cristianoronaldo_
° ඬ⃟👾 _${usedPrefix}messi_
° ඬ⃟👾 _${usedPrefix}meme_
° ඬ⃟👾 _${usedPrefix}itzy_
° ඬ⃟👾 _${usedPrefix}blackpink_
° ඬ⃟👾 _${usedPrefix}kpop *<blackpink / exo / bts>*_
° ඬ⃟👾 _${usedPrefix}lolivid_
° ඬ⃟👾 _${usedPrefix}loli_
° ඬ⃟👾 _${usedPrefix}navidad_
° ඬ⃟👾 _${usedPrefix}ppcouple_
° ඬ⃟👾 _${usedPrefix}wpmontaña_
° ඬ⃟👾 _${usedPrefix}pubg_
° ඬ⃟👾 _${usedPrefix}wpgaming_
° ඬ⃟👾 _${usedPrefix}wpaesthetic_
° ඬ⃟👾 _${usedPrefix}wpaesthetic2_
° ඬ⃟👾 _${usedPrefix}wprandom_
° ඬ⃟👾 _${usedPrefix}wallhp_
° ඬ⃟👾 _${usedPrefix}wpvehiculo_
° ඬ⃟👾 _${usedPrefix}wpmoto_
° ඬ⃟👾 _${usedPrefix}coffee_
° ඬ⃟👾 _${usedPrefix}pentol_
° ඬ⃟👾 _${usedPrefix}caricatura_
° ඬ⃟👾 _${usedPrefix}ciberespacio_
° ඬ⃟👾 _${usedPrefix}technology_
° ඬ⃟👾 _${usedPrefix}doraemon_
° ඬ⃟👾 _${usedPrefix}hacker_
° ඬ⃟👾 _${usedPrefix}planeta_
° ඬ⃟👾 _${usedPrefix}randomprofile_
° ඬ⃟👾 _${usedPrefix}neko_
° ඬ⃟👾 _${usedPrefix}waifu_
° ඬ⃟👾 _${usedPrefix}akira_
° ඬ⃟👾 _${usedPrefix}akiyama_
° ඬ⃟👾 _${usedPrefix}anna_
° ඬ⃟👾 _${usedPrefix}asuna_
° ඬ⃟👾 _${usedPrefix}ayuzawa_
° ඬ⃟👾 _${usedPrefix}boruto_
° ඬ⃟👾 _${usedPrefix}chiho_
° ඬ⃟👾 _${usedPrefix}chitoge_
° ඬ⃟👾 _${usedPrefix}deidara_
° ඬ⃟👾 _${usedPrefix}erza_
° ඬ⃟👾 _${usedPrefix}elaina_
° ඬ⃟👾 _${usedPrefix}eba_
° ඬ⃟👾 _${usedPrefix}emilia_
° ඬ⃟👾 _${usedPrefix}hestia_
° ඬ⃟👾 _${usedPrefix}hinata_
° ඬ⃟👾 _${usedPrefix}inori_
° ඬ⃟👾 _${usedPrefix}isuzu_
° ඬ⃟👾 _${usedPrefix}itachi_
° ඬ⃟👾 _${usedPrefix}itori_
° ඬ⃟👾 _${usedPrefix}kaga_
° ඬ⃟👾 _${usedPrefix}kagura_
° ඬ⃟👾 _${usedPrefix}kaori_
° ඬ⃟👾 _${usedPrefix}keneki_
° ඬ⃟👾 _${usedPrefix}kotori_
° ඬ⃟👾 _${usedPrefix}kurumi_
° ඬ⃟👾 _${usedPrefix}madara_
° ඬ⃟👾 _${usedPrefix}mikasa_
° ඬ⃟👾 _${usedPrefix}miku_
° ඬ⃟👾 _${usedPrefix}minato_
° ඬ⃟👾 _${usedPrefix}naruto_
° ඬ⃟👾 _${usedPrefix}nezuko_
° ඬ⃟👾 _${usedPrefix}sagiri_
° ඬ⃟👾 _${usedPrefix}sasuke_
° ඬ⃟👾 _${usedPrefix}sakura_
° ඬ⃟👾 _${usedPrefix}cosplay_

*<ℂ𝕆𝕄𝔸ℕ𝔻𝕆𝕊 +𝟙𝟠/>*

° ඬ⃟🔞 _${usedPrefix}pack_
° ඬ⃟🔞 _${usedPrefix}pack2_
° ඬ⃟🔞 _${usedPrefix}pack3_
° ඬ⃟🔞 _${usedPrefix}videoxxx_
° ඬ⃟🔞 _${usedPrefix}tiktokxxx_
° ඬ⃟🔞 _${usedPrefix}tetas_
° ඬ⃟🔞 _${usedPrefix}booty_
° ඬ⃟🔞 _${usedPrefix}ecchi_
° ඬ⃟🔞 _${usedPrefix}furro_
° ඬ⃟🔞 _${usedPrefix}imagenlesbians_
° ඬ⃟🔞 _${usedPrefix}panties_
° ඬ⃟🔞 _${usedPrefix}pene_
° ඬ⃟🔞 _${usedPrefix}porno_
° ඬ⃟🔞 _${usedPrefix}porno2_
° ඬ⃟🔞 _${usedPrefix}randomxxx_
° ඬ⃟🔞 _${usedPrefix}pechos_
° ඬ⃟🔞 _${usedPrefix}yaoi_
° ඬ⃟🔞 _${usedPrefix}yaoi2_
° ඬ⃟🔞 _${usedPrefix}yuri_
° ඬ⃟🔞 _${usedPrefix}yuri2_
° ඬ⃟🔞 _${usedPrefix}trapito_
° ඬ⃟🔞 _${usedPrefix}hentai_
° ඬ⃟🔞 _${usedPrefix}nsfwloli_
° ඬ⃟🔞 _${usedPrefix}nsfworgy_
° ඬ⃟🔞 _${usedPrefix}nsfwfoot_
° ඬ⃟🔞 _${usedPrefix}nsfwass_
° ඬ⃟🔞 _${usedPrefix}nsfwbdsm_
° ඬ⃟🔞 _${usedPrefix}nsfwcum_
° ඬ⃟🔞 _${usedPrefix}nsfwero_
° ඬ⃟🔞 _${usedPrefix}nsfwfemdom_
° ඬ⃟🔞 _${usedPrefix}nsfwglass_

*<𝔼𝔽𝔼ℂ𝕋𝕆𝕊 𝔻𝔼 𝔸𝕌𝔻𝕀𝕆𝕊/>*
*- 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰 𝚄𝙽 𝙰𝚄𝙳𝙸𝙾 𝙾 𝙽𝙾𝚃𝙰 𝙳𝙴 𝚅𝙾𝚉*

° ඬ⃟🎤 _${usedPrefix}bass_
° ඬ⃟🎤 _${usedPrefix}blown_
° ඬ⃟🎤 _${usedPrefix}deep_
° ඬ⃟🎤 _${usedPrefix}earrape_
° ඬ⃟🎤 _${usedPrefix}fast_
° ඬ⃟🎤 _${usedPrefix}fat_
° ඬ⃟🎤 _${usedPrefix}nightcore_
° ඬ⃟🎤 _${usedPrefix}reverse_
° ඬ⃟🎤 _${usedPrefix}robot_
° ඬ⃟🎤 _${usedPrefix}slow_
° ඬ⃟🎤 _${usedPrefix}smooth_
° ඬ⃟🎤 _${usedPrefix}tupai_

*<ℂℍ𝔸𝕋 𝔸ℕ𝕆ℕ𝕀𝕄𝕆/>*

° ඬ⃟📳 _${usedPrefix}start_
° ඬ⃟📳 _${usedPrefix}next_
° ඬ⃟📳 _${usedPrefix}leave_

*<𝔹𝕌𝕊ℂ𝔸𝔻𝕆ℝ𝔼𝕊/>*

° ඬ⃟🔍 _${usedPrefix}stickersearch *<texto>*_
° ඬ⃟🔍 _${usedPrefix}xnxxsearch *<texto>*_
° ඬ⃟🔍 _${usedPrefix}animeinfo *<texto>*_
° ඬ⃟🔍 _${usedPrefix}google *<texto>*_
° ඬ⃟🔍 _${usedPrefix}letra *<texto>*_
° ඬ⃟🔍 _${usedPrefix}wikipedia *<texto>*_
° ඬ⃟🔍 _${usedPrefix}ytsearch *<texto>*_
° ඬ⃟🔍 _${usedPrefix}apkdone *<texto>*_
° ඬ⃟🔍 _${usedPrefix}apkgoogle *<texto>*_
° ඬ⃟🔍 _${usedPrefix}apkmody *<texto>*_
° ඬ⃟🔍 _${usedPrefix}apkshub *<texto>*_
° ඬ⃟🔍 _${usedPrefix}happymod *<texto>*_
° ඬ⃟🔍 _${usedPrefix}hostapk *<texto>*_
° ඬ⃟🔍 _${usedPrefix}revdl *<texto>*_
° ඬ⃟🔍 _${usedPrefix}toraccino *<texto>*_
° ඬ⃟🔍 _${usedPrefix}uapkpro *<texto>*_

┌「🎵𝐀𝐔𝐃𝐈𝐎𝐒」
├➢✅*- 𝙴𝚂𝙲𝚁𝙸𝙱𝙴 𝙻𝙰𝚂 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴𝚂 𝙿𝙰𝙻𝙰𝙱𝚁𝙰𝚂 𝙾 𝙵𝚁𝙰𝚂𝙴𝚂 𝚂𝙸𝙽 𝙽𝙸𝙽𝙶𝚄𝙽 𝙿𝚁𝙴𝙵𝙸𝙹𝙾 (#, /, *, .)* 
├➢✅_(𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)_
├➢▶️ _Quien es tu sempai botsito 7w7_
├➢▶️ _Te diagnostico con gay_
├➢▶️ _A nadie le importa_
├➢▶️ _Fiesta del admin_
├➢▶️ _Fiesta del administrador_ 
├➢▶️ _Vivan los novios_
├➢▶️ _Feliz cumpleaños_
├➢▶️ _Noche de paz_
├➢▶️ _Buenos dias_
├➢▶️ _Cambiate a Movistar 
├➢▶️ _Bienvenido_
├➢▶️ _Calla fan de bts_
├➢▶️ _Las reglas del grupo_
├➢▶️ _Buenos tardes_
├➢▶️ _Buenos noches_
├➢▶️ _Audio hentai_
├➢▶️ _Chica lgante_
├➢▶️ _Feliz navidad_
├➢▶️ _Vete a la vrg_
├➢▶️ _Pasa pack Bot_
├➢▶️ _Atencion grupo_
├➢▶️_Marica quien_
├➢▶️ _Murio el grupo_
├➢▶️ _Oh me vengo_
├➢▶️ _tio que rico_
├➢▶️ _Viernes_
├➢▶️ _Baneado_
├➢▶️ _Sexo_
├➢▶️ _Hola_
├➢▶️ _Un pato_
├➢▶️_Nyanpasu_
├➢▶️ _Te amo_
├➢▶️ _Yamete_
├➢▶️ _Bañate_
├➢▶️ _Es puto_
├➢▶️ _La biblia_
├➢▶️ _Onichan_
├➢▶️ _Mierda de Bot_
├➢▶️ _Siuuu_
├➢▶️ _Epico_
├➢▶️ _Shitpost_
├➢▶️ _Rawr_
├➢▶️ _UwU_
├➢▶️ _:(
├➢▶️ _a_
└────ׂ─ׂ─ׂ─ׂ──


┌──「🛠️𝐇𝐄𝐑𝐑𝐀𝐌𝐈𝐄𝐍𝐓𝐀𝐒」─
├➢🛠️ _${usedPrefix}afk *<motivo>*_
├➢🛠️ _${usedPrefix}ocr *<responde a imagen>*_
├➢🛠️ _${usedPrefix}acortar *<enlace / link / url>*_
├➢🛠️ _${usedPrefix}calc *<operacion math>*_
├➢🛠️ _${usedPrefix}del *<respondre a mensaje del Bot>*_
├➢🛠️ _${usedPrefix}whatmusic *<responde a un audio>*_
├➢🛠️ _${usedPrefix}qrcode *<texto>*_
├➢🛠️ _${usedPrefix}readmore *<texto1| texto2>*_
├➢🛠️ _${usedPrefix}spamwa *<numero|texto|cantidad>*_
├➢🛠️ _${usedPrefix}styletext *<texto>*_
├➢🛠️ _${usedPrefix}traducir *<texto>*_
├➢🛠️ _${usedPrefix}nowa *<numero>*_
└────ׂ─ׂ─ׂ─ׂ───

┌──「🌌𝐒𝐓𝐈𝐂𝐊𝐄𝐑」─
├➢🪩${usedPrefix}emojimix <emoji 1>&<emoji 2
├➢🧩${usedPrefix}attp <texto
├➢🪁${usedPrefix}ttp <texto
├➢🃏${usedPrefix}pat <@tag
├➢🌃${usedPrefix}slap <@tag
├➢🏝️${usedPrefix}kiss <@tag
├➢🪅${usedPrefix}dado
├➢🧧${usedPrefix}wm <packname> <author
├➢🪩${usedPrefix}stickermarker <efecto> <responder a imagen
├➢🌃${usedPrefix}stickerfilter <efecto> <responder a imagen
└────ׂ─ׂ─ׂ─ׂ───

┌──「💎𝐎𝐖𝐍𝐄𝐑 𝐁𝐎𝐓」─
├➢👑${usedPrefix}cajafuerte
├➢💸${usedPrefix}enable restrict
├➢🧾${usedPrefix}disable restrict
├➢📍${usedPrefix}enable autoread
├➢🧑‍💻${usedPrefix}disable autoread
├➢📞${usedPrefix}enable *anticall*_
├➢📞${usedPrefix}disable *anticall*_
├➢🏯${usedPrefix}enable public
├➢🪩${usedPrefix}disable public
├➢👑${usedPrefix}enable pconly
├➢💸${usedPrefix}disable pconly
├➢🧾${usedPrefix}enable gconly
├➢📍${usedPrefix}disable gconly
├➢🧑‍💻${usedPrefix}banchat2
├➢🏯${usedPrefix}unbanchat2
├➢🪩${usedPrefix}banuser <@tag>
├➢👑${usedPrefix}unbanuser <@tag
├➢💸${usedPrefix}banuser <@tag
├➢🧾${usedPrefix}bc <texto
├➢📍${usedPrefix}bcchats <texto
├➢🧑‍💻${usedPrefix}bcgc <texto
├➢🏯${usedPrefix}cleartpm
├➢🪩${usedPrefix}restart
├➢👑${usedPrefix}update
├➢💸${usedPrefix}addprem <@tag>
├➢🧾${usedPrefix}delprem <@tag
├➢📍${usedPrefix}listprem_
├➢🧑‍💻${usedPrefix}añadirdiamantes <@tag> <cantidad
├➢🏯${usedPrefix}añadirxp <@tag> <cantidad
└────ׂ─ׂ─ׂ─ׂ───

`.trim()
conn.sendHydrated2(m.chat, str, wm, pp, 'https://github.com/DIEGO-OFC/DORRAT-BOT-MD', '📎𝙶𝙸𝚃𝙷𝚄𝙱', 'https://chat.whatsapp.com/CrsOmirjZNYKrvnQNT98Oo', '💎𝙶𝚁𝚄𝙿𝙾-𝙾𝙵𝙸𝙲𝙸𝙰𝙻💎', [
['🛡️ 𝗚𝗥𝗨𝗣𝗢𝗦 🛡️', '/grupos'],
['🤴 𝗢𝗪𝗡𝗘𝗥  🤴', '/owner'],
['🔰 𝗜𝗡𝗙𝗢𝗕𝗢𝗧 🔰', '/infobot']
], m,)
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, {
//type: 'audioMessage', 
//ptt: true})
} catch (e) {

conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m)

throw e

}}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(menucompleto|allmenu|allm\?)$/i
//handler.register = true
handler.exp = 50
handler.fail = null

export default handler



const more = String.fromCharCode(8206)

const readMore = more.repeat(4001)

function clockString(ms) {

let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)

let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60

let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60

return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}






















