const lenguaje = () => {
return 'en' } //ENGLISH


//MESSAGE NOTICES
const smsAvisoRG = () => {
return `╰⊱✅⊱ *RESULT* ⊱✅⊱╮\n\n` }
const smsAvisoAG = () => {
return `╰⊱⚠️⊱ *WARNING* ⊱⚠️⊱╮\n\n` }
const smsAvisoIIG = () => {
return `╰⊱❕⊱ *INFORMATION* ⊱❕⊱╮\n\n` }
const smsAvisoFG = () => {
return `╰⊱❌⊱ *ERROR* ⊱❌⊱╮\n\n` }
const smsAvisoMG = () => {
return `╰⊱❗️⊱ *MISUSED ACTION* ⊱❗️⊱╮\n\n` }
const smsAvisoEEG = () => {
return `╰⊱📩⊱ *REPORT* ⊱📩⊱╮\n\n` }
const smsAvisoEG = () => {
return `╰⊱💚⊱ *SUCCESS* ⊱💚⊱╮\n\n` }


//PARAMETERS IN COMMANDS
const smsRowner = () => {
return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡THIS COMMAND ONLY ME AS A BOT CREATOR CAN USE IT!!\`\`\`` }//BOT NUMBER
const smsOwner = () => {
return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡THIS COMMAND ONLY MY CREATOR CAN USE IT!!\`\`\`` }//OWNER
const smsMods = () => {
return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡THIS COMMAND ONLY MODERATORS AND MY CREATOR CAN USE IT!!\`\`\`` }//MODERATORS
const smsPremium = () => {
return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡THIS COMMAND IS ONLY AVAILABLE TO PREMIUM USERS AND MY CREATOR!!\`\`\`` }//PREMIUM USERS
const smsGroup = () => {
return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡THIS COMMAND CAN ONLY BE USED IN GROUPS!!\`\`\`` }//FOR GROUPS
const smsPrivate = () => {
return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡THIS COMMAND CAN ONLY BE USED TO THE PRIVATE!!\`\`\`` }//TO THE PRIVATE
const smsAdmin = () => {
return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡THIS COMMAND IS ONLY FOR ADMINS!!\`\`\`` }//ADMINS
const smsBotAdmin = () => {
return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡I NEED TO BE ADMIN SO YOU CAN USE THIS COMMAND!!\`\`\`` }//BOT WITH ADMIN
const smsUnreg = () => {
return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡YOU NEED TO BE REGISTERED TO USE THIS COMMAND, WRITE #verify TO REGISTER!!\`\`\`` }//VERIFY
const smsRestrict = () => {
return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡THIS COMMAND IS RESTRICTED BY MY CREATOR!!\`\`\`` }//RESTRICT COMMAND


//LIST MENU
const smsTime = () => {
return `Current time`}
const smsUptime = () => {
return `Running During`}
const smsVersion = () => {
return `Version of ${global.packname}`}
const smsTotalUsers = () => {
return `Total Users`}
const smsMode = () => {
return `It's in mode`}
const smsModePublic = () => {
return `PUBLIC`}
const smsModePrivate = () => {
return `PRIVATE`}
const smsBanChats = () => {
return `Banned Chats`}
const smsBanUsers = () => {
return `Banned Users`}
const smsPareja = () => {
return `Couple`}
const smsResultPareja = () => {
return `Single`}
const smsSaludo = () => {
return `👋 HELLO! WELCOME 👋`}
const smsDia = () => {
return `🌇 Good Morning ⛅`}
const smsTarde = () => {
return `🏙️ Good Evening 🌤️`}
const smsTarde2 = () => {
return `🌆 Good Evening 🌥️`}
const smsNoche = () => {
return `🌃 Good Night 💫`}
const smsListaMenu = () => {
return `⊹ MENU LIST ⊹`}
const smsLista1 = () => {
return `🔰 𝐼𝑁𝐹𝑂 𝐷𝑂𝑅𝑅𝐴𝑇-𝐵𝑂𝑇 🔰 `}
const smsLista2 = () => {
return `│🤴│𝐌𝐘 𝐂𝐑𝐄𝐀𝐓𝐎𝐑 𝐍𝐔𝐌𝐁𝐄𝐑`}
const smsLista3 = () => {
return `│🏓│𝐈𝐍𝐅𝐎𝐁𝐎𝐓`}
const smsLista4 = () => {
return `│☄️│𝐅𝐔𝐋𝐋 𝐌𝐄𝐍𝐔`}
const smsLista5 = () => {
return `│🤖│𝐎𝐅𝐅𝐈𝐂𝐈𝐀𝐋 𝐆𝐑𝐎𝐔𝐏`}
const smsLista6 = () => {
return `│🖥️│𝐁𝐄 𝐒𝐔𝐁-𝐁𝐎𝐓`}
const smsLista7 = () => {
return `│🔰│𝐈𝐍𝐒𝐓𝐀𝐋𝐋-𝐃𝐎𝐑𝐑𝐀𝐓-𝐁𝐎𝐓`}
const smsLista8 = () => {
return ` 💲 𝐌𝐄𝐍𝐔 𝐄𝐂𝐎𝐍𝐎𝐌𝐘💲`}
const smsLista9 = () => {
return `🏆 𝐋𝐄𝐀𝐃𝐄𝐑𝐁𝐎𝐀𝐑𝐃`}
const smsLista10 = () => {
return `⛏️ 𝐌𝐈𝐍𝐀𝐑`}
const smsLista11 = () => {
return `👨‍🏭 𝐖𝐎𝐑𝐊`}
const smsLista12 = () => {
return `👜 𝐁𝐀𝐋𝐀𝐍𝐂𝐄`}
const smsLista13 = () => {
return `💰 𝐌𝐄𝐍𝐔 𝐑𝐏𝐆`}
const smsLista14 = () => {
return `💎 𝐁𝐔𝐘 𝐃𝐈𝐀𝐌𝐎𝐍𝐃𝐒`}
const smsLista15 = () => {
return ` 🌟 𝐌𝐄𝐍𝐔𝐒`}
const smsLista16 = () => {
return `📦 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 𝐌𝐄𝐍𝐔 `}
const smsLista17 = () => {
return `🎧 𝐌𝐄𝐍𝐔 𝐀𝐔𝐃𝐈𝐎𝐒`}
const smsLista18 = () => {
return `🎮 𝐌𝐄𝐍𝐔 𝐆𝐀𝐌𝐄𝐒`}
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
return '*╔══════════════*\n*╟❧ @subject*\n*╠══════════════*\n*╟❧ @user*\n*╟❧ 𝚆𝙴𝙻𝙲𝙾𝙼𝙴* \n*║*\n*╟❧ 𝙶𝚁𝙾𝚄𝙿 𝙳𝙴𝚂𝙲𝚁𝙸𝙲𝙿𝚃𝙸𝙾𝙽*\n*╟❧* @desc\n*║*\n*╟❧ 𝙴𝙽𝙹𝙾𝚈 𝚈𝙾𝚄𝚁 𝚂𝚃𝙰𝚈*\n*╚══════════════*'}
const smsBye = () => {
return '╔══════════════*\n*╟❧ @user*\n*╟❧ 𝚂𝙴𝙴 𝚈𝙾𝚄 𝚂𝙾𝙽𝙽  👋🏻* \n*╚══════════════*'}
const smsSpromote = () => {
return '*@user YOU ARE NOW ADMIN IN THIS GROUP!!*'}
const smsSdemote = () => {
return '*@user NO LONGER ADMIN IN THIS GROUP!!*'}
const smsSdesc = () => {
return '*THE NEW DESCRIPTION OF THE GROUP IS:*\n\n@desc'}
const smsSsubject = () => {
return '*THE NEW NAME OF THE GROUP IS:*\n\n@subject'}
const smsSicon = () => {
return '*THE PHOTO OF THIS GROUP WAS CHANGED!!*'}
const smsSrevoke = () => {
return '*NOW THIS IS THE NEW LINK OF THIS GROUP!!*\n\n*@revoke*'}
const smsConexion = () => {
return `\n╭──────────────────────────────✧•°•°···\n│➢ 𝐁𝐎𝐓 𝐂𝐎𝐍𝐍𝐄𝐂𝐓𝐄𝐃 𝐂𝐎𝐑𝐑𝐄𝐂𝐓𝐋𝐘 ☑️\n│❏ 𝐁𝐎𝐓 𝐈𝐍𝐒𝐓𝐀𝐋𝐋𝐄𝐃: 𝐃𝐎𝐑𝐑𝐀𝐓-𝐁𝐎𝐓-𝐌𝐃 ☑️\n╰──────────────────────────────✧•°•°·· ·`}
const smsClearTmp = () => {
return `\n▣════════[ 𝐀𝐔𝐓𝐎 𝐂𝐋𝐄𝐀𝐌 𝐓𝐌𝐏]════════════...\n│\n▣─➢ 𝐁𝐚𝐬𝐮𝐫𝐚 𝐫𝐞𝐦𝐨𝐯𝐞𝐝 ✅\n│\n▣═════════════════════════════════════...`}
const smsCargando = () => {
return `🔄 LOADING...\n`}

