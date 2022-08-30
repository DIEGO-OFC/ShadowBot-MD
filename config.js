import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'

//cambia los numeros owners que quieras
global.owner = [
  ['593959425714', '👑  †𝐃⃟𝕺𝐑⃯𝐑𝐇⃯𝚵𝐓᪣𝕭⃯𝚹⃯𝐓⃤ - Creador 👑', true],
  ['51993138466', '👑  †𝐃⃟𝕺𝐑⃯𝐑𝐇⃯𝚵𝐓᪣𝕭⃯𝚹⃯𝐓⃤ - Collaborator 1 👑', true],
  ['522942423144', '👑  †𝐃⃟𝕺𝐑⃯𝐑𝐇⃯𝚵𝐓᪣𝕭⃯𝚹⃯𝐓⃤ - Collaborator 2 👑', true],
  ['573184314110', '👑  †𝐃⃟𝕺𝐑⃯𝐑𝐇⃯𝚵𝐓᪣𝕭⃯𝚹⃯𝐓⃤ - Collaborator 3 👑', true],
  ['51928078536', '👑  †𝐃⃟𝕺𝐑⃯𝐑𝐇⃯𝚵𝐓᪣𝕭⃯𝚹⃯𝐓⃤ - Col𝚊𝚋𝚘𝚛𝚊𝚍𝚘𝚛𝚊 4 👑', true],
  ['527621026869'],
  ['19786077075'],
  ['51936767238'],
  ['584125778026']

] 
global.suittag = ['593959425714'] 
global.mods = [] 
global.prems = [] 

global.APIs = { // API Prefix
  // name: 'https://website'
  amel: 'https://melcanz.com',
  bx: 'https://bx-hunter.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',
  dzx: 'https://api.dhamzxploit.my.id',
  bsbt: 'https://bsbt-api-rest.herokuapp.com',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.me',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz', 
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  adiisus: 'https://adiixyzapi.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  pencarikode: 'https://pencarikode.xyz',
  Velgrynd: 'https://velgrynd.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com',
  hardianto: 'http://hardianto-chan.herokuapp.com',
  shadow: 'https://api.reysekha.xyz',
  apialc: 'https://api-alc.herokuapp.com',
  botstyle: 'https://botstyle-api.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  ana: 'https://anabotofc.herokuapp.com/',
  kanx: 'https://kannxapi.herokuapp.com/',
  dhnjing: 'https://dhnjing.xyz',
  violetics: 'https://violetics.pw'
},
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api-alc.herokuapp.com': 'ConfuMods',
  'https://api.reysekha.xyz': 'apirey',
  'https://melcanz.com': 'F3bOrWzY',
  'https://bx-hunter.herokuapp.com': 'Ikyy69',
  'https://api.xteam.xyz': '5bd33b276d41d6b4',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://bsbt-api-rest.herokuapp.com': 'benniismael',
  'https://api.zeks.me': 'apivinz',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://pencarikode.xyz': 'pais', 
  'https://leyscoders-api.herokuapp.com': 'MIMINGANZ', 
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://api.lolhuman.xyz': '9b817532fadff8fc7cb86862',
  'https://botstyle-api.herokuapp.com': 'Eyar749L',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://anabotofc.herokuapp.com/': 'AnaBot',
  'https://violetics.pw': 'beta'
}

//______________________________________________

global.vs = '1.2.15'
global.version = vs
// Sticker WM
global.packname = '(☞ﾟ∀ﾟ)☞'
global.author = '†𝐃⃟𝕺𝐑⃯𝐑𝐇⃯𝚵𝐓᪣𝕭⃯𝚹⃯𝐓⃤'
global.wm = '†𝐃⃟𝕺𝐑⃯𝐑𝐇⃯𝚵𝐓᪣𝕭⃯𝚹⃯𝐓⃤ | 𝘿𝙄𝙀𝙂𝙊-𝙊𝙁𝘾'
global.igfg = '†𝐃⃟𝕺𝐑⃯𝐑𝐇⃯𝚵𝐓᪣𝕭⃯𝚹⃯𝐓⃤'
global.wait = '*[❗] Ƈᴀʀɢᴀɴᴅᴏ, ᴀɢᴜᴀʀᴅᴇ ᴜɴ ᴍᴏᴍᴇɴᴛᴏ...*'
//-------------------
global.md = 'https://chat.whatsapp.com/CrsOmirjZNYKrvnQNT98Oo'
global.dorramd = md

