//import animeNames from '../lib/anime_names.json';

var handler = async (m, { conn }) => {
  const randomAnime = animeNames[Math.floor(Math.random() * animeNames.length)];
  conn.reply(m.chat, `🎬 Nombre de anime aleatorio: *${randomAnime}*`, m);
};
handler.help = ["anime"];
handler.tags = ["random"];
handler.command = ["randoma", "animr"];
export default handler;

global.animeNames = 
[
    "Naruto",
    "Dragon Ball",
    "One Piece",
    "Attack on Titan",
    "Death Note",
    "My Hero Academia",
    "Tokyo Ghoul",
    "Sword Art Online",
    "Fullmetal Alchemist",
    "Demon Slayer",
    "Hunter x Hunter",
    "One Punch Man",
    "Fairy Tail",
    "Bleach",
    "Naruto Shippuden",
    "JoJo's Bizarre Adventure",
    "Black Clover",
    "Neon Genesis Evangelion",
    "Code Geass",
    "Steins;Gate"
]