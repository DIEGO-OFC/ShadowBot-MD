var handler = async (m, {conn, groupMetadata}) => {
  const toM = (a) => "@" + a.split("@")[0];
  const ps = groupMetadata.participants.map((v) => v.id);
  const a = ps.getRandom();
  conn.sendMessage(m.chat, { text: `Pero no tanto como la mama de ${toM(a)}`}, { quoted: m}, { mentions: [a]})
};

handler.customPrefix = /^facil|es facil|fácil|es fácil|fasil|es fasil|la chupa bien|se le da bien chupar|chupa bn|chupa bien|la chupa bn/i;
handler.command = new RegExp();
handler.tags = ["fun"];

export default handler;
