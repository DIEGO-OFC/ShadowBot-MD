import fetch from 'node-fetch';

let handler = async (m, { usedPrefix, command }) => {
  try {
    const timeZones = [
      { country: "México", timeZone: "America/Mexico_City" },
      { country: "Argentina", timeZone: "America/Argentina/Buenos_Aires" },
      { country: "Chile", timeZone: "America/Santiago" },
      { country: "Colombia", timeZone: "America/Bogota" },
      { country: "Perú", timeZone: "America/Lima" }
    ];

    let result = "Horarios actuales en LATAM:\n\n";

    for (let tz of timeZones) {
      let res = await fetch(`http://worldtimeapi.org/api/timezone/${tz.timeZone}`);
      if (!res.ok) throw new Error('Error al obtener el tiempo');

      let json = await res.json();
      let currentTime = new Date(json.datetime).toLocaleTimeString('es-ES', { timeZone: tz.timeZone });
      result += `${tz.country}: ${currentTime}\n`;
    }

    m.reply(result);
  } catch (e) {
    console.error(e);
    m.reply('Ocurrió un error al obtener los horarios.');
  }
};

handler.help = ["horarios"];
handler.tags = ["info"];
handler.command = ["horarios"];

export default handler;