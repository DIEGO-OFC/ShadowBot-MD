import {readdirSync, statSync, unlinkSync, existsSync, readFileSync, rmSync, watch} from "fs";
import { join, dirname } from "path";
import {createRequire} from "module";
import {fileURLToPath, pathToFileURL} from "url";
import { setupMaster, fork } from "cluster";
import cfonts from "cfonts";
import { createInterface } from "readline";
import yargs from "yargs";
import syntaxerror from "syntax-error";
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

  const opts = yargs(process.argv.slice(2)).exitProcess(false).parse();
  if (!opts["test"]) {
    if (!rl.listenerCount()) {
      rl.on("line", (line) => {
        p.emit("message", line.trim());
      });
    }
  }
}

start("main.js");

let handler = await import("./handler.js"); 
 global.reloadHandler = async function (restatConn) { 
   try { 
     const Handler = await import(`./handler.js?update=${Date.now()}`).catch(console.error); 
     if (Object.keys(Handler || {}).length) handler = Handler; 
   } catch (e) { 
     console.error(e); 
  }
 }
 const comandosFolder = join(__dirname, './comandos'); 
 const comandosFilter = filename => /\.js$/.test(filename); 
 global.comandos = {}; 
  
 async function filesInit(folder) { 
   for (let filename of readdirSync(folder).filter(comandosFilter)) { 
     try { 
       let file = join(folder, filename); 
       const module = await import(file); 
       global.comandos[file] = module.default || module; 
     } catch (e) { 
       console.error(e); 
       delete global.comandos[filename]; 
     } 
   } 
  
   for (let subfolder of readdirSync(folder)) { 
     const subfolderPath = join(folder, subfolder); 
     if (statSync(subfolderPath).isDirectory()) { 
       await filesInit(subfolderPath); 
     } 
   } 
 } 
  
 await filesInit(comandosFolder).then(_ => Object.keys(global.comandos)).catch(console.error); 
  

global.reload = async (_ev, filename) => {
  if (comandosFilter(filename)) {
    let dir = global.__filename(join(comandosFolder, filename), true);
    if (filename in global.comandos) {
      if (existsSync(dir)) conn.logger.info(` updated plugin - '${filename}'`);
      else {
        conn.logger.warn(`deleted plugin - '${filename}'`);
        return delete global.comandos[filename];
      }
    } else conn.logger.info(`new plugin - '${filename}'`);
    let err = syntaxerror(readFileSync(dir), filename, {
      sourceType: "module",
      allowAwaitOutsideFunction: true,
    });
    if (err) conn.logger.error(`syntax error while loading '${filename}'\n${format(err)}`);
    else
      try {
        const module = await import(`${global.__filename(dir)}?update=${Date.now()}`);
        global.comandos[filename] = module.default || module;
      } catch (e) {
        conn.logger.error(`error require plugin '${filename}\n${format(e)}'`);
      } finally {
        global.comandos = Object.fromEntries(Object.entries(global.comandos).sort(([a], [b]) => a.localeCompare(b)));
      }
  }
};
Object.freeze(global.reload);
watch(comandosFolder, global.reload);
await global.reloadHandler();
