//hecho por DIEGO-OFC pro

import axios from "axios";

const handler = async (m, { text }) => {
    let name = encodeURIComponent(getString('text')); 
     let link = `https://www.bing.com/search?q=${name}`;
m.reply(`${texto}\n${link}`)
}
handler.command = ["bing"];

export default handler;