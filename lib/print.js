import { WAMessageStubType } from '@adiwajshing/baileys'; 
 import PhoneNumber from 'awesome-phonenumber'; 
 import chalk from 'chalk'; 
 import { watchFile, readFile, writeFile } from 'fs'; 
 import terminalImage from 'terminal-image'; 
 import urlRegex from 'url-regex-safe'; 
  
 let logCount = 0; 
 let codeUpdated = false; 
  
 export default async function (m, conn = { user: {} }) { 
   const formatType = (type) => type ? type.replace(/message$/i, '').replace('audio', m.msg.ptt ? 'PTT' : 'audio').replace(/^./, v => v.toUpperCase()) : 'Unknown'; 
   const formatTime = (timestamp) => (timestamp ? new Date(1000 * (timestamp.low || timestamp)).toLocaleString() : new Date().toLocaleString()); 
  
   const _name = await conn.getName(m.sender); 
   const sender = PhoneNumber('+' + m.sender.replace('@s.whatsapp.net', '')).getNumber('international') + (_name ? ' ~' + _name : ''); 
   const chat = await conn.getName(m.chat); 
   const filesize = m.msg && m.msg.vcard ? m.msg.vcard.length : m.msg && m.msg.fileLength ? m.msg.fileLength.low || m.msg.fileLength : m.text ? m.text.length : 0; 
  
   if (m.sender) { 
     // Output Message Info 
     console.log(chalk.cyan('╭──────────────────────────────────────···')); 
     console.log(`📨 ${chalk.redBright('Message Info')}:`); 
     console.log(chalk.cyan('├──────────────────────────────────────···')); 
     console.log(`   ${chalk.cyan('- Message Type')}: ${formatType(m.mtype)}`); 
     console.log(`   ${chalk.cyan('- Message ID')}: ${m.msg?.id || m.key.id || 'N/A'}`); 
     console.log(`   ${chalk.cyan('- Sent Time')}: ${formatTime(m.messageTimestamp)}`); 
     console.log(`   ${chalk.cyan('- Message Size')}: ${formatSize(filesize || 0)}`); 
     console.log(`   ${chalk.cyan('- Sender ID')}: ${m.sender.split('@')[0]}`); 
     console.log(`   ${chalk.cyan('- Sender Name')}: ${m.name ? conn.user.name : 'N/A'}`); 
     console.log(`   ${chalk.cyan('- Chat ID')}: ${m.chat.split('@')[0]}`); 
     console.log(`   ${chalk.cyan('- Chat Name')}: ${chat || 'N/A'}`); 
     console.log(`   ${chalk.cyan('- Total Log Messages')}: ${logCount}`); 
     console.log(chalk.cyan('╰──────────────────────────────────────···')); 
   } 
  
   // Output text message with formatting 
   if (typeof m?.text === 'string' && m.text) { 
     console.log(chalk.cyan('╭──────────────────────────────────────···')); 
     let logMessage = m.text.replace(/\u200e+/g, ''); 
  
     // Formatting function for markdown-like text 
     const mdRegex = /(?<=(?:^|[\s\n])\S?)(?:([*_~])(.+?)\1|```((?:.||[\n\r])+?)```)(?=\S?(?:[\s\n]|$))/g; 
     const mdFormat = (depth = 4) => (_, type, text, monospace) => { 
       const types = { _: 'italic', '*': 'bold', '~': 'strikethrough' }; 
       text = text || monospace; 
       const formatted = !types[type] || depth < 1 ? text : chalk[types[type]](text.replace(mdRegex, mdFormat(depth - 1))); 
       return formatted; 
     }; 
  
     if (logMessage.length < 4096) { 
       logMessage = logMessage.replace(urlRegex, (url, i, text) => { 
         const end = url.length + i; 
         return i === 0 || end === text.length || (/^\s$/.test(text[end]) && /^\s$/.test(text[i - 1])) ? chalk.blueBright(url) : url; 
       }); 
     } 
  
     logMessage = logMessage.replace(mdRegex, mdFormat(4)); 
  
     if (m.mentionedJid) { 
       for (const user of m.mentionedJid) { 
         logMessage = logMessage.replace('@' + user.split`@`[0], chalk.blueBright('@' + await conn.getName(user))); 
       } 
     } 
  
     console.log(m.error != null ? `🚨 ${chalk.red(logMessage)}` : m.isCommand ? `⚙️ ${chalk.yellow(logMessage)}` : logMessage); 
     console.log(chalk.cyan('╰──────────────────────────────────────···')); 
   } 
  
   if (m.msg) { 
     const attachmentType = m.mtype.replace(/message$/i, ''); 
  
     if (/document/i.test(attachmentType)) { 
       console.log(chalk.cyan('╭──────────────────────────────────────···')); 
       console.log(chalk.redBright(`📄 Attached Document: ${m.msg.fileName || m.msg.displayName || 'Document'}`)); 
       console.log(chalk.cyan('╰──────────────────────────────────────···')); 
     } else if (/contact/i.test(attachmentType)) { 
       console.log(chalk.cyan('╭──────────────────────────────────────···')); 
       console.log(chalk.redBright(`👨 Attached Contact: ${m.msg.displayName || 'N/A'}`)); 
       console.log(chalk.cyan('╰──────────────────────────────────────···')); 
     } else if (/audio/i.test(attachmentType)) { 
       console.log(chalk.cyan('╭──────────────────────────────────────···')); 
       const duration = m.msg.seconds; 
 const formattedDuration = formatDuration(duration); 
 console.log(chalk.redBright(`🎵 Attached Audio: ${m.msg.ptt ? '(PTT)' : '(Audio)'} - Duration: ${formattedDuration}`)); 
       console.log(chalk.cyan('╰──────────────────────────────────────···')); 
     } else if (/image/i.test(attachmentType)) { 
       console.log(chalk.cyan('╭──────────────────────────────────────···')); 
       const attachmentName = m.msg.caption || attachmentType; 
       console.log(chalk.redBright(`🟡 Attached Image: ${attachmentName}`)); 
  
       if (m.msg.url && global.opts["img"]) { 
         try { 
           const imageBuffer = await m.download(); 
           const terminalImg = await terminalImage.buffer(imageBuffer); 
           console.log(terminalImg); 
         } catch (error) { 
           console.error(chalk.red('Error displaying image:'), error); 
         } 
       } 
  
       console.log(chalk.cyan('╰──────────────────────────────────────···')); 
     } else if (/video/i.test(attachmentType)) { 
       console.log(chalk.cyan('╭──────────────────────────────────────···')); 
       const attachmentName = m.msg.caption || attachmentType; 
       console.log(chalk.redBright(`📹 Attached Video: ${attachmentName}`)); 
       console.log(chalk.cyan('╰──────────────────────────────────────···')); 
     } else if (/sticker/i.test(attachmentType)) { 
       console.log(chalk.cyan('╭──────────────────────────────────────···')); 
       const attachmentName = m.msg.caption || attachmentType; 
       console.log(chalk.redBright(`🎴 Attached Sticker: ${attachmentName}`)); 
       console.log(chalk.cyan('╰──────────────────────────────────────···')); 
     } 
   } 
  
   if (m.sender) { 
     console.log(chalk.greenBright(`\n  ${chalk.red('From')}: ${getPhoneNumber(m.sender)}`)); 
     console.log(chalk.blueBright(`  ${chalk.red('To')}: ${getPhoneNumber(conn.user?.jid)}`)); 
     console.log(chalk.magentaBright('\n')); 
   } 
  
   // Increase log count 
   logCount++; 
 } 
  
 const getPhoneNumber = (jid) => PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international'); 
 const getContactInfo = (jid) => `   - ${getPhoneNumber(jid)} ${conn.getName(jid) ? `~ ${conn.getName(jid)}` : ''}`; 
  
 // Watch the file for changes 
 const file = global.__filename(import.meta.url); 
 watchFile(file, async () => { 
   console.log(chalk.redBright("Update 'lib/print.js'")); 
  
   if (!codeUpdated) { 
     // Read the current content of the file 
     readFile(file, 'utf8', (err, data) => { 
       if (err) { 
         console.error(chalk.redBright('Error reading the file:'), err); 
         return; 
       } 
  
       // Write the updated code back to the file 
       writeFile(file, data, (writeErr) => { 
         if (writeErr) { 
           console.error(chalk.redBright('Error saving the updated code:'), writeErr); 
         } else { 
           codeUpdated = true; 
           console.log(chalk.greenBright('Updated code has been saved to the file.')); 
         } 
       }); 
     }); 
   } 
 }); 
  
 function formatSize(size) { 
   const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']; 
   let i = 0; 
  
   while (size >= 1024 && i < units.length - 1) { 
     size /= 1024; 
     i++; 
   } 
  
   return `${size.toFixed(2)} ${units[i]}`; 
 } 
  
 function formatDuration(duration) { 
   const timeUnits = ['Y', 'M', 'W', 'D', 'h', 'm', 's']; 
   const timeLabels = ['Year', 'Month', 'Week', 'Day', 'Hour', 'Minute', 'Second']; 
   let formattedDuration = ''; 
   let i = 0; 
  
   while (i < timeUnits.length) { 
     const unitInSeconds = i < 4 ? 86400 * (i === 2 ? 7 : 1) : 3600; 
     const value = Math.floor(duration / unitInSeconds); 
     duration -= value * unitInSeconds; 
  
     if (value > 0) { 
       formattedDuration += `${value} ${timeLabels[i]}${value > 1 ? 's' : ''} `; 
     } 
  
     i++; 
   } 
  
   return formattedDuration.trim(); 
 }






