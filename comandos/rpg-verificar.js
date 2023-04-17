import {createHash} from "crypto";
let nombre, edad, genero, identidad, pasatiempo, registro, _registro;

let handler = async function (m, {conn, text, command, usedPrefix}) {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? m.sender : m.sender;

  function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)];
  }
  let nombreWA = (await usedPrefix) + conn.getName(m.sender); //'@' + m.sender.split("@s.whatsapp.net")[0]
  let user = global.db.data.users[m.sender];
  let verificar = new RegExp(usedPrefix);

  if (user.registered === true)
    throw `[❗𝐈𝐍𝐅𝐎❗] 𝚈𝙰 𝙴𝚂𝚃𝙰𝚂 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙰𝙳𝙾\n\n¿𝚀𝚄𝙸𝚁𝚁𝙴 𝚅𝙾𝙻𝚅𝙴𝚁 𝙰 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙰𝚁𝚂𝙴?\n\n 📌𝚄𝚂𝙴 𝙴𝚂𝚃𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙿𝙰𝚁𝙰 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝚁 𝚂𝚄 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙾\n*${usedPrefix}unreg* <Número de serie>`;
  if (command == "verificar" || command == "verify" || command == "register" || command == "reg") {
    await conn.sendButton(
      m.chat,
      "😇 *CÓMO DESEA REGISTRARSE?*",
      "*REGISTRO RAPIDO*\n- Insignia de verificación\n- Desbloquear comandos que requieran registro\n\n*REGISTRO COMPLETO*\n- Insignia de verificación\n- Desbloquear comandos que requieran registro\n- Recompensas por usar este tipo de registro\n- Premium Temporal Gratis\n\n" +
        wm3,
      null,
      [
        [`📑 REGISTRO RÁPIDO`, usedPrefix + "Reg1"],
        [`🗂️ REGISTRO COMPLETO`, usedPrefix + "nombre"],
      ],
      m
    );
  }

  if (command == "reg1") {
    registro = text.replace(/\s+/g, usedPrefix);
    _registro = text.split(" ", 2);

    if (!text)
      return conn.sendButton(
        m.chat,
        mg +
          `*PARÁMETROS DEL REGISTRO:*\n\`\`\`${usedPrefix + command} nombre edad\`\`\`\n\n*EJEMPLO:* \`\`\`${
            usedPrefix + command
          } ${creadorname} 20\`\`\``,
        '```CONSEJO:```\n\n- Escriba "Nombre" + "espacio" + "edad"\n- Su nombre no debe de contener números\n- La edad no debe de contener Letras\n\n*Sabías que puede personalizar más su registro?*\n_Usando el Botón de abajo_',
        null,
        [[`🗂️ USAR REGISTRO COMPLETO`, usedPrefix + "nombre"]],
        m
      );
    if (_registro["length"] >= 3 || isNaN(_registro[1]))
      return conn.sendButton(
        m.chat,
        fg + "🙃 *ESTÁ INTENTANDO SEPRAR SU NOMBRE O UNIR TODO?* ",
        "🧐 *COINCIDE COMO EN ESTOS EJEMPLOS:*\n" +
          `\`\`\`${usedPrefix + command} Super${creadorname}20\`\`\`` +
          "\n" +
          `\`\`\`${usedPrefix + command} Super 15 ${creadorname} \`\`\`` +
          "\n" +
          `\`\`\`${usedPrefix + command} Super ${creadorname} 24 De ${author}\`\`\`\n\n` +
          "*Si cumple que tenga (Nombre/Frase y Edad) Autocompletaremos su Registro*\n_Use el Botón de abajo_",
        null,
        [
          [
            `🌟 AUTOCOMPLETAR MI REGISTRO`,
            usedPrefix + "reg1" + " " + text.replace(/\s+/g, "").replace(/[0-9]+/gi, "") + " " + text.replace(/\s+/g, "").replace(/[a-z]+/gi, ""),
          ],
          ["📑 VOLVER A REGISTRAR", command + usedPrefix],
        ],
        m
      );
    if (!_registro[0])
      return conn.sendButton(
        m.chat,
        fg + `*FALTA SU NOMBRE, PARÁMETROS DEL REGISTRO:*\n\`\`\`${usedPrefix + command} nombre edad\`\`\``,
        wm,
        null,
        [[`🗂️ USAR REGISTRO COMPLETO`, usedPrefix + "nombre"]],
        m
      );
    if (_registro[0].length >= 30) throw fg + "*SU NOMBRE ES MUY LARGO, USE OTRO NOMBRE POR FAVOR*";
    if (_registro[0].length <= 2) throw fg + "*SU NOMBRE ES MUY CORTO, USE OTRO NOMBRE POR FAVOR*";
    _registro[0] = text.replace(/\s+/g, "").replace(/[0-9]+/gi, "");
    nombre = _registro[0];

    if (!_registro[1])
      return conn.sendButton(
        m.chat,
        fg + `*FALTA SU EDAD, PARÁMETROS DEL REGISTRO:*\n\`\`\`${usedPrefix + command} nombre edad\`\`\``,
        wm3,
        null,
        [[`🗂️ USAR REGISTRO COMPLETO`, usedPrefix + "nombre"]],
        m
      );
    //if (isNaN(_registro[1])) throw '*LA EDAD DEBE DE SER SOLO NÚMEROS*'
    if (_registro[1] > 50)
      throw fg + `*SU EDAD ES MUY MAYOR, USE OTRA EDAD POR FAVOR*\n\n*PARÁMETROS DEL REGISTRO:*\n\`\`\`${usedPrefix + command} nombre edad\`\`\``;
    if (_registro[1] < 10)
      throw fg + `*SU EDAD ES MUY MENOR, USE OTRA EDAD POR FAVOR*\n\n*PARÁMETROS DEL REGISTRO:*\n\`\`\`${usedPrefix + command} nombre edad\`\`\``;
    edad = parseInt(_registro[1]); //_registro[1]
    global.db.data.users[m.sender]["registroR"] = true;

    await conn.sendButton(
      m.chat,
      eg +
        "*GENIAL!! SE HA COMPLETADO LO SIGUIENTE*\n*- - - - - - - - - - - - - - - - - - - - - - - - - - - -*\n\n*❒ NOMBRE:* " +
        nombre +
        "\n" +
        "*❒ EDAD:* " +
        edad +
        " años",
      wm3,
      null,
      [[`📡 FINALIZAR REGISTRO`, usedPrefix + "finalizar"]],
      m
    );
  }

  if (command == "nombre" || command == "name") {
    if (verificar.test(text) == false || text.length <= 1)
      return conn.sendButton(
        m.chat,
        "*PERSONALICE SU NOMBRE PARA REGISTRAR, EJEMPLO:*\n" + "```" + usedPrefix + command + " " + creadorname + "```",
        "*También puede vincular su nombre de WhatsApp*\n_Usando el Botón de abajo_",
        null,
        [[`🛐 REGISTRAR CON WHATSAPP`, `${usedPrefix + "nombre2"}`]],
        m
      );
    if (text.length >= 25)
      return conn.sendButton(
        m.chat,
        "*USE UN NOMBRE MÁS CORTO, EJEMPLO:*\n" + "```" + usedPrefix + command + " " + creadorname + "```",
        "*Acaso quiere usar su nombre registrado en su WhatsApp ?*\n_En ese caso use el Botón de abajo_",
        null,
        [[`⚙️ REGISTRAR CON WHATSAPP`, usedPrefix + "nombre2"]],
        m
      );
    if (text.length <= 2)
      return conn.sendButton(
        m.chat,
        "*NOMBRE FALTANTE O MUY CORTO, EJEMPLO:*\n" + "```" + usedPrefix + command + " " + creadorname + "```",
        "*Acaso quiere usar su nombre registrado en su WhatsApp ?*\n_En ese caso use el Botón de abajo_",
        null,
        [[`⚙️ REGISTRAR CON WHATSAPP`, usedPrefix + "nombre2"]],
        m
      );

    nombre = text
      .replace(/\s+/g, "")
      .replace(/[0-9]+/gi, "")
      .trim();
    if (verificar.test(text) == true)
      return conn.sendButton(
        m.chat,
        "*GENIAL!! SE HA REGISTRADO LO SIGUIENTE:*\n*NOMBRE:* " + nombre,
        wm,
        null,
        [[`🔢 REGISTRAR MI EDAD`, usedPrefix + "edad"]],
        m
      );
  }

  if (command == "nombre2" || command == "name2") {
    if (nombreWA.slice(1).length < 2)
      return conn.sendButton(
        m.chat,
        "*SU NOMBRE DE WHATSAPP ES MUY CORTO PARA REGISTRAR USANDO* " + "```" + usedPrefix + command + "```",
        "*Modifique su nombre de WhatsApp e intente de nuevo o puede personalizar su nombre*\n_Sí quiere personalizar use el Botón de abajo_",
        null,
        [[`🔷 PERSONALIZAR REGISTRO`, usedPrefix + "nombre"]],
        m
      );
    if (nombreWA.slice(1).length > 25)
      return conn.sendButton(
        m.chat,
        "*SU NOMBRE DE WHATSAPP ES MUY LARGO PARA REGISTRAR USANDO* " + "```" + usedPrefix + command + "```",
        "*Modifique su nombre de WhatsApp e intente de nuevo o puede personalizar su nombre*\n_Sí quiere personalizar use el Botón de abajo_",
        null,
        [[`🔷 PERSONALIZAR REGISTRO`, usedPrefix + "nombre"]],
        m
      );
    nombre = nombreWA
      .replace(/\s+/g, "")
      .replace(/[0-9]+/gi, "")
      .slice(1)
      .trim();

    if (verificar.test(text) == false)
      return conn.sendButton(
        m.chat,
        "*GENIAL!! SE HA REGISTRADO LO SIGUIENTE:*\n*NOMBRE:* " + nombre,
        wm3,
        null,
        [[`🔢 REGISTRAR MI EDAD`, usedPrefix + "edad"]],
        m
      );
  }

  if (command == "edad" || command == "age") {
    const sections = [
      {
        title: "📌 SELECCIONA TU EDAD!!",
        rows: [
          {
            title: "🔮 Edad Random",
            rowId:
              usedPrefix +
              command +
              " " +
              usedPrefix +
              text +
              pickRandom([
                "30",
                "29",
                "28",
                "27",
                "26",
                "25",
                "24",
                "23",
                "22",
                "21",
                "20",
                "19",
                "18",
                "17",
                "16",
                "15",
                "14",
                "13",
                "12",
                "11",
                "10",
                "31",
              ]),
          },
        ],
      },
      {
        title: "🔰 JOVEN",
        rows: [
          {title: "1️⃣0️⃣ Años", rowId: usedPrefix + command + " " + usedPrefix + text + "10"},
          {title: "1️⃣1️⃣ Años", rowId: usedPrefix + command + " " + usedPrefix + text + "11"},
          {title: "1️⃣2️⃣ Años", rowId: usedPrefix + command + " " + usedPrefix + text + "12"},
          {title: "1️⃣3️⃣ Años", rowId: usedPrefix + command + " " + usedPrefix + text + "13"},
          {title: "1️⃣4️⃣ Años", rowId: usedPrefix + command + " " + usedPrefix + text + "14"},
          {title: "1️⃣5️⃣ Años", rowId: usedPrefix + command + " " + usedPrefix + text + "15"},
          {title: "1️⃣6️⃣ Años", rowId: usedPrefix + command + " " + usedPrefix + text + "16"},
          {title: "1️⃣7️⃣ Años", rowId: usedPrefix + command + " " + usedPrefix + text + "17"},
        ],
      },
      {
        title: "🤨 ADULTO",
        rows: [
          {title: "1️⃣8️⃣ Años", rowId: usedPrefix + command + " " + usedPrefix + text + "18"},
          {title: "1️⃣9️⃣ Años", rowId: usedPrefix + command + " " + usedPrefix + text + "19"},
          {title: "2️⃣0️⃣ Años", rowId: usedPrefix + command + " " + usedPrefix + text + "20"},
          {title: "2️⃣1️⃣ Años", rowId: usedPrefix + command + " " + usedPrefix + text + "21"},
          {title: "2️⃣2️⃣ Años", rowId: usedPrefix + command + " " + usedPrefix + text + "22"},
          {title: "2️⃣3️⃣ Años", rowId: usedPrefix + command + " " + usedPrefix + text + "23"},
          {title: "2️⃣4️⃣ Años", rowId: usedPrefix + command + " " + usedPrefix + text + "24"},
          {title: "2️⃣5️⃣ Años", rowId: usedPrefix + command + " " + usedPrefix + text + "25"},
          {title: "2️⃣6️⃣ Años", rowId: usedPrefix + command + " " + usedPrefix + text + "26"},
          {title: "2️⃣7️⃣ Años", rowId: usedPrefix + command + " " + usedPrefix + text + "27"},
          {title: "2️⃣8️⃣ Años", rowId: usedPrefix + command + " " + usedPrefix + text + "28"},
          {title: "2️⃣9️⃣ Años", rowId: usedPrefix + command + " " + usedPrefix + text + "29"},
          {title: "3️⃣0️⃣ Años", rowId: usedPrefix + command + " " + usedPrefix + text + "30"},
        ],
      },
      {
        title: "🤨 NO ESTÁ TÚ EDAD ?",
        rows: [{title: "🔢 Personalizar mí edad", rowId: usedPrefix + "edad2"}],
      },
    ];

    const listMessage = {
      text: `*SELECCIONE SU EDAD POR FAVOR*\n\n*NOMBRE:* _${nombre}_\n\n*╰⸺ ⊹ ⸺  ⊹ ⸺ ⊹ ⸺ ⊹ ⸺ ⊹*`,
      footer: wm,
      title: "*╭⸺ ⊹ ⸺  ⊹ ⸺ ⊹ ⸺ ⊹ ⸺ ⊹*\n",
      buttonText: "🫵 SELECCIONAR EDAD 🫵 ",
      sections,
    };

    if (!text) return conn.sendMessage(m.chat, listMessage, m);
    if (isNaN(text)) throw "*INGRESE SOLO NÚMEROS*";
    if (text.slice(1).trim() > 50) throw "*DEMASIADO MAYOR PARA SER REGISTRADO*";
    if (text.slice(1).trim() < 10) throw "*DEMASIADO MENOR PARA SER REGISTRADO*"; //.replace(/[^0-9.]+/gi,' ')

    //user.age = text.slice(1)
    edad = text.slice(1).trim();
    if (verificar.test(text) == true)
      return conn.sendButton(
        m.chat,
        "*GENIAL!! SE HA REGISTRADO LO SIGUIENTE:*\n*NOMBRE:* " + nombre + "\n" + "*EDAD:* " + edad + " años",
        wm3,
        null,
        [[`🔷 REGISTRAR MI GÉNERO `, usedPrefix + `genero`]],
        m
      );
  }

  if (command == "edad2" || command == "age2") {
    if (verificar.test(text.slice(1)) == false && !text)
      return conn.sendButton(
        m.chat,
        "*PERSONALICE SU EDAD PARA REGISTRAR, EJEMPLO:*\n" + usedPrefix + command + " " + usedPrefix + "35",
        "*Sabías que puede seleccionar su edad de una lista ?*\n_En ese caso use el Botón de abajo_",
        null,
        [[`🔢 REGISTRAR MI EDAD`, usedPrefix + "edad"]],
        m
      );
    if (isNaN(text)) throw "*INGRESE SOLO NÚMEROS*";
    if (text > 50) throw "*DEMASIADO MAYOR PARA SER REGISTRADO*";
    if (text < 10) throw "*DEMASIADO MENOR PARA SER REGISTRADO*";

    //user.age = text.slice(1)
    edad = text
      .replace(/\s+/g, "")
      .replace(/[a-z]+/gi, "")
      .trim();
    if (verificar.test(text) == true)
      return conn.sendButton(
        m.chat,
        "*GENIAL!! SE HA REGISTRADO LO SIGUIENTE:*\n*NOMBRE:* " + nombre + "\n" + "*EDAD:* " + edad + " años",
        wm,
        null,
        [[`REGISTRAR MI GÉNERO `, usedPrefix + `genero`]],
        m
      );
  }

  if (command == "genero" || command == "género" || command == "gender") {
    const sections = [
      {
        title: "🌟 SELECCIONA TU GÉNERO!!",
        title: comienzo + " 🚹 MASCULINO " + fin,
        rows: [{title: "🚹 Hombre", rowId: usedPrefix + command + " " + usedPrefix + text + "Hombre"}],
      },
      {
        title: comienzo + " 🚺 FEMENINO " + fin,
        rows: [{title: "🚺 Mujer", rowId: usedPrefix + command + " " + usedPrefix + text + "Mujer"}],
      },
      {
        title: comienzo + " 👤 OCULTAR " + fin,
        rows: [{title: "👤 Ocultado", rowId: usedPrefix + command + " " + usedPrefix + text + "Ocultado"}],
      },
    ];

    const listMessage = {
      text: `*SELECCIONE SU GÉNERO POR FAVOR*\n\n*NOMBRE:* _${nombre}_\n*EDAD:* _${edad}_\n\n*╰⸺ ⊹ ⸺  ⊹ ⸺ ⊹ ⸺ ⊹ ⸺ ⊹*`,
      footer: wm,
      title: "*╭⸺ ⊹ ⸺  ⊹ ⸺ ⊹ ⸺ ⊹ ⸺ ⊹*\n",
      buttonText: "😈 SELECCIONAR GÉNERO 😈 ",
      sections,
    };

    if (!text) return conn.sendMessage(m.chat, listMessage, m);
    global.db.data.users[m.sender]["registroC"] = true;
    genero = text.slice(1).trim();

    if (verificar.test(text) == true)
      return conn.sendButton(
        m.chat,
        "*GENIAL!! SE HA REGISTRADO LO SIGUIENTE:*\n*NOMBRE:* " + nombre + "\n" + "*EDAD:* " + edad + " años" + "\n" + "*GENERO:* " + genero,
        wm,
        null,
        [[`🌱 REGISTRAR MI IDENTIDAD`, usedPrefix + "identidad"]],
        m
      );
  }

  if (command == "identidad" || command == "identity") {
    const sections = [
      {
        title: "🤨 SELECCIONE SU GÉNERO!!",
        rows: [
          {title: "• Heterosexual", rowId: usedPrefix + command + " " + usedPrefix + text + "Heterosexual"},
          {title: "• Hetero insano", rowId: usedPrefix + command + " " + usedPrefix + text + "Hetero insano"},
          {title: "• Hetero waza", rowId: usedPrefix + command + " " + usedPrefix + text + "Hetero waza"},
          {title: "• Hetero DorratFan", rowId: usedPrefix + command + " " + usedPrefix + text + "Hetero DorratFan"},
          {title: "• Mega Hetero", rowId: usedPrefix + command + " " + usedPrefix + text + "Mega hetero"},
          {title: "• Super Hetero", rowId: usedPrefix + command + " " + usedPrefix + text + "Super hetero"},
          {title: "• Mega Hetero god", rowId: usedPrefix + command + " " + usedPrefix + text + "Mega Hetero God"},
          {title: "• Hetero skiribididoyeyes", rowId: usedPrefix + command + " " + usedPrefix + text + "Hetero skiribididoyeyes"},
          {title: "• Hetero masiso", rowId: usedPrefix + command + " " + usedPrefix + text + "Hetero masiso"},
          {title: "• Hetero alpha", rowId: usedPrefix + command + " " + usedPrefix + text + "Hetero alpha"},
          {title: "• Hetero omega", rowId: usedPrefix + command + " " + usedPrefix + text + "Hetero omega"},
          {title: "• Beta hetero", rowId: usedPrefix + command + " " + usedPrefix + text + "Beta hetero"},
          {title: "• Tera hetero", rowId: usedPrefix + command + " " + usedPrefix + text + "tera hetero"},
          {title: "• Hetero Diamante", rowId: usedPrefix + command + " " + usedPrefix + text + "Hetero Diamante"},
          {title: "• Hetero musculoso", rowId: usedPrefix + command + " " + usedPrefix + text + "Hetero musculoso"},
          {title: "• Lesbiana(rico)", rowId: usedPrefix + command + " " + usedPrefix + text + "Lesbiana"},
          {title: "• Gay(desepcion de tus padres)", rowId: usedPrefix + command + " " + usedPrefix + text + "gay(desepcion de tus padres)"},
          {title: "• Hetero pro", rowId: usedPrefix + command + " " + usedPrefix + text + "Hetero pro"},
          {title: "• Hetero antigays", rowId: usedPrefix + command + " " + usedPrefix + text + "hetero antigays"},
          {title: "• Hetero rey", rowId: usedPrefix + command + " " + usedPrefix + text + "Hetero Rey"},
        ],
      },
      {
        title: comienzo + " 👤 OCULTAR " + fin,
        rows: [{title: "Ocultado", rowId: usedPrefix + command + " " + usedPrefix + text + "Ocultado"}],
      },
    ];

    const listMessage = {
      text: `*SELECCIONE SU IDENTIDAD DE GÉNERO POR FAVOR*\n\n*NOMBRE:* _${nombre}_\n*EDAD:* _${edad}_\n*GÉNERO:* _${genero}_\n\n*╰⸺ ⊹ ⸺  ⊹ ⸺ ⊹ ⸺ ⊹ ⸺ ⊹*`,
      footer: wm,
      title: "*╭⸺ ⊹ ⸺  ⊹ ⸺ ⊹ ⸺ ⊹ ⸺ ⊹*\n",
      buttonText: "🌱 IDENTIDAD DE GÉNERO 🌱",
      sections,
    };

    if (!text) return conn.sendMessage(m.chat, listMessage, m);

    identidad = text.slice(1).trim();
    if (verificar.test(text) == true)
      return conn.sendButton(
        m.chat,
        "*GENIAL!! SE HA REGISTRADO LO SIGUIENTE:*\n*NOMBRE:* " +
          nombre +
          "\n" +
          "*EDAD:* " +
          edad +
          " años" +
          "\n" +
          "*IDENTIDAD DE GÉNERO:* " +
          identidad,
        wm3,
        null,
        [[`🔷 REGISTRAR MIS PASATIEMPOS`, usedPrefix + "pasatiempo"]],
        m
      );
  }

  if (command == "finalizar" || command == "end") {
    if (global.db.data.users[m.sender]["registroC"] == true) {
      user.name = nombre;
      user.age = edad;
      user.genero = genero;
      user.identidad = identidad;
      //user.pasatiempo = pasatiempo
      global.db.data.users[m.sender].dolares += 10;
      global.db.data.users[m.sender].limit += 7;
      global.db.data.users[m.sender].exp += 250;
      global.db.data.users[m.sender].joincount += 3;
    } else {
      user.name = nombre;
      user.age = edad;
    }
    user.regTime = +new Date();
    user.registered = true;
    let sn = createHash("md5").update(m.sender).digest("hex").slice(0, 6);

    let caption = `
╔═════ೋೋ═════╗
║ ⚡ \`\`\`VERIFICACIÓN EXITOSA\`\`\` ⚡
║ 🔥 *REGISTRADO EN*
║ ❍ ${wm3}
║ 📋 *TIPO DE REGISTRO* 
║ ❍ ${user.registroC === true ? "Registro Completo" : "Registro Rápido"}
║ ✅ *INSIGNIA DE VERIFICACIÓN*
║ ❍   *${user.registered === true ? "DB ✓" : ""}*
║ 👤 *NOMBRE* 
║ ❍ ${user.name}${user.registered === true ? "DB ✓" : ""}
║ 🔢 *EDAD* 
║ ❍ ${user.age} Años *||* ${user.age > 18 ? "(Persona Adulta)" : "(Persona Joven)"}
║ ${
      user.registroC === true
        ? `\n☘️ *GENERO*
║ ❍ ${
            user.genero == "Ocultado"
              ? `${user.genero} 🗣️`
              : user.genero == "Mujer"
              ? `${user.genero} 🚺`
              : user.genero == "Hombre"
              ? `${user.genero} 🚹`
              : ""
          }
║ 🔷 *IDENTIDAD DE GÉNERO*
║ ❍ ${user.identidad}
║ 📌 *PASATIEMPO(S)*
║ ❍ ${user.pasatiempo}`
        : ""
    }
║ 🛅 *CÓDIGO DE REGISTRO*
║ ❍ ${sn}
${user.registroC === true ? "completo" : "Rapido"}
╚════ ≪ •❈• ≫ ════╝
`.trim();

    await m.reply("🔄 ```VERIFICANDO DATOS...```");
    await conn.sendButton(
      m.chat,
      caption,
      user.registroC === true
        ? wm
        : "Si elimina su registro se eliminara los datos e insignia y dejara de tener acceso a los comandos con registro\n\nPuede volver a eliminar su registro y registrarse desde 0 sin problema.\n\nSu código de serie le permitirá borrar su registro ejemplo:\n" +
            `${usedPrefix}unreg ${sn}`,
      [["[ PERFIL ]", "/profile"]],
      m
    );
    await m.reply(`${sn}`);
  }
};
handler.command = [
  "verify",
  "verificar",
  "register",
  "reg",
  "reg1",
  "nombre",
  "name",
  "nombre2",
  "name2",
  "edad",
  "age",
  "edad2",
  "age2",
  "genero",
  "género",
  "gender",
  "identidad",
  "pasatiempo",
  "hobby",
  "identity",
  "finalizar",
]; ///^(verify|verificar|reg(ister)?)$/i
handler.private = true;
export default handler;