//_____________________________________________

global.ag = '━━━━━━━ ❎ 𝙰𝙳𝚅𝙴𝚁𝚃𝙴𝙽𝙲𝙸𝙰 | 𝚆𝙰𝚁𝙽𝙸𝙽𝙶 ❎ ━━━━━━━━━'
global.advertencia = ag
global.fg = '☆━━━━━━━ ⚠️ 𝙵𝙰𝙻𝙻𝙾 | 𝙵𝙰𝙻𝙻 ⚠️ ━━━━━━☆'
global.fallo = fg
global.mg = '═══════ ≫ ❗ 𝙻𝙾 𝚄𝚂𝙾 𝙼𝙰𝙻 ❗ ≪ ════════'
global.mal = mg
global.dorre = 'DORRAT-BOT-MD'
global.DORRA = dorre
//---------------
global.imagen1 = fs.readFileSync('./Menu2.jpg')
global.imagen2 = fs.readFileSync('./src/nuevobot.jpg') 
global.imagen3 = fs.readFileSync('./src/Pre Bot Publi.png')
global.keysZens = ['fiktod', 'c2459db922', 'BF39D349845E', '675e34de8a', '37CC845916', '0b917b905e6f', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.lolkeysapi = ['85faf717d0545d14074659ad']

                 
//⊱ ━━━━━━━━━━━━━━━━━.⋅ RPG ⋅.━━━━━━━━ ⊰

global.flaaa = [

'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',

'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',

'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',

'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',

'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=']

global.cmenut = '❏––––––『'

global.cmenub = '┊✦ '

global.cmenuf = '┗━═┅═━––––––๑\n'

global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     '

global.htki = '*⭑•̩̩͙⊱•••• ☪*'

global.htka = '*☪ ••••̩̩͙⊰•⭑*'

global.comienzo = '• • ◕◕════'

global.fin = '════◕◕ • •'




//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ

global.multiplier = 999 // Cuanto más alto, más difícil subir de nivel | The higher, The harder levelup 

//Emojis RPG
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      agility: '🤸‍♂️ Agilidad : Agility',
      arc: '🏹 Arco : Arc',
      armor: '🥼 Armadura : Armor',
      ayam: '🐓 Pollo : Chicken',
      //armordurability: '🤺 ',
      babi: '🐖 Puerco : Pig',
      bank: '🏦 Banco : Bank',
      Jabali: '🐗 Jabalí : Wild Boar',
      bibitanggur: '🍇 Semilla de Uva : Grapeseed',
      bibitapel: '🍎 Semilla de Manzana : Apple Seed',
      bibitjeruk: '🍊 Semillas de naranja : Orange Seeds',
      bibitmangga: '🥭 Semilla de Mango : Mango Seed',
      bibitpisang: '🍌 Semillas de Plátano : Banana Seeds',
      bow: '🏹 Super Arco : Super Bow',
      bull: '🐃 Toro : Bull',    
      buaya: '🐊 Cocodrilo : Alligator',    
      cat: '🐈 Gato : Cat',      
      centaur: '🐐 Centauro : Centaur',
      chicken: '🐓 Pollo : Chicken',
      common: '📦 Caja Común : Common Box',
      cow: '🐄 Vaca : Cow',
      crystal: '🔮 Cristal : Crystal',
      darkcrystal: '♠️ Cristal Oscuro : Dark Glass',
      diamond: '💎+ Diamante+ : Diamond+',
      dog: '🐕 Perro : Dog',
      dragon: '🐉 Dragón : Dragon',
      elephant: '🐘 Elefante : Elephant',
      emerald: '💚 Esmeralda : Emerald',
      exp: '⚡ Experiencia : Exp',
      fishingrod: '🎣 Caña de Pescar : Fishing Rod',
      fox: '🦊 Zorro : Fox',
      gems: '🍀 Gemas : Gemas',
      giraffe: '🦒 Jirafa : Giraffe',
      griffin: '🦅 Ave : Griffin', //Mascota : Griffin',
      gold: '👑 Oro : Gold',
      health: '❤️ Salud : Health',
      horse: '🐎 Caballo : Horse',
      intelligence: '🧠 Inteligencia : Intelligence',
      iron: '⛓️ Hierro : Iron',
      kambing: '🐐 Cabra : Goat',
      keygold: '🔑 Llave de Oro : Key Gold',
      keyiron: '🗝️ Llave de Hierro : Key Iron',
      kerbau: '🐃 Búfalo : Buffalo',
      kyubi: '🌀 Magia : Magic',
      knife: '🔪 Cuchillo : Knife',
      legendary: '🎁 Caja Legendaria : Legendary Box',
      level: '🧬 Nivel : Level',
      limit: '💎 Diamante : Diamond',
      lion: '🦁 León : Lion',
      magicwand: '⚕️ Varita Mágica : Magic Wand',
      mana: '🪄 Hechizo : Spell',
      money: '🐱 GataCoins : CatCoins',
      monyet: '🐒 Mono : Monkey',
      mythic: '🗳️ Caja Mítica : Mythic Box',
      panda: '🐼 Panda',
      pet: '🍱 Caja para Mascota : Pet Box',
      petFood: '🍖 Alimento para Mascota : Pet Food',
      pickaxe: '⛏️ Pico : Peak',
      pointxp: '📧 Puntos Exp : Point Xp',
      potion: '🥤 Poción : Potion',
      phonix: '🕊️ Fénix : Phoenix',
      rhinoceros: '🦏 Rinoceronte : Rhinoceros',
      rock: '🪨 Roca : Rock',
      robo: '🚔 Robo : Robo',
      snake: '🐍 Serpiente : Snake',
      stamina: '🦾 Aguante : Stamina',
      strength: '🦹‍ ♀️ Fuerza : Strength',
      string: '🕸️ Cuerda : Cuerda',
      superior: '💼 Superior : Superior',
      sword: '⚔️ Espada : Sword',
      tiger: '🐅 Tigre : Tiger',
      joincount: '🪙 Token',
      trash: '🗑 Basura : Trash',
      uncommon: '🥡 Caja Poco Común : Uncommon',
      upgrader: '🧰 Aumentar Mejora : Upgrade',
      wolf: '🐺 Lobo : Wolf',
      wood: '🪵 Madera : Wood'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

global.rpgg = { //Solo emojis 
  emoticon(string) {
    string = string.toLowerCase()
    let emott = {
      agility: '🤸‍♂️',
      arc: '🏹',
      armor: '🥼',
      ayam: '🐓',
      //armordurability: '🤺 ',
      babi: '🐖',
      bank: '🏦',
      Jabali: '🐗',
      bibitanggur: '🍇',
      bibitapel: '🍎',
      bibitjeruk: '🍊',
      bibitmangga: '🥭',
      bibitpisang: '🍌',
      bow: '🏹',
      bull: '🐃',
      buaya: '🐊',  
      cat: '🐈',      
      centaur: '🐐',
      chicken: '🐓',
      common: '📦',
      cow: '🐄',
      crystal: '🔮',
      darkcrystal: '♠️',
      diamond: '💎+',
      dog: '🐕',
      dragon: '🐉',
      elephant: '🐘',
      emerald: '💚',
      exp: '⚡',
      fishingrod: '🎣',
      fox: '🦊',
      gems: '🍀',
      giraffe: '🦒',
      griffin: '🦅',
      gold: '👑',
      health: '❤️',
      horse: '🐎',
      intelligence: '🧠',
      iron: '⛓️',
      kambing: '🐐',
      keygold: '🔑',
      keyiron: '🗝️',
      kerbau: '🐃',
      kyubi: '🌀',
      knife: '🔪',
      legendary: '🎁',
      level: '🧬',
      limit: '💎',
      lion: '🦁',
      magicwand: '⚕️',
      mana: '🪄',
      money: '🐱',
      monyet: '🐒',
      mythic: '🗳️',
      panda: '🐼',
      pet: '🍱',
      petFood: '🍖',
      pickaxe: '⛏️',
      pointxp: '📧',
      potion: '🥤',
      phonix: '🕊️',
      rhinoceros: '🦏',
      rock: '🪨',
      robo: '🚔',
      snake: '🐍',
      stamina: '🦾',
      strength: '🦹‍ ♀️',
      string: '🕸️',
      superior: '💼',
      sword: '⚔️',
      tiger: '🐅',
      joincount: '🪙',
      trash: '🗑',
      uncommon: '🥡',
      upgrader: '🧰',
      wolf: '🐺',
      wood: '🪵'      
    }
    let results = Object.keys(emott).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emott[results[0][0]]
  }
}


global.rpgshop = { //Tienda
  emoticon(string) {
    string = string.toLowerCase()
    let emottt = {
      exp: '⚡ Experiencia : Exp',
      limit: '💎 Diamante : Diamond',
      diamond: '💎+ Diamante+ : Diamond+',
      joincount: '🪙 Token',
      emerald: '💚 Esmeralda : Emerald',
      berlian: '♦️ Joya : Ruby',
      kyubi: '🌀 Magia : Magic',
      gold: '👑 Oro : Gold',
      money: '🐱 GataCoins : CatCoins',
      tiketcoin: '🎫 Gata Tickers',
            
      potion: '🥤 Poción : Potion',
      aqua: '💧 Agua : Water',
      trash: '🗑 Basura : Trash',
      wood: '🪵 Madera : Wood',
      rock: '🪨 Roca : Rock',
      batu: '🥌 Piedra : Stone',
      string: '🕸️ Cuerda : Cuerda',
      iron: '⛓️ Hierro : Iron',
      coal: '⚱️ Carbón : Coal',
      botol: '🍶 Botella : Bottle',
      kaleng: '🥫 Lata : Can',
      kardus: '🪧 Cartón : Paperboard',
      
      eleksirb: '💡 Electricidad : Electricity',
      emasbatang: '〽️ Barra de Oro : Gold bar',
      emasbiasa: '🧭 Oro Común : Common Gold',
      rubah: '🦊🌫️ Zorro Grande : Big Fox',
      sampah: '🗑🌫️ Super Basura : Big Trash',
      serigala: '🐺🌫️ Super Lobo : Big Wolf',
      kayu: '🛷 Super Madera : Super Wood',
      sword: '⚔️ Espada : Sword',
      umpan: '🪱 Carnada : Bait', 
      healtmonster: '👺 Salud Maligna : Evil Health',
      pancingan: '🪝 Gancho : Hook',
       
      common: '📦 Caja Común : Common Box',
      uncommon: '🥡 Caja Poco Común : Uncommon',
      mythic: '🗳️ Caja Mítica : Mythic Box',
      pet: '📫 Caja de Mascotas : Pet Box',//?
      gardenboxs: '💐 Caja de Jardinería : Garden boxs',//?
      legendary: '🎁 Caja Legendaria : Legendary Box',
      
      anggur: '🍇 Uva : Grape',
      apel: '🍎 Manzana : Apple',
      jeruk: '🍊 Naranja : Orange',
      mangga: '🥭 Mango',
      pisang: '🍌 Platano : Banana',
      
      bibitanggur: '🌾🍇 Semillas de uva : Grape Seeds',
      bibitapel: '🌾🍎 Semillas de manzana : Apple seeds',
      bibitjeruk: '🌾🍊 Semillas de naranja : Orange Seeds',
      bibitmangga: '🌾🥭 Semillas de Mango : Mango Seeds',
      bibitpisang: '🌾🍌 Semillas de plátano : Banana Seeds',
      
      centaur: '🐐 Centauro : Centaur',
      griffin: '🦅 Ave : Griffin',
      kucing: '🐈 Gato : Cat',
      naga: '🐉 Dragón : Dragon',
      fox: '🦊 Zorro : Fox',
      kuda: '🐎 Caballo : Horse',
      phonix: '🕊️ Fénix : Phoenix',
      wolf: '🐺 Lobo : Wolf',
      //gardenboc:
      //ketake:
      //koinexpg: 
      petFood: '🍖 Alimento para Mascota : Pet Food', //?
      makanancentaur: '🐐🥩 Comida de Centauro : Centauro Food',
      makanangriffin: '🦅🥩 Comida de Ave : Griffin Food',
      makanankyubi: '🌀🥩 Comida Mágica : Magic Food',
      makanannaga: '🐉🥩 Comida de Dragón : Dragon Food',
      makananpet: '🍱🥩 Alimentos de mascotas: Pet Food',
      makananphonix: '🕊️🥩 Comida de Fénix : Phoenix Food'  
    }
    let results = Object.keys(emottt).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emottt[results[0][0]]
  }
}

global.rpgshopp = { //Tienda
  emoticon(string) {
    string = string.toLowerCase()
    let emotttt = {
      exp: '⚡',
      limit: '💎',
      diamond: '💎+',
      joincount: '🪙',
      emerald: '💚',
      berlian: '♦️',
      kyubi: '🌀',
      gold: '👑',
      money: '🐱',
      tiketcoin: '🎫',
            
      potion: '🥤',
      aqua: '💧',
      trash: '🗑',
      wood: '🪵',
      rock: '🪨',
      batu: '🥌',
      string: '🕸️',
      iron: '⛓️',
      coal: '⚱️',
      botol: '🍶',
      kaleng: '🥫',
      kardus: '🪧',
      
      eleksirb: '💡',
      emasbatang: '〽️',
      emasbiasa: '🧭',
      rubah: '🦊🌫️',
      sampah: '🗑🌫️',
      serigala: '🐺🌫️',
      kayu: '🛷',
      sword: '⚔️',
      umpan: '🪱', 
      healtmonster: '👺',
      pancingan: '🪝',
       
      common: '📦',
      uncommon: '🥡',
      mythic: '🗳️',
      pet: '📫',//?
      gardenboxs: '💐',//?
      legendary: '🎁',
      
      anggur: '🍇',
      apel: '🍎',
      jeruk: '🍊',
      mangga: '🥭',
      pisang: '🍌',
      
      bibitanggur: '🌾🍇',
      bibitapel: '🌾🍎',
      bibitjeruk: '🌾🍊',
      bibitmangga: '🌾🥭',
      bibitpisang: '🌾🍌',
      
      centaur: '🐐',
      griffin: '🦅',
      kucing: '🐈',
      naga: '🐉',
      fox: '🦊',
      kuda: '🐎',
      phonix: '🕊️',
      wolf: '🐺',
      //gardenboc:
      //ketake:
      //koinexpg: 
      petFood: '🍖', //?
      makanancentaur: '🐐🥩',
      makanangriffin: '🦅🥩',
      makanankyubi: '🌀🥩',
      makanannaga: '🐉🥩',
      makananpet: '🍱🥩',
      makananphonix: '🕊️🥩'  
    }
    let results = Object.keys(emotttt).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emotttt[results[0][0]]
  }
}


let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
