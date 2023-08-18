import pokemon from 'pokemon';
let handler = async (m, {conn, usedPrefix, command}) => {
   const poke = await pokemon.all()
     const caption = `*乂 ⺀ RANDOM - POKEMON ⺀ 乂*`  
     await conn.sendFile(m.chat, poke, "zirax.jpg", caption, m);
 };
  handler.help = ["pokemon"];
handler.tags = ["pokemon"];
handler.limit = 3;
handler.command = /^(pokemon)$/i;
export default handler;
