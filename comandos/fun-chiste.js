// Créditos a https://github.com/matias-crypto 

import translate from '@vitalets/google-translate-api';
import fetch from 'node-fetch';

let handler = async (m, { conn, usedPrefix, command }) => {
  try {
    // Obtener chiste
    let res = await fetch('https://official-joke-api.appspot.com/random_joke');
    if (!res.ok) throw new Error('Error');
    
    let json = await res.json();
    if (json.setup && json.punchline) {
      // Traducir chiste
      let translatedSetup = await translate(json.setup, { to: 'es' });
      let translatedPunchline = await translate(json.punchline, { to: 'es' });

      // Obtener imagen aleatoria
      let imageUrl = 'https://picsum.photos/500/300';

      // Formatear mensaje
      let caption = `*Chiste aleatorio:*\n\n${translatedSetup.text}\n${translatedPunchline.text}`;

      // Enviar imagen con chiste
      await conn.sendMessage(m.chat, { image: { url: imageUrl }, caption: caption });
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