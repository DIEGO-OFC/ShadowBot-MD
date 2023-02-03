//By https://github.com/DIEGO-OFC

let handler = async (m, { conn, args, isAdmin, participants, isOwner }) => { 
   if (m.isGroup) { 
     if (!(isAdmin || isOwner)) { 
       dfail('admin', m, conn) 
       throw false 
     } 
   } 
     let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
  let online = [...Object.keys(conn.chats.(id).presences), conn.user.jid]
 conn.reply(m.chat, '┌「 *Daftar Wibu* 」\n' + online.map(v => '├ @' + v.replace(/@.+/, '')).join`\n` + '\n└────', m, { 
     contextInfo: { mentionedJid: online } 
   }) 
 } 
 handler.help = ['online'] 
 handler.tags = ['group'] 
 handler.command = /^(here|(list)?online)$/i 

 export default handler
