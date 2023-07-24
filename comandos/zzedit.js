import { delay } from "@adiwajshing/baileys";
let handler = async (m, { conn }) => {
  const { key } = await conn.sendMessage(
    m.chat,
    { text: "*Testing...*" },
    { quoted: m },
  );
  await delay(1000 * 4);
  await connn.sendMessage(m.chat, { text: "*Mensaje editado*", edit: key });
};
handler.command = /^(testedit)$/i;
export default handler;
