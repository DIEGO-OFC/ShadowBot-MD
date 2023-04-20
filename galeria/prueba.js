const prueba1 = `hola`;
const prueba2 = `xd`;

const pruebaA = [prueba1]
const pruebaB = [prueba2]
export default {

  pruebaA,
  pruebaB,

};

function pickRandom(list) {

    return list[Math.floor(list.length * Math.random())]

}
