const state = {
  /*Videos Serie 1000*/
  videos: [
    { id: 1000,
      autor: 'Ministerio de Cultura - Maguaré - MaguaRED',
      coleccion: '¿Qué piensan los expertos?',
      titulo: 'Fabiola Uribe y la arquitectura en la infancia',
      describe: 'Cuando los niños reconocen lo que les rodea ellos pueden transformar el mundo. Así lo explica Fabiola Uribe, arquitecta y directora de Lunárquicos: práctica experimental de arquitectura para niños.',
      url: '100-ribe.mp4'
    },
    { id: 1001,
      autor: 'Ministerio de Cultura - Maguaré - MaguaRED',
      coleccion: '¿Qué piensan los expertos?',
      titulo: 'Antonia Agreda y el desarrollo integral de los niños indígenas',
      describe: 'Antonia Agreda es una indígena Inga que lleva décadas trabajando por los derechos de los niños indígenas del país. Ella es una de las impulsoras de la modalidad propia intercultural en primera infancia.',
      url: '1001-agreda.mp4'
    },
    { id: 1002,
      autor: 'Ministerio de Cultura - Maguaré - MaguaRED',
      coleccion: '¿Qué piensan los expertos?',
      titulo: 'Carmenza Botero y el sonido en los niños',
      describe: 'Carmenza Botero es una pedagoga que trabaja con el sonido y la música. Para ella lo más serio que hace un niño en primera infancia es escuchar.',
      url: '1002-botero.mp4'
    },
    { id: 1003,
      autor: 'Ministerio de Cultura - Maguaré - MaguaRED',
      coleccion: '¿Qué piensan los expertos?',
      titulo: 'Diana Rubiano y la educación inicial en primera infancia',
      describe: 'Diana Rubiano es la Coordinadora Pedagógica de aeioTU, una fundación que trabaja en el desarrollo integral de los niños de 0 a 5 años. En este video explica cómo ha cambiado el papel de la escuela en la primera infancia.',
      url: '1003-rubiano.mp4'
    },
    { id: 1004,
      autor: 'Ministerio de Cultura - Maguaré - MaguaRED',
      coleccion: '¿Qué piensan los expertos?',
      titulo: 'Juan Carlos Velásquez y los espacios adecuados para los niños',
      describe: 'Juan Carlos Velásquez es un artista que vincula el arte, el diseño y la pedagogía para crear instalaciones, mobiliarios y ambientes que propician las experiencias significativas en los niños.',
      url: '1004-velasquez.mp4'
    },
    { id: 1005,
      autor: 'Ministerio de Cultura - Maguaré - MaguaRED',
      coleccion: '¿Qué piensan los expertos?',
      titulo: 'Irene Vasco y la lectura como un juego',
      describe: 'Los juegos y la animación son parte esencial del ejercicio lector en la primera infancia. Irene Vasco, promotora de lectura y autora infantil, explica por qué.',
      url: '1005-vasco.mp4'
    },
    { id: 1006,
      autor: 'Ministerio de Cultura - Maguaré - MaguaRED',
      coleccion: '¿Qué piensan los expertos?',
      titulo: 'Oscar Brenifier, el filósofo de los niños',
      describe: 'Oscar Brenifier escribe libros que no son libros porque ninguno tiene respuestas, solo preguntas. Para este argelino la lectura con los niños debe ser un diálogo: más inquietudes, menos conclusiones.',
      url: '1006-breniffier.mp4'
    },
    { id: 1007,
      autor: 'Ministerio de Cultura - Maguaré - MaguaRED',
      coleccion: '¿Qué piensan los expertos?',
      titulo: 'Luis Pescetti y la vitalidad en los niños',
      describe: 'Luis Pescetti es músico y escritor de literatura infantil. En este video habla sobre la lectura y el humor en la infancia: ¡una combinación súper poderosa!',
      url: '1007-pescetti.mp4'
    },
    { id: 1008,
      autor: 'Ministerio de Cultura - Maguaré - MaguaRED',
      coleccion: '¿Qué piensan los expertos?',
      titulo: 'Liniers para niños',
      describe: 'Liniers es dibujante y creador de personajes como Olga, Martincito, Enriqueta, Fellini, y, por supuesto, sus pingüinos. En este video él habla sobre la importancia de la lectura en la primera infancia.',
      url: '1008-liniers.mp4'
    },
    { id: 1009,
      autor: 'Ministerio de Cultura - Maguaré - MaguaRED',
      coleccion: '¿Qué piensan los expertos?',
      titulo: '¿Cuándo nos hacemos lectores? La educadora Yolanda Reyes responde',
      describe: 'La escritora y educadora Yolanda Reyes habla sobre la lectura en la primera infancia: "El deseo de leer de los bebés está amarrado al desciframiento inicial del mundo".',
      url: '1009-reyes.mp4'
    },
    { id: 1010,
      autor: 'Ministerio de Cultura - Maguaré - MaguaRED',
      coleccion: 'Principios',
      titulo: 'Derechos culturales e identidad',
      describe: 'Maguaré y MaguaRED promueven y garantizan los derechos culturales de los niños –sus diversidades– a través de contenidos infantiles con referentes culturales propios.',
      url: '1010-identidad.mp4'
    },
    { id: 1011,
      autor: 'Ministerio de Cultura - Maguaré - MaguaRED',
      coleccion: 'Principios',
      titulo: 'Diversidad e inclusión',
      describe: 'Maguaré y MaguaRED promueven la diversidad y la inclusión a través de contenidos infantiles que dan cuenta de la riqueza cultural del país y de las maneras de ser de los niños y de los contextos en los que están inmersos.',
      url: '1011-diversidad.mp4'
    },
    { id: 1012,
      autor: 'Ministerio de Cultura - Maguaré - MaguaRED',
      coleccion: 'Principios',
      titulo: 'Acceso, acompañamiento y vínculo afectivo',
      describe: 'Maguaré y MaguaRED aprovechan lo mejor de los recursos digitales para promover los lenguajes expresivos con los niños y así afianzar y potenciar los vínculos afectivos entre ellos y sus cuidadores.',
      url: '1012-acceso.mp4'
    },
    { id: 1013,
      autor: 'Ministerio de Cultura - Maguaré - MaguaRED',
      coleccion: 'Principios',
      titulo: 'Integralidad',
      describe: 'Maguaré y MaguaRED promueven, a través de sus contenidos, la integralidad en relación con las expresiones artísticas en primera infancia.',
      url: '1013-integralidad.mp4'
    },
    { id: 1014,
      autor: 'Ministerio de Cultura - Maguaré - MaguaRED',
      coleccion: 'Principios',
      titulo: 'Participación e interactividad',
      describe: 'Maguaré y MaguaRED promueven la participación e interactividad en la primera infancia a partir de sus contenidos digitales y actividades que potencian las expresiones artísticas y la interacción entre adultos y niños.',
      url: '1014-participacion.mp4'
    },
    { id: 1020,
      autor: 'Ministerio de Cultura - Maguaré - MaguaRED',
      coleccion: 'Cuerpo Sonoro',
      titulo: 'Cuerpo Sonoro: expresiones artísticas y primera infancia',
      describe: 'Cuerpo Sonoro es una propuesta vivencial que transforma las realidades y las percepciones sobre el rol de los agentes formadores en la vida de los niños y niñas de primera infancia.',
      url: '1020-cs1.mp4'
    },
    { id: 1021,
      autor: 'Ministerio de Cultura - Maguaré - MaguaRED',
      coleccion: 'Cuerpo Sonoro',
      titulo: 'El monstruo de colores',
      describe: '¡Las emociones se pueden expresar a través de monstruos de colores! Así lo hicieron los niños de Rionegro, Antioquia, quienes exploraron sus entornos y representaron sus sentimientos a través del cuerpo.',
      url: '1021-cs2.mp4'
    },
    { id: 1022,
      autor: 'Ministerio de Cultura - Maguaré - MaguaRED',
      coleccion: 'Cuerpo Sonoro',
      titulo: 'Laboratorio de sonido',
      describe: 'Adriana María Duque participó en el diplomado Cuerpo Sonoro y gracias a su experiencia creó el Laboratorio de Sonido en la Sala Arrullos del Municipio de Rionegro, en Antioquia.',
      url: '1022-cs3.mp4'
    },
    { id: 1023,
      autor: 'Ministerio de Cultura - Maguaré - MaguaRED',
      coleccion: 'Cuerpo Sonoro',
      titulo: 'Untar para descubrir el arte',
      describe: 'La expresión de los niños está representada en la espontaneidad de un saludo, un dibujo con plastilina y escarcha o en un cuerpo lleno de pintura de colores.',
      url: '1023-cs4.mp4'
    },
    { id: 1024,
      autor: 'Ministerio de Cultura - Maguaré - MaguaRED',
      coleccion: 'Cuerpo Sonoro',
      titulo: 'Entre plumas y cantos',
      describe: 'El cuerpo de los niños canta como los pájaros. Así lo demuestra la pedagoga caleña Marcela Rojas, quien hizo parte del Diplomado de Cuerpo Sonoro.',
      url: '1024-cs5.mp4'
    },
    { id: 1025,
      autor: 'Ministerio de Cultura - Maguaré - MaguaRED',
      coleccion: 'Cuerpo Sonoro',
      titulo: 'Al ritmo de los colores',
      describe: 'El mundo es un experimento para los niños: allí reconocen, cantan, leen, comen gelatina y ¡mueven el cuerpo! Esta experiencia de Cuerpo Sonoro permite sentir el entorno con todas sus texturas.',
      url: '1025-cs6.mp4'
    },
    { id: 1026,
      autor: 'Ministerio de Cultura - Maguaré - MaguaRED',
      coleccion: 'Cuerpo Sonoro',
      titulo: 'Cantarle y leerle al Pacífico',
      describe: 'Lo primero que hacen los niños es bailar bunde del Pacífico; después cada uno crea un instrumento musical y ¡se prendió el juego! Esta experiencia de Cuerpo Sonoro está a cargo de Nancy Arias.',
      url: '1026-cs7.mp4'
    },
    { id: 1027,
      autor: 'Ministerio de Cultura - Maguaré - MaguaRED',
      coleccion: 'Cuerpo Sonoro',
      titulo: 'Los movimientos de los niños se escuchan con la mirada',
      describe: 'En Cuerpo Sonoro los movimientos hablan de la vida misma y sus transformaciones. Los movimientos de los niños y niñas de primera infancia son mensajes elocuentes que se pueden escuchar con la mirada.',
      url: '1027-cs8.mp4'
    },
    { id: 1028,
      autor: 'Ministerio de Cultura - Maguaré - MaguaRED',
      coleccion: 'Cuerpo Sonoro',
      titulo: 'Ser un cuerpo sonoro',
      describe: 'Todos somos cuerpo sonoro y todo el tiempo vivimos con nuestras expresiones artísticas. La propuesta es que ustedes descubran sus propias sonoridades y huellas, y que se diviertan con ellas.',
      url: '1028-cs9.mp4'
    },
    { id: 1029,
      autor: 'Ministerio de Cultura - Maguaré - MaguaRED',
      coleccion: 'Cuerpo Sonoro',
      titulo: 'Explorar la sensibilidad',
      describe: 'Cuerpo Sonoro los invita a estimular y recuperar la capacidad de asombro con las cosas bellas y sencillas de la vida.',
      url: '1029-cs10.mp4'
    },
    { id: 1030,
      autor: 'Ministerio de Cultura - Maguaré - MaguaRED',
      coleccion: 'Cuerpo Sonoro',
      titulo: 'Los sentidos permiten viajar a mundos posibles',
      describe: 'En Cuerpo Sonoro los sentidos permiten viajar a mundos posibles y multidimensionales: texturas, olores, sabores, sonidos y movimientos hacen parte de un proceso formativo que, una vez inicia, permanece.',
      url: '1030-cs11.mp4'
    },
    { id: 1031,
      autor: 'Ministerio de Cultura - Maguaré - MaguaRED',
      coleccion: 'Cuerpo Sonoro',
      titulo: 'Ser conscientes de cómo piensan, participan y se expresan los niños',
      describe: 'Ser conscientes de las maneras como los niños piensan, conocen, actúan, participan y se expresan es una forma efectiva de acercarse a ellos de maneras distintas.',
      url: '1031-cs12.mp4'
    },
    { id: 1300,
      autor: 'Ministerio de Cultura - Maguaré - MaguaRED',
      coleccion: '¿Qué recomiendan los expertos?',
      titulo: '¿Qué recomienda Irene Vasco?',
      describe: 'La autora y promotora de lectura Irene Vasco recomienda mantener "la palabra viva" para transmitirla a los niños.',
      url: '1300-irenevasco.mp4'
    },
    { id: 1301,
      autor: 'Ministerio de Cultura - Maguaré - MaguaRED',
      coleccion: '¿Qué recomiendan los expertos?',
      titulo: '¿Qué recomienda León David Cobo?',
      describe: 'El artista sonoro León David Cobo recomienda pensar y sentir "la escucha" para que los niños vivan y entiendan otros universos desde la diversidad.',
      url: '1301-leondavidcobo.mp4'
    },
    { id: 1302,
      autor: 'Ministerio de Cultura - Maguaré - MaguaRED',
      coleccion: '¿Qué recomiendan los expertos?',
      titulo: '¿Qué recomienda Jorge Raedo?',
      describe: 'El artista y profesor de arte Jorge Raedo comparte algunas claves para crear espacios adecuados para la primera infancia.',
      url: '1302-jorgeraedo.mp4'
    },
    { id: 1303,
      autor: 'Ministerio de Cultura - Maguaré - MaguaRED',
      coleccion: '¿Qué recomiendan los expertos?',
      titulo: '¿Qué recomienda Antonia Agreda?',
      describe: 'La profesora intercultural Antonia Agreda habla de la importancia de los adultos mayores en el desarrollo integral de los niños de primera infancia.',
      url: '1303-antoniaagreda.mp4'
    },
    { id: 1304,
      autor: 'Ministerio de Cultura - Maguaré - MaguaRED',
      coleccion: '¿Qué recomiendan los expertos?',
      titulo: '¿Qué recomienda Carmenza Botero?',
      describe: 'La pedagoga musical Carmenza Botero insta a los adultos a que dejen que los niños sean curiosos con el sonido en todos sus niveles.',
      url: '1304-carmenzabotero.mp4'
    },
    { id: 1305,
      autor: 'Ministerio de Cultura - Maguaré - MaguaRED',
      coleccion: '¿Qué recomiendan los expertos?',
      titulo: '¿Qué recomienda Fabiola Uribe?',
      describe: 'La arquitecta Fabiola Uribe insta a los adultos a que piensen la ciudad como un juguete gigante y para que la transmitan desde la arquitectura a los niños como una posibilidad para crear, explorar y participar.',
      url: '1305-fabiolauribe.mp4'
    },
    { id: 1306,
      autor: 'Ministerio de Cultura - Maguaré - MaguaRED',
      coleccion: '¿Qué recomiendan los expertos?',
      titulo: '¿Qué recomienda Juan Carlos Velásquez?',
      describe: 'El artista Juan Carlos Velásquez recomienda volver a ser niños para posibilitar mejores espacios para los niños.',
      url: '1306-juancarlosvelasquez.mp4'
    },
    { id: 1307,
      autor: 'Ministerio de Cultura - Maguaré - MaguaRED',
      coleccion: '¿Qué recomiendan los expertos?',
      titulo: '¿Qué recomienda Diana Rubiano?',
      describe: 'La pedagoga Diana Rubiano recomienda creer en los niños y en sus capacidades para crear, reconocer y participar.',
      url: '1307-dianarubiano.mp4'
    },
    { id: 1308,
      autor: 'Ministerio de Cultura - Maguaré - MaguaRED',
      coleccion: '¿Qué recomiendan los expertos?',
      titulo: '¿Qué recomienda Daniel Feldman?',
      describe: 'El arquitecto Daniel Feldman recomienda pensar los espacios adecuados para los niños desde la comunidad y no solo desde los educadores.',
      url: '1308-danielfeldman.mp4'
    },
    { id: 1309,
      autor: 'Ministerio de Cultura - Maguaré - MaguaRED',
      coleccion: '¿Qué recomiendan los expertos?',
      titulo: '¿Qué recomienda Maritza Sánchez?',
      describe: 'La creadora de contenidos infantiles audiovisuales, Maritza Sánchez, recomienda el acompañamiento de los adultos mientras los niños ven contenidos infantiles.',
      url: '1309-maritzasanchez.mp4'
    },
    { id: 1310,
      autor: 'Ministerio de Cultura - Maguaré - MaguaRED',
      coleccion: '¿Qué recomiendan los expertos?',
      titulo: '¿Qué recomienda Carlos Benavides?',
      describe: 'El arquitecto Carlos Benavides insta a pensar en la belleza de los espacios para los niños como un derecho vital en sus desarrollos.',
      url: '1310-carlosbenavides.mp4'
    },
    { id: 1311,
      autor: 'Ministerio de Cultura - Maguaré - MaguaRED',
      coleccion: '¿Qué recomiendan los expertos?',
      titulo: '¿Qué recomienda Amalia Satizabal?',
      describe: 'La artista Amalia Satizabal recomienda que los niños tengan acceso a los libros en todos los lugares, en todas sus formas y en todas las situaciones.',
      url: '1311-amaliasatizabal.mp4'
    }


  ],
  /*Serie 1100*/
  tutoriales: [
    { id: 1100,
      autor: 'Ministerio de Cultura - Artista: Carlos Velásquez - Fotógrafo: Sebastián Ocampo.',
      titulo: '¿Cómo hacer un tamborín de cartón?',
      describe: 'En este paso a paso pueden crear un tamborín de cartón y compartir un rato significativo con los niños.',
      url: 'tutoriales/1100.pdf',
      descarga: 'tutorial-tamborin-carton',
      video: '1100.mp4'
    },
    { id: 1101,
      autor: 'Ministerio de Cultura - Artista: Carlos Velásquez - Fotógrafo: Sebastián Ocampo.',
      titulo: '¿Cómo hacer un títere de sombras?',
      describe: 'En este tutorial los niños, junto a los adultos, pueden crear un títere de sombras para jugar, crear y potenciar sus habilidades expresivas.',
      url: 'tutoriales/1101.pdf',
      descarga: 'tutorial-titere-sombras',
      video: '1101.mp4'
    },
    { id: 1102,
      autor: 'Ministerio de Cultura - Artista: Carlos Velásquez - Fotógrafo: Sebastián Ocampo.',
      titulo: '¿Cómo hacer una marioneta de hilos?',
      describe: 'Para crear este títere hay que mover los brazos, juntar piezas y… ¡Jugar! Los niños pueden potenciar su expresión plástica y escénica.',
      url: 'tutoriales/1102.pdf',
      descarga: 'tutorial-marioneta',
      video: '1102.mp4'
    },
    { id: 1103,
      autor: 'Ministerio de Cultura - Artista: Carlos Velásquez - Fotógrafo: Sebastián Ocampo.',
      titulo: '¿Cómo hacer un portalápices personalizado?',
      describe: '¿Qué tal si los niños guardan sus colores en un armadillo DJ? Aquí los niños pueden hacer un portalápices bastante musical y lleno de color.',
      url: 'tutoriales/1103.pdf',
      descarga: 'tutorial-portalapices',
      video: '1103.mp4'
    },
    { id: 1104,
      autor: 'Ministerio de Cultura - Artista: Carlos Velásquez - Fotógrafo: Sebastián Ocampo.',
      titulo: '¿Cómo hacer un teatrino?',
      describe: '¡Que los niños muevan los dedos, la imaginación y que los títeres creen aventuras! En este tutorial pueden construir un teatrino de cartón.',
      url: 'tutoriales/1104.pdf',
      descarga: 'tutorial-teatrino',
      video: '1104.mp4'
    },
    { id: 1105,
      autor: 'Ministerio de Cultura - Artista: Carlos Velásquez - Fotógrafo: Sebastián Ocampo.',
      titulo: '¿Cómo hacer un juego de cubos?',
      describe: 'Por medio de este tutorial los niños pueden manipular la materia y entender las estructuras y cómo éstas se relacionan con sus entornos.',
      url: 'tutoriales/1105.pdf',
      descarga: 'tutorial-juego-cubos',
      video: '1105.mp4'
    },
    { id: 1106,
      autor: 'Ministerio de Cultura - Artista: Carlos Velásquez - Fotógrafo: Sebastián Ocampo.',
      titulo: '¿Cómo crear un rompecabezas personalizado?',
      describe: 'Escojan cualquier imagen y conviértanla en un rompecabezas. A través de este tutorial ustedes pueden compartir y jugar con los niños.',
      url: 'tutoriales/1106.pdf',
      descarga: 'tutorial-rompecabezas',
      video: '1106.mp4'
    },
    { id: 1107,
      autor: 'Ministerio de Cultura - Artista: Carlos Velásquez - Fotógrafo: Sebastián Ocampo.',
      titulo: '¿Cómo hacer un tablero de fieltro?',
      describe: 'Crear personajes, paisajes, objetos o contar historias son algunas de las actividades que se pueden hacer con este tablero interactivo.',
      url: 'tutoriales/1107.pdf',
      descarga: 'tutorial-tablero-fieltro',
      video: '1107.mp4'
    },
    { id: 1108,
      autor: 'Ministerio de Cultura - Artista: Carlos Velásquez - Fotógrafo: Sebastián Ocampo.',
      titulo: '¿Cómo convertir una cuchara en una actriz?',
      describe: 'A través de un paso a paso sencillo ustedes, junto a los niños, pueden crear un personaje animado a partir de una cuchara de palo.',
      url: 'tutoriales/1108.pdf',
      descarga: 'tutorial-cuchara-actriz',
      video: '1108.mp4'
    },
    { id: 1109,
      autor: 'Ministerio de Cultura - Artista: Carlos Velásquez - Fotógrafo: Sebastián Ocampo.',
      titulo: '¿Cómo convertir una media en una guacamaya?',
      describe: 'En este sencillo tutorial les mostramos cómo construir junto a los niños a Maya la Guacamaya, uno de los personajes de Maguaré en La Ceiba.',
      url: 'tutoriales/1109.pdf',
      descarga: 'tutorial-media-guacamaya',
      video: '1109.mp4'
    }
  ],
  /*serie 1200*/
  otrosdocumentos: [
    {
      id: 1200,
      titulo: 'Cuerpo Sonoro: expresiones artísticas y primera infancia',
      autor: 'Ministerio de Cultura',
      coleccion: 'Cuerpo Sonoro',
      describe: 'Cuerpo Sonoro: expresiones artísticas y primera infancia recoge las orientaciones pedagógicas que fundamentan Cuerpo Sonoro.',
      url: 'librosmaguare/1200.pdf',
      descarga: 'Cuerpo-Sonoro-expresiones-primera-infancia'
    },{
      id: 1201,
      titulo: 'Cuentos Derechos: historias para hablar con los niños sobre sus derechos',
      autor: 'Ministerio de Cultura',
      coleccion: 'Cuentos Derechos',
      describe: 'Cuentos Derechos es un libro digital que reúne las voces y experiencias de niños y adultos sobre los derechos de los niños.',
      url: 'librosmaguare/v2-cuentos-derechos.pdf',
      descarga: 'Cuentos-Derechos'
    },{
      id: 1202,
      titulo: 'Experiencia gráfica de Cuerpo Sonoro: arquitecturas sonoras',
      autor: 'Ministerio de Cultura',
      coleccion: 'Cuerpo Sonoro',
      describe: 'Esta experiencia de Cuerpo Sonoro permite que los adultos vivan la integralidad a través del cuerpo y las expresiones artísticas.',
      url: 'librosmaguare/1202.pdf',
      descarga: 'Cuerpo-Sonoro-arquitecturas-sonoras'
    },{
      id: 1203,
      titulo: 'Experiencia gráfica de Cuerpo Sonoro: materia y materiales',
      autor: 'Ministerio de Cultura',
      coleccion: 'Cuerpo Sonoro',
      describe: 'Esta experiencia de Cuerpo Sonoro promueve la creatividad para que los adultos entiendan y vivan la exploración en primera infancia.',
      url: 'librosmaguare/1203.pdf',
      descarga: 'Cuerpo-Sonoro-materia-materiales'
    },{
      id: 1204,
      titulo: 'Experiencia gráfica de Cuerpo Sonoro: el juego',
      autor: 'Ministerio de Cultura',
      coleccion: 'Cuerpo Sonoro',
      describe: 'A través de esta experiencia de Cuerpo Sonoro los adultos pueden entender por qué el juego es fundamental para el desarrollo de los niños.',
      url: 'librosmaguare/1204.pdf',
      descarga: 'Cuerpo-Sonoro-eljuego'
    },{
      id: 1205,
      titulo: 'Experiencia gráfica de Cuerpo Sonoro: animación de objetos',
      autor: 'Ministerio de Cultura',
      coleccion: 'Cuerpo Sonoro',
      describe: 'Cuerpo Sonoro propone en esta experiencia un ejercicio para que los adultos exploren el juego simbólico desde la vivencia.',
      url: 'librosmaguare/1205.pdf',
      descarga: 'Cuerpo-Sonoro-animacion-objetos'
    },{
      id: 1206,
      titulo: 'Experiencia gráfica de Cuerpo Sonoro: la banda sonora',
      autor: 'Ministerio de Cultura',
      coleccion: 'Cuerpo Sonoro',
      describe: 'En esta experiencia de Cuerpo Sonoro los adultos pueden reconocer las distintas formas de escucha y, así, vivirlas a través de los niños.',
      url: 'librosmaguare/1206.pdf',
      descarga: 'Cuerpo-Sonoro-banda-sonora'
    },{
      id: 1207,
      titulo: 'Experiencia gráfica de Cuerpo Sonoro: el espacio en la primera infancia',
      autor: 'Ministerio de Cultura',
      coleccion: 'Cuerpo Sonoro',
      describe: 'Cuerpo Sonoro creó esta experiencia para que los adultos reinventen el espacio que comparten con los niños.',
      url: 'librosmaguare/1207.pdf',
      descarga: 'Cuerpo-Sonoro-elespacio'
    },
    /*SERIE 2000 Derechos y Orientaciones Culturales para la Primera Infancia*/
    {
      id: 2001,
      autor: 'Ministerio de Cultura - Instituto Colombiano de Bienestar Familiar',
      titulo: 'Lectura, libro y bibliotecas',
      coleccion: 'Derechos y Orientaciones Culturales para la Primera Infancia',
      publico: 'maguared',
      describe: 'Este libro recoge orientaciones en torno a la relación de los niños con las bibliotecas y el sentido de la lectura y la literatura en sus desarrollos integrales.',
      url: 'librosmaguare/2001-lectura-libro-bibliotecas.pdf',
      descarga: 'derechos-lectura-libro-bibliotecas'
    },
    {
      id: 2002,
      autor: 'Ministerio de Cultura - Instituto Colombiano de Bienestar Familiar',
      titulo: 'Lenguajes y ambientes de lectura',
      coleccion: 'Derechos y Orientaciones Culturales para la Primera Infancia',
      publico: 'maguared',
      describe: 'En este libro se reflexiona sobre las condiciones de los ambientes para potenciar el gozo de la lectura, el juego y la exploración.',
      url: 'librosmaguare/2002-lenguajes-ambientes-lectura.pdf',
      descarga: 'derechos-lenguajes-ambientres-lectura'
    },
    {
      id: 2003,
      autor: 'Ministerio de Cultura - Instituto Colombiano de Bienestar Familiar',
      titulo: 'Música, poesía y lenguajes audiovisuales',
      coleccion: 'Derechos y Orientaciones Culturales para la Primera Infancia',
      publico: 'maguared',
      describe: 'En este libro se recogen reflexiones en torno a la música, la poesía y los lenguajes audiovisuales como parte esencial del desarrollo integral de los niños.',
      url: 'librosmaguare/2003-musica-poesia-lenguajesaudiovisuales.pdf',
      descarga: 'derechos-musica-poesia-audiovisual'
    },
    {
      id: 2004,
      autor: 'Ministerio de Cultura - Instituto Colombiano de Bienestar Familiar',
      titulo: 'Lenguas nativas y primera infancia',
      coleccion: 'Derechos y Orientaciones Culturales para la Primera Infancia',
      publico: 'maguared',
      describe: 'El libro acerca al lector a la comprensión de la diversidad cultural desde las lenguas maternas de Colombia y su relación con la primera infancia.',
      url: 'librosmaguare/2004-lenguas-nativas-primera-infancia.pdf',
      descarga: 'derechos-lenguas-nativas-primera-infancia'
    },
    {
      id: 2005,
      autor: 'Ministerio de Cultura - Museo Nacional de Colombia',
      titulo: 'Historia y primera infancia',
      coleccion: 'Derechos y Orientaciones Culturales para la Primera Infancia',
      publico: 'maguared',
      describe: 'Varios autores reflexionan sobre el concepto histórico de niñez, sobre el ejercicio de ciudadanía de los niños, y sobre los museos y su papel educativo en los niños.',
      url: 'librosmaguare/2005-historia-primera-infancia.pdf',
      descarga: 'derechos-historia-primera-infancia'
    },
  ]
}
const getters = {
    librosCuerpoSonoro: state => {
      return state.otrosdocumentos.filter(libro => libro.coleccion == 'Cuerpo Sonoro')
    },
    librosCuentosDerechos: state => {
      return state.otrosdocumentos.filter(libro => libro.coleccion == 'Cuentos Derechos')
    },
    librosDerechosOrientaciones: state => {
      return state.otrosdocumentos.filter(libro => libro.coleccion == 'Derechos y Orientaciones Culturales para la Primera Infancia')
    },
    /*GETTERS VIDEOS MAGUARED*/
    videosQuePiensan: state => {
      return state.videos.filter(video => video.coleccion == '¿Qué piensan los expertos?')
    },
    videosPrincipios: state => {
      return state.videos.filter(video => video.coleccion == 'Principios')
    },
    videosCuerposonoro: state => {
      return state.videos.filter(video => video.coleccion == 'Cuerpo Sonoro')
    },
    videosQueRecomiendan: state => {
      return state.videos.filter(video => video.coleccion == '¿Qué recomiendan los expertos?')
    },

}

//

export default {
  namespaced: true,
  state,
  getters
}
