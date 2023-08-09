import { areJidsSameUser } from '@whiskeysockets/baileys'

let handler = async (m, { conn, args, participants }) => {
    let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
  if (!global.db.data.settings[conn.user.jid].restrict)
    throw "*[ ⚠️ ] 𝙴𝙻 𝙾𝚆𝙽𝙴𝚁 𝚃𝙸𝙴𝙽𝙴 𝚁𝙴𝚂𝚃𝚁𝙸𝙽𝙶𝙸𝙳𝙾 (𝚎𝚗𝚊𝚋𝚕𝚎 𝚛𝚎𝚜𝚝𝚛𝚒𝚌𝚝 / 𝚍𝚒𝚜𝚊𝚋𝚕𝚎 𝚛𝚎𝚜𝚝𝚛𝚒𝚌𝚝) 𝙴𝙻 𝚄𝚂𝙾 𝙳𝙴 𝙴𝚂𝚃𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾*";
   // const pp = './src/users.jpg'
   const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
    const groupNoAdmins = participants.filter(p => !p.admin && p.id)
    const listUsers = groupNoAdmins.map((v) => `@${v.id.split('@')[0]}`).join(' ')

    let pesan = args.join` `
    let oi = `*MENSAJE:* ${pesan}`
    let text = `[ 👻 *SERAN ELIMINADOS* 👻]\n\n${oi}\n\n*USUARIOS:*\n${listUsers}\n\n`.trim()
    let txt = text;

    let count = 0;
    for (const c of text) {
        await new Promise(resolve => setTimeout(resolve, 50));
        count++;

        if (count % 10 === 0) {
            conn.sendPresenceUpdate('composing' , m.chat);
        }
    }

    await conn.sendMessage(m.chat, {image: {url: pp}, caption: txt, mentions: conn.parseMention(txt) }, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100} );
    await delay(1 * 5000)

    let chat = db.data.chats[m.chat]
    chat.welcome = false

    try {
for (let user of listUsers.split(' ')) {
    const userId = user.endsWith('@s.whatsapp.net') ? user : `${user}@s.whatsapp.net`;
    await conn.groupParticipantsUpdate(m.chat, [userId], 'remove');
    await delay(6 * 1000);
  }

    } finally {
        chat.welcome = true
    }

    let txt2 = `👻 LA ELIMINACION DE:\n${listUsers}\nFUE EXITOSA`;
    let count2 = 0;

    for (const c of txt2) {
        await new Promise(resolve => setTimeout(resolve, 50));
        count2++;

        if (count2 % 10 === 0) {
//conn.sendPresenceUpdate('composing' , m.chat);
 }}
await conn.sendMessage(m.chat, {image: {url: pp}, caption: txt2, mentions: conn.parseMention(txt2) }, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100} );
}
handler.help = ['kickall', '-'].map(v => 'o' + v + ' @user')
handler.tags = ['owner']
handler.command = /^(kickall)$/i
handler.owner = true
handler.group = true
handler.botAdmin = true
export default handler

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
// version creada por https://github.com/ReyEndymion
