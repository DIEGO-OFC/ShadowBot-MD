import RandoMon from 'randomon';
let handler = async (m, {conn, usedPrefix, command}) => {
   const poke = RandoMon();
     const caption = `*乂 ⺀ RANDOM - POKEMON ⺀ 乂*`  
     await conn.sendFile(m.chat, poke, "zirax.jpg", caption, m);
 };
  handler.help = ["pokemon"];
handler.tags = ["pokemon"];
handler.limit = 3;
handler.command = /^(pokemon)$/i;
export default handler;
