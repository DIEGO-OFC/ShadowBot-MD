import {watchFile, unwatchFile} from "fs";
import chalk from "chalk";
import {fileURLToPath} from "url";
import {sandroid1} from "../lib/scrape.js";
import fs from "fs";
import cheerio from "cheerio";
import fetch from "node-fetch";
import axios from "axios";
import moment from "moment-timezone";
import {en, es, pt} from "./lib/idiomas/total-idiomas.js";
//cambia los números que sean propietarios
global.owner = [
/*╔══════════════════╗*/
/*║ ❒*/ ["5218442286089", "🔰𝐃𝐈𝐄𝐆𝐎-𝐂𝐑𝐄𝐀𝐃𝐎𝐑🔰", true],
/*║ ❒*/ ["51993138466", "🔰  𝙲𝙾𝙻𝙻𝙰𝙱𝙾𝚁𝙰𝚃𝙾𝚁 1 🔰", true],
/*║ ❒*/ ["573184314110", "🔰 𝙲𝙾𝙻𝙻𝙰𝙱𝙾𝚁𝙰𝚃𝙾𝚁 3 🔰", true],
/*║ ❒*/ ["50246028932", "🔰 𝙲𝙾𝙻𝙻𝙰𝙱𝙾𝚁𝙰𝚃𝙾𝚁 4 🔰", true],
/*║ ❒*/ ["59895555511", "🔰 𝙲𝙾𝙻𝙻𝙰𝙱𝙾𝚁𝙰𝚃𝙾𝚁 5 🔰", true],
/*║ ❒*/ ["584125778026"],
/*║ ❒*/ ["595986674310"],
/*║ ❒*/ ["51936767238"],
/*║ ❒*/ ["50495625729"],
/*║ ❒*/ ["593968585383"],
/*║ ❒*/ ["5219996125657"],
/*║ ❒*/ ["595992611272"],
/*║ ❒*/ ["51957041866"],
/*║ ❒*/ ["5492266466080"],  
/*║ ❒*/ ["240222036871"], 
/*║ ❒*/ ["5218442114446"]
/*╚══════════════════╝*/                     ];
/*┌--------------*/
/*├➢*/ global.suittag = ["593959425714"];
/*├➢*/ global.mods = ["595986674310"];
/*├➢*/ global.prems = ["595986674310"];
/*└────ׂ─ׂ─ׂ─ׂ───*/

(global.APIs = {
  // API Prefix
  // name: 'https://website'
  amel: "https://melcanz.com",
  bx: "https://bx-hunter.herokuapp.com",
  nrtm: "https://nurutomo.herokuapp.com",
  xteam: "https://api.xteam.xyz",
  nzcha: "http://nzcha-apii.herokuapp.com",
  bg: "http://bochil.ddns.net",
  fdci: "https://api.fdci.se",
  dzx: "https://api.dhamzxploit.my.id",
  bsbt: "https://bsbt-api-rest.herokuapp.com",
  zahir: "https://zahirr-web.herokuapp.com",
  zeks: "https://api.zeks.me",
  hardianto: "https://hardianto-chan.herokuapp.com",
  pencarikode: "https://pencarikode.xyz",
  LeysCoder: "https://leyscoders-api.herokuapp.com",
  adiisus: "https://adiixyzapi.herokuapp.com",
  lol: "https://api.lolhuman.xyz",
  pencarikode: "https://pencarikode.xyz",
  Velgrynd: "https://velgrynd.herokuapp.com",
  rey: "https://server-api-rey.herokuapp.com",
  hardianto: "http://hardianto-chan.herokuapp.com",
  shadow: "https://api.reysekha.xyz",
  apialc: "https://api-alc.herokuapp.com",
  botstyle: "https://botstyle-api.herokuapp.com",
  neoxr: "https://neoxr-api.herokuapp.com",
  ana: "https://anabotofc.herokuapp.com/",
  kanx: "https://kannxapi.herokuapp.com/",
  dhnjing: "https://dhnjing.xyz",
  violetics: "https://violetics.pw",
}),
 (global.APIKeys = {
    // APIKey Here
    // 'https://website': 'apikey'
    "https://api-alc.herokuapp.com": "ConfuMods",
    "https://api.reysekha.xyz": "apirey",
    "https://melcanz.com": "F3bOrWzY",
    "https://bx-hunter.herokuapp.com": "Ikyy69",
    "https://api.xteam.xyz": "5bd33b276d41d6b4",
    "https://zahirr-web.herokuapp.com": "zahirgans",
    "https://bsbt-api-rest.herokuapp.com": "benniismael",
    "https://api.zeks.me": "apivinz",
    "https://hardianto-chan.herokuapp.com": "hardianto",
    "https://pencarikode.xyz": "pais",
    "https://leyscoders-api.herokuapp.com": "MIMINGANZ",
    "https://server-api-rey.herokuapp.com": "apirey",
    "https://api.lolhuman.xyz": "9b817532fadff8fc7cb86862",
    "https://botstyle-api.herokuapp.com": "Eyar749L",
    "https://neoxr-api.herokuapp.com": "yntkts",
    "https://anabotofc.herokuapp.com/": "AnaBot",
    "https://violetics.pw": "beta",
  });

