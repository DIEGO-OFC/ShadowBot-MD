process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0"; //SI QUIERES TEXTO SIMPLIFICADO EN LA CONSOLA USA ESTE CÓDIGO
import "./configuracion.js";
import "./rpg.js";
import {createRequire} from "module";
import path, {join} from "path";
import {fileURLToPath, pathToFileURL} from "url";
import {platform} from "process";
import * as ws from "ws";
import {readdirSync, statSync, unlinkSync, existsSync, readFileSync, watch} from "fs";
import yargs from "yargs";
import {spawn} from "child_process";
import lodash from "lodash";
import chalk from "chalk";
import syntaxerror from "syntax-error";
import {tmpdir} from "os";
import {format} from "util";
import pino from "pino";
import {makeWASocket, protoType, serialize} from "./lib/simple.js";
import {Low, JSONFile} from "lowdb";
import store from "./lib/store.js";
const {DisconnectReason, useMultiFileAuthState, MessageRetryMap, fetchLatestBaileysVersion, makeCacheableSignalKeyStore} = await import('@whiskeysockets/baileys')
const {CONNECTING} = ws;
const {chain} = lodash;
const PORT = process.env.PORT || process.env.SERVER_PORT || 3000;

protoType();
serialize();

global.__filename = function filename(pathURL = import.meta.url, rmPrefix = platform !== "win32") {
  return rmPrefix ? (/file:\/\/\//.test(pathURL) ? fileURLToPath(pathURL) : pathURL) : pathToFileURL(pathURL).toString();
};
global.__dirname = function dirname(pathURL) {
  return path.dirname(global.__filename(pathURL, true));
};
global.__require = function require(dir = import.meta.url) {
  return createRequire(dir);
};

global.API = (name, path = "/", query = {}, apikeyqueryname) =>
  (name in global.APIs ? global.APIs[name] : name) +
  path +
  (query || apikeyqueryname
    ? "?" +
      new URLSearchParams(
        Object.entries({...query, ...(apikeyqueryname ? {[apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name]} : {})})
      )
    : "");

global.timestamp = {start: new Date()};

const __dirname = global.__dirname(import.meta.url);

global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse());
global.prefix = new RegExp(
  "^[" + (opts["prefix"] || "xzXZ/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.\\-HhhHBb.aA").replace(/[|\\{}()[\]^$+*?.\-\^]/g, "\\$&") + "]"
);

global.db = new Low(
  /https?:\/\//.test(opts["db"] || "") ? new cloudDBAdapter(opts["db"]) : new JSONFile(`${opts._[0] ? opts._[0] + "_" : ""}database.json`)
);

