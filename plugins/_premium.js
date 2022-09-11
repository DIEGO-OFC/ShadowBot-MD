let handler = m => m
export async function all(m) {
let user = global.db.data.users[m.sender]
if (m.chat.endsWith('broadcast')) return
if (user.premiumTime != 0 && user.premium) {
if (new Date() * 1 >= user.premiumTime) {
await m.reply(`${ag}*@${m.sender.split`@`[0]} ¡𝙎𝙀 𝘼𝘾𝘼𝘽𝙊 𝙏𝙐 𝙏𝙄𝙀𝙈𝙋𝙊 𝙋𝙍𝙀𝙈𝙄𝙐𝙈!*\n𝙎𝙄 𝙌𝙐𝙄𝙀𝙍𝙀𝙎 𝙊𝘽𝙏𝙀𝙉𝙀𝙍 𝙐𝙉 𝙉𝙐𝙀𝙑𝙊 𝙋𝘼𝙎𝙀 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 𝙐𝙎𝘼 𝙀𝙇 𝘾𝙊𝙈𝘼𝙉𝘿𝙊\n*#pase premium*\n\n𝙔𝙊𝙐𝙍 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 𝙏𝙄𝙈𝙀 𝙄𝙎 𝙊𝙑𝙀𝙍\n𝙄𝙁 𝙔𝙊𝙐 𝙒𝘼𝙉𝙏 𝙏𝙊 𝙂𝙀𝙏 𝘼 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 𝙋𝘼𝙎𝙎 𝙐𝙎𝙀 𝙏𝙃𝙀 𝘾𝙊𝙈𝙈𝘼𝙉𝘿\n*#pass prem*`, false, { mentions: [m.sender] })
user.premiumTime = 0
user.premium = false
}}}
