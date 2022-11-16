const lenguaje = () => {
return 'es' } //Español 


//AVISOS DE MENSAJE
const smsAvisoRG = () => {
return `╰⊱✅⊱ *RESULTADO* ⊱✅⊱╮\n\n` }
const smsAvisoAG = () => {
return `╰⊱⚠️⊱ *ADVERTENCIA* ⊱⚠️⊱╮\n\n` }
const smsAvisoIIG = () => {
return `╰⊱❕⊱ *INFORMACIÓN* ⊱❕⊱╮\n\n` }
const smsAvisoFG = () => {
return `╰⊱❌⊱ *ERROR* ⊱❌⊱╮\n\n` }
const smsAvisoMG = () => {
return `╰⊱❗️⊱ *ACCIÓN MAL USADA* ⊱❗️⊱╮\n\n` }
const smsAvisoEEG = () => {
return `╰⊱📩⊱ *REPORTE* ⊱📩⊱╮\n\n` }
const smsAvisoEG = () => {
return `╰⊱💚⊱ *ÉXITO* ⊱💚⊱╮\n\n` }


//PARÁMETROS EN COMANDOS
const smsRowner = () => {
return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡ESTE COMANDO SÓLO YO COMO CREADOR(A) DE BOT LO PUEDE USAR!!\`\`\`` }//NUMERO DE BOT
const smsOwner = () => {
return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡ESTE COMANDO SÓLO MI CREADOR(A) LO PUEDE USAR!!\`\`\`` }//OWNER
const smsMods = () => {
return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡ESTE COMANDO SÓLO MODERADORES Y MI CREADOR(A) LO PUEDEN USAR!!\`\`\`\`` }//MODERADORES
const smsPremium = () => {
return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡ESTE COMANDO SÓLO ESTA DISPONIBLE PARA USUARIOS PREMIUM Y MI CREADOR(A)!!\`\`\`` }//USUARIOS PREMIUM
const smsGroup = () => {
return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡ESTE COMANDO SÓLO SE PUEDE UTILIZAR EN GRUPOS!!\`\`\`` }//PARA GRUPOS
const smsPrivate = () => {
return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡ESTE COMANDO SÓLO SE PUEDE UTILIZAR AL PRIVADO!!\`\`\`` }//AL PRIVADO
const smsAdmin = () => {
return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡ESTE COMANDO SÓLO ES PARA ADMINS!!\`\`\`` }//ADMINS
const smsBotAdmin = () => {
return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡NECESITO SER ADMIN PARA QUE PUEDAS USAR ESTE COMANDO!!\`\`\`` }//BOT CON ADMIN
const smsUnreg = () => {
return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡NECESITAS ESTAR REGISTRADO(A) PARA USAR ESTE COMANDO, ESCRIBE #verificar PARA REGISTRARTE!!\`\`\`` }//VERIFICAR
const smsRestrict = () => {
return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡ESTE COMANDO ESTÁ RESTRINGIDO POR MI CREADORA(A)!!\`\`\`` }//RESTRINGIR COMANDO

//MENU LISTA
const smsTime = () => {
return `Tiempo Actual`}
const smsUptime = () => {
return `Funcionando Durante`}
const smsVersion = () => {
return `Versión de ${global.packname}`}
const smsTotalUsers = () => {
return `Total de Usuarios`}
const smsMode = () => {
return `Está en Modo`}
const smsModePublic = () => {
return `PÚBLICO`}
const smsModePrivate = () => {
return `PRIVADO`}
const smsBanChats = () => {
return `Chat(s) Prohibido(s)`}
const smsBanUsers = () => {
return `Usuario(s) Prohibido(s)`}
const smsPareja = () => {
return `Pareja`}
const smsResultPareja = () => {
return `No tiene Pareja`}
const smsSaludo = () => {
return `👋 !HOLA! BIENVENIDO(A) 👋`}
const smsDia = () => {
return `🌇 Buenos Días ⛅`}
const smsTarde = () => {
return `🏙️ Buenas Tardes 🌤️`}
const smsTarde2 = () => {
return `🌆 Buenas tardes 🌥️`}
const smsNoche = () => {
return `🌃 Buenas noches 💫`}
const smsListaMenu = () => {
return `⊹ LISTA DE MENU ⊹`}
const smsLista1 = () => {
return `🔰 𝐼𝑁𝐹𝑂 𝐷𝑂𝑅𝑅𝐴𝑇-𝐵𝑂𝑇 🔰 `}
const smsLista2 = () => {
return `│🤴│𝐍𝐔𝐌𝐄𝐑𝐎 𝐃𝐄 𝐌𝐈 𝐂𝐑𝐄𝐀𝐃𝐎𝐑`}
const smsLista3 = () => {
return `│🏓│𝐈𝐍𝐅𝐎𝐁𝐎𝐓`}
const smsLista4 = () => {
return `│☄️│𝐌𝐄𝐍𝐔 𝐂𝐎𝐌𝐏𝐋𝐄𝐓𝐎`}
const smsLista5 = () => {
return `│🤖│𝐆𝐑𝐔𝐏𝐎 𝐎𝐅𝐈𝐂𝐈𝐀𝐋 𝐃𝐄𝐋 𝐁𝐎𝐓`}
const smsLista6 = () => {
return `│🖥️│𝐒𝐄𝐑 𝐒𝐔𝐁-𝐁𝐎𝐓`}
const smsLista7 = () => {
return `│🔰│𝐈𝐍𝐒𝐓𝐀𝐋𝐀𝐑-𝐃𝐎𝐑𝐑𝐀𝐓-𝐁𝐎𝐓`}
const smsLista8 = () => {
return ` 💲 𝐌𝐄𝐍𝐔 𝐄𝐂𝐎𝐍𝐎𝐌𝐈𝐀 💲`}
const smsLista9 = () => {
return `🏆 𝐓𝐀𝐁𝐋𝐀 𝐂𝐋𝐀𝐒𝐈𝐅𝐈𝐂𝐀𝐓𝐎𝐑𝐈𝐀`}
const smsLista10 = () => {
return `⛏️ 𝐌𝐈𝐍𝐀𝐑`}
const smsLista11 = () => {
return `👨‍🏭 𝐓𝐑𝐀𝐁𝐀𝐉𝐀𝐑`}
const smsLista12 = () => {
return `👜 𝐁𝐀𝐋𝐀𝐍𝐂𝐄`}
const smsLista13 = () => {
return `💰 𝐌𝐄𝐍𝐔 𝐑𝐏𝐆`}
const smsLista14 = () => {
return `💎 𝐂𝐎𝐌𝐏𝐑𝐀𝐑 𝐃𝐈𝐀𝐌𝐀𝐍𝐓𝐄𝐒`}
const smsLista15 = () => {
return ` 🌟 𝐌𝐄𝐍𝐔𝐒`}
const smsLista16 = () => {
return `📦 𝐌𝐄𝐍𝐔 𝐃𝐄 𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐒`}
const smsLista17 = () => {
return `🎧 𝐌𝐄𝐍𝐔 𝐀𝐔𝐃𝐈𝐎𝐒`}
const smsLista18 = () => {
return `🎮 𝐌𝐄𝐍𝐔 𝐉𝐔𝐄𝐆𝐎𝐒`}
const smsLista19 = () => {
return `🔰 𝐌𝐄𝐍𝐔 𝐒𝐓𝐈𝐂𝐊𝐄𝐑𝐒`}
const smsLista20 = () => {
return `🏛𝐌𝐄𝐍𝐔 𝐀𝐍𝐈𝐌𝐄`}
const smsLista21 = () => {
return `👑 𝐌𝐄𝐍𝐔 𝐎𝐖𝐍𝐄𝐑`}
const smsLista22 = () => {
return `🔞 𝐌𝐄𝐍𝐔 +18`}

//main.js
const smsWelcome = () => {
return '*┏━━━━━━━━━━━━\n┃──〘 *WELCOME* 〙──\n┃━━━━━━━━━━━━\n┃ *_✨ @user bienvenid@ a_* \n┃ *_@subject ✨_*\n┃\n┃=> *_En este grupo podrás_*\n┃ *_encontrar:_*\n┠⊷ *Amistades 🫂* \n┠⊷ *Desmadre 💃🕺* \n┠⊷ *Relajo 💅* \n┠⊷ *Enemig@s 🥵* :\n┠⊷ *Un Bot Sexy*\n┃\n┃=> *_Puedes solicitar mi lista de_*\n┃ *_comandos con:_*\n┠⊷ *#menu*\n┃\n┃=> *_Aquí tienes la descripción_* \n┃ *_del grupo, léela!!_*\n┃\n\n@desc\n\n┃ \n┃ *_🔰  Disfruta de tu_* \n┃ *_estadía en el grupo  🔰_*  \n┃\n┗━━━━━━━━━━━'
}
const smsBye = () => {
return '*╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⊰*\n┊ @user\n┊ *NO LE SABE AL GRUPO, CHAO!!* 😎\n*╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⊰*'}
const smsSpromote = () => {
return '『❗』 *@user 𝚂𝙴 𝚂𝚄𝙼𝙰 𝙰𝙻 𝙶𝚁𝚄𝙿𝙾 𝙳𝙴 𝙰𝙳𝙼𝙸𝙽𝚂!!*'}
const smsSdemote = () => {
return '『❗』 *@user 𝙰𝙱𝙰𝙽𝙳𝙾𝙽𝙰 𝙴𝙻 𝙶𝚁𝚄𝙿𝙾 𝙳𝙴 𝙰𝙳𝙼𝙸𝙽𝚂 !!*'}
const smsSdesc = () => {
return '『❗』 *𝚂𝙴 𝙷𝙰 𝙼𝙾𝙳𝙸𝙵𝙸𝙲𝙰𝙳𝙾 𝙻𝙰 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝙲𝙸𝙾𝙽 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾*\n\n*𝙽𝚄𝙴𝚅𝙰 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝙲𝙸𝙾𝙽:* @desc'}
const smsSsubject = () => {
return '『❗』*𝚂𝙴 𝙷𝙰 𝙼𝙾𝙳𝙸𝙵𝙸𝙲𝙰𝙳𝙾 𝙴𝙻 𝙽𝙾𝙼𝙱𝚁𝙴 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾*\n*𝙽𝚄𝙴𝚅𝙾 𝙽𝙾𝙼𝙱𝚁𝙴:* @subject'}
const smsSicon = () => {
return '『❗』*𝚂𝙴 𝙷𝙰 𝙲𝙰𝙼𝙱𝙸𝙰𝙳𝙾 𝙻𝙰 𝙵𝙾𝚃𝙾 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾!!*'}
const smsSrevoke = () => {
return '『❗』 *𝚂𝙴 𝙷𝙰 𝙰𝙲𝚃𝚄𝙰𝙻𝙸𝚉𝙰𝙳𝙾 𝙴𝙻 𝙻𝙸𝙽𝙺 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾!!*\n*𝙻𝙸𝙽𝙺 𝙽𝚄𝙴𝚅𝙾:* @revoke'}
const smsConexion = () => {
return `\n╭──────────────────────────────✧•°•°···\n│➢ 𝐁𝐎𝐓 𝐂𝐎𝐍𝐄𝐂𝐓𝐀𝐃𝐎 𝐂𝐎𝐑𝐑𝐄𝐂𝐓𝐀𝐌𝐄𝐍𝐓𝐄 ☑️\n│❏ 𝐁𝐎𝐓 𝐈𝐍𝐒𝐓𝐀𝐋𝐀𝐃𝐎:𝐃𝐎𝐑𝐑𝐀𝐓-𝐁𝐎𝐓-𝐌𝐃 ☑️\n╰──────────────────────────────✧•°•°···`}
const smsClearTmp = () => {
return `\n▣════════[ 𝐀𝐔𝐓𝐎𝐂𝐋𝐄𝐀𝐑-𝐓𝐌𝐏 ]════════════...\n│\n▣─➢ 𝐁𝐚𝐬𝐮𝐫𝐚 𝐞𝐥𝐢𝐦𝐢𝐧𝐚𝐝𝐚 ✅\n│\n▣═════════════════════════════════════...`}
const smsCargando = () => {
return `۞ 𝘾𝘼𝙍𝙂𝘼𝙉𝘿𝙊...\n`}


//_allantilink.js
const smsTextoYT = () => {
return '🔥 𝗦𝘂𝗽𝗲𝗿 𝘿𝙤𝙧𝙧𝙖𝙩-𝗕𝗼𝘁-𝗠𝗗 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 '}
const smsApagar = () => {
return '❌ 𝘿𝙀𝙎𝘼𝘾𝙏𝙄𝙑𝘼𝙍'}
const smsEncender = () => {
return '✅ 𝘼𝘾𝙏𝙄𝙑𝘼𝙍'}
const smsEnlaceTik = () => {
return `𝙎𝙀 𝘿𝙀𝙏𝙀𝘾𝙏𝙊 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝙋𝙍𝙊𝙃𝙄𝘽𝙄𝘿𝙊 𝘿𝙀 𝙏𝙄𝙆𝙏𝙊𝙆 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊\n\n𝙋𝙍𝙊𝘾𝙀𝘿𝙊 𝘼 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍𝙏𝙀`}
const smsEnlaceYt = () => {
return `𝙎𝙀 𝘿𝙀𝙏𝙀𝘾𝙏𝙊 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝙋𝙍𝙊𝙃𝙄𝘽𝙄𝘿𝙊 𝘿𝙀 𝙔𝙊𝙐 𝙏𝙐𝘽𝙀 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊\n\n𝙋𝙍𝙊𝘾𝙀𝘿𝙊 𝘼 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍𝙏𝙀`}
const smsEnlaceTel = () => {
return `𝙎𝙀 𝘿𝙀𝙏𝙀𝘾𝙏𝙊 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝙋𝙍𝙊𝙃𝙄𝘽𝙄𝘿𝙊 𝘿𝙀 𝙏𝙀𝙇𝙀𝙂𝙍𝘼𝙈 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊\n\n𝙋𝙍𝙊𝘾𝙀𝘿𝙊 𝘼 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍𝙏𝙀`}
const smsEnlaceFb = () => {
return `𝙎𝙀 𝘿𝙀𝙏𝙀𝘾𝙏𝙊 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝙋𝙍𝙊𝙃𝙄𝘽𝙄𝘿𝙊 𝘿𝙀 𝙁𝘼𝘾𝙀𝘽𝙊𝙊𝙆 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊\n\n𝙋𝙍𝙊𝘾𝙀𝘿𝙊 𝘼 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍𝙏𝙀`}
const smsEnlaceIg = () => {
return `𝙎𝙀 𝘿𝙀𝙏𝙀𝘾𝙏𝙊 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝙋𝙍𝙊𝙃𝙄𝘽𝙄𝘿𝙊 𝘿𝙀 𝙄𝙉𝙎𝙏𝘼𝙂𝙍𝘼𝙈 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊\n\n𝙋𝙍𝙊𝘾𝙀𝘿𝙊 𝘼 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍𝙏𝙀`}
const smsEnlaceTw = () => {
return `𝙎𝙀 𝘿𝙀𝙏𝙀𝘾𝙏𝙊 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝙋𝙍𝙊𝙃𝙄𝘽𝙄𝘿𝙊 𝘿𝙀 𝙏𝙒𝙄𝙏𝙏𝙀𝙍 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊\n\n𝙋𝙍𝙊𝘾𝙀𝘿𝙊 𝘼 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍𝙏𝙀`}
const smsAllAdmin = () => {
return `𝘿𝙀𝘽𝙊 𝘿𝙀 𝙎𝙀𝙍 𝘼𝘿𝙈𝙄𝙉 𝙋𝘼𝙍𝘼 𝙋𝙊𝘿𝙀𝙍 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍 𝘼 𝙄𝙉𝙏𝙍𝙐𝙎𝙊𝙎(𝘼𝙎)`}
const smsSoloOwner = () => {
return `𝙀𝙇/𝙇𝘼 𝙋𝙍𝙊𝙋𝙄𝙀𝙏𝘼𝙍𝙄𝙊(𝘼) 𝘿𝙀𝘽𝙀 𝘼𝘾𝙏𝙄𝙑𝘼𝙍 𝙀𝙎𝙏𝘼 𝙁𝙐𝙉𝘾𝙄𝙊𝙉\n*#on restrict*`}

//handler.js
const smsCont1 = () => {
return `*🔴 𝗖𝗢𝗠𝗔𝗡𝗗𝗢 𝗙𝗔𝗟𝗟𝗔𝗡𝗗𝗢 🔴*`}
const smsCont2 = () => {
return `*⚠️ 𝗣𝗟𝗨𝗚𝗜𝗡:*`}
const smsCont3 = () => {
return `*⚠️ 𝗨𝗦𝗨𝗔𝗥𝗜𝗢:*`}
const smsCont4 = () => {
return `*⚠️ 𝗖𝗢𝗠𝗔𝗡𝗗𝗢:*`}
const smsCont5 = () => {
return `*⚠️ 𝗘𝗥𝗥𝗢𝗥:*`}
const smsCont6 = () => {
return `*❗ 𝗥𝗘𝗣𝗢𝗥𝗧𝗘 𝗘𝗦𝗧𝗘 𝗠𝗘𝗡𝗦𝗔𝗝𝗘 𝗨𝗦𝗔𝗡𝗗𝗢 𝗘𝗟 𝗖𝗢𝗠𝗔𝗡𝗗𝗢 #reporte 𝗣𝗔𝗥𝗔 𝗦𝗢𝗟𝗨𝗖𝗜𝗢𝗡𝗔𝗥𝗟𝗢*`}
const smsCont7 = () => {
return `${global.lenguajeGB['smsAvisoAG']()}*NO TIENE DIAMANTES!! 💎 PUEDE IR A LA TIENDA CON EL COMANDO*`}
const smsCont8 = () => {
return ` *DIAMASTE(S) 💎 USADO(S)*`}
const smsCont9 = () => {
return `${global.lenguajeGB['smsAvisoAG']()}*NECESITA EL NIVEL ➡️*`}
const smsCont10 = () => {
return `*PARA USAR ESTE COMANDO. TÚ NIVEL ACTUAL ES ➡️*`}
const smsCont11 = () => {
return `*ACTUALIZA CON EL COMANDO*`}
const smsCont12 = () => {
return `𝗨𝗡 𝗚𝗥𝗨𝗣𝗢 𝗚𝗘𝗡𝗜𝗔𝗟!! 🤑`}
const smsCont13 = () => {
return `𝗔𝗟𝗚𝗨𝗜𝗘𝗡 𝗦𝗘 𝗨𝗡𝗜𝗢!! 🔥`}
const smsCont14 = () => {
return `𝗦𝗘 𝗙𝗨𝗘 𝗔𝗟𝗚𝗨𝗜𝗘𝗡 𝙐𝙉 𝙂𝘼𝙔 🤮!! `}
const smsCont15 = () => {
return `𝙃𝙊𝙇𝘼`}
const smsCont16 = () => {
return `𝙇𝘼𝙎 𝙑𝙄𝘿𝙀𝙊𝙇𝙇𝘼𝙈𝘼𝘿𝘼𝙎 📲`}
const smsCont17 = () => {
return `𝙇𝘼𝙎 𝙇𝙇𝘼𝙈𝘼𝘿𝘼𝙎 📞`}
const smsCont18 = () => {
return `𝙉𝙊 𝙀𝙎𝙏𝘼𝙉 𝘼𝙐𝙏𝙊𝙍𝙄𝙕𝘼𝘿𝘼𝙎 𝙋𝙊𝙍 𝙇𝙊 𝙌𝙐𝙀 𝙏𝙀𝙉𝘿𝙍𝙀 𝙌𝙐𝙀 𝘽𝙇𝙊𝙌𝙐𝙀𝘼𝙍𝙏𝙀\n\n𝙎𝙄 𝙇𝙇𝘼𝙈𝘼𝙎𝙏𝙀 𝙋𝙊𝙍 𝘼𝘾𝘾𝙄𝘿𝙀𝙉𝙏𝙀 𝘾𝙊𝙈𝙐𝙉𝙄𝘾𝘼𝙏𝙀 𝘾𝙊𝙉 𝙈𝙄 𝙊𝙒𝙉𝙀𝙍`}
const smsCont19 = () => {
return `𝘼𝙉𝙏𝙄 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍`}
const smsCont20 = () => {
return `*┃✤ Nombre:*`}
const smsCont21 = () => {
return `*┃✤ Enviando el mensaje eliminado...*`}
//_______________
const smsTex16 = () => { return 'MENU DE AUDIOS'}
const smsBotonM1 = () => { return `⚡ MENÚ DE INICIO ⚡`} 
const smsBotonM3 = () => { return `🎒 INVENTARIO 🎒`} 
//_____________
const smsMalError3 = () => { return `${lenguajeGB['smsAvisoFG']()}\`\`\`ALGO SALIÓ MAL, REPORTE ESTE COMANDO USANDO:\`\`\`\n`}

export default { lenguaje, smsAvisoRG, smsAvisoAG, smsAvisoIIG, smsAvisoFG, smsAvisoMG, smsAvisoEEG, smsAvisoEG, smsRowner, smsOwner, smsMods, smsPremium, smsGroup,
smsPrivate, smsAdmin, smsBotAdmin, smsUnreg, smsRestrict, smsTime, smsUptime, smsVersion, smsTotalUsers, smsMode, smsModePublic, smsModePrivate, smsBanChats, smsBanUsers, 
smsPareja, smsResultPareja, smsSaludo, smsDia, smsTarde, smsTarde2, smsNoche, smsListaMenu, smsLista1, smsLista2, smsLista3, smsLista4, smsLista5, smsLista6, smsLista7, smsLista8, smsLista9, smsLista10,
smsLista11, smsLista12, smsLista13, smsLista14, smsLista15, smsLista16, smsLista17, smsLista18, smsLista19, smsLista20, smsLista21, smsLista22, smsWelcome, smsBye, smsSpromote, smsSdemote, smsSdesc, smsSsubject,
smsSicon, smsSrevoke, smsConexion, smsClearTmp, smsCargando, smsTextoYT, smsApagar, smsEncender, smsEnlaceTik, smsEnlaceYt, smsEnlaceTel, smsEnlaceFb, smsEnlaceIg, smsEnlaceTw, smsAllAdmin, smsSoloOwner,
smsCont1, smsCont2, smsCont3, smsCont4, smsCont5, smsCont6, smsCont7, smsCont8, smsCont9, smsCont10, smsCont11, smsCont12, smsCont13, smsCont14, smsCont15, smsCont16, smsCont17, smsCont18,
smsCont19, smsCont20, smsCont21, smsTex16, smsBotonM1, smsBotonM3, smsMalError3};