global.DATABASE = global.db; // Backwards Compatibility
global.loadDatabase = async function loadDatabase() {
  if (global.db.READ)
    return new Promise((resolve) =>
      setInterval(async function () {
        if (!global.db.READ) {
          clearInterval(this);
          resolve(global.db.data == null ? global.loadDatabase() : global.db.data);
        }
      }, 1 * 1000)
    );
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

var _0x3fb854 = _0x5872;
function _0x5872(_0x297e08, _0x4da48b) {
  var _0x54e980 = _0x54e9();
  return (
    (_0x5872 = function (_0x587285, _0x2e039d) {
      _0x587285 = _0x587285 - 0x66;
      var _0x2f497e = _0x54e980[_0x587285];
      return _0x2f497e;
    }),
    _0x5872(_0x297e08, _0x4da48b)
  );
}
(function (_0x2597bc, _0x268064) {
  var _0x25e014 = _0x5872,
    _0x25d21a = _0x2597bc();
  while (!![]) {
    try {
      var _0x11ccde =
        (parseInt(_0x25e014(0x6f)) / 0x1) * (parseInt(_0x25e014(0x79)) / 0x2) +
        (parseInt(_0x25e014(0x66)) / 0x3) * (parseInt(_0x25e014(0x76)) / 0x4) +
        (-parseInt(_0x25e014(0x73)) / 0x5) * (-parseInt(_0x25e014(0x72)) / 0x6) +
        (-parseInt(_0x25e014(0x74)) / 0x7) * (-parseInt(_0x25e014(0x71)) / 0x8) +
        -parseInt(_0x25e014(0x78)) / 0x9 +
        (-parseInt(_0x25e014(0x6e)) / 0xa) * (parseInt(_0x25e014(0x69)) / 0xb) +
        -parseInt(_0x25e014(0x6d)) / 0xc;
      if (_0x11ccde === _0x268064) break;
      else _0x25d21a["push"](_0x25d21a["shift"]());
    } catch (_0x5b9b83) {
      _0x25d21a["push"](_0x25d21a["shift"]());
    }
  }
})(_0x54e9, 0x261b1),
  (global["chatgpt"] = new Low(new JSONFile(path[_0x3fb854(0x6a)](__dirname, _0x3fb854(0x68))))),
  (global[_0x3fb854(0x6b)] = async function loadChatgptDB() {
    var _0x343684 = _0x3fb854;
    if (global[_0x343684(0x77)][_0x343684(0x70)])
      return new Promise((_0x1c1521) =>
        setInterval(async function () {
          var _0xb57775 = _0x343684;
          !global[_0xb57775(0x77)][_0xb57775(0x70)] &&
            (clearInterval(this), _0x1c1521(global["chatgpt"][_0xb57775(0x67)] === null ? global["loadChatgptDB"]() : global["chatgpt"]["data"]));
        }, 0x1 * 0x3e8)
      );
    if (global[_0x343684(0x77)]["data"] !== null) return;
    (global[_0x343684(0x77)]["READ"] = !![]),
      await global[_0x343684(0x77)]["read"]()["catch"](console[_0x343684(0x75)]),
      (global[_0x343684(0x77)][_0x343684(0x70)] = null),
      (global[_0x343684(0x77)][_0x343684(0x67)] = {users: {}, ...(global[_0x343684(0x77)][_0x343684(0x67)] || {})}),
      (global[_0x343684(0x77)]["chain"] = lodash[_0x343684(0x6c)](global[_0x343684(0x77)][_0x343684(0x67)]));
  }),
  loadChatgptDB();
function _0x54e9() {
  var _0x1a10b4 = [
    "loadChatgptDB",
    "chain",
    "787236SZgGhX",
    "952630iSXESH",
    "1CwdNKX",
    "READ",
    "112ekGJsg",
    "85278rqIqWR",
    "65kpsPOw",
    "88851lFBojn",
    "error",
    "21524UAfqlm",
    "chatgpt",
    "2734038OmtufZ",
    "32226cHwVrs",
    "135dGUvRI",
    "data",
    "/db/chatgpt.json",
    "11KydyON",
    "join",
  ];
  _0x54e9 = function () {
    return _0x1a10b4;
  };
  return _0x54e9();
}

/*------------------------------------------------*/
global.authFile = `Dorrat-BotSession`;
const {state, saveState, saveCreds} = await useMultiFileAuthState(global.authFile);
const msgRetryCounterMap = (MessageRetryMap) => {};
let {version} = await fetchLatestBaileysVersion();

const connectionOptions = {
  printQRInTerminal: true,
  patchMessageBeforeSending: (message) => {
    const requiresPatch = !!(message.buttonsMessage || message.templateMessage || message.listMessage);
    if (requiresPatch) {
      message = {viewOnceMessage: {message: {messageContextInfo: {deviceListMetadataVersion: 2, deviceListMetadata: {}}, ...message}}};
    }
    return message;
  },
    getMessage: async (key) => { 
     if (store) { 
       //console.log(key); 
       //console.log(conn.chats[key.remoteJid] && conn.chats[key.remoteJid].messages[key.id] ? conn.chats[key.remoteJid].messages[key.id].message : undefined); 
       const msg = await store.loadMessage(key.remoteJid, key.id); 
       //console.log(msg); 
       return conn.chats[key.remoteJid] && conn.chats[key.remoteJid].messages[key.id] ? conn.chats[key.remoteJid].messages[key.id].message : undefined; 
     } 
     return proto.Message.fromObject({}); 
   },
  msgRetryCounterMap,
  logger: pino({level: 'silent'}),
  auth: {
    creds: state.creds,
    keys: makeCacheableSignalKeyStore(state.keys, pino({level: 'silent'})),
  },
  browser: ['Dorrat-Bot', 'Safari', '9.7.0'],
  version,
  defaultQueryTimeoutMs: undefined,
};

global.conn = makeWASocket(connectionOptions);
conn.isInit = false;

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
  const tmp = [tmpdir(), join(__dirname, "./tmp")];
  const filename = [];
  tmp.forEach((dirname) => readdirSync(dirname).forEach((file) => filename.push(join(dirname, file))));
  return filename.map((file) => {
    const stats = statSync(file);
    if (stats.isFile() && Date.now() - stats.mtimeMs >= 1000 * 60 * 3) return unlinkSync(file); // 3 minutes
    return false;
  });
}

