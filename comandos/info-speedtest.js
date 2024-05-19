import cp from "child_process";
import { promisify } from "util";

const exec = promisify(cp.exec).bind(cp);

var handler = async (m, { conn }) => {
  await conn.reply(m.chat, global.wait, m);
  try {
    const { stdout, stderr } = await exec("python3 speed.py");
    if (stdout.trim()) {
      return m.reply(stdout);
    } else if (stderr.trim()) {
      return m.reply(stderr);
    } else {
      throw new Error("No output from speed.py");
    }
  } catch (e) {
    return m.reply(e.message);
  }
};

handler.help = ["speedtest"];
handler.tags = ["info"];
handler.command = /^(speedtest?|test?speed)$/i;

export default handler
