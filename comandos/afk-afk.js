var handler = async (m, {text}) => {
  const user = global.db.data.users[m.sender];
  user.afk = +new Date();
  user.afkReason = text;
  var afkinfo = `*DORRAT - AFK*\n\n*👤 USUARIO QUE ESTARA AFK: ${conn.getName(m.sender)}*\n*❍ MOTIVO (𝙰𝙵𝙺)${text ? ": " + text : ""}*\n❍ NO LO ETIQUETEN`;
  await m.reply(afkinfo)
};
handler.help = ["afk [alasan]"];
handler.tags = ["main"];
handler.command = /^afk$/i;
handler.dolares = 10;
export default handler;
