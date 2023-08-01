import fetch from "node-fetch"; 
 let handler = async (m, {text, usedPrefix, command}) => { 
   if (!text) throw `uhm.. mau cari apa?\n\nContoh: ${usedPrefix + command} bokep🐒`; 
 if (text.includes(`${antiyaoi}`)) return m.reply('${sinyaoi}') 
   try { 
     let res = await fetch(https://api.lolhuman.xyz/api/pornhubsearch?apikey=${lolkeysapi}&query=${text}); 
     let json = res.result; 
     let cap = `Hasil Pencarian Dari ${text}\n`; 
     for (let v of json) { 
       cap += `• *Title :* ${v.title} 
 • *Info :* ${v.info} 
 • *Link :* ${v.link} 
 `; 
       cap += "\n" + "••••••••••••••••••••••••" + "\n"; 
     } 
     m.reply(cap); 
   } catch (e) { 
     console.error(e); 
     throw e; 
   } 
 }; 
 handler.help = ["pornhubsearch"].map((v) => v + " <query>"); 
 handler.tags = ["downloader", "premium"]; 
 handler.command = /^pornhubsearch|pornhub$/i; 
  
 handler.register = false; 
 handler.premium = true;
