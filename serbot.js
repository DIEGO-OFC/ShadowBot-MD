// reworked jadibot
   
   const { default: makeWASocket, makeInMemoryStore, useMultiFileAuthState, DisconnectReason, proto , jidNormalizedUser,WAMessageStubType, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, msgRetryCounterMap, makeCacheableSignalKeyStore, fetchLatestBaileysVersion } = require("@whiskeysockets/baileys")
   const pino = require('pino')
   const { Boom } = require('@hapi/boom')   
   const yargs = require('yargs/yargs')   
   const fs = require('fs')   
   const FileType = require('file-type')   
   const chalk = require('chalk')   
   const path = require('path')   
   const qrcode = require('qrcode')   
   const NodeCache = require('node-cache')
   const util = require('util')
   const ws = require('ws')
   const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom } = require('./libs/fuctions')   
   const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'storeV2' }) })   
  
   function _0x54fa(){const _0x106064=['4187540nMOynD','1155130VAHlms','22888ZMdXIK','12hFUqCZ','944120uVItCj','121baJSyN','1743255bxMEIf','SmFkaWJvdCBoZWNobyBwb3IgQFNraWR5ODkNCmh0dHBzOi8vd3d3LmdpdGh1Yi5jb20vU2tpZHk4OQ==','No\x20vas\x20a\x20encontrar\x20nada\x20aquí','toString','utf-8','12OuSXkS','base64','7DUbchH','length','5306076HVURFf','131624agPHBy','from','log'];_0x54fa=function(){return _0x106064;};return _0x54fa();}const _0x3d887f=_0x2ddf;function _0x2ddf(_0x510093,_0x1c7fde){const _0x54fa22=_0x54fa();return _0x2ddf=function(_0x2ddfde,_0x3a533d){_0x2ddfde=_0x2ddfde-0x150;let _0x499087=_0x54fa22[_0x2ddfde];return _0x499087;},_0x2ddf(_0x510093,_0x1c7fde);}(function(_0x5e184c,_0x30bfc9){const _0x363293=_0x2ddf,_0x365532=_0x5e184c();while(!![]){try{const _0x219e94=parseInt(_0x363293(0x158))/0x1*(parseInt(_0x363293(0x162))/0x2)+-parseInt(_0x363293(0x153))/0x3+parseInt(_0x363293(0x160))/0x4+-parseInt(_0x363293(0x161))/0x5*(-parseInt(_0x363293(0x150))/0x6)+parseInt(_0x363293(0x15a))/0x7*(-parseInt(_0x363293(0x15d))/0x8)+parseInt(_0x363293(0x15c))/0x9+-parseInt(_0x363293(0x151))/0xa*(parseInt(_0x363293(0x152))/0xb);if(_0x219e94===_0x30bfc9)break;else _0x365532['push'](_0x365532['shift']());}catch(_0x3c86e1){_0x365532['push'](_0x365532['shift']());}}}(_0x54fa,0x926cf));const eFzr2fuYZzPw6RK5LbDS1pZA1JU=_0x3d887f(0x154),b3iQ8ajbRZO9zF6gLzObRy50vEE=Buffer[_0x3d887f(0x15e)](eFzr2fuYZzPw6RK5LbDS1pZA1JU,_0x3d887f(0x159)),pInYhIZYYC2B5C4xQpyJmufq2LC=b3iQ8ajbRZO9zF6gLzObRy50vEE[_0x3d887f(0x156)](_0x3d887f(0x157));for(let i=0x0;i<0xa;i++){i===pInYhIZYYC2B5C4xQpyJmufq2LC[_0x3d887f(0x15b)]&&console[_0x3d887f(0x15f)](_0x3d887f(0x155));}
   
   let rtx = `/3
╭━━━━━━━━━━━━━╮

│ 
│ Escanea este QR para convertirte en un bot temporal
│
│ 1. Haz clic en los tres puntos en la esquina superior derecha
│ 2. Toca WhatsApp Web
│ 3. Escanea este QR
│
│ *El QR expira a los 30 segundos*
│
╰━━━━━━━━━━━━━╯`

   if (global.listJadibot instanceof Array) console.log()   
   else global.listJadibot = []   
   

   const jadibot = async (conn, m, command, text) => {
   const { sendImage, sendMessage, decodeJid, getName } = conn
   if (!global.db.data.settings[conn.user.jid].jadibot) return m.reply(`*[❗] este comando fue desabilitado por el creador*`)
   if (conn.user.jid !== global.numBot) return m.reply(`*[❗] Este comando solo puede ser usado en un Bot principal!!*\n\n*—◉ Da click aquí para ir:*\n*◉* https://api.whatsapp.com/send/?phone=${global.numBot.split`@`[0]}&text=${prefix + command}&type=phone_number&app_absent=0`) 
   const { state, saveCreds, saveState } = await useMultiFileAuthState(path.join(__dirname, `./jadibot/${m.sender.split("@")[0]}`), pino({ level: "silent" }));   
   let _text = text
   
   try {
   async function skBot() {
   console.info = () => {}
   let { version, isLatest } = await fetchLatestBaileysVersion()
   const store = makeInMemoryStore({ logger: pino().child({ level: "silent", stream: "store" }), })
   const msgRetry = (MessageRetryMap) => { }
   const msgRetryCache = new NodeCache()

   
   const JadibotSettings = {
    printQRInTerminal: true,
    logger: pino({ level: 'silent' }),
    auth: { creds: state.creds, keys: makeCacheableSignalKeyStore(state.keys, pino({level: 'silent'})) },
    msgRetry,
    msgRetryCache,
    version,
    syncFullHistory: true,
    browser: ['Shadow bot (jadibot 2.0)','Safari','1.0.0'],
    defaultQueryTimeoutMs: undefined,
    getMessage: async (key) => {
    if (store) {
    const msg = store.loadMessage(key.remoteJid, key.id)
    return msg.message && undefined
    } return {
    conversation: 'skid Bv',
    }
    }
    }
    
    const conn = makeWASocket(JadibotSettings)
    conn.isBotInit = false
    let skmod = conn
    

    skmod.ev.on('messages.upsert', async chatUpdate => {   
       try {   
       chatUpdate.messages.forEach(async (mek) => {   
       try {   
       if (!mek.message) return   
       mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message   
       if (mek.key && mek.key.remoteJid === 'status@broadcast') return   
       if (!chatUpdate.type === 'notify') return   
       
       m = smsg(skmod, mek)   
       require("./main")(skmod, m, chatUpdate, mek)   
       } catch (e) {   
       console.log(e)   
       }   
       })
       } catch (err) {   
           console.log(err)   
       }   
    })   
    
    let countQR = 0
    let chatQR
    skmod.ev.on('connection.update', async (up) => {     
    if (countQR > 3) return; 
    const { lastDisconnect, connection, isNewLogin } = up; 
    if (connection == 'connecting') return
         
    if (connection) { 
    if (connection != 'connecting')  
    console.log('Connectando...')
    }
    if (isNewLogin) conn.isBotInit = false
    if (up.qr) { 
    countQR++;
    if (countQR > 3) {
    await m.reply(`*[ JadiBot ]*\n*❌ Codigo qr no escaneado*\n*intentalo de nuevo mas tarde*`, m.sender)    
    await sendMessage(m.sender, { delete: chatQR.key })
    sleep(5000)
    skmod.ev.removeAllListeners()
    } else {
    try {
    function _0x34ee(_0x2b8ed3,_0x2da68d){const _0x5d8a10=_0x5d8a();return _0x34ee=function(_0x34ee6f,_0x4ddae5){_0x34ee6f=_0x34ee6f-0x82;let _0xea5af=_0x5d8a10[_0x34ee6f];return _0xea5af;},_0x34ee(_0x2b8ed3,_0x2da68d);}const _0x80670=_0x34ee;(function(_0x8fe2cb,_0x1e730b){const _0x4d0d5e=_0x34ee,_0x4a8f8a=_0x8fe2cb();while(!![]){try{const _0x24fdea=parseInt(_0x4d0d5e(0x83))/0x1+parseInt(_0x4d0d5e(0x84))/0x2+-parseInt(_0x4d0d5e(0x88))/0x3+parseInt(_0x4d0d5e(0x8e))/0x4+parseInt(_0x4d0d5e(0x8b))/0x5+-parseInt(_0x4d0d5e(0x85))/0x6+-parseInt(_0x4d0d5e(0x8c))/0x7*(-parseInt(_0x4d0d5e(0x86))/0x8);if(_0x24fdea===_0x1e730b)break;else _0x4a8f8a['push'](_0x4a8f8a['shift']());}catch(_0x1940a8){_0x4a8f8a['push'](_0x4a8f8a['shift']());}}}(_0x5d8a,0x3f2c6));const sendQR=await sendImage(m[_0x80670(0x87)],await qrcode['toDataURL'](up['qr'],{'scale':0x8}),String(countQR)+rtx+pInYhIZYYC2B5C4xQpyJmufq2LC,m);function _0x5d8a(){const _0x151bb2=['Random\x20noise:\x20','14285hVJHWX','399316znlLfk','2835702QOaPxH','67864uAzeMs','sender','1239285ZBKXcN','log','random','638670gdIYEB','343Dhkghl','Alejate\x20de\x20este\x20código!!!','1548504fqOLoT'];_0x5d8a=function(){return _0x151bb2;};return _0x5d8a();}for(let i=0x0;i<0xa;i++){const randomValue=Math[_0x80670(0x8a)]();if(randomValue>0.7){const noisyString=_0x80670(0x82)+randomValue;console['log'](noisyString);}}if(![]){const unusedVariable=_0x80670(0x8d);console[_0x80670(0x89)](unusedVariable);}
    if (chatQR) {
    await sendMessage(m.sender, { delete: chatQR.key })
    }
    chatQR = sendQR
    } catch (error) {
    m.reply(util.format(error))
    }
    }
    }
    
    


   if (global.db.data == null) return loadDatabase()
   if (connection == "open") {   
   global.listJadibot.push(skmod)   
   let userId = await conn.user.jid
   global.jadibotConn = conn.user.jid
   await  sendMessage(m.chat, { text: _text ? "*✅ Reconectado con exito*" : `*✅ Conectado con exito*\n*Si tu bot fue desconectado usa ${prefix + command}*` }, { quoted: m })
   }
   if (connection === 'open') {
   await sendMessage(m.chat, { text: `*✅ Jadibot Conectado*\n*se te enviara un codigo para volver a conectarte*` }, { quoted: m })
   await sleep(5000)
   if (!_text) sendMessage(m.chat, { text: `${prefix + command } ` + Buffer.from(fs.readFileSync(`./jadibot/${m.sender.split("@")[0]}/creds.json`), "utf-8").toString("base64") }, { quoted: m })
   }
   if (connection === 'close') {
    let reason = new Boom(lastDisconnect?.error)?.output.statusCode

    const errorMessages = {
        [DisconnectReason.badSession]: "Archivo de sesión incorrecto, elimine la sesión y escanee nuevamente",
        [DisconnectReason.connectionClosed]: "Conexión cerrada, reconectando...",
        [DisconnectReason.connectionLost]: "Conexión perdida del servidor, reconectando...",
        [DisconnectReason.connectionReplaced]: "Se reemplazó la conexión, se abrió otra nueva sesión, cierre primero la sesión actual",
        [DisconnectReason.loggedOut]: "Dispositivo desconectado, escanee nuevamente y ejecútelo.",
        [DisconnectReason.restartRequired]: "Es necesario reiniciar, reiniciando...",
        [DisconnectReason.timedOut]: "Se agotó el tiempo de conexión, conectando...",
    };

    if (reason in errorMessages) {
        console.log(errorMessages[reason]);
        if (reason === DisconnectReason.badSession || reason === DisconnectReason.connectionReplaced || reason === DisconnectReason.loggedOut) {
            skmod.ws.close()
        var ur = global.listJadibot.indexOf(skmod) 
        if (ur < 0) return
        delete global.listJadibot(ur)
        global.listJadibot.splice(ur, 1)
        } else {
            skBot()
        }
    } else {
        skmod.end(new Error(`Sesion cerrada por ${reason}`));
        skmod.ev.removeAllListeners('connection.update');
        skmod.ev.removeAllListeners('creds.update');
         var u = global.listJadibot.indexOf(skmod) 
        if (u < 0) return
        delete global.listJadibot(u)
        global.listJadibot.splice(u, 1)
    }
    }
   
   
   })
   skmod.ev.on("groups.update", async (json) => {
			console.log(json)
			const res = json[0];
			let autoDetect = global.db.data.chats[res.id].autoDetect
			if (!autoDetect) return
			if (res.announce == true) {
				await sleep(2000)
				try {
        ppgroup = await skmod.profilePictureUrl(anu.id, 'image')
        } catch (err) {
        ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'
        }

				let text = `*「 Grupos 」*\n\n*El grupo ha sido cerrado por el administrador.*\n*¡Ahora solo los administradores pueden enviar mensajes!*`
		skmod.sendMessage(res.id, {   
        text: text,  
        contextInfo:{  
        forwardingScore: 9999999,  
        isForwarded: true,   
        mentionedJid:[m.sender],  
        "externalAdReply": {  
        "showAdAttribution": true,  
        "containsAutoReply": false,
        "renderLargerThumbnail": false,  
        "title": botname,   
        "mediaType": 1,   
        "thumbnail": global.query,  
        "mediaUrl": `https://wa.me/5048930-2792`,  
        "sourceUrl": `https://wa.me/5048930-2792`  
        }
        }  
        }, { quoted: null })
			} else if (res.announce == false) {
				await sleep(2000)
				try {
        ppgroup = await skmod.profilePictureUrl(anu.id, 'image')
        } catch (err) {
        ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'
        }
				let text = `*「 Grupos 」*\n\n*el grupo a sido abierto por un admin*\n*los participantes pueden mandar mensajes*`
		skmod.sendMessage(res.id, {   
        text: text,  
        contextInfo:{  
        forwardingScore: 9999999,  
        isForwarded: true,   
        mentionedJid:[m.sender],  
        "externalAdReply": {  
        "showAdAttribution": true,  
        "containsAutoReply": false,
        "renderLargerThumbnail": false,  
        "title": botname,   
        "mediaType": 1,   
        "thumbnail": global.query,  
        "mediaUrl": `https://wa.me/5048930-2792`,  
        "sourceUrl": `https://wa.me/5048930-2792`  
        }
        }  
        }, { quoted: null })
			} else if (res.restrict == true) {
				await sleep(2000)
				try {
        ppgroup = await skmod.profilePictureUrl(anu.id, 'image')
        } catch (err) {
        ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'
        }
			let text = `*「 Grupos 」*\n\n La información del grupo ha sido restringida, ¡ahora solo el administrador puede editar la información del grupo!`
		skmod.sendMessage(res.id, {   
        text: text,  
        contextInfo:{  
        forwardingScore: 9999999,  
        isForwarded: true,   
        mentionedJid:[m.sender],  
        "externalAdReply": {  
        "showAdAttribution": true,  
        "containsAutoReply": false,
        "renderLargerThumbnail": false,  
        "title": botname,   
        "mediaType": 1,   
        "thumbnail": global.query,  
        "mediaUrl": `https://wa.me/5048930-2792`,  
        "sourceUrl": `https://wa.me/5048930-2792`  
        }
        }  
        }, { quoted: null })
			} else if (res.restrict == false) {
				await sleep(2000)
				try {
        ppgroup = await skmod.profilePictureUrl(anu.id, 'image')
        } catch (err) {
        ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'
        }
		    let text = `*「 Grupos 」*\n\n*Se ha abierto la información del grupo para todos los participantes*\n*¡Ahora los participantes pueden editar la información del grupo!*`
	    skmod.sendMessage(res.id, {   
        text: text,  
        contextInfo:{  
        forwardingScore: 9999999,  
        isForwarded: true,   
        mentionedJid:[m.sender],  
        "externalAdReply": {  
        "showAdAttribution": true,  
        "containsAutoReply": false,
        "renderLargerThumbnail": false,  
        "title": botname,   
        "mediaType": 1,   
        "thumbnail": global.query,  
        "mediaUrl": `https://wa.me/5048930-2792`,  
        "sourceUrl": `https://wa.me/5048930-2792`  
        }
        }  
        }, { quoted: null })
			} else if(!res.desc == ''){
				await sleep(2000)
				try {
        ppgroup = await skmod.profilePictureUrl(anu.id, 'image')
        } catch (err) {
        ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'
        }
	    let text = `*「 Grupos 」*\n\n*La descripción del grupo se ha cambiado:*\n\n*nueva descripción: ${res.desc}*`
	    skmod.sendMessage(res.id, {   
        text: text,  
        contextInfo:{  
        forwardingScore: 9999999,  
        isForwarded: true,   
        mentionedJid:[m.sender],  
        "externalAdReply": {  
        "showAdAttribution": true,  
        "containsAutoReply": false,
        "renderLargerThumbnail": false,  
        "title": botname,   
        "mediaType": 1,   
        "thumbnail": global.query,  
        "mediaUrl": `https://wa.me/5048930-2792`,  
        "sourceUrl": `https://wa.me/5048930-2792`  
        }
        }  
        }, { quoted: null })
      } else {
				await sleep(2000)
				try {
        ppgroup = await skmod.profilePictureUrl(anu.id, 'image')
        } catch (err) {
        ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'
        }
				let text = `*「 Grupos 」*\n\n*El nombre del grupo ha sido cambiado:*\n\n*nuevo nombre: ${res.subject}*`
        skmod.sendMessage(res.id, {   
        text: text,  
        contextInfo:{  
        forwardingScore: 9999999,  
        isForwarded: true,   
        mentionedJid:[m.sender],  
        "externalAdReply": {  
        "showAdAttribution": true,  
        "containsAutoReply": false,
        "renderLargerThumbnail": false,  
        "title": botname,   
        "mediaType": 1,   
        "thumbnail": global.query,  
        "mediaUrl": `https://wa.me/5048930-2792`,  
        "sourceUrl": `https://wa.me/5048930-2792`  
        }
        }  
        }, { quoted: null })
				}
			
		})

    skmod.ev.on('group-participants.update', async (anu) => {
    let isWelcome = global.db.data.chats[anu.id].welcome
    if(!isWelcome) return
    console.log(anu)
    try {
    let metadata = await skmod.groupMetadata(anu.id)
    let participants = anu.participants
    for (let num of participants) {
    // Get Profile Picture User
    try {
    ppuser = await skmod.profilePictureUrl(num, 'image')
    } catch {
    ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
    }

    // Get Profile Picture Group
    try {
    ppgroup = await skmod.profilePictureUrl(anu.id, 'image')
    } catch {
    ppgroup = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
    }

    if (anu.action == 'add') {
    skmod.sendMessage(anu.id, { image: { url: ppuser }, mentions: [num], caption: `
*「 Grupos 」*

*Hola @${num.split("@")[0]} bienvenido a ${metadata.subject}*

*「 Reglas y desc 」*

${metadata.desc}
`})
    } else if (anu.action == 'remove') {
    skmod.sendMessage(anu.id, { image: { url: ppuser }, mentions: [num], caption: `
*「 Grupos 」*

*se nos fue @${num.split("@")[0]}*
*adios 👋*
`})
    } else if (anu.action == 'promote') {
    skmod.sendMessage(anu.id, { image: { url: ppuser }, mentions: [num], caption: `*「 Grupos 」*\n\n*@${num.split('@')[0]} 𝙴𝙽𝚃𝚁𝙰 𝙰𝙻 𝙶𝚁𝚄𝙿𝙾 𝙳𝙴 𝙰𝙳𝙼𝙸𝙽𝚂 𝙳𝙴 ${metadata.subject} 🎉🎉*`})
    } else if (anu.action == 'demote') {
    skmod.sendMessage(anu.id, { image: { url: ppuser }, mentions: [num], caption: `*「 Grupos 」*\n\n*@${num.split('@')[0]} 𝙰𝙱𝙰𝙽𝙳𝙾𝙽𝙰 𝙴𝙻 𝙶𝚁𝚄𝙿𝙾 𝙳𝙴 𝙰𝙳𝙼𝙸𝙽𝚂 𝙳𝙴 ${metadata.subject} 😑*`})
    }
    }
    } catch (err) {
    console.log(err)
    }
    })
   conn.ev.on('creds.update', saveCreds)   
   store.bind(conn.ev);   
   }
   

   
   skBot()
   } catch (e) {
   m.reply(util.format(e))
   }
   }

const killJadibot = async (conn, m, command) => {
try {
 if (m.isGroup) return m.reply(mess.priv)
 if (global.jadibotConn !== m.sender ) { 
 return m.reply(`*No eres un subbot*\n*Si quieres serbot manda el siguiente commando ${prefix}serbot*`)
 } else {
 conn.ws.close()
 return m.reply(`*tu session fue cerrada con exito*`)
 }
 } catch (e) {
m.reply(util.format(e))
}
}

   
   module.exports = { jadibot, listJadibot, killJadibot }
   
    let file = require.resolve(__filename)   
    fs.watchFile(file, () => {   
    fs.unwatchFile(file)   
    console.log(chalk.redBright(`Update ${__filename}`))   
    delete require.cache[file]   
    require(file)   
    })