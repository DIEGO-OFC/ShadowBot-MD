import puppeteer from "puppeteer"
import fetch from "node-fetch"

let handler = async (m, {
    conn,
    args,
    usedPrefix,
    command
}) => {
    let text
    if (args.length >= 1) {
        text = args.slice(0).join(" ")
    } else if (m.quoted && m.quoted.text) {
        text = m.quoted.text
    } else throw "Input Teks"
    await m.reply(wait)
    try {
        let res = await ChatGpt(text)
      await m.reply(res)
    } catch (e) {
        try {
            let res = await ChatGptV2(text)
           // await m.reply(res.answer)
        } catch (e) {
        try {
            let res = await ChatGptV3(text)
            await m.reply(res[0].generated_text)
            } catch (e) {
            throw eror
            }
        }
    }
}
handler.help = ["chatgpt"]
handler.tags = ["internet"]
handler.command = /^chatgpt$/i

export default handler

/* New Line */
async function ChatGpt(input) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://chatgpt.botwa.me/');

    // Masukkan teks ke dalam tag div dengan class input
    await page.type('div.input', input);

    // Masukkan teks ke dalam tag input dengan class user-input
    await page.type('input.user-input', input);

    // Klik tombol dengan class button-submit
    await page.click('button.button-submit');

    // Tunggu sampai pesan muncul di dalam class message animated fadeInLeftBig, kecuali yang sebelumnya
    await page.waitForSelector('.message.animated.fadeInLeftBig:not(:first-child)');

    // Ambil teks dari pesan yang muncul
    const message = await page.$eval('.message.animated.fadeInLeftBig:not(:first-child)', el => el.textContent);
    // Cetak output pesan yang muncul
    return message;
    await browser.close();
}

async function ChatGptV2(query) {
  try {
    const response = await fetch(`https://api.caonm.net/api/ai/o.php?msg=${query}`);
    if (!response.ok) {
      throw new Error('Network response was not OK');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
async function ChatGptV3(query) {
    try {
        const response = await fetch(
            "https://api-inference.huggingface.co/models/gpt2", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    Authorization: "Bearer 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",
                },
                body: JSON.stringify({
                    inputs: query
                }),
            }
        );

        return await response.json();
    } catch (error) {
        console.error('Error:', error.message);
    }
}






/*import fetch from 'node-fetch'
import cheerio from 'cheerio'
import gpt from 'api-dylux'
let handler = async (m, { text, usedPrefix, command }) => {
if (!text) throw `*[❕] HAGA PETICIÓN, EJEMPLO*
*${usedPrefix + command} que es el planeta*\n*SI QUIERES EN MODO HARD*:
*${usedPrefix + command} cuento donde violen a skid salvajemente*`
try {
let jailbreak = await fetch('https://raw.githubusercontent.com/Skidy89/chat-gpt-jailbreak/main/Text.txt').then(v => v.text());
await conn.sendPresenceUpdate('composing', m.chat)
var syms = `${jailbreak}`


let res = await gpt.ChatGpt(text, syms)
let rgapt = `${res.text}`
 await await conn.sendMessage(
      m.chat,
      {
        image: {
          url: "https://telegra.ph/file/10e013d9ae4d9cdf5af14.jpg",
        },
        caption: rgapt,
        contextInfo: {
          mentionedJid: [m.sender],
          externalAdReply: {
            title: `TOOLS - CHATGPT`,
            sourceUrl: "http://paypal.me/DorratBotOficial",
            mediaType: 1,
            showAdAttribution: true,
            thumbnailUrl: "https://telegra.ph/file/10e013d9ae4d9cdf5af14.jpg",
          },
        },
      },
      {
        quoted: m,
      }
    )
} catch {
try {   
let IA2 = await fetch(`https://api.amosayomide05.cf/gpt/?question=${text}&string_id=${m.sender}`)  
let IAR2 = await IA2.json()
let grtp = `${IAR2.response}`
   await await conn.sendMessage(
      m.chat,
      {
        image: {
          url: "https://telegra.ph/file/10e013d9ae4d9cdf5af14.jpg",
        },
        caption: grtp,
        contextInfo: {
          mentionedJid: [m.sender],
          externalAdReply: {
            title: `TOOLS - CHATGPT`,
            sourceUrl: "http://paypal.me/DorratBotOficial",
            mediaType: 1,
            showAdAttribution: true,
            thumbnailUrl: "https://telegra.ph/file/10e013d9ae4d9cdf5af14.jpg",
          },
        },
      },
      {
        quoted: m,
      }
    )
} catch {
try {   
let rrEes = await fetch(`https://api.ibeng.tech/api/info/openai?text=${text}&apikey=tamvan`)
let jjJson = await rrEes.json()
let chatgt = `${jjJson.data.data.trim()}`
   await await conn.sendMessage(
      m.chat,
      {
        image: {
          url: "https://telegra.ph/file/10e013d9ae4d9cdf5af14.jpg",
        },
        caption: chatgt,
        contextInfo: {
          mentionedJid: [m.sender],
          externalAdReply: {
            title: `TOOLS - CHATGPT`,
            sourceUrl: "http://paypal.me/DorratBotOficial",
            mediaType: 1,
            showAdAttribution: true,
            thumbnailUrl: "https://telegra.ph/file/10e013d9ae4d9cdf5af14.jpg",
          },
        },
      },
      {
        quoted: m,
      }
    )
} catch {      
try {    
let tioress = await fetch(`https://api.lolhuman.xyz/api/openai?apikey=BrunoSobrino&text=${text}&user=${m.sender}`)
let hasill = await tioress.json()
let gpt = `${hasill.result}`
   await await conn.sendMessage(
      m.chat,
      {
        image: {
          url: "https://telegra.ph/file/10e013d9ae4d9cdf5af14.jpg",
        },
        caption: gpt,
        contextInfo: {
          mentionedJid: [m.sender],
          externalAdReply: {
            title: `TOOLS - CHATGPT`,
            sourceUrl: "http://paypal.me/DorratBotOficial",
            mediaType: 1,
            showAdAttribution: true,
            thumbnailUrl: "https://telegra.ph/file/10e013d9ae4d9cdf5af14.jpg",
          },
        },
      },
      {
        quoted: m,
      }
    )
} catch {        
throw `*[❗] 𝙴𝚁𝚁𝙾𝚁, 𝚅𝚄𝙴𝙻𝚅𝙰 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁𝙻𝙾*`
}}}}}
handler.command = ['openai', 'chatgpt', 'ia', 'robot']
handler.dolares = 3
export default handler*/
