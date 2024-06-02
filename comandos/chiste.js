import fetch from 'node-fetch';

let handler = async (m, { usedPrefix, command }) => {
  let res = await fetch('https://official-joke-api.appspot.com/random_joke');
  let json = await res.json();
  if (json.setup && json.punchline)
    m.reply(`╔═══════════════════
║*😂 𝐂𝐇𝐈𝐒𝐓𝐄 𝐀𝐋𝐄𝐀𝐓𝐎𝐑𝐈𝐎 😂*
║-----------------------
║ *𝙲𝙷𝙸𝚂𝚃𝙴:* ${json.setup}
║-----------------------
║ *𝙿𝚄𝙽𝙲𝙷𝙻𝙸𝙽𝙴:* ${json.punchline}
╚═══════════════════`);
  else throw json;
};

handler.help = ["chiste"];
handler.tags = ["fun"];
handler.command = ["chiste", "joke"];

export default handler;