global.openai_key = "sk-0";
/* Consigue tu ApiKey en este enlace: https://platform.openai.com/account/api-keys */

global.openai_org_id = "org-3";
/* Consigue tu ID de organizacion en este enlace: https://platform.openai.com/account/org-settings */

global.lenguajeGB = es;

/* ______________________________________________ */
global.creadorname = "𝐃𝐈𝐄𝐆𝐎-𝐎𝐅𝐂";
global.creatorname = "𝐃𝐈𝐄𝐆𝐎-𝐎𝐅𝐂";
global.library = "BAILEYS-MD";
global.vs = "V10";
global.version = vs;
global.baileys = '@whiskeysockets/baileys'
//_______tiempp de stickers______________
global.d = new Date(new Date() + 3600000);
global.locale = "es";
global.dia = d.toLocaleDateString(locale, {weekday: "long"});
global.fecha = d.toLocaleDateString("es", {day: "numeric", month: "numeric", year: "numeric"});
global.mes = d.toLocaleDateString("es", {month: "long"});
global.año = d.toLocaleDateString("es", {year: "numeric"});
global.tiempo = d.toLocaleString("en-US", {hour: "numeric", minute: "numeric", second: "numeric", hour12: true});
//------------- Sticker WM -----------
global.packname = `𝐃𝐈𝐄𝐆𝐎-𝐎𝐅𝐂`;
global.author = `©⏤͟͟͞𝐓𝐇𝐄 𝐃𝐎𝐑𝐑𝐀𝐓-𝐁𝐎𝐓-𝐌𝐃`;
//_______________
global.wm = "𝐃𝐎𝐑𝐑𝐀𝐓-𝐁𝐎𝐓 | 𝐃𝐈𝐄𝐆𝐎-𝐎𝐅𝐂";
global.db3t = `©⏤͟͟͞𝐓𝐇𝐄 𝐃𝐎𝐑𝐑𝐀𝐓-𝐁𝐎𝐓-𝐌𝐃`;
global.wm3 = db3t;
global.codex = `Diego-Ofc`;
global.igfg = "𝑫𝑶𝑹𝑹𝑨𝑻-𝑩𝑶𝑻";
global.wait = "*[❕] CARGANDO POR FAVOR ESPERA...*";
//-------------------
global.md = "https://chat.whatsapp.com/JuuuUaIQnnE3t4SWQenShg";
global.dorramd = md;
global.tarje = "Banesco";
global.yt = "http://youtube.com/@diegogameplays82";
global.youtube = yt;
//Menu
global.DorrafotoMenu = ["./galería/dorratmini.mp4"];
global.menulinks = [md, yt];
/* _____________________________________________ */
global.ag = "━━━ ❎ 𝙰𝙳𝚅𝙴𝚁𝚃𝙴𝙽𝙲𝙸𝙰 ❎ ━━━";
global.advertencia = ag;
global.fg = "☆━━━━ ⚠️ 𝙵𝙰𝙻𝙻𝙾 ⚠️ ━━━☆";
global.fallo = fg;
global.mg = "══ ❎ 𝙻𝙾 𝚄𝚂𝙾 𝙼𝙰𝙻 ❎ ══";
global.mal = mg;
global.dorre = "DORRAT-BOT-MD";
global.DORRA = dorre;

