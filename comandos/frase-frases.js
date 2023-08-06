import translate from "@vitalets/google-translate-api";
import fetch from "node-fetch";
import axios from "axios";
let handler = async (m, {conn, command}) => {
  
    if (command == "consejo") {
      let res = await fetch("https://zenzapis.xyz/randomtext/motivasi?apikey=hdiiofficial");
      //let res = await fetch("https://supra-api.herokuapp.com/api/conselho?apikey=supraz")
      let json = await res.json();
      let frase = json.result.message;
      let frase1 = await translate(frase, {to: "es", autoCorrect: true});
      await m.reply(`*┏━━━━━━━━━━━━━━━━┓*\n*┠❧  ${frase1.text}*\n*┗━━━━━━━━━━━━━━━━┚*`);
    }

    if (command == "fraseromantica") {
    var fraseroman = frasesRomanticas;
      m.reply(`*╭─◆────◈⚘◈─────◆─╮*\n*❥  ${pickRandom(fraseroman)}*\n*╰─◆────◈⚘◈─────◆─╯*`);
    }

    if (command == "historiaromantica") {
      let res = await fetch("https://api-xcoders.site/api/random/cerpen/cinta?apikey=xcoders");
      let json = await res.json();
      let {story, title, author_name} = json.result;
      let storytime = await translate(story, {to: "es", autoCorrect: true}).catch((_) => null);
      let titletime = await translate(title, {to: "es", autoCorrect: true}).catch((_) => null);
      conn.reply(
        m.chat,
        `᭥🫐᭢ Título: ${titletime.text}
᭥🍃᭢ Autor: ${author_name}
────────────────
${storytime.text}`,
        m
      );
    }
  
  
};
handler.tags = ["frases"];
handler.command = handler.help = ["consejo", "fraseromantica", "historiaromantica"];
export default handler;

function pickRandom(list) { 
   return list[Math.floor(list.length * Math.random())]; 
 }

