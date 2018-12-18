const state = {
  descargablesmaguare: [
    { id: 9100,
      autor: 'Ministerio de Cultura',
      titulo: 'Coloreable gigante de La Ceiba',
      describe: 'Descarga, colorea y diviértete con los personajes de Maguaré en La Ceiba',
      url: 'coloreables/coloreable-1.pdf'
    },
    { id: 9101,
      autor: 'Ministerio de Cultura',
      titulo: 'Colorea los personajes de Maguaré en La Ceiba',
      describe: 'Descarga, colorea y diviértete con los personajes de Maguaré en La Ceiba',
      url: 'coloreables/coloreable-2.pdf'
    },
  ],

    libros: [
      {
        id: 513,
        autor: 'Fundación Taller de Letras Jordi Sierra Fabra',
        titulo: 'Un castillo de libros',
        coleccion: '',
        publico: 'maguare',
        describe: 'Este relato infantil es publicación de la Fundación Taller de Letras Jordi Sierra Fabra para De Cero a Siempre e invita a despertar los sentidos a través de hermosas ilustraciones llenas de color en un lugar donde los secretos nunca acaban.',
        url: 'librosmaguare/513-castillo.pdf',
        descarga: 'castillolibros'
      },{
        id: 490,
        autor: 'ICBF Instituto Colombiano de Bienestar Familiar - Ministerio de Cultura - Fundalectura',
        titulo: 'Patas de armadillo, dientes de ratón',
        coleccion: 'Fiesta de la lectura',
        publico: 'maguare',
        describe: 'Las canciones, juegos y relatos que los campesinos colombianos comparten con los niños en este volumen son un reconocimiento de las tradiciones y los modos de comprender y vivir la vida en diferentes contextos rurales del país.',
        url: 'librosmaguare/490-patasdearmadillo.pdf',
        descarga: 'FIESTA-armadilloratones'
      },{
        id: 491,
        autor: 'ICBF Instituto Colombiano de Bienestar Familiar - Ministerio de Cultura - Fundalectura',
        titulo: 'Tortuguita, vení bailá - libro',
        coleccion: 'Fiesta de la lectura',
        publico: 'maguare',
        describe: 'Este libro te invita a disfrutar la voz y la música de los pueblos nativos de Colombia. En ¡Tortuguita, vení bailá!, se recogen las palabras y las melodías con las que en Colombia se le da la bienvenida a los hijos en cinco pueblos indígenas.',
        url: 'librosmaguare/491-tortuguita.pdf',
        descarga: 'FIESTA-tortuguitavenibaila'
      },{
        id: 493,
        autor: 'ICBF Instituto Colombiano de Bienestar Familiar - Ministerio de Cultura - Fundalectura',
        titulo: 'Putunkaa serruma duérmete, pajarito',
        coleccion: 'Fiesta de la lectura',
        publico: 'maguare',
        describe: 'En esta edición bilingüe, el ICBF y Fundalectura recopilan algunos arrullos y cuentos en español, piapoco, arhuaco, kamëntsá, uitoto y wayúu, lenguas que guardan la memoria.',
        url: 'librosmaguare/493-putunkaa.pdf',
        descarga: 'FIESTA-putunkaaserruma'
      },{
        id: 495,
        autor: 'ICBF Instituto Colombiano de Bienestar Familiar - Ministerio de Cultura - Fundalectura',
        titulo: 'Una morena en la ronda',
        coleccion: 'Fiesta de la lectura',
        publico: 'maguare',
        describe: 'En esta edición multilingüe se recopilan algunos arrullos, juegos y relatos con los que papás, mamás y abuelos afrocolombianos reciben a sus bebés y les acompañan durante la infancia. ',
        url: 'librosmaguare/495-unamorenaenlaronda.pdf',
        descarga: 'LEMC-morenaronda'
      },{
        id: 500,
        autor: 'ICBF Instituto Colombiano de Bienestar Familiar - Ministerio de Cultura - Fundalectura',
        titulo: 'Los arrullos de Jáamo',
        coleccion: 'Fiesta de la lectura',
        publico: 'maguare',
        describe: 'Este libro reúne los arrullos, relatos y juegos que acogen a los bebés y los niños en las familias de las comunidades nasa, inga, sikuani, cãacwa y totoró, cinco de los ciento dos pueblos indígenas colombianos. ',
        url: 'librosmaguare/500-arrullosjaamo.pdf',
        descarga: 'FIESTA-arrullosjaamo'
      },{
        id: 511,
        autor: 'ICBF Instituto Colombiano de Bienestar Familiar - Ministerio de Cultura - Fundalectura',
        titulo: 'Tiki, tiki, tai - libro',
        coleccion: 'Fiesta de la lectura',
        publico: 'maguare',
        describe: 'En esta edición bilingüe se recopilan algunos arrullos, secretos y relatos en español y en el idioma del pueblo Rrom, una lengua que recuerda cada camino por el que este pueblo ha trasegado en su ir y venir por el mundo, amantes ante todo de la libertad y la vida.',
        url: 'librosmaguare/511-tikitikitai.pdf',
        descarga: 'FIESTA-tikitikitai'
      },{
        id: 499,
        autor: 'Rafael Pombo',
        titulo: 'Con pombo y platillos',
        coleccion: 'Leer es mi cuento',
        edad: 1,
        publico: 'maguare',
        describe: 'Recuerden los cuentos de infancia de Rafael Pombo y lean junto con los niños. Aquí encuentran cuentos como Mirringa Mirronga, El renacuajo paseador, Juan Matachín, entre otros.',
        url: 'librosmaguare/499-pomboplatillos.pdf',
        descarga: 'LEMC-pombo-platillos'
      },{
        id: 501,
        autor: 'William Shakespeare',
        titulo: 'Romeo y Julieta',
        coleccion: 'Leer es mi cuento',
        edad: 10,
        publico: 'maguared',
        describe: 'Esta obra maestra de William Shakespeare, genio de la literatura inglesa, cuenta la historia de amor más hermosa y trágica que jamás se haya escrito. Esta versión de los hermanos Lamb se escribió especialmente para los jóvenes.',
        url: 'leeresmicuento/501-romeoyjulieta.pdf',
        descarga: 'LEMC-romeoyjulieta'
      },{
        id: 502,
        autor: 'Anónimo',
        titulo: 'Cuentos de Las mil y una noches',
        coleccion: 'Leer es mi cuento',
        edad: 10,
        publico: 'maguared',
        describe: 'Los relatos que cada noche cuenta Sherezada constituyen uno de los libros que más ha entretenido a niños y adultos durante siglos. Aquí encontrarán tres de estos relatos llenos de aventuras, sueños e historias de amor.',
        url: 'leeresmicuento/502-milyunanoches.pdf',
        descarga: 'LEMC-cuentosdelasmilyunanoches'
      },{
        id: 505,
        autor: 'Varios',
        titulo: 'De viva voz',
        coleccion: 'Leer es mi cuento',
        edad: 1,
        publico: 'maguare',
        describe: 'Los cuentos, poemas y fábulas de este libro tienen como propósito hacer que los lectores, niños y grandes, adquieran el gusto por las palabras. ',
        url: 'librosmaguare/505-vivavoz.pdf',
        descarga: 'LEMC-viva-voz'
      },{
        id: 507,
        autor: 'Varios',
        titulo: 'Puro cuento',
        coleccion: 'Leer es mi cuento',
        edad: 1,
        publico: 'maguare',
        describe: 'Este libro los invita a disfrutar junto con los niños historias tradicionales que las familias europeas narraban durante los fríos y largos inviernos.',
        url: 'librosmaguare/507-purocuento.pdf',
        descarga: 'LEMC-puro-cuento'
      },{
        id: 515,
        autor: 'Varios',
        titulo: 'Canta palabras',
        coleccion: 'Leer es mi cuento',
        edad: 1,
        publico: 'maguare',
        describe: 'Canten y jueguen con los niños canciones, rondas, poemas, trabalenguas, dichos y retahílas. Aquí encontrarán relatos e historias de reconocidos autores latinoamericanos.',
        url: 'librosmaguare/515-cantapalabras.pdf',
        descarga: 'LEMC-canta-palabras'
      },{
        id: 538,
        autor: 'Charles Perrault - Hermanos Grimm',
        titulo: 'Barbas, pelos y cenizas',
        coleccion: 'Leer es mi cuento',
        edad: 7,
        publico: 'maguare',
        describe: 'Disfruten junto con los niños historias de fantasía como Barba azul de Charles Perrault y Los tres pelos de oro del diablo y La Cenicienta de Los Hermanos Grimm.',
        url: 'librosmaguare/538-barbas.pdf',
        descarga: 'LEMC-barbas-pelos-cenizas'
      },{
        id: 539,
        autor: 'Varios',
        titulo: 'De animales y de niños',
        coleccion: 'Leer es mi cuento',
        edad: 7,
        publico: 'maguare',
        describe: 'Caballos, monos, niños, familias, cucarachitas, matas de mora, vaqueros, selvas, loras, gatos y hasta dulces de icaco viven en estas páginas.',
        url: 'librosmaguare/539-animalesninos.pdf',
        descarga: 'LEMC-animales-ninos'
      },{
        id: 540,
        autor: 'Horacio Benavides',
        titulo: 'Ábrete grano pequeño',
        coleccion: 'Leer es mi cuento',
        edad: 1,
        publico: 'maguare',
        describe: 'Este libro es una recopilación de las mejores adivinanzas escritas por el poeta caucano Horacio Benavides, muchas de sus adivinanzas están relacionadas con mitologías o con historias antiguas.',
        url: 'librosmaguare/540-grano.pdf',
        descarga: 'LEMC-abrete-grano'
      },{
        id: 541,
        autor: 'Hans Christian Andersen',
        titulo: 'El patito feo',
        coleccion: 'Leer es mi cuento',
        edad: 7,
        publico: 'maguare',
        describe: 'Este cuento clásico de Hans Christian Andersen, ha sido leído desde hace muchos años con emoción por lectores de todas las edades y recuerda la necesidad de aceptar a quienes piensan diferente y pertenecen a otra raza, cultura o religión.',
        url: 'librosmaguare/541-patitofeo.pdf',
        descarga: 'LEMC-patito-feo'
      },{
        id: 542,
        autor: 'José Martí',
        titulo: 'Meñique',
        coleccion: 'Leer es mi cuento',
        edad: 7,
        publico: 'maguare',
        describe: 'Esta bella historia narra cómo los hermanos Pedro, Pablo y Juancito (al que conocían como Meñique porque era tan pequeño que se podía esconder en la bota de su padre) decidieron ir a probar suerte en un reino muy particular.',
        url: 'librosmaguare/542-menique.pdf',
        descarga: 'LEMC-menique'
      },{
        id: 543,
        autor: 'F.M Samaniego',
        titulo: 'Fábulas',
        coleccion: 'Leer es mi cuento',
        edad: 7,
        publico: 'maguare',
        describe: 'Encuentren aquí 30 fábulas de Félix María Samaniego. Algunos de los títulos son La cigarra y la hormiga, El león y el ratón y el Ciervo en la fuente y muchas otras. Se trata de pequeños cuentos en los que hablan y actúan los animales, y que llevan a conclusiones morales.',
        url: 'librosmaguare/543-fabulas.pdf',
        descarga: 'LEMC-fabulas'
      },{
        id: 544,
        autor: 'Jeanne Marie Le Prince de Beaumont',
        titulo: 'La bella y la bestia',
        coleccion: 'Leer es mi cuento',
        edad: 7,
        publico: 'maguare',
        describe: 'Esta bella historia recuerda la tolerancia y la aceptación y habla sobre cómo la belleza de una persona no esta en su físico sino en su forma de ser, porque lo más importante es la belleza del corazón.',
        url: 'librosmaguare/544-bellabestia.pdf',
        descarga: 'LEMC-bella-bestia'
      },{
        id: 611,
        autor: 'Rudyard Kipling',
        titulo: 'Por qué el elefante tiene la trompa así',
        coleccion: 'Leer es mi cuento',
        edad: 7,
        publico: 'maguare',
        describe: 'Con estos dos cuentos los niños gozarán y se divertirán viendo cómo y por qué las cosas son como son. ¿No será, acaso, que el elefante tiene trompa y el leopardo manchas porque les pasó lo que él cuenta que les pasó?',
        url: 'librosmaguare/611-elefantetrompa.pdf',
        descarga: 'LEMC-elefante-trompa'
      },
      {
        id: 1210,
        autor: 'Hermanos Grimm',
        titulo: 'Bosque adentro',
        coleccion: 'Leer es mi cuento',
        edad: 7,
        publico: 'maguare',
        describe: 'En este libro encontrarán los clásicos de Los Hermanos Grimm: Hansel y Gretel, Caperucita Roja, Blanca Nieves y La bella durmiente.',
        url: 'librosmaguare/bosqueadentro.pdf',
        descarga: 'LEMC-bosque-adentro'
      },{
        id: 1211,
        autor: 'Alejandro Dumas',
        titulo: 'El rey de los topos y su hija',
        coleccion: 'Leer es mi cuento',
        edad: 7,
        publico: 'maguare',
        describe: 'Esta es una historia escrita por Alejandro Dumas que refleja el amor de una madre por su hijo.',
        url: 'librosmaguare/reytopos.pdf',
        descarga: 'LEMC-rey-topos'
      },{
        id: 1220,
        autor: 'Tomás Carrasquilla',
        titulo: 'En la diestra de Dios padre',
        coleccion: 'Leer es mi cuento',
        edad: 10,
        publico: 'maguared',
        describe: 'Este cuento de Tomás Carrasquilla narra la historia de Peralta, un campesino a quien se le aparece Jesús y San Pedro.',
        url: 'leeresmicuento/1220-diestradiospadre.pdf',
        descarga: 'LEMC-enladiestradediospadre'
      },{
        id: 1221,
        autor: 'N. Hawthorne',
        titulo: 'Los pigmeos',
        coleccion: 'Leer es mi cuento',
        edad: 10,
        publico: 'maguared',
        describe: 'Este libro cuenta la historia de los Pigmeos y el gigante Anteo. Se narran sus aventuras y los momentos en que probaron su valentía.',
        url: 'leeresmicuento/1221-lospigmeos.pdf',
        descarga: 'LEMC-lospigmeos'
      },{
        id: 1222,
        autor: 'Edmundo de Amicis',
        titulo: 'El pequeño escribiente florentino',
        coleccion: 'Leer es mi cuento',
        edad: 7,
        publico: 'maguared',
        describe: 'Esta historia invita a pensar el significado de la familia y el rol que cumple cada miembro para aportar al bienestar general.',
        url: 'leeresmicuento/1222-escribiente.pdf',
        descarga: 'LEMC-escribienteflorentino'
      },{
        id: 1223,
        autor: 'Miguel de Cervantes',
        titulo: 'Don Quijote de la Mancha',
        coleccion: 'Leer es mi cuento',
        edad: 10,
        publico: 'maguared',
        describe: 'Aquí encuentran los capítulos 1 y 7 de la obra literaria más famosa que se haya escrito en español.',
        url: 'leeresmicuento/1223-quijote.pdf',
        descarga: 'LEMC-donquijote'
      },{
        id: 1226,
        autor: 'Varios',
        titulo: 'Poesía en español',
        coleccion: 'Leer es mi cuento',
        edad: 10,
        publico: 'maguared',
        describe: 'Este libro reúne algunos de los mejores poemas clásicos de la lengua española para disfrutar con los niños.',
        url: 'leeresmicuento/1226-poesiaenespanol.pdf',
        descarga: 'LEMC-poesiaespanol'
      },{
        id: 1227,
        autor: 'Robert Louis Stevenson',
        titulo: 'El diablo en la botella',
        coleccion: 'Leer es mi cuento',
        edad: 10,
        publico: 'maguared',
        describe: 'Robert Louis Stevenson escribe en esta novela la historia de Keawe, un hombre trabajador que va a perder su alma para siempre.',
        url: 'leeresmicuento/1227-diablobotella.pdf',
        descarga: 'LEMC-eldiabloenlabotella'
      },{
        id: 1228,
        autor: 'Horacio Quiroga',
        titulo: 'Cuentos de la selva',
        coleccion: 'Leer es mi cuento',
        edad: 10,
        publico: 'maguared',
        describe: 'Este libro de Horacio Quiroga retrata la fuerza trágica del encuentro entre el hombre y la naturaleza.',
        url: 'leeresmicuento/1228-cuentosselva.pdf',
        descarga: 'LEMC-cuentosdelaselva'
      },{
        id: 1229,
        autor: 'Charles Lamb',
        titulo: 'Aventuras de Ulises',
        coleccion: 'Leer es mi cuento',
        edad: 10,
        publico: 'maguared',
        describe: 'Este libro narra las aventuras que pasó Ulises para volver a su casa junto a su familia.',
        url: 'leeresmicuento/1229-ulises.pdf',
        descarga: 'LEMC-aventurasdeulises'
      },{
        id: 1230,
        autor: 'Fernán Caballero',
        titulo: 'Don Juan Bolondrón',
        coleccion: 'Leer es mi cuento',
        edad: 10,
        publico: 'maguared',
        describe: 'Los cuentos ­Don Juan Bolondrón y La suegra del diablo han sido narrados por las familias españolas desde hace cientos de años.',
        url: 'leeresmicuento/1230-juanbolondron.pdf',
        descarga: 'LEMC-donjuanbolondron'
      },{
        id: 612,
        autor: 'Varios',
        titulo: 'Canciones, rondas, nanas, retahílas y adivinanzas',
        coleccion: 'Leer es mi cuento',
        edad: 1,
        publico: 'maguare',
        describe: 'Jueguen con las palabras, canten con ellas y destrábenlas una y otra vez.',
        url: 'librosmaguare/612-cancionesrondas.pdf',
        descarga: 'LEMC-canciones-rondas'
      },{
        id: 618,
        autor: 'Ministerio de Cultura - Maguaré - Maritza Sánchez, Carlos Millán, Amalia Satizabal, Lizardo Carvajal, Oscar García Oyola',
        titulo: 'El frenético baile de Chip',
        coleccion: 'Maguaré en La Ceiba',
        publico: 'maguare',
        describe: 'Chip la perezosa se levantó muy dispuesta para dar su clase de aeróbicos y para hacer deporte se mantiene muy bien hidratada. Pero Chip ha tomado más agua de la cuenta… ¡Un baño, por favor!',
        url: 'librosmaguare/maguare-frenetico-baile-chip.pdf',
        urlbn: 'librosmaguare/maguare-frenetico-baile-chipBN.pdf',
        descarga: 'CEIBA-elbailefreneticodechip'
      },
      {
        id: 619,
        autor: 'Ministerio de Cultura - Maguaré - Maritza Sánchez, Carlos Millán, Amalia Satizabal, Lizardo Carvajal, Oscar García Oyola',
        titulo: 'El libro perdido de Gigi',
        coleccion: 'Maguaré en La Ceiba',
        publico: 'maguare',
        describe: 'Saimiri es un gran lector y quiere terminar de leer una historia, pero no aparece el segundo libro que cuenta el final. Con la ayuda de Gigi la tortuga emprenden la aventura de encontrar el libro perdido.',
        url: 'librosmaguare/maguare-libro-perdido-gigi.pdf',
        urlbn: 'librosmaguare/maguare-libro-perdido-gigiBN.pdf',
        descarga: 'CEIBA-ellibroperdidodegigi'
      },
      {
        id: 620,
        autor: 'Ministerio de Cultura - Maguaré - Maritza Sánchez, Carlos Millán, Amalia Satizabal, Lizardo Carvajal, Oscar García Oyola',
        titulo: 'El viaje de la familia Cuy',
        coleccion: 'Maguaré en La Ceiba',
        publico: 'maguare',
        describe: '¿Cómo hacen Linio y Tulita los dos papás cuyes para salir de paseo con sus hijos?. No debe ser nada fácil… porque son ¡27 cuyecitos!',
        url: 'librosmaguare/maguare-viaje-familia-cuy.pdf',
        urlbn: 'librosmaguare/maguare-viaje-familia-cuyBN.pdf',
        descarga: 'CEIBA-elviajedelafamiliacuy'
      },
      {
        id: 621,
        autor: 'Ministerio de Cultura - Maguaré - Maritza Sánchez, Carlos Millán, Amalia Satizabal, Lizardo Carvajal, Oscar García Oyola',
        titulo: 'El cumpleaños de Rosalinda',
        coleccion: 'Maguaré en La Ceiba',
        publico: 'maguare',
        describe: 'Rosalinda la camaleona cambia de color según como se sienta y hoy está azul porque parece que todos olvidaron su cumpleaños. En todo el día no ha recibido ni un abrazo ni un te quiero. ¿Cómo hacer para que se ponga feliz, color arcoiris?',
        url: 'librosmaguare/maguare-rosalinda.pdf',
        urlbn: 'librosmaguare/maguare-rosalindaBN.pdf',
        descarga: 'CEIBA-elcumpleanosderosalinda'
      },
      {
        id: 622,
        autor: 'Ministerio de Cultura - Maguaré - Maritza Sánchez, Carlos Millán, Amalia Satizabal, Lizardo Carvajal, Oscar García Oyola',
        titulo: 'La memoria del abuelo',
        coleccion: 'Maguaré en La Ceiba',
        publico: 'maguare',
        describe: 'El abuelo Emiliano lo olvida todo, todo, todo… bueno no se le olvidan las cosas que averguenzan a Rani y a Gildardo. ¡Abuelo Emiliano ejercita tu memoria con un sudoku!',
        url: 'librosmaguare/maguare-memoria-abuelo.pdf',
        urlbn: 'librosmaguare/maguare-memoria-abueloBN.pdf',
        descarga: 'CEIBA-lamemoriadelabuelo'
      },{
        id: 623,
        autor: 'Ministerio de Cultura - Maguaré - Maritza Sánchez, Carlos Millán, Amalia Satizabal, Lizardo Carvajal, Oscar García Oyola',
        titulo: 'Una sopa para la fiesta',
        coleccion: 'Maguaré en La Ceiba',
        publico: 'maguare',
        describe: '¡Las trillizas Adriana, Juliana y Eliana son terribles!. No se quedan quietas nunca y sus travesuras desesperan a más de uno en la Ceiba. Sin embargo parecen tener un don especial para transformar cualquier situación por crítica que parezca. ¿Qué hicieron ahora estas Terrillizas?.',
        url: 'librosmaguare/maguare-sopa-fiesta.pdf',
        urlbn: 'librosmaguare/maguare-sopa-fiestaBN.pdf',
        descarga: 'CEIBA-unasopaparalafiesta'
      },


    ],
    /* Serie 9000*/
    sugerencias: [
      {
        id: 9001,
        titulo: 'Bosqueconcierto',
        autor: 'Ministerio de Cultura - MaguaRED - Maguaré',
        describe: 'Presentamos una serie de actividades para niños que promueven la exploración del entorno, las experiencias artísticas y el juego. ¡Todo a partir del álbum musical Bosqueconcierto!',
        url: 'sugerencias/sugerencias-de-uso-9001-bosqueconcierto.pdf',
        descarga: 'Sugerencia-de-uso-Bosqueconcierto'
      },
      {
        id: 9002,
        titulo: 'Tu Rockcito',
        autor: 'Ministerio de Cultura - MaguaRED - Maguaré',
        describe: 'Presentamos una serie de actividades para niños de primera infancia basadas en la música de Tu Rockcito: ¡puro rock n roll!',
        url: 'sugerencias/sugerencias-de-uso-9002-turockcito.pdf',
        descarga: 'Sugerencia-de-uso-turockcito'
      },{
        id: 9003,
        titulo: 'Jacana Jacana',
        autor: 'Ministerio de Cultura - MaguaRED - Maguaré',
        describe: 'Aquí hay actividades para niños de primera infancia que promueven la exploración del entorno y las experiencias artísticas. ¡Todo a partir de canciones y karaokes de Jacana Jacana!',
        url: 'sugerencias/sugerencias-de-uso-9003-jacana.pdf',
        descarga: 'Sugerencia-de-uso-jacanajacana'
      },{
        id: 9004,
        titulo: 'Cantos de agua',
        autor: 'Ministerio de Cultura - MaguaRED - Maguaré',
        describe: 'Aquí encuentran actividades para niños de primera infancia basadas en la colección Cantos de agua, que promueven la exploración del entorno, las experiencias artísticas y el juego.',
        url: 'sugerencias/sugerencias-de-uso-9004-cantosdeagua.pdf',
        descarga: 'Sugerencia-de-uso-cantosdeagua'
      },{
        id: 9005,
        titulo: 'Tamborecos',
        autor: 'Ministerio de Cultura - MaguaRED - Maguaré',
        describe: 'Presentamos una serie de actividades para niños de primera infancia que promueven el juego y el disfrute de las palabras y el lenguaje. ¡Y todo a partir de la colección Tamborecos!',
        url: 'sugerencias/sugerencias-de-uso-9005-tamborecos.pdf',
        descarga: 'Sugerencia-de-uso-tamborecos'
      },{
        id: 9006,
        titulo: 'Pipo',
        autor: 'Ministerio de Cultura - MaguaRED - Maguaré',
        describe: 'Aquí encuentran una serie de actividades para niños de primera infancia que promueven la exploración del entorno, el juego y el disfrute de las palabras y el lenguaje. ¡A jugar con Pipo, mi amigo imaginario!',
        url: 'sugerencias/sugerencias-de-uso-9006-pipo.pdf',
        descarga: 'Sugerencia-de-uso-pipo'
      },{
        id: 9007,
        titulo: 'Ana Pirata',
        autor: 'Ministerio de Cultura - MaguaRED - Maguaré',
        describe: 'Aquí encuentran una serie de actividades inspiradoras para promover en los niños la exploración del entorno, el juego y la equidad de género a partir de la serie Ana Pirata.',
        url: 'sugerencias/sugerencias-de-uso-9007-anapirata.pdf',
        descarga: 'Sugerencia-de-uso-anapirata'
      },{
        id: 9008,
        titulo: 'Camusi Camusi',
        autor: 'Ministerio de Cultura - MaguaRED - Maguaré',
        describe: 'Aquí encuentran una serie de actividades para niños de primera infancia que promueven las experiencias artísticas, el juego y el disfrute de las palabras. ¡Todo a partir de la serie Camusi Camusi!',
        url: 'sugerencias/sugerencias-de-uso-9008-camusi.pdf',
        descarga: 'Sugerencia-de-uso-camusicamusi'
      },{
        id: 9009,
        titulo: 'Adivinanzas',
        autor: 'Ministerio de Cultura - MaguaRED - Maguaré',
        describe: 'Presentamos una serie de actividades divertidas para niños de primera infancia que promueven las experiencias artísticas y el disfrute de las palabras y el lenguaje con 10 adivinanzas interactivas.',
        url: 'sugerencias/sugerencias-de-uso-9009-adivinanzas.pdf',
        descarga: 'Sugerencia-de-uso-adivinanzas'
      },
      {
        id: 9010,
        titulo: 'Arrullos',
        autor: 'Ministerio de Cultura - MaguaRED - Maguaré',
        describe: '¿Cuál es la mejor canción para dormir a un niño despierto?. En estas sugerencias de uso les contamos cuáles son las canciones especiales y qué actividades implementar para dormir al más despierto.',
        url: 'sugerencias/sugerencias-de-uso-9010-arrullos.pdf',
        descarga: 'Sugerencia-de-uso-arrullos'
      },
      {
        id: 9011,
        titulo: 'Crea con colores',
        autor: 'Ministerio de Cultura - MaguaRED - Maguaré',
        describe: 'Aquí encontrarán una serie de actividades para niños de primera infancia que promueven las experiencias artísticas y el juego. ¡Todo a partir del juego Crea con colores!',
        url: 'sugerencias/sugerencias-de-uso-9011-creaconcolores.pdf',
        descarga: 'Sugerencia-de-uso-creaconcolores'
      },{
        id: 9012,
        titulo: 'Cuentos al oído',
        autor: 'Ministerio de Cultura - MaguaRED - Maguaré',
        describe: 'Aquí están disponibles las actividades para niños de primera infancia basadas en la colección Cuentos al oído; ésta promueven las experiencias artísticas, el juego y el disfrute de las palabras.',
        url: 'sugerencias/sugerencias-de-uso-9012-cuentosaloido.pdf',
        descarga: 'Sugerencia-de-uso-cuentosaloido'
      },{
        id: 9013,
        titulo: 'Cuentos interactivos',
        autor: 'Ministerio de Cultura - MaguaRED - Maguaré',
        describe: 'Encuentren aquí una serie de actividades para niños de primera infancia que promueven la exploración del entorno y las experiencias artísticas. ¡Todo gracias a la colección de Cuentos Interactivos!',
        url: 'sugerencias/sugerencias-de-uso-9013-cuentosinteractivos.pdf',
        descarga: 'Sugerencia-de-uso-cuentosinteractivos'
      },{
        id: 9014,
        titulo: 'Cuentos narrados',
        autor: 'Ministerio de Cultura - MaguaRED - Maguaré',
        describe: 'Aquí encontrarán una serie de actividades para niños de primera infancia que promueven las experiencias artísticas, el juego y las palabras. ¡Todo a partir de la colección de Cuentos narrados!',
        url: 'sugerencias/sugerencias-de-uso-9014-cuentosnarrados.pdf',
        descarga: 'Sugerencia-de-uso-cuentosnarrados'
      },{
        id: 9015,
        titulo: 'Historias contadas',
        autor: 'Ministerio de Cultura - MaguaRED - Maguaré',
        describe: 'A partir de los contenidos de Zumba que Zumba los niños de primera infancia pueden realizar actividades para fortalecer el sentido de exploración, experimentación y conocimiento del mundo.',
        url: 'sugerencias/sugerencias-de-uso-9015-historias.pdf',
        descarga: 'Sugerencia-de-uso-historiascontadas'
      },{
        id: 9016,
        titulo: 'SAI sabiduría ancestral',
        autor: 'Ministerio de Cultura - MaguaRED - Maguaré',
        describe: 'Aquí encuentran divertidas actividades para disfrutar de expresiones culturales de distintas comunidades indígenas de Colombia.',
        url: 'sugerencias/sugerencias-de-uso-9016-sai.pdf',
        descarga: 'Sugerencia-de-uso-sai'
      },

      {
        id: 9017,
        titulo: 'Sana que sana',
        autor: 'Ministerio de Cultura - MaguaRED - Maguaré',
        describe: '¡Sana que sana, colita de rana, si no sana hoy, sanará mañana!. Aquí están disponibles las sugerencias de actividades para sanar con la musicalidad de las palabras.',
        url: 'sugerencias/sugerencias-de-uso-9017-sanaquesana.pdf',
        descarga: 'Sugerencia-de-uso-sanaquesana'
      },

      {
        id: 9018,
        titulo: 'Buen comienzo',
        autor: 'Ministerio de Cultura - MaguaRED - Maguaré',
        describe: 'Ya están disponibles las actividades de la colección musical Buen Comienzo, que hace parte del programa para primera infancia de la Alcaldía de Medellín.',
        url: 'sugerencias/sugerencias-de-uso-9018-buencomienzo.pdf',
        descarga: 'Sugerencia-de-uso-buencomienzo'
      },{
        id: 9019,
        titulo: 'Karaokes',
        autor: 'Ministerio de Cultura - MaguaRED - Maguaré',
        describe: 'Aquí encuentran 6 actividades para fomentar los lenguajes expresivos en los niños a través de tardes de karaokes, de creación de garabatos, trazos sonoros y hasta de casitas de chocolate.',
        url: 'sugerencias/sugerencias-de-uso-9019-karaokes.pdf',
        descarga: 'Sugerencia-de-uso-karaokes'
      },{
        id: 9020,
        titulo: 'Trabalenguas',
        autor: 'Ministerio de Cultura - MaguaRED - Maguaré',
        describe: 'Aquí encuentran una serie de activdades basadas en trabalenguas para que los niños jueguen, hagan mímicas, se pinten la lengua de colores o usen tarros como si fueran tambores.',
        url: 'sugerencias/sugerencias-de-uso-9020-trabalenguas.pdf',
        descarga: 'Sugerencia-de-uso-trabalenguas'
      },{
        id: 9021,
        titulo: 'Chigüiro',
        autor: 'Ministerio de Cultura - MaguaRED - Maguaré',
        describe: '¡A jugar dentro y fuera de casa, en las escuelas o en los Centros de Desarrollo con estas divertidas actividades inspiradas en la serie animada Chigüiro!',
        url: 'sugerencias/sugerencias-de-uso-9021-chiguiro.pdf',
        descarga: 'Sugerencia-de-uso-chiguiro'
      },{
        id: 9022,
        titulo: 'Cuentos de Maguaré',
        autor: 'Ministerio de Cultura - MaguaRED - Maguaré',
        describe: 'A partir de los cuentos de Maguaré en La Ceiba los niños de primera infancia pueden realizar actividades para fortalecer el sentido de exploración, experimentación y conocimiento del mundo.',
        url: 'sugerencias/sugerencias-de-uso-9022-cuentosmaguare.pdf',
        descarga: 'Sugerencia-de-uso-cuentosmaguare'
      },{
        id: 9023,
        titulo: 'Canciones de Maguaré',
        autor: 'Ministerio de Cultura - MaguaRED - Maguaré',
        describe: 'Aquí encuentran 5 actividades para fomentar los lenguajes expresivos en los niños a través de tardes de karaokes, de creación de títeres o de jugar con palabras para hacer retahílas.',
        url: 'sugerencias/sugerencias-de-uso-9023-cancionesmaguare.pdf',
        descarga: 'Sugerencia-de-uso-cancionesmaguare'
      },{
        id: 9024,
        titulo: 'Arma tu cuento',
        autor: 'Ministerio de Cultura - MaguaRED - Maguaré',
        describe: 'Aquí encuentran 4 actividades para fomentar los lenguajes expresivos en los niños a partir de animales reales y fantásticos. ¡Vamos todos a armar cuentos!',
        url: 'sugerencias/sugerencias-de-uso-9024-armatucuento.pdf',
        descarga: 'Sugerencia-de-uso-armatucuento'
      },{
        id: 9025,
        titulo: 'Juega con canciones',
        autor: 'Ministerio de Cultura - MaguaRED - Maguaré',
        describe: 'Aquí encuentran 8 actividades para fomentar los lenguajes expresivos en los niños a través de un interactivo con el que se puede crear música mientras se juega.',
        url: 'sugerencias/sugerencias-de-uso-9025-juegaconcanciones.pdf',
        descarga: 'Sugerencia-de-uso-juegaconcacniones'
      },{
        id: 9026,
        titulo: 'Juegos interactivos',
        autor: 'Ministerio de Cultura - MaguaRED - Maguaré',
        describe: '¡Nuevas sugerencias sobre cómo usar los contenidos de Maguaré! Aquí encontrarán 10 actividades para disfrutar, descubrir y crear con los juegos interactivos favoritos de Saimiri y sus amigos.',
        url: 'sugerencias/sugerencias-de-uso-9026-juegosinteractivos.pdf',
        descarga: 'Sugerencia-de-uso-juegosinteractivos'
      },{
        id: 9027,
        titulo: 'Videos musicales',
        autor: 'Ministerio de Cultura - MaguaRED - Maguaré',
        describe: '¿Quieren ver un video? en Maguaré tienen más de veinte videos musicales con ritmos diferentes y técnicas de animación distintas… pero además les sugerimos cómo utilizarlos en la casa o en la escuela, para que los niños de primera infancia descubran e imaginen historias.',
        url: 'sugerencias/sugerencias-de-uso-9027-videosmusicales.pdf',
        descarga: 'Sugerencia-de-uso-videosmusicales'
      },{
        id: 9028,
        titulo: 'Así me lo contaron',
        autor: 'Ministerio de Cultura - MaguaRED - Maguaré',
        describe: '',
        url: 'sugerencias/sugerencias-de-uso-9028-asimelocontaron.pdf',
        descarga: 'Sugerencia-de-uso-asi-me-lo-contaron'
      },{
        id: 9029,
        titulo: 'Rompecabezas',
        autor: 'Ministerio de Cultura - MaguaRED - Maguaré',
        describe: '',
        url: 'sugerencias/sugerencias-de-uso-9029-rompecabezas.pdf',
        descarga: 'Sugerencia-de-uso-rompecabezas'
      },{
        id: 9030,
        titulo: 'Rondas',
        autor: 'Ministerio de Cultura - MaguaRED - Maguaré',
        describe: '',
        url: 'sugerencias/sugerencias-de-uso-9030-rondas.pdf',
        descarga: 'Sugerencia-de-uso-rondas'
      },{
        id: 9031,
        titulo: 'Fiesta de la lectura',
        autor: 'Ministerio de Cultura - MaguaRED - Maguaré',
        describe: '',
        url: 'sugerencias/sugerencias-de-uso-9031-fiestadelalectura.pdf',
        descarga: 'Sugerencia-de-uso-fiesta-de-la-lectura'
      },{
        id: 9032,
        titulo: 'Cuentazos con efectazos',
        autor: 'Ministerio de Cultura - MaguaRED - Maguaré',
        describe: '',
        url: 'sugerencias/sugerencias-de-uso-9032-cuentazos.pdf',
        descarga: 'Sugerencia-de-uso-cuentazos-con-efectazos'
      },{
        id: 9033,
        titulo: 'Leer es mi cuento',
        autor: 'Ministerio de Cultura - MaguaRED - Maguaré',
        describe: '',
        url: 'sugerencias/sugerencias-de-uso-9033-lemc.pdf',
        descarga: 'Sugerencia-de-uso-leer-es-mi-cuento'
      }/*,{
        id: 9028,
        titulo: '',
        autor: 'Ministerio de Cultura - MaguaRED - Maguaré',
        describe: '',
        url: 'sugerencias/wwwwwwww.pdf',
        descarga: 'Sugerencia-de-uso-xxxxx'
      }*/
    ],
}

const getters = {
    librosCeiba: state => {
      return state.libros.filter(libro => libro.coleccion == 'Maguaré en La Ceiba')
    },
    librosFiesta: state => {
      return state.libros.filter(libro => libro.coleccion == 'Fiesta de la lectura')
    },
    librosLEMC: state => {
      let temporal = state.libros.filter(libro => libro.coleccion == 'Leer es mi cuento')
      return temporal.filter(libro => libro.publico == 'maguare')
    },
    librosTodosLeeresmicuento: state => {
      return state.libros.filter(libro => libro.coleccion == 'Leer es mi cuento')
    },
    librosmaguare: state => {
      return state.libros.filter(libro => libro.publico == 'maguare')
    },
}

export default {
  namespaced: true,
  getters,
  state
}
