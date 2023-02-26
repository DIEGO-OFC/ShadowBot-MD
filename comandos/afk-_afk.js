export function before(m) {
    let user = global.db.data.users[m.sender]
    if (user.afk > -1) {
        m.reply(`
  *🔷 DEJASTE DE ESTAR AFK ${user.afkReason ? ' MOTIVO:\n ' + user.afkReason : ''}*
  
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
        m.reply(`*❍ NO LO ETIQUETES, ESTA (INACTIVO) (𝙰𝙵𝙺)*      
*❍ ${reason ? 'MOTIVO (AFK): ' + reason : 'MOTIVO (AFK): _𝙴𝙻 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 𝙽𝙾 𝙴𝚂𝙿𝙴𝙲𝙸𝙵𝙸𝙲𝙾 𝚄𝙽 𝙼𝙾𝚃𝙸𝚅𝙾_'}*
*❍ TIEMPO INACTIVO (AFK): ${(new Date - afkTime).toTimeString()}*
  `.trim())
    }
    return true
}
