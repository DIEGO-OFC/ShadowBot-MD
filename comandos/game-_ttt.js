
import { format } from 'util'
let debugMode = !1
//let winScore = 4999
//let playScore = 99
export async function before(m) {
const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}

let ok
let isWin = !1
let isTie = !1
let isSurrender = !1
this.game = this.game ? this.game : {}
let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
if (room) {
if (!/^([1-9]|(me)?nyerah|\rendirse\|rendirse|RENDIRSE|SALIR|salir|Salir|out|OUT|Out|surr?ender)$/i.test(m.text)) 
return !0
isSurrender = !/^[1-9]$/.test(m.text)
if (m.sender !== room.game.currentTurn) { 
if (!isSurrender)
return !0 }
if (debugMode)
m.reply('[DEBUG]\n' + require('util').format({
isSurrender,
text: m.text }))
if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
m.reply({
'-3': 'El juego ha terminado',
'-2': 'Inválido',
'-1': 'Posición inválida',
0: 'Posición inválida',
}[ok])
return !0 }
if (m.sender === room.game.winner)
isWin = true
else if (room.game.board === 511)
isTie = true
let arr = room.game.render().map(v => {
return {
X: '❎',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]})
if (isSurrender) {
        
room.game._currentTurn = m.sender === room.game.playerX
isWin = true }
        
let dia = Math.floor(Math.random() * 2)
let tok = Math.floor(Math.random() * 2)
let dorrat = Math.floor(Math.random() * 2)
let expp = Math.floor(Math.random() * 10)

let dia2 = Math.floor(Math.random() * 15)
let tok2 = Math.floor(Math.random() * 10)
let dorrat2 = Math.floor(Math.random() * 10)
let expp2 = Math.floor(Math.random() * 2500)  

let winner = isSurrender ? room.game.currentTurn : room.game.winner
let str = `
🫂 𝙹𝚄𝙶𝙰𝙳𝙾𝚁𝙴𝚂
*═════════*
❎ = @${room.game.playerX.split('@')[0]}
⭕ = @${room.game.playerO.split('@')[0]}
*═════════*
     ${arr.slice(0, 3).join('')}
     ${arr.slice(3, 6).join('')}
     ${arr.slice(6).join('')}
*═════════*
${isWin ? `@${(isSurrender ? room.game.currentTurn : room.game.winner).split('@')[0]} 😎🏆 *GANASTE!!*\n*POR HABER GANADO OBTIENES*\n\n💎 *${dia2} Diamantes*\n☯️ *${tok2} Tokens*\n🪙 *${dorrat2} DorratCoins*\n⚡ *${expp2} Exp*` : isTie ? `*EMPATE!!* 🤨\n*POR TERMINAR EN EMPATE AMBOS OBTIENEN*\n\n💎 *${dia} Diamantes*\n☯️ *${tok} Tokens*\n🪙 *${dorrat} DorratCoins*\n⚡ *${expp} Exp*` : `🪄 *TURNO DE* @${room.game.currentTurn.split('@')[0]}`}
`.trim()
let users = global.db.data.users
if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
if (room.x !== room.o)
await this.sendMessage(room.x, { text: str, mentions: this.parseMention(str)}, { quoted: fkontak, m })
await this.sendMessage(room.o, { text: str, mentions: this.parseMention(str)}, { quoted: fkontak, m })
        
if (isTie || isWin) {
users[room.game.playerX].limit += dia //empate
users[room.game.playerX].joincount += tok
users[room.game.playerX].dorracoins += dorrat
users[room.game.playerX].exp += expp
        
users[room.game.playerO].limit += dia //empate
users[room.game.playerO].joincount += tok
users[room.game.playerO].dorracoins += dorrat
users[room.game.playerO].exp += expp 
        
if (isWin)
users[winner].limit += dia2 //Ganador
users[winner].joincount += tok2
users[winner].dorracoins += dorrat2
users[winner].exp += expp2
        
if (debugMode)
m.reply('[DEBUG]\n' + format(room))
delete this.game[room.id]}}
return !0 }