async function connectionUpdate(update) {
  const {connection, lastDisconnect, isNewLogin} = update;
  global.stopped = connection;
  if (isNewLogin) conn.isInit = true;
  const code = lastDisconnect?.error?.output?.statusCode || lastDisconnect?.error?.output?.payload?.statusCode;
  if (code && code !== DisconnectReason.loggedOut && conn?.ws.socket == null) {
    console.log(await global.reloadHandler(true).catch(console.error));
    global.timestamp.connect = new Date;
  }
  if (global.db.data == null) loadDatabase();
  if (update.qr != 0 && update.qr != undefined) {
    console.log(chalk.yellow('[🔄]ㅤEscanea este codigo QR, el codigo QR expira en 60 segundos.'));
  }
  if (connection == 'open') {
console.log(chalk.yellow(lenguajeGB["smsConexion"]()));  
  }

  if (connection == 'close') {
    console.log(chalk.yellow(`[❌]ㅤConexion cerrada, por favor borre la carpeta ${global.authFile} y reescanee el codigo QR`));
  }
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
    "┏━━━━━━━━━━━━\n┃──〘 *WELCOME* 〙──\n┃━━━━━━━━━━━━\n┃ *_✨ @user bienvenid@ a_* \n┃ *_@subject ✨_*\n┃\n┃=> *_En este grupo podrás_*\n┃ *_encontrar:_*\n┠⊷ *Amistades 🫂* \n┠⊷ *Desmadre 💃🕺* \n┠⊷ *Relajo 💅* \n┠⊷ *Enemig@s 🥵* :\n┠⊷ *Un Bot Sexy*\n┃\n┃=> *_Puedes solicitar mi lista de_*\n┃ *_comandos con:_*\n┠⊷ *#menu*\n┃\n┃=> *_Aquí tienes la descripción_* \n┃ *_del grupo, léela!!_*\n┃\n\n@desc\n\n┃ \n┃ *_🔰  Disfruta de tu_* \n┃ *_estadía en el grupo  🔰_*  \n┃\n┗━━━━━━━━━━━";
//texto de salida
  conn.bye = "*╔══════════════*\n*╟❧ @user*\n*╟❧ 𝙷𝙰𝚂𝚃𝙰 𝙿𝚁𝙾𝙽𝚃𝙾 👋🏻* \n*╚══════════════*";
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

const comandosFolder = global.__dirname(join(__dirname, "./comandos/index"));
const comandosFilter = (filename) => /\.js$/.test(filename);
global.comandos = {};
async function filesInit() {
  for (let filename of readdirSync(comandosFolder).filter(comandosFilter)) {
    try {
      let file = global.__filename(join(comandosFolder, filename));
      const module = await import(file);
      global.comandos[filename] = module.default || module;
    } catch (e) {
      conn.logger.error(e);
      delete global.comandos[filename];
    }
  }
}
filesInit()
  .then((_) => Object.keys(global.comandos))
  .catch(console.error);

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
  let test = await Promise.all(
    [
      spawn("ffmpeg"),
      spawn("ffprobe"),
      spawn("ffmpeg", ["-hide_banner", "-loglevel", "error", "-filter_complex", "color", "-frames:v", "1", "-f", "webp", "-"]),
      spawn("convert"),
      spawn("magick"),
      spawn("gm"),
      spawn("find", ["--version"]),
    ].map((p) => {
      return Promise.race([
        new Promise((resolve) => {
          p.on("close", (code) => {
            resolve(code !== 127);
          });
        }),
        new Promise((resolve) => {
          p.on("error", (_) => resolve(false));
        }),
      ]);
    })
  );
  let [ffmpeg, ffprobe, ffmpegWebp, convert, magick, gm, find] = test;
  let s = (global.support = {ffmpeg, ffprobe, ffmpegWebp, convert, magick, gm, find});
  Object.freeze(global.support);
}
setInterval(async () => {
  var a = await clearTmp();
  console.log(
    chalk.cyanBright(`\n▣════════[ 𝐀𝐔𝐓𝐎𝐂𝐋𝐄𝐀𝐑-𝐓𝐌𝐏 ]════════════...\n│\n▣─➢ 𝐁𝐚𝐬𝐮𝐫𝐚 𝐞𝐥𝐢𝐦𝐢𝐧𝐚𝐝𝐚 ✅\n│\n▣═════════════════════════════════════...\n`)
  );
}, 180000);
_quickTest()
  .then(() => conn.logger.info(`Ƈᴀʀɢᴀɴᴅᴏ．．．\n`))
  .catch(console.error);