//_allantilink.js
const smsTextoYT = () => {
return '🤖 Super DorratBot-MD - WhatsApp '}
const smsApagar = () => {
return '❌ DEACTIVATE'}
const smsEncender = () => {
return '✅ ACTIVATE'}
const smsEnlaceTik = () => {
return `*A BANNED TIKTOK LINK WAS DETECTED IN THIS GROUP*\n\n*I PROCEED TO DELETE YOU*`}
const smsEnlaceYt = () => {
return `*A BANNED YOUTUBE LINK WAS DETECTED IN THIS GROUP*\n\n*I PROCEED TO DELETE YOU*`}
const smsEnlaceTel = () => {
return `*A BANNED TELEGRAM LINK WAS DETECTED IN THIS GROUP*\n\n*I PROCEED TO DELETE YOU*`}
const smsEnlaceFb = () => {
return `*A BANNED FACEBOOK LINK WAS DETECTED IN THIS GROUP*\n\n*I PROCEED TO DELETE YOU*`}
const smsEnlaceIg = () => {
return `*A BANNED INSTAGRAM LINK WAS DETECTED IN THIS GROUP*\n\n*I PROCEED TO DELETE YOU*`}
const smsEnlaceTw = () => {
return `*A BANNED TWITTER LINK WAS DETECTED IN THIS GROUP*\n\n*I PROCEED TO DELETE YOU*`}
const smsAllAdmin = () => {
return `*I NEED TO BE ADMIN TO BE ABLE TO REMOVE INTRUDERS*`}
const smsSoloOwner = () => {
return `*MY CREATOR MUST ACTIVATE THE FUNCTION*\n*#on restrict*`}