const frasesRomanticas = [
  "Te amo más que las palabras pueden decir.",
  "Eres la persona más importante en mi vida.",
  "No puedo imaginar mi vida sin ti.",
  "Eres mi mejor amigo, mi amante y mi alma gemela.",
  "Me haces reír más que nadie.",
  "Me haces sentir amado y especial.",
  "Eres mi roca, mi apoyo y mi inspiración.",
  "Estoy tan agradecido de tenerte en mi vida.",
  "Te amo más que la vida misma.",
  "Eres mi todo.",
  "Eres mi luz en la oscuridad.",
  "Eres mi estrella guía.",
  "Eres mi sol.",
  "Eres mi luna.",
  "Eres mi estrella fugaz.",
  "Eres mi arcoíris.",
  "Eres mi hada madrina.",
  "Eres mi príncipe azul.",
  "Eres mi princesa.",
  "Eres mi caballero de brillante armadura.",
  "Eres mi alma gemela.",
  "Eres mi mejor amigo.",
  "Eres mi compañero de crimen.",
  "Eres mi cómplice.",
  "Eres mi confidente.",
  "Eres mi apoyo.",
  "Eres mi inspiración.",
  "Eres mi motivación.",
  "Eres mi razón de ser.",
  "Eres mi todo.",
  "Me haces sentir como si pudiera volar.",
  "Me haces sentir como si pudiera tocar las estrellas.",
  "Me haces sentir como si pudiera hacer cualquier cosa.",
  "Me haces sentir como si pudiera ser yo mismo.",
  "Me haces sentir como si pudiera ser la mejor versión de mí mismo.",
  "Me haces sentir como si pudiera ser feliz.",
  "Me haces sentir como si pudiera amar.",
  "Me haces sentir como si pudiera ser amado.",
  "Me haces sentir como si pudiera ser feliz.",
  "Me haces sentir como si pudiera amar.",
  "Me haces sentir como si pudiera ser amado.",
  "Me haces sentir como si pudiera ser feliz.",
  "Me haces sentir como si pudiera amar.",
  "Me haces sentir como si pudiera ser amado.",
  "Me haces sentir como si pudiera ser feliz.",
  "Me haces sentir como si pudiera amar.",
  "Me haces sentir como si pudiera ser amado.",
  "Me haces sentir como si pudiera ser feliz.",
  "Me haces sentir como si pudiera amar.",
  "Me haces sentir como si pudiera ser amado.",
  "Me haces sentir como si pudiera ser feliz.",
  "Me haces sentir como si pudiera amar.",
  "Me haces sentir como si pudiera ser amado.",
  "Me haces sentir como si pudiera ser feliz.",
  "Me haces sentir como si pudiera amar.",
  "Me haces sentir como si pudiera ser amado.",
  "Me haces sentir como si pudiera ser feliz.",
  "Me haces sentir como si pudiera amar.",
  "Me haces sentir como si pudiera ser amado.",
  "Me haces sentir como si pudiera ser feliz.",
  "Me haces sentir como si pudiera amar.",
  "Me haces sentir como si pudiera ser amado.",
  "Me haces sentir como si pudiera ser feliz.",
  "Me haces sentir como si pudiera amar.",
  "Me haces sentir como si pudiera ser amado.",
  "Me haces sentir como si pudiera ser feliz.",
  "Me haces sentir como si pudiera amar.",
  "Me haces sentir como si pudiera ser amado.",
  "Me haces sentir como si pudiera ser feliz.",
  "Me haces sentir como si pudiera amar.",
  "Me haces sentir como si pudiera ser amado.",
  "Me haces sentir como si pudiera ser feliz.",
  "Me haces sentir como si pudiera amar.",
  "Me haces sentir como si pudiera ser amado.",
  "Me haces sentir como si pudiera ser feliz.",
  "Me haces sentir como si pudiera amar.",
  "Me haces sentir como si pudiera ser amado.",
  "Me haces sentir como si pudiera ser feliz.",
  "Me haces sentir como si pudiera amar.",
  "Me haces sentir como si pudiera ser amado.",
  "Me haces sentir como si pudiera ser feliz.",
  "Me haces sentir como si pudiera amar.",
    "El amor es una fortaleza que me hace mejor cada día",

  "Cuando te veo, el mundo parece dejar de girar",

  "Eres la luz del sol en mi vida oscura",

  "Me enamoro de ti cada vez que estamos juntos",

  "Eres mi sueño hecho realidad",

  "Mi amor por ti nunca se desvanecerá, incluso a medida que pase el tiempo",

  "Eres mi aliento, sin ti mi vida no será perfecta",

  "En tus brazos, me siento seguro y protegido",

  "Cada segundo contigo es un milagro inolvidable",

   "Eres la razón por la que sonrío todos los días",

  "Mi amor por ti nunca terminará, incluso cuando estamos lejos",

 "Eres una estrella que ilumina mi vida",

  "En tus ojos, encuentro una belleza irremplazable",

  "Eres un milagro que hace que mi vida sea más significativa",

  "Mi amor por ti nunca se desvanecerá, porque eres todo para mí",

   "Eres un ángel enviado por Dios a mí",

  "En tus brazos, encontré una paz invaluable",

  "Eres un sueño que se hace realidad en mi vida",

  "Todos los días contigo es una aventura inolvidable",

  "Mi amor por ti nunca cambiará, porque tú eres la luz de mi vida",

  "Tú eres el poder que me hace sobrevivir en cada tormenta",

  "En tu sonrisa, encuentro la felicidad infinita",

  "Eres el regalo más hermoso que he recibido",

  "Mi amor por ti nunca se desvanecerá, porque eres un verdadero amor para mí",

  "Eres la fuente de inspiración en mi vida",

  "En tus brazos, me siento completo y feliz",

 "Eres una música hermosa en mi vida",

 "Mi amor por ti nunca terminará, porque eres todo para mí",

 "Eres un ángel que me protege y me protege",

  "En tus ojos, encontré un milagro irremplazable",

  "Eres la luz que ilumina cada paso de mi",

  "En tu sonrisa, encontré una calidez insustituible",

  "Eres un sueño que se hace realidad en mi vida",

  "Mi amor por ti nunca se desvanecerá, porque eres todo para mí",

  "Eres un poder que me mantiene fuerte en cada prueba",

   "En tus brazos, encontré la calma y la felicidad",

 "Eres el regalo más hermoso que he recibido",

  "Mi amor por ti nunca cambiará, porque eres un verdadero amor para mí",

  "Tú eres la fuente de la felicidad en mi vida",

  "En tus brazos, me siento seguro y protegido",

 "Eres una estrella que ilumina mi vida",

  "En tu sonrisa, encontré una belleza irremplazable",

   "Eres un sueño que se hace realidad en mi vida",

  "Mi amor por ti nunca se desvanecerá, porque eres todo para mí",

  "Eres un poder que me mantiene entusiasmado en cada desafío",

  "En tus brazos, encontré paz y felicidad",

   "Eres el regalo más hermoso que he recibido",

   "Mi amor por ti nunca terminará, porque eres un verdadero amor para mí",

  "Tú eres la fuente de la felicidad en mi vida",

   "En tus ojos, encontré un milagro irremplazable"]

