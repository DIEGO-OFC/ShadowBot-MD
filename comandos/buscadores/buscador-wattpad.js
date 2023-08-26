//hecho por DIEGO-OFC pro

import axios from "axios";

// Define el handler
const handler = async (m, { text, conn }) => {
  // Obtén el término de búsqueda
  const term = text.toLowerCase();

  // Realiza la solicitud de búsqueda
  const response = await axios.get("https://www.bing.com/search", {
    params: {
      q: term,
    },
  });

  // Verifica si hay algún error
  if (response.status === 400) {
    throw new Error(`Error al buscar "${term}"`);
  }

  // Obtén los resultados de la búsqueda
  const results = response.data.webPages;

  // Imprime los resultados de la búsqueda
  m.reply(results.map(({ title, url }) => `${title} - ${url}`));
};

// Define los comandos
handler.command = ["bing"];

// Exporta el handler
export default handler;
