let handler = async (m, {conn, text}) => {
  let coger = `🥵 te acabas acabas de coger a ${text}!🥵 
    
  te acabas de coger a la puta de ${text} ⁩mientras gemia como una maldita puta
    
  ${text} ¡te han cogido! 😏
 `.trim();
  m.reply(coger, null, {mentions: conn.parseMention(coger)});
};
handler.help = ["follar"];
handler.tags = ["fun"];
handler.command = /^(coger|violar|follar)$/i;
export default handler;
