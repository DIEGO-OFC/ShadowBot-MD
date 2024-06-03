let handler = async (m, {conn, text}) => {
  let name = await conn.getName(m.sender);

 m.reply(`*[ 🌺 ️] 𝐍𝐨 𝐞𝐭𝐢𝐪𝐮𝐞𝐭𝐞𝐬 𝐚 𝐦𝐢 𝐜𝐫𝐞𝐚𝐝𝐨𝐫, 𝐬𝐢 𝐞𝐬 𝐚𝐥𝐠𝐨 𝐮𝐫𝐠𝐞𝐧𝐭𝐞 𝐜𝐨𝐧𝐭𝐚𝐜𝐭𝐚 𝐜𝐨𝐧 𝐞𝐥 𝐚 𝐬𝐮 𝐜𝐡𝐚𝐭 𝐩𝐫𝐢𝐯𝐚𝐝𝐨*`)
}
handler.customPrefix = /@584125778026/i;
handler.command = new RegExp();

export default handler;
