import xa from 'javascript-obfuscator'

let handler = async (m, { conn, text }) => {
   if (!text) throw `Masukan text`
   let res = await xa.tools.deobfuscatorjs(text)
   conn.reply(m.chat, res.result, m)
}
handler.command = ['deob']

export default handler
