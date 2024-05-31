import fetch from "node-fetch";

var handler = (m) => m;

handler.before = async (m) => {
  const chat = global.db.data.chats[m.chat];
  if (chat.simi) {
    if (/false|disnable|(turn)?off|0/i.test(m.text)) return;
    const textodem = m.text;
    try {
    let gpt = await fetch(`https://delirius-api-oficial.vercel.app/api/simi?text=${encodeURIComponent(textodem)}`)
let res = await gpt.json()
      if (data.success === "No sé lo que estás diciendo. Por favor enséñame.") {
        return m.reply(`${lol}`); // EL TEXTO "lol" NO ESTA DEFINIDO PARA DAR ERROR Y USAR LA OTRA API
      }
      return m.reply(res.data.message);
    } catch {
      // SI DA ERROR USARA ESTA OTRA OPCION DE API DE IA QUE RECUERDA EL NOMBRE DE LA PERSONA
      if (textodem.includes("Hola")) textodem = textodem.replace("Hola", "Hello");
      if (textodem.includes("hola")) textodem = textodem.replace("hola", "hello");
      if (textodem.includes("HOLA")) textodem = textodem.replace("HOLA", "HELLO");
      const response = await fetch("https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=en&dt=t&q=" + textodem);
      const data = await response.json();
      const nama = m.pushName || "1";
      const response2 = await fetch("http://api.brainshop.ai/get?bid=153868&key=rcKonOgrUFmn5usX&uid=" + nama + "&msg=" + data[0][0][0]);
      const data2 = await response2.json();
      const response3 = await fetch("https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=es&dt=t&q=" + data2.cnt);
      const data3 = await response3.json();
      return m.reply(data3[0][0][0]);
    }
  }
  return true;
};

export default handler;
