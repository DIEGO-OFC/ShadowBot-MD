var mensajesDiarios = {};

export async function before(m, { conn, isAdmin, isBotAdmin }) {
  if (m.isBaileys && m.fromMe) return true;

  if (m.text.startsWith('.MasActivo')) {
    let fecha = new Date().toISOString().split('T')[0]; // Obtiene la fecha actual en formato 'YYYY-MM-DD'
    let contador = mensajesDiarios[m.sender] || 0; // Obtiene el número de mensajes del usuario en el día actual
    mensajesDiarios[m.sender] = contador + 1; // Incrementa el contador de mensajes del usuario

    // Obtiene al usuario más activo
    let maxMensajesUsuario = Object.keys(mensajesDiarios).reduce((a, b) => mensajesDiarios[a] > mensajesDiarios[b] ? a : b);

    await conn.sendMessage(m.chat, { text: El usuario más activo es: ${maxMensajesUsuario} con ${mensajesDiarios[maxMensajesUsuario]} mensajes });
    return true;
  }

  return true;
}
