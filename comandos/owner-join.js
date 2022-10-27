

let handler = async (m, { conn }) => {
m.reply(global.join)

}
handler.command = /^(join|unete|nuevogrupo)$/i
export default handler

global.join =  `*LO SIENTO, EL BOT OFICIAL NO SE UNE A GRUPOS, PARA EVITAR SATURAS, PUEDES BUSCAR OTRO BOT OFICIAL, O BUSCANDO UN SUBBOT CON EL COMANDO #listjadibot o unete al grupo oficial ${md}*`
