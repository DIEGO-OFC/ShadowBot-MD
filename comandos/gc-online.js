const handler = async (m, {conn}) => {
  if (!m.quoted) m.reply("*Reply message*");
  let msg = await conn.serializeM(await m.getQuotedObj());
  if (!m.quoted.isBaileys) throw "*The message was not sent by a bot!*";

  const teks = [];

  for (let i of msg.userReceipt) {
    console.log(i);
    let read = i.readTimestamp;
    let unread = i.receiptTimestamp;
    let waktu = read ? read : unread;
    teks.push({
      userJid: i.userJid.split("@")[0],
      readStatus: read ? "READ" : "SENT",
      time: formatDate(waktu * 1000),
    });
  }

  const formattedText = teks.map(({userJid, readStatus, time}) => `> @${userJid}\n ┗━> *TIME :* ${time} > *STATUS :* ${readStatus}`).join("\n\n");

  await conn.reply(m.chat, formattedText, m);
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
