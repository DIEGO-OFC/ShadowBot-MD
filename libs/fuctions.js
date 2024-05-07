const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./fuctions2.js') 
 const { default: makeWASocket, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, getAggregateVotesInPollMessage, proto } = require("@whiskeysockets/baileys") 
 const chalk = require('chalk') 
const child_process = require('child_process')
const ffmpeg = require('fluent-ffmpeg') 
 const search = require("yt-search");
 const fs = require('fs') 
 const Crypto = require('crypto') 
 const axios = require('axios') 
 const pino = require('pino') 
 const cheerio = require('cheerio')
 const moment = require('moment-timezone') 
 const FormData = require('form-data')
 const { sizeFormatter } = require('human-readable') 
 const util = require('util') 
 const path = require('path');
 const jimp = require('jimp') 
 const { defaultMaxListeners } = require('stream') 
 const FileType = require('file-type')
 const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) }) 
 const PhoneNumber = import('awesome-phonenumber') 
  exports.getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (err) {
		return err
	}
}
 const downloadMediaMessage = async (message) => { 
         let mime = (message.msg || message).mimetype || '' 
         let messageType = mime.split('/')[0].replace('application', 'document') ? mime.split('/')[0].replace('application', 'document') : mime.split('/')[0] 
         let extension = mime.split('/')[1] 
         const stream = await downloadContentFromMessage(message, messageType) 
         let buffer = Buffer.from([]) 
         for await(const chunk of stream) { 
             buffer = Buffer.concat([buffer, chunk]) 
         } 
  
         return buffer 
 } 
  
 const unixTimestampSeconds = (date = new Date()) => Math.floor(date.getTime() / 1000) 
  
 exports.unixTimestampSeconds = unixTimestampSeconds 
  exports.buffergif = async (image) => {
const filename = `${Math.random().toString(36)}`
await fs.writeFileSync(`./tmp/${filename}.gif`, image)
child_process.exec(`ffmpeg -i ./tmp/${filename}.gif -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" ./tmp${filename}.mp4`)
await sleep(4000)
var buffer5  =  await  fs.readFileSync(`./tmp/${filename}.mp4`)
Promise.all([unlink(`./tmp/${filename}.mp4`), unlink(`./tmp/${filename}.gif`)])
return buffer5
}
exports.fetchBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "GET",
			url,
			headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.70 Safari/537.36",
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (err) {
		return err
	}
}
exports.formatNumber = function formatNumber(num) {
  const suffixes = ['', 'k', 'M', 'B', 'T'];
  const numString = Math.abs(num).toString();
  const numDigits = numString.length;

  if (numDigits <= 3) {
    return numString;
  }

  const suffixIndex = Math.floor((numDigits - 1) / 3);
  let formattedNum = (num / Math.pow(1000, suffixIndex)).toFixed(1);
  
  // Menghapus desimal jika angka sudah bulat
  if (formattedNum.endsWith('.0')) {
    formattedNum = formattedNum.slice(0, -2);
  }

  return formattedNum + suffixes[suffixIndex];
}
  exports.searchAndFilterVideos =  async function searchAndFilterVideos(query, maxResults = 100, similarityThreshold = 0.5) {
    try {
        const res = await search(query);
        const videos = res.videos
            .slice(0, maxResults)
            .filter(video => {
                const titleWords = video.title.toLowerCase().split(" ");
                const queryWords = query.toLowerCase().split(" ");
                const matchCount = titleWords.filter(word => queryWords.includes(word)).length;
                return matchCount / titleWords.length >= similarityThreshold;
            });

        if (videos.length > 0) {
            return videos[0];
        } else if (res.videos.length > 0) {
            return res.videos[0];
        } else {
            return {};
        }
    } catch (e) {
        console.error(e);
        return {};
    }
}
 function msToTime(duration) {  
    var milliseconds = parseInt((duration % 1000) / 100),  
      seconds = Math.floor((duration / 1000) % 60),  
      minutes = Math.floor((duration / (1000 * 60)) % 60),  
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24);  
  
    hours = hours < 10 ? "0" + hours : hours;  
    minutes = minutes < 10 ? "0" + minutes : minutes;  
    seconds = seconds < 10 ? "0" + seconds : seconds;  
  
    return minutes + " m y " + seconds + " s ";  
  } 


