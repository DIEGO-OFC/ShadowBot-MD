let handler = async (m, { conn }) => {
let pp = imagen1
  let stats = Object.entries(db.data.stats).map(([key, val]) => {
    let name = Array.isArray(comandos[key]?.help) ? comandos[key]?.help?.join('\n⮕ ') : comandos[key]?.help || key 
    if (/exec/.test(name)) return
    return { name, ...val }
  })
  stats = stats.sort((a, b) => b.total - a.total)
  let txt = stats.slice(0, 15).map(({ name, total, last }, idx) => {
    return `${htki} ${idx + 1} ${htka}
${htjava} 𝐂𝐌𝐃 ${htjava}\n⮕ ${name}
${htjava} 𝐇𝐈𝐓 ${htjava}\n⮕ ${total}
${htjava} 𝐓𝐈𝐌𝐄 ${htjava}\n⮕ ${getTime(last)}`
}).join`\n\n`
  m.reply(txt)}}}}
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

export function getTime(ms) {
  let now = parseMs(+new Date() - ms)
  if (now.days) return `${now.days} Hari yang lalu`
  else if (now.hours) return `${now.hours} Jam yang lalu`
  else if (now.minutes) return `${now.minutes} Menit yang lalu`
  else return `Barusan`
