import {search, download} from 'aptoide-scraper'; 
 var handler = async (m, {conn, usedPrefix: prefix, command, text}) => { 
  if (!text) throw `*[❌] Ingrese el nombre de la APK que quiera buscar.*`; 
   try {     
     var searchA = await search(text); 
     var data5 = await download(searchA[0].id); 
     const response = `📲 *Descargador de Aptoide* 📲\n\n📌 *Nombre:* ${data5.name}\n📦 *Package:* ${data5.package}\n🕒 *Última actualización:* ${data5.lastup}\n📥 *Tamaño:* ${data5.size}` 
     await conn.sendMessage(m.chat, {image: {url: data5.icon}, caption: response}, {quoted: m}); 
  if (data5.size.includes('GB') || data5.size.replace(' MB', '') > 999) { 
       return await conn.sendMessage(m.chat, {text: '*[ ⛔ ] El archivo es demasiado pesado por lo que no se enviará.*'}, {quoted: m}); 
     } 
     await conn.sendMessage(m.chat, {document: {url: data5.dllink}, mimetype: 'application/vnd.android.package-archive', fileName: data5.name + '.apk', caption: null}, {quoted: m}); 
   } catch { 
     throw `*[⚠️] Error, no se encontrarón resultados para su búsqueda.*`; 
   }     
 }; 
 handler.command = /^(apkmod|modapk|dapk2|aptoide|aptoidedl)$/i; 
 handler.dolares = 5
 export default handler;
