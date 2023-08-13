let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i;

let handler = async (m, {conn, text, isMods, isOwner, isPrems}) => {
let link = (m.quoted ? (m.quoted.text ? m.quoted.text : text) : text) || text;
let [_, code] = link.match(linkRegex) || [];

if (!code)
throw new Error("Link no válido o roto.");

if (isPrems || isMods || isOwner || m.fromMe) {
let res = await conn.groupAcceptInvite(code);
await m.reply(`El bot se unió correctamente al grupo, éxito del bot! ✔️`);
} else {
const data = global.owner.filter(([id]) => id);

for (let jid of data.map(([id]) => [id] + "@s.whatsapp.net").filter((v) => v != conn.user.jid))
  await m.reply(`*[📌 𝐈𝐍𝐅𝐎 📌] Nuevo enlace para el bot para un grupo [❗𝐈𝐍𝐅𝐎❗]*\n\n*—◉ Nombre del propietario:* ` +
      "wa.me/" +
      m.sender.split("@")[0] +
      "\n*—◉ Enlace del grupo que no ha aceptado el bot:* " +
      link,
    jid
  );

await m.reply(
  "*[❗𝐈𝐍𝐅𝐎❗] El enlace de tu grupo ha sido enviado a mis administradores/propietarios. Serán evaluados y, si se aprueban, se agregarán al grupo.* \n\n*Algunas de las razones por las que tu enlace puede no ser aceptado incluyen:* \n*1.- El bot está deshabilitado.* \n*2.- El bot ha sido eliminado previamente del grupo.* \n*3.- El enlace del grupo no ha sido aceptado.* \n*4.- El bot no acepta grupos por decisión del propietario/administrador.* \n\n*👉🏻 Ten en cuenta que la aprobación de tu enlace para unirte al bot a un grupo puede tardar horas o días en ser procesada, ten paciencia.*"
);
}
};

handler.help = ["join [chat.whatsapp.com]"];
handler.tags = ["premium"];
// handler.premium = true
handler.command = /^join|nuevogrupo$/i;
export default handler;

