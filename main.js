process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0"; 
process.on('uncaughtException', console.error);
import "./configuracion.js";
import "./rpg.js";
import {createRequire} from "module";
import path, {join} from "path";
import {fileURLToPath, pathToFileURL} from "url";
import {platform} from "process";
import * as ws from "ws";
import {readdirSync, statSync, unlinkSync, existsSync, readFileSync, rmSync, watch} from "fs";
import yargs from "yargs";
import {spawn} from "child_process";
import lodash from "lodash";
import chalk from "chalk";
import syntaxerror from "syntax-error";
import {tmpdir} from "os";
import readline from "readline"
import parsePhoneNumber from "awesome-phonenumber"
import {format} from "util";
import P from "pino";
import Pino from "pino";
import {Boom} from '@hapi/boom';
import {makeWaSocket, protoType, serialize} from "./lib/simple.js";
import {Low, JSONFile} from "lowdb";
import {mongoDB, mongoDBV2} from "./lib/mongoDB.js";
//import store from "./lib/store.js"
//const {proto} = (await import("@whiskeysockets/baileys")).default;
const {    DisconnectReason, 
     useMultiFileAuthState, 
     MessageRetryMap, 
     fetchLatestBaileysVersion, 
     makeCacheableSignalKeyStore, 
     makeInMemoryStore, 
     proto, 
     jidNormalizedUser, 
     PHONENUMBER_MCC, 
     Browsers} = await import("@whiskeysockets/baileys")
//const {CONNECTING} = ws;
//const {chain} = lodash;
//const PORT = process.env.PORT || process.env.SERVER_PORT || 3000;

