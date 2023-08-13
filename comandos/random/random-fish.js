import fetch from 'node-fetch'
let handler = async (m, {conn}) => {
let res = await fetch(`https://api.sefinek.net/api/v1/animals/fish`)

let json = await res.json()

conn.sendMessage(m.chat, {image: {url: json.message }}, {quoted: m})
}
handler.help = ['fish']
handler.command = ['pescado', 'fish']
export default handler 
