import {sticker} from '../lib/sticker.js'; 
 import fetch from 'node-fetch'; 
 import MessageType from '@whiskeysockets/baileys'; 
 const handler = async (m, {conn, text}) => { 
   try { 
     if (m.quoted?.sender) m.mentionedJid.push(m.quoted.sender); 
     if (!m.mentionedJid.length) m.mentionedJid.push(m.sender); 
     const res = await fetch('https://nekos.life/api/kiss'); 
     const json = await res.json(); 
     const {url} = json; 
     const text2 = `+${m.sender.split('@')[0]} Te dio besos ${text}`.trim()
  m.reply(text2, null, {mentions: conn.parseMention(text2)});
     conn.sendFile(m.chat, url, null, {asSticker: true}); 
   } catch (e) { } 
 }; 
 handler.command = /^(kiss|skiss|kis|besos|beso)$/i; 
 export default handler;