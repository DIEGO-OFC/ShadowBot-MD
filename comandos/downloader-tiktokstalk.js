import fetch from "node-fetch";
var handler = async (m, {conn, text}) => {
  if (!text) return conn.reply(m.chat, "*[❗𝐈𝐍𝐅𝐎❗] 𝙸𝙽𝚂𝙴𝚁𝚃𝙴 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙼𝙰𝚂 𝙴𝙻 𝙽𝙾𝙼𝙱𝚁𝙴 𝙳𝙴 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 𝙳𝙴 𝚄𝙽 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 𝙳𝙴 𝚃𝙸𝙺𝚃𝙾𝙺*", m);
  try {
    var res = await fetch(`https://api.lolhuman.xyz/api/stalktiktok/${text}?apikey=${lolkeysapi}`);
    var res2 = `https://api.lolhuman.xyz/api/pptiktok/${text}?apikey=${lolkeysapi}`;
    var json = await res.json();
    if (res.status !== 200) throw await res.text();
    if (!json.status) throw json;
    var thumb = await (await fetch(json.result.user_picture)).buffer();
    const dorrat = `
*🔍 USUARIO:* ${json.result.username}
*👤 NOMBRE:* ${json.result.nickname}
*🌐 SEGUIDORES:* ${json.result.followers}
*📦 SEGUIDOS:* ${json.result.followings}
*👍 LIKES:* ${json.result.likes}
*📹 VIDEOS:* ${json.result.video}
*📝 DESCRIPCIÓN:* ${json.result.bio}
`.trim();
    conn.sendFile(m.chat, res2, "error.jpg", dorrat, m, false);
  } catch (e) {
    throw "*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚁𝚁𝙾𝚁, 𝙽𝙾 𝚂𝙴 𝙴𝙲𝙾𝙽𝚃𝚁𝙾 𝙴𝙻 𝙽𝙾𝙼𝙱𝚁𝙴 𝙳𝙴 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 𝙸𝙽𝙶𝚁𝙴𝚂𝙰𝙳𝙾*";
  }
};
handler.help = ["tiktokstalk"].map((v) => v + " <username>");
handler.tags = ["stalk"];
handler.command = /^(tiktokstalk|ttstalk)$/i;
export default handler;
