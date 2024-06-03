var mensajesDiarios = {};

export async function before(m, { conn, isAdmin, isBotAdmin }) {
  if (m.isBaileys && m.fromMe) return true;

  if (m.text && m.text.startsWith('.MasActivo')) {
    let fecha = new Date().toISOString().split('T')[0]; // Obtiene la fecha actual en formato 'YYYY-MM-DD'
    if (!mensajesDiarios[fecha]) {
      mensajesDiarios[fecha] = {}; // Inicializa el objeto para la fecha actual
    }

    let contador = mensajesDiarios[fecha][m.sender] || 0; // Obtiene el número de mensajes del usuario en el día actual
    mensajesDiarios[fecha][m.sender] = contador + 1; // Incrementa el contador de mensajes del usuario

    // Obtiene al usuario más activo
    let maxMensajesUsuario = Object.keys(mensajesDiarios[fecha]).reduce((a, b) => mensajesDiarios[fecha][a] > mensajesDiarios[fecha][b] ? a : b);

    await conn.sendMessage(m.chat, { text: `El usuario más activo es: ${maxMensajesUsuario} con ${mensajesDiarios[fecha][maxMensajesUsuario]} mensajes` });
    return true;
  }

  return true;
  }