global.__filename = function filename(pathURL = import.meta.url, rmPrefix = platform !== "win32") {
  return rmPrefix ? (/file:\/\/\//.test(pathURL) ? fileURLToPath(pathURL) : pathURL) : pathToFileURL(pathURL).toString();
};
global.__dirname = function dirname(pathURL) {
  return path.dirname(global.__filename(pathURL, true));
};
global.__require = function require(dir = import.meta.url) {
  return createRequire(dir);
};
/*ADAPTADO POR https://github.com/DIEGO-OFC


:V**********************/

const store = makeInMemoryStore({ 
     logger: Pino().child({ 
         level: 'fatal', 
         stream: 'store' 
     }) 
 }) 
  
 const pairingCode = process.argv.includes("--pairing-code") 
 const useMobile = process.argv.includes("--mobile") 
 const useQr = process.argv.includes("--qr") 
  
 const rl = readline.createInterface({ 
     input: process.stdin, 
     output: process.stdout 
 }) 
 const question = (text) => new Promise((resolve) => rl.question(text, resolve)) 
 import NodeCache from "node-cache" 
 const msgRetryCounterCache = new NodeCache() 
 const { 
     CONNECTING 
 } = ws 
 const { 
     chain 
 } = lodash 
 const PORT = process.env.PORT || process.env.SERVER_PORT || 3000 
  
 protoType() 
 serialize() 
  
 global.API = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ 
     ...query, 
     ...(apikeyqueryname ? { 
         [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name] 
     } : {}) 
 })) : '') 
 global.timestamp = { 
     start: new Date 
 } 
  
 const __dirname = global.__dirname(import.meta.url) 
 global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse()) 
 const symbolRegex = /^[^\w\s\d]/; 
 const emojiRegex = /^(\p{Emoji}|[\uFE0F\u200D])/u; 
 global.db = new Low(/https?:\/\//.test(opts['db'] || '') ? new cloudDBAdapter(opts['db']) : new JSONFile(`${opts._[0] ? opts._[0] + '_' : ''}database.json`)) 
  
  
 global.DATABASE = global.db 
 global.loadDatabase = async function loadDatabase() { 
     if (global.db.READ) return new Promise((resolve) => setInterval(async function() { 
         if (!global.db.READ) { 
             clearInterval(this) 
             resolve(global.db.data == null ? global.loadDatabase() : global.db.data) 
         } 
     }, 1 * 1000)) 
     if (global.db.data !== null) return 
     global.db.READ = true 
     await global.db.read().catch(console.error) 
     global.db.READ = null 
     global.db.data = { 
         users: {}, 
         chats: {}, 
         stats: {}, 
         msgs: {}, 
         sticker: {}, 
         settings: {}, 
         ...(global.db.data || {}) 
     } 
     global.db.chain = chain(global.db.data) 
 } 
 loadDatabase() 
  
 global.authFile = `ShadowSession`; 
 const { 
     state, 
     saveState, 
     saveCreds 
 } = await useMultiFileAuthState(global.authFile); 
 const msgRetryCounterMap = (MessageRetryMap) => {}; 
 const { 
     version 
 } = await fetchLatestBaileysVersion(); 
  
 if (!pairingCode && !useMobile && !useQr) { 
     const title = "INFO"; 
     const message = "Please use one of the options: --pairing-code, --mobile, --qr"; 
     const boxWidth = 40; 
     const horizontalLine = chalk.redBright("─".repeat(boxWidth)); 
  
     const formatText = (text, bgColor, textColor) => chalk[bgColor](chalk[textColor](text.padStart(boxWidth / 2 + text.length / 2).padEnd(boxWidth))); 
  
     console.log(`╭${horizontalLine}╮ 
 |${formatText(title, 'bgRed', 'white')}| 
 ├${horizontalLine}┤ 
 |${formatText(message, 'bgWhite', 'red')}| 
 ╰${horizontalLine}╯`); 
 } 
  
 const connectionOptions = { 
     ...(!pairingCode && !useMobile && !useQr && { 
         printQRInTerminal: false, 
         mobile: false 
     }), 
     ...(pairingCode && { 
         printQRInTerminal: !pairingCode 
     }), 
     ...(useMobile && { 
         mobile: true 
     }), 
     ...(useQr && { 
         printQRInTerminal: true 
     }), 
     patchMessageBeforeSending: (message) => { 
         const requiresPatch = !!(message.buttonsMessage || message.templateMessage || message.listMessage); 
         if (requiresPatch) { 
             message = { 
                 viewOnceMessage: { 
                     message: { 
                         messageContextInfo: { 
                             deviceListMetadataVersion: 2, 
                             deviceListMetadata: {} 
                         }, 
                         ...message 
                     } 
                 } 
             }; 
         } 
         return message; 
     }, 
     msgRetryCounterMap, 
     logger: Pino({ 
         level: 'fatal' 
     }), 
     auth: { 
         creds: state.creds, 
         keys: makeCacheableSignalKeyStore(state.keys, Pino().child({ 
             level: 'fatal', 
             stream: 'store' 
         })), 
     }, 
     browser: Browsers.macOS('Desktop'), 
     version, 
     getMessage: async (key) => { 
         let jid = jidNormalizedUser(key.remoteJid) 
         let msg = await store.loadMessage(jid, key.id) 
         return msg?.message || "" 
     }, 
     msgRetryCounterCache, 
     connectTimeoutMs: 60_000, 
     defaultQueryTimeoutMs: 0, 
     keepAliveIntervalMs: 10000, 
     emitOwnEvents: true, 
     fireInitQueries: true, 
     generateHighQualityLinkPreview: true, 
     syncFullHistory: true, 
     markOnlineOnConnect: true 
 }; 
  
 global.conn = makeWaSocket(connectionOptions); 
 store.bind(conn.ev) 
 conn.isInit = false 
  
 if (pairingCode && !conn.authState.creds.registered) { 
     if (useMobile) conn.logger.error('Cannot use pairing code with mobile api') 
     console.log(chalk.cyan('╭──────────────────────────────────────···')); 
     console.log(`📨 ${chalk.redBright('Please type your WhatsApp number')}:`); 
     console.log(chalk.cyan('├──────────────────────────────────────···')); 
     let phoneNumber = await question(`   ${chalk.cyan('- Number')}: `); 
     console.log(chalk.cyan('╰──────────────────────────────────────···')); 
     phoneNumber = phoneNumber.replace(/[^0-9]/g, '') 
     if (!Object.keys(PHONENUMBER_MCC).some(v => phoneNumber.startsWith(v))) { 
         console.log(chalk.cyan('╭─────────────────────────────────────────────────···')); 
         console.log(`💬 ${chalk.redBright("Start with your country's WhatsApp code, Example 62xxx")}:`); 
         console.log(chalk.cyan('╰─────────────────────────────────────────────────···')); 
         console.log(chalk.cyan('╭──────────────────────────────────────···')); 
         console.log(`📨 ${chalk.redBright('Please type your WhatsApp number')}:`); 
         console.log(chalk.cyan('├──────────────────────────────────────···')); 
         phoneNumber = await question(`   ${chalk.cyan('- Number')}: `); 
         console.log(chalk.cyan('╰──────────────────────────────────────···')); 
         phoneNumber = phoneNumber.replace(/[^0-9]/g, '') 
     } 
     let code = await conn.requestPairingCode(phoneNumber) 
     code = code?.match(/.{1,4}/g)?.join("-") || code 
     console.log(chalk.cyan('╭──────────────────────────────────────···')); 
     console.log(` 💻 ${chalk.redBright('Your Pairing Code')}:`); 
     console.log(chalk.cyan('├──────────────────────────────────────···')); 
     console.log(`   ${chalk.cyan('- Code')}: ${code}`); 
     console.log(chalk.cyan('╰──────────────────────────────────────···')); 
     rl.close() 
 } 
  
 if (useMobile && !conn.authState.creds.registered) { 
     const { 
         registration 
     } = conn.authState.creds || { 
         registration: {} 
     } 
     if (!registration.phoneNumber) { 
         console.log(chalk.cyan('╭──────────────────────────────────────···')); 
         console.log(`📨 ${chalk.redBright('Please type your WhatsApp number')}:`); 
         console.log(chalk.cyan('├──────────────────────────────────────···')); 
         let phoneNumber = await question(`   ${chalk.cyan('- Number')}: `); 
         console.log(chalk.cyan('╰──────────────────────────────────────···')); 
         phoneNumber = phoneNumber.replace(/[^0-9]/g, '') 
         if (!Object.keys(PHONENUMBER_MCC).some(v => phoneNumber.startsWith(v))) { 
             console.log(chalk.cyan('╭─────────────────────────────────────────────────···')); 
             console.log(`💬 ${chalk.redBright("Start with your country's WhatsApp code, Example 62xxx")}:`); 
             console.log(chalk.cyan('╰─────────────────────────────────────────────────···')); 
             console.log(chalk.cyan('╭──────────────────────────────────────···')); 
             console.log(`📨 ${chalk.redBright('Please type your WhatsApp number')}:`); 
             console.log(chalk.cyan('├──────────────────────────────────────···')); 
             phoneNumber = await question(`   ${chalk.cyan('- Number')}: `); 
             console.log(chalk.cyan('╰──────────────────────────────────────···')); 
             phoneNumber = phoneNumber.replace(/[^0-9]/g, '') 
         } 
         registration.phoneNumber = "+" + phoneNumber 
     } 
  
     const phoneNumber = parsePhoneNumber(registration.phoneNumber) 
     if (!phoneNumber.isValid()) conn.logger.error('Invalid phone number: ' + registration.phoneNumber) 
     registration.phoneNumber = phoneNumber.format("E.164") 
     registration.phoneNumberCountryCode = phoneNumber.countryCallingCode 
     registration.phoneNumberNationalNumber = phoneNumber.nationalNumber 
     const mcc = PHONENUMBER_MCC[phoneNumber.countryCallingCode] 
     registration.phoneNumberMobileCountryCode = mcc 
     async function enterCode() { 
         try { 
             console.log(chalk.cyan('╭──────────────────────────────────────···')); 
             console.log(`📨 ${chalk.redBright('Please Enter Your OTP Code')}:`); 
             console.log(chalk.cyan('├──────────────────────────────────────···')); 
             const code = await question(`   ${chalk.cyan('- Code')}: `); 
             console.log(chalk.cyan('╰──────────────────────────────────────···')); 
             const response = await conn.register(code.replace(/[^0-9]/g, '').trim().toLowerCase()) 
             console.log(chalk.cyan('╭─────────────────────────────────────────────────···')); 
             console.log(`💬 ${chalk.redBright("Successfully registered your phone number.")}`); 
             console.log(chalk.cyan('╰─────────────────────────────────────────────────···')); 
             console.log(response) 
             rl.close() 
         } catch (error) { 
             conn.logger.error('Failed to register your phone number. Please try again.\n', error) 
             await askOTP() 
         } 
     } 
  
     async function askOTP() { 
         console.log(chalk.cyan('╭──────────────────────────────────────···')); 
         console.log(`📨 ${chalk.redBright('What method do you want to use? "sms" or "voice"')}`); 
         console.log(chalk.cyan('├──────────────────────────────────────···')); 
         let code = await question(`   ${chalk.cyan('- Method')}: `); 
         console.log(chalk.cyan('╰──────────────────────────────────────···')); 
         code = code.replace(/["']/g, '').trim().toLowerCase() 
         if (code !== 'sms' && code !== 'voice') return await askOTP() 
         registration.method = code 
         try { 
             await conn.requestRegistrationCode(registration) 
             await enterCode() 
         } catch (error) { 
             conn.logger.error('Failed to request registration code. Please try again.\n', error) 
             await askOTP() 
         } 
     } 
     await askOTP() 
 } 
 

if (!opts["test"]) {
  if (global.db)
    setInterval(async () => {
      if (global.db.data) await global.db.write();
      if (opts["autocleartmp"] && (global.support || {}).find)
        (tmp = [os.tmpdir(), "tmp"]), tmp.forEach((filename) => cp.spawn("find", [filename, "-amin", "3", "-type", "f", "-delete"]));
    }, 30 * 1000);
}

if (opts["server"]) (await import("./server.js")).default(global.conn, PORT);

function clearTmp() {
  const tmp = [tmpdir(), join(__dirname, './tmp')];
  const filename = [];
  tmp.forEach((dirname) => readdirSync(dirname).forEach((file) => filename.push(join(dirname, file))));
  return filename.map((file) => {
    const stats = statSync(file);
    if (stats.isFile() && (Date.now() - stats.mtimeMs >= 1000 * 60 * 3)) return unlinkSync(file); // 3 minutes
    return false;
  });
}

function purgeSession() {
let prekey = []
let directorio = readdirSync("./ShadowSession")
let filesFolderPreKeys = directorio.filter(file => {
return file.startsWith('pre-key-') /*|| file.startsWith('session-') || file.startsWith('sender-') || file.startsWith('app-') */
})
prekey = [...prekey, ...filesFolderPreKeys]
filesFolderPreKeys.forEach(files => {
unlinkSync(`./ShadowSession/${files}`)
})
} 

function purgeSessionSB() {
try {
let listaDirectorios = readdirSync('./jadibts/');
let SBprekey = []
listaDirectorios.forEach(directorio => {
if (statSync(`./jadibts/${directorio}`).isDirectory()) {
let DSBPreKeys = readdirSync(`./jadibts/${directorio}`).filter(fileInDir => {
return fileInDir.startsWith('pre-key-') /*|| fileInDir.startsWith('app-') || fileInDir.startsWith('session-')*/
})
SBprekey = [...SBprekey, ...DSBPreKeys]
DSBPreKeys.forEach(fileInDir => {
unlinkSync(`./jadibts/${directorio}/${fileInDir}`)
})
}
})
if (SBprekey.length === 0) return; //console.log(chalk.cyanBright(`=> No hay archivos por eliminar.`))
} catch (err) {
console.log(chalk.bold.red(`=> Algo salio mal durante la eliminación, archivos no eliminados`))
}}

function purgeOldFiles() {
const directories = ['./ShadowSession/', './jadibts/']
const oneHourAgo = Date.now() - (60 * 60 * 1000)
directories.forEach(dir => {
readdirSync(dir, (err, files) => {
if (err) throw err
files.forEach(file => {
const filePath = path.join(dir, file)
stat(filePath, (err, stats) => {
if (err) throw err;
if (stats.isFile() && stats.mtimeMs < oneHourAgo && file !== 'creds.json') { 
unlinkSync(filePath, err => {  
if (err) throw err
console.log(chalk.bold.green(`Archivo ${file} borrado con éxito`))
})
} else {  
console.log(chalk.bold.red(`Archivo ${file} no borrado` + err))
} }) }) }) })
}

async function connectionUpdate(update) {
  const {connection, lastDisconnect, isNewLogin} = update;
  global.stopped = connection;
  if (isNewLogin) conn.isInit = true;
  const code = lastDisconnect?.error?.output?.statusCode || lastDisconnect?.error?.output?.payload?.statusCode;
  if (code && code !== DisconnectReason.loggedOut && conn?.ws.socket == null) {
    await global.reloadHandler(true).catch(console.error);
    //console.log(await global.reloadHandler(true).catch(console.error));
    global.timestamp.connect = new Date;
  }
  if (global.db.data == null) loadDatabase();
  if (update.qr != 0 && update.qr != undefined) {
    console.log(chalk.yellow('[✳️]ㅤEscanea este codigo QR, el codigo QR expira en 60 segundos.'));
  }
    if (connection == 'open') { 
     console.log(chalk.yellow(`╭──────────────────────────────✧•°•°···\n│➢ 𝐁𝐎𝐓 𝐂𝐎𝐍𝐄𝐂𝐓𝐀𝐃𝐎 𝐂𝐎𝐑𝐑𝐄𝐂𝐓𝐀𝐌𝐄𝐍𝐓𝐄 ☑️\n│❏ 𝐁𝐎𝐓 𝐈𝐍𝐒𝐓𝐀𝐋𝐀𝐃𝐎:𝐓𝐡𝐞 𝐒𝐡𝐚𝐝𝐨𝐰 𝐁𝐫𝐨𝐜𝐤𝐞𝐫𝐬 - 𝐁𝐨𝐭 ☑️\n╰──────────────────────────────✧•°•°···`)); 
   }
let reason = new Boom(lastDisconnect?.error)?.output?.statusCode;
if (connection === 'close') {
    if (reason === DisconnectReason.badSession) {
        conn.logger.error(`[ ⚠ ] Sesión incorrecta, por favor elimina la carpeta ${global.authFile} y escanea nuevamente.`);
        //process.exit();
    } else if (reason === DisconnectReason.connectionClosed) {
        conn.logger.warn(`[ ⚠ ] Conexión cerrada, reconectando...`);
        process.send('reset');
    } else if (reason === DisconnectReason.connectionLost) {
        conn.logger.warn(`[ ⚠ ] Conexión perdida con el servidor, reconectando...`);
        process.send('reset');
    } else if (reason === DisconnectReason.connectionReplaced) {
        conn.logger.error(`[ ⚠ ] Conexión reemplazada, se ha abierto otra nueva sesión. Por favor, cierra la sesión actual primero.`);
        //process.exit();
    } else if (reason === DisconnectReason.loggedOut) {
        conn.logger.error(`[🔒]Conexion cerrada, por favor borre la carpeta ${global.authFile} y reescanee el codigo QR`);
        //process.exit();
    } else if (reason === DisconnectReason.restartRequired) {
        conn.logger.info(`[ ⚠️ ] Reinicio necesario, reinicie el servidor si presenta algún problema.`);
        //process.send('reset');
    } else if (reason === DisconnectReason.timedOut) {
        conn.logger.warn(`[ ⚠️ ] Tiempo de conexión agotado, reconectando...`);
        process.send('reset');
    } else {
        conn.logger.warn(`[ ⚠️ ] Razón de desconexión desconocida. ${reason || ''}: ${connection || ''}`);
        //process.exit();
    }
}
  /*if (connection == 'close') {
    console.log(chalk.yellow(`[🔒]ㅤConexion cerrada, por favor borre la carpeta ${global.authFile} y reescanee el codigo QR`));
  }*/
}

process.on('uncaughtException', console.error);
//conn.ev.on('messages.update', console.error);

let isInit = true;
let handler = await import("./handler.js");
global.reloadHandler = async function (restatConn) {
  try {
    const Handler = await import(`./handler.js?update=${Date.now()}`).catch(console.error);
    if (Object.keys(Handler || {}).length) handler = Handler;
  } catch (e) {
    console.error(e);
  }
  if (restatConn) {
    const oldChats = global.conn.chats;
    try {
      global.conn.ws.close();
    } catch {}
    conn.ev.removeAllListeners();
    global.conn = makeWASocket(connectionOptions, {chats: oldChats});
    isInit = true;
  }
  if (!isInit) {
    conn.ev.off("messages.upsert", conn.handler);
    conn.ev.off("group-participants.update", conn.participantsUpdate);
    conn.ev.off("groups.update", conn.groupsUpdate);
    conn.ev.off("message.delete", conn.onDelete);
    conn.ev.off("call", conn.onCall);
    conn.ev.off("connection.update", conn.connectionUpdate);
    conn.ev.off("creds.update", conn.credsUpdate);
  }
//texto de bienvenida 
  conn.welcome =
    `┌─❖ 
 │「 BIENVENIDO/A 👋 」 
 └┬❖ 「  @user  」 
    │✑  *bienvenido a:*
    │✑  @subject
    └───────────────┈`
//texto de salida
  conn.bye = `┌─❖ 
 │「 ADIOS/BYE 👋 」 
 └┬❖ 「  @user  」 
  └───────────────┈`;
//texto de nuevo admin
  conn.spromote = "[✅] *@user ES UN NUEVO ADMINISTRADOR!!*";
//texto de admin removido
  conn.sdemote = "『❗』 *@user 𝙰𝙱𝙰𝙽𝙳𝙾𝙽𝙰 𝙴𝙻 𝙶𝚁𝚄𝙿𝙾 𝙳𝙴 𝙰𝙳𝙼𝙸𝙽𝚂 !!*";
//texto de descripción cambiada
  conn.sDesc = "『❗』 *𝚂𝙴 𝙷𝙰 𝙼𝙾𝙳𝙸𝙵𝙸𝙲𝙰𝙳𝙾 𝙻𝙰 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝙲𝙸𝙾𝙽 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾*\n\n*𝙽𝚄𝙴𝚅𝙰 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝙲𝙸𝙾𝙽:* @desc";
//texto de nombre cambiado
  conn.sSubject = "『❗』*𝚂𝙴 𝙷𝙰 𝙼𝙾𝙳𝙸𝙵𝙸𝙲𝙰𝙳𝙾 𝙴𝙻 𝙽𝙾𝙼𝙱𝚁𝙴 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾*\n*𝙽𝚄𝙴𝚅𝙾 𝙽𝙾𝙼𝙱𝚁𝙴:* @subject";
//texto de foto del grupo cambiada
  conn.sIcon = "『❗』*𝚂𝙴 𝙷𝙰 𝙲𝙰𝙼𝙱𝙸𝙰𝙳𝙾 𝙻𝙰 𝙵𝙾𝚃𝙾 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾!!*";
//texto de nuevo enlace
  conn.sRevoke = "『❗』 *𝚂𝙴 𝙷𝙰 𝙰𝙲𝚃𝚄𝙰𝙻𝙸𝚉𝙰𝙳𝙾 𝙴𝙻 𝙻𝙸𝙽𝙺 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾!!*\n*𝙻𝙸𝙽𝙺 𝙽𝚄𝙴𝚅𝙾:* @revoke";

  conn.handler = handler.handler.bind(global.conn);
  conn.participantsUpdate = handler.participantsUpdate.bind(global.conn);
  conn.groupsUpdate = handler.groupsUpdate.bind(global.conn);
  conn.onDelete = handler.deleteUpdate.bind(global.conn);
  conn.onCall = handler.callUpdate.bind(global.conn);
  conn.connectionUpdate = connectionUpdate.bind(global.conn);
  conn.credsUpdate = saveCreds.bind(global.conn, true);
  
  const currentDateTime = new Date(); 
   const messageDateTime = new Date(conn.ev); 
   if (currentDateTime >= messageDateTime) { 
     const chats = Object.entries(conn.chats).filter(([jid, chat]) => !jid.endsWith('@g.us') && chat.isChats).map((v) => v[0]); 
   // console.log(chats, conn.ev); 
   } else { 
     const chats = Object.entries(conn.chats).filter(([jid, chat]) => !jid.endsWith('@g.us') && chat.isChats).map((v) => v[0]); 
   } 
   // console.log(chats, 'Omitiendo mensajes en espera.'); } 
  
   conn.ev.on('messages.upsert', conn.handler); 
   conn.ev.on('group-participants.update', conn.participantsUpdate); 
   conn.ev.on('groups.update', conn.groupsUpdate); 
   conn.ev.on('message.delete', conn.onDelete); 
   conn.ev.on('call', conn.onCall); 
   conn.ev.on('connection.update', conn.connectionUpdate); 
   conn.ev.on('creds.update', conn.credsUpdate);
  isInit = false;
  return true;
};

  
 const comandosFolder = join(__dirname, './comandos'); 
 const comandosFilter = filename => /\.js$/.test(filename); 
 global.comandos = {}; 
  
 async function filesInit(folder) { 
   for (let filename of readdirSync(folder).filter(comandosFilter)) { 
     try { 
       let file = join(folder, filename); 
       const module = await import(file); 
       global.comandos[file] = module.default || module; 
     } catch (e) { 
       console.error(e); 
       delete global.comandos[filename]; 
     } 
   } 
  
   for (let subfolder of readdirSync(folder)) { 
     const subfolderPath = join(folder, subfolder); 
     if (statSync(subfolderPath).isDirectory()) { 
       await filesInit(subfolderPath); 
     } 
   } 
 } 
  
 await filesInit(comandosFolder).then(_ => Object.keys(global.comandos)).catch(console.error); 
  

global.reload = async (_ev, filename) => {
  if (comandosFilter(filename)) {
    let dir = global.__filename(join(comandosFolder, filename), true);
    if (filename in global.comandos) {
      if (existsSync(dir)) conn.logger.info(` updated plugin - '${filename}'`);
      else {
        conn.logger.warn(`deleted plugin - '${filename}'`);
        return delete global.comandos[filename];
      }
    } else conn.logger.info(`new plugin - '${filename}'`);
    let err = syntaxerror(readFileSync(dir), filename, {
      sourceType: "module",
      allowAwaitOutsideFunction: true,
    });
    if (err) conn.logger.error(`syntax error while loading '${filename}'\n${format(err)}`);
    else
      try {
        const module = await import(`${global.__filename(dir)}?update=${Date.now()}`);
        global.comandos[filename] = module.default || module;
      } catch (e) {
        conn.logger.error(`error require plugin '${filename}\n${format(e)}'`);
      } finally {
        global.comandos = Object.fromEntries(Object.entries(global.comandos).sort(([a], [b]) => a.localeCompare(b)));
      }
  }
};
Object.freeze(global.reload);
watch(comandosFolder, global.reload);
await global.reloadHandler();
async function _quickTest() {
  const test = await Promise.all([
    spawn('ffmpeg'),
    spawn('ffprobe'),
    spawn('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-filter_complex', 'color', '-frames:v', '1', '-f', 'webp', '-']),
    spawn('convert'),
    spawn('magick'),
    spawn('gm'),
    spawn('find', ['--version']),
  ].map((p) => {
    return Promise.race([
      new Promise((resolve) => {
        p.on('close', (code) => {
          resolve(code !== 127);
        });
      }),
      new Promise((resolve) => {
        p.on('error', (_) => resolve(false));
      })]);
  }));
  const [ffmpeg, ffprobe, ffmpegWebp, convert, magick, gm, find] = test;
  const s = global.support = {ffmpeg, ffprobe, ffmpegWebp, convert, magick, gm, find};
  Object.freeze(global.support);
}
setInterval(async () => {
  if (stopped === 'close' || !conn || !conn.user) return;
  const a = await clearTmp();
  console.log(chalk.cyanBright(`\n▣════════[ 𝐀𝐔𝐓𝐎𝐂𝐋𝐄𝐀𝐑-𝐓𝐌𝐏 ]════════════...\n│\n▣─➢ 𝐁𝐚𝐬𝐮𝐫𝐚 𝐞𝐥𝐢𝐦𝐢𝐧𝐚𝐝𝐚 ✅\n│\n▣═════════════════════════════════════...\n`));
}, 180000);
setInterval(async () => {
  if (stopped === 'close' || !conn || !conn.user) return;
  await purgeSession();
  console.log(chalk.cyanBright(`\n▣────────[ AUTOPURGESESSIONS ]───────────···\n│\n▣─❧ ARCHIVOS ELIMINADOS ✅\n│\n▣────────────────────────────────────···\n`));
}, 1000 * 60 * 60);
setInterval(async () => {
  if (stopped === 'close' || !conn || !conn.user) return;
  await purgeSessionSB();
  console.log(chalk.cyanBright(`\n▣────────[ AUTO_PURGE_SESSIONS_SUB-BOTS ]───────────···\n│\n▣─❧ ARCHIVOS ELIMINADOS ✅\n│\n▣────────────────────────────────────···\n`));
}, 1000 * 60 * 60);
setInterval(async () => {
  if (stopped === 'close' || !conn || !conn.user) return;
  await purgeOldFiles();
  console.log(chalk.cyanBright(`\n▣────────[ AUTO_PURGE_OLDFILES ]───────────···\n│\n▣─❧ ARCHIVOS ELIMINADOS ✅\n│\n▣────────────────────────────────────···\n`));
}, 1000 * 60 * 60);
_quickTest().catch(console.error);