//handler.js
const smsCont1 = () => {
return `*🔴 COMMAND FAILING 🔴*`}
const smsCont2 = () => {
return `*⚠️ PLUGIN:*`}
const smsCont3 = () => {
return `*⚠️ USER:*`}
const smsCont4 = () => {
return `*⚠️ COMMAND:*`}
const smsCont5 = () => {
return `*⚠️ ERROR:*`}
const smsCont6 = () => {
return `*❗ REPORT THIS MESSAGE USING THE COMMAND #reporte IN ORDER TO SOLVE IT*`}
const smsCont7 = () => {
return `${global.lenguajeGB['smsAvisoAG']()}*DOESN'T HAVE DIAMONDS!! 💎 YOU CAN GO TO THE STORE WITH THE COMMAND*`}
const smsCont8 = () => {
return ` *DIAMOND 💎 USED*`}
const smsCont9 = () => {
return `${global.lenguajeGB['smsAvisoAG']()}*NEED THE LEVEL ➡️*`}
const smsCont10 = () => {
return `*TO USE THIS COMMAND. YOUR CURRENT LEVEL IS ➡️*`}
const smsCont11 = () => {
return `*UPDATE WITH COMMAND*`}
const smsCont12 = () => {
return `A GREAT GROUP!! 😼`}
const smsCont13 = () => {
return `SOMEONE JOINED!! 🥳`}
const smsCont14 = () => {
return `SOMEONE LEFT!! 🧐`}
const smsCont15 = () => {
return `*HELLO*`}
const smsCont16 = () => {
return `*THE VIDEO CALLS* 📲`}
const smsCont17 = () => {
return `*THE CALLS* 📞`}
const smsCont18 = () => {
return `*THEY ARE NOT AUTHORIZED SO I AM GOING TO BLOCK YOU*\n\n*IF YOU CALLED BY ACCIDENT CONTACT THE PERSON CREATOR OF THIS BOT*`}
const smsCont19 = () => {
return `ANTI DELETE`}
const smsCont20 = () => {
return `*┃✤ Name:*`}
const smsCont21 = () => {
return `*┃✤ Sending the deleted message...*`}

