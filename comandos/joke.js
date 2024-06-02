import fetch from 'node-fetch';
import translate from '@vitalets/google-translate-api';

let handler = async (m, { usedPrefix, command }) => {
  try {
    let res = await fetch('https://official-joke-api.appspot.com/random_joke');
    if (!res.ok) throw new Error('Error');
    
    let json = await res.json();
    if (json.setup && json.punchline) {
      let translatedSetup = await translate(json.setup, { to: 'es' });
      let translatedPunchline = await translate(json.punchline, { to: 'es' });
      
      m.reply(`╔═══════════════════
║*😂 𝐂𝐇𝐈𝐒𝐓𝐄 𝐀𝐋𝐄𝐀𝐓𝐎𝐑𝐈𝐎 😂*
║-----------------------
║ *𝙲𝙷𝙸𝚂𝚃𝙴:* ${translatedSetup.text}
║-----------------------
║ *𝙿𝚄𝙽𝙲𝙷𝙻𝙸𝙽𝙴:* ${translatedPunchline.text}
╚═══════════════════`);
    } else {
      throw new Error('Invalid');
    }
  } catch (e) {
    console.error(e);
    m.reply('Ocurrió un error.');
  }
};

handler.help = ["chiste"];
handler.tags = ["fun"];
handler.command = ["chiste", "joke"];

export default handler;
