import axios from "axios"

let handler = async (m, { args }) => {
  if (!args[0]) throw "⚠️ *_𝐄𝐬𝐜𝐫𝐢𝐛𝐚 𝐞𝐥 𝐧𝐨𝐦𝐛𝐫𝐞 𝐝𝐞 𝐬𝐮 𝐜𝐢𝐮𝐝𝐚𝐝 𝐨 𝐩𝐚𝐢𝐬._*"
  try {
    const response = axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${args}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273`
    )
    const res = await response
    const name = res.data.name
    const Country = res.data.sys.country
    const Weather = res.data.weather[0].description
    const Temperature = res.data.main.temp + "°C"
    const Minimum_Temperature = res.data.main.temp_min + "°C"
    const Maximum_Temperature = res.data.main.temp_max + "°C"
    const Humidity = res.data.main.humidity + "%"
    const Wind = res.data.wind.speed + "km/h"
    const wea = `「 📍 」 𝑳𝑼𝑮𝑨𝑹: ${name}\n「 🗺️ 」 𝑷𝑨𝑰𝑺: ${Country}\n「 🌤️ 」 𝑻𝑰𝑬𝑴𝑷𝑶: ${Weather}\n「 🌡️ 」𝑻𝑬𝑴𝑷𝑬𝑹𝑨𝑻𝑼𝑹𝑨: ${Temperature}\n「 💠 」 𝑻𝑬𝑴𝑷𝑬𝑹𝑨𝑻𝑼𝑹𝑨 𝑴𝑰𝑵𝑰𝑴𝑨: ${Minimum_Temperature}\n「 📛 」 𝑻𝑬𝑴𝑷𝑬𝑹𝑨𝑻𝑼𝑹𝑨 𝑴𝑨𝑿𝑰𝑴𝑨: ${Maximum_Temperature}\n「 💦 」 𝑯𝑼𝑴𝑬𝑫𝑨𝑫: ${Humidity}\n「 🌬️ 」 𝑽𝑰𝑬𝑵𝑻𝑶: ${Wind}
  `

    m.reply(wea)
  } catch (e) {
    return "⚠️ *_Error, no se encontrarón resultados, trate de escribir un país o ciudad existente._*"
  }
}

handler.help = ['clima *<ciudad/país>*']
handler.tags = ['info']

handler.command = /^(clima|tiempo)$/i

export default handler
