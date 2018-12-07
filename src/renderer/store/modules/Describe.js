const state = {
  describe: [
    /* Descargables Serie 400 */
    {
      id: 400,
      clase: 'maguare',
      seccion: 'Descargables',
      subseccion: 'Descargables',
      titulobreve: 'Descargables',
      descripcion: 'Rompecabezas, trabalenguas, adivinanzas y mucho más para jugar'
    },
    /* INTERACTIVOS SERIE 300*/
    {
      id: 300,
      clase: 'maguare',
      seccion: 'Interactivos',
      subseccion: 'Todos',
      titulobreve: 'Interactivos',
      descripcion: 'Rompecabezas, trabalenguas, adivinanzas y mucho más para jugar'
    },
    {
      id: 301,
      clase: 'maguare',
      seccion: 'Interactivos',
      subseccion: 'Juegos',
      titulobreve: 'Interactivos - Juegos',
      descripcion: 'Los juegos más divertidos de Saimiri y sus amigos'
    },
    {
      id: 302,
      clase: 'maguare',
      seccion: 'Interactivos',
      subseccion: 'Adivinanzas',
      titulobreve: 'Interactivos - Adivinanzas',
      descripcion: '10 adivinanzas para adivinar. El que las adivine ¡un gran adivinador será!'
    },
    {
      id: 303,
      clase: 'maguare',
      seccion: 'Interactivos',
      subseccion: 'Rompecabezas',
      titulobreve: 'Interactivos - Rompecabezas',
      descripcion: 'Vamos a jugar con los rompecabezas de Maguaré'
    },
    {
      id: 304,
      clase: 'maguare',
      seccion: 'Interactivos',
      subseccion: 'Trabalenguas',
      titulobreve: 'Interactivos - Trabalenguas',
      descripcion: '10 trabalenguas para jugar con las palabras'
    },
    /* AUDIOS SERIE 000*/
    {
      id: 0,
      clase: 'maguare',
      seccion: 'Audios',
      subseccion: 'Todos',
      titulobreve: 'Audios',
      descripcion: '¡Canciones, cuentos e historias para escuchar una y otra vez!'
    },
    {
      id: 1,
      clase: 'maguare',
      seccion: 'Audios',
      subseccion: 'Maguaré en La Ceiba',
      titulobreve: 'Audios - Maguaré en La Ceiba',
      descripcion: '8 canciones para conocer a Saimiri y sus amigos'
    },
    {
      id: 2,
      clase: 'maguare',
      seccion: 'Audios',
      subseccion: 'Con mi cuento encanto',
      titulobreve: 'Audios - Con mi cuento encanto',
      descripcion: 'Colección de historias creadas por niños'
    },
    {
      id: 3,
      clase: 'maguare',
      seccion: 'Audios',
      subseccion: 'Cuentos al oído',
      titulobreve: 'Audios - Cuentos al oído',
      descripcion: 'Cuentos clásicos para escuchar una y otra vez'
    },
    {
      id: 4,
      clase: 'maguare',
      seccion: 'Audios',
      subseccion: 'Fiesta de la lectura',
      titulobreve: 'Audios - Fiesta de la lectura',
      descripcion: 'Canciones, juegos y relatos propios de la rica tradición oral de diversos grupos étnicos colombianos'
    },
    {
      id: 5,
      clase: 'maguare',
      seccion: 'Audios',
      subseccion: 'Canciones dulces',
      titulobreve: 'Audios - Sweet songs / canciones dulces',
      descripcion: 'Canciones de la rica tradición cultural del Archipiélago de San Andrés, Providencia y Santa Catalina'
    },
    {
      id: 6,
      clase: 'maguare',
      seccion: 'Audios',
      subseccion: 'Canciones Kamëntsá',
      titulobreve: 'Audios - Canciones Kamëntsá',
      descripcion: 'Música para recuperar la lengua del pueblo Kamëntsá'
    },
    /* VIDEOS SERIE 100*/
    {
      id: 100,
      clase: 'maguare',
      seccion: 'Videos',
      subseccion: 'Todos',
      titulobreve: 'Videos',
      descripcion: 'TODOS LOS VIDEOS'
    },
    {
      id: 101,
      clase: 'maguare',
      seccion: 'Videos',
      subseccion: 'Zumba que zumba',
      titulobreve: 'Videos - Zumba que zumba',
      descripcion: 'Colección de historias creadas por niños'
    },
    {
      id: 102,
      clase: 'maguare',
      seccion: 'Videos',
      subseccion: 'Karaokes',
      titulobreve: 'Videos - Karaokes',
      descripcion: 'Vamos a cantar y a bailar con los karaokes de Maguaré'
    },
    {
      id: 103,
      clase: 'maguare',
      seccion: 'Videos',
      subseccion: 'Canciones dulces',
      titulobreve: 'Videos - Sweet songs / canciones dulces',
      descripcion: 'Canciones de la rica tradición cultural del Archipiélago de San Andrés, Providencia y Santa Catalina'
    },
    {
      id: 104,
      clase: 'maguare',
      seccion: 'Videos',
      subseccion: 'Fiesta de la lectura',
      titulobreve: 'Videos - Fiesta de la lectura',
      descripcion: 'Canciones, juegos y relatos propios de la rica tradición oral de diversos grupos étnicos colombianos'
    },
    {
      id: 105,
      clase: 'maguare',
      seccion: 'Videos',
      subseccion: 'Cuentos narrados',
      titulobreve: 'Videos - Cuentos narrados',
      descripcion: 'Cuentos animados para leer, ver y escuchar'
    },
    {
      id: 106,
      clase: 'maguare',
      seccion: 'Videos',
      subseccion: 'Karaokes de Maguaré en La Ceiba',
      titulobreve: 'Videos - Karaokes de Maguaré en La Ceiba',
      descripcion: '8 karaokes para conocer a Saimiri y sus amigos'
    },
    {
      id: 107,
      clase: 'maguare',
      seccion: 'Videos',
      subseccion: 'Todos los karaokes',
      titulobreve: 'Videos - Todos los karaokes',
      descripcion: 'Vamos a cantar y a bailar con los karaokes de Maguaré'
    },
    /* LIBROS SERIE 200*/
    {
      id: 200,
      clase: 'maguare',
      seccion: 'Libros',
      subseccion: 'Todos',
      titulobreve: 'Libros',
      descripcion: 'TODOS LOS LIBROS'
    },{
      id: 201,
      clase: 'maguare',
      seccion: 'Libros',
      subseccion: 'Todos',
      titulobreve: 'Libros',
      descripcion: 'MAGUARE EN LA CEIBA'
    },{
      id: 202,
      clase: 'maguare',
      seccion: 'Libros',
      subseccion: 'Todos',
      titulobreve: 'Libros',
      descripcion: 'LEER ES MI CUENTO'
    },{
      id: 203,
      clase: 'maguare',
      seccion: 'Libros',
      subseccion: 'Todos',
      titulobreve: 'Libros',
      descripcion: 'FIESTA DE LA LECTURA'
    },
  ]
}


export default {
  namespaced: true,
  state
}
