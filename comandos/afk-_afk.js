export function before(m) {
  const user = global.db.data.users[m.sender];
  if (user.afk > -1) {
    m.reply(
      `
    *🔷 DEJASTE DE ESTAR AFK ${user.afkReason ? ` MOTIVO:\n ${user.afkReason}` : ""}*
    
    *⏳ TIEMPO DE INACTIVIDAD AFK: ${(new Date() - user.afk).toTimeString()}*
  `.trim()
    );
    user.afk = -1;
    user.afkReason = "";
  }

  const jids = [...new Set([...m.mentionedJid, ...(m.quoted ? [m.quoted.sender] : [])])].filter(jid => global.db.data.users[jid]);
  for (const jid of jids) {
    const afkTime = user.afk;
    if (!afkTime || afkTime < 0) continue;
    const reason = user.afkReason || "";
    m.reply(
      `*❍ NO LO ETIQUETES, ESTA (INACTIVO) (𝙰𝙵𝙺)*      
*❍ ${reason ? `MOTIVO (AFK): ${reason}` : "MOTIVO (AFK): _EL USUARIO NO ESPECIFICA UN MOTIVO_"}*
*❍ TIEMPO INACTIVO (AFK): ${(new Date() - afkTime).toTimeString()}*
  `.trim()
    );
  }
  return true;
}
