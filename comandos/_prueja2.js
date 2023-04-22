
import prueba from '../galeria/prueba.js'

let handler = async (m, {text, command, conn}) => {

let sexo = await prueba

m.reply(sexo)

}
handler.command = ["prueba3"];
export default handler;
