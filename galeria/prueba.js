const prueba1 = `hola`;
const prueba2 = `xd`;


const prueba = pickRandom([prueba1, prueba2])

export default prueba;

function pickRandom(list) {

    return list[Math.floor(list.length * Math.random())]

}
