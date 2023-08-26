//hecho por DIEGO-OFC pro

import axios from "axios";

const handler = async (m, { text }) => {
    let name = encodeURIComponent('${text}'); 
     let link = `https://www.bing.com/search?q=${name}`;
m.reply(`${text}\n${link}`)
}
handler.command = ["bing"];

export default handler;