/*import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
  let user = global.db.data.users[m.sender]
  let name2 = conn.getName(m.sender)
  if (user.registered === true) throw `[❗𝐈𝐍𝐅𝐎❗] 𝚈𝙰 𝙴𝚂𝚃𝙰𝚂 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙰𝙳𝙾\n\n¿𝚀𝚄𝙸𝚁𝚁𝙴 𝚅𝙾𝙻𝚅𝙴𝚁 𝙰 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙰𝚁𝚂𝙴?\n\n 📌𝚄𝚂𝙴 𝙴𝚂𝚃𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙿𝙰𝚁𝙰 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝚁 𝚂𝚄 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙾\n*${usedPrefix}unreg* <Número de serie>`
  if (!Reg.test(text)) throw `[❗𝐈𝐍𝐅𝐎❗]  Formato incorrecto\n\n 📦 Uso del comamdo: *${usedPrefix + command} nombre.edad*\n📌Ejemplo : *${usedPrefix + command}* diego.16`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw '[❗𝐖𝐀𝐑𝐍❗] 𝙳𝙴𝙱𝙴𝚂 𝙿𝙾𝙽𝙴𝚁 𝚄𝙽 𝙽𝙾𝙼𝙱𝚁𝙴'
  if (!age) throw '[❗𝐖𝐀𝐑𝐍❗] 𝙻𝙰 𝙴𝙳𝙰𝙳 𝙽𝙾 𝙿𝚄𝙴𝙳𝙴 𝙴𝚂𝚃𝙰𝚁 𝚅𝙰𝙲𝙸𝙰'
  if (name.length >= 30) throw '[❗𝐖𝐀𝐑𝐍❗] 𝙴𝙻 𝙽𝙾𝙼𝙱𝚁𝙴 𝙴𝚂 𝙳𝙴𝙼𝙰𝚂𝙸𝙰𝙳𝙾 𝙻𝙰𝚁𝙶𝙾' 
  age = parseInt(age)
  if (age > 100) throw '👴🏻 nmms viejo de mrd xd'
  if (age < 5) throw '🤡 un bebé 🤡'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  let caption = `
┌─「 *REGISTRADO* 」─
▢ *Nombre:* ${name}
▢ *Edad* : ${age} años
▢ *Numero de serie* :
${sn}
└──────────────`
let author = global.author
conn.sendButton(m.chat, caption, `¡𝚃𝚄 𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴 𝚂𝙴𝚁𝙸𝙴 𝚃𝙴 𝚂𝙴𝚁𝚅𝙸𝚁𝙰 𝙿𝙾𝚁 𝚂𝙸 𝙳𝙴𝚂𝙴𝙰𝚂 𝙱𝙾𝚁𝚁𝙰𝚁 𝚃𝚄 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙾 𝙴𝙽 𝙴𝙻 𝙱𝙾𝚃!\n${author}`, [['¡¡𝙰𝙷𝙾𝚁𝙰 𝚂𝙾𝚈 𝚄𝙽 𝚅𝙴𝚁𝙸𝙵𝙸𝙲𝙰𝙳𝙾/𝙰!!', '/profile']], m)
global.db.data.users[m.sender].money += 10000
global.db.data.users[m.sender].exp += 10000
}
handler.help = ['reg'].map(v => v + ' <nombre.edad>')
handler.tags = ['rg']

handler.command = ['verify', 'reg', 'register', 'registrar', 'verificar'] 

export default handler*/