exports.msToTime = msToTime 
  
 exports.generateMessageTag = (epoch) => { 
     let tag = (0, exports.unixTimestampSeconds)().toString(); 
     if (epoch) 
         tag += '.--' + epoch; // attach epoch if provided 
     return tag; 
 } 
  
 exports.processTime = (timestamp, now) => { 
         return moment.duration(now - moment(timestamp * 1000)).asSeconds() 
 } 
  
 exports.getRandom = (ext) => { 
     return `${Math.floor(Math.random() * 10000)}${ext}` 
 } 
  
 
 exports.fetchJson = async (url, options) => { 
     try { 
         options ? options : {} 
         const res = await axios({ 
             method: 'GET', 
             url: url, 
             headers: { 
                 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36' 
             }, 
             ...options 
         }) 
         return res.data 
     } catch (err) { 
         return err 
     } 
 } 
  
 exports.runtime = function(seconds) { 
         seconds = Number(seconds); 
         var d = Math.floor(seconds / (3600 * 24)); 
         var h = Math.floor(seconds % (3600 * 24) / 3600); 
         var m = Math.floor(seconds % 3600 / 60); 
         var s = Math.floor(seconds % 60); 
     //𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗 
         var dDisplay = d < 10 ? String("0" + d) : d >= 10 ? String(d) : "00";  
          var hDisplay = h < 10 ? String("0" + h) : h >= 10 ? String(h) : "00";  
          var mDisplay = m < 10 ? String("0" + m) : m >= 10 ? String(m) : "00";  
          var sDisplay = s < 10 ? String("0" + s) : s > 10 ? String(s) : "0";  
      dDisplay = dDisplay.replace(/1/g, "1")  
      dDisplay = dDisplay.replace(/2/g, "2")  
      dDisplay = dDisplay.replace(/3/g, "3")  
      dDisplay = dDisplay.replace(/4/g, "4")  
      dDisplay = dDisplay.replace(/5/g, "5")  
      dDisplay = dDisplay.replace(/6/g, "6")  
      dDisplay = dDisplay.replace(/7/g, "7")  
      dDisplay = dDisplay.replace(/8/g, "8")  
      dDisplay = dDisplay.replace(/9/g, "9")  
      dDisplay = dDisplay.replace(/1/g, "1")  
      dDisplay = dDisplay.replace(/2/g, "2")  
      dDisplay = dDisplay.replace(/3/g, "3")  
      dDisplay = dDisplay.replace(/4/g, "4")  
      dDisplay = dDisplay.replace(/5/g, "5")  
      dDisplay = dDisplay.replace(/6/g, "6")  
      dDisplay = dDisplay.replace(/7/g, "7")  
      dDisplay = dDisplay.replace(/8/g, "8")  
      dDisplay = dDisplay.replace(/9/g, "9")  
      dDisplay = dDisplay.replace(/1/g, "1")  
      dDisplay = dDisplay.replace(/2/g, "2")  
      dDisplay = dDisplay.replace(/3/g, "3")  
      dDisplay = dDisplay.replace(/4/g, "4")  
      dDisplay = dDisplay.replace(/5/g, "5")  
      dDisplay = dDisplay.replace(/6/g, "6")  
      dDisplay = dDisplay.replace(/7/g, "7")  
      dDisplay = dDisplay.replace(/8/g, "8")  
      dDisplay = dDisplay.replace(/9/g, "9")  
      dDisplay = dDisplay.replace(/1/g, "1")  
      dDisplay = dDisplay.replace(/2/g, "2")  
      dDisplay = dDisplay.replace(/3/g, "3")  
      dDisplay = dDisplay.replace(/4/g, "4")  
      dDisplay = dDisplay.replace(/5/g, "5")  
      dDisplay = dDisplay.replace(/6/g, "6")  
      dDisplay = dDisplay.replace(/7/g, "7")  
      dDisplay = dDisplay.replace(/8/g, "8")  
      dDisplay = dDisplay.replace(/9/g, "9")  
      dDisplay = dDisplay.replace(/0/g, "0")  
      hDisplay = hDisplay.replace(/0/g, "0")  
      mDisplay = mDisplay.replace(/0/g, "0")  
      sDisplay = sDisplay.replace(/0/g, "0")  
  
         return dDisplay + ":" + hDisplay + ":" + mDisplay + ":" + sDisplay; 
 } 
  
 exports.clockString = (ms) => { 
     let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) 
     let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60 
     let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60 
     return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':') 
 } 
 exports.pepe = async function pepe(media) {
	const jimp2 = await jimp.read(media)
	const min = jimp2.getWidth()
	const max = jimp2.getHeight()
	const cropped = jimp2.crop(0, 0, min, max)
	return {
		img: await cropped.scaleToFit(720, 720).getBufferAsync(jimp2.MIME_JPEG),
		preview: await cropped.normalize().getBufferAsync(jimp.MIME_JPEG)
	}
}        
 exports.sleep = async (ms) => { 
     return new Promise(resolve => setTimeout(resolve, ms)); 
 } 
  
 exports.isUrl = (url) => { 
     return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi')) 
 } 
  
 exports.getTime = (format, date) => { 
         if (date) { 
                 return moment(date).locale('id').format(format) 
         } else { 
                 return moment.tz('Asia/Jakarta').locale('id').format(format) 
         } 
 } 
 exports.getRandom = function getRandom() { 

if (Array.isArray(this) || this instanceof String) return this[Math.floor(Math.random() * this.length)] 

return Math.floor(Math.random() * this) 

 } 

 
 exports.sleep = async (ms) => { 
     return new Promise(resolve => setTimeout(resolve, ms)); // promises? 
 } 
  
 exports.formatDate = (n, locale = 'id') => { 
         let d = new Date(n) 
         return d.toLocaleDateString(locale, { 
                 weekday: 'long', 
                 day: 'numeric', 
                 month: 'long', 
                 year: 'numeric', 
                 hour: 'numeric', 
                 minute: 'numeric', 
                 second: 'numeric' 
         }) 
 } 
 exports.spotifydl = async function spotifydl(url) { 
  const Spotify = require('spotifydl-x')
const credentials = { 

   clientId: 'acc6302297e040aeb6e4ac1fbdfd62c3', 

   clientSecret: '0e8439a1280a43aba9a5bc0a16f3f009', 

 }; 

 const spotify = new Spotify.default(credentials);   
   return new Promise(async (resolve, reject) => { 
     try { 
      
       const res = await spotify.getTrack(url); 
       const timeoutPromise = new Promise((_, reject) => { 
         setTimeout(() => { 
           reject(new Error('Tiempo de espera agotado')); 
         }, 300000); 
       }); 
       const audioPromise = spotify.downloadTrack(url); 
       const audio = await Promise.race([audioPromise, timeoutPromise]); 
       resolve({ data: res, audio }); 
     } catch (error) { 
       reject(error); 
     } 
   }); 
 }
 exports.tanggal = (numer) => { 
         myMonths = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]; 
                                 myDays = ['Lunes','Martes','Miércoles','Jueves','Viernes','Sábado','Domingo'];  
                                 var tgl = new Date(numer); 
                                 var day = tgl.getDate() 
                                 bulan = tgl.getMonth() 
                                 var thisDay = tgl.getDay(), 
                                 thisDay = myDays[thisDay]; 
                                 var yy = tgl.getYear() 
                                 var year = (yy < 1000) ? yy + 1900 : yy;  
                                 const time = moment.tz('America/Bogota').format('DD/MM HH:mm:ss') 
                                 let d = new Date 
                                 let locale = 'id' 
                                 let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime() 
                                 let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5] 
  
                                 return`${thisDay}, ${day} - ${myMonths[bulan]} - ${year}` 
 } 
  
 exports.formatp = sizeFormatter({ 
     std: 'JEDEC', //'SI' = default | 'IEC' | 'JEDEC' 
     decimalPlaces: 2, 
     keepTrailingZeroes: false, 
     render: (literal, symbol) => `${literal} ${symbol}B`, 
 }) 
  
 exports.jsonformat = (string) => { 
     return JSON.stringify(string, null, 2) 
 } 
 exports.pickRandom = function pickRandom(list) { 
   return list[Math.floor(list.length * Math.random())]; 
 } 
 
