//hecho por DIEGO-OFC pro


import axios from "axios";

const handler = async (m, { text }) => {
    const bingSearchUrl = "https://www.bing.com/search";
    const term = encodeURIComponent(text.toLowerCase());

    const options = {
        params: {
            q: term,
        },
    };

   // try {
        const response = await axios.get(bingSearchUrl, options);

        if (response.status === 200) {
            const webPages = response.data.webPages;

            if (webPages && webPages.value && Array.isArray(webPages.value)) {
                const results = webPages.value;
                const resultTitles = results.map(result => result.name);
                m.reply(`Los resultados de la búsqueda de "${text}" son: ${resultTitles.join(", ")}`);
           /* } else {
                throw new Error(`No se encontraron resultados válidos para "${text}"`);
            }
        } else {
            throw new Error(`Error al buscar "${text}"`);
        }
    } catch (error) {
        m.reply(error.message);
    }*/
};

handler.command = ["bing"];

export default handler;

