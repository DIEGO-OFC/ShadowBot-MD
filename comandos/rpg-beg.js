let handler = async (m) => {
  let d = Math.floor(Math.random() * 10);
  let time = global.db.data.users[m.sender].lastbeg + 1800000;
  if (new Date() - global.db.data.users[m.sender].lastbeg < 1800000)
    throw `*𝙴𝚜𝚝𝚊𝚜 𝚌𝚊𝚗𝚜𝚊𝚍𝚘, 𝚍𝚎𝚋𝚎𝚜 𝚍𝚎𝚜𝚌𝚊𝚗𝚜𝚊𝚛 𝚌𝚘𝚖𝚘 𝚖𝚒𝚗𝚒𝚖𝚘 ${msToTime(time - new Date())} 𝚙𝚊𝚛𝚊 𝚟𝚘𝚕𝚟𝚎𝚛 𝚊 mendigar!*`;
  m.reply(`*${pickRandom(global.beg)} $${d}* *DOLARES*`);
  global.db.data.users[m.sender].dolares += d * 1;
  global.db.data.users[m.sender].lastbeg = new Date() * 1;
};
handler.help = ["beg"];
handler.tags = ["xp"];
handler.command = ["beg", "mendigar"];
handler.fail = null;
handler.exp = 0;
export default handler;

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  return minutes + " m " + seconds + " s ";
}

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())];
}

global.beg = [
  "Te conviertes en un experto en encontrar monedas perdidas en los sofás y ganas",
  "Mendigas en línea ofreciendo consejos sobre cómo evitar las tareas del hogar y ganas",
  "Organizas una competencia de 'cara de cachorro triste' en la calle y los transeúntes te dan",
  "Llevas una señal que dice 'Mi unicornio necesita alimentos' y sorprendentemente recolectas",
  "Decides volverte un mendigo gourmet y pides donaciones para tu 'café imaginario', recaudas",
  "Ofreces un servicio de 'consejos inútiles' en la acera y la gente te gratifica con",
  "Pones un sombrero en el suelo y te haces pasar por 'artista del suelo', recaudas",
  "Te haces pasar por un influencer de la mendicidad en las redes sociales y obtienes",
  "Mendigas en el parque compartiendo chistes malos y ganas",
  "Vestido como un caballero en desgracia, pides limosnas en el mercado y logras recolectar",
  "Ofreces 'historias emocionantes' a cambio de monedas en el parque y ganas",
  "Vendes aire fresco en una bolsa como un 'producto exclusivo' y obtienes",
  "Colocas un letrero que dice 'El último de los mendigos Jedi necesita ayuda' y la gente te da",
  "Mendigas como 'consejero de problemas inexistentes' en la calle y ganas",
  "Ofreces abrazos virtuales y obtienes donaciones por tu 'calidez'",
  "Realizas un espectáculo de mímica cómica y la gente te recompensa con",
  "Vestido como un científico loco, pides 'donaciones para experimentos' y logras recolectar",
  "Mendigas en una esquina disfrazado de unicornio bailarín y ganas",
  "Ofreces 'predicciones del futuro gratuitas' y obtienes donaciones por tus imaginarias habilidades adivinatorias",
  "Pones un letrero que dice 'Mi otro trabajo es mendigar en Marte' y la gente te recompensa con",
  "Mendigas como 'entrenador de pulgares' para ayudar a las personas a hacer clic más rápido y ganas",
  "Ofreces 'curas imaginarias' para males inexistentes y obtienes donaciones por tus 'poderes de sanación'",
  "Llevas una caja de cartón que dice 'Espacio para alquilar en mi caja' y la gente te da",
  "Mendigas disfrazado de pirata y cuentas historias emocionantes de tus aventuras en alta mar, ganando",
  "Ofreces 'consejos de estilo' con ropa de segunda mano y obtienes donaciones por tu 'exquisito sentido de la moda'",
  "Haces una competencia de 'baile torpe' en la calle y ganas",
];