exports.webp2mp4File = function webp2mp4File(source) {
   return new Promise((resolve, reject) => {
      const form = new FormData()
      let isUrl = typeof source === 'string' && /https?:\/\//.test(source)
      form.append('new-image-url', isUrl ? source : "")
      form.append('new-image', isUrl ? "" : source, Date.now() + "-image.webp")
      axios({
         method: 'post',
         url: 'https://s6.ezgif.com/webp-to-mp4',
         data: form,
         headers: {
            'Content-Type': `multipart/form-data; boundary=${form._boundary}`
         }
      }).then(({ data }) => {
         const bodyFormThen = new FormData()
         const $ = cheerio.load(data)
         const file = $('input[name="file"]').attr('value')
         const token = $('input[name="token"]').attr('value')
         const convert = $('input[name="file"]').attr('value')

         bodyFormThen.append('file', file)
         bodyFormThen.append('convert', "Convert WebP to MP4!")
         axios({
            method: 'post',
            url: 'https://ezgif.com/webp-to-mp4/' + file,
            data: bodyFormThen,
            headers: {
               'Content-Type': `multipart/form-data; boundary=${bodyFormThen._boundary}`
            }
         }).then(({ data }) => {
            const $ = cheerio.load(data)
            const result = 'https:' + $('div#output > p.outfile > video > source').attr('src')
            resolve(result)
         }).catch(reject)
      }).catch(reject)
   })
}
 
 exports.remini = async function remini(imageData, operation) { 
   return new Promise(async (resolve, reject) => { 
     const availableOperations = ["enhance", "recolor", "dehaze"]; 
     if (availableOperations.includes(operation)) { 
       operation = operation; 
     } else { 
       operation = availableOperations[0]; 
     } 
     const baseUrl = "https://inferenceengine.vyro.ai/" + operation + ".vyro"; 
     const formData = new FormData(); 
     formData.append("image", Buffer.from(imageData), { 
       filename: "enhance_image_body.jpg", 
       contentType: "image/jpeg", 
     }); 
  
     formData.append("model_version", 1, { 
       "Content-Transfer-Encoding": "binary", 
       contentType: "multipart/form-data; charset=utf-8", 
     }); 
  
     formData.submit( 
       { 
         url: baseUrl, 
         host: "inferenceengine.vyro.ai", 
         path: "/" + operation, 
         protocol: "https:", 
         headers: { 
           "User-Agent": "okhttp/4.9.3", 
           Connection: "Keep-Alive", 
           "Accept-Encoding": "gzip", 
         }, 
       }, 
       function (err, res) { 
         if (err) reject(err); 
         const chunks = []; 
         res.on("data", function (chunk) { 
           chunks.push(chunk); 
         }); 
         res.on("end", function () { 
           resolve(Buffer.concat(chunks)); 
         }); 
         res.on("error", function (err) { 
           reject(err); 
         }); 
       }, 
     ); 
   }); 
   }
 function delay(ms) { 
         return new Promise((resolve, reject) => setTimeout(resolve, ms)) 
 } 
  
 function format(...args) { 
         return util.format(...args) 
 } 
  
 exports.logic = (check, inp, out) => { 
         if (inp.length !== out.length) throw new Error('Input and Output must have same length') 
         for (let i in inp) 
                 if (util.isDeepStrictEqual(check, inp[i])) return out[i] 
         return null 
 } 
  
 exports.generateProfilePicture = async (buffer) => { 
         const jimp = await jimp_1.read(buffer) 
         const min = jimp.getWidth() 
         const max = jimp.getHeight() 
         const cropped = jimp.crop(0, 0, min, max) 
         return { 
                 img: await cropped.scaleToFit(720, 720).getBufferAsync(jimp_1.MIME_JPEG), 
                 preview: await cropped.scaleToFit(720, 720).getBufferAsync(jimp_1.MIME_JPEG) 
         } 
 } 
  


 exports.parseMention = (text = '') => { 
     return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net') 
 } 
  
 exports.getGroupAdmins = (participantes) => { 
         const admins = [] 
         for (let i of participantes) { 
                 i.admin ? admins.push(i.id) : '' 
         } 
         return admins 
 } 
  
 /** 
  * Serialize Message 
  * @param {WAConnection} conn  
  * @param {Object} m  
  * @param {Boolean} hasParent  
  */ 
 exports.smsg = (conn, m, hasParent) => { 
  
     if (!m) return m 
     let M = proto.WebMessageInfo 
     if (m.key) { 
         m.id = m.key.id 
         m.isBaileys = m.id.startsWith('BAE5') && m.id.length === 16 
         m.chat = m.key.remoteJid 
         m.fromMe = m.key.fromMe 
         m.isGroup = m.chat.endsWith('@g.us') 
         m.sender = m.fromMe ? (conn.user.id.split(":")[0]+'@s.whatsapp.net' || conn.user.id) : (m.key.participant || m.key.remoteJid) 
         m.limit = false 
         m.tarjeta = false; 
         m.bitcoins = false; 
         m.dolares = false;
         m.device = m.key.id.length > 21 ? 'Android' : m.key.id.substring(0, 2) == '3A' ? 'IOS' : 'whatsapp web'
     } 
  
 try {    
   let isNumber = x => typeof x === 'number' && !isNaN(x)  // NaN in number? 
   let user = global.db.data.users[m.sender]   
   if (typeof user !== 'object') global.db.data.users[m.sender] = {}   
   if (user) { 
 if (!('registered' in user)) 
 user.registered = false 
 //-- user registered  
 if (!user.registered) { 
 if (!('name' in user)) 
 user.name = m.name 
 if (!isNumber(user.age)) 
 user.age = -1 
 if (!isNumber(user.regTime)) 
 user.regTime = -1 
 } 
         if (!isNumber(user.lastmancingnormal)) user.lastmancingnormal = 0; 
         if (!isNumber(user.lastmining)) user.lastmining = 0; 
         if (!isNumber(user.lastmisi)) user.lastmisi = 0; 
         if (!isNumber(user.lastmonthly)) user.lastmonthly = 0; 
         if (!isNumber(user.lastmulung)) user.lastmulung = 0; 
         if (!isNumber(user.lastnambang)) user.lastnambang = 0; 
         if (!isNumber(user.lastnebang)) user.lastnebang = 0; 
         if (!isNumber(user.lastngocok)) user.lastngocok = 0; 
         if (!isNumber(user.lastngojek)) user.lastngojek = 0; 
         if (!isNumber(user.lastopen)) user.lastopen = 0; 
         if (!isNumber(user.lastpekerjaan)) user.lastpekerjaan = 0; 
         if (!isNumber(user.lastpago)) user.lastpago = 0; 
         if (!isNumber(user.lastpotionclaim)) user.lastpotionclaim = 0; 
         if (!isNumber(user.lastrampok)) user.lastrampok = 0; 
         if (!isNumber(user.lastramuanclaim)) user.lastramuanclaim = 0; 
         if (!isNumber(user.lastrob)) user.lastrob = 0; 
         if (!isNumber(user.lastroket)) user.lastroket = 0; 
         if (!isNumber(user.lastsda)) user.lastsda = 0; 
         if (!isNumber(user.lastseen)) user.lastseen = 0; 
         if (!isNumber(user.lastSetStatus)) user.lastSetStatus = 0; 
         if (!isNumber(user.lastsironclaim)) user.lastsironclaim = 0; 
         if (!isNumber(user.lastsmancingclaim)) user.lastsmancingclaim = 0; 
         if (!isNumber(user.laststringclaim)) user.laststringclaim = 0; 
         if (!isNumber(user.lastswordclaim)) user.lastswordclaim = 0; 
         if (!isNumber(user.lastturu)) user.lastturu = 0; 
         if (!isNumber(user.lastwar)) user.lastwar = 0; 
         if (!isNumber(user.lastwarpet)) user.lastwarpet = 0; 
         if (!isNumber(user.lastweaponclaim)) user.lastweaponclaim = 0; 
         if (!isNumber(user.lastweekly)) user.lastweekly = 0; 
         if (!isNumber(user.lastwork)) user.lastwork = 0; 
         if (!isNumber(user.legendary)) user.legendary = 0; 
         if (!isNumber(user.lele)) user.lele = 0; 
         if (!isNumber(user.leleb)) user.leleb = 0; 
         if (!isNumber(user.lelebakar)) user.lelebakar = 0; 
         if (!isNumber(user.leleg)) user.leleg = 0; 
         if (!isNumber(user.level)) user.level = 0; 
         if (!isNumber(user.tarjeta)) user.tarjeta = 1; 
         if (!isNumber(user.dolares)) user.dolares = 20; 
         if (!isNumber(user.bitcoins)) user.bitcoins = 10; 
         if (!isNumber(user.limit)) user.limit = 20; 
         if (!isNumber(user.limitjoinfree)) user.limitjoinfree = 1; 
         if (!isNumber(user.dolaresjoinfree)) user.dolaresjoinfree = 1; 
         if (!isNumber(user.lion)) user.lion = 0; 
         if (!isNumber(user.lionexp)) user.lionexp = 0; 
         if (!isNumber(user.lionlastfeed)) user.lionlastfeed = 0; 
         if (!isNumber(user.lobster)) user.lobster = 0; 
         if (!isNumber(user.lumba)) user.lumba = 0; 
         if (!isNumber(user.magicwand)) user.magicwand = 0; 
         if (!isNumber(user.magicwanddurability)) user.magicwanddurability = 0; 
         if (!isNumber(user.makanancentaur)) user.makanancentaur = 0; 
         if (!isNumber(user.makanangriffin)) user.makanangriffin = 0; 
         if (!isNumber(user.makanankyubi)) user.makanankyubi = 0; 
         if (!isNumber(user.makanannaga)) user.makanannaga = 0; 
         if (!isNumber(user.makananpet)) user.makananpet = 0; 
         if (!isNumber(user.makananphonix)) user.makananphonix = 0; 
         if (!isNumber(user.makananserigala)) user.makananserigala = 0; 
         if (!isNumber(user.mana)) user.mana = 0; 
         if (!isNumber(user.mangga)) user.mangga = 0; 
         if (!isNumber(user.money)) user.money = 500; 
         if (!isNumber(user.monyet)) user.monyet = 0; 
         if (!isNumber(user.mythic)) user.mythic = 0; 
         if (!isNumber(user.naga)) user.naga = 0; 
         if (!isNumber(user.nagalastclaim)) user.nagalastclaim = 0; 
         if (!isNumber(user.net)) user.net = 0; 
         if (!isNumber(user.nila)) user.nila = 0; 
         if (!isNumber(user.nilabakar)) user.nilabakar = 0; 
         if (!isNumber(user.note)) user.note = 0; 
         if (!isNumber(user.ojekk)) user.ojekk = 0; 
         if (!isNumber(user.oporayam)) user.oporayam = 0; 
         if (!isNumber(user.orca)) user.orca = 0; 
         if (!isNumber(user.pancing)) user.pancing = 0; 
         if (!isNumber(user.pancingan)) user.pancingan = 1; 
         if (!isNumber(user.panda)) user.panda = 0; 
         if (!isNumber(user.paus)) user.paus = 0; 
         if (!isNumber(user.pausbakar)) user.pausbakar = 0; 
         if (!isNumber(user.pc)) user.pc = 0; 
         if (!isNumber(user.pepesikan)) user.pepesikan = 0; 
         if (!isNumber(user.pertambangan)) user.pertambangan = 0; 
         if (!isNumber(user.pertanian)) user.pertanian = 0; 
         if (!isNumber(user.pet)) user.pet = 0; 
         if (!isNumber(user.petFood)) user.petFood = 0; 
         if (!isNumber(user.phonix)) user.phonix = 0; 
         if (!isNumber(user.phonixexp)) user.phonixexp = 0; 
         if (!isNumber(user.phonixlastclaim)) user.phonixlastclaim = 0; 
         if (!isNumber(user.phonixlastfeed)) user.phonixlastfeed = 0; 
         if (!isNumber(user.pickaxe)) user.pickaxe = 0; 
         if (!isNumber(user.pickaxedurability)) user.pickaxedurability = 0; 
         if (!isNumber(user.pillhero)) user.pillhero = 0; 
         if (!isNumber(user.pisang)) user.pisang = 0; 
         if (!isNumber(user.pointxp)) user.pointxp = 0; 
         if (!isNumber(user.potion)) user.potion = 0; 
         if (!isNumber(user.psenjata)) user.psenjata = 0; 
         if (!isNumber(user.psepick)) user.psepick = 0; 
         if (!isNumber(user.ramuan)) user.ramuan = 0; 
         if (!isNumber(user.ramuancentaurlast)) user.ramuancentaurlast = 0; 
         if (!isNumber(user.ramuangriffinlast)) user.ramuangriffinlast = 0; 
         if (!isNumber(user.ramuanherolast)) user.ramuanherolast = 0; 
         if (!isNumber(user.ramuankucinglast)) user.ramuankucinglast = 0; 
         if (!isNumber(user.ramuankudalast)) user.ramuankudalast = 0;
if (!isNumber(user.bank)) user.bank = 0;     
         if (!isNumber(user.ramuankyubilast)) user.ramuankyubilast = 0; 
         if (!isNumber(user.ramuannagalast)) user.ramuannagalast = 0; 
         if (!isNumber(user.ramuanphonixlast)) user.ramuanphonixlast = 0; 
         if (!isNumber(user.ramuanrubahlast)) user.ramuanrubahlast = 0; 
         if (!isNumber(user.ramuanserigalalast)) user.ramuanserigalalast = 0; 
         if (!isNumber(user.reglast)) user.reglast = 0; 
         if (!isNumber(user.rendang)) user.rendang = 0; 
         if (!isNumber(user.rhinoceros)) user.rhinoceros = 0; 
         if (!isNumber(user.rhinocerosexp)) user.rhinocerosexp = 0; 
         if (!isNumber(user.rhinoceroslastfeed)) user.rhinoceroslastfeed = 0; 
         if (!isNumber(user.robo)) user.robo = 0; 
         if (!isNumber(user.roboxp)) user.roboxp = 0; 
         if (!isNumber(user.rock)) user.rock = 0; 
         if (!isNumber(user.roket)) user.roket = 0; 
         if (!isNumber(user.roti)) user.roti = 0; 
         if (!isNumber(user.rubah)) user.rubah = 0; 
         if (!isNumber(user.rubahlastclaim)) user.rubahlastclaim = 0; 
         if (!isNumber(user.rumahsakit)) user.rumahsakit = 0; 
         if (!isNumber(user.sampah)) user.sampah = 0; 
         if (!isNumber(user.sand)) user.sand = 0; 
         if (!isNumber(user.sapi)) user.sapi = 0; 
         if (!isNumber(user.sapir)) user.sapir = 0; 
         if (!isNumber(user.seedbayam)) user.seedbayam = 0; 
         if (!isNumber(user.seedbrokoli)) user.seedbrokoli = 0; 
         if (!isNumber(user.seedjagung)) user.seedjagung = 0; 
         if (!isNumber(user.seedkangkung)) user.seedkangkung = 0; 
         if (!isNumber(user.seedkentang)) user.seedkentang = 0; 
         if (!isNumber(user.seedkubis)) user.seedkubis = 0; 
         if (!isNumber(user.seedlabu)) user.seedlabu = 0; 
         if (!isNumber(user.seedtomat)) user.seedtomat = 0; 
         if (!isNumber(user.seedwortel)) user.seedwortel = 0; 
         if (!isNumber(user.serigala)) user.serigala = 0; 
         if (!isNumber(user.serigalalastclaim)) user.serigalalastclaim = 0; 
         if (!isNumber(user.shield)) user.shield = false; 
         if (!isNumber(user.skillexp)) user.skillexp = 0; 
         if (!isNumber(user.snlast)) user.snlast = 0; 
         if (!isNumber(user.soda)) user.soda = 0; 
         if (!isNumber(user.sop)) user.sop = 0; 
         if (!isNumber(user.spammer)) user.spammer = 0; 
         if (!isNumber(user.spinlast)) user.spinlast = 0; 
         if (!isNumber(user.ssapi)) user.ssapi = 0; 
         if (!isNumber(user.stamina)) user.stamina = 100; 
         if (!isNumber(user.steak)) user.steak = 0; 
         if (!isNumber(user.stick)) user.stick = 0; 
         if (!isNumber(user.strength)) user.strength = 0; 
         if (!isNumber(user.string)) user.string = 0; 
         if (!isNumber(user.superior)) user.superior = 0; 
         if (!isNumber(user.suplabu)) user.suplabu = 0; 
         if (!isNumber(user.sushi)) user.sushi = 0; 
         if (!isNumber(user.sword)) user.sword = 0; 
         if (!isNumber(user.sworddurability)) user.sworddurability = 0; 
         if (!isNumber(user.tigame)) user.tigame = 50; 
         if (!isNumber(user.tiketcoin)) user.tiketcoin = 0; 
         if (!isNumber(user.title)) user.title = 0; 
         if (!isNumber(user.tomat)) user.tomat = 0; 
         if (!isNumber(user.tprem)) user.tprem = 0; 
         if (!isNumber(user.trash)) user.trash = 0; 
         if (!isNumber(user.trofi)) user.trofi = 0; 
         if (!isNumber(user.troopcamp)) user.troopcamp = 0; 
         if (!isNumber(user.tumiskangkung)) user.tumiskangkung = 0; 
         if (!isNumber(user.udang)) user.udang = 0; 
         if (!isNumber(user.udangbakar)) user.udangbakar = 0; 
         if (!isNumber(user.umpan)) user.umpan = 0; 
         if (!isNumber(user.uncoommon)) user.uncoommon = 0; 
         if (!isNumber(user.unreglast)) user.unreglast = 0; 
         if (!isNumber(user.upgrader)) user.upgrader = 0; 
         if (!isNumber(user.vodka)) user.vodka = 0; 
         if (!isNumber(user.wallet)) user.wallet = 0; 
         if (!isNumber(user.warn)) user.warn = 0; 
         if (!isNumber(user.weapon)) user.weapon = 0; 
         if (!isNumber(user.weapondurability)) user.weapondurability = 0; 
         if (!isNumber(user.wolf)) user.wolf = 0; 
         if (!isNumber(user.wolfexp)) user.wolfexp = 0; 
         if (!isNumber(user.wolflastfeed)) user.wolflastfeed = 0; 
         if (!isNumber(user.wood)) user.wood = 0; 
         if (!isNumber(user.wortel)) user.wortel = 0; 
  
         if (!user.lbars) user.lbars = "[▒▒▒▒▒▒▒▒▒]"; 
         if (!user.job) user.job = "Desempleo"; 
         if (!user.premium) user.premium = false; 
         if (!user.premium) user.premiumTime = 0; 
         if (!user.rtrofi) user.rtrofi = "Bronce"; 
  
    } else global.db.data.users[m.sender] = {     
           lastdaang: 0, 
           lastdagang: 0, 
           lastdorracoins: 0, 
           lastdiamantes: 0, 
           lastduel: 0, 
           lastdungeon: 0, 
           lasteasy: 0, 
           lastfight: 0, 
           lastfishing: 0, 
           lastgojek: 0, 
           lastgrab: 0, 
           lasthourly: 0, 
           lasthunt: 0, 
           lastjb: 0, 
           lastkill: 0, 
           lastlink: 0, 
           lastlumber: 0, 
           lastmancingeasy: 0, 
           lastmancingextreme: 0, 
           lastmancinghard: 0, 
           lastmancingnormal: 0, 
           lastmining: 0, 
           lastmisi: 0, 
           lastmonthly: 0, 
           lastmulung: 0, 
           lastnambang: 0, 
           lastnebang: 0, 
           lastngocok: 0, 
           lastngojek: 0, 
           lastopen: 0, 
           lastpekerjaan: 0, 
           lastpago: 0, 
           lastpotionclaim: 0, 
           lastramuanclaim: 0, 
           lastrob: 0, 
           lastroket: 0, 
           lastseen: 0, 
           lastSetStatus: 0, 
           lastsironclaim: 0, 
           lastsmancingclaim: 0, 
           laststringclaim: 0, 
           lastswordclaim: 0, 
           lastturu: 0, 
           lastwarpet: 0, 
           lastweaponclaim: 0, 
           lastweekly: 0, 
           lastwork: 0, 
           lbars: "[▒▒▒▒▒▒▒▒▒]", 
           legendary: 0, 
           lele: 0, 
           leleb: 0, 
           lelebakar: 0, 
           bank: 0,
           leleg: 0, 
           level: 0, 
           tarjeta: 1, 
           bitcoins: 10, 
           dolares: 20, 
           limit: 20, 
           limitjoinfree: 1, 
           dolaresjoinfree: 1, 
           lion: 0, 
           lionexp: 0, 
           lionlastfeed: 0, 
           lobster: 0, 
           lumba: 0, 
           magicwand: 0, 
           magicwanddurability: 0, 
           makanan: 0, 
           makanancentaur: 0, 
           makanangriffin: 0, 
           makanankyubi: 0, 
           makanannaga: 0, 
           makananpet: 0, 
           makananphonix: 0, 
           makananserigala: 0, 
           mana: 20, 
           mangga: 0, 
           misi: "", 
           money: 500, 
           monyet: 0, 
           mythic: 0, 
           naga: 0, 
           nagalastclaim: 0, 
           name: m.name, 
           net: 0, 
           nila: 0, 
           nilabakar: 0, 
           note: 0, 
           ojekk: 0, 
           oporayam: 0, 
           orca: 0, 
           pancingan: 1, 
           panda: 0, 
           pasangan: "", 
           paus: 0, 
           pausbakar: 0, 
           pc: 0, 
           pepesikan: 0, 
           pet: 0, 
           phonix: 0, 
           phonixexp: 0, 
           phonixlastclaim: 0, 
           phonixlastfeed: 0, 
           pickaxe: 0, 
           pickaxedurability: 0, 
           pillhero: 0, 
           pisang: 0, 
           pointxp: 0, 
           potion: 10, 
           premium: false, 
           premiumTime: 0, 
           ramuan: 0, 
           ramuancentaurlast: 0, 
           ramuangriffinlast: 0, 
           ramuanherolast: 0, 
           ramuankucinglast: 0, 
           ramuankudalast: 0, 
           ramuankyubilast: 0, 
           ramuannagalast: 0, 
           ramuanphonixlast: 0, 
           ramuanrubahlast: 0, 
           ramuanserigalalast: 0, 
           registered: false, 
           reglast: 0, 
           regTime: -1, 
           rendang: 0, 
           rhinoceros: 0, 
           rhinocerosexp: 0, 
           rhinoceroslastfeed: 0, 
           rock: 0, 
           roket: 0, 
           role: "Novato", 
           roti: 0, 
           rtrofi: "bronce", 
           rubah: 0, 
           rubahlastclaim: 0, 
           rumahsakit: 0, 
           sampah: 0, 
           sand: 0, 
           sapi: 0, 
           sapir: 0, 
           seedbayam: 0, 
           seedbrokoli: 0, 
           seedjagung: 0, 
           seedkangkung: 0, 
           seedkentang: 0, 
           seedkubis: 0, 
           seedlabu: 0, 
           seedtomat: 0, 
           seedwortel: 0, 
           semangka: 0, 
           serigala: 0, 
           serigalalastclaim: 0, 
           sewa: false, 
           shield: 0, 
           skill: "", 
           skillexp: 0, 
           snlast: 0, 
           soda: 0, 
           sop: 0, 
           spammer: 0, 
           spinlast: 0, 
           ssapi: 0, 
           stamina: 100, 
           steak: 0, 
           stick: 0, 
           strength: 30, 
           string: 0, 
           stroberi: 0, 
           superior: 0, 
           suplabu: 0, 
           sushi: 0, 
           sword: 0, 
           sworddurability: 0, 
           tigame: 50, 
           tiketcoin: 0, 
           title: "", 
           tomat: 0, 
           tprem: 0, 
           trash: 0, 
           trofi: 0, 
           troopcamp: 0, 
           tumiskangkung: 0, 
           udang: 0, 
           udangbakar: 0, 
           umpan: 0, 
           uncoommon: 0, 
           unreglast: 0, 
           upgrader: 0, 
           vodka: 0, 
           wallet: 0, 
           warn: 0, 
           weapon: 0, 
           weapondurability: 0, 
           wolf: 0, 
           wolfexp: 0, 
           wolflastfeed: 0, 
           wood: 0, 
           wortel: 0,  }   
  
   let chats = global.db.data.chats[m.chat]   
   if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}   
   if (chats) {   
   if (!('antilink' in chats)) chats.antilink = false   
   if (!('ban' in chats)) chats.ban = false   
   if (!('modeadmin' in chats)) chats.modeadmin = false   
   if (!('welcome' in chats)) chats.welcome = true 
   if (!('audios' in chats)) chats.audios = true 
   if (!('antiNsfw' in chats)) chats.antiNsfw = true 
   if (!('antispam' in chats)) chats.antispam = true 
   if (!('antiFake' in chats)) chats.antiFake = false 
   if (!('antiArabe' in chats)) chats.antiArabe = false 
   if (!('detect' in chats)) chats.detect = true 
   } else global.db.data.chats[m.chat] = {   
   antilink: false,   
   ban: false,    
   modeAdmin: false,   
   welcome: true,  
   audios: true,  
   antiNsfw: true,  
   antispam: true,  
   antiFake: false, 
   antiArabe: false, 
   Detect: true,  
   } 
  
   let setting = global.db.data.settings[conn.user.jid] 
   if (typeof setting !== 'object') global.db.data.settings[conn.user.jid] = {}   
   if (setting) {   
   if (!isNumber(setting.status)) setting.status = 0   
   if (!('autobio' in setting)) setting.autobio = true 
   if (!('jadibot' in setting)) setting.jadibot = true  
   if (!('antiCall' in setting)) setting.antiCall = true 
   if (!('privado' in setting)) setting.privado = false 
   } else global.db.data.settings[conn.user.jid] = {   
   status: 0,   
   autobio: true, 
   jadibot: true, 
   antiCall: true,  
   privado: false 
   }  
  
 global.db.data.sticker = global.db.data.sticker || {} // sticker for addcmd 
  
 if (user) { //@skid89 
 if (user.level <= 3) { 
   user.role = 'NOVATO(A) I' 
 } else if (user.level <= 6) { 
   user.role = 'NOVATO(A) II' 
 } else if (user.level <= 9) { 
   user.role = 'NOVATO(A) III' 
 } else if (user.level <= 12) { 
   user.role = 'NOVATO(A) IV' 
 } else if (user.level <= 15) { 
   user.role = 'APRENDIS I' 
 } else if (user.level <= 18) { 
   user.role = 'APRENDIS II' 
 } else if (user.level <= 21) { 
   user.role = 'APRENDIS III' 
 } else if (user.level <= 24) { 
   user.role = 'APRENDIS IV' 
 } else if (user.level <= 27) { 
   user.role = 'EXPLORADOR(A)  I' 
 } else if (user.level <= 30) { 
   user.role = 'EXPLORADOR(A)  II' 
 } else if (user.level <= 33) { 
   user.role = 'EXPLORADOR(A)  III' 
 } else if (user.level <= 36) { 
   user.role = 'EXPLORADOR(A)  IV' 
 } else if (user.level <= 39) { 
   user.role = '🏆 Elite I' 
 } else if (user.level <= 42) { 
   user.role = '🏆 Elite II' 
 } else if (user.level <= 45) { 
   user.role = '🏆 Elite III' 
 } else if (user.level <= 48) { 
   user.role = '🏆 Elite IV' 
 } else if (user.level <= 51) { 
   user.role = '👑 Maestro I' 
 } else if (user.level <= 54) { 
   user.role = '👑 Maestro II' 
 } else if (user.level <= 57) { 
   user.role = '👑 Maestro III' 
 } else if (user.level <= 60) { 
   user.role = '🌟 Leyenda I' 
 } else if (user.level <= 63) { 
   user.role = '🌟 Leyenda II' 
 } else if (user.level <= 66) { 
   user.role = '🌟 Leyenda III' 
 } else if (user.level <= 69) { 
   user.role = '🔥 Mítico I' 
 } else if (user.level <= 72) { 
   user.role = '🔥 Mítico II' 
 } else if (user.level <= 75) { 
   user.role = '🔥 Mítico III' 
 } else if (user.level <= 78) { 
   user.role = '💫 Supremo I' 
 } else if (user.level <= 81) { 
   user.role = '💫 Supremo II' 
 } else if (user.level <= 84) { 
   user.role = '💫 Supremo III' 
 } else if (user.level <= 87) { 
   user.role = '🌀 Divino I' 
 } else if (user.level <= 90) { 
   user.role = '🌀 Divino II' 
 } else if (user.level <= 93) { 
   user.role = '🌀 Divino III' 
 } else if (user.level <= 96) { 
   user.role = '🌌 Celestial I' 
 } else if (user.level <= 99) { 
   user.role = '🌌 Celestial II' 
 } else if (user.level <= 102) { 
   user.role = '🌌 Celestial III' 
 } else if (user.level <= 105) { 
   user.role = '🌟 Estelar I' 
 } else if (user.level <= 108) { 
   user.role = '🌟 Estelar II' 
 } else if (user.level <= 111) { 
   user.role = '🌟 Estelar III' 
 } else if (user.level <= 114) { 
   user.role = '🌠 Universal I' 
 } else if (user.level <= 117) { 
   user.role = '🌠 Universal II' 
 } else if (user.level <= 120) { 
   user.role = '🌠 Universal III' 
 } else if (user.level <= 123) { 
   user.role = '🎖️ Supremacía I' 
 } else if (user.level <= 126) { 
   user.role = '🎖️ Supremacía II' 
 } else if (user.level <= 129) { 
   user.role = '🎖️ Supremacía III' 
 } else if (user.level <= 132) { 
   user.role = '🔱 Divinidad I' 
 } else if (user.level <= 135) { 
   user.role = '🔱 Divinidad II' 
 } else if (user.level <= 138) { 
   user.role = '🔱 Divinidad III' 
 } else if (user.level <= 141) { 
   user.role = '🌌 Infinito I' 
 } else if (user.level <= 144) { 
   user.role = '🌌 Infinito II' 
 } else if (user.level <= 147) { 
   user.role = '🌌 Infinito III' 
 } else if (user.level <= 150) { 
   user.role = '🌠 Eterno' 
 }}} catch (error) { 
 m.error = error 
 if (error) { 
 console.error(m.error) 
 }}
  
    
     


  if (m.dolares) m.reply(+m.dolares + " DOLARES 💵 USADOS");
  
     if (m.message) { 
         m.mtype = Object.keys(m.message)[0] 
         m.body = m.message.conversation || m.message[m.mtype].caption || m.message[m.mtype].text || (m.mtype == 'listResponseMessage') && m.message[m.mtype].singleSelectReply.selectedRowId || (m.mtype == 'buttonsResponseMessage') && m.message[m.mtype].selectedButtonId || m.mtype 
         m.msg = m.message[m.mtype] 
         if (m.mtype === 'ephemeralMessage') { 
             exports.smsg(sock, m.msg) 
             m.mtype = m.msg.mtype 
             m.msg = m.msg.msg 
         } 
         let quoted = m.quoted = m.msg.contextInfo ? m.msg.contextInfo.quotedMessage : null 
         m.mentionedJid = m.msg.contextInfo ? m.msg.contextInfo.mentionedJid : [] 
         if (m.quoted) { 
             let type = Object.keys(m.quoted)[0] 
                         m.quoted = m.quoted[type] 
             if (['productMessage'].includes(type)) { 
                                 type = Object.keys(m.quoted)[0] 
                                 m.quoted = m.quoted[type] 
                         } 
             if (typeof m.quoted === 'string') m.quoted = { 
                                 text: m.quoted 
                         } 
             m.quoted.id = m.msg.contextInfo.stanzaId 
                         m.quoted.chat = m.msg.contextInfo.remoteJid || m.chat 
             m.quoted.isBaileys = m.quoted.id ? m.quoted.id.startsWith('BAE5') && m.quoted.id.length === 16 : false 
                         m.quoted.sender = m.msg.contextInfo.participant.split(":")[0] || m.msg.contextInfo.participant 
                         m.quoted.fromMe = m.quoted.sender === (conn.user && conn.user.id) 
             m.quoted.text = m.quoted.text || m.quoted.caption || '' 
                         m.quoted.mentionedJid = m.msg.contextInfo ? m.msg.contextInfo.mentionedJid : [] 
             let vM = m.quoted.fakeObj = M.fromObject({ 
                 key: { 
                     remoteJid: m.quoted.chat, 
                     fromMe: m.quoted.fromMe, 
                     id: m.quoted.id 
                 }, 
                 message: quoted, 
                 ...(m.isGroup ? { participant: m.quoted.sender } : {}) 
             }) 
  
             /** 
              *  
              * @returns  
              */ 
             m.quoted.delete = () => conn.sendMessage(m.quoted.chat, { delete: vM.key }) 
  
            /** 
                 *  
                 * @param {*} jid  
                 * @param {*} forceForward  
                 * @param {*} options  
                 * @returns  
            */ 
             m.quoted.copyNForward = (jid, forceForward = false, options = {}) => conn.copyNForward(jid, vM, forceForward, options) 
  
             /** 
               * 
               * @returns 
             */ 
             m.quoted.download = () => downloadMediaMessage(m.quoted) 
         } 
     } 
     if (m.msg.url) m.download = () => downloadMediaMessage(m.msg) 
     m.text = (m.mtype == 'listResponseMessage' ? m.msg.singleSelectReply.selectedRowId : '') || m.msg.text || m.msg.caption || m.msg || '' 
  
  exports.getSizeMedia = (path) => {
    return new Promise((resolve, reject) => {
        if (/http/.test(path)) {
            axios.get(path)
            .then((res) => {
                let length = parseInt(res.headers['content-length'])
                let size = exports.bytesToSize(length, 3)
                if(!isNaN(length)) resolve(size)
            })
        } else if (Buffer.isBuffer(path)) {
            let length = Buffer.byteLength(path)
            let size = exports.bytesToSize(length, 3)
            if(!isNaN(length)) resolve(size)
        } else {
            reject('error gatau apah')
        }
    })
}
     
     /** 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} fileName 
     * @param {*} quoted 
     * @param {*} options 
     * @return 
     */ 
     
     conn.sendFile = async(jid, PATH, fileName, quoted = {}, options = {}) => {
    let types = await conn.getFile(PATH, true)
    let { filename, size, ext, mime, data } = types
    let type = '', mimetype = mime, pathFile = filename
    if (options.asDocument) type = 'document'
    if (options.asSticker || /webp/.test(mime)) {
    let { writeExif } = require('./lib/fuctions2.js')
    let media = { mimetype: mime, data }
    pathFile = await writeExif(media, { packname: global.packname, author: global.packname2, categories: options.categories ? options.categories : [] })
    await fs.promises.unlink(filename)
    type = 'sticker'
    mimetype = 'image/webp'}
    else if (/image/.test(mime)) type = 'image'
    else if (/video/.test(mime)) type = 'video'
    else if (/audio/.test(mime)) type = 'audio'
    else type = 'document'
    await conn.sendMessage(jid, { [type]: { url: pathFile }, mimetype, fileName, ...options }, { quoted, ...options })
    return fs.promises.unlink(pathFile)
    }
     /** 
      *  
      * @param {*} jid  
      * @param {*} path  
      * @param {*} quoted  
      * @param {*} options  
      * @returns  
      */ 
     conn.getFile = async (PATH, save) => {
    let res
    let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await fetch(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
    //if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
    let type = await FileType.fromBuffer(data) || {
    mime: 'application/octet-stream',
    ext: '.bin'
    }
    filename = path.join(__filename, '../temp/' + new Date * 1 + '.' + type.ext)
    if (data && save) fs.promises.writeFile(filename, data)
    return {
    res,
    filename,
	size: await getSizeMedia(data),
    ...type,
    data
    }
    }
     conn.sendImageAsSticker = async (jid, path, quoted, options = {}) => { 
         let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0) 
         let buffer 
         if (options && (options.packname || options.author)) { 
             buffer = await writeExifImg(buff, options) 
         } else { 
             buffer = await imageToWebp(buff) 
         } 
  
         await conn.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted }) 
         return buffer 
     } 
  
     /** 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} caption  
     */ 
     conn.sendImage = async (jid, path, caption = '', quoted = '', options) => {  
      let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)  
      return await conn.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })  
      }  
  
     /** 
     * @param {*} jid 
     * @param {*} caption 
     * @param {*} thumbnail 
     * @param {*} quoted 
     */ 
     conn.adReply = (jid, caption, thumbnail, quoted, inTrue) => { 
     conn.sendMessage(jid ? jid : m.chat, {    
     text: caption,   
     contextInfo:{   
     forwardingScore: 9999999,   
     isForwarded: true,    
     mentionedJid:[m.sender],   
     "externalAdReply": {   
     "showAdAttribution": true,   
     "containsAutoReply": true, 
     "renderLargerThumbnail": inTrue ? inTrue : false,   
     "title": botname,    
     "containsAutoReply": false,   
     "mediaType": 1,    
     "thumbnail": thumbnail ? thumbnail : global.imagen1,   
     "mediaUrl": md,  
     "sourceUrl": md 
     } 
     }   
     }, { quoted: quoted ? quoted : m })  
     } 
  
     /** 
     * @param {*} jid 
     * @param {*} caption 
     * @param {*} thumbail // optional 
     * @param {*} orderTitle // optional 
     * @param {*} userJid // optional 
     */ 
  
     conn.sendCart = async (jid, text, thumbail, orderTitle, userJid) => { 
     var messa = await prepareWAMessageMedia({ image: thumbail ? thumbail : success }, { upload: conn.waUploadToServer }) 
     var order = generateWAMessageFromContent(jid, proto.Message.fromObject({ 
     "orderMessage":{ "orderId":"3648563358700955", 
     "thumbnail": thumbail ? thumbail : success, 
     "itemCount": 999999, 
     "status": "INQUIRY", 
     "surface": "CATALOG", 
     "message": text, 
     "orderTitle": orderTitle ? orderTitle : 'unknown', 
     "sellerJid": "46@s.whatsapp.net", 
     "token": "AR4flJ+gzJw9zdUj+RpekLK8gqSiyei/OVDUFQRcmFmqqQ==", 
     "totalAmount1000": "-500000000", 
     "totalCurrencyCode":"USD", 
     "contextInfo":{ "expiration": 604800, "ephemeralSettingTimestamp":"1679959486","entryPointConversionSource":"global_search_new_chat","entryPointConversionApp":"whatsapp","entryPointConversionDelaySeconds":9,"disappearingMode":{"initiator":"CHANGED_IN_CHAT"}}} 
     }), { userJid: userJid ? userJid : conn.user.id}) 
     conn.relayMessage(jid, order.message, { messageId: order.key.id }) 
     } 
  
     conn.user.jid = conn.user.id.split(":")[0] + "@s.whatsapp.net" // jid in user? 
     conn.user.chat = m.chat // chat in user??? 
  
     /** 
     * @param {*} jid 
     * @param {*} caption 
     * @param {*} fakenumber 
     * @param {*} fakecaption 
     */ 
  
     conn.fakeReply = (jid, caption,  fakeNumber, fakeCaption) => { 
     conn.sendMessage(jid, { text: caption }, {quoted: { key: { fromMe: false, participant: fakeNumber, ...(m.chat ? { remoteJid: null } : {}) }, message: { conversation: fakeCaption }}}) 
     } 
  
     /** 
     * @param {*} jid 
     * @param {*} text 
     * @param {*} editedText 
     * @param {*} quoted 
     */ 
     conn.editMessage = async (jid, text, editedText, seconds, quoted) => { 
      const {key} = await conn.sendMessage(jid, { text: text }, { quoted: quoted ? quoted : m});  
      await delay(1000 * seconds); // message in seconds?? (delay) 
      await conn.sendMessage(m.chat, { text: editedText, edit: key });  
     } 
  
     /** 
     * @param {*} jid 
     * @param {*} audio 
     * @param {*} quoted 
     */ 
     conn.sendAudio = async (jid, audio, quoted) => { // audio? uwu 
     await conn.sendPresenceUpdate('recording', jid) 
     await conn.sendMessage(jid, { audio: { url: audio }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: quoted ? quoted : m }) 
     } 
  
  
     /** 
     * @param {*} jid 
     * @param {*} text 
     * @param {*} quoted 
     * @param {*} options 
     */ 
     conn.sendTextWithMentions = async (jid, text, quoted, options = {}) => conn.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted }) 
  
  
     /** 
     * @param {*} jid 
     * @param {*} text 
     * @param {*} quoted 
     * @param {*} options 
     */ 
  
     conn.sendText = (jid, text, quoted = '', options) => conn.sendMessage(jid, { text: text, ...options }, { quoted }) 
  
     /** 
     * @returns 
     */ 
  
     conn.parseMention = async(text) => { 
     return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')} 
  
     /** 
     * @param {*} jid 
     */ 
  
     conn.decodeJid = (jid) => { 
     if (!jid) return jid 
     if (/:\d+@/gi.test(jid)) { 
     let decode = jidDecode(jid) || {} 
     return decode.user && decode.server && decode.user + '@' + decode.server || jid 
     } else return jid 
     } 
  
     /** 
     * @param {*} jid? 
     */ 
  
     conn.getName = (jid, withoutContact  = false) => { // jid = m.chat? 
     id = conn.decodeJid(jid) 
     withoutContact = conn.withoutContact || withoutContact  
     let v 
     if (id.endsWith("@g.us")) return new Promise(async (resolve) => { 
     v = store.contacts[id] || {} 
     if (!(v.name || v.subject)) v = conn.groupMetadata(id) || {} 
     resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international')) 
     }) 
     else v = id === '0@s.whatsapp.net' ? { 
     id, 
     name: 'WhatsApp' 
     } : id === conn.decodeJid(conn.user.jid) ? 
     conn.user : 
     (store.contacts[id] || {}) 
     return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international') 
     } 
  
conn.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
        let quoted = message.msg ? message.msg : message
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(quoted, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
	let type = await FileType.fromBuffer(buffer)
        trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
        await fs.writeFileSync(trueFileName, buffer)
        return trueFileName
    }

     /** 
     * 
     * @param {*} jid 
     * @param {*} kon 
     * @param {*} quoted 
     * @param {*} opts = options? 
     */ 
  
     conn.sendContact = async (jid, kon, quoted = '', opts = {}) => { 
         let list = [] 
         for (let i of kon) { 
             list.push({ 
                     displayName: await conn.getName(i), 
                     vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await conn.getName(i)}\nFN:${await conn.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:toca aqui uwu\nitem2.EMAIL;type=INTERNET:${yt}\nitem2.X-ABLabel:YouTube\nitem3.URL:${github}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD` 
             }) 
         } 
         conn.sendMessage(jid, { contacts: { displayName: `${list.length} Contacto`, contacts: list }, ...opts }, { quoted }) 
     } 
  
     /** 
      *  
      * @param {*} jid  
      * @param {*} path  
      * @param {*} quoted  
      * @param {*} options  
      * @returns  
      */ 
     conn.sendVideoAsSticker = async (jid, path, quoted, options = {}) => { 
         let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0) 
         let buffer 
         if (options && (options.packname || options.author)) { 
             buffer = await writeExifVid(buff, options) 
         } else { 
             buffer = await videoToWebp(buff) 
         } 
  
         await conn.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted }) 
         return buffer 
     } 
     conn.sendPoll = (jid, name = '', values = [], selectableCount = 1) => { return conn.sendMessage(jid, { poll: { name, values, selectableCount }}) } 
  
  
         /** 
          *  
          * @param {*} jid  
          * @param {*} forceForward  
          * @param {*} options  
          * @returns  
          */ 
         m.copyNForward = (jid = m.chat, forceForward = false, options = {}) => conn.copyNForward(jid, m, forceForward, options) 
     /** 
     * a normal reply 
     */ 
     m.reply = (text, chatId, options) => conn.sendMessage(chatId ? chatId : m.chat, { text: text }, { quoted: m, detectLinks: false, thumbnail: global.thumb, ...options }) 
  
     /** 
     * copy message? 
     */ 
     m.copy = () => exports.smsg(conn, M.fromObject(M.toObject(m))) 
  
     return m 
 } 
  
  
 let file = require.resolve(__filename) 
 fs.watchFile(file, () => { 
         fs.unwatchFile(file) 
         console.log(chalk.redBright(`Update ${__filename}`)) 
         delete require.cache[file] 
         require(file) 
 })