//gc-config_time.js
const smsGrupoTime1 = () => { return '🔓 *_OPEN GROUP IN ONE HOUR_*'}
const smsGrupoTime2 = () => { return '🔒 *_CLOSE GROUP IN ONE HOUR_*'}
const smsGrupoTime3 = () => { return '*GROUP'}
const smsGrupoTime4 = () => { return '*CLOSED'}
const smsGrupoTime5 = () => { return '*OPEN'}
const smsGrupoTime6 = () => { return '*DURING'}
const smsGrupoTime7 = () => { return '🔒 *THE GROUP IS CLOSED, ONLY ADMINS CAN SEND MESSAGES*'}
const smsGrupoTime8 = () => { return '🔓 *THE GROUP IS OPEN, EVERYONE CAN SEND MESSAGES*'}

export default { lenguaje, smsAvisoRG, smsAvisoAG, smsAvisoIIG, smsAvisoFG, smsAvisoMG, smsAvisoEEG, smsAvisoEG, smsRowner, smsOwner, smsMods, smsPremium, smsGroup,
smsPrivate, smsAdmin, smsBotAdmin, smsUnreg, smsRestrict, smsTime, smsUptime, smsVersion, smsTotalUsers, smsMode, smsModePublic, smsModePrivate, smsBanChats, smsBanUsers, 
smsPareja, smsResultPareja, smsSaludo, smsDia, smsTarde, smsTarde2, smsNoche, smsListaMenu, smsLista1, smsLista2, smsLista3, smsLista4, smsLista5, smsLista6, smsLista7, smsLista8, smsLista9, smsLista10,
smsLista11, smsLista12, smsLista13, smsLista14, smsLista15, smsLista16, smsLista17, smsLista18, smsLista19, smsLista20, smsLista21, smsLista22, smsWelcome, smsBye, smsSpromote, smsSdemote, smsSdesc, smsSsubject,
smsSicon, smsSrevoke, smsConexion, smsClearTmp, smsCargando, smsTextoYT, smsApagar, smsEncender, smsEnlaceTik, smsEnlaceYt, smsEnlaceTel, smsEnlaceFb, smsEnlaceIg, smsEnlaceTw, smsAllAdmin, smsSoloOwner,
smsCont1, smsCont2, smsCont3, smsCont4, smsCont5, smsCont6, smsCont7, smsCont8, smsCont9, smsCont10, smsCont11, smsCont12, smsCont13, smsCont14, smsCont15, smsCont16, smsCont17, smsCont18,
smsCont19, smsCont20, smsCont21, smsGrupoTime1, smsGrupoTime2, smsGrupoTime3, smsGrupoTime4, smsGrupoTime5, smsGrupoTime6, smsGrupoTime7, smsGrupoTime8};
