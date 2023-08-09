console.log("📑  Cargando comandos");
console.log("📦  Comandos Cargados correctamente");
console.log("☑️ㅤIniciando bot...");
const {join, dirname} = require("path");
const {fileURLToPath} = require("url");
const {setupMaster, fork} = require("cluster");
const cfonts = require("cfonts");
const {createInterface} = require("readline");
const yargs = require("yargs");
const __dirname = dirname(fileURLToPath(import.meta.url));
const {say} = cfonts
const rl = createInterface(process.stdin, process.stdout);

say("THE DORRAT-BOT-MD", {
  font: "tiny",
  align: "center",
  colors: ["#ff8000"],
});
say(`CREADO POR DIEGO-OFC`, {
  font: "console",
  align: "center",
  colors: ["red"],
});

var isRunning = false;
/**
* Start a js file
* @param {String} file `path/to/file`
*/
function start(file) {
if (isRunning) return
isRunning = true
let args = [join(__dirname, file), ...process.argv.slice(2)];
  
setupMaster({
exec: args[0],
args: args.slice(1), });
let p = fork()
p.on('message', data => {
switch (data) {
case 'reset':
p.process.kill()
isRunning = false
start.apply(this, arguments);
break
case 'uptime':
p.send(process.uptime());
break }});
p.on('exit', (_, code) => {
isRunning = false
console.error('⚠️ Error Inesperado ⚠️', code);
  
p.process.kill();
isRunning = false;
start.apply(this, arguments);
  
if (process.env.pm_id) {
process.exit(1)
} else {
process.exit()
}
})
let opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
if (!opts['test'])
if (!rl.listenerCount()) rl.on('line', line => {
p.emit('message', line.trim())
})}
start('main.js')