/* Imagenes___________________ */
global.imagen1 = fs.readFileSync("./Menu2.jpg");
global.imagen2 = fs.readFileSync("./galeria/nuevobot.jpg");
global.imagen3 = fs.readFileSync("./galeria/Pre Bot Publi.png");
global.imagen4 = fs.readFileSync("./galeria/menudorrat3.jpg");
global.imagen5 = fs.readFileSync("./galeria/menudorrat5.png");
global.video1 = fs.readFileSync("./galeria/dorratmini.mp4");
global.dorratMenu = [imagen1, imagen4];
global.pdoc = [
  "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.ms-excel",
  "application/msword",
  "application/pdf",
  "text/rtf",
];
global.antiyaoi = ['YAOI', 'yaoi', 'yAoi','yaoI']
global.sinyaoi = ["como te através a buscar esa perra puta mamada","puto gay no busques mierdas", "puto estorbo social este bot es hetero", "aquí no existe yaoi maricon"]
global.Key360 = ["964f-0c75-7afc"]; //keys ephoto360
global.keysZens = ["fiktod", "c2459db922", "BF39D349845E", "675e34de8a", "37CC845916", "0b917b905e6f", "6fb0eff124"];
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())];
//__________________
global.lolkeys = ["2e0da1f78d1721134b21816d", "902c3bc9d8c08b0dcf8f5373", "808693688ecc695293359089", "85faf717d0545d14074659ad"];
//global.lolkeysapi = lolkeys[Math.floor(lolkeys.length * Math.random())]
global.lolkeysapi = ["GataDios"];
global.dfail = (type, m, conn) => { 
   let msg = { 
     rowner: "*[ ⚠️ 𝐀𝐋𝐄𝐑𝐓𝐀 ⚠️ ] 𝙴𝚂𝚃𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝚂𝙾𝙻𝙾 𝙿𝚄𝙴𝙳𝙴 𝚂𝙴𝚁 𝚄𝚃𝙸𝙻𝙸𝚉𝙰𝙳𝙾 𝙿𝙾𝚁 𝙴𝙻/𝙻𝙰 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾/𝙰 (𝙾𝚆𝙽𝙴𝚁) 𝙳𝙴𝙻 𝙱𝙾𝚃*", 
     owner: "*[ ⚠️ 𝐀𝐋𝐄𝐑𝐓𝐀 ⚠️ ] 𝙴𝚂𝚃𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝚂𝙾𝙻𝙾 𝙿𝚄𝙴𝙳𝙴 𝚂𝙴𝚁 𝚄𝚃𝙸𝙻𝙸𝚉𝙰𝙳𝙾 𝙿𝙾𝚁 𝙴𝙻/𝙻𝙰 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾/𝙰 (𝙾𝚆𝙽𝙴𝚁) 𝙳𝙴𝙻 𝙱𝙾𝚃*", 
     mods: "*[ ⚠️ 𝐀𝐋𝐄𝐑𝐓𝐀 ⚠️ ] 𝙴𝚂𝚃𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝚂𝙾𝙻𝙾 𝙿𝚄𝙴𝙳𝙴 𝚂𝙴𝚁 𝚄𝚃𝙸𝙻𝙸𝚉𝙰𝙳𝙾 𝙿𝙾𝚁 𝙼𝙾𝙳𝙴𝚁𝙰𝙳𝙾𝚁𝙴𝚂 𝚈 𝙴𝙻/𝙻𝙰 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾/𝙰 (𝙾𝚆𝙽𝙴𝚁) 𝙳𝙴𝙻 𝙱𝙾𝚃*", 
     premium: "*[ ⚠️ 𝐀𝐋𝐄𝐑𝐓𝐀 ⚠️ ] 𝙴𝚂𝚃𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝚂𝙾𝙻𝙾 𝙿𝚄𝙴𝙳𝙴 𝚂𝙴𝚁 𝚄𝚃𝙸𝙻𝙸𝚉𝙰𝙳𝙾 𝙿𝙾𝚁 𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂 𝙿𝚁𝙴𝙼𝙸𝚄𝙼 𝚈 𝙴𝙻/𝙻𝙰 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾/𝙰 (𝙾𝚆𝙽𝙴𝚁) 𝙳𝙴𝙻 𝙱𝙾𝚃*", 
     group: "*[ ⚠️ 𝐀𝐋𝐄𝐑𝐓𝐀 ⚠️ ] 𝙴𝚂𝚃𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝚂𝙾𝙻𝙾 𝙿𝚄𝙴𝙳𝙴 𝚂𝙴𝚁 𝚄𝚃𝙸𝙻𝙸𝚉𝙰𝙳𝙾 𝙴𝙽 𝙶𝚁𝚄𝙿𝙾𝚂*", 
     private: "*[ ⚠️ 𝐀𝐋𝐄𝐑𝐓𝐀 ⚠️ ] 𝙴𝚂𝚃𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝚂𝙾𝙻𝙾 𝙿𝚄𝙴𝙳𝙴 𝚂𝙴𝚁 𝚄𝚃𝙸𝙻𝙸𝚉𝙰𝙳𝙾 𝙴𝙽 𝙲𝙷𝙰𝚃 𝙿𝚁𝙸𝚅𝙰𝙳𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*", 
     admin: "*[ ⚠️ 𝐀𝐋𝐄𝐑𝐓𝐀 ⚠️ ] 𝙴𝚂𝚃𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝚂𝙾𝙻𝙾 𝙿𝚄𝙴𝙳𝙴 𝚂𝙴𝚁 𝚄𝚃𝙸𝙻𝙸𝚉𝙰𝙳𝙾 𝙿𝙾𝚁 𝙰𝙳𝙼𝙸𝙽𝚂 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾*", 
     botAdmin: "*[ ⚠️ 𝐀𝐋𝐄𝐑𝐓𝐀 ⚠️ ] 𝙿𝙰𝚁𝙰 𝙿𝙾𝙳𝙴𝚁 𝚄𝚂𝙰𝚁 𝙴𝚂𝚃𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙴𝚂 𝙽𝙴𝙲𝙴𝚂𝙰𝚁𝙸𝙾 𝚀𝚄𝙴 𝙴𝙻 𝙱𝙾𝚃 𝚂𝙴𝙰 𝙰𝙳𝙼𝙸𝙽, 𝙰𝙲𝙴𝙽𝙳𝙴𝚁 𝙰 𝙰𝙳𝙼𝙸𝙽 𝙴𝚂𝚃𝙴 𝙽𝚄𝙼𝙴𝚁𝙾*", 
     unreg: "*[ ❎ 𝐇𝐄𝐘!! 𝐀𝐋𝐓𝐎, 𝐍𝐎 𝐄𝐒𝐓𝐀𝐒 𝐑𝐄𝐆𝐈𝐒𝐓𝐑𝐀𝐃𝐎 ❎ ]*\n\n*—◉ 𝙿𝙰𝚁𝙰 𝚄𝚂𝙰𝚁 𝙴𝚂𝚃𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙳𝙴𝙱𝙴𝚂 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙰𝚁𝚃𝙴, 𝚄𝚂𝙰 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾*\n*➣ #verificar*", 
     restrict: "*[ ⚠️ 𝐀𝐋𝐄𝐑𝐓𝐀 ⚠️ ] 𝙴𝚂𝚃𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙴𝚂𝚃𝙰 𝚁𝙴𝚂𝚃𝚁𝙸𝙽𝙶𝙸𝙳𝙾/𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝙳𝙾 𝙿𝙾𝚁 𝙳𝙴𝚂𝙸𝙲𝙸𝙾𝙽 𝙳𝙴𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾/𝙰 (𝙾𝚆𝙽𝙴𝚁) 𝙳𝙴𝙻 𝙱𝙾𝚃*", 
   }[type]; 
   let aa = {quoted: m, userJid: conn.user.jid}; 
   let prep = generateWAMessageFromContent( 
     m.chat, 
     { 
       extendedTextMessage: { 
         text: msg, 
         contextInfo: { 
           externalAdReply: { 
             title: "[ ⚠ ] 𝐀𝐕𝐈𝐒𝐎 - 𝐀𝐋𝐄𝐑𝐓𝐀", 
             body: "𝙳𝚘𝚛𝚛𝚊𝚝-𝙱𝚘𝚝-𝙼𝙳", 
             thumbnail: imagen1, 
             sourceUrl: "https://github.com/DIEGO-OFC/DORRAT-BOT-MD", 
           }, 
         }, 
       }, 
     }, 
     aa 
   ); 
   if (msg) return conn.relayMessage(m.chat, prep.message, {messageId: prep.key.id}); 
   //if (msg) return m.reply(msg) 
 };
/* ⊱__________________.⋅ RPG ⋅.________ ⊰ */

global.flaaa = [
  "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=",

  "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=",

  "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=",

  "https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=",

  "https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=",
];

global.cmenut = "❖––––––『";
global.cmenub = "┊✦ ";
global.cmenuf = "╰━═┅═━––––––๑\n";
global.cmenua = "\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     ";

global.dmenut = "*❖─┅──┅〈*";
global.dmenub = "*┊»*";
global.dmenub2 = "*┊*";
global.dmenuf = "*╰┅────────┅✦*";
global.htjava = "⫹⫺";
global.cheerio = cheerio;
global.sandroid1 = sandroid1
global.fs = fs;
global.fetch = fetch;
global.axios = axios;
global.moment = moment;
global.htki = "*⭑•̩̩͙⊱•••• ☪*";
global.htka = "*☪ ••••̩̩͙⊰•⭑*";

global.comienzo = "• • ◕◕════";
global.fin = "════◕◕ • •";

global.botdate = `⫹⫺ Date :  ${moment.tz("Asia/Jakarta").format("DD/MM/YY")}`;
global.bottime = `𝗧 𝗜 𝗠 𝗘 : ${moment.tz("Asia/Jakarta").format("HH:mm:ss")}`; //America/Los_Angeles
global.fgif = {
  key: {
    participant: "0@s.whatsapp.net",
  },
  message: {
    videoMessage: {
      title: wm,
      h: `Hmm`,
      seconds: "999999999",
      gifPlayback: "true",
      caption: bottime,
      jpegThumbnail: fs.readFileSync("./Menu2.jpg"),
    },
  },
};
let file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.redBright("se actualizo 'configuracion.js'"));
  import(`${file}?update=${Date.now()}`);
});

