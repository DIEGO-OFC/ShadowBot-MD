export function before(m) {
    let user = global.db.data.users[m.sender]
    if (user.afk > -1) {
        m.reply(`
  *🔷 DEJASTE DE ESTAR AFK ${user.afkReason ? ' MOTIVO: ' + user.afkReason : ''}*
  
  *⏳ TIEMPO DE INACTIVIDAD AFK: ${(new Date - user.afk).toTimeString()}*
  `.trim())
        user.afk = -1
        user.afkReason = ''
    }
    let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    for (let jid of jids) {
        let user = global.db.data.users[jid]
        if (!user)
            continue
        let afkTime = user.afk
        if (!afkTime || afkTime < 0)
            continue
        let reason = user.afkReason || ''
        m.reply(`*[❗] 𝙽𝙾 𝙻𝙾 𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙴𝚂 [❗]*

*—◉ 𝙴𝙻 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 𝚀𝚄𝙴 𝚄𝚂𝚃𝙴𝙳 𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙾 𝙴𝚂𝚃𝙰 𝙸𝙽𝙰𝙲𝚃𝙸𝚅𝙾 (𝙰𝙵𝙺)*      
*—◉ ${reason ? '𝙼𝙾𝚃𝙸𝚅𝙾 𝙳𝙴 𝙸𝙽𝙰𝙲𝚃𝙸𝚅𝙸𝙳𝙰𝙳 (𝙰𝙵𝙺): ' + reason : '𝙼𝙾𝚃𝙸𝚅𝙾 𝙳𝙴 𝙸𝙽𝙰𝙲𝚃𝙸𝚅𝙸𝙳𝙰𝙳 (𝙰𝙵𝙺): _𝙴𝙻 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 𝙽𝙾 𝙴𝚂𝙿𝙴𝙲𝙸𝙵𝙸𝙲𝙾 𝚄𝙽 𝙼𝙾𝚃𝙸𝚅𝙾_'}*
*—◉ 𝚃𝙸𝙴𝙼𝙿𝙾 𝚃𝚁𝙰𝙽𝚂𝙲𝚄𝚁𝚁𝙸𝙳𝙾 𝙳𝙴 𝙸𝙽𝙰𝙲𝚃𝙸𝚅𝙸𝙳𝙰𝙳 (𝙰𝙵𝙺): ${(new Date - afkTime).toTimeString()}*
  `.trim())
    }
    return true
}
