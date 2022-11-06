export async function all(m, conn) {
   
if (!m.isGroup)
return
let chats = global.db.data.chats[m.chat]
if (!chats.expired)
return !0
if (+new Date() > chats.expired) {
let caption = `*EL BOT SE VA DEL GRUPO! SI QUIERE QUE VUELVA, USE EL COMANDO _#bottemporal_ PARA QUE VUELVA AL GRUPO!!*`
let pp = './Menu2.jpg'
    
await this.sendButton(m.chat, caption, wm, pp, [['𝙰𝙳𝙸𝙾𝚂', '.hastapronto']], null)
await this.groupLeave(m.chat)
chats.expired = null
}}
