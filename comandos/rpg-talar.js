let handler = async (m, { conn, usedPrefix }) => {
	
	let user = global.db.data.users[m.sender]
	let axe = global.db.data.users[m.sender].axe
	let adurability = global.db.data.users[m.sender].axedurability
    let __waktur = (new Date - global.db.data.users[m.sender].lastcutting)
    let _waktur = (180000 - __waktur)
    let waktur = clockString(_waktur)
    //let jungle = (axe == 1 ? Math.floor(Math.random() * 5) : '' || axe == 2 ? Math.floor(Math.random() * 7) : '' || axe == 3 ? Math.floor(Math.random() * 10) : '' || axe == 4 ? Math.floor(Math.random() * 20) : '' || axe == 5 ? Math.floor(Math.random() * 30) : '' )
    //let birch = (axe == 1 ? Math.floor(Math.random() * 10) : '' || axe == 2 ? Math.floor(Math.random() * 17) : '' || axe == 3 ? Math.floor(Math.random() * 25) : '' || axe == 4 ? Math.floor(Math.random() * 40) : '' || axe == 5 ? Math.floor(Math.random() * 55) : '' )
    let oak = (axe == 1 ? Math.ceil(Math.random() * 100) : '' || axe == 2 ? Math.ceil(Math.random() * 150) : '' || axe == 3 ? Math.ceil(Math.random() * 200) : '' || axe == 4 ? Math.ceil(Math.random() * 250) : '' || axe == 5 ? Math.ceil(Math.random() * 350) : '' )
    let exp = (axe == 1 ? Math.ceil(Math.random() * 200) : '' || axe == 2 ? Math.ceil(Math.random() * 400) : '' || axe == 3 ? Math.ceil(Math.random() * 600) : '' || axe == 4 ? Math.ceil(Math.random() * 800) : '' || axe == 5 ? Math.ceil(Math.random() * 1000) : '' )
    let durability = Math.floor(Math.random() * 100)
    let goa = (pickRandom(['un bosque 🌳']))
    
    if (axe > 0) {
    if (global.DATABASE._data.users[m.sender].axedurability > 99) {
    if (new Date - global.db.data.users[m.sender].lastcutting > 180000) {
     
global.db.data.users[m.sender].lastcutting = new Date * 1 
//global.DATABASE._data.users[m.sender].jungle += jungle * 1 
//global.DATABASE._data.users[m.sender].birch += birch * 1 
global.db.data.users[m.sender].oak += oak * 1 
global.db.data.users[m.sender].axedurability -= durability * 1
global.db.data.users[m.sender].exp += exp * 1

          setTimeout(() => {
          	m.reply(`*Talaste en ${goa} y obtienes*
- Madera: ${oak}
- Exp: ${exp}
*🪓 Durabilidad:* -${durability}`)
          }, 0)
          
            } else m.reply(`Te quedaste sin energía vuelve dentro de *${waktur}*`)
         } else m.reply(`Repara tu hacha, escribiendo ${usedPrefix}reparar hacha`)
     } else m.reply(`Todavía no tienes una hacha, compralo escribiendo ${usedPrefix}comprar hacha`)
 }

//Update
//- Roble: ${oak}
//- Abedul: ${birch}
//- Jungla: ${jungle}
//- Exp: ${exp}

handler.help = ['talar']
handler.tags = ['rpg']

handler.command = /^(cut|talar)$/i
handler.disabled = false

export default handler 

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}

function clockString(ms) {

let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)

let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60

let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60

return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
