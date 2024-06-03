import fetch from 'node-fetch';
import cheerio from 'cheerio';

let handler = async (m, { usedPrefix, command, args }) => {
async function getMovieRecommendations(genre) {
    const url = `https://www.imdb.com/search/title/?genres=${genre}&sort=popularity,desc`;
    const response = await fetch(url);
    if (!response.ok) throw new Error('Error al obtener las recomendaciones de películas');
    const html = await response.text();
    const $ = cheerio.load(html);
    const movies = [];

    $('.lister-item-content').each((index, element) => {
        if (index < 5) { 
            const title = $(element).find('h3.lister-item-header a').text().trim();
            const year = $(element).find('h3.lister-item-header .lister-item-year').text().trim();
            const rating = $(element).find('div.ratings-bar strong').text().trim();
            const summary = $(element).find('p.text-muted').last().text().trim();
            movies.push({ title, year, rating, summary });
        }
    });

    return movies;
}


    try {
        const genres = {
            "acción": "action",
            "aventura": "adventure",
            "animación": "animation",
            "comedia": "comedy",
            "crimen": "crime",
            "documental": "documentary",
            "drama": "drama",
            "familia": "family",
            "fantasía": "fantasy",
            "historia": "history",
            "terror": "horror",
            "música": "music",
            "misterio": "mystery",
            "romance": "romance",
            "ciencia ficción": "sci-fi",
            "película de TV": "tv_movie",
            "thriller": "thriller",
            "bélica": "war",
            "western": "western"
        };

        if (args.length === 0) {
            let genreList = Object.keys(genres).map(genre => genre.charAt(0).toUpperCase() + genre.slice(1)).join(", ");
            m.reply(`Por favor, proporciona un género de película. Géneros disponibles: ${genreList}`);
            return;
        }

        let genre = args[0].toLowerCase();
        if (!genres.hasOwnProperty(genre)) {
           
handler.help = ["películas"];
handler.tags = ["pelis "];
handler.command = ["películas, palis"];

export default handler;
