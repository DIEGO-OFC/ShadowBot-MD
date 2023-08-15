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
import {format} from "util";
import P from "pino";
import pino from "pino";
import {makeWASocket, protoType, serialize} from "./lib/simple.js";
import {Low, JSONFile} from "lowdb";
import {mongoDB, mongoDBV2} from "./lib/mongoDB.js";
import store from "./lib/store.js";
const {proto} = (await import("@whiskeysockets/baileys")).default;
const {DisconnectReason, useMultiFileAuthState, MessageRetryMap, fetchLatestBaileysVersion, makeCacheableSignalKeyStore} = await import("@whiskeysockets/baileys");
const {CONNECTING} = ws;
const {chain} = lodash;
const PORT = process.env.PORT || process.env.SERVER_PORT || 3000;

protoType();
serialize();

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



/*------------------------------------------------*/
global.authFile = `Zirax-BotSession`;
const {state, saveState, saveCreds} = await useMultiFileAuthState(global.authFile);
const msgRetryCounterMap = (MessageRetryMap) => { };
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
  browser: ['Zirax-Bot-MD', 'Safari', '1.0.0'],
  version,
  defaultQueryTimeoutMs: undefined,
};

global.conn = makeWASocket(connectionOptions);
conn.isInit = false;
conn.well = false;
conn.logger.info(`Ƈᴀʀɢᴀɴᴅᴏ．．．\n`);


async function connectionUpdate(update) {
  const {connection, lastDisconnect, isNewLogin} = update
  global.stopped = connection;
  if (isNewLogin) conn.isInit = true;
  const code = lastDisconnect?.error?.output?.statusCode || lastDisconnect?.error?.output?.payload?.statusCode;
  if (code && code !== DisconnectReason.loggedOut && conn?.ws.socket == null) {
    console.log(await global.reloadHandler(true).catch(console.error))
    global.timestamp.connect = new Date;
  }
  if (global.db.data == null) loadDatabase()
  if (update.qr != 0 && update.qr != undefined) {
   console.log(chalk.yellow('[🔄]ㅤEscanea este codigo QR, el codigo QR expira en 60 segundos.'))}
  if (connection == 'open') {
   console.log(chalk.yellow(lenguajeGB['smsConexion']()))}
   if (connection == 'close') {
 console.log(chalk.yellow(`[❌]ㅤConexion cerrada, por favor borre la carpeta ${global.authFile} y reescanee el codigo QR`))}
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

 

_quickTest().catch(console.error);
