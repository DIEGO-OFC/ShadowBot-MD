
var handler = async (m, {conn}) => {
  if (!m.quoted) m.reply("*Reply message*");
  let msg = await conn.serializeM(await m.getQuotedObj());
  if (!m.quoted.isBaileys) throw "*The message was not sent by a bot!*";
  let teks = "";
  for (let i of msg.userReceipt) {
    let read = i.readTimestamp;
    let unread = i.receiptTimestamp;
    let waktu = read ? read : unread;
    teks += `> @${i.userJid.split("@")[0]}\n`;
    teks += ` ┗━> *TIME :* ${formatDate(waktu * 1000)} > *STATUS :* ${read ? "READ" : "SENT"}\n\n`;
  }
  await conn.reply(m.chat, teks, m);
};

handler.help = ["sider"];
handler.tags = ["group"];
handler.command = /^(getsider|nyimak|sider)$/i;

function formatDate(timestamp, locale = "id") {
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };

  return new Date(timestamp).toLocaleDateString(locale, options);
}

export default handler;