/*import { WAMessageStubType } from "@whiskeysockets/baileys"; 
 import PhoneNumber from "awesome-phonenumber"; 
 import chalk from "chalk"; 
 import { watchFile } from "fs"; 
  
 const terminalImage = global.opts["img"] ? require("terminal-image") : ""; 
 const urlRegex = (await import("url-regex-safe")).default({ strict: false }); 
  
 export default async function (m, conn = { user: {} }) { 
   let _name = await conn.getName(m.sender); 
   let sender = PhoneNumber("+" + m.sender.replace("@s.whatsapp.net", "")).getNumber("international") + (_name ? " ~" + _name : ""); 
   let chat = await conn.getName(m.chat); 
   let img; 
   try { 
     if (global.opts["img"]) img = /sticker|image/gi.test(m.mtype) ? await terminalImage.buffer(await m.download()) : false; 
   } catch (e) { 
     console.error(e); 
   } 
   let filesize = 
     (m.msg ? 
       (m.msg.vcard ? m.msg.vcard.length : 
         m.msg.fileLength ? m.msg.fileLength.low || m.msg.fileLength : 
           m.msg.axolotlSenderKeyDistributionMessage ? m.msg.axolotlSenderKeyDistributionMessage.length : 
             m.text ? m.text.length : 
               0) : 
       m.text ? m.text.length : 
         0) || 0; 
   let user = global.db.data.users[m.sender]; 
   let me = PhoneNumber("+" + (conn.user?.jid).replace("@s.whatsapp.net", "")).getNumber("international"); 
  
   console.log( 
     `╔═══════⊂(𝐒𝐡𝐚𝐝𝐨𝐰𝐁𝐨𝐭)⊃══════════ 
 ║🔰 ${chalk.blue("%s")}\n║⏱️ㅤ${chalk.black(chalk.cyan("%s"))}ㅤ${chalk.black(chalk.cyan("%s"))}\n║🌠ㅤ${chalk.magenta("%s [%s %sB]")} 
 ║🛡️ㅤ${chalk.white("%s")}\n║💎ㅤ${chalk.yellow("%s%s")}\n║📩ㅤ${chalk.magenta("%s")}\n║🗨️ㅤ${chalk.black(chalk.red("%s"))} 
 ╚═════════⊂(𝐒𝐡𝐚𝐝𝐨𝐰𝐁𝐨𝐭)⊃════════ 
 📧 mensaje/media: 
     `.trim(), 
     me + " ~" + conn.user.name + `${conn.user.jid == global.conn.user.jid ? "" : " (Sub Bot)"}`, 
     (m.messageTimestamp ? new Date(1000 * (m.messageTimestamp.low || m.messageTimestamp)) : new Date()).toTimeString(), 
     m.messageStubType ? WAMessageStubType[m.messageStubType] : "", 
     filesize, 
     filesize === 0 ? 0 : (filesize / 1009 ** Math.floor(Math.log(filesize) / Math.log(1000))).toFixed(1), 
     ["", ..."KMGTP"][Math.floor(Math.log(filesize) / Math.log(1000))] || "", 
     sender, 
     m ? m.exp : "?", 
     user ? "|" + user.exp + "|" + user.dolares : "" + ("|" + user.level + user.limit), 
     m.chat + (chat ? " ~" + chat : ""), 
     m.mtype 
       ? m.mtype 
           .replace(/message$/i, "") 
           .replace("audio", m.msg.ptt ? "PTT" : "audio") 
           .replace(/^./, (v) => v.toUpperCase()) 
       : "" 
   ); 
   if (img) console.log(img.trimEnd()); 
   if (typeof m.text === "string" && m.text) { 
     let log = m.text.replace(/\u200e+/g, ""); 
     let mdRegex = /(?<=(?:^|[\s\n])\S?)(?:([*_~])(.+?)\1|```((?:.||[\n\r])+?)```)(?=\S?(?:[\s\n]|$))/g; 
     let mdFormat = 
       (depth = 4) => 
       (_, type, text, monospace) => { 
         let types = { 
           _: "italic", 
           "*": "bold", 
           "~": "strikethrough", 
         }; 
         text = text || monospace; 
         let formatted = !types[type] || depth < 1 ? text : chalk[types[type]](text.replace(mdRegex, mdFormat(depth - 1))); 
         return formatted; 
       }; 
     if (log.length < 1024) 
       log = log.replace(urlRegex, (url, i, text) => { 
         let end = url.length + i; 
         return i === 0 || end === text.length || (/^\s$/.test(text[end]) && /^\s$/.test(text[i - 1])) ? chalk.blueBright(url) : url; 
       }); 
     log = log.replace(mdRegex, mdFormat(4)); 
     if (m.mentionedJid) 
       for (let user of m.mentionedJid) log = log.replace("@" + user.split`@`[0], chalk.blueBright("@" + (await conn.getName(user)))); 
     console.log(m.error != null ? chalk.red(log) : m.isCommand ? chalk.yellow(log) : log); 
   } 
   if (m.messageStubParameters) 
     console.log( 
       m.messageStubParameters 
         .map((jid) => { 
           jid = conn.decodeJid(jid); 
           let name = conn.getName(jid); 
           return chalk.gray(PhoneNumber("+" + jid.replace("@s.whatsapp.net", "")).getNumber("international") + (name ? " ~" + name : "")); 
         }) 
         .join(", ") 
     ); 
   if (/document/i.test(m.mtype)) console.log(`🗂️ ${m.msg.fileName || m.msg.displayName || "Document"}`); 
   else if (/ContactsArray/i.test(m.mtype)) console.log(`👨‍👩‍👧‍👦 ${" " || ""}`); 
   else if (/contact/i.test(m.mtype)) console.log(`👨 ${m.msg.displayName || ""}`); 
   else if (/audio/i.test(m.mtype)) { 
     const duration = m.msg.seconds; 
     console.log( 
       `${m.msg.ptt ? "🎤ㅤ(PTT " : "🎵ㅤ("}AUDIO) ${Math.floor(duration / 60) 
         .toString() 
         .padStart(2, 0)}:${(duration % 60).toString().padStart(2, 0)}` 
     ); 
   } 
   console.log(); 
 } 
 let file = global.__filename(import.meta.url); 
 watchFile(file, () => { 
   console.log(chalk.redBright("Update 'lib/print.js'")); 
 });*/