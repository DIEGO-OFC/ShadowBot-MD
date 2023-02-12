
/********************************************
*         DORRAT-BOT-MD BY DIEGO-OFC        *
/********************************************/
import moment from 'moment-timezone'
import fs, { promises } from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command, args, usedPrefix: _p, __dirname, isOwner, text, isAdmin, isROwner }) => {
let vn = './media/menu.mp3'
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let {money} = global.db.data.users[m.sender]
let { exp, limit, dolares, level, role } = global.db.data.users[m.sender]
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
let imagenMEnu = ['https://i.imgur.com/1qOn8Vw.jpg', 'https://i.imgur.com/vExxeYz.jpg']
let db = './galeria/menudorrat3.jpg'
let pp = './galeria/dorratmini.mp4'
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let fsizedoc = '1'.repeat(10)
let adReply = { fileLength: fsizedoc, seconds: fsizedoc, contextInfo: { forwardingScore: fsizedoc, externalAdReply: { showAdAttribution: true, title: wm, body: '👋 ' + username, mediaUrl: yt, description: 'Hola', previewType: 'PHOTO', thumbnail: await(await fetch(imagenMEnu.getRandom())).buffer(), sourceUrl: menulinks.getRandom() }}}
m.reply(`[ 𝐂𝐀𝐑𝐆𝐀𝐍𝐃𝐎 𝐌𝐄𝐍𝐔... ]`)
//no me roben la decoracion, no tengo creatividad

let menuA = `
*╭━━❍𝐃𝐎𝐑𝐑𝐀𝐓-𝐁𝐎𝐓-𝐌𝐃❍━━╮*
*┃ ╭━━━━━━━━━━━━━━━━╮*
*┃ ┃ ╭┈────────────╮*
*┃ ┃ │❍  𝐌𝐄𝐍𝐔 ❍*
*┃ ┃ ╰┈────────────╯*
*┃ ╰━━━━━━━━━━━━━━━━╯*
*┣━━━▢ ❤𝐇𝐎𝐋𝐀, ${username}❤*•
*┃╭━━━━━━━━━━━━━━━━╾•*
*┃┃  ❍ ${ucapan()} ❍*
*┃┣━━━━━━━━━━━━━━━━╾•*
*┃┃ ⋄ CREADOR DEL BOT:  ${creatorname}*
*┃┃ ⋄ NUMERO DEL CREADOR: wa.me/593959425714 (𝐍𝐎 𝐁𝐎𝐓)*
*┃┃ ⋄ VERSION » ${vs}*
*┃┃ ⋄ FECHA » ${week}, ${date}*
*┃┃ ⋄ TIEMPO ACTIVO » ${uptime}*
*┃┃ ⋄ LIBRERIA » ${library}*
*┃┃ ⋄ LENGUAJE » 𝐄𝐒𝐏𝐀𝐍̃𝐎𝐋*
*┃┃ ⋄ USUARIOS » ${Object.keys(global.db.data.users).length}*
*┃╰━━━━━━━━━━━━━━━━╾•*
*╰━━━╼𝐃𝐎𝐑𝐑𝐀𝐓-𝐁𝐎𝐓-𝐌𝐃╾━━━╯*`.trim()

let menuB = `
*═〔 INFO DEL USUARIO 〕⬣═*
*║👤 NOMBRE: ${username}*
*║🧰 EXPERIENCIA ➟ ${exp}*
*║⚓ RANGO ➟* ${role}*
*║💎 DIAMANTES ➟ ${limit}*
*║💸 DOLARES ➟ ${dolares}*
*╰══*═════════════ *✧*

╔═════ INFO-BOT ═════╗ 
║ ❒  ︎_${usedPrefix}grupos_
║ ❒ _${usedPrefix}estado_
║ ❒ ︎ _${usedPrefix}terminos_
║ ❒︎ _${usedPrefix}instalarbot_
║ ❒ _${usedPrefix}infobot_
║ ❒ _${usedPrefix}grouplist_
║ ❒ _${usedPrefix}owner_
║ ❒ _${usedPrefix}script_
║ ❒︎ _Bot_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
╚════ ≪ •❈• ≫ ════╝

╔═════ REPORTAR ═════╗ 
║ ❒ _*Reporta con este comando de haber*_
║ ❒ _*Fallas para poder Solucionar!!*_
║════════════════════════
║︎ ❒ _${usedPrefix}reporte *texto*_
║ ❒ _${usedPrefix}report *texto*_
╚════ ≪ •❈• ≫ ════╝

╔═══ MINECRAFT SERVER  ═══╗ 
║══════════════
║ ❒ *IP: nodo5.boxmineworld.com*
║ ❒ *PUERTO: 4003*
║ ❒ *BEDROCK Y JAVA*
╚════ ≪ •❈• ≫ ════╝

╔═════════════╗ 
║ *<UNE UN BOT A TU GRUPO/>*
║══════════════════
║ ➱_${usedPrefix}join *link del grupo*_ 
║ ➱_*minimo 30 miembros*_
╚════ ≪ •❈• ≫ ════╝

╔═════ JADIBOT 🤖 ═════╗ 
║ ❒ ︎_${usedPrefix}serbot_
║ ❒ ︎_${usedPrefix}stop_
║ ❒ ︎_${usedPrefix}bots_
╚════ ≪ •❈• ≫ ════╝

╔═════ RPG ═════╗ 
║ ❒ ${usedPrefix}cazar
║ ❒ ${usedPrefix}aventura
║ ❒ ${usedPrefix}balance
║ ❒︎ ${usedPrefix}claim
║ ❒︎ ${usedPrefix}top
║ ❒︎ ${usedPrefix}heal
║ ❒ ${usedPrefix}cartera
║ ❒ ${usedPrefix}inventory 
║ ❒︎ ${usedPrefix}levelup
║ ❒︎ ${usedPrefix}myns
║ ❒ ${usedPrefix}perfil
║ ❒︎ ${usedPrefix}work
║ ❒ ${usedPrefix}rob <@tag
║ ❒︎ ${usedPrefix}minar
║ ❒︎ ${usedPrefix}buy
║ ❒ ${usedPrefix}minardiamantes 
║ ❒ ${usedPrefix}minardorracoins 
║ ❒︎ ${usedPrefix}transfer <tipo> <cantidad> <@tag
║ ❒ ${usedPrefix}verificar
║ ❒︎ ${usedPrefix}unreg <numero de serie>
╚════ ≪ •❈• ≫ ════╝

╔═════ GAMES ═════╗ 
║ ❒ ${usedPrefix}suitpvp <@tag>
║ ❒ ${usedPrefix}mates <noob / easy / medium / hard / extreme /impossible /impossible2>
║ ❒ ${usedPrefix}ppt <papel / tijera /piedra
║ ❒ ${usedPrefix}prostituto <nombre / @tag
║ ❒ ${usedPrefix}prostituta <nombre / @tag
║ ❒ ${usedPrefix}hetero <nombre / @tag
║ ❒ ${usedPrefix}gay2 <nombre / @tag
║ ❒ ${usedPrefix}lesbiana <nombre / @tag
║ ❒ ${usedPrefix}pajero <nombre / @tag
║ ❒ ${usedPrefix}pajera <nombre / @tag
║ ❒ ${usedPrefix}puto <nombre / @tag
║ ❒ ${usedPrefix}puta <nombre / @tag
║ ❒ ${usedPrefix}manco <nombre / @tag
║ ❒ ${usedPrefix}manca <nombre / @tag
║ ❒ ${usedPrefix}rata <nombre / @tag
║ ❒ ${usedPrefix}love <nombre / @tag
║ ❒ ${usedPrefix}doxear <nombre / @tag
║ ❒ ${usedPrefix}pregunta <texto
║ ❒ ${usedPrefix}slot <apuesta
║ ❒ ${usedPrefix}simi <texto
║ ❒ ${usedPrefix}topgays
║ ❒ ${usedPrefix}topotakus
║ ❒ ${usedPrefix}formarpareja
║ ❒ ${usedPrefix}formarpareja5 
║ ❒ ${usedPrefix}amistad
║ ❒ ${usedPrefix}verdad
║ ❒ ${usedPrefix}reto
╚════ ≪ •❈• ≫ ════╝

╔═════ ENABLE/DISABLE ═════╗ 
║ ❒ ${usedPrefix}enable *welcome*_
║ ❒ ${usedPrefix}disable *welcome*_
║ ❒ ${usedPrefix}enable *modohorny*_
║ ❒ ${usedPrefix}disable *_modohorny*
║ ❒ ${usedPrefix}enable *antilink*_
║ ❒ ${usedPrefix}disable *antilink*_
║ ❒ ${usedPrefix}enable *antilink2*_
║ ❒ ${usedPrefix}disable *antilink2*_
║ ❒ ${usedPrefix}enable *detect*_
║ ❒ ${usedPrefix}disable *detect*_
║ ❒ ${usedPrefix}enable *audios*_
║ ❒ ${usedPrefix}disable *audios*_
║ ❒ ${usedPrefix}enable *autosticker*_
║ ❒ ${usedPrefix}disable *autosticker*_
║ ❒ ${usedPrefix}enable *antiviewonce*_ 
║ ❒ ${usedPrefix}enable *antitraba*_
║ ❒ ${usedPrefix}disable *antitraba*_
║ ❒ ${usedPrefix}enable *antiArab*_
║ ❒ ${usedPrefix}disable *antiArab*_
║ ❒ ${usedPrefix}enable *simi*_
║ ❒ ${usedPrefix}disable *simi*_
║ ❒ ${usedPrefix}enable *modoadmin*_
║ ❒ ${usedPrefix}disable *modoadmin*_
║ ❒ ${usedPrefix}enable *temporal*_
║ ❒ ${usedPrefix}disable *temporal*_
╚════ ≪ •❈• ≫ ════╝

┌─「💻𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑」
├➢${usedPrefix}facebook <enlace / link / url
├➢${usedPrefix}instagram <enlace / link / url
├➢${usedPrefix}mediafire <enlace / link / url
├➢${usedPrefix}instagram <enlace / link / url
├➢${usedPrefix}gitclone <enlace / link / url
├➢${usedPrefix}tiktok <enlace / link / url
├➢${usedPrefix}ytmp3 <enlace / link / url
├➢${usedPrefix}ytmp4 <enlace / link / url
├➢${usedPrefix}play.1 <texto / enlace / link / url
├➢${usedPrefix}play.2 <texto / enlace / link / url
├➢${usedPrefix}play <texto
├➢${usedPrefix}spotify <texto
├➢${usedPrefix}imagen <texto
├➢${usedPrefix}pinteret <texto
├➢${usedPrefix}wallpaper <texto
├➢${usedPrefix}wallpaper2 <texto
├➢${usedPrefix}pptiktok <nombre de usuario
├➢${usedPrefix}igstalk <nombre de usuario
├➢${usedPrefix}tiktokstalk <nombre de usuario
└────ׂ─ׂ─ׂ─ׂ──

┌──「🏢𝐆𝐑𝐎𝐔𝐏」─
├➢${usedPrefix}add *<número>*
├➢${usedPrefix}kick *<@tag>*_
├➢${usedPrefix}kick2 *<@tag>*_
├➢${usedPrefix}listanum *<texto>*_
├➢${usedPrefix}kicknum *<texto>*_
├➢${usedPrefix}resetlink
├➢${usedPrefix}encuesta *<texto>
├➢${usedPrefix}votar *<texto>*
├➢${usedPrefix}listadv
├➢${usedPrefix}deladvertencia <@tag
├➢${usedPrefix}advertencia <@tag
├➢${usedPrefix}grouptime *<opcion> <tiempo>*_
├➢${usedPrefix}grupo <abrir / cerrar
├➢${usedPrefix}promote <@tag
├➢${usedPrefix}demote <@tag
├➢${usedPrefix}banchat
├➢${usedPrefix}unbanchat
├➢admins *<texto>_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
├➢${usedPrefix}demote <@tag
├➢${usedPrefix}infogroup
├➢${usedPrefix}link
├➢${usedPrefix}setname <texto
├➢${usedPrefix}setdesc <texto
├➢${usedPrefix}invocar <texto
├➢${usedPrefix}setwelcome <texto
├➢${usedPrefix}setbye <texto
├➢${usedPrefix}hidetag <texto
├➢${usedPrefix}simular <welcome / bye / promote / demote>
├➢${usedPrefix}destraba 
└────ׂ─ׂ─ׂ─ׂ───

┌──「🛡️𝐆𝐈𝐓𝐇𝐔𝐁」─
├➢/instalarbot
└────ׂ─ׂ─ׂ─ׂ───

┌──「🎑𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐈𝐃𝐎𝐑𝐄𝐒」
├➢_${usedPrefix}togifaud *<responde a un video>*_
├➢_${usedPrefix}toimg *<responde a un sticker>*_
├➢_${usedPrefix}tomp3 *<responde a un video / nota de voz>*_
├➢_${usedPrefix}toptt *<responde a un video / audio>*_
├➢_${usedPrefix}tovideo *<responde a un sticker>*_
├➢_${usedPrefix}tourl *<responde a un video / imagen / audio>*_
├➢_${usedPrefix}tts es *<texto>*_
└────ׂ─ׂ─ׂ─ׂ───

┌──「📑𝐋𝐎𝐆𝐎𝐒」─
├➢${usedPrefix}logos <efecto <texto
├➢${usedPrefix}simpcard <@tag
├➢${usedPrefix}hornycard <@tag
├➢${usedPrefix}lolice <@tag
├➢${usedPrefix}ytcomment <texto
├➢${usedPrefix}itssostupid
├➢${usedPrefix}pixelar
├➢${usedPrefix}blur
└────ׂ─ׂ─ׂ─ׂ───


┌──「🌹𝐅𝐫𝐚𝐬𝐞𝐬 𝐲 𝐭𝐞𝐱𝐭𝐨𝐬」─
├➢_${usedPrefix}piropo_
├➢_${usedPrefix}consejo_
├➢_${usedPrefix}fraseromantica_
├➢_${usedPrefix}historiaromantica_
└────ׂ─ׂ─ׂ─ׂ──

┌──「⛩️𝐀𝐍𝐈𝐌𝐄𝐒」─
├➢${usedPrefix}cristianoronaldo
├➢${usedPrefix}messi
├➢${usedPrefix}meme
├➢${usedPrefix}itzy
├➢${usedPrefix}blackpink
├➢${usedPrefix}kpop <blackpink / exo / bts
├➢${usedPrefix}lolivid
├➢${usedPrefix}loli
├➢${usedPrefix}navidad
├➢${usedPrefix}ppcouple
├➢${usedPrefix}neko
├➢${usedPrefix}waifu
├➢${usedPrefix}akira
├➢${usedPrefix}akiyama
├➢${usedPrefix}anna
├➢${usedPrefix}asuna
├➢${usedPrefix}ayuzawa
├➢${usedPrefix}boruto
├➢${usedPrefix}chiho
├➢${usedPrefix}chitoge
├➢${usedPrefix}deidara
├➢${usedPrefix}erza
├➢${usedPrefix}elaina
├➢${usedPrefix}eba
├➢${usedPrefix}emilia
├➢${usedPrefix}hestia
├➢${usedPrefix}hinata
├➢${usedPrefix}inori
├➢${usedPrefix}isuzu
├➢${usedPrefix}itachi
├➢${usedPrefix}itori
├➢${usedPrefix}kaga
├➢${usedPrefix}kagura
├➢${usedPrefix}kaori
├➢${usedPrefix}keneki
├➢${usedPrefix}kotori
├➢${usedPrefix}kurumi
├➢${usedPrefix}madara
├➢${usedPrefix}mikasa
├➢${usedPrefix}miku
├➢${usedPrefix}minato
├➢${usedPrefix}naruto
├➢${usedPrefix}nezuko
├➢${usedPrefix}sagiri
├➢${usedPrefix}sasuke
├➢${usedPrefix}sakura
├➢${usedPrefix}cosplay
└────ׂ─ׂ─ׂ─ׂ───

┌──「🔞𝐂𝐨𝐦𝐚𝐧𝐝𝐨𝐬 +𝟏𝟖」
├➢_${usedPrefix}pack_
├➢_${usedPrefix}pack2_
├➢_${usedPrefix}pack3_
├➢_${usedPrefix}videoxxx_
├➢_${usedPrefix}tiktokxxx_
├➢_${usedPrefix}tetas_
├➢_${usedPrefix}booty_
├➢_${usedPrefix}ecchi_
├➢_${usedPrefix}furro_
├➢_${usedPrefix}imagenlesbians_
├➢_${usedPrefix}panties_
├➢_${usedPrefix}pene_
├➢_${usedPrefix}porno_
├➢_${usedPrefix}randomxxx_
├➢_${usedPrefix}pechos_
├➢_${usedPrefix}yaoi_
├➢_${usedPrefix}yaoi2_
├➢_${usedPrefix}yuri_
├➢_${usedPrefix}yuri2_
├➢_${usedPrefix}trapito_
├➢_${usedPrefix}hentai_
├➢_${usedPrefix}nsfwloli_
├➢_${usedPrefix}nsfworgy_
├➢_${usedPrefix}nsfwfoot_
├➢_${usedPrefix}nsfwass_
├➢_${usedPrefix}nsfwbdsm_
├➢_${usedPrefix}nsfwcum_
├➢_${usedPrefix}nsfwero_
├➢_${usedPrefix}nsfwfemdom_
├➢_${usedPrefix}nsfwglass_
├➢_${usedPrefix}hentaipdf *<texto>*_
└────ׂ─ׂ─ׂ─ׂ──

┌──「𝐄𝐟𝐞𝐜𝐭𝐨𝐬 𝐝𝐞 𝐚𝐮𝐝𝐢𝐨𝐬」
├➢*- 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰 𝚄𝙽 𝙰𝚄𝙳𝙸𝙾 𝙾 𝙽𝙾𝚃𝙰 𝙳𝙴 𝚅𝙾𝚉*
├➢_${usedPrefix}bass_
├➢_${usedPrefix}blown_
├➢_${usedPrefix}deep_
├➢_${usedPrefix}earrape_
├➢_${usedPrefix}fast_
├➢_${usedPrefix}fat_
├➢_${usedPrefix}nightcore_
├➢_${usedPrefix}reverse_
├➢_${usedPrefix}robot_
├➢_${usedPrefix}slow_
├➢_${usedPrefix}smooth_
├➢_${usedPrefix}tupai_
└────ׂ─ׂ─ׂ─ׂ──

┌「◾𝐂𝐡𝐚𝐭 𝐚𝐧𝐨𝐧𝐢𝐦𝐨」
├➢_${usedPrefix}start_
├➢_${usedPrefix}next_
├➢_${usedPrefix}leave_
└────ׂ─ׂ─ׂ─ׂ──

┌「🔍𝐁𝐮𝐬𝐜𝐚𝐫」
├➢_${usedPrefix}server IP \ puerto
├➢_${usedPrefix}apkpure <*texto*>
├➢_${usedPrefix}covid <*país*>
├➢_${usedPrefix}playstore <*texto*>
├➢_${usedPrefix}stickersearch *<texto>*_
├➢_${usedPrefix}xnxxsearch *<texto>*_
├➢_${usedPrefix}animeinfo *<texto>*_
├➢_${usedPrefix}google *<texto>*_
├➢_${usedPrefix}letra *<texto>*_
├➢_${usedPrefix}wikipedia *<texto>*_
├➢_${usedPrefix}ytsearch *<texto>*_
├➢_${usedPrefix}apkdone *<texto>*_
├➢_${usedPrefix}apkgoogle *<texto>*_
├➢_${usedPrefix}apkmody *<texto>*_
├➢_${usedPrefix}apkshub *<texto>*_
├➢_${usedPrefix}happymod *<texto>*_
├➢_${usedPrefix}hostapk *<texto>*_
├➢_${usedPrefix}revdl *<texto>*_
├➢_${usedPrefix}toraccino *<texto>*_
├➢_${usedPrefix}uapkpro *<texto>*_
└────ׂ─ׂ─ׂ─ׂ──

┌「🎵𝐀𝐔𝐃𝐈𝐎𝐒」
├➢_𝙴𝚂𝙲𝚁𝙸𝙱𝙴 𝙻𝙰𝚂 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴𝚂 𝙿𝙰𝙻𝙰𝙱𝚁𝙰𝚂 𝙾 𝙵𝚁𝙰𝚂𝙴𝚂 𝚂𝙸𝙽 𝙽𝙸𝙽𝙶𝚄𝙽 𝙿𝚁𝙴𝙵𝙸𝙹𝙾 (#, /, *, .)
├➢_(𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)_
├➢_Quien es tu sempai botsito 7w7_
├➢_Te diagnostico con gay_
├➢_A nadie le importa_
├➢_Fiesta del admin_
├➢_Fiesta del administrador_ 
├➢_Vivan los novios_
├➢_Feliz cumpleaños_
├➢_No digas mamadas Mariyein_
├➢_Noche de paz_
├➢_Buenos dias_
├➢_Cambiate a Movistar 
├➢_Bienvenido_
├➢_Calla fan de bts_
├➢_Las reglas del grupo_
├➢_Buenos tardes_
├➢_Buenos noches_
├➢_Audio hentai_
├➢_Chica lgante_
├➢_Feliz navidad_
├➢_Vete a la vrg_
├➢_Pasa pack Bot_
├➢_Atencion grupo_
├➢_Marica quien_
├➢_Murio el grupo_
├➢_Oh me vengo_
├➢_tio que rico_
├➢_Viernes_
├➢_Baneado_
├➢_Sexo_
├➢_Hola_
├➢_Un pato_
├➢_Nyanpasu_
├➢_Te amo_
├➢_Yamete_
├➢_Bañate_
├➢_Es puto_
├➢_La biblia_
├➢_Onichan_
├➢_Mierda de Bot_
├➢_Siuuu_
├➢_Epico_
├➢_Shitpost_
├➢_Rawr_
├➢_UwU_
├➢_:(
├➢_a_
└────ׂ─ׂ─ׂ─ׂ──


┌──「🛠️𝐇𝐄𝐑𝐑𝐀𝐌𝐈𝐄𝐍𝐓𝐀𝐒」─
├➢_${usedPrefix}inspect *<link del grupo>*_
├➢_${usedPrefix}ofuscar *<código>*_
├➢_${usedPrefix}reenviar *<responder a un mensaje>*_
├➢_${usedPrefix}copy *<texto>*_
├➢_${usedPrefix}chatgpt *<texto>*_
├➢_${usedPrefix}morse *<texto>*_
├➢_${usedPrefix}captura *<link de la página>*_
├➢_${usedPrefix}horario_
├➢_${usedPrefix}encuestas texto|texto_
├➢_${usedPrefix}afk *<motivo>*_
├➢_${usedPrefix}ocr *<responde a imagen>*_
├➢_${usedPrefix}tamaño *<cantidad> <responde a imagen / video>*_
├➢_${usedPrefix}acortar *<enlace / link / url>*_
├➢_${usedPrefix}calc *<operacion math>*_
├➢_${usedPrefix}del *<respondre a mensaje del Bot>*_
├➢_${usedPrefix}whatmusic *<responde a un audio>*_
├➢_${usedPrefix}qrcode *<texto>*_
├➢_${usedPrefix}readmore *<texto1| texto2>*_
├➢_${usedPrefix}spamwa *<numero|texto|cantidad>*_
├➢_${usedPrefix}styletext *<texto>*_
├➢_${usedPrefix}traducir *<texto>*_
├➢_${usedPrefix}nowa *<numero>*_
└────ׂ─ׂ─ׂ─ׂ───

┌──「🌌𝐒𝐓𝐈𝐂𝐊𝐄𝐑」─
├➢_${usedPrefix}sticker *<responder a imagen o video>*_
├➢_${usedPrefix}sticker *<enlace / link / url>*_
├➢_${usedPrefix}s *<responder a imagen o video>*_
├➢_${usedPrefix}s *<enlace / link / url>*_
├➢_${usedPrefix}sfull *<responder a imagen o video>*_
├➢_${usedPrefix}emojimix *<emoji 1>&<emoji 2>*_
├➢_${usedPrefix}scircle *<responder a imagen>*_
├➢_${usedPrefix}sremovebg *<responder a imagen>*_
├➢_${usedPrefix}semoji *<tipo> <emoji>*_
├➢_${usedPrefix}attp *<texto>*_
├➢_${usedPrefix}attp2 *<texto>*_
├➢_${usedPrefix}attp3 *<texto>*_
├➢_${usedPrefix}ttp *<texto>*_
├➢_${usedPrefix}ttp2 *<texto>*_
├➢_${usedPrefix}ttp3 *<texto>*_
├➢_${usedPrefix}ttp4 *<texto>*_
├➢_${usedPrefix}ttp5 *<texto>*_
├➢_${usedPrefix}pat *<@tag>*_
├➢_${usedPrefix}slap *<@tag>*_
├➢_${usedPrefix}kiss *<@tag>*_
├➢_${usedPrefix}dado_
├➢_${usedPrefix}wm *<packname> <author>*_
├➢_${usedPrefix}stickermarker *<efecto> <responder a imagen>*_
├➢_${usedPrefix}stickerfilter *<efecto> <responder a imagen>*_ 
└────ׂ─ׂ─ׂ─ׂ───

┣━━━❰･ *OWNER 👑* ･❱━━━┫
❀••►☪︎ PARA VER LOS COMANDOS DE OWNER USE:
❀••►☪︎ ${usedPrefix}soloparaelpropietario
𒅄 ▬▬▬▬ ◆ ▬▬▬▬ 𒅄

 ━━━━━━━━━━━━━━━━━━━
┃𝐃𝐎𝐑𝐑𝐀𝐓-𝐁𝐎𝐓-𝐌𝐃 𝐁𝐘 𝐃𝐈𝐄𝐆𝐎-𝐎𝐅𝐂┃
 ━━━━━━━━━━━━━━━━━━━
`.trim()
await conn.sendButton(m.chat, menuA, menuB,  db, [
['𝗚𝗥𝗨𝗣𝗢𝗦', `#grupos`],
['𝗗𝗢𝗡𝗔𝗥', `#donar`]
], m)
const sections = [
{
title: `𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐂𝐈𝐎𝐍`,
rows: [
{title: "/grupos", description: "muestra los grupos del bot", rowId: `${usedPrefix}grupos`},
{title: "/estado", description: "para ver el estado del bot", rowId: `${usedPrefix}estado`},
{title: "/terminos", description: "para leer los términos y condiciones del bot", rowId: `${usedPrefix}términos`},
{title: "/instalarbot", description: "información para instalar al bot", rowId: `${usedPrefix}instalarbot`},
{title: "/infobot", description: "informacion del bot", rowId: `${usedPrefix}infobot`},
{title: "/grouplist", description: "muestra los grupos en donde está el bot", rowId: `${usedPrefix}grouplist`},
{title: "/owner", description: "muestra los creadores del bot", rowId: `${usedPrefix}owner`},
{title: "/script", description: "muestra el github del bot", rowId: `${usedPrefix}script`},
]}, ]
const listMessage = {
text: `𝙳𝙸𝙴𝙶𝙾-𝙾𝙵𝙲 | 𝙳𝙾𝚁𝚁𝙰𝚃-𝙱𝙾𝚃-𝙼𝙳`,
footer: `𝙼𝙴𝙽𝚄 𝙳𝙴𝚂𝙿𝙻𝙴𝙶𝙰𝙱𝙻𝙴
${wm}`,
title: null,
buttonText: "selecionar", 
sections }

 conn.sendMessage(m.chat, listMessage, {quoted: fkontak})	
}

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
