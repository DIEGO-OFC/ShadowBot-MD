var recuerdos = {};

export async function before(m, { conn, isAdmin, isBotAdmin }) {
  if (m.isBaileys && m.fromMe) return true;

  if (m.text.startsWith('.recuerdo')) {
    let parts = m.text.split(' ');
    if (parts.length > 1) {
      if (parts[1].startsWith('@')) {
        let nombre = parts[1].substring(1);
        if (recuerdos[nombre]) {
          await conn.sendMessage(m.chat, { text: recuerdos[nombre] });
        } else {
          await conn.sendMessage(m.chat, { text: 'No tienes ningún recuerdo guardado para ' + nombre });
        }
      } else {
        let recuerdo = parts.slice(1).join(' ');
        let nombre = m.sender.split('@')[0];
        recuerdos[nombre] = recuerdo;
        await conn.sendMessage(m.chat, { text: 'Recuerdo guardado para ' + nombre });
      }
    } else {
      await conn.sendMessage(m.chat, { text: 'Formato incorrecto. Usa ".recuerdo @nombre" para ver un recuerdo o ".recuerdo mensaje" para guardar un recuerdo' });
    }
    return true;
  }

  return true;
}
