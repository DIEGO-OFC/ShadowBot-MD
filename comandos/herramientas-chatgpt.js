import { openAi } from '../lib/chatgpt.js'

let handler = async(m, { conn, text }) => {
if (!text) return m.reply("Ingresa un texto.")
 let result_chatgpt = await openAi(text);
 conn.sendMessage(m.chat, {text: result_chatgpt.dorrat}, {quoted: m})
}
handler.command = /^(chatgpt|iatext)$/i
export default handler
