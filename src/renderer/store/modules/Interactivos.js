const state = {
  apps: [
    { id: 154,
      autor: 'Ministerio de Cultura',
      titulo: 'Baila con el Arma - DJ',
      coleccion: 'Juegos',
      describe: 'Si te gusta mover tu cuerpo este juego es especial para tí. Elige uno de los personajes del universo de Maguaré: Saimiri, el mono, la rana, el oso perezoso, el olinguito o la camaleona, mientras el ArmaDJ mezcla con sus sintetizadores y los hace bailar a ellos y a ti. ¿Cuál es la música que más te gusta bailar?',
      url: 'bailaconelarmadj/index.html'
    },
    { id: 207,
      autor: 'Maguaré',
      titulo: 'Trabalenguas - Cuentos',
      coleccion: 'Trabalenguas',
      describe: 'Juguemos con las palabras, repite una y otra vez hasta que se destrabe tu lengua: Cuando cuentes cuentos, cuenta cuántos cuentos cuentas, porque si no cuentas...',
      url: 'trabalenguas/cuentos/index.html'
    },
    { id: 208,
      autor: 'Maguaré',
      titulo: 'Trabalenguas - El coco',
      coleccion: 'Trabalenguas',
      describe: 'Juguemos con las palabras, repite una y otra vez hasta que se destrabe tu lengua: Compadre cómpreme un coco. Compadre no como coco porque...',
      url: 'trabalenguas/el_coco/index.html'
    },
    { id: 209,
      autor: 'Maguaré',
      titulo: 'Trabalenguas - María Chucena',
      coleccion: 'Trabalenguas',
      describe: 'Juguemos con las palabras, repite una y otra vez hasta que se destrabe tu lengua: María Chucena techaba su techo, y un techador que por ahí pasaba, le dijo...',
      url: 'trabalenguas/maria_chucena/index.html'
    },
    { id: 210,
      autor: 'Maguaré',
      titulo: 'Trabalenguas - El cielo enladrillado',
      coleccion: 'Trabalenguas',
      describe: 'Juguemos con las palabras, repite una y otra vez hasta que se destrabe tu lengua: El cielo está enladrillado, ¿quién lo desenladrillará?',
      url: 'trabalenguas/el_cielo_enladrillado/index.html'
    },
    { id: 211,
      autor: 'Maguaré',
      titulo: 'Trabalenguas - La ciudad de Pamplona',
      coleccion: 'Trabalenguas',
      describe: 'Juguemos con las palabras, repite una y otra vez hasta que se destrabe tu lengua: en la ciudad de Pamplona hay una plaza, en la plaza hay una esquina, en la esquina hay una casa... ¿qué sigue?',
      url: 'trabalenguas/la_ciudad_de_pamplona/index.html'
    },
    { id: 212,
      autor: 'Maguaré',
      titulo: 'Trabalenguas - El perro de Parra',
      coleccion: 'Trabalenguas',
      describe: 'Juguemos con las palabras, repite una y otra vez hasta que se destrabe tu lengua: Parra tiene un perro, Guerra tenía una parra. El perro de Parra subió a la parra de Guerra... ¿cómo sigue?',
      url: 'trabalenguas/el_perro_de_parra/index.html'
    },
    { id: 213,
      autor: 'Maguaré',
      titulo: 'Trabalenguas - El rey de Constantinopla',
      coleccion: 'Trabalenguas',
      describe: 'Juguemos con las palabras, repite una y otra vez hasta que se destrabe tu lengua: El rey de Constantinopla está constantinoplizado. Consta que Constanza no lo pudo desconstantinoplizar... ¿qué sigue?',
      url: 'trabalenguas/el_rey_de_constantinopla/index.html'
    },
    { id: 214,
      autor: 'Maguaré',
      titulo: 'Trabalenguas - Gallina',
      coleccion: 'Trabalenguas',
      describe: 'Juguemos con las palabras, repite una y otra vez hasta que se destrabe tu lengua: Tengo una gallina pinta, perlinta, pelizanca, repitiblanca, con sus pollitos pintos... ¿cómo sigue?',
      url: 'trabalenguas/gallina/index.html'
    },
    { id: 215,
      autor: 'Maguaré',
      titulo: 'Trabalenguas - Erre',
      coleccion: 'Trabalenguas',
      describe: 'Juguemos con las palabras, repite una y otra vez hasta que se destrabe tu lengua: Erre con erre cigarro, erre con erre barril, rápido corren los carros cargados de... ¿cómo sigue?',
      url: 'trabalenguas/erre/index.html'
    },
    { id: 216,
      autor: 'Maguaré',
      titulo: 'Trabalenguas - Pablito clavó un clavito',
      coleccion: 'Trabalenguas',
      describe: 'Juguemos con las palabras, repite una y otra vez hasta que se destrabe tu lengua: Pablito clavó un clavito en la calva de un calvito, en la calva de un calvito... ¿cómo sigue?',
      url: 'trabalenguas/pablito/index.html'
    },
    { id: 217,
      autor: 'Ministerio de Cultura, Centro Ático',
      titulo: 'Adivinanza 1',
      coleccion: 'Adivinanzas',
      describe: 'Adivina adivinador, juguemos con palabras y descubre el acertijo: Entre rincones y ramas, mis redes voy construyendo, para que moscas incautas, en ellas vayan cayendo.',
      url: 'adivinanzas/arania/index.html'
    },
    { id: 218,
      autor: 'Ministerio de Cultura, Centro Ático',
      titulo: 'Adivinanza 2',
      coleccion: 'Adivinanzas',
      describe: 'Adivina adivinador, juguemos con palabras y descubre el acertijo: Cinco hermanos muy unidos que no se pueden mirar, cuando riñen aunque quieras no los puedes separar.',
      url: 'adivinanzas/dedos/index.html'
    },
    { id: 219,
      autor: 'Ministerio de Cultura, Centro Ático',
      titulo: 'Adivinanza 3',
      coleccion: 'Adivinanzas',
      describe: 'Adivina adivinador, juguemos con palabras y descubre el acertijo: Tengo nombre de animal, cuando la rueda se pincha, me tienes que utilizar.',
      url: 'adivinanzas/gato_hidraulico/index.html'
    },
    { id: 220,
      autor: 'Ministerio de Cultura, Centro Ático',
      titulo: 'Adivinanza 4',
      coleccion: 'Adivinanzas',
      describe: 'Adivina adivinador, juguemos con palabras y descubre el acertijo: Y lo es, y lo es y no lo adivinarás aunque te dé un mes.',
      url: 'adivinanzas/hilo/index.html'
    },
    { id: 221,
      autor: 'Ministerio de Cultura, Centro Ático',
      titulo: 'Adivinanza 5',
      coleccion: 'Adivinanzas',
      describe: 'Adivina adivinador, juguemos con palabras y descubre el acertijo: Cabeza de hierro, cuerpo de madera si te piso un dedo, ¡tremendo grito pegas!',
      url: 'adivinanzas/martillo/index.html'
    },
    { id: 222,
      autor: 'Ministerio de Cultura, Centro Ático',
      titulo: 'Adivinanza 6',
      coleccion: 'Adivinanzas',
      describe: 'Adivina adivinador, juguemos con palabras y descubre el acertijo: Figuritas de blanco algodón, que en el cielo están, pero cuando grises son, seguro te puedes mojar.',
      url: 'adivinanzas/nubes/index.html'
    },
    { id: 223,
      autor: 'Ministerio de Cultura, Centro Ático',
      titulo: 'Adivinanza 7',
      coleccion: 'Adivinanzas',
      describe: 'Adivina adivinador, juguemos con palabras y descubre el acertijo: Tiene agujas y no cose, no se mueve, pero anda, si le das cuerda funciona y el paso del tiempo señala.',
      url: 'adivinanzas/reloj/index.html'
    },
    { id: 224,
      autor: 'Ministerio de Cultura, Centro Ático',
      titulo: 'Adivinanza 8',
      coleccion: 'Adivinanzas',
      describe: 'Adivina adivinador, juguemos con palabras y descubre el acertijo: Todos me quieren para descansar, si ya te lo he dicho, no lo pienses más.',
      url: 'adivinanzas/silla/index.html'
    },
    { id: 225,
      autor: 'Ministerio de Cultura, Centro Ático',
      titulo: 'Adivinanza 9',
      coleccion: 'Adivinanzas',
      describe: 'Adivina adivinador, juguemos con palabras y descubre el acertijo: Te la digo y no me entiendes, te la repito y no me comprendes.',
      url: 'adivinanzas/tela/index.html'
    },
    { id: 226,
      autor: 'Ministerio de Cultura, Centro Ático',
      titulo: 'Adivinanza 10',
      coleccion: 'Adivinanzas',
      describe: 'Adivina adivinador, juguemos con palabras y descubre el acertijo: Dos hermanas diligentes que caminan al compás con el pico diligente y los ojos por detrás.',
      url: 'adivinanzas/tijeras/index.html'
    },
    { id: 300,
      autor: 'Ministerio de Cultura',
      titulo: 'Rompecabezas 4 piezas',
      coleccion: 'Rompecabezas',
      describe: 'Al armar este rompecabezas de 4 piezas descubrirás a los personajes de Maguaré, ¿cuál es tu preferido?',
      url: 'rompecabezas/rompecabezas4/index.html'
    },
    { id: 301,
      autor: 'Ministerio de Cultura',
      titulo: 'Rompecabezas 9 piezas',
      coleccion: 'Rompecabezas',
      describe: 'Al armar este rompecabezas de 9 piezas descubrirás a los personajes de Maguaré, ¿cuál es tu preferido?',
      url: 'rompecabezas/rompecabezas9/index.html'
    },
    { id: 302,
      autor: 'Ministerio de Cultura',
      titulo: 'Rompecabezas 6 piezas',
      coleccion: 'Rompecabezas',
      describe: 'Al armar este rompecabezas de 6 piezas descubrirás a los personajes de Maguaré, ¿cuál es tu preferido?',
      url: 'rompecabezas/rompecabezas6/index.html'
    },
    { id: 404,
      autor: 'Ministerio de Cultura',
      titulo: 'Carrusel',
      coleccion: 'Juegos',
      describe: 'La tristeza y la alegría son algunas de las emociones que puedes sentir. Saimiri y sus amigos quieren compartir contigo sus emociones y te invitan a jugar con este interactivo en el que puedes divertirte mientras identificas cómo se sienten.',
      url: 'carrusel/index.html'
    }

  ]
}
const getters = {
    appsJuegos: state => {
      return state.apps.filter(app => app.coleccion == 'Juegos')
    },
    appsAdivinanzas: state => {
      return state.apps.filter(app => app.coleccion == 'Adivinanzas')
    },
    appsRompecabezas: state => {
      return state.apps.filter(app => app.coleccion == 'Rompecabezas')
    },
    appsTrabalenguas: state => {
      return state.apps.filter(app => app.coleccion == 'Trabalenguas')
    },
}
export default {
  namespaced: true,
  state,
  getters
}
