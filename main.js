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
protoType();
serialize();

global.__filename = function filename(pathURL = import.meta.url, rmPrefix = platform !== 'win32') {
  return rmPrefix ? /file:\/\/\//.test(pathURL) ? fileURLToPath(pathURL) : pathURL : pathToFileURL(pathURL).toString();
}; global.__dirname = function dirname(pathURL) {
  return path.dirname(global.__filename(pathURL, true));
}; global.__require = function require(dir = import.meta.url) {
  return createRequire(dir);
};

global.API = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({...query, ...(apikeyqueryname ? {[apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name]} : {})})) : '');

global.timestamp = {start: new Date};
global.videoList = [];
global.videoListXXX = [];

const __dirname = global.__dirname(import.meta.url);

global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse());
global.prefix = new RegExp('^[' + (opts['prefix'] || '*/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.\\-.@').replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']');

global.db = new Low(/https?:\/\//.test(opts['db'] || '') ? new cloudDBAdapter(opts['db']) : new JSONFile(`${opts._[0] ? opts._[0] + '_' : ''}database.json`));

global.DATABASE = global.db; 
global.loadDatabase = async function loadDatabase() {
  if (global.db.READ) {
    return new Promise((resolve) => setInterval(async function() {
      if (!global.db.READ) {
        clearInterval(this);
        resolve(global.db.data == null ? global.loadDatabase() : global.db.data);
      }
    }, 1 * 1000));
  }
  if (global.db.data !== null) return;
  global.db.READ = true;
  await global.db.read().catch(console.error);
  global.db.READ = null;
  global.db.data = {
    users: {},
    chats: {},
    stats: {},
    msgs: {},
    sticker: {},
    settings: {},
    ...(global.db.data || {}),
  };
  global.db.chain = chain(global.db.data);
};
loadDatabase();

/* Creditos a Otosaka (https://wa.me/51993966345) */

global.chatgpt = new Low(new JSONFile(path.join(__dirname, '/db/chatgpt.json')));
global.loadChatgptDB = async function loadChatgptDB() {
  if (global.chatgpt.READ) {
    return new Promise((resolve) =>
      setInterval(async function() {
        if (!global.chatgpt.READ) {
          clearInterval(this);
          resolve( global.chatgpt.data === null ? global.loadChatgptDB() : global.chatgpt.data );
        }
      }, 1 * 1000));
  }
  if (global.chatgpt.data !== null) return;
  global.chatgpt.READ = true;
  await global.chatgpt.read().catch(console.error);
  global.chatgpt.READ = null;
  global.chatgpt.data = {
    users: {},
    ...(global.chatgpt.data || {}),
  };
  global.chatgpt.chain = lodash.chain(global.chatgpt.data);
};
loadChatgptDB();

/* ------------------------------------------------*/

global.authFile = `ShadowSession`;
const {state, saveState, saveCreds} = await useMultiFileAuthState(global.authFile);
const msgRetryCounterMap = (MessageRetryMap) => { };
const msgRetryCounterCache = new NodeCache()
const {version} = await fetchLatestBaileysVersion();
let phoneNumber = global.botnumber

const methodCodeQR = process.argv.includes("qr")
const methodCode = !!phoneNumber || process.argv.includes("code")
const MethodMobile = process.argv.includes("mobile")
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const question = (texto) => new Promise((resolver) => rl.question(texto, resolver))

//Código adaptado para la compatibilidad de ser bot con el código de 8 digitos. Hecho por: https://github.com/GataNina-Li
let opcion
if (methodCodeQR) {
opcion = '1'
}
if (!methodCodeQR && !methodCode && !fs.existsSync(`./${authFile}/creds.json`)) {
do {
let lineM = '⋯ ⋯ ⋯ ⋯ ⋯ ⋯ ⋯ ⋯ ⋯ ⋯ ⋯ 》'
opcion = await question('[ ℹ️ ] Seleccione una opción:\n1. Con código QR\n2. Con código de texto de 8 dígitos\n---> ')
//if (fs.existsSync(`./${authFile}/creds.json`)) {
//console.log(chalk.bold.redBright(`PRIMERO BORRE EL ARCHIVO ${chalk.bold.greenBright("creds.json")} QUE SE ENCUENTRA EN LA CARPETA ${chalk.bold.greenBright(authFile)} Y REINICIE.`))
//process.exit()
if (!/^[1-2]$/.test(opcion)) {
console.log('[ ❗ ] Por favor, seleccione solo 1 o 2.\n')
}} while (opcion !== '1' && opcion !== '2' || fs.existsSync(`./${authFile}/creds.json`))
}

console.info = () => {} //dejará de aparecer la molesta "pre-key"
const connectionOptions = {
logger: pino({ level: 'silent' }),
printQRInTerminal: opcion == '1' ? true : methodCodeQR ? true : false,
mobile: MethodMobile, 
browser: opcion == '1' ? ['TheMystic-Bot-MD', 'Safari', '2.0.0'] : methodCodeQR ? ['shadow-Bot-MD', 'Safari', '2.0.0'] : ['Ubuntu', 'Chrome', '20.0.04'],
auth: {
creds: state.creds,
keys: makeCacheableSignalKeyStore(state.keys, Pino({ level: "fatal" }).child({ level: "fatal" })),
},
markOnlineOnConnect: true, 
generateHighQualityLinkPreview: true, 
getMessage: async (clave) => {
let jid = jidNormalizedUser(clave.remoteJid)
let msg = await store.loadMessage(jid, clave.id)
return msg?.message || ""
},
msgRetryCounterCache,
msgRetryCounterMap,
defaultQueryTimeoutMs: undefined,   
version
}

global.conn = makeWASocket(connectionOptions);

if (!fs.existsSync(`./${authFile}/creds.json`)) {
if (opcion === '2' || methodCode) {
//if (fs.existsSync(`./${authFile}/creds.json`)) {
//console.log(chalk.bold.redBright(`PRIMERO BORRE EL ARCHIVO ${chalk.bold.greenBright("creds.json")} QUE SE ENCUENTRA EN LA CARPETA ${chalk.bold.greenBright(authFile)} Y REINICIE.`))
//process.exit()
//}
opcion = '2'
if (!conn.authState.creds.registered) {  
if (MethodMobile) throw new Error('No se puede usar un código de emparejamiento con la API móvil')

let numeroTelefono
if (!!phoneNumber) {
numeroTelefono = phoneNumber.replace(/[^0-9]/g, '')
if (!Object.keys(PHONENUMBER_MCC).some(v => numeroTelefono.startsWith(v))) {
console.log(chalk.bgBlack(chalk.bold.redBright("Comience con el código de país de su número de WhatsApp.\nEjemplo: +5219992095479\n")))
process.exit(0)
}} else {
while (true) {
numeroTelefono = await question(chalk.bgBlack(chalk.bold.yellowBright('Por favor, escriba su número de WhatsApp.\nEjemplo: +5219992095479\n')))
numeroTelefono = numeroTelefono.replace(/[^0-9]/g, '')

if (numeroTelefono.match(/^\d+$/) && Object.keys(PHONENUMBER_MCC).some(v => numeroTelefono.startsWith(v))) {
break 
} else {
console.log(chalk.bgBlack(chalk.bold.redBright("Por favor, escriba su número de WhatsApp.\nEjemplo: +5219992095479.\n")))
}}
rl.close()  
} 

        setTimeout(async () => {
            let codigo = await conn.requestPairingCode(numeroTelefono)
            codigo = codigo?.match(/.{1,4}/g)?.join("-") || codigo
            console.log(chalk.yellow('[ ℹ️ ] introduce el código de emparejamiento en WhatsApp.'));
            console.log(chalk.black(chalk.bgGreen(`Su código de emparejamiento: `)), chalk.black(chalk.white(codigo)))
        }, 3000)
}}
}

conn.isInit = false;
conn.well = false;
conn.logger.info(`[ ℹ️ ] Cargando...\n`);
          
if (!opts['test']) { 
   if (global.db) { 
     setInterval(async () => { 
       if (global.db.data) await global.db.write(); 
       if (opts['autocleartmp'] && (global.support || {}).find) (tmp = [os.tmpdir(), 'tmp', 'jadibts'], tmp.forEach((filename) => cp.spawn('find', [filename, '-amin', '3', '-type', 'f', '-delete']))); 
     }, 30 * 1000); 
   } 
 } 
  
 if (opts['server']) (await import('./server.js')).default(global.conn, PORT);

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
    global.conn = makeWaSocket(connectionOptions, {chats: oldChats});
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
     const stopped = global.stopped
  if (stopped === 'close' || !conn || !conn.user) return;
  const a = await clearTmp();
  console.log(chalk.cyanBright(`\n▣───────────[ 𝙰𝚄𝚃𝙾𝙲𝙻𝙴𝙰𝚁TMP ]──────────────···\n│\n▣─❧ 𝙰𝚁𝙲𝙷𝙸𝚅𝙾𝚂 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝙳𝙾𝚂 ✅\n│\n▣───────────────────────────────────────···\n`));
}, 180000);
setInterval(async () => {
     const stopped = global.stopped
  if (stopped === 'close' || !conn || !conn.user) return;
  await purgeSession();
  console.log(chalk.cyanBright(`\n▣────────[ AUTOPURGESESSIONS ]───────────···\n│\n▣─❧ ARCHIVOS ELIMINADOS ✅\n│\n▣────────────────────────────────────···\n`));
}, 1000 * 60 * 60);
setInterval(async () => {
     const stopped = global.stopped
  if (stopped === 'close' || !conn || !conn.user) return;
  await purgeSessionSB();
  console.log(chalk.cyanBright(`\n▣────────[ AUTO_PURGE_SESSIONS_SUB-BOTS ]───────────···\n│\n▣─❧ ARCHIVOS ELIMINADOS ✅\n│\n▣────────────────────────────────────···\n`));
}, 1000 * 60 * 60);
setInterval(async () => {
     const stopped = global.stopped
  if (stopped === 'close' || !conn || !conn.user) return;
  await purgeOldFiles();
  console.log(chalk.cyanBright(`\n▣────────[ AUTO_PURGE_OLDFILES ]───────────···\n│\n▣─❧ ARCHIVOS ELIMINADOS ✅\n│\n▣────────────────────────────────────···\n`));
}, 1000 * 60 * 60);
_quickTest().catch(console.error);
