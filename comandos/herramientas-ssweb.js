import axios from 'axios'

let handler = async (m, {conn,text, args}) => {
  if (!args[0]) return conn.reply(m.chat, "*[🔎] 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙻𝙰 𝚄𝚁𝙻 𝙳𝙴 𝚄𝙽𝙰 𝙿𝙰𝙶𝙸𝙽𝙰*", m);
    const r = await axios.get(`https://api.lolhuman.xyz/api/SSWeb?apikey=GataDios&url=${text}`)
  conn.sendMessage(m.chat, {image: {url: link}}, {quoted: m});
};
handler.help = ["ss", "ssf"].map((v) => v + " <url>");
handler.tags = ["internet"];
handler.command = /^ss(web)?f?$/i;
export default handler;
