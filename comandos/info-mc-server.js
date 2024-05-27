let handler = async (m, {}) => {
  m.reply(global.mc);
};
handler.command = /^(MC-SERVER|MC-SERVER|mc-server)$/i;

export default handler;

global.mc = `┏━━━━━━━━━━━━━┓
┃ *<MINECRAFT SERVER/>*
║≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋
┣ • *IP: node.asif.panel-infinitywa.store
┣ • *PUERTO: 3000*
┣ • *Vanilla bedrock*
┗━━━━━━━━━━━━━┛`;
