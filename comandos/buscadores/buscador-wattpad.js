//hecho por DIEGO-OFC pro

import axios from "axios";

const handler = async (m, { text }) => {
  const bingSearchUrl = "https://www.bing.com/search?q=";
  const term = encodeURIComponent(text.toLowerCase()); // Codificar el término de búsqueda
  const options = {
    params: {
      q: term,
    },
  };

  try {
    const response = await axios.get(bingSearchUrl, options);
    
    if (response.status === 200) { // Cambiado a 200 en lugar de 400
      const results = response.data.webPages.value; // Acceder a la propiedad "value" para obtener los resultados
      const resultTitles = results.map(result => result.name); // Extraer títulos de los resultados
      m.reply(`Los resultados de la búsqueda de "${text}" son: ${resultTitles.join(", ")}`);
    } else {
      throw new Error(`Error al buscar "${text}"`);
    }
  } catch (error) {
    m.reply(error.message);
  }
};

handler.command = ["bing"];
export default handler;