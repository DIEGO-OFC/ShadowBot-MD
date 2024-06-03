var resultadosBusqueda = {};

export async function before(m, { conn, isAdmin, isBotAdmin }) {
  if (m.isBaileys && m.fromMe) return true;

  if (m.text && m.text.startsWith('.busqueda')) {
    let terminoBusqueda = m.text.slice(10); // Extrae el término de búsqueda del mensaje
    let url = `https://www.google.com/search?q=${encodeURIComponent(terminoBusqueda)}&source=lnmsj&tbm=isch`;

    axios.get(url)
      .then(response => {
        let primerResultado = response.data.items[0].title;
        let imagen = response.data.items[0].link;
        
        conn.sendMessage(m.from, `Aquí está tu primer resultado: ${primerResultado}\nImagen: ${imagen}`, MessageType.text);
      })
      .catch(error => {
        conn.sendMessage(m.from, 'Lo siento, hubo un error en la búsqueda. Por favor, intenta nuevamente.', MessageType.text);
      });
  }
}
