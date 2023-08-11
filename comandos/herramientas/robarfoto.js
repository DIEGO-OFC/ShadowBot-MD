import fetch from "node-fetch"; 
 let handler = async (m) => { 
         let who; 
         if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender; 
         else who = m.sender; 
         let url = await conn.profilePictureUrl(who, "image"); 
         await conn.sendFile( 
                 m.chat, 
                 url, 
                 "profile.jpg", 
                 `@${who.split`@`[0]}`, 
                 m, 
                 null, 
                 { mentions: [who] } 
         ); 
 }; 
 handler.command = /^(robarfoto)$/i; 
 handler.help = ["getprofile"]; 
 handler.tags = ["stalker"]; 
 handler.group = true; 
 handler.limit = true; 
 export default handler;
