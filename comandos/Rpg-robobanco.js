let handler = async (m, {conn, isPrems}) => { 
   let d = 0;
   let success = Math.random() >= 0.9;

   if (success) {
     d = Math.floor(Math.random() * 1001) + 1000; 
   } else {
     let time = global.db.data.users[m.sender].lastrobbank + 3600000; // 1 hour cooldown
     if (new Date() - global.db.data.users[m.sender].lastrobbank < 3600000) {
       throw `no puedes robar otra vez el banco, te esta buscando la policia, espera ${msToTime(time - new Date())} para volver a robar el banco*`;
     }
   }

   let pp = "galeria/menudorrat3.jpg";
   m.reply(success ? `*${pickRandom(global.work)} $${d}* *DÓLARES*` : `*Fallaste, no ganaste nada.*`);

   if (success) {
     global.db.data.users[m.sender].dolares += d;
   }

   global.db.data.users[m.sender].lastrobbank = new Date();
 };

 handler.help = ["rob"]; 
 handler.tags = ["xp"]; 
 handler.command = ["robarbanco", "roboabanco"]; 
 handler.fail = null; 
 handler.exp = 0; 

 export default handler;
 
 function msToTime(duration) { 
   var milliseconds = parseInt((duration % 1000) / 100), 
     seconds = Math.floor((duration / 1000) % 60), 
     minutes = Math.floor((duration / (1000 * 60)) % 60), 
     hours = Math.floor((duration / (1000 * 60 * 60)) % 24); 
   hours = hours < 10 ? "0" + hours : hours; 
   minutes = minutes < 10 ? "0" + minutes : minutes; 
   seconds = seconds < 10 ? "0" + seconds : seconds; 
  
   return minutes + " m " + seconds + " s "; 
 } 
  
 function pickRandom(list) { 
   return list[Math.floor(list.length * Math.random())]; 
 } 
  
 global.robBank = [ 
   "robas el banco de santavilla y te llevas"
 ];
