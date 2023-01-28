
import { openAi } from "./lib/chatgpt.js";
let handler = async(m, { conn, text }) => {
if (!text) return m.reply("Ingresa un texto.")
 const { openAi } = require("./lib/chatgpt.js");
 let result_chatgpt = await openAi(text);
 m.reply(result_chatgpt.dorrat)
}
handler.command = /^(chatgpt|iatext)$/i
export default handler
