var handler = async (m, {  
      command, 
      conn, 
      args,  
      usedPrefix,  
      text
  }) => {

if (command == "ytmp4" || command == "ytvmp4") {
let mp4 = `este comando cambio, ahora es:
${usedPrefix}videomp4`.trim()

m.reply(mp4)
}

if (command == "play") {
var play = `este comando cambio, ahora es:
${usedPrefix}play`.trim()
m.reply(play)
}
}
handler.command = [
  "ytmp4",
  "",
  "",
  ""
  ];
  handler.tags = ["internet"]  
  export default handler 
