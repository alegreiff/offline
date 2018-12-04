const state = {
  /*Videos Serie 1000*/
  videos: [
    { id: 1000,
      autor: 'AUTOR',
      coleccion: 'COLECCION',
      titulo: 'Fabiola Uribe y la arquitectura en la infancia.',
      describe: 'Diana Rubiano es la Coordinadora Pedagógica de aeioTU, una fundación que trabaja en el desarrollo integral de los niños de 0 a 5 años. En este video explica cómo ha cambiado el papel de la escuela en la primera infancia.',
      url: '100-ribe.mp4'
    },
    { id: 1001,
      autor: 'AUTOR',
      coleccion: 'COLECCION',
      titulo: 'Antonia Agreda y el desarrollo integral de los niños indígenas.',
      describe: 'Antonia Agreda es una indígena Inga que lleva décadas trabajando por los derechos de los niños indígenas del país. Ella es una de las impulsoras de la modalidad propia intercultural en primera infancia.',
      url: '1001-agreda.mp4'
    },
    { id: 1002,
      autor: 'AUTOR',
      coleccion: 'COLECCION',
      titulo: 'Carmenza Botero y el sonido en los niños.',
      describe: 'Carmenza Botero es una pedagoga que trabaja con el sonido y la música. Para ella lo más serio que hace un niño en primera infancia es escuchar.',
      url: '1002-botero.mp4'
    },
    { id: 1003,
      autor: 'AUTOR',
      coleccion: 'COLECCION',
      titulo: 'Diana Rubiano y la educación inicial en primera infancia.',
      describe: 'Diana Rubiano es la Coordinadora Pedagógica de aeioTU, una fundación que trabaja en el desarrollo integral de los niños de 0 a 5 años. En este video explica cómo ha cambiado el papel de la escuela en la primera infancia.',
      url: '1003-rubiano.mp4'
    },
    { id: 1004,
      autor: 'AUTOR',
      coleccion: 'COLECCION',
      titulo: 'Juan Carlos Velásquez y los espacios adecuados para los niños.',
      describe: 'Juan Carlos Velásquez es un artista que vincula el arte, el diseño y la pedagogía para crear instalaciones, mobiliarios y ambientes que propician las experiencias significativas en los niños.',
      url: '1004-velasquez.mp4'
    },
    { id: 1005,
      autor: 'AUTOR',
      coleccion: 'COLECCION',
      titulo: 'Irene Vasco y la lectura como un juego.',
      describe: 'Los juegos y la animación son parte esencial del ejercicio lector en la primera infancia. Irene Vasco, promotora de lectura y autora infantil, explica por qué.',
      url: '1005-vasco.mp4'
    },
    { id: 1006,
      autor: 'AUTOR',
      coleccion: 'COLECCION',
      titulo: 'Oscar Brenifier, el filósofo de los niños.',
      describe: 'Oscar Brenifier escribe libros que no son libros porque ninguno tiene respuestas, solo preguntas. Para este argelino la lectura con los niños debe ser un diálogo: más inquietudes, menos conclusiones.',
      url: '1006-breniffier.mp4'
    },
    { id: 1007,
      autor: 'AUTOR',
      coleccion: 'COLECCION',
      titulo: 'Luis Pescetti y la vitalidad en los niños.',
      describe: 'Luis Pescetti es músico y escritor de literatura infantil. En este video habla sobre la lectura y el humor en la infancia: ¡una combinación súper poderosa!',
      url: '1007-pescetti.mp4'
    },
    { id: 1008,
      autor: 'AUTOR',
      coleccion: 'COLECCION',
      titulo: 'Liniers para niños.',
      describe: 'Liniers es dibujante y creador de personajes como Olga, Martincito, Enriqueta, Fellini, y, por supuesto, sus pingüinos. En este video él habla sobre la importancia de la lectura en la primera infancia.',
      url: '1008-liniers.mp4'
    },
    { id: 1009,
      autor: 'AUTOR',
      coleccion: 'COLECCION',
      titulo: '¿Cuándo nos hacemos lectores? La educadora Yolanda Reyes responde.',
      describe: 'La escritora y educadora Yolanda Reyes habla sobre la lectura en la primera infancia: "El deseo de leer de los bebés está amarrado al desciframiento inicial del mundo".',
      url: '1009-reyes.mp4'
    }

  ],
  /*Serie 1100*/
  tutoriales: [
    { id: 1100,
      autor: 'Ministerio de Cultura - Artista: Carlos Velásquez - Fotógrafo: Sebastián Ocampo.',
      titulo: '¿Cómo hacer un tamborín de cartón?',
      describe: 'En este paso a paso pueden crear un tamborín de cartón y compartir un rato significativo con los niños.',
      url: 'tutoriales/1100.pdf',
      descarga: 'tutorial-tamborin-carton'
    },
    { id: 1101,
      autor: 'Ministerio de Cultura - Artista: Carlos Velásquez - Fotógrafo: Sebastián Ocampo.',
      titulo: '¿Cómo hacer un títere de sombras?',
      describe: 'En este tutorial los niños, junto a los adultos, pueden crear un títere de sombras para jugar crear y potenciar sus habilidades expresivas.',
      url: 'tutoriales/1101.pdf',
      descarga: 'tutorial-titere-sombras'
    },
    { id: 1102,
      autor: 'Ministerio de Cultura - Artista: Carlos Velásquez - Fotógrafo: Sebastián Ocampo.',
      titulo: '¿Cómo hacer una marioneta de hilos?',
      describe: 'Para crear este títere hay que mover los brazos, juntar piezas y… ¡Jugar! Los niños pueden potenciar su expresión plástica y escénica.',
      url: 'tutoriales/1102.pdf',
      descarga: 'tutorial-marioneta'
    },
    { id: 1103,
      autor: 'Ministerio de Cultura - Artista: Carlos Velásquez - Fotógrafo: Sebastián Ocampo.',
      titulo: '¿Cómo hacer un portalápices personalizado?',
      describe: '¿Qué tal si los niños guardan sus colores en un armadillo DJ? Aquí los niños pueden hacer un portalápices bastante musical y lleno de color.',
      url: 'tutoriales/1103.pdf',
      descarga: 'tutorial-portalapices'
    },
    { id: 1104,
      autor: 'Ministerio de Cultura - Artista: Carlos Velásquez - Fotógrafo: Sebastián Ocampo.',
      titulo: '¿Cómo hacer un teatrino?',
      describe: '¡Que los niños muevan los dedos, la imaginación y que los títeres creen aventuras! En este tutorial pueden construir un teatrino de cartón.',
      url: 'tutoriales/1104.pdf',
      descarga: 'tutorial-teatrino'
    },
    { id: 1105,
      autor: 'Ministerio de Cultura - Artista: Carlos Velásquez - Fotógrafo: Sebastián Ocampo.',
      titulo: '¿Cómo hacer un juego de cubos?',
      describe: 'Por medio de este tutorial los niños pueden manipular la materia y entender las estructuras y cómo éstas se relacionan con sus entornos.',
      url: 'tutoriales/1105.pdf',
      descarga: 'tutorial-juego-cubos'
    },
    { id: 1106,
      autor: 'Ministerio de Cultura - Artista: Carlos Velásquez - Fotógrafo: Sebastián Ocampo.',
      titulo: '¿Cómo crear un rompecabezas personalizado?',
      describe: 'Escojan cualquier imagen y conviértanla en un rompecabezas. A través de este tutorial ustedes pueden compartir y jugar con los niños.',
      url: 'tutoriales/1106.pdf',
      descarga: 'tutorial-rompecabezas'
    },
    { id: 1107,
      autor: 'Ministerio de Cultura - Artista: Carlos Velásquez - Fotógrafo: Sebastián Ocampo.',
      titulo: '¿Cómo hacer un tablero de fieltro?',
      describe: 'Crear personajes, paisajes, objetos o contar historias son algunas de las actividades que se pueden hacer con este tablero interactivo.',
      url: 'tutoriales/1107.pdf',
      descarga: 'tutorial-tablero-fieltro'
    },
    { id: 1108,
      autor: 'Ministerio de Cultura - Artista: Carlos Velásquez - Fotógrafo: Sebastián Ocampo.',
      titulo: '¿Cómo convertir una cuchara en una actriz?',
      describe: 'A través de un paso a paso sencillo ustedes, junto a los niños, pueden crear un personaje animado a partir de una cuchara de palo.',
      url: 'tutoriales/1108.pdf',
      descarga: 'tutorial-cuchara-actriz'
    },
    { id: 1109,
      autor: 'Ministerio de Cultura - Artista: Carlos Velásquez - Fotógrafo: Sebastián Ocampo.',
      titulo: '¿Cómo convertir una media en una guacamaya?',
      describe: 'En este sencillo tutorial les mostramos cómo construir junto a los niños a Maya la Guacamaya, uno de los personajes de Maguaré en La Ceiba.',
      url: 'tutoriales/1109.pdf',
      descarga: 'tutorial-media-guacamaya'
    }
  ],
  /*serie 1200*/
  otrosdocumentos: [
    {
      id: 1200,
      titulo: 'Cuerpo Sonoro: expresiones artísticas y primera infancia.',
      autor: 'AUTOR',
      coleccion: 'coleccion',
      describe: 'DESCRIBE',
      url: 'URL'
    },{
      id: 1201,
      titulo: 'Cuentos Derechos: historias para hablar con los niños sobre sus derechos.',
      autor: 'AUTOR',
      coleccion: 'coleccion',
      describe: 'DESCRIBE',
      url: 'URL'
    },{
      id: 1202,
      titulo: 'Experiencia gráfica de Cuerpo Sonoro: arquitecturas sonoras.',
      autor: 'AUTOR',
      coleccion: 'coleccion',
      describe: 'DESCRIBE',
      url: 'URL'
    },{
      id: 1203,
      titulo: 'Experiencia gráfica de Cuerpo Sonoro: materia y materiales.',
      autor: 'AUTOR',
      coleccion: 'coleccion',
      describe: 'DESCRIBE',
      url: 'URL'
    },{
      id: 1204,
      titulo: 'Experiencia gráfica de Cuerpo Sonoro: el juego.',
      autor: 'AUTOR',
      coleccion: 'coleccion',
      describe: 'DESCRIBE',
      url: 'URL'
    },{
      id: 1205,
      titulo: 'Experiencia gráfica de Cuerpo Sonoro: animación de objetos.',
      autor: 'AUTOR',
      coleccion: 'coleccion',
      describe: 'DESCRIBE',
      url: 'URL'
    },{
      id: 1206,
      titulo: 'Experiencia gráfica de Cuerpo Sonoro: la banda sonora.',
      autor: 'AUTOR',
      coleccion: 'coleccion',
      describe: 'DESCRIBE',
      url: 'URL'
    },{
      id: 1207,
      titulo: 'Experiencia gráfica de Cuerpo Sonoro: el espacio en la primera infancia. ',
      autor: 'AUTOR',
      coleccion: 'coleccion',
      describe: 'DESCRIBE',
      url: 'URL'
    },
  ]
/*








*/
}
export default {
  namespaced: true,
  state
}
