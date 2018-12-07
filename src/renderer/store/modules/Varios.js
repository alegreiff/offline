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
        autor: 'Susana Aristizabal - Ilustraciones: Nel',
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
        publico: 'maguare',
        describe: 'Recuerda los cuentos de infancia y lee con tus niños: Mirringa Mirronga, El renacuajo paseador, Juan Chunguero, Pastorcita, Juan Matachín, Tía Pasitrote y muchos más.',
        url: 'librosmaguare/499-pomboplatillos.pdf',
        descarga: 'LEMC-pombo-platillos'
      },{
        id: 501,
        autor: 'AUTOR',
        titulo: 'Romeo y Julieta',
        coleccion: 'Leer es mi cuento',
        publico: 'maguared',
        describe: 'Obra maestra de William Shakespeare, genio de la lengua inglesa, es la historia de amor más hermosa y trágica que jamás se haya escrito. Esta versión de los hermanos Lamb ha sido especialmente escrita para los jóvenes. ',
        url: 'leeresmicuento/501-romeoyjulieta.pdf',
        descarga: 'LEMC-romeoyjulieta'
      },{
        id: 502,
        autor: 'AUTOR',
        titulo: 'Cuentos de Las mil y una noches',
        coleccion: 'Leer es mi cuento',
        publico: 'maguared',
        describe: 'Los relatos que cada noche cuenta Sherezada al sultán constituyen uno de los libros que más ha entretenido a niños y adultos durante siglos.  Aquí encontrarás tres de estos relatos llenos de aventuras, sueños e historias de amor.',
        url: 'leeresmicuento/502-milyunanoches.pdf',
        descarga: 'LEMC-cuentosdelasmilyunanoches'
      },{
        id: 505,
        autor: 'Hermanos Grimm, Charles Perrault, Agustín Jaramillo Londoño, Infante Don Juan Manuel, Félix María Samaniego, Rafael Pombo, Rubén Darío, Víctor Eduardo Caro, Federico García Lorca',
        titulo: 'De viva voz',
        coleccion: 'Leer es mi cuento',
        publico: 'maguare',
        describe: 'Los cuentos, poemas y fábulas que presentamos en este libro tienen como propósito hacer que los lectores, niños y grandes, adquieran el gusto por las palabras. ',
        url: 'librosmaguare/505-vivavoz.pdf',
        descarga: 'LEMC-viva-voz'
      },{
        id: 507,
        autor: 'Hans Christian Andersen,  Alexander Pushkin, Joseph Jacobs, Oscar Wilde, Hermanos Grimm - Ilustración: Rafael Yockteng y Daniel Gómez.',
        titulo: 'Puro cuento',
        coleccion: 'Leer es mi cuento',
        publico: 'maguare',
        describe: 'Este título te invita a disfrutar con tus niños de las historias tradicionales que los familias europeas se contaban durante los fríos y largos inviernos.',
        url: 'librosmaguare/507-purocuento.pdf',
        descarga: 'LEMC-puro-cuento'
      },{
        id: 515,
        autor: 'Autores varios ',
        titulo: 'Canta palabras',
        coleccion: 'Leer es mi cuento',
        publico: 'maguare',
        describe: 'Canta y juega con tus niños las canciones, rondas, poemas, trabalenguas, dichos, retahílas y repeticiones. Encontrarás relatos e historias de reconocidos autores latinoamericanos.',
        url: 'librosmaguare/515-cantapalabras.pdf',
        descarga: 'LEMC-canta-palabras'
      },{
        id: 538,
        autor: 'Charls Perrrault - Hermanos Grimm',
        titulo: 'Barbas, pelos y cenizas',
        coleccion: 'Leer es mi cuento',
        publico: 'maguare',
        describe: 'Disfruta con tus niños historias de fantasía como Barba azul de Charles Perrault y Los tres pelos de oro del diablo y La Cenicienta de Los Hermanos Grimm.',
        url: 'librosmaguare/538-barbas.pdf',
        descarga: 'LEMC-barbas-pelos-cenizas'
      },{
        id: 539,
        autor: 'María Eastman- Rafael Jaramillo - Gabriela Mercedes Arciniegas - Santiago Pérez- Rocío Vélez',
        titulo: 'De animales y de niños',
        coleccion: 'Leer es mi cuento',
        publico: 'maguare',
        describe: 'Caballos, monos, niños, ratones, familias, cucarachitas, matas de mora, vaqueros, selvas, loras, gatos y hasta dulces de icaco viven en estas páginas. ¡Vamos a leer!.',
        url: 'librosmaguare/539-animalesninos.pdf',
        descarga: 'LEMC-animales-ninos'
      },{
        id: 540,
        autor: 'Horacio Benavides',
        titulo: 'Ábrete grano pequeño',
        coleccion: 'Leer es mi cuento',
        publico: 'maguare',
        describe: 'Este libro es una recopilación de las mejores adivinanzas escritas por el poeta caucano Horacio Benavides, muchas de sus adivinanzas están relacionadas con mitologías o con historias antiguas.',
        url: 'librosmaguare/540-grano.pdf',
        descarga: 'LEMC-abrete-grano'
      },{
        id: 541,
        autor: 'Hans Christian Andersen',
        titulo: 'El patito feo',
        coleccion: 'Leer es mi cuento',
        publico: 'maguare',
        describe: 'Este cuento clásico de Hans Christian Andersen, ha sido leído desde hace muchos años con emoción por lectores de todas las edades y recuerda la necesidad de aceptar a quienes piensan diferente y pertenecen a otra raza, cultura o religión.',
        url: 'librosmaguare/541-patitofeo.pdf',
        descarga: 'LEMC-patito-feo'
      },{
        id: 542,
        autor: 'José Martí',
        titulo: 'Meñique',
        coleccion: 'Leer es mi cuento',
        publico: 'maguare',
        describe: 'Esta bella historia narra cómo los hermanos Pedro, Pablo y Juancito (al que conocían como Meñique porque era tan pequeño que se podía esconder en la bota de su padre) decidieron ir a probar suerte en un reino muy particular.',
        url: 'librosmaguare/542-menique.pdf',
        descarga: 'LEMC-menique'
      },{
        id: 543,
        autor: 'F.M Samaniego',
        titulo: 'Fábulas',
        coleccion: 'Leer es mi cuento',
        publico: 'maguare',
        describe: 'Encuentra 30 fábulas de Félix María Samaniego como La cigarra y la hormiga, El león y el ratón, El ciervo en la fuente y muchas otras. Se trata de pequeños cuentos en los que hablan y actúan los animales, y que llevan a conclusiones morales.',
        url: 'librosmaguare/543-fabulas.pdf',
        descarga: 'LEMC-fabulas'
      },{
        id: 544,
        autor: 'Jeanne Marie Le Prince de Beaumont',
        titulo: 'La bella y la bestia',
        coleccion: 'Leer es mi cuento',
        publico: 'maguare',
        describe: 'Esta bella historia recuerda la tolerancia y la aceptación y habla sobre cómo la belleza de una persona no esta en su físico sino en su forma de ser, porque lo más importante es la belleza del corazón.',
        url: 'librosmaguare/544-bellabestia.pdf',
        descarga: 'LEMC-bella-bestia'
      },{
        id: 611,
        autor: 'Rudyard Kipling',
        titulo: 'Por qué el elefante tiene la trompa así',
        coleccion: 'Leer es mi cuento',
        publico: 'maguare',
        describe: 'Con estos dos cuentos los niños gozarán y se divertirán viendo cómo y por qué las cosas son como son. ¿No será, acaso, que el elefante tiene trompa y el leopardo manchas porque les pasó lo que él cuenta que les pasó?.',
        url: 'librosmaguare/611-elefantetrompa.pdf',
        descarga: 'LEMC-elefante-trompa'
      },
      {
        id: 1210,
        autor: 'Hermanos Grimm',
        titulo: 'Bosque adentro',
        coleccion: 'Leer es mi cuento',
        publico: 'maguare',
        describe: 'En este libro encontrarán los clásicos de Los Hermanos Grimm: Hansel y Gretel, Caperucita Roja, Blanca Nieves y La bella durmiente.',
        url: 'librosmaguare/bosqueadentro.pdf',
        descarga: 'LEMC-bosque-adentro'
      },{
        id: 1211,
        autor: 'Alejandro Dumas',
        titulo: 'El rey de los topos y su hija',
        coleccion: 'Leer es mi cuento',
        publico: 'maguare',
        describe: 'Esta es una historia escrita por Alejandro Dumas que refleja el amor de una madre por su hijo.',
        url: 'librosmaguare/reytopos.pdf',
        descarga: 'LEMC-rey-topos'
      },{
        id: 1220,
        autor: 'Tomás Carrasquilla',
        titulo: 'En la diestra de Dios padre',
        coleccion: 'Leer es mi cuento',
        publico: 'maguared',
        describe: 'Este cuento de Tomás Carrasquilla narra la historia de Peralta, un campesino a quien se le aparece Jesús y San Pedro.',
        url: 'leeresmicuento/1220-diestradiospadre.pdf',
        descarga: 'LEMC-enladiestradediospadre'
      },{
        id: 1221,
        autor: 'N. Hawthorne',
        titulo: 'Los pigmeos',
        coleccion: 'Leer es mi cuento',
        publico: 'maguared',
        describe: 'Este libro cuenta la historia de los Pigmeos y el gigante Anteo. Se narran sus aventuras y los momentos en que probaron su valentía.',
        url: 'leeresmicuento/1221-lospigmeos.pdf',
        descarga: 'LEMC-lospigmeos'
      },{
        id: 1222,
        autor: 'Edmundo de Amicis',
        titulo: 'El pequeño escribiento florentino',
        coleccion: 'Leer es mi cuento',
        publico: 'maguared',
        describe: 'Esta historia invita a pensar el significado de la familia y el rol que cumple cada miembro para aportar al bienestar general.',
        url: 'leeresmicuento/1222-escribiente.pdf',
        descarga: 'LEMC-escribienteflorentino'
      },{
        id: 1223,
        autor: 'Miguel de Cervantes',
        titulo: 'Don Quijote de la Mancha',
        coleccion: 'Leer es mi cuento',
        publico: 'maguared',
        describe: 'Aquí encuentra los apítulos 1 y 7 de la obra literaria más famosa que se haya escrito en español.',
        url: 'leeresmicuento/1223-quijote.pdf',
        descarga: 'LEMC-donquijote'
      },{
        id: 1226,
        autor: 'Autores varios',
        titulo: 'Poesía en español',
        coleccion: 'Leer es mi cuento',
        publico: 'maguared',
        describe: 'Este libro reúne algunos de los mejores poemas clásicos de la lengua española para disfrutar con los niños.',
        url: 'leeresmicuento/1226-poesiaenespanol.pdf',
        descarga: 'LEMC-poesiaespanol'
      },{
        id: 1227,
        autor: 'Robert Louis Stevenson',
        titulo: 'El diablo en la botella',
        coleccion: 'Leer es mi cuento',
        publico: 'maguared',
        describe: 'Robert Louis Stevenson escribe en esta novela la historia de Keawe, un hombre trabajador que va a perder su alma para siempre.',
        url: 'leeresmicuento/1227-diablobotella.pdf',
        descarga: 'LEMC-eldiabloenlabotella'
      },{
        id: 1228,
        autor: 'Horacio Quiroga',
        titulo: 'Cuentos de la selva',
        coleccion: 'Leer es mi cuento',
        publico: 'maguared',
        describe: 'Este libro de Horacio Quiroga retrata la fuerza trágica del encuentro entre el hombre y la naturaleza.',
        url: 'leeresmicuento/1228-cuentosselva.pdf',
        descarga: 'LEMC-cuentosdelaselva'
      },{
        id: 1229,
        autor: 'Charles Lamb',
        titulo: 'Aventuras de Ulises',
        coleccion: 'Leer es mi cuento',
        publico: 'maguared',
        describe: 'Este libro narra las aventuras que pasó Ulises para volver a su casa junto a su familia.',
        url: 'leeresmicuento/1229-ulises.pdf',
        descarga: 'LEMC-aventurasdeulises'
      },{
        id: 1230,
        autor: 'Fernán Caballeros',
        titulo: 'Don Juan Bolondrón',
        coleccion: 'Leer es mi cuento',
        publico: 'maguared',
        describe: 'Los cuentos ­Don Juan Bolondrón y La suegra del diablo han sido narrados por las familias españolas desde hace cientos de años.',
        url: 'leeresmicuento/1230-juanbolondron.pdf',
        descarga: 'LEMC-donjuanbolondron'
      },{
        id: 612,
        autor: 'Autores varios',
        titulo: 'Canciones, rondas, nanas, retahílas y adivinanzas',
        coleccion: 'Leer es mi cuento',
        publico: 'maguare',
        describe: 'Juguemos con las palabras, canta con ellas, traba la lengua y destrábala otra vez, vamos: "Pedro Pérez Pereira, pobre pintor portugués, pinta paisajes por poco precio, para poder pasar por París". ¿Pudiste decirlo? ¡Ahora dilo aún más rápido!.',
        url: 'librosmaguare/612-cancionesrondas.pdf',
        descarga: 'LEMC-canciones-rondas'
      },{
        id: 618,
        autor: 'Maritza Sanchez, Carlos Millán, Lizardo Carvajal, Oscar García, Amalia Satizábal',
        titulo: 'El frenético baile de Chip',
        coleccion: 'Maguaré en La Ceiba',
        publico: 'maguare',
        describe: 'Chip la perezosa se levantó muy dispuesta para dar su clase de aeróbicos y para hacer deporte se mantiene muy bien hidratada. Pero Chip ha tomado más agua de la cuenta… ¡Un baño, por favor!',
        url: 'librosmaguare/maguare-frenetico-baile-chip.pdf',
        descarga: 'CEIBA-elbailefreneticodechip'
      },
      {
        id: 619,
        autor: 'Maritza Sanchez, Carlos Millán, Lizardo Carvajal, Oscar García, Amalia Satizábal',
        titulo: 'El libro perdido de Gigi',
        coleccion: 'Maguaré en La Ceiba',
        publico: 'maguare',
        describe: 'Saimiri es un gran lector y quiere terminar de leer una historia, pero no aparece el segundo libro que cuenta el final. Con la ayuda de Gigi la tortuga emprenden la aventura de encontrar el libro perdido.',
        url: 'librosmaguare/maguare-libro-perdido-gigi.pdf',
        descarga: 'CEIBA-ellibroperdidodegigi'
      },
      {
        id: 620,
        autor: 'Maritza Sanchez, Carlos Millán, Lizardo Carvajal, Oscar García, Amalia Satizábal',
        titulo: 'El viaje de la familia Cuy',
        coleccion: 'Maguaré en La Ceiba',
        publico: 'maguare',
        describe: '¿Cómo hacen Linio y Tulita los dos papás cuyes para salir de paseo con sus hijos?. No debe ser nada fácil… porque son ¡27 cuyecitos!',
        url: 'librosmaguare/maguare-viaje-familia-cuy.pdf',
        descarga: 'CEIBA-elviajedelafamiliacuy'
      },
      {
        id: 621,
        autor: 'Maritza Sanchez, Carlos Millán, Lizardo Carvajal, Oscar García, Amalia Satizábal',
        titulo: 'El cumpleaños de Rosalinda',
        coleccion: 'Maguaré en La Ceiba',
        publico: 'maguare',
        describe: 'Rosalinda la camaleona cambia de color según como se sienta y hoy está azul porque parece que todos olvidaron su cumpleaños. En todo el día no ha recibido ni un abrazo ni un te quiero. ¿Cómo hacer para que se ponga feliz, color arcoiris?',
        url: 'librosmaguare/maguare-rosalinda.pdf',
        descarga: 'CEIBA-elcumpleanosderosalinda'
      },
      {
        id: 622,
        autor: 'Maritza Sanchez, Carlos Millán, Lizardo Carvajal, Oscar García, Amalia Satizábal',
        titulo: 'La memoria del abuelo',
        coleccion: 'Maguaré en La Ceiba',
        publico: 'maguare',
        describe: 'El abuelo Emiliano lo olvida todo, todo, todo… bueno no se le olvidan las cosas que averguenzan a Rani y a Gildardo. ¡Abuelo Emiliano ejercita tu memoria con un sudoku!',
        url: 'librosmaguare/maguare-memoria-abuelo.pdf',
        descarga: 'CEIBA-lamemoriadelabuelo'
      },{
        id: 623,
        autor: 'Maritza Sanchez, Carlos Millán, Lizardo Carvajal, Oscar García, Amalia Satizábal',
        titulo: 'Una sopa para la fiesta',
        coleccion: 'Maguaré en La Ceiba',
        publico: 'maguare',
        describe: '¡Las trillizas Adriana, Juliana y Eliana son terribles!. No se quedan quietas nunca y sus travesuras desesperan a más de uno en la Ceiba. Sin embargo parecen tener un don especial para transformar cualquier situación por crítica que parezca. ¿Qué hicieron ahora estas Terrillizas?.',
        url: 'librosmaguare/maguare-sopa-fiesta.pdf',
        descarga: 'CEIBA-unasopaparalafiesta'
      }

    ],
    /* Serie 9000*/
    sugerencias: [
      {
        id: 9001,
        titulo: 'Bosqueconcierto',
        autor: 'AUTOR',
        describe: 'descripción breve del contenido. En una frase',
        url: 'sugerencias/sugerencias-de-uso-9001-bosqueconcierto.pdf'
      },
      {
        id: 9002,
        titulo: 'Tu Rockcito',
        autor: 'AUTOR',
        describe: 'descripción breve del contenido. En una frase',
        url: 'sugerencias/sugerencias-de-uso-9002-turockcito.pdf'
      },{
        id: 9003,
        titulo: 'Jacana Jacana',
        autor: 'AUTOR',
        describe: 'descripción breve del contenido. En una frase',
        url: 'sugerencias/sugerencias-de-uso-9003-jacana.pdf'
      },{
        id: 9004,
        titulo: 'Cantos de agua',
        autor: 'AUTOR',
        describe: 'descripción breve del contenido. En una frase',
        url: 'sugerencias/sugerencias-de-uso-9004-cantosdeagua.pdf'
      },{
        id: 9005,
        titulo: 'Tamborecos',
        autor: 'AUTOR',
        describe: 'descripción breve del contenido. En una frase',
        url: 'sugerencias/sugerencias-de-uso-9005-tamborecos.pdf'
      },{
        id: 9006,
        titulo: 'Pipo',
        autor: 'AUTOR',
        describe: 'descripción breve del contenido. En una frase',
        url: 'sugerencias/sugerencias-de-uso-9006-pipo.pdf'
      },{
        id: 9007,
        titulo: 'Ana Pirata',
        autor: 'AUTOR',
        describe: 'descripción breve del contenido. En una frase',
        url: 'sugerencias/sugerencias-de-uso-9007-anapirata.pdf'
      },{
        id: 9008,
        titulo: 'Camusi Camusi',
        autor: 'AUTOR',
        describe: 'descripción breve del contenido. En una frase',
        url: 'sugerencias/sugerencias-de-uso-9008-camusi.pdf'
      },{
        id: 9009,
        titulo: 'Adivinanzas',
        autor: 'AUTOR',
        describe: 'descripción breve del contenido. En una frase',
        url: 'sugerencias/sugerencias-de-uso-9009-adivinanzas.pdf'
      },{
        id: 9010,
        titulo: 'Arrullos',
        autor: 'AUTOR',
        describe: 'descripción breve del contenido. En una frase',
        url: 'sugerencias/sugerencias-de-uso-9010-arrullos.pdf'
      },{
        id: 9011,
        titulo: 'Crea con colores',
        autor: 'AUTOR',
        describe: 'descripción breve del contenido. En una frase',
        url: 'sugerencias/sugerencias-de-uso-9011-creaconcolores.pdf'
      },{
        id: 9012,
        titulo: 'Cuentos al oído',
        autor: 'AUTOR',
        describe: 'descripción breve del contenido. En una frase',
        url: 'sugerencias/sugerencias-de-uso-9012-cuentosaloido.pdf'
      },{
        id: 9013,
        titulo: 'Cuentos interactivos',
        autor: 'AUTOR',
        describe: 'descripción breve del contenido. En una frase',
        url: 'sugerencias/sugerencias-de-uso-9013-cuentosinteractivos.pdf'
      },{
        id: 9014,
        titulo: 'Cuentos narrados',
        autor: 'AUTOR',
        describe: 'descripción breve del contenido. En una frase',
        url: 'sugerencias/sugerencias-de-uso-9014-cuentosnarrados.pdf'
      },{
        id: 9015,
        titulo: 'Historias contadas',
        autor: 'AUTOR',
        describe: 'descripción breve del contenido. En una frase',
        url: 'sugerencias/sugerencias-de-uso-9015-historias.pdf'
      },{
        id: 9016,
        titulo: 'SAI sabiduría ancestral',
        autor: 'AUTOR',
        describe: 'descripción breve del contenido. En una frase',
        url: 'sugerencias/sugerencias-de-uso-9016-sai.pdf'
      },{
        id: 9017,
        titulo: 'Sana que sana',
        autor: 'AUTOR',
        describe: 'descripción breve del contenido. En una frase',
        url: 'sugerencias/sugerencias-de-uso-9017-sanaquesana.pdf'
      },{
        id: 9018,
        titulo: 'Buen comienzo',
        autor: 'AUTOR',
        describe: 'descripción breve del contenido. En una frase',
        url: 'sugerencias/sugerencias-de-uso-9018-buencomienzo.pdf'
      },{
        id: 9019,
        titulo: 'Karaokes',
        autor: 'AUTOR',
        describe: 'descripción breve del contenido. En una frase',
        url: 'sugerencias/sugerencias-de-uso-9019-karaokes.pdf'
      },{
        id: 9020,
        titulo: 'Trabalenguas',
        autor: 'AUTOR',
        describe: 'descripción breve del contenido. En una frase',
        url: 'sugerencias/sugerencias-de-uso-9020-trabalenguas.pdf'
      },{
        id: 9021,
        titulo: 'Chigüiro',
        autor: 'AUTOR',
        describe: 'descripción breve del contenido. En una frase',
        url: 'sugerencias/sugerencias-de-uso-9021-chiguiro.pdf'
      },{
        id: 9022,
        titulo: 'Cuentos de Maguaré',
        autor: 'AUTOR',
        describe: 'descripción breve del contenido. En una frase',
        url: 'sugerencias/sugerencias-de-uso-9022-cuentosmaguare.pdf'
      },{
        id: 9023,
        titulo: 'Canciones de Maguaré',
        autor: 'AUTOR',
        describe: 'descripción breve del contenido. En una frase',
        url: 'sugerencias/sugerencias-de-uso-9023-cancionesmaguare.pdf'
      },
    ]
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
