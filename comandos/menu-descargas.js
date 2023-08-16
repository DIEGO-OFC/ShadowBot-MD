import {xpRange} from "../lib/levelling.js";

var handler = async (m, {conn, usedPrefix, usedPrefix: _p, text}) => {
  var {exp, limit, level, role} = global.db.data.users[m.sender];

  var {min, xp, max} = xpRange(level, global.multiplier);

  var d = new Date(new Date() + 3600000);

  var locale = "es";

   var weton = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][Math.floor(d / 84600000) % 5];

  var week = d.toLocaleDateString(locale, {weekday: "long"});

  var date = d.toLocaleDateString(locale, {
    day: "numeric",

    month: "long",

    year: "numeric",
  });

  let dateIslamic = Intl.DateTimeFormat(locale + "-TN-u-ca-islamic", {
    day: "numeric",

    month: "long",

    year: "numeric",
  }).format(d);

  let time = d.toLocaleTimeString(locale, {
    hour: "numeric",

    minute: "numeric",

    second: "numeric",
  });

  var _uptime = process.uptime() * 1000;

  var _muptime;

  if (process.send) {
    process.send("uptime");

    _muptime =
      (await new Promise((resolve) => {
        process.once("message", resolve);

        setTimeout(resolve, 1000);
      })) * 1000;
  }

  var {money} = global.db.data.users[m.sender];

  var muptime = clockString(_muptime);

  var uptime = clockString(_uptime);

  var totalreg = Object.keys(global.db.data.users).length;

  var rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;

  var replace = {
    "%": "%",

    p: _p,
    uptime,
    muptime,

    me: conn.getName(conn.user.jid),

    exp: exp - min,

    maxexp: xp,

    totalexp: exp,

    xp4levelup: max - exp,

    level,
    limit,
    weton,
    week,
    date,
    dateIslamic,
    time,
    totalreg,
    rtotalreg,
    role,

    readmore: readMore,
  };

  text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, "g"), (_, name) => "" + replace[name]);

  /*const sections = [

{

title: `𝙇𝙄𝙎𝙏𝘼 𝘿𝙀𝙎𝙋𝙇𝙀𝙂𝘼𝘽𝙇𝙀 | 𝘿𝙍𝙊𝙋-𝘿𝙊𝙒𝙉 𝙇𝙄𝙎𝙏`,

rows: [

{title: "❇️ 𝙈𝙚𝙣𝙪 𝙋𝙧𝙞𝙣𝙘𝙞𝙥𝙖𝙡 |  𝘿𝙖𝙨𝙝𝙗𝙤𝙖𝙧𝙙 ❇️", description: null, rowId: `${usedPrefix}menu`},

{title: "✳️ 𝙈𝙚𝙣𝙪 𝘾𝙤𝙢𝙥𝙡𝙚𝙩𝙤 | 𝙁𝙪𝙡𝙡 𝙈𝙚𝙣𝙪 ✳️", description: null, rowId: `${usedPrefix}allmenu`},

{title: "✅ 𝘾𝙪𝙚𝙣𝙩𝙖𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 | 𝘼𝙘𝙘𝙤𝙪𝙣𝙩𝙨 ✅", description: null, rowId: `${usedPrefix}cuentasgatabot`},

{title: "🚀 𝙄𝙢𝙖𝙜𝙚𝙣 𝙙𝙚 𝙂𝙤𝙤𝙜𝙡𝙚 | 𝙂𝙤𝙤𝙜𝙡𝙚 𝙄𝙢𝙖𝙜𝙚 🚀", description: "𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙍 𝙄𝙈𝘼𝙂𝙀𝙉 𝘿𝙀 𝙂𝙊𝙊𝙂𝙇𝙀\n𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿 𝙄𝙈𝘼𝙂𝙀 𝙁𝙍𝙊𝙈 𝙂𝙊𝙊𝙂𝙇𝙀", rowId: `${usedPrefix}imagen`},

{title: "🚀 𝙄𝙢𝙖𝙜𝙚𝙣 𝙙𝙚 𝙋𝙞𝙣𝙩𝙚𝙧𝙚𝙨𝙩 | 𝙄𝙢𝙖𝙜𝙚 𝙛𝙧𝙤𝙢 𝙋𝙞𝙣𝙩𝙚𝙧𝙚𝙨𝙩 🚀", description: "𝙋𝙐𝙀𝘿𝙀𝙎 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙍 𝙄𝙈𝘼𝙂𝙀𝙉𝙀𝙎 𝘿𝙀 𝙋𝙄𝙉𝙏𝙀𝙍𝙀𝙎𝙏\n𝙔𝙊𝙐 𝘾𝘼𝙉 𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿 𝙄𝙈𝘼𝙂𝙀𝙎 𝙁𝙍𝙊𝙈 𝙋𝙄𝙉𝙏𝙀𝙍𝙀𝙎𝙏", rowId: `${usedPrefix}pinterest`},

{title: "🚀 𝙄𝙢𝙖𝙜𝙚𝙣𝙚𝙨 𝙙𝙚 𝙁𝙤𝙣𝙙𝙤 | 𝙒𝙖𝙡𝙡𝙥𝙖𝙥𝙚𝙧 🚀", description: "𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼 𝙄𝙈𝘼𝙂𝙀𝙎 𝘿𝙀 𝙁𝙊𝙉𝘿𝙊\n𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿 𝘽𝘼𝘾𝙆𝙂𝙍𝙊𝙐𝙉𝘿 𝙄𝙈𝘼𝙂𝙀𝙎", rowId: `${usedPrefix}wallpaper`},

{title: "🚀 𝘿𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙨 𝙙𝙚 𝙔𝙤𝙪𝙏𝙪𝙗𝙚 | 𝙋𝙡𝙖𝙮𝙨 🚀", description: "𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼 𝙑𝙄𝘿𝙀𝙊𝙎 𝙊 𝘼𝙐𝘿𝙄𝙊𝙎 𝙐𝙎𝘼𝙉𝘿𝙊 𝙀𝙇 𝙉𝙊𝙈𝘽𝙍𝙀 𝙊 𝙀𝙉𝙇𝘼𝘾𝙀 \n𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿 𝙑𝙄𝘿𝙀𝙊𝙎 𝙊𝙍 𝘼𝙐𝘿𝙄𝙊𝙎 𝙉𝘼𝙈𝙀 𝙊𝙍 𝙇𝙄𝙉𝙆", rowId: `${usedPrefix}play`},

{title: "🚀 𝘼𝙪𝙙𝙞𝙤𝙨 𝙙𝙚 𝙔𝙤𝙪𝙏𝙪𝙗𝙚 | 𝙋𝙡𝙖𝙮 𝘼𝙪𝙙𝙞𝙤 🚀", description: "𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼 𝘼𝙐𝘿𝙄𝙊𝙎 𝙐𝙎𝘼𝙉𝘿𝙊 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀\n𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿 𝘼𝙐𝘿𝙄𝙊𝙎 𝙐𝙎𝙄𝙉𝙂 𝘼 𝙇𝙄𝙉𝙆", rowId: `${usedPrefix}yta`},

{title: "🚀 𝙑𝙞𝙙𝙚𝙤𝙨 𝙙𝙚 𝙔𝙤𝙪𝙏𝙪𝙗𝙚 | 𝙋𝙡𝙖𝙮 𝙑𝙞𝙙𝙚𝙤 🚀", description: "𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼 𝙑𝙄𝘿𝙀𝙊𝙎 𝙐𝙎𝘼𝙉𝘿𝙊 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀\n𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿 𝙑𝙄𝘿𝙀𝙊𝙎 𝙐𝙎𝙄𝙉𝙂 𝘼 𝙇𝙄𝙉𝙆", rowId: `${usedPrefix}ytv`},

{title: "🚀 𝙑𝙞𝙙𝙚𝙤𝙨 𝙙𝙚 𝙁𝙖𝙘𝙚𝙗𝙤𝙤𝙠 | 𝙁𝙖𝙘𝙚𝙗𝙤𝙤𝙠 𝙑𝙞𝙙𝙚𝙤 🚀", description: "𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼 𝙑𝙄𝘿𝙀𝙊𝙎 𝘿𝙀 𝙁𝘼𝘾𝙀𝘽𝙊𝙊𝙆 𝘾𝙊𝙉 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀\n𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿 𝙑𝙄𝘿𝙀𝙊𝙎 𝙁𝙍𝙊𝙈 𝙁𝘼𝘾𝙀𝘽𝙊𝙊𝙆 𝙒𝙄𝙏𝙃 𝘼 𝙇𝙄𝙉𝙆", rowId: `${usedPrefix}facebook`},

{title: "🚀 𝘿𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙨 𝙙𝙚 𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢 | 𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢 𝘿𝙤𝙬𝙣𝙡𝙤𝙖𝙙𝙨 🚀", description: "𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼 𝙑𝙄𝘿𝙀𝙊𝙎 𝙊 𝙄𝙈𝘼𝙂𝙀𝙉𝙀𝙎 𝘿𝙀 𝙄𝙉𝙎𝙏𝘼𝙂𝙍𝘼𝙈 𝘾𝙊𝙉 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀\n𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿 𝙑𝙄𝘿𝙀𝙊𝙎 𝙊𝙍 𝙄𝙈𝘼𝙂𝙀𝙎 𝙁𝙍𝙊𝙈 𝙄𝙉𝙎𝙏𝘼𝙂𝙍𝘼𝙈 𝙇𝙄𝙉𝙆", rowId: `${usedPrefix}instagram`},

{title: "🚀 𝙐𝙨𝙪𝙖𝙧𝙞𝙤 𝙙𝙚 𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢 | 𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢 𝙐𝙨𝙚𝙧 🚀", description: "𝙑𝙄𝙎𝙐𝘼𝙇𝙄𝙕𝘼𝙍 𝙐𝙎𝙐𝘼𝙍𝙄𝙊 𝘿𝙀 𝙄𝙉𝙎𝙏𝘼𝙂𝙍𝘼𝙈\n𝙑𝙄𝙀𝙒 𝙄𝙉𝙎𝙏𝘼𝙂𝙍𝘼𝙈 𝙐𝙎𝙀𝙍", rowId: `${usedPrefix}igstalk`},

{title: "🚀 𝙃𝙞𝙨𝙩𝙤𝙧𝙞𝙖𝙨 𝙙𝙚 𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢 | 𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢 𝙎𝙩𝙤𝙧𝙞𝙚𝙨 🚀", description: "𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙍 𝙇𝘼𝙎 𝙃𝙄𝙎𝙏𝙊𝙍𝙄𝘼𝙎\n𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿 𝙏𝙃𝙀 𝙎𝙏𝙊𝙍𝙄𝙀𝙎", rowId: `${usedPrefix}igstory`},   

{title: "🚀 𝘿𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙨 𝙙𝙚 𝙏𝙞𝙠𝙏𝙤𝙠 | 𝙏𝙞𝙠𝙏𝙤𝙠 𝘿𝙤𝙬𝙣𝙡𝙤𝙖𝙙𝙨 🚀", description: "𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼 𝙑𝙄𝘿𝙀𝙊𝙎 𝘿𝙀 𝙏𝙄𝙆𝙏𝙊𝙆 𝘾𝙊𝙉 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀\n𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿 𝙏𝙄𝙆𝙏𝙊𝙆 𝙑𝙄𝘿𝙀𝙊𝙎 𝙒𝙄𝙏𝙃 𝘼 𝙇𝙄𝙉𝙆", rowId: `${usedPrefix}tiktok`},    

{title: "🚀 𝙁𝙤𝙩𝙤 𝙙𝙚 𝙐𝙨𝙪𝙖𝙧𝙞𝙤 𝙙𝙚 𝙏𝙞𝙠𝙏𝙤𝙠 | 𝙏𝙞𝙠𝙏𝙤𝙠 𝙐𝙨𝙚𝙧 𝙋𝙝𝙤𝙩𝙤 🚀", description: "𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼 𝙇𝘼 𝙁𝙊𝙏𝙊 𝙐𝙎𝘼𝙉𝘿𝙊 𝙀𝙇 𝙐𝙎𝙐𝘼𝙍𝙄𝙊 𝘿𝙀 𝙏𝙄𝙆𝙏𝙊𝙆\n𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿 𝙏𝙃𝙀 𝙋𝙃𝙊𝙏𝙊 𝙐𝙎𝙄𝙉𝙂 𝙏𝙄𝙆𝙏𝙊𝙆 𝙐𝙎𝙀𝙍𝙉𝘼𝙈𝙀", rowId: `${usedPrefix}tiktokfoto`},      

{title: "🚀 𝘿𝙚𝙩𝙖𝙡𝙡𝙚𝙨 𝙙𝙚 𝙐𝙨𝙪𝙖𝙧𝙞𝙤 𝙙𝙚 𝙏𝙞𝙠𝙏𝙤𝙠 | 𝙏𝙞𝙠𝙏𝙤𝙠 𝙐𝙨𝙚𝙧 𝘿𝙚𝙩𝙖𝙞𝙡𝙨 🚀", description: "𝘾𝙊𝙉𝙊𝘾𝙀 𝙈𝘼𝙎 𝙐𝙎𝘼𝙉𝘿𝙊 𝙀𝙇 𝙐𝙎𝙐𝘼𝙍𝙄𝙊 𝘿𝙀 𝙏𝙄𝙆𝙏𝙊𝙆\n𝙇𝙀𝘼𝙍𝙉 𝙈𝙊𝙍𝙀 𝙐𝙎𝙄𝙉𝙂 𝙏𝙃𝙀 𝙏𝙄𝙆𝙏𝙊𝙆 𝙐𝙎𝙀𝙍𝙉𝘼𝙈𝙀", rowId: `${usedPrefix}vertiktok`},    

{title: "🚀 𝘿𝙚𝙨𝙘𝙖𝙜𝙖𝙧 𝙘𝙤𝙣 𝙈𝙚𝙙𝙞𝙖𝙁𝙞𝙧𝙚 | 𝘿𝙤𝙬𝙣𝙡𝙤𝙖𝙙 𝙈𝙚𝙙𝙞𝙖𝙁𝙞𝙧𝙚 🚀", description: "𝙐𝙎𝘼 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝙑𝘼𝙇𝙄𝘿𝙊 𝘿𝙀 𝙈𝙀𝘿𝙄𝘼𝙁𝙄𝙍𝙀\n𝙐𝙎𝙀 𝘼 𝙑𝘼𝙇𝙄𝘿 𝙈𝙀𝘿𝙄𝘼𝙁𝙄𝙍𝙀 𝙇𝙄𝙉𝙆", rowId: `${usedPrefix}mediafire`},

{title: "🚀 𝘿𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙧 𝙍𝙚𝙥𝙤𝙨𝙞𝙩𝙤𝙧𝙞𝙤 | 𝘿𝙤𝙬𝙣𝙡𝙤𝙖𝙙 𝙍𝙚𝙥𝙤𝙨𝙞𝙩𝙤𝙧𝙮 🚀", description: "𝙐𝙎𝘼 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝘿𝙀 𝙍𝙀𝙋𝙊𝙎𝙄𝙏𝙊𝙍𝙄𝙊 𝘿𝙀 𝙂𝙄𝙏𝙃𝙐𝘽\n𝙐𝙎𝙀 𝘼 𝙂𝙄𝙏𝙃𝙐𝘽 𝙍𝙀𝙋𝙊𝙎𝙄𝙏𝙊𝙍𝙔 𝙇𝙄𝙉𝙆", rowId: `${usedPrefix}gitclone`},

]}, ] */

  //let name = await conn.getName(m.sender)

  var pp = "./Menu2.jpg";

  var who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;

  var username = conn.getName(who);

  //let user = global.db.data.users[m.sender]

  //user.registered = false

  const menu = `  ┌─「💻𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑」  
  ├Comando: ${usedPrefix}modapk 
  ├Descripcion: Descargar apks mod 
  ├Ejemplo: ${usedPrefix}modapk Facebook  
  ├➢Comando: ${usedPrefix}videodocumento 
  ├Descripcion: Descargar videos pesados en documento. 
  ├ejemplo: *${usedPrefix}videodocumento <enlace>* 
  ├➢Comando: ${usedPrefix}fb 
  ├Descripcion: Descargar videos de Facebook 
  ├ejemplo: *${usedPrefix}fb <link>* 
  ├➢Comando: ${usedPrefix}twitter  
  ├Descripcion: Descargar videos de twitter 
  ├ejemplo: *${usedPrefix}Twitter <link>*_ 
  ├➢Comando: ${usedPrefix}xnxxdl 
  ├Descripción: descargar videos de xnxx.com 
  ├Ejemplo: ${usedPrefix}xnxxdl *<enlace / link / url>* 
  ├➢Comando: ${usedPrefix}instagram 
  ├Descripciob: Descargar videos de instagram  
  ├ejemplo: *${usedPrefix}ig <enlace / link / url* 
  ├➢Comando: ${usedPrefix}mediafire 
  ├Descripción: Descargar archivos de mediafire 
  ├Ejemplo: ${usedPrefix}Mediafire <enlace / link / url  
  ├➢Comando: ${usedPrefix}gdrive  
  ├Descripción: Descargar archivos de gdrive 
  ├Ejemolo: ${usedPrefix}gdrive *<enlace / link / url>* 
  ├➢Comando: ${usedPrefix}gitclone 
  ├Descripción: Descargar repositorios de Github 
  ├Ejemplo: ${usedPrefix}gitclone *<enlace / link / url>* 
  ├➢Comando: ${usedPrefix}tiktok  
  ├Descripción: Descargar videos de tintok 
  ├ejemplo:${usedPrefix}Tintok *<enlace / link / url* 
  ├➢Comando: ${usedPrefix}ytmp3 
  ├Descripcion:Descargar Audios de Youtube 
  ├Ejemplo: ${usedPrefix}ytmp3 *<enlace / link / url*  
  ├➢Comando: ${usedPrefix}video  
  ├Descripcion: Descargar videos de Youtube 
  ├Ejemplo: ${usedPrefix}video <enlace / link / url  
  ├➢${usedPrefix}play.1  
  ├Descripción: Descargar audios de Youtube 
  ├Ejemplo: ${usedPrefix}play.1 <texto / enlace / link / url  
  ├➢Comando: ${usedPrefix}play.2  
  ├Descripción:Descargar videos de Youtube 
  ├Ejemplo: ${usedPrefix}play.2 <texto / enlace / link / url  
  ├➢Comando: ${usedPrefix}musica 
  ├Descripción: Descargar musicas de Youtube 
  ├Ejemplo: ${usedPrefix}musica <texto  
  ├➢Comando: ${usedPrefix}spotify  
  ├Descripción: Descargar musica de Spotify 
  ├Ejemplo: ${usedPrefix}spotify *texto* 
  ├➢Comando: ${usedPrefix}imagen  
  ├Ejemplo: ${usedPrefix}spotify *texto* 
  ├➢Comando: ${usedPrefix}pinteret *texto* 
  ├Descripción: Descargar imágenes de pinterest 
  ├➢Comando: ${usedPrefix}wallpaper  
  ├Descripcion: Descargar wallpaper/fondos 
  ├Ejemplo: ${usedPrefix}wallpaper *texto* 
  ├➢${usedPrefix}wallpaper2 <texto  
  ├➢Comando: ${usedPrefix}pptiktok 
  ├Descripción: ver perfiles de tintok 
  ├Ejemplo: ${usedPrefix}pptiktok <nombre de usuario  
  ├➢${usedPrefix}igstalk <nombre de usuario  
  ├➢${usedPrefix}igstory *<nombre de usuario>*_ 
  ├➢${usedPrefix}tiktokstalk <nombre de usuario  
  └────ׂ─ׂ─ׂ─ׂ──`.trim();

  await  conn.sendMessage(m.chat, { image: { url: "https://telegra.ph/file/d87bb48f283547ba5119d.jpg", },  caption: menu,  
        contextInfo: {  
          mentionedJid: [m.sender],  
          externalAdReply: {  
            title: `MENU - DESCARGAS`,  
            sourceUrl: "http://paypal.me/DorratBotOficial",  
            mediaType: 1,  
            showAdAttribution: true,  
            thumbnailUrl: "https://telegra.ph/file/d87bb48f283547ba5119d.jpg",  
          },  
        },  
      },  
      {  
        quoted: m,  
      }  
    ); 
               }


handler.help = ["infomenu"].map((v) => v + "able <option>");

handler.tags = ["group", "owner"];

handler.command = /^(descargasmenu)$/i;

//handler.register = true

handler.exp = 50;

export default handler;

const more = String.fromCharCode(8206);

const readMore = more.repeat(4001);

function clockString(ms) {
  let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000);

  let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;

  let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;

  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
}
