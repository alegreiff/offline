const state = {
  videos: [
    { id: 70,
      autor: 'Ministerio de Cultura - Maguaré - The Bucket - Audio de María del Sol Peralta',
      coleccion: 'Karaokes',
      titulo: 'El piojo - Karaoke',
      describe: 'El piojo chef ama cocinar, aunque utiliza ingredientes que se encuentra en las cabezas. Un divertido y colorido video animado que ilustra la variedad de platos "muy especiales" que prepara este chef para tí. ¿Cuál es la receta que más te gusta?',
      url: '70-elpiojo.mp4'
    },
    { id: 118,
      autor: 'Ministerio de Cultura - Maguaré - Observatorio del Caribe Colombiano',
      coleccion: 'Sweet songs fi piknini. Canciones dulces para niños.',
      titulo: 'Miss Lucy - Karaoke',
      describe: 'Una canción afroamericana del archipiélago de San Andrés y Providencia, que cuenta la historia de un pequeño niño travieso quien al comer jabón provoca que entre varios remedios él deba votar por la cura que mejor le parece. ¿A qué te gusta jugar cuando tomas tu baño en una tina?',
      url: '118-misslucy.mp4'
    },
    { id: 125,
      autor: 'Ministerio de Cultura - Maguaré - Audio de Tortuguita, Vení bailá',
      coleccion: 'Fiesta de la lectura',
      titulo: 'El abuelo tigre - Karaoke',
      describe: 'Los uitotos son indígenas colombianos que viven en el Amazonas. En este karaoke puedes escuchar y cantar esta melodía en su lengua nativa que recuerda el día en que el tigre y la lluvia hicieron una apuesta para ver quién era el más poderoso. ¿Sabes algunas palabras en otras lenguas que no sea el español?',
      url: '125-abuelotigre.mp4'
    },
    { id: 132,
      autor: 'Ministerio de Cultura - Maguaré - Audio de Jorge Luis Valencia Chica / Canturriando',
      coleccion: 'Karaokes',
      titulo: 'Poema a la lluvia - Karaoke',
      describe: 'Cuando llueve suceden muchas cosas, por ejemplo, las nubes grises y gordas vuelan por ahí junto con las hojas que bailan y giran con el viento. Y tú ¿qué haces cuando te mojas con la lluvia?',
      url: '132-poemalluvia.mp4'
    },
    { id: 134,
      autor: 'Ministerio de Cultura - Maguaré - Audio de María Teresa Martínez Azcárate',
      coleccion: 'Karaokes',
      titulo: 'Casi volando sube - Karaoke',
      describe: 'Los ascensores suben y bajan muy rápido para mover a las personas en edificios de muchos pisos. ¿Qué sientes cuando subes muy alto y cuando bajas hasta el piso como lo hace un ascensor?',
      url: '134-casivolando.mp4'
    },
    { id: 137,
      autor: 'Ministerio de Cultura - Maguaré - Audio de Yeny Tandioy Chindoy',
      coleccion: 'Karaokes',
      titulo: 'Bacetemëng Oyejuayëng (Niños Felices) - Karaoke',
      describe: 'Escucha una lengua diferente, la lengua del grupo indígena Kamëntšá o Kamsá que viven en el Valle del Sibundoy en el Putumayo. Ellos tienen mucho por enseñarte con sus tradiciones. ¿Has escuchado otras canciones en lenguas nativas?',
      url: '137-ninosfelices.mp4'
    },
    { id: 138,
      autor: 'Ministerio de Cultura - Maguaré - Observatorio del Caribe Colombiano',
      coleccion: 'Sweet songs fi piknini. Canciones dulces para niños.',
      titulo: 'Clap han - Karaoke',
      describe: 'El creole es la lengua que hablan los habitante nativos del Archipiélago de San Andrés y Providencia. Este karaoke te enseña una canción adaptada a esta lengua para la hora de ir a dormir.  ¿Qué te gusta que te canten cuando te vas a dormir?',
      url: '138-claphan.mp4'
    },
    { id: 176,
      autor: 'Ministerio de Cultura - Maguaré - Observatorio del Caribe Colombiano',
      coleccion: 'Sweet songs fi piknini. Canciones dulces para niños.',
      titulo: 'Out and through the window - Karaoke',
      describe: 'Esta ronda nos cuenta una historia de amor que inicia en una ventana en el Archipiélago de San Andrés y Providencia y cruza el océano. La música isleña se nutre de la historia de los ingleses que colonizaron el Caribe y los africanos que llegaron allí a trabajar. ¡Vamos a cantar al ritmo de las olas del mar!',
      url: '176-out.mp4'
    },
    { id: 282,
      autor: 'Ministerio de Cultura - ICBF - Centro Ático - Audio de Tortuguita, Vení bailá',
      coleccion: 'Fiesta de la lectura',
      titulo: 'Tiki, tiki, tai - Video',
      describe: 'El pueblo Rrom o gitano tiene sus propias canciones en su idioma. El video de esta canción cuenta la historia de una pequeña niña que quiere jugar con su mariposa y la podrás escuchar en su lengua original y también en español. ¿Cuáles son las mariposas que más te gustan?',
      url: '282-tiki.mp4'
    },
    { id: 283,
      autor: 'Ministerio de Cultura - ICBF - Centro Ático - Audio de Tortuguita, Vení bailá',
      coleccion: 'Fiesta de la lectura',
      titulo: 'Tortuguita, vení bailá - Video',
      describe: 'Si tienes ganas de bailar este video es para tí. ¡Imagina una tortuguita que no le gusta hacer nada más que bailar! ¿Cuál es el ritmo que más te gusta bailar y cómo lo bailas?',
      url: '283-tortuguita.mp4'
    },
    { id: 284,
      autor: 'Ministerio de Cultura - ICBF - Centro Ático - Audio de Tortuguita, Vení bailá',
      coleccion: 'Fiesta de la lectura',
      titulo: 'Si no te dormís - Video',
      describe: 'La hora de dormir es muy importante, cierra tus ojos rápidamente o un lobito vendrá, ¡pero no te asustes que sólo te acompañará! ¿Qué te gusta que te canten cuando te vas a dormir?',
      url: '284-dormis.mp4'
    },
    { id: 285,
      autor: 'Ministerio de Cultura - ICBF - Centro Ático - Audio de Tortuguita, Vení bailá',
      coleccion: 'Fiesta de la lectura',
      titulo: 'Se fue el sol - Video',
      describe: 'Cuando se esconde el sol es hora de descansar para madrugar e ir a la escuela ¡o jugar en casa! El pueblo indígena Kamëntsá te invita a ver este video en el que con su propio idioma (y también en español) te cuentan qué hacen cuando se va el sol. ¿Tú que haces cuando se esconde el sol?',
      url: '285-sefueelsol.mp4'
    },
    { id: 286,
      autor: 'Ministerio de Cultura - ICBF - Centro Ático - Audio de Tortuguita, Vení bailá',
      coleccion: 'Fiesta de la lectura',
      titulo: 'Putunkaa Serruma - Video',
      describe: 'Los indígenas Wayú viven en la Guajira y tienen su propio idioma, el wayuunaiki. Este video te invita a escuchar una canción (también en español) con la que las mamás arrullan a sus hijos pequeños y los alientan a dormir mientras les llevan los alimentos. ¿A ti qué te gusta que te canten para dormir?',
      url: '286-putunka.mp4'
    },
    { id: 287,
      autor: 'Ministerio de Cultura - ICBF - Maguaré - Audio de Tortuguita, Vení bailá',
      coleccion: 'Fiesta de la lectura',
      titulo: 'Tindero - Karaoke',
      describe: 'En los campos de San Jacinto, en el departamento de Bolívar, desde hace varias generaciones se canta y se baila esta canción. Tambores, gaitas y voces se confunden para crear un juego cantado.',
      url: '287-tindero.mp4'
    },
    { id: 288,
      autor: 'Ministerio de Cultura - ICBF - Maguaré - Audio de Tortuguita, Vení bailá',
      coleccion: 'Fiesta de la lectura',
      titulo: 'Palmita con manteca - Karaoke',
      describe: 'Conoce a un pequeño niño y su familia en la costa colombiana. El papá de este bebé morenito que vive en San Basilio de Palenque ya no le dio más chancleta de la que pega, sino que se la entregó en la mano y el bebé corrió hacia su mamá, riendo.',
      url: '288-palmita.mp4'
    },
    { id: 418,
      autor: 'Ministerio de Cultura - Rafael Pombo',
      coleccion: 'Cuentos narrados',
      titulo: 'Pastorcita - Video',
      describe: 'Pastorcita perdió a sus ovejas. Cuando ellas solas regresaron no tenían colas, estaban secándose al sol en las ramas de un viejo árbol. Pastorcita las tomó y una a una todas las colas a sus dueñas devolvió. ¿Cómo sacarías a pasear tantas ovejas?',
      url: '418-pastorcita.mp4'
    },
    { id: 419,
      autor: 'Ministerio de Cultura - Rafael Pombo',
      coleccion: 'Cuentos narrados',
      titulo: 'Juan Matachín - Video',
      describe: 'Juan Matachín viste su traje de general y tiene todas las herramientas para defenderse de quien lo insulte. Descubre cómo los enfrentará. ¿Te animarías a crear tu propio traje de general?',
      url: '419-matachin.mp4'
    },
    { id: 420,
      autor: 'Ministerio de Cultura - Rafael Pombo',
      coleccion: 'Cuentos narrados',
      titulo: 'Juaco el ballenero - Video',
      describe: 'El capitán de Juaco quería cazar una enorme ballena, pero ella dio un sacudón y mandó al barco y al capitán hasta la luna. Juaco no lo ha podido visitar porque no sabe el camino y tampoco tiene dinero para llegar. ¿Te imaginas cómo sería tener una amiga ballena?',
      url: '420-joacoelballenero.mp4'
    },
    { id: 421,
      autor: 'Ministerio de Cultura - Rafael Pombo',
      coleccion: 'Cuentos narrados',
      titulo: 'La marrana peripuesta - Video',
      describe: 'Un mono adornó con flores a una marrana y ella, al verse tan hermosa, se empezó a contonear en medio de todos los animales. ¿Qué le pasaría a la marrana adornada?, ¿cómo adornarías tú a tu animal favorito?',
      url: '421-marrana.mp4'
    },
    { id: 422,
      autor: 'Ministerio de Cultura - Rafael Pombo',
      coleccion: 'Cuentos narrados',
      titulo: 'Las siete vidas del gato - Video',
      describe: 'El gato Mambrú conversa con el lebrel Perdonavidas pues el lebrel desea saber el gran secreto para tener siete vidas. Descubre el secreto del gato Mambrú. ¿Qué crees que hace un gato en cada una de sus vidas?',
      url: '422-sietevidasgato.mp4'
    },
    { id: 423,
      autor: 'Ministerio de Cultura - Rafael Pombo',
      coleccion: 'Cuentos narrados',
      titulo: 'El niño y la mariposa - Video',
      describe: 'Un niño le pide a la mariposa que le regale sus alas. Descubre lo que hará el niño para hacerla feliz. ¿Sobre qué hablarías tú con una mariposa?',
      url: '423-ninomariposa.mp4'
    },
    { id: 424,
      autor: 'Ministerio de Cultura - Joseph Jacobs',
      coleccion: 'Cuentos narrados',
      titulo: 'La historia de los tres cerditos - Video',
      describe: 'Tres cerditos hermanos se encuentran con el lobo. ¿Qué les sucederá al de la casa de paja y al de la casa de ramas?, ¿qué hará al cerdito que construyó su casa con ladrillos?, ¿cómo construirías una casa que un lobo nunca pudiera derribar?',
      url: '424-trescerditos.mp4'
    },
    { id: 425,
      autor: 'Ministerio de Cultura - Rafael Pombo',
      coleccion: 'Cuentos narrados',
      titulo: 'La pobre viejecita - Video',
      describe: 'Esta es la historia de una pobre viejecita que de pobre no tenía nada. Descubre todo lo que guardaba esta dama en su casa.',
      url: '425-viejecita.mp4'
    },
    { id: 426,
      autor: 'Ministerio de cultura - Hans Christian Andersen',
      coleccion: 'Cuentos narrados',
      titulo: 'La princesa y la alverja - Video',
      describe: 'Esta es la historia de un príncipe que desea encontrar una princesa de verdad. En una noche de tormenta, una joven princesa llama a las puertas de la ciudad y la anciana reina descubrirá si en realidad se trata de una princesa auténtica. ¿Qué te gustaría hacer si fueras el rey o la reina de un castillo?',
      url: '426-princesaalverja.mp4'
    },
    { id: 463,
      autor: 'Ministerio de Cultura - Maguaré',
      coleccion: '',
      titulo: 'La pijamada de Saimiri',
      describe: 'Un día Saimiri invitó a sus amigos a la casa del árbol para hacer una pijamada, pero cada uno quería jugar una cosa diferente. ¿Será que lograron ponerse de acuerdo?',
      url: '463-pijamadasaimiri.mp4'
    },
    { id: 632,
      autor: 'Ministerio de Cultura - Maguaré - Ricardo Prado - Neyber Lenis',
      coleccion: 'Karaokes de Maguaré en La Ceiba',
      titulo: 'La fiesta de Arma DJ - Karaoke',
      describe: 'Arma DJ es un armadillo que desde temprano toca su música para que todos se pongan a cantar y a bailar. Es el mejor DJ de La Ceiba y todos aman asistir a sus fiestas. ¿Y a ti, te gustó esta canción?',
      url: '632-armadj.mp4'
    },
    { id: 633,
      autor: 'Ministerio de Cultura - Maguaré - Ricardo Prado - Neyber Lenis',
      coleccion: 'Karaokes de Maguaré en La Ceiba',
      titulo: 'Ñame, ñame, ummm - Karaoke',
      describe: '¿Cuáles son tus platos favoritos?, ¿prefieres tamales o un buen sancocho? Con Bertilda y Edilberto sabrás cómo se preparan deliciosos platos colombianos.',
      url: '633-namename.mp4'
    },
    { id: 634,
      autor: 'Ministerio de Cultura - Maguaré - Ricardo Prado - Neyber Lenis',
      coleccion: 'Karaokes de Maguaré en La Ceiba',
      titulo: 'Los menjurjes de Gildardo - Karaoke',
      describe: 'Gildardo es un olinguito que vende desde bolitas de vidrio hasta remedios para el dolor de barriga. ¡Te retamos para que cantes esta canción sin soltar una carcajada!',
      url: '634-menjurjes.mp4'
    },
    { id: 635,
      autor: 'Ministerio de Cultura - Maguaré - Ricardo Prado - Neyber Lenis',
      coleccion: 'Karaokes de Maguaré en La Ceiba',
      titulo: '27 guagüitas - Karaoke',
      describe: 'Un papá y una mamá siempre están pendientes de sus hijitos, de darles de comer, de bañarlos y acostarlos a dormir… ¿pero cómo hacen los papás de 27 cuyecitos?',
      url: '635-guaguitas.mp4'
    },
    { id: 636,
      autor: 'Ministerio de Cultura - Maguaré - Ricardo Prado - Neyber Lenis',
      coleccion: 'Karaokes de Maguaré en La Ceiba',
      titulo: 'El convite en la ceiba - Karaoke',
      describe: 'Saimiri el monito ardilla de La Ceiba nos presenta a todos y cada uno de los vecinos de la comunidad, con la ayuda del abuelo Emiliano los invita a... a... a... ¿a qué es que los invita?',
      url: '636-conviteselva.mp4'
    },
    { id: 637,
      autor: 'Ministerio de Cultura - Maguaré - Ricardo Prado - Neyber Lenis',
      coleccion: 'Karaokes de Maguaré en La Ceiba',
      titulo: 'Pite que repite - Karaoke',
      describe: 'Maya la guacamaya todo lo quiere contar, no se puede quedar calladita porque todo lo que pasa en La Ceiba para ella es una gran noticia. ¿Te atreves a cantar como lo hace Maya?',
      url: '637-piterepite.mp4'
    },
    { id: 638,
      autor: 'Ministerio de Cultura - Maguaré - Ricardo Prado - Neyber Lenis',
      coleccion: 'Karaokes de Maguaré en La Ceiba',
      titulo: 'Me encanta ser actriz - Karaoke',
      describe: 'Rani es una rana que viene del Chocó y es una gran diva, ella es la reina del drama en La Ceiba. En esta canción Rani nos muestra cómo transmitir las emociones más intensas.',
      url: '638-rani.mp4'
    },
    { id: 639,
      autor: 'Ministerio de Cultura - Maguaré - Ricardo Prado - Neyber Lenis',
      coleccion: 'Karaokes de Maguaré en La Ceiba',
      titulo: 'La canción sin canción - Karaoke',
      describe: 'Eliana no puede oir, Adriana no puede ver y a Juliana le falta un diente. Sin embargo las tres juntas son las más poderosas. ¡Con ustedes, las terrillizas!',
      url: '639-cancionsincancion.mp4'
    },
    { id: 113,
      autor: 'Ministerio de Cultura - Maguaré - Audio de Paula Ríos',
      coleccion: 'Karaokes',
      titulo: 'Las olas del mar - Karaoke',
      describe: 'Navegar por entre el mar es una experiencia muy divertida. Este karaoke te lleva por el mundo de las olas que suben, bajan y van para todos lados. ¿Has visitado el mar?, ¿qué es lo que más te gusta de las olas?',
      url: '113-olasdelmar.mp4'
    },{ id: 114,
      autor: 'Ministerio de Cultura - Maguaré - Zumba que zumba',
      coleccion: 'Karaokes',
      titulo: 'Cartas del río - Karaoke',
      describe: 'Las cartas pueden atravesar ciudades y pueblos. De muy lejos llegan cartas y traen noticias muy divertidas de los pueblos de Colombia en este karaoke para cantar y bailar. ¿Qué te gustaría contarle en una carta a un niño de otro pueblo?',
      url: '114-cartasdelrio.mp4'
    },{ id: 115,
      autor: 'Ministerio de Cultura - Maguaré - Zumba que zumba',
      coleccion: 'Karaokes',
      titulo: 'El delfín rosado - Karaoke',
      describe: 'Este karaoke cuenta la historia de un delfín rosado a quien le costaba un poco de trabajo prestar sus juguetes a sus otros amigos del río. Canta y entérate qué le ocurrió a este delfín. ¿Qué te gusta jugar cuando compartes tus juguetes?',
      url: '115-delfin.mp4'
    },{ id: 117,
      autor: 'Ministerio de Cultura - Maguaré - Audio de Marta Inés Gómez Gómez',
      coleccion: 'Karaokes',
      titulo: 'Caminando va - Karaoke',
      describe: 'Un caracol camina con su propia casa y descubre un camino lleno de curiosidades hasta el cansancio. Descubre en este karaoke qué es lo que más le gusta hacer al caracol cuando recorre nuevos caminos. ¿Qué te gusta hacer cuando exploras un nuevo lugar?',
      url: '117-caminandova.mp4'
    },{ id: 109,
      autor: 'Ministerio de Cultura - Maguaré - Con mi cuento encanto',
      coleccion: 'Karaokes',
      titulo: 'Los ratones- Karaoke',
      describe: 'Encontrarás divertidos ratones, sus quesos y gatos que juegan con ellos en este karaoke que te invita a conocer la suerte de algunos ratones. ¿Qué sabes sobre la vida de los ratones?',
      url: '109-losratones.mp4'
    },{ id: 120,
      autor: 'Ministerio de Cultura - Maguaré - Zumba que zumba ',
      coleccion: 'Karaokes',
      titulo: 'Zumba que zumba - Karaoke',
      describe: 'Papá se ha comido unas pepitas que no son precisamente para comer, ¿quizás algún animal se entró a su barriga? Descubre que le pasó al papá en este karaoke. ¿Alguna vez has comido algo que te de dolor de barriga?',
      url: '120-zumbaquezumba.mp4'
    },{ id: 121,
      autor: 'Ministerio de Cultura - Maguaré - Zumba que zumba ',
      coleccion: 'Karaokes',
      titulo: 'La casa de Valentín - Karaoke',
      describe: 'Un glotón se comió la casita de Valentín, chiquitín y ahora no tiene donde vivir. Este karaoke te invita a cantar con la historia de esta deliciosa casita que terminó en la panza del glotón. ¿Cómo construirías una casa para Valentín?',
      url: '121-valentin.mp4'
    },{ id: 135,
      autor: 'Ministerio de Cultura - Maguaré - Con mi cuento encanto',
      coleccion: 'Karaokes',
      titulo: 'La araña - Karaoke',
      describe: 'Las arañas pueden ser un poco traviesas. En este karaoke conoce a una arañita que dedica su día a pasear con su telaraña y en el camino se encuentra con mucha diversión. ¿Cómo te imaginas que sería moverte entre telarañas?',
      url: '135-laarana.mp4'
    },{ id: 136,
      autor: 'Ministerio de Cultura - Maguaré - Con mi cuento encanto',
      coleccion: 'Karaokes',
      titulo: 'Niña bonita - Karaoke',
      describe: 'Imagina un conejo un poco travieso que cae en una piscina de tinta. ¿Quieres saber qué le pasó? Este karaoke te cuenta que pasó con el conejito. ¿Alguna vez te has untado de tinta?, ¿qué sentiste?',
      url: '136-ninabonita.mp4'
    },{ id: 139,
      autor: 'Ministerio de Cultura - Maguaré - Audio de María del Sol Peralta / Cantaclaro',
      coleccion: 'Karaokes',
      titulo: 'Mi pequeño morral - Video',
      describe: 'Una almohada, una carpa, una cobija, un vestido, miles de cosas caben en un pequeño morral cuando se tiene mucha imaginación. En este karaoke puedes conocer cuántas cosas es posible llevar en un morral para recorrer el mundo. ¿Qué te gusta guardar en tu pequeño morral?',
      url: '139-morral.mp4'
    },{ id: 140,
      autor: 'Ministerio de Cultura - Maguaré - Zumba que zumba ',
      coleccion: 'Karaokes',
      titulo: 'A los monos les duele la barriga - Karaoke',
      describe: 'Una casa llena de animales: patos, monos y vacas azules que juegan hasta caer la noche. Canta con este karaoke y descubre lo mágico que puede ser jugar con los animales. ¿Cuáles son los animales con los que te gustaría jugar hasta el cansancio?',
      url: '140-monosbarriga.mp4'
    },{ id: 281,
      autor: 'Ministerio de Cultura - Maguaré - audio de fundación Uaman Luar',
      coleccion: 'Karaokes',
      titulo: 'Saludo bonito',
      describe: 'A los niños indígenas de Colombia les encanta cantar y en este video comparten una canción en la que un niño saluda a su tío que se encuentra a su paso. Nuestros mayores siempre tienen mucho que enseñarnos, escucha esta canción y pídele a quien te esté acompañando que te cuente lo que significa en español. ¿Qué te gusta que te cuenten tus mayores?',
      url: '281-saludobonito.mp4'
    },{ id: 67,
      autor: 'Ministerio de Cultura - Maguaré - Zumba que zumba ',
      coleccion: 'Zumba que zumba',
      titulo: 'El bebé león - Video',
      describe: 'La historia de un bebé león que sueña con ser un oso pesado y peludo en un video animado que combina las voces de los niños con los colores de los animales de la selva. ¿Has pensado qué animal te gustaría ser?',
      url: '67-bebeleon.mp4'
    },{ id: 778,
      autor: 'Ministerio de Cultura - Maguaré - Zumba que zumba ',
      coleccion: 'Zumba que zumba',
      titulo: 'Cuento Zumba que Zumba - Video',
      describe: 'Los niños del Quindío cuentan qué es el café, cómo son las avispas y que hasta las águilas sienten miedo. En esta historia sabremos qué sucede cuando a un papá lo pica una abeja en la lengua.',
      url: '778-zumbacuento.mp4'
    },{ id: 779,
      autor: 'Ministerio de Cultura - Maguaré - Zumba que zumba ',
      coleccion: 'Zumba que zumba',
      titulo: 'Tuc Nopa Pip - Video',
      describe: 'La historia de un cocodrilo que vivía en una casa de palitos en el mar. En la casa del frente vio a diferentes corazones que sonaban distinto y los invitó a su casa a comer galletas. ¿Qué pasaría cuando se reunieron los corazones?',
      url: '779-tucnopapip.mp4'
    },{ id: 780,
      autor: 'Ministerio de Cultura - Maguaré - Zumba que zumba ',
      coleccion: 'Zumba que zumba',
      titulo: 'Tiburón azul - Video',
      describe: 'El tiburón azul tiene una profesora muy particular ¡Se trata de una cocodrila que le enseña a caminar! Mira este divertido cuento y descubre qué le pasó al tiburón cuando aprendía a dar sus pasos.',
      url: '780-tiburon.mp4'
    }
  ]
}

const mutations = {
  DECREMENT_MAIN_COUNTER (state) {
    state.main--
  },
  INCREMENT_MAIN_COUNTER (state) {
    state.main++
  }
}

const actions = {
  someAsyncTask ({ commit }) {
    // do something async
    commit('INCREMENT_MAIN_COUNTER')
  }
}
/*

Karaokes Maguaré
Sweet songs fi piknini. Canciones dulces para niños.
Fiesta de la lectura
Cuentos narrados
Karaokes de Maguaré en La Ceiba
vidKaraokes, vidSweet, vidFiesta, vidCeiba, vidAllKar, todos

*/
const getters = {
    vidCuentos: state => {
      return state.videos.filter(video => video.coleccion == 'Cuentos narrados')
    },
    vidKaraokes: state => {
      return state.videos.filter(video => video.coleccion == 'Karaokes')
    },
    vidSweet: state => {
      return state.videos.filter(video => video.coleccion == 'Sweet songs fi piknini. Canciones dulces para niños.')
    },
    vidFiesta: state => {
      return state.videos.filter(video => video.coleccion == 'Fiesta de la lectura')
    },
    vidCeiba: state => {
      return state.videos.filter(video => video.coleccion == 'Karaokes de Maguaré en La Ceiba')
    },
    vidZumba: state => {
      return state.videos.filter(video => video.coleccion == 'Zumba que zumba')
    },

    vidAllKar: state => {
      return state.videos.filter(video => video.coleccion.startsWith('Kara'))
    },
    fullmaguarevideos: state => {
      return state.videos.filter(video => video.id >0)
    },

/*

    videoskaraokes: state => {
      return state.videos.filter(video => video.coleccion == 'KARAOKE')
    },
    videossimples: state => {
      return state.videos.filter(video => video.coleccion == 'VIDEO')
    },
    videoscuentosnarrados: state => {
      return state.videos.filter(video => video.coleccion == 'Cuentos narrados')
    },
    videoslistos: state => {
      return state.videos.filter(video => video.url != 'URL')
    },
  */
    /*audiosCuentoencanto: state => {
      return state.canciones.filter(cancion => cancion.coleccion == 'Con mi cuento encanto')
    },*/
/*
    videosall: state => {
      return state.videos.filter(video => video.coleccion == '')
    },
*/

}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
