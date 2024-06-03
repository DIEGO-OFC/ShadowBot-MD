//comando desde 0 hecho en Shadow bot y créditos a Mathias crypto
import fetch from 'node-fetch';

let handler = async (m, { usedPrefix, command, args }) => {
  try {
    const timeZones = {
      "mexico": "America/Mexico_City",
      "argentina": "America/Argentina/Buenos_Aires",
      "chile": "America/Santiago",
      "colombia": "America/Bogota",
      "peru": "America/Lima"
    };

    if (args.length === 0) {
      let cities = Object.keys(timeZones).map(city => city.charAt(0).toUpperCase() + city.slice(1)).join(", ");
      m.reply(`Por favor, proporciona el nombre de la ciudad. Ciudades disponibles: ${cities}`);
      return;
    }

   
    let normalize = (str) => str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
    let city = normalize(args[0]);

    if (!timeZones.hasOwnProperty(city)) {
      m.reply(`Ciudad no encontrada. Ciudades disponibles: ${Object.keys(timeZones).map(city => city.charAt(0).toUpperCase() + city.slice(1)).join(", ")}`);
      return;
    }

    let timeZone = timeZones[city];
    let res = await fetch(`http://worldtimeapi.org/api/timezone/${timeZone}`);
    if (!res.ok) throw new Error('Error al obtener el tiempo');

    let json = await res.json();
    let currentTime = new Date(json.datetime).toLocaleTimeString('es-ES', { timeZone });

    m.reply(`${city.charAt(0).toUpperCase() + city.slice(1)}: ${currentTime}`);
  } catch (e) {
    console.error(e);
    m.reply('Ocurrió un error al obtener la hora.');
  }
};

handler.help = ["horarios"];
handler.tags = ["info"];
handler.command = ["horarios", "horario"]; 

export default handler;