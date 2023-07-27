import {watchFile, unwatchFile} from "fs";
import chalk from "chalk";
import {fileURLToPath} from "url";
import fs from "fs";
import cheerio from "cheerio";
import fetch from "node-fetch";
import axios from "axios";
import moment from "moment-timezone";
import {en, es, pt} from "./lib/idiomas/total-idiomas.js";

//cambia los números que sean propietarios
const owner = [
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
/*║ ❒*/ ["5218442114446"]
/*╚══════════════════╝*/                     ];
/*┌--------------*/
/*├➢*/ const suittag = ["593959425714"];
/*├➢*/ const mods = ["595986674310"];
/*├➢*/ const prems = ["595986674310"];
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

var openai_key = "sk-0";
/* Consigue tu ApiKey en este enlace: https://platform.openai.com/account/api-keys */

var openai_org_id = "org-3";
/* Consigue tu ID de organizacion en este enlace: https://platform.openai.com/account/org-settings */

const lenguajeGB = es;

/* ______________________________________________ */
const creadorname = "𝐃𝐈𝐄𝐆𝐎-𝐎𝐅𝐂";
const creatorname = creadorname;
const library = "BAILEYS-MD";
const vs = "V10";
const version = vs;

//_______tiempp de stickers______________
global.d = new Date(new Date() + 3600000);
global.locale = "es";
global.dia = d.toLocaleDateString(locale, {weekday: "long"});
global.fecha = d.toLocaleDateString("es", {day: "numeric", month: "numeric", year: "numeric"});
global.mes = d.toLocaleDateString("es", {month: "long"});
global.año = d.toLocaleDateString("es", {year: "numeric"});
global.tiempo = d.toLocaleString("en-US", {hour: "numeric", minute: "numeric", second: "numeric", hour12: true});
//------------- Sticker WM -----------
const packname = `𝐃𝐈𝐄𝐆𝐎-𝐎𝐅𝐂`;
const author = `©⏤͟͟͞𝐓𝐇𝐄 𝐃𝐎𝐑𝐑𝐀𝐓-𝐁𝐎𝐓-𝐌𝐃`;
//_______________
var wm = "𝐃𝐎𝐑𝐑𝐀𝐓-𝐁𝐎𝐓 | 𝐃𝐈𝐄𝐆𝐎-𝐎𝐅𝐂";
var db3t = `©⏤͟͟͞𝐓𝐇𝐄 𝐃𝐎𝐑𝐑𝐀𝐓-𝐁𝐎𝐓-𝐌𝐃`;
var wm3 = db3t;
var codex = `Diego-Ofc`;
var igfg = "𝑫𝑶𝑹𝑹𝑨𝑻-𝑩𝑶𝑻";
var wait = "*[❕] CARGANDO POR FAVOR ESPERA...*";
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
