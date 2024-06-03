var recuerdos = {};

export async function before(m, { isAdmin, isBotAdmin }) {
  if (m.isBaileys && m.fromMe) return true;

  if (m.text.startsWith('.recuerdo')) {
    let parts = m.text.split(' ');
    if (parts.length > 1) {
      if (parts[1].startsWith('@')) {
        let nombre = parts[1].substring(1);
        if (recuerdos[nombre]) {
          conn.sendMessage(m.chat, recuerdos[nombre]);
        } else {
          conn.sendMessage(m.chat, 'No tienes ningún recuerdo guardado para ' + nombre);
        }
      } else {
        let recuerdo = parts.slice(1).join(' ');
        let nombre = m.sender.split('@')[0];
        recuerdos[nombre] = recuerdo;
        conn.sendMessage(m.chat, 'Recuerdo guardado para ' + nombre);
      }
    } else {
      conn.sendMessage(m.chat, 'Formato incorrecto. Usa ".recuerdo @nombre" para ver un recuerdo o ".recuerdo mensaje" para guardar un recuerdo');
    }
    return true;
  }

  return true;
}
