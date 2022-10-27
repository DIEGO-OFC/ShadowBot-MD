let handler = async (m, { conn, groupMetadata, usedPrefix, command }) => {
    let id = m.chat
    conn.vote = conn.vote ? conn.vote : {}
    if (!(id in conn.vote)) await conn.sendButton(m.chat, `⚠️ *_𝙽𝚘 𝚊𝚑𝚒́ 𝚟𝚘𝚝𝚊𝚌𝚒𝚘𝚗𝚎𝚜 𝚎𝚗 𝚎𝚜𝚝𝚎 𝚐𝚛𝚞𝚙𝚘 !_*`, wm, null, [
    ['𝚅𝙾𝚃𝙰𝚁📦', `${usedPrefix}votar`],
    ['𝙼𝙴𝙽𝚄́🛡️', `${usedPrefix}menu`]
], m)
    let isVote = conn.vote[id][1].concat(conn.vote[id][2])
    const wasVote = isVote.includes(m.sender)
    if (wasVote) {
    await conn.sendMessage(m.chat, { react: { text: '❌', key: m.key }})
    conn.reply(m.chat, `🚫 *𝐘𝐚 𝐡𝐚𝐬 𝐯𝐨𝐭𝐚𝐝𝐨 !*`, m)
    throw false
    }
    if (/up/i.test(command)) {
        conn.vote[id][1].push(m.sender)
    } else if (/de/i.test(command)) {
        conn.vote[id][2].push(m.sender)
    }
    try {
    let [reason, upvote, devote] = conn.vote[id]
    
let caption = `
\t\t\t\t*✲◜🗳️ VOTACIONES 🗳️◞✲*

「 📣 」𝐑𝐚𝐳𝐨́𝐧:* ${reason}

\t\t\t*「 ✅ 」𝐕𝐎𝐓𝐎𝐒 𝐀 𝐅𝐀𝐕𝐎𝐑「 ✅ 」*
*Total: ${upvote.length}*
${upvote.map((v, i) => `• ${i + 1}.  @${v.split`@`[0]}`).join('\n')}

\t\t*「 ❌ 」𝐕𝐎𝐓𝐎𝐒 𝐄𝐍 𝐂𝐎𝐍𝐓𝐑𝐀「 ❌ 」*
*Total:* ${devote.length}
${devote.map((v, i) => `• ${i + 1}.  @${v.split`@`[0]}`).join('\n')}
`
conn.sendButton(m.chat, caption, wm, false, [['𝙵𝙰𝚅𝙾𝚁✅', `/${command}`], ['𝙲𝙾𝙽𝚃𝚁𝙰❌', `/${command}`]], m, { mentions: conn.parseMention(caption) })
} catch {
    m.reply('⚠️ *_𝐍𝐨 𝐚𝐡𝐢́ 𝐯𝐨𝐭𝐚𝐜𝐢𝐨𝐧𝐞𝐬 𝐚𝐜𝐭𝐢𝐯𝐚𝐬 𝐞𝐧 𝐞𝐬𝐭𝐞 𝐠𝐫𝐮𝐩𝐨 ._*')
  }
}
handler.help = ['upvote', 'devote']
handler.tags = ['vote']
handler.command = /^(up|de)vote$/i

export default handler
