import fetch from 'node-fetch'
import axios from 'axios'
import { load } from 'cheerio'

var handler = async (m, {text, usedPrefix, command, conn}) => {

if (!text) return conn.reply(m.chat, `🎌 *Ingrese el nombre de una película*\n\nEjemplo, !${command} merlina`, m, fake, )
conn.reply(m.chat, '⏰ Espere un momento', m, fake, )
let aaaa
let img

try {
aaaa = await searchC(text)
img = 'https://cinefilosoficial.com/wp-content/uploads/2021/07/cuevana.jpg'

} catch {
aaaa = await searchP(text)
img = 'https://elcomercio.pe/resizer/RJM30xnujgfmaODGytH1rRVOrAA=/400x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/BJ2L67XNRRGHTFPKPDOEQ2AH5Y.jpg'
}

if (aaaa == '') return conn.reply(m.chat, '🚩 *Sin resultados*', m, fake, )
const res = await aaaa.map((v) => `⬡ *Nombre:* ${v.title}\n⬡ *Enlace:* ${v.link}`).join`\n\n───────────────\n\n`
const ads = '⬡ *Bloqueador de anuncios recomendado:* Block This\n⬡ *Enlace:* https://block-this.com/block-this-latest.apk\n\n≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣\n\n'
await conn.sendUrl(m.chat, ads + res, m, { externalAdReply: { mediaType: 1, renderLargerThumbnail: true, thumbnailUrl: img, thumbnailUrl: img, title: wm, }})

}
handler.help = ['pelisplus']
handler.tags = ['internet']
handler.command = ['cuevana', 'pelisplus']

handler.register = true

export default handler

const safeLoad = async (url, options = {}) => {
try {
const {data: pageData} = await axios.get(url, options)
const $ = load(pageData)
return $
} catch (err) {
if (err.response) {
throw new Error(err.response.statusText)
}
throw err}
}

async function searchC(query, numberPage = 1) {
const $ = await safeLoad(`https://cuevana3.mu/page/${numberPage}/`, {
params: {s: query}})
const resultSearch = []
$('.results-post > article').each((_, e) => {
const element = $(e)
const title = element.find('header > h2').text()
const link = element.find('.lnk-blk').attr('href')
resultSearch.push({title: title, link: link})
})
return resultSearch
}

async function searchP(query, numberPage = 1) {
const $ = await safeLoad(`https://pelisplushd.cx/search/`, {
params: {s: query, page: numberPage}})
const resultSearch = []
$('a[class^=\'Posters\']').each((_, e) => {
const element = $(e)
const title = element.find('.listing-content > p').text()
const link = element.attr('href')
resultSearch.push({title: title, link: link})
})
return resultSearch
}

// By EnzitoOFICIAL