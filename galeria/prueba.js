const pruebaA = pickRandom([`hola`]);
const prueba2 = `xd`;


const pruebaB = [prueba2]
export default {

  pruebaA,
  pruebaB,

};

function pickRandom(list) {

    return list[Math.floor(list.length * Math.random())]

}
