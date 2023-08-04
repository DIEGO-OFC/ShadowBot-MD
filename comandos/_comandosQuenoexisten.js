var handler = async (m, {  
      command, 
      conn, 
      args,  
      usedPrefix,  
      text
  }) => {

if (command == "ytmp4" || command == "") {
let mp4 = `este comando cambio, ahora es:
${usedPrefix}videomp4`.trim()

m.reply(mp4)
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
