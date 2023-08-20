  
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { setupMaster, fork } from "cluster";
import cfonts from "cfonts";
import { createInterface } from "readline";
import yargs from "yargs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { say } = cfonts;
const rl = createInterface(process.stdin, process.stdout);

say("ZIRAX-BOT-MD", {
  font: "tiny",
  align: "center",
  colors: ["#ff8000"],
});

say("CREADO POR DIEGO-OFC", {
  font: "console",
  align: "center",
  colors: ["red"],
});

var isRunning = false;

/**
 * Iniciar un archivo js
 * @param {String} file `path/to/file`
 */
function start(file) {
  if (isRunning) return;
  isRunning = true;
  const args = [join(__dirname, file), ...process.argv.slice(2)];

  setupMaster({
    exec: args[0],
    args: args.slice(1)});
  const p = fork();
  p.on('message', (data) => {
    console.log('[RECEIVED]', data);
    switch (data) {
      case 'reset':
        p.process.kill();
        isRunning = false;
        start.apply(this, arguments);
        break;
      case 'uptime':
        p.send(process.uptime());
        break;
    }
  });
  p.on('exit', (_, code) => {
    isRunning = false;
    console.error('❎ㅤOcurrio un error inesperado:', code);

    p.process.kill();
    isRunning = false;
    start.apply(this, arguments);

    if (process.env.pm_id) {
      process.exit(1);
    } else {
      process.exit();
    }
  });
  const opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse());
  if (!opts['test']) {
    if (!rl.listenerCount()) {
      rl.on('line', (line) => {
        p.emit('message', line.trim());
      });
    }
  }
}
start('main.js');
