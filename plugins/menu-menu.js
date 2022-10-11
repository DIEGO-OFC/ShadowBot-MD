
/********************************************
*         DORRAT-BOT-MD BY DIEGO-OFC        *
/********************************************/
import moment from 'moment-timezone'
import fs, { promises } from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {
try {
let vn = './media/menu.mp3'
let pp = './galería/menudorrat3.jpg'
let img = await(await fetch('https://www.paidmembershipspro.com/wp-content/uploads/2017/07/PayPal-Express.png')).buffer()
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let {money} = global.db.data.users[m.sender]
let { exp, limit, level, role } = global.db.data.users[m.sender]
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
m.reply("╭──────────────────             │⏱️ 𝐂𝐀𝐑𝐆𝐀𝐍𝐃𝐎 𝐌𝐄𝐍𝐔... ╰──────────────────")
let str = `
*══〘 🔥⚡🔥⚡🔥⚡🔥〙═══╮*
*║ ▢ 𝐃𝐎𝐑𝐑𝐀𝐓-𝐁𝐎𝐓-𝐌𝐃*
*║ ▢* ${ucapan()}
*║≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋*
*║ ▢ ❤𝐇𝐎𝐋𝐀, ${taguser}❤*
*║≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋*
*║ ▢ 𝐂𝐑𝐄𝐀𝐃𝐎𝐑 𝐃𝐄𝐋 𝐁𝐎𝐓: 𝐃𝐈𝐄𝐆𝐎-𝐎𝐅𝐂* 
*║ ▢ 𝐍𝐔𝐌𝐄𝐑𝐎 𝐃𝐄𝐋 𝐂𝐑𝐄𝐀𝐃𝐎𝐑: wa.me/593959425714 (𝐍𝐎 𝐁𝐎𝐓)*
*║ ▢ 𝐍𝐔𝐌𝐄𝐑𝐎 𝐃𝐄𝐋 𝐁𝐎𝐓 𝐎𝐅𝐈𝐂𝐈𝐀𝐋: wa.me/573122695406 (𝐎𝐅𝐈𝐂𝐈𝐀𝐋 𝐃𝐄 𝐃𝐎𝐑𝐑𝐀𝐓)*
*║ ▢ 𝐕𝐄𝐑𝐒𝐈𝐎𝐍 » ${vs}*
*║ ▢ 𝐅𝐄𝐂𝐇𝐀 » ${week}, ${date}*
*║ ▢ 𝐓𝐈𝐄𝐌𝐏𝐎 𝐀𝐂𝐓𝐈𝐕𝐎 » ${uptime}*
*║ ▢ 𝐋𝐈𝐁𝐑𝐀𝐑𝐘 » 𝐁𝐀𝐈𝐋𝐄𝐘𝐒-𝐌𝐃*
*║ ▢ 𝐋𝐄𝐍𝐆𝐔𝐀𝐉𝐄 » 𝐄𝐒𝐏𝐀𝐍̃𝐎𝐋*
*║ ▢ 𝐔𝐒𝐔𝐀𝐑𝐈𝐎𝐒 » ${Object.keys(global.db.data.users).length}*
*╰══╡🔥⚡🔥⚡🔥⚡🔥╞══╯*

*═〔* info *〕⬣═*
*║👤 NOMBRE: ${taguser}
*║🧰 EXPERIENCIA ➟ ${exp}*
*║⚓ RANGO ➟* ${role}
*║💎 DIAMANTES ➟ ${limit}*
*║🪙 DORRAT-COINS ➟ ${money}*
*╰══*═════════════ *✧*

*╭━〔 INFORMACIÓN DE DORR∆T-BOT 〕━⬣*
 ┃ 🔰 _${usedPrefix}grupos_
 ┃ 🔰 _${usedPrefix}estado_
 ┃ 🔰 _${usedPrefix}instalarbot_
 ┃ 🔰 _${usedPrefix}infobot_
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
┣ ➱🛡️ _*minimo 30 miembros*_
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
├➢🌠${usedPrefix}suitpvp <@tag>
├➢🎡${usedPrefix}mates <noob / easy / medium / hard / extreme /impossible /impossible2>
├➢🎪${usedPrefix}ppt <papel / tijera /piedra
├➢🎾${usedPrefix}prostituto <nombre / @tag
├➢⛳${usedPrefix}prostituta <nombre / @tag
├➢⚓${usedPrefix}hetero <nombre / @tag
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
├➢🔰${usedPrefix}formarpareja5 
├➢🛡️${usedPrefix}amistad
├➢🪄${usedPrefix}verdad
├➢🎾${usedPrefix}reto
└────ׂ─ׂ─ׂ─ׂ───

┌「🕋𝐏𝐑𝐄𝐍𝐃𝐄𝐑 𝐘 𝐀𝐏𝐀𝐆𝐀𝐑 」
├➢✅${usedPrefix}enable *welcome*_
├➢❎${usedPrefix}disable *welcome*_
├➢✅${usedPrefix}enable *modohorny*_
├➢❎${usedPrefix}disable *_modohorny*
├➢✅${usedPrefix}enable *antilink*_
├➢❎${usedPrefix}disable *antilink*_
├➢✅${usedPrefix}enable *antilink2*_
├➢❎${usedPrefix}disable *antilink2*_
├➢✅${usedPrefix}enable *detect*_
├➢❎${usedPrefix}disable *detect*_
├➢✅${usedPrefix}enable *audios*_
├➢❎${usedPrefix}disable *audios*_
├➢✅${usedPrefix}enable *autosticker*_
├➢❎${usedPrefix}disable *autosticker*_
├➢✅${usedPrefix}enable *antiviewonce*_ 
├➢✅${usedPrefix}enable *antitraba*_
├➢❎${usedPrefix}disable *antitraba*_
├➢✅${usedPrefix}enable *antiArab*_
├➢❎${usedPrefix}disable *antiArab*_
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
├➢💎${usedPrefix}encuesta *<texto>
├➢💎${usedPrefix}votar *<texto>*
├➢💎${usedPrefix}listadv
├➢💎${usedPrefix}deladvertencia <@tag
├➢💎${usedPrefix}advertencia <@tag
├➢💎${usedPrefix}add <numero
├➢💎${usedPrefix}kick <@tag
├➢💎${usedPrefix}grupo <abrir / cerrar
├➢💎${usedPrefix}promote <@tag
├➢💎${usedPrefix}demote <@tag
├➢💎${usedPrefix}banchat
├➢💎${usedPrefix}unbanchat
├➢💎admins *<texto>_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
├➢💎${usedPrefix}demote <@tag
├➢💎${usedPrefix}infogroup
├➢💎${usedPrefix}link
├➢💎${usedPrefix}setname <texto
├➢💎${usedPrefix}setdesc <texto
├➢💎${usedPrefix}invocar <texto
├➢💎${usedPrefix}setwelcome <texto
├➢💎${usedPrefix}setbye <texto
├➢💎${usedPrefix}hidetag <texto
├➢💎${usedPrefix}simular <welcome / bye / promote / demote>
├➢💎${usedPrefix}destraba 
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
├➢📌${usedPrefix}logos <efecto <texto
├➢🧧${usedPrefix}simpcard <@tag
├➢🧨${usedPrefix}hornycard <@tag
├➢📌${usedPrefix}lolice <@tag
├➢🧧${usedPrefix}ytcomment <texto
├➢🧨${usedPrefix}itssostupid
├➢📌${usedPrefix}pixelar
├➢🧨${usedPrefix}blur
└────ׂ─ׂ─ׂ─ׂ───


┌──「🌹𝐅𝐫𝐚𝐬𝐞𝐬 𝐲 𝐭𝐞𝐱𝐭𝐨𝐬」─
├➢🥀 _${usedPrefix}consejo_
├➢🥀 _${usedPrefix}fraseromantica_
├➢🥀 _${usedPrefix}historiaromantica_
└────ׂ─ׂ─ׂ─ׂ──

┌──「⛩️𝐀𝐍𝐈𝐌𝐄𝐒」─
├➢🎎${usedPrefix}cristianoronaldo
├➢🌃${usedPrefix}messi
├➢💒${usedPrefix}meme
├➢⛪${usedPrefix}itzy
├➢🏰${usedPrefix}blackpink
├➢🕌${usedPrefix}kpop <blackpink / exo / bts
├➢🎑${usedPrefix}lolivid
├➢⛩️${usedPrefix}loli
├➢🎎${usedPrefix}navidad
├➢🌃${usedPrefix}ppcouple
├➢💒${usedPrefix}neko
├➢⛪${usedPrefix}waifu
├➢🏰${usedPrefix}akira
├➢🕌${usedPrefix}akiyama
├➢🎑${usedPrefix}anna
├➢⛩️${usedPrefix}asuna
├➢🎎${usedPrefix}ayuzawa
├➢🌃${usedPrefix}boruto
├➢💒${usedPrefix}chiho
├➢⛪${usedPrefix}chitoge
├➢🏰${usedPrefix}deidara
├➢🕌${usedPrefix}erza
├➢🎑${usedPrefix}elaina
├➢⛩️${usedPrefix}eba
├➢🎎${usedPrefix}emilia
├➢🌃${usedPrefix}hestia
├➢💒${usedPrefix}hinata
├➢⛪${usedPrefix}inori
├➢🏰${usedPrefix}isuzu
├➢🕌${usedPrefix}itachi
├➢🎑${usedPrefix}itori
├➢⛩️${usedPrefix}kaga
├➢🎎${usedPrefix}kagura
├➢🌃${usedPrefix}kaori
├➢💒${usedPrefix}keneki
├➢⛪${usedPrefix}kotori
├➢🏰${usedPrefix}kurumi
├➢🕌${usedPrefix}madara
├➢🎑${usedPrefix}mikasa
├➢⛩️${usedPrefix}miku
├➢🎎${usedPrefix}minato
├➢🌃${usedPrefix}naruto
├➢💒${usedPrefix}nezuko
├➢⛪${usedPrefix}sagiri
├➢⛪${usedPrefix}sasuke
├➢🎑${usedPrefix}sakura
├➢🌃${usedPrefix}cosplay
└────ׂ─ׂ─ׂ─ׂ───

┌──「🔞𝐂𝐨𝐦𝐚𝐧𝐝𝐨𝐬 +𝟏𝟖」
├➢🔞 _${usedPrefix}pack_
├➢🔞 _${usedPrefix}pack2_
├➢🔞 _${usedPrefix}pack3_
├➢🔞 _${usedPrefix}videoxxx_
├➢🔞 _${usedPrefix}tiktokxxx_
├➢🔞 _${usedPrefix}tetas_
├➢🔞 _${usedPrefix}booty_
├➢🔞 _${usedPrefix}ecchi_
├➢🔞 _${usedPrefix}furro_
├➢🔞 _${usedPrefix}imagenlesbians_
├➢🔞 _${usedPrefix}panties_
├➢🔞 _${usedPrefix}pene_
├➢🔞 _${usedPrefix}porno_
├➢🔞 _${usedPrefix}porno2_
├➢🔞 _${usedPrefix}randomxxx_
├➢🔞 _${usedPrefix}pechos_
├➢🔞 _${usedPrefix}yaoi_
├➢🔞 _${usedPrefix}yaoi2_
├➢🔞 _${usedPrefix}yuri_
├➢🔞 _${usedPrefix}yuri2_
├➢🔞 _${usedPrefix}trapito_
├➢🔞 _${usedPrefix}hentai_
├➢🔞 _${usedPrefix}nsfwloli_
├➢🔞 _${usedPrefix}nsfworgy_
├➢🔞 _${usedPrefix}nsfwfoot_
├➢🔞 _${usedPrefix}nsfwass_
├➢🔞 _${usedPrefix}nsfwbdsm_
├➢🔞 _${usedPrefix}nsfwcum_
├➢🔞 _${usedPrefix}nsfwero_
├➢🔞 _${usedPrefix}nsfwfemdom_
├➢🔞 _${usedPrefix}nsfwglass_
└────ׂ─ׂ─ׂ─ׂ──

┌──「𝐄𝐟𝐞𝐜𝐭𝐨𝐬 𝐝𝐞 𝐚𝐮𝐝𝐢𝐨𝐬」
├➢*- 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰 𝚄𝙽 𝙰𝚄𝙳𝙸𝙾 𝙾 𝙽𝙾𝚃𝙰 𝙳𝙴 𝚅𝙾𝚉*
├➢🎤 _${usedPrefix}bass_
├➢🎤 _${usedPrefix}blown_
├➢🎤 _${usedPrefix}deep_
├➢🎤 _${usedPrefix}earrape_
├➢🎤 _${usedPrefix}fast_
├➢🎤 _${usedPrefix}fat_
├➢🎤 _${usedPrefix}nightcore_
├➢🎤 _${usedPrefix}reverse_
├➢🎤 _${usedPrefix}robot_
├➢🎤 _${usedPrefix}slow_
├➢🎤 _${usedPrefix}smooth_
├➢🎤 _${usedPrefix}tupai_
└────ׂ─ׂ─ׂ─ׂ──

┌「◾𝐂𝐡𝐚𝐭 𝐚𝐧𝐨𝐧𝐢𝐦𝐨」
├➢📳 _${usedPrefix}start_
├➢📳 _${usedPrefix}next_
├➢📳_${usedPrefix}leave_
└────ׂ─ׂ─ׂ─ׂ──

┌「🔍𝐁𝐮𝐬𝐜𝐚𝐫」
├➢🔍 _${usedPrefix}covid <*país*>
├➢🔍 _${usedPrefix}playstore <*texto*>
├➢🔍 _${usedPrefix}stickersearch *<texto>*_
├➢🔍 _${usedPrefix}xnxxsearch *<texto>*_
├➢🔍 _${usedPrefix}animeinfo *<texto>*_
├➢🔍 _${usedPrefix}google *<texto>*_
├➢🔍 _${usedPrefix}letra *<texto>*_
├➢🔍 _${usedPrefix}wikipedia *<texto>*_
├➢🔍 _${usedPrefix}ytsearch *<texto>*_
├➢🔍 _${usedPrefix}apkdone *<texto>*_
├➢🔍 _${usedPrefix}apkgoogle *<texto>*_
├➢🔍 _${usedPrefix}apkmody *<texto>*_
├➢🔍 _${usedPrefix}apkshub *<texto>*_
├➢🔍 _${usedPrefix}happymod *<texto>*_
├➢🔍 _${usedPrefix}hostapk *<texto>*_
├➢🔍 _${usedPrefix}revdl *<texto>*_
├➢🔍 _${usedPrefix}toraccino *<texto>*_
├➢🔍 _${usedPrefix}uapkpro *<texto>*_
└────ׂ─ׂ─ׂ─ׂ──

┌「🎵𝐀𝐔𝐃𝐈𝐎𝐒」
├➢✅_𝙴𝚂𝙲𝚁𝙸𝙱𝙴 𝙻𝙰𝚂 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴𝚂 𝙿𝙰𝙻𝙰𝙱𝚁𝙰𝚂 𝙾 𝙵𝚁𝙰𝚂𝙴𝚂 𝚂𝙸𝙽 𝙽𝙸𝙽𝙶𝚄𝙽 𝙿𝚁𝙴𝙵𝙸𝙹𝙾 (#, /, *, .)
├➢✅_(𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)_
├➢▶️ _Quien es tu sempai botsito 7w7_
├➢▶️ _Te diagnostico con gay_
├➢▶️ _A nadie le importa_
├➢▶️ _Fiesta del admin_
├➢▶️ _Fiesta del administrador_ 
├➢▶️ _Vivan los novios_
├➢▶️ _Feliz cumpleaños_
├➢▶️ _No digas mamadas Mariyein_
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
├➢🛠️ _${usedPrefix}horario_
├➢🛠️ _${usedPrefix}encuestas texto|texto_
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
├➢🌠 _${usedPrefix}sticker *<responder a imagen o video>*_
├➢🌠 _${usedPrefix}sticker *<enlace / link / url>*_
├➢🌠 _${usedPrefix}s *<responder a imagen o video>*_
├➢🌠 _${usedPrefix}s *<enlace / link / url>*_
├➢🌠 _${usedPrefix}sfull *<responder a imagen o video>*_
├➢🌠 _${usedPrefix}emojimix *<emoji 1>&<emoji 2>*_
├➢🌠 _${usedPrefix}scircle *<responder a imagen>*_
├➢🌠 _${usedPrefix}sremovebg *<responder a imagen>*_
├➢🌠 _${usedPrefix}semoji *<tipo> <emoji>*_
├➢🌠 _${usedPrefix}attp *<texto>*_
├➢🌠 _${usedPrefix}attp2 *<texto>*_
├➢🌠 _${usedPrefix}attp3 *<texto>*_
├➢🌠 _${usedPrefix}ttp *<texto>*_
├➢🌠 _${usedPrefix}ttp2 *<texto>*_
├➢🌠 _${usedPrefix}ttp3 *<texto>*_
├➢🌠 _${usedPrefix}ttp4 *<texto>*_
├➢🌠 _${usedPrefix}ttp5 *<texto>*_
├➢🌠 _${usedPrefix}pat *<@tag>*_
├➢🌠 _${usedPrefix}slap *<@tag>*_
├➢🌠 _${usedPrefix}kiss *<@tag>*_
├➢🌠 _${usedPrefix}dado_
├➢🌠 _${usedPrefix}wm *<packname> <author>*_
├➢🌠 _${usedPrefix}stickermarker *<efecto> <responder a imagen>*_
├➢🌠 _${usedPrefix}stickerfilter *<efecto> <responder a imagen>*_ 
└────ׂ─ׂ─ׂ─ׂ───

┌──「💎𝐎𝐖𝐍𝐄𝐑 𝐁𝐎𝐓」─
├➢👑 > *<funcion>*
├➢👑 => *<funcion>*
├➢👑 $ *<funcion>*
├➢👑 _${usedPrefix}backup_
├➢👑 _${usedPrefix}cajafuerte_
├➢👑 _${usedPrefix}blocklist_
├➢👑 _${usedPrefix}block *<@tag>*
├➢👑 _${usedPrefix}unblock *<@tag>*
├➢👑 _${usedPrefix}enable *restrict*_
├➢👑 _${usedPrefix}disable *restrict*_
├➢👑 _${usedPrefix}enable *autoread*_
├➢👑 _${usedPrefix}disable *autoread*_
├➢👑 _${usedPrefix}enable *public*_
├➢👑 _${usedPrefix}disable *public*_
├➢👑 _${usedPrefix}enable *pconly*_
├➢👑 _${usedPrefix}disable *pconly*_
├➢👑 _${usedPrefix}enable *gconly*_
├➢👑 _${usedPrefix}disable *gconly*_
├➢👑 _${usedPrefix}enable *anticall*_
├➢👑 _${usedPrefix}disable *anticall*_
├➢👑 _${usedPrefix}enable *antiprivado*_
├➢👑 _${usedPrefix}disable *antiprivado*_
├➢👑 _${usedPrefix}msg *<texto>*_
├➢👑 _${usedPrefix}banchat_
├➢👑 _${usedPrefix}unbanchat_
├➢👑 _${usedPrefix}banuser *<@tag>*_
├➢👑 _${usedPrefix}unbanuser *<@tag>*_
├➢👑 _${usedPrefix}banuser *<@tag>*_
├➢👑 _${usedPrefix}bc *<texto>*_
├➢👑 _${usedPrefix}bcchats *<texto>*_
├➢👑 _${usedPrefix}bcgc *<texto>*_
├➢👑 _${usedPrefix}cleartpm_
├➢👑 _${usedPrefix}restart_
├➢👑 _${usedPrefix}update_
├➢👑 _${usedPrefix}traba1_ 
├➢👑 _${usedPrefix}addprem *<@tag>*_
├➢👑 _${usedPrefix}delprem *<@tag>*_
├➢👑 _${usedPrefix}listprem_
└────ׂ─ׂ─ׂ─ׂ───
 ━━━━━━━━━━━━━━━━━━━━━━━━━
┃𝐃𝐎𝐑𝐑𝐀𝐓-𝐁𝐎𝐓-𝐌𝐃 𝐁𝐘 𝐃𝐈𝐄𝐆𝐎-𝐎𝐅𝐂┃
 ━━━━━━━━━━━━━━━━━━━━━━━━━
`.trim()
let buttons = [
{ buttonId: '#grupos', buttonText: { displayText: '🔰 𝙶𝚁𝚄𝙿𝙾𝚂 🔰' }, type: 1 },
{ buttonId: '#owner', buttonText: { displayText: '🤴 𝙾𝚆𝙽𝙴𝚁 🤴' }, type: 1 }]
//{ buttonId: '#infobot', buttonText: { displayText: '📦 𝙸𝙽𝙵𝙾𝙱𝙾𝚃 📦' }, type: 1 }]
let buttonMessage = {
image: imagen4,
caption: str.trim(),
mentions: [m.sender],
footer: `*${wm}*`,
buttons: buttons,
headerType: 4,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: true,
mediaType: 'VIDEO',
mediaUrl: null,
title:'👑 𝐃𝐎𝐑𝐑𝐀𝐓-𝐁𝐎𝐓-𝐌𝐃 👑',
body: null,
thumbnail: null,
sourceUrl: `https://chat.whatsapp.com/LlAbJM659dOBVJnxOIMl9h`
}}}
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
} catch {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m)
}}
handler.command = /^(menucompleto|menu completo|allmenu)$/i
handler.exp = 50
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}

function ucapan() {

  const time = moment.tz('America/Los_Angeles').format('HH')  //America/Los_Angeles  Asia/Jakarta   America/Toronto

  let res = "🌉Buenas madrugadas"

  if (time >= 4) {

    res = "🌇Buenos Días"

  }

  if (time >= 11) {

    res = "🏙️Buenas Tardes"

  }

  if (time >= 15) {

    res = "🌆Buenas tardes"

  }

  if (time >= 17) {

    res = "🌃Buenas noches"

  }

  return res

}
