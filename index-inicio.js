import { readdirSync, statSync, unlinkSync, existsSync, readFileSync, rmSync, watch } from "fs"
import { createRequire } from "module"
import path, {join} from "path";
import { fileURLToPath, pathToFileURL } from "url"
import { setupMaster, fork } from "cluster"
import cfonts from "cfonts"
import { createInterface } from "readline"
import yargs from "yargs"
import syntaxerror from "syntax-error"
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
    args: args.slice(1),
  });

  const p = fork();
  p.on("message", (data) => {
    switch (data) {
      case "reset":
        p.process.kill();
        isRunning = false;
        start(file);
        break;
      case "uptime":
        p.send(process.uptime());
        break;
    }
  });

  p.on("exit", (_, code) => {
    isRunning = false;
    console.error("⚠️ Error Inesperado ⚠️", code);

    p.process.kill();
    isRunning = false;
    start(file);

    if (process.env.pm_id) {
      process.exit(1);
    } else {
      process.exit();
    }
  });

  start("main.js");