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
return `│🤴│NUMERO DE MI CREADOR`}
const smsLista3 = () => {
return `│🏓│INFOBOT`}
const smsDonar = () => {
return `│📌│DONAR`}
const smsLista4 = () => {
return `│☄️│MENU COMPLETO`}
const smsLista5 = () => {
return `│🤖│GRUPOS OFICIALES DEL BOT`}
const smsLista6 = () => {
return `│🖥️│SER SUB-BOT`}
const smsLista7 = () => {
return `│🔰│INSTALAR-BOT`}
const smsLista8 = () => {
return ` 💲 ECONOMIA 💲`}
const smsLista9 = () => {
return `│🏆│TABLA CLASIFICATORIA`}
const smsLista10 = () => {
return `│⛏️│MINAR`}
const smsLista11 = () => {
return `│👨‍🏭│TRABAJAR`}
const smsLista12 = () => {
return `│👜│INVENTARIO`}
const smsLista13 = () => {
return `│💰│MENU RPG`}
const smsLista14 = () => {
return `│💎│COMPRAR DIAMANTES`}
const smsLista15 = () => {
return ` 🌟 MENUS`}
const smsLista16 = () => {
return `│📦│MENU DESCARGAS`}
const smsLista17 = () => {
return `│🎧│MENU AUDIOS`}
const smsLista18 = () => {
return `│🎮│MENU JUEGOS`}
const smsLista19 = () => {
return `│🔰│MENU STICKERS`}
const smsLista20 = () => {
return `│🏛│MENU ANIME`}
const smsLista21 = () => {
return `│👑│MENU OWNER`}
const smsLista22 = () => {
return `│🔞│MENU +18`}

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
const smsCodigoQR = () => { return `\n✅ ESCANEA EL CÓDIGO QR EXPIRA EN 45 SEGUNDOS ✅`}
const smsConexionOFF = () => { return `\n⚠️ SIN CONEXIÓN, BORRE LA CARPETA ${global.authFile} Y ESCANEA EL CÓDIGO QR ⚠️`}
const smspurgeSession = () => { return `\n╭» 🔵 ${global.authFile} 🔵\n│☁ SESIONES NO ESENCIALES ELIMINADAS\n╰―――――――――――――――――――✤`} 
const smspurgeOldFiles = () => { return `\n╭» 🟠 ARCHIVOS 🟠\n│☁ ARCHIVOS RESIDUALES ELIMINADAS\n╰―――――――――――――――――――✤`} 
const smspurgeSessionSB1 = () => { return `\n╭» 🟡 JadiBot 🟡\n│☁ NADA POR ELIMINAR \n╰―――――――――――――――――――✤`} 
const smspurgeSessionSB2 = () => { return `\n╭» ⚪ JadiBot ⚪\n│☁ ARCHIVOS NO ESENCIALES ELIMINADOS\n╰―――――――――――――――――――✤`} 
const smspurgeSessionSB3 = () => { return `\n╭» 🔴 JadiBot 🔴\n│☁ OCURRIÓ UN ERROR\n╰―――――――――――――――――――✤\n`} 
const smspurgeOldFiles1 = () => { return `\n╭» 🟣 ARCHIVO 🟣\n│☁`} 
const smspurgeOldFiles2 = () => { return `BORRADO CON ÉXITO\n╰―――――――――――――――――――✤`} 
const smspurgeOldFiles3 = () => { return `\n╭» 🔴 ARCHIVO 🔴\n│☁`} 
const smspurgeOldFiles4 = () => { return `NO SE LOGRÓ BORRAR\n╰―――――――――――――――――――✤\n`}


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
//Grupo admins
const smsConfi10 = () => { return `*~ CENTRO DE CONFIGURACIÓN*`}
const smsParaAdmins = () => { return `PARA ADMINS Y CREADOR(A) : GRUPOS`}
const smsParaAdYOw = () => { return `PARA ADMINS Y CREADOR(A) : CHATS`}
const smsParaOw = () => { return `PARA CREADOR(A) : CHATS`}
//_______________
const smsTex16 = () => { return 'MENU DE AUDIOS'}
const smsBotonM1 = () => { return `📌 DONAR 📌`} 
const smsBotonM3 = () => { return `🎒 INVENTARIO 🎒`} 
//_____________
const smsConfi1 = () => { return `AJUSTES`}
//ad
const smsMalused = () => { return '⚡ *USAR EL COMANDO DE ESTA FORMA:*\n'}
//-----------
const smsMalError3 = () => { return `${lenguajeGB['smsAvisoFG']()}\`\`\`ALGO SALIÓ MAL, REPORTE ESTE COMANDO USANDO:\`\`\`\n`}

//gc-config_time.js
const smsGrupoTime1 = () => { return '🔓 *_ABRIR GRUPO EN UNA HORA_*'}
const smsGrupoTime2 = () => { return '🔒 *_CERRAR GRUPO EN UNA HORA_*'}
const smsGrupoTime3 = () => { return '*GRUPO'}
const smsGrupoTime4 = () => { return 'CERRADO'}
const smsGrupoTime5 = () => { return 'ABIERTO'}
const smsGrupoTime6 = () => { return '*DURANTE'}
const smsGrupoTime7 = () => { return '🔒 *EL GRUPO ESTA CERRADO, SOLO ADMINS PUEDEN ENVIAR MENSAJES*'}
const smsGrupoTime8 = () => { return '🔓 *EL GRUPO ESTA ABIERTO, TODOS PUEDEN ENVIAR MENSAJES*'}
const smsGrupoTime9 = () => { return '🔓 ABRIR GRUPO DURANTE '}
const smsGrupoTime10 = () => { return '🔒 CERRAR GRUPO DURANTE '}
const smsGrupoTime11 = () => { return ' HORA'}
const smsGrupoTime12 = () => { return 'PERMITIR QUE EL GRUPO SE HABRA POR '}
const smsGrupoTime13 = () => { return 'PERMITIR QUE EL GRUPO SE CIERRE POR '}


export default { lenguaje, smsAvisoRG, smsAvisoAG, smsAvisoIIG, smsAvisoFG, smsAvisoMG, smsAvisoEEG, smsAvisoEG, smsRowner, smsOwner, smsMods, smsPremium, smsGroup,
smsPrivate, smsAdmin, smsBotAdmin, smsUnreg, smsRestrict, smsTime, smsUptime, smsVersion, smsTotalUsers, smsMode, smsModePublic, smsModePrivate, smsBanChats, smsBanUsers, 
smsPareja, smsResultPareja, smsSaludo, smsDia, smsTarde, smsTarde2, smsNoche, smsListaMenu, smsLista1, smsLista2, smsLista3, smsLista4, smsLista5, smsLista6, smsLista7, smsLista8, smsLista9, smsLista10,
smsLista11, smsLista12, smsLista13, smsLista14, smsLista15, smsLista16, smsLista17, smsLista18, smsLista19, smsLista20, smsLista21, smsLista22,smsDonar, smsWelcome, smsBye, smsSpromote, smsSdemote, smsSdesc, smsSsubject,
smsSicon, smsSrevoke, smsConexion, smsClearTmp, smsCargando, smspurgeSession, smspurgeOldFiles, smspurgeSessionSB1, smspurgeSessionSB2, smspurgeSessionSB3, smspurgeOldFiles1, smspurgeOldFiles2, smspurgeOldFiles3, smspurgeOldFiles4, smsTextoYT, smsApagar, smsEncender, smsEnlaceTik, smsEnlaceYt, smsEnlaceTel, smsEnlaceFb, smsEnlaceIg, smsEnlaceTw, smsAllAdmin, smsSoloOwner,
smsCont1, smsCont2, smsCont3, smsCont4, smsCont5, smsCont6, smsCont7, smsCont8, smsCont9, smsCont10, smsCont11, smsCont12, smsCont13, smsCont14, smsCont15, smsCont16, smsCont17, smsCont18,
smsCont19, smsCont20, smsCont21, smsTex16, smsBotonM1, smsBotonM3, smsMalError3, smsGrupoTime1, smsGrupoTime2, smsGrupoTime3, smsGrupoTime4, smsGrupoTime5, smsGrupoTime6, smsGrupoTime7, smsGrupoTime8,
smsGrupoTime9, smsGrupoTime10, smsGrupoTime11, smsGrupoTime12, smsGrupoTime13, smsConfi10, smsParaAdmins, smsParaAdYOw, smsParaOw, smsMalused, smsConfi1};
