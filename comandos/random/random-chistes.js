let handler = async (m, {conn, usedPrefix, command}) => {
m.reply(jokes)}
handler.help = ["chistes"];
handler.tags = ["internet"];
handler.command = /^(chistes)$/i;
export default handler;

const jokes = [

    "Que le dice un jaguar a otro jaguar?  \n-Jaguar You",

    "Como se dice papel higiénico en chino?  \n-KITA KAKA",

    "Hey niño, no te da miedo caminar por aca solo y en la oscuridad?  \n-Cuando estaba vivo si.",

    "Por qué estás hablando con esas zapatillas?  \n-Porque dice 'Converse'",

    "Buenos días, me gustaría alquilar 'Batman Forever'.  \n-No es posible, tiene que devolverla tomorrow.",

    "¡Camarero! Este filete tiene muchos nervios.  \n-Normal, es la primera vez que se lo comen.",

    "Que le dice un techo a otro?  \n-Techo de menos.",

    "Hola, esta agustin?  \n-No, estoy incomodin.",

    "Cual es la fruta que más rie?  \n-La naranjajajajaja",

    "-Abuelo, ¿por que estas con los ojos cerrados?  \n-Es que el computador me dijo que cerrara las pestañas.",

    "¿Cuál es el colmo de un calvo? \n -Tener ideas descabelladas",

    "-¿Sabes como hace el telefono de un carpintero? \n +¿Como?\n -aserrin",

    "-¡Ayuda, me pico un serpiente! \n+¿Cobra? \n-¡No idiota, gratis!",

    "-¿Para que va una caja al gimnasio? \n+Para ser una caja fuerte",

    "-¿Porque se suicido el libro de matematicas? \n+Porque tenia demasiados problemas",

    "-¿Como se llama el primo vegano de Bruce Lee? \n+Broco Lee",

    "-¿Que hace un perro con un taladro? \n+Taladrando",

    "-¿Que hace un vaca en una mina? \n+Vacaminando",

    "-¿Sabes porque no se puede discutir con un DJ? \n+Porque siempre andan cambiando de tema",

    "-¿Porque el mar no se seca? \n+Porque no tiene toalla",

    "-¿Que le dice una impresora a otra? \n+Esa hoja es tuya o es impresion mia",

    "-¿En qué se parece una suegra a un nubarrón? \n+En que cuando se marchan se queda una buena tarde.",

    "-¿Que le dice un chinche a otro? \n+Te voy a ser chinchero, me gustas.",

    "-¿Que le dice una morsa a otra? \n+Almorsamos o que?",

    "+¿Qué le dice un huevo a una sartén?\n—Me tienes frito.",

    "+¿Por qué los elefantes no chatean?\n-Porque le tienen miedo al mouse.",

    "+¿Sabes que le dice un .gif a un .jpg?\n-¡Anímate hombre!",

    "+¿Cuánto cuesta alquilar un coche?\n-Depende del tiempo.\n+Vale, pongamos que llueve.",

    "+¿Qué son 50 físicos y 50 químicos juntos\n-Pues 100tificos.",

    "+¿Qué hace una abeja en el gimnasio?\n-Zumba",

    "+¿Viste el apagón de anoche?\n-No.\n+¿Y eso?\n-Porque estaba oscuro.",

    "Un hombre quiere suicidarse y muere en el intento.",

    "+¿Cuántas personas entran en un huevo?\n-Dos, clara y ema.",

    "+¿Cuál es la palabra más larga?\n-ArroZ, porque empieza en la A y termina en Z.",

    "+¿Cuánto cuesta esta estufa?\n-5.000 dólares.\n+Pero, oiga, ¡esto es una estafa!\n-No, señor, esto es una estufa.",

    "-Doctor, tengo un problema de inseguridad, ¿o no?.",

    "+¿Qué hace un mudo bailando?\n-Una mudanza.",

    "+Buenos días. Busco trabajo.\n-¿Le interesa de jardinero?\n+¿Dejar dinero? ¡Si lo que busco es trabajo!",

    "+¿Cuál es el vino mas amargo?\n-Vino mi suegra.",

    "+¿Cuál es el animal más antiguo?\n-La vaca\n+¿Por qué?\n-Porque esta en blanco y negro.",

    "+¿Por qué fue la computadora al doctor?\n-Porque tenía un virus.",

    "+Oye, ¿tu estudias derecho?\n-No, yo estudio sentado.",

    "+¿Cómo se despiden los químicos?\n-Ácido un placer",

    "+¿Sabes que le dice un .gif a un .jpg?\n-¡Anímate hombre!",

    "+¡Estás obsesionado con la comida!\n-No sé a que te refieres croquetamente.",

    "-El sargento ordena: Fuego a discreción, y discreción murió acribillado",

    "+¿Cual es el cafe más peligroso?\n-El ex-preso.",

    "+¿Que pasa si tiras un pato al agua?\n-Nada.",

    "+Puff... me a caido mal el estofado\n-¡Pues no le hables!",

    "+¿Que es peor que encontrase un gusano en la manzana?\n-Encontrarse medio gusano.",

    "+¿Donde cuelga la capa superman?\n-En su-perchero",

    "+¿Que le dice un arbol a otro?\n-¿Que pasa tronco?",

    "-Si lo zombies se degradan con el tiempo\n¿zonbiodegradables?",

    "+¿Que le dice un pan a otro?\n-Te presento a una miga.",

    "+¿De que se quejan los astronautas?\n-Por falta de espacio.",

    "+¿Que le dice la foca a su madre?\n-I love you, mother foca",

    "Mamá, no me gusta mi hermanito\nNo importa, no hay nada más que comer.",

    `¿Por qué no se puede jugar al escondite con un fantasma?\n- Porque siempre lo encuentra.`,

    `¿Cómo se llama el caballo blanco de Napoleón?\n- Éclair.`,

    `¿Qué le dice una vaca a otra?\n- Mooooo-vedad.`,

    `¿Por qué los murciélagos no pueden jugar al fútbol?\n- Porque no tienen pies para botar la pelota.`,

    `¿Cómo se llama el abuelo de un árbol?\n- Abuelo tronco.`,

    `¿Por qué el código randomHex se viste de color morado?\n- Porque le gustan los colores vibrantes.`,

    `¿Cómo se siente el código randomHex cuando está codificado?\n- Está muy entusiasmado porque sabe que vendrán cosas buenas.`

  ];
