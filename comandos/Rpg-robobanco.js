/*
let handler = async (m, { conn, isPrems }) => {
    let d = 0;
    let success = Math.random() >= 0.9;

    if (success) {
        d = Math.floor(Math.random() * 1001); // Valor aleatorio entre 0 y 1000
    } else {
        let time = global.db.data.users[m.sender].lastrobbank + 3600000; // 1 hora en milisegundos

        if (new Date() - global.db.data.users[m.sender].lastrobbank < 3600000) {
            let remainingTime = msToTime(time - new Date());
            throw `No puedes robar el banco nuevamente, estás siendo buscado por la policía. Espera ${remainingTime} para volver a intentarlo.`;
        }
    }

    let pp = "galeria/menudorrat3.jpg";

    if (success) {
        let amount = `${d} DÓLARES`;
        m.reply(`*${pickRandom(global.robBank)} $${amount}*`);
        global.db.data.users[m.sender].dolares = d;
    } else {
        m.reply("*Fallaste, no ganaste nada.*");
    }

    global.db.data.users[m.sender].lastrobbank = new Date();
};

handler.help = ["rob"];
handler.tags = ["xp"];
handler.command = ["robarbanco", "roboabanco"];
handler.fail = null;
handler.exp = 0;

export default handler;

function msToTime(duration) {
    let milliseconds = parseInt((duration % 1000) / 100);
    let seconds = Math.floor((duration / 1000) % 60);
    let minutes = Math.floor((duration / (1000 * 60)) % 60);
    let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    return `${minutes} m ${seconds} s`;
}

function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())];
}

global.robBank = ["Robas el banco de Santavilla y te llevas"];

