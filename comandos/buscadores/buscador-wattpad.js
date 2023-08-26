//hecho por DIEGO-OFC PRO
import fetch from "node-fetch";

// Define el handler
const handler = async (m, { text, conn }) => {
  // Obtén el término de búsqueda
  const term = text.toLowerCase();

  // Realiza la solicitud de búsqueda
  const response = await fetch("https://www.bing.com/search", {
    method: "GET",
    params: {
      q: term,
    },
  });

  // Verifica si hay algún error
  if (response.status !== 200) {
    throw new Error(`Error al buscar "${term}"`);
  }

  // Obtén los resultados de la búsqueda
  const results = await response.json();

  // Imprime los resultados de la búsqueda
  m.reply(results.webPages.map(({ title, url }) => `${title} - ${url}`));
};

// Define los comandos
handler.command = ["bing"];

// Exporta el handler
export default handler;
