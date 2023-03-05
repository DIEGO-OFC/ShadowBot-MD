let handler = async (m, { conn }) => {
let pp = imagen1
  let stats = Object.entries(db.data.stats).map(([key, val]) => {
    let name = Array.isArray(comandos[key]?.command) ? comandos[key]?.command?.join('\n⮕ ') : comandos[key]?.command || key 
    if (/exec/.test(name)) return
    return { name, ...val }
  })
  stats = stats.sort((a, b) => b.total - a.total)
  let txt = stats.slice(0, 15).map(({ name, total, last }, idx) => {
    return `${htki} ${idx + 1} ${htka}
${htjava} COMANDO ${htjava}\n⮕ ${name}
${htjava} USOS ${htjava}\n⮕ ${total}`
}).join`\n\n`
  m.reply(txt)}
handler.help = ['dashboard']
handler.tags = ['info']
handler.command = /^(db|dashboard)$/i

export default handler 
	
export function parseMs(ms) {
  if (typeof ms !== 'number') throw 'Parameter must be filled with number'
  return {
    days: Math.trunc(ms / 86400000),
    hours: Math.trunc(ms / 3600000) % 24,
    minutes: Math.trunc(ms / 60000) % 60,
    seconds: Math.trunc(ms / 1000) % 60,
    milliseconds: Math.trunc(ms) % 1000,
    microseconds: Math.trunc(ms * 1000) % 1000,
    nanoseconds: Math.trunc(ms * 1e6) % 1000
  }
}
