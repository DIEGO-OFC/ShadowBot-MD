import moment from 'moment-timezone'

let handler = async (m, { conn, text, command }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.sender
    else who = m.sender
    try {
    let bio = await conn.fetchStatus(who)
    let setAt = moment.utc(bio.setAt, 'YYYY-MM-DD\THH:mm:ss\Z').format('YYYY-MM-DD')
    conn.reply(m.chat, '*Status:* ' + bio.status + '\n*Set At:* ' + setAt, fakes, adReply)
    } catch {
    throw 'Terjadi kesalahan'
    }
}
handler.help = ['getbio <@tag/reply>']
handler.tags = ['main']
handler.command = /^(getb?io)$/i
export default handler
