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
> cd Zirax-Bot-MD
> yarn install 
> npm install
> npm install 
> npm start
`.trim();
  conn.reply(m.chat, text, m, {
    contextInfo: {
      externalAdReply: {
        mediaUrl: null,
        mediaType: 1,
        description: null,
        title: "𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝙲𝙸𝙾𝙽 - 𝙸𝙽𝚂𝚃𝙰𝙻𝙰𝚁𝙱𝙾𝚃",
        body: "Zirax-Bot-MD",
        previewType: 0,
        thumbnail: fs.readFileSync("./Menu2.jpg"),
        sourceUrl: `https://github.com/DIEGO-OFC/Zirax-Bot-MD`,
      },
    },
  });
};
handler.command = /^(instalarbot)/i;
export default handler;
