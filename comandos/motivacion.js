import fetch from 'node-fetch';

let handler = async (m, { usedPrefix, command }) => {
  let res = await fetch('https://api.quotable.io/random?tags=motivational');
  let json = await res.json();
  if (json.content)
    m.reply(`╔═══════════════════
║≡ *🌟 𝐅𝐑𝐀𝐒𝐄 𝐌𝐎𝐓𝐈𝐕𝐀𝐂𝐈𝐎𝐍𝐀𝐋 🌟*
║-----------------------
║➢ *𝙵𝚁𝙰𝚂𝙴:* "${json.content}"
║-----------------------
║➢ *𝙰𝚄𝚃𝙾𝚁:* ${json.author}
╚═══════════════════`);
  else throw json;
};

handler.help = ["frase"];
handler.tags = ["fun"];
handler.command = ["frase", "motivacion"];

export default handler;