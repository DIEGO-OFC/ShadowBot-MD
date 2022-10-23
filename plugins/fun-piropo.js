//by https://github.com/DIEGO-OFC/DORRAT-BOT-MD
import db from '../lib/database.js'

let handler = async (m, { conn, text}) => {

let hasil = Math.floor(Math.random() * 5000)

  m.reply(`
*╔═════════════════════════════*\n➢ *"${pickRandom(global.piropo)}"*\n - *_By DIEGO-0FC©_*\n*╚═════════════════════════════*
`)
}
handler.tags = ['frases']
handler.command = handler.help = ['piropo']


handler.fail = null
handler.exp = 0

export default handler

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return minutes + " m " + seconds + " s " 
}


function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.piropo = ["Me gustaría ser papel para poder envolver ese bombón.", "Eres como wifi sin contraseña, todo el mundo te busca", "Quién fuera bus para andar por las curvas de tu corazón.", "Quiero volar sin alas y salir de este universo, entrar en el tuyo y amarte en silencio.", "Quisiera ser mantequilla para derretirme en tu arepa.", "Si la belleza fuera pecado vos ya estarías en el infierno.", "Me Gustaría Ser Un Gato Para Pasar 7 Vidas A Tu Lado.", "Robar Está Mal Pero Un Beso De Tu Boca Sí Me Lo Robaría.", "Qué Hermoso Es El Cielo Cuando Está Claro Pero Más Hermoso Es El Amor Cuando Te Tengo A Mi Lado.", "Bonita, Camina Por La Sombra, El Sol Derrite Los Chocolates.", "Si Fuera Un Correo Electrónico Serías Mi Contraseña.", "Quisiera que fueses monte para darte machete", "Perdí mi número de teléfono ¿Me das el tuyo?", "¿Cómo te llamas para pedirte de regalo a Santa Claus?", " En el cielo hay muchas estrellas, pero la más brillante está en la Tierra y eres tú.", "¿Acaba de salir el sol o es la sonrisa que me regalas hoy?", "No es el ron ni la cerveza, eres tú quien se me ha subido a la cabeza", "Si hablamos de matemáticas eres la suma de todos mis deseos.", "Pareces Google porque tienes todo lo que yo busco.", "Mi café favorito, es el de tus ojos.", "Quiero ser photoshop para retocarte todo el cuerpo.", "Quisiera que fueras cereal, para cucharearte en las mañanas.", "Quien fuera hambre, para darte tres veces al día.", "En el cielo hay una iglesia ⛪en la iglesia una fuente ⛲ y en mi corazón y en mi mente ❤🤕estas tú solamente 😍💝"]

