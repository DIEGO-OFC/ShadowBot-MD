/*
Creado por https://github.com/DIEGO-OFC | https://github.com/GataNina-Li
*/
let handler = async (m, {conn, text}) => {
  let groups = Object.keys(await conn.groupFetchAllParticipating());
  m.reply(`_mensaje enviando a ${groups.length}`);
  for (let id of groups) {
    let d = "./Menu2.jpg";

    await conn.sendButtonLoc(id, d, text, wm, "Okey", "Ok", m);
  }
  m.reply("*✅*");
};
handler.help = ["broadcastgroup", "bcgc"].map((v) => v + " <teks>");
handler.tags = ["owner"];
handler.command = /^(broadcast|bc)(group|grup|gc)$/i;
handler.rowner = true;
export default handler;
