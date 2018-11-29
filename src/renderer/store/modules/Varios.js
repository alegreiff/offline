const state = {
  descargablesmaguare: [
    { id: 9100,
      autor: 'Ministerio de Cultura',
      titulo: 'Coloreable 001',
      describe: 'Describe coloreable 001',
      url: 'coloreables/coloreable-1.pdf'
    },
    { id: 9101,
      autor: 'Ministerio de Cultura',
      titulo: 'Coloreable 002',
      describe: 'Describe coloreable 002',
      url: 'coloreables/coloreable-2.pdf'
    },
  ],
    librosmaguare: [
      {
        id: 618,
        autor: 'Maritza Sanchez, Carlos Millán, Lizardo Carvajal, Oscar García, Amalia Satizábal',
        titulo: 'El frenético baile de Chip',
        describe: 'Chip la perezosa se levantó muy dispuesta para dar su clase de aeróbicos y para hacer deporte se mantiene muy bien hidratada. Pero Chip ha tomado más agua de la cuenta… ¡Un baño, por favor!',
        url: 'librosmaguare/maguare-frenetico-baile-chip.pdf'
      },
      {
        id: 619,
        autor: 'Maritza Sanchez, Carlos Millán, Lizardo Carvajal, Oscar García, Amalia Satizábal',
        titulo: 'El libro perdido de Gigi',
        describe: 'Saimiri es un gran lector y quiere terminar de leer una historia, pero no aparece el segundo libro que cuenta el final. Con la ayuda de Gigi la tortuga emprenden la aventura de encontrar el libro perdido.',
        url: 'librosmaguare/maguare-libro-perdido-gigi.pdf'
      },
      {
        id: 620,
        autor: 'Maritza Sanchez, Carlos Millán, Lizardo Carvajal, Oscar García, Amalia Satizábal',
        titulo: 'El viaje de la familia Cuy',
        describe: '¿Cómo hacen Linio y Tulita los dos papás cuyes para salir de paseo con sus hijos?. No debe ser nada fácil… porque son ¡27 cuyecitos!',
        url: 'librosmaguare/maguare-viaje-familia-cuy.pdf'
      },
      {
        id: 621,
        autor: 'Maritza Sanchez, Carlos Millán, Lizardo Carvajal, Oscar García, Amalia Satizábal',
        titulo: 'El cumpleaños de Rosalinda',
        describe: 'Rosalinda la camaleona cambia de color según como se sienta y hoy está azul porque parece que todos olvidaron su cumpleaños. En todo el día no ha recibido ni un abrazo ni un te quiero. ¿Cómo hacer para que se ponga feliz, color arcoiris?',
        url: 'librosmaguare/maguare-rosalinda.pdf'
      },
      {
        id: 622,
        autor: 'Maritza Sanchez, Carlos Millán, Lizardo Carvajal, Oscar García, Amalia Satizábal',
        titulo: 'La memoria del abuelo',
        describe: 'El abuelo Emiliano lo olvida todo, todo, todo… bueno no se le olvidan las cosas que averguenzan a Rani y a Gildardo. ¡Abuelo Emiliano ejercita tu memoria con un sudoku!',
        url: 'librosmaguare/maguare-memoria-abuelo.pdf'
      },{
        id: 623,
        autor: 'Maritza Sanchez, Carlos Millán, Lizardo Carvajal, Oscar García, Amalia Satizábal',
        titulo: 'Una sopa para la fiesta',
        describe: '¡Las trillizas Adriana, Juliana y Eliana son terribles!. No se quedan quietas nunca y sus travesuras desesperan a más de uno en la Ceiba. Sin embargo parecen tener un don especial para transformar cualquier situación por crítica que parezca. ¿Qué hicieron ahora estas Terrillizas?.',
        url: 'librosmaguare/maguare-sopa-fiesta.pdf'
      }
    ],
    sugerencias: [
      {
        id: 9001,
        titulo: 'Bosqueconcierto',
        describe: 'descripción breve del contenido. En una frase',
        url: 'sugerencias/sugerencias-de-uso-9001-bosqueconcierto.pdf'
      },
      {
        id: 9002,
        titulo: 'Tu Rockcito',
        describe: 'descripción breve del contenido. En una frase',
        url: 'sugerencias/sugerencias-de-uso-9002-turockcito.pdf'
      },{
        id: 9003,
        titulo: 'Jacana Jacana',
        describe: 'descripción breve del contenido. En una frase',
        url: 'sugerencias/sugerencias-de-uso-9003-jacana.pdf'
      },{
        id: 9004,
        titulo: 'Cantos de agua',
        describe: 'descripción breve del contenido. En una frase',
        url: 'sugerencias/sugerencias-de-uso-9004-cantosdeagua.pdf'
      },{
        id: 9005,
        titulo: 'Tamborecos',
        describe: 'descripción breve del contenido. En una frase',
        url: 'sugerencias/sugerencias-de-uso-9005-tamborecos.pdf'
      },{
        id: 9006,
        titulo: 'Pipo',
        describe: 'descripción breve del contenido. En una frase',
        url: 'sugerencias/sugerencias-de-uso-9006-pipo.pdf'
      },{
        id: 9007,
        titulo: 'Ana Pirata',
        describe: 'descripción breve del contenido. En una frase',
        url: 'sugerencias/sugerencias-de-uso-9007-anapirata.pdf'
      },{
        id: 9008,
        titulo: 'Camusi Camusi',
        describe: 'descripción breve del contenido. En una frase',
        url: 'sugerencias/sugerencias-de-uso-9008-camusi.pdf'
      },{
        id: 9009,
        titulo: 'Adivinanzas',
        describe: 'descripción breve del contenido. En una frase',
        url: 'sugerencias/sugerencias-de-uso-9009-adivinanzas.pdf'
      },{
        id: 9010,
        titulo: 'Arrullos',
        describe: 'descripción breve del contenido. En una frase',
        url: 'sugerencias/sugerencias-de-uso-9010-arrullos.pdf'
      },{
        id: 9011,
        titulo: 'Crea con colores',
        describe: 'descripción breve del contenido. En una frase',
        url: 'sugerencias/sugerencias-de-uso-9011-creaconcolores.pdf'
      },{
        id: 9012,
        titulo: 'Cuentos al oído',
        describe: 'descripción breve del contenido. En una frase',
        url: 'sugerencias/sugerencias-de-uso-9012-cuentosaloido.pdf'
      },{
        id: 9013,
        titulo: 'Cuentos interactivos',
        describe: 'descripción breve del contenido. En una frase',
        url: 'sugerencias/sugerencias-de-uso-9013-cuentosinteractivos.pdf'
      },{
        id: 9014,
        titulo: 'Cuentos narrados',
        describe: 'descripción breve del contenido. En una frase',
        url: 'sugerencias/sugerencias-de-uso-9014-cuentosnarrados.pdf'
      },{
        id: 9015,
        titulo: 'Historias contadas',
        describe: 'descripción breve del contenido. En una frase',
        url: 'sugerencias/sugerencias-de-uso-9015-historias.pdf'
      },{
        id: 9016,
        titulo: 'SAI sabiduría ancestral',
        describe: 'descripción breve del contenido. En una frase',
        url: 'sugerencias/sugerencias-de-uso-9016-sai.pdf'
      },{
        id: 9017,
        titulo: 'Sana que sana',
        describe: 'descripción breve del contenido. En una frase',
        url: 'sugerencias/sugerencias-de-uso-9017-sanaquesana.pdf'
      },{
        id: 9018,
        titulo: 'Buen comienzo',
        describe: 'descripción breve del contenido. En una frase',
        url: 'sugerencias/sugerencias-de-uso-9018-buencomienzo.pdf'
      },{
        id: 9019,
        titulo: 'Karaokes',
        describe: 'descripción breve del contenido. En una frase',
        url: 'sugerencias/sugerencias-de-uso-9019-karaokes.pdf'
      },{
        id: 9020,
        titulo: 'Trabalenguas',
        describe: 'descripción breve del contenido. En una frase',
        url: 'sugerencias/sugerencias-de-uso-9020-trabalenguas.pdf'
      },{
        id: 9021,
        titulo: 'Chigüiro',
        describe: 'descripción breve del contenido. En una frase',
        url: 'sugerencias/sugerencias-de-uso-9021-chiguiro.pdf'
      },{
        id: 9022,
        titulo: 'Cuentos de Maguaré',
        describe: 'descripción breve del contenido. En una frase',
        url: 'sugerencias/sugerencias-de-uso-9022-cuentosmaguare.pdf'
      },{
        id: 9023,
        titulo: 'Canciones de Maguaré',
        describe: 'descripción breve del contenido. En una frase',
        url: 'sugerencias/sugerencias-de-uso-9023-cancionesmaguare.pdf'
      },
    ]
}
export default {
  namespaced: true,
  state
}
