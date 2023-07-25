async function handler(m, {command}) {
  command = command.toLowerCase();
  this.anonymous = this.anonymous ? this.anonymous : {};
  switch (command) {
    case "next":
    case "leave": {
      let room = Object.values(this.anonymous).find((room) => room.check(m.sender));
      if (!room)
let nojugas = `[❗𝐈𝐍𝐅𝐎❗] 𝙽𝙾 𝙴𝚂𝚃𝙰𝚂 𝙴𝙽 𝚄𝙽 𝙲𝙷𝙰𝚃 𝙰𝙽𝙾𝙽𝙸𝙼𝙾*\n\n*¿𝚀𝚄𝙸𝙴𝚁𝙴𝚂 𝙸𝙽𝙸𝙲𝙸𝙰𝚁 𝚄𝙽𝙾?*\n_responda al mensaje con el comando .start_`

this.sendMessage(m.chat, { text: nojugas }, { quoted: m })   
      m.reply("*[ ✔ ] 𝚂𝙰𝙻𝙸𝙾 𝙲𝙾𝙽 𝙴𝚇𝙸𝚃𝙾 𝙳𝙴𝙻 𝙲𝙷𝙰𝚃 𝙰𝙽𝙾𝙽𝙸𝙼𝙾*");
let otrouser = `*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙾𝚃𝚁𝙾 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 𝙰𝙷 𝙰𝙱𝙰𝙽𝙳𝙾𝙽𝙰𝙳𝙾 𝙴𝙻 𝙲𝙷𝙰𝚃 𝙰𝙽𝙾𝙽𝙸𝙼𝙾*\n\n*¿𝚀𝚄𝙸𝙴𝚁𝙴𝚂 𝙸𝚁 𝙰 𝙾𝚃𝚁𝙾 𝙲𝙷𝙰𝚃 𝙰𝙽𝙾𝙽𝙸𝙼𝙾?*\n_RESPONDA AL MENSAJE CON EL COMANDO: .start_`.trim()
      let other = room.other(m.sender);
      if (other) this.sendMessage(other, { text: otrouser }, { quoted: m })   
      delete this.anonymous[room.id];
      if (command === "leave") break;
    }
    case "start": {
let todavíaestas = `*[❗𝐈𝐍𝐅𝐎❗] 𝚃𝙾𝙳𝙰𝚅𝙸𝙰 𝙴𝚂𝚃𝙰𝚂 𝙴𝙽 𝚄𝙽 𝙲𝙷𝙰𝚃 𝙰𝙽𝙾𝙽𝙸𝙼𝙾 𝙾 𝙴𝚂𝙿𝙴𝚁𝙰𝙽𝙳𝙾 𝙰 𝚀𝚄𝙴 𝙾𝚃𝚁𝙾 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 𝚂𝙴 𝚄𝙽𝙰 𝙿𝙰𝚁𝙰 𝙸𝙽𝙸𝙲𝙸𝙰𝚁*\n\n*¿𝚀𝚄𝙸𝙴𝚁𝙴𝚂 𝚂𝙰𝙻𝙸𝚁 𝙳𝙴𝙻 𝙲𝙷𝙰𝚃 𝙰𝙽𝙾𝙽𝙸𝙼𝙾?*\n_RESPONDA AL MENSAJE CON EL COMANDO .leave_`.trim()
      if (Object.values(this.anonymous).find((room) => room.check(m.sender)))
        return this.sendMessage(m.chat, { text: todavíaestas }, { quoted: m }) 
let comchat = `*[ ✔ ] 𝚄𝙽𝙰 𝙿𝙴𝚁𝚂𝙾𝙽𝙰 𝚂𝙴 𝙰𝙷 𝚄𝙽𝙸𝙳𝙾 𝙰𝙻 𝙲𝙷𝙰𝚃 𝙰𝙽𝙾𝙽𝙸𝙼𝙾, 𝙿𝚄𝙴𝙳𝙴𝙽 𝙸𝙽𝙸𝙲𝙸𝙰𝚁 𝙰 𝙲𝙷𝙰𝚃𝙴𝙰𝚁nn\npara ir a otro chat responda al mensaje con el comando .next*`
      let room = Object.values(this.anonymous).find((room) => room.state === "WAITING" && !room.check(m.sender));
      if (room) {
       this.sendMessage(room.a, { text: comchat }, { quoted: m }) 
        room.b = m.sender;
        room.state = "CHATTING";
        this.sendMessage(m.chat, { text: comchat }, { quoted: m }) 
      } else {
        let id = +new Date();
        this.anonymous[id] = {
          id,
          a: m.sender,
          b: "",
          state: "WAITING",
          check: function (who = "") {
            return [this.a, this.b].includes(who);
          },
          other: function (who = "") {
            return who === this.a ? this.b : who === this.b ? this.a : "";
          },
        };
let esperadeluser = `*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚂𝙿𝙴𝚁𝙰𝙽𝙳𝙾 𝙰 𝙾𝚃𝚁𝙾 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 𝙿𝙰𝚁𝙰 𝙸𝙽𝙸𝙲𝙸𝙰𝚁 𝙴𝙻 𝙲𝙷𝙰𝚃 𝙰𝙽𝙾𝙽𝙸𝙼𝙾*\n\n*¿𝚀𝚄𝙸𝙴𝚁𝙴𝚂 𝚂𝙰𝙻𝙸𝚁 𝙳𝙴𝙻 𝙲𝙷𝙰𝚃 𝙰𝙽𝙾𝙽𝙸𝙼𝙾?*\n_RESPONDA CON EL COMANDO .leave_`.trim()
        this.sendMessage(m.chat, { text: esperadeluser }, { quoted: m }) 
      }
      break;
    }
  }
}
handler.help = ["start", "leave", "next"];
handler.tags = ["anonymous"];
handler.command = ["start", "leave", "next"];
handler.private = true;
export default handler;
