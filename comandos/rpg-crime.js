let handler = async (m) => {
  let time = global.db.data.users[m.sender].lasCrime + 600000;
  if (new Date() - global.db.data.users[m.sender].lasCrime < 600000)
    throw `*𝙴𝚜𝚝𝚊𝚜 𝚌𝚊𝚗𝚜𝚊𝚍𝚘, 𝚍𝚎𝚋𝚎𝚜 𝚍𝚎𝚜𝚌𝚊𝚗𝚜𝚊𝚛 𝚌𝚘𝚖𝚘 𝚖𝚒𝚗𝚒𝚖𝚘 ${msToTime(time - new Date())} 𝚙𝚊𝚛𝚊 𝚟𝚘𝚕𝚟𝚎𝚛 𝚊 cometer un crimen!*`;
  let result = Math.floor(Math.random() * 10);
  let reward = Math.floor(Math.random() * 20);
  if (result > 5) {
    m.reply(`Tu robo resultó exitoso; de una manera u otra, obtuviste: $${reward} *DOLARES*`);
    global.db.data.users[m.sender].dolares += reward * 1;
    global.db.data.users[m.sender].lasCrime = new Date() * 1;
  } else {
    m.reply(
      `Tu intento de robo se vio frustrado cuando la policía confiscó lo que habías tomado y te impuso una comisión equivalente por tu liberación! Te quitaron: $${reward} *DOLARES*`
    );
    global.db.data.users[m.sender].dolares -= reward * 1;
    global.db.data.users[m.sender].lasCrime = new Date() * 1;
  }
};
handler.help = ["crime"];
handler.tags = ["xp"];
handler.command = ["crimen"];
handler.fail = null;
handler.exp = 0;
export default handler;

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  return minutes + " m " + seconds + " s ";
}
