import fs from "fs";
let handler = async (m, {conn}) => {
  let text = `
*—◉ 𝚃𝚄𝚃𝙾𝚁𝙸𝙰𝙻 𝚃𝙴𝚁𝙼𝚄𝚇*:
https://youtu.be/DKo7PO2ta4o
*—◉ 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝚃𝙴𝚁𝙼𝚄𝚇*
termux-setup-storage
> apt update 
> pkg upgrade 
> pkg install git -y
> pkg install nodejs -y
> pkg install ffmpeg -y
> pkg install imagemagick -y
> pkg install yarn
> git clone https://github.com/DIEGO-OFC/ShadowBot-MD
> cd ShadowBot-MD
> yarn install 
> npm install
> npm install 
> npm start 

*—◉ 𝚃𝚄𝚃𝙾𝚁𝙸𝙰𝙻 𝙸𝙽𝙵𝙸𝙽𝙸𝚃𝚈-𝚆𝙰 𝙷𝙾𝚂𝚃𝙸𝙽𝙶 𝟸𝟺/𝟽*:
https://youtu.be/o2Ki6tjKF1U?si=bBIUUio7hruMmVPo
*—◉ 𝙿𝙰𝙶𝙸𝙽𝙰 𝙾𝙵𝙸𝙲𝙸𝙰𝙻:*
https://www.infinity-wa.xyz/
*—◉ 𝙳𝙰𝚂𝙷𝙱𝙾𝙰𝚁𝙳:*
https://dashboard.infinitywa.xyz
*—◉ 𝙿𝙰𝙽𝙴𝙻:*
https://store.panel-infinitywa.store
*—◉ 𝙳𝚄𝙳𝙰𝚂 𝚄𝙽𝙸𝙲𝙰𝙼𝙴𝙽𝚃𝙴 𝚂𝙾𝙱𝚁𝙴 𝙴𝙻 𝙷𝙾𝚂𝚃:* 
https://discord.com/invite/JNJYqP52 
*—◉ 𝙶𝚁𝚄𝙿𝙾 𝙳𝙴 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿:*
https://chat.whatsapp.com/GQ82mPnSYnm0XL2hLPk7FV
*—◉  𝙲𝙰𝙽𝙰𝙻 𝙳𝙴 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿:*
https://whatsapp.com/channel/0029Va4QjH7DeON0ePwzjS1A
`.trim();
  conn.reply(m.chat, text, m, {
    contextInfo: {
      externalAdReply: {
        mediaUrl: null,
        mediaType: 1,
        description: null,
        title: "𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝙲𝙸𝙾𝙽 - 𝙸𝙽𝚂𝚃𝙰𝙻𝙰𝚁𝙱𝙾𝚃",
        body: "ShadowBot",
        previewType: 0,
        thumbnail: fs.readFileSync("./Menu2.jpg"),
        sourceUrl: `https://github.com/DIEGO-OFC/Zirax-Bot-MD`,
      },
    },
  });
};
handler.command = /^(instalarbot)/i;
export default handler;
