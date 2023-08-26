//hecho por DIEGO-OFC pro

import axios from "axios";

const handler = async (m, { text }) => {
  const bingSearchUrl = `https://www.bing.com/search?q=`
  const term = encodeURIComponent(text.toLowerCase());

  const options = {
    params: {
      q: term,
    },
  };

  const response = await axios.get(bingSearchUrl, options);

  if (response.status !== 200) {
    return;
  }

  const webPages = response.data.webPages;

  if (!webPages || !webPages.value || !Array.isArray(webPages.value)) {
    return;
  }

  const results = webPages.value;
  const resultTitles = results.map(result => result.name);
  m.reply(`Los resultados de la búsqueda de "${text}" son: ${resultTitles.join(", ")}`);
};

handler.command = ["bing"];

export default handler;