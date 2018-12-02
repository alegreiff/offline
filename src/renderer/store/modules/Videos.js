const state = {
  videos: [
    { id: 70,
      autor: 'María del Sol Peralta / Video: The Bucket.',
      coleccion: 'Karaokes',
      titulo: 'El piojo',
      describe: 'El piojo chef ama cocinar, aunque utiliza ingredientes que se encuentra en las cabezas. Un divertido y colorido video animado que ilustra la variedad de platos "muy especiales" que prepara este chef para ti. ¿Cuál es la receta que más te gusta?',
      url: '70-elpiojo.mp4'
    },
    { id: 118,
      autor: 'Ministerio de Cultura - Observatorio del Caribe Colombiano',
      coleccion: 'Sweet songs fi piknini. Canciones dulces para niños.',
      titulo: 'Miss Lucy - Karaoke',
      describe: 'Esta ronda nos cuenta una historia de amor que inicia en una ventana en el Archipiélago de San Andrés y Providencia y cruza el océano. La música isleña se nutre de la historia de los ingleses que colonizaron el Caribe y los africanos que llegaron allí a trabajar. ¡Vamos a cantar al ritmo de las olas del mar!',
      url: '118-misslucy.mp4'
    },
    { id: 125,
      autor: 'Fundalectura, Ministerio de Cultura',
      coleccion: 'Fiesta de la lectura',
      titulo: 'El abuelo tigre - Karaoke',
      describe: 'Los uitotos son indígenas colombianos que viven en el Amazonas. En este karaoke puedes escuchar y cantar esta melodía en su lengua nativa que recuerda el día en que el tigre y la lluvia hicieron una apuesta para ver quién era el más poderoso. ¿Sabes algunas palabras en otras lenguas que no sea el español?',
      url: '125-abuelotigre.mp4'
    },
    { id: 132,
      autor: 'Audio de Jorge Luis Valencia Chica - Canturriando Ministerio de Cultura Centro Ático',
      coleccion: 'Karaokes',
      titulo: 'Poema a la lluvia - Karaoke',
      describe: 'Cuando llueve suceden muchas cosas, por ejemplo, las nubes grises y gordas vuelan por ahí junto con las hojas que bailan y giran con el viento. Y tu ¿qué haces cuando te mojas con la lluvia?',
      url: '132-poemalluvia.mp4'
    },
    { id: 134,
      autor: 'Audio de María Teresa Martínez Azcárate - Ministerio de Cultura - Centro Ático',
      coleccion: 'Karaokes',
      titulo: 'Casi volando sube - Karaoke',
      describe: 'Los ascensores suben y bajan muy rápido para mover a las personas en edificios de muchos pisos ¿Qué sientes cuando subes muy alto y cuando bajas hasta el piso como lo hace un ascensor?',
      url: '134-casivolando.mp4'
    },
    { id: 137,
      autor: 'Ministerio de cultura',
      coleccion: 'Karaokes',
      titulo: 'Bacetemëng Oyejuayëng (Niños Felices) - Karaoke',
      describe: 'Escucha una lengua diferente, la lengua del grupo indígena Kamëntšá o Kamsá que viven en el Valle del Sibundoy en el Putumayo. Ellos tienen mucho por enseñarte con sus tradiciones. ¿Has escuchado otras canciones en lenguas nativas?',
      url: '137-ninosfelices.mp4'
    },
    { id: 138,
      autor: 'Ministerio de Cultura - Observatorio del Caribe Colombiano',
      coleccion: 'Sweet songs fi piknini. Canciones dulces para niños.',
      titulo: 'Clap han - Karaoke',
      describe: '¡Escucha esta canción del Archipiélago de San Andrés y Providencia que te hará bailar!',
      url: '138-claphan.mp4'
    },
    { id: 176,
      autor: 'Ministerio de Cultura - Observatorio del Caribe Colombiano',
      coleccion: 'Sweet songs fi piknini. Canciones dulces para niños.',
      titulo: 'Out and through the window - Karaoke',
      describe: 'Esta ronda nos cuenta una historia de amor que inicia en una ventana en el Archipiélago de San Andrés y Providencia y cruza el océano. La música isleña se nutre de la historia de los ingleses que colonizaron el Caribe y los africanos que llegaron allí a trabajar. ¡Vamos a cantar al ritmo de las olas del mar!',
      url: '176-out.mp4'
    },
    { id: 282,
      autor: 'Ministerio de Cultura',
      coleccion: 'Fiesta de la lectura',
      titulo: 'Tiki, tiki, tai - video',
      describe: 'El pueblo Rrom o gitano tiene sus propias canciones en su idioma. El video de esta canción cuenta la historia de una pequeña niña que quiere jugar con su mariposa y la podrás escuchar en su lengua original y también en español. ¿Cuáles son las mariposas que más te gustan?',
      url: '282-tiki.mp4'
    },
    { id: 283,
      autor: 'Ministerio de Cultura, Centro Ático',
      coleccion: 'Fiesta de la lectura',
      titulo: 'Tortuguita, vení bailá - video',
      describe: 'Si tienes ganas de bailar este video es para tí. ¡Imagina una tortuguita que no le gusta hacer nada más que bailar! ¿Cuál es el ritmo que más te gusta bailar y cómo lo bailas?',
      url: '283-tortuguita.mp4'
    },
    { id: 284,
      autor: 'Ministerio de cultura',
      coleccion: 'Fiesta de la lectura',
      titulo: 'Si no te dormís',
      describe: 'La hora de dormir es muy importante, cierra tus ojos rápidamente o un lobito vendrá, ¡pero no te asustes que sólo te acompañará! ¿Qué te gusta que te canten cuando te vas a dormir?',
      url: '284-dormis.mp4'
    },
    { id: 285,
      autor: 'Ministerio de cultura',
      coleccion: 'Fiesta de la lectura',
      titulo: 'Se fue el sol',
      describe: 'Cuando se esconde el sol es hora de descansar para madrugar e ir a la escuela ¡o jugar en casa! El pueblo indígena Kamentsá te invita a ver este video en el que con su propio idioma (y también en español) te cuentan qué hacen cuando se va el sol. ¿Tu que haces cuando se esconde el sol?',
      url: '285-sefueelsol.mp4'
    },
    { id: 286,
      autor: 'Varios',
      coleccion: 'Fiesta de la lectura',
      titulo: 'Putunkaa Serruma',
      describe: 'Los indígenas Wayú viven en la Guajira y tienen su propio idioma, el wayuunaiki. Este video te invita a escuchar una canción (también en español) con la que las mamás arrullan a sus hijos pequeños y los alientan a dormir mientras les llevan los alimentos. ¿A ti qué te gusta que te canten para dormir?',
      url: '286-putunka.mp4'
    },
    { id: 287,
      autor: 'Audio de Tortuguita, Vení bailá Ministerio de Cultura e ICBF  Centro Ático',
      coleccion: 'Fiesta de la lectura',
      titulo: 'Tindero - Karaoke',
      describe: 'En los campos de San Jacinto, en el departamento de Bolívar, desde hace varias generaciones se canta y se baila esta canción. Tambores, gaitas y voces se confunden para crear un juego cantado.',
      url: '287-tindero.mp4'
    },
    { id: 288,
      autor: 'Audio de Tortuguita, Vení bailá Ministerio de Cultura e ICBF  Centro Ático',
      coleccion: 'Fiesta de la lectura',
      titulo: 'Palmita con manteca - Karaoke',
      describe: 'Conoce a un pequeño niño y su familia en la costa colombiana. El papá de este bebé morenito que vive en San Basilio de Palenque ya no le dio más chancleta de la que pega, sino que se la entregó en la mano y el bebé corrió hacia su mamá, riendo.',
      url: '288-palmita.mp4'
    },
    { id: 418,
      autor: 'Rafael Pombo',
      coleccion: 'Cuentos narrados',
      titulo: 'Pastorcita - video',
      describe: 'Pastorcita perdió a sus ovejas. Cuando ellas solas regresaron no tenían colas, estaban secándose al sol en las ramas de un viejo árbol. Pastorcita las tomó y una a una todas las colas a sus dueñas devolvió. ¿Cómo sacarías a pasear tantas ovejas?',
      url: '418-pastorcita.mp4'
    },
    { id: 419,
      autor: 'Rafael Pombo',
      coleccion: 'Cuentos narrados',
      titulo: 'Juan Matachín - video',
      describe: 'Juan Matachín viste su traje de general y tiene todas las herramientas para defenderse de quien lo insulte. Descubre cómo los enfrentará. ¿Te animarías a crear tu propio traje de general?',
      url: '419-matachin.mp4'
    },
    { id: 420,
      autor: 'Rafael Pombo',
      coleccion: 'Cuentos narrados',
      titulo: 'Juaco el ballenero - video',
      describe: 'El capitán de Juaco quería cazar una enorme ballena, pero ella dio un sacudón y mandó al barco y al capitán hasta la luna. Juaco no lo ha podido visitar porque no sabe el camino y tampoco tiene dinero para llegar. ¿Te imaginas cómo sería tener una amiga ballena?',
      url: '420-joacoelballenero.mp4'
    },
    { id: 421,
      autor: 'Rafael Pombo',
      coleccion: 'Cuentos narrados',
      titulo: 'La marrana peripuesta - video',
      describe: '"Un mono adornó con flores a una marrana y ella, al verse tan hermosa, se empezó a contonear en medio de todos los animales. ¿Qué le pasaría a la marrana adornada? ¿Cómo adornarías tu a tu animal favorito?"',
      url: '421-marrana.mp4'
    },
    { id: 422,
      autor: 'Rafael Pombo',
      coleccion: 'Cuentos narrados',
      titulo: 'Las siete vidas del gato - video',
      describe: 'El gato Mambrú conversa con el lebrel Perdonavidas pues el lebrel desea saber el gran secreto para tener siete vidas. Descubre el secreto del gato Mambrú. ¿Qué crees que hace un gato en cada una de sus vidas?',
      url: '422-sietevidasgato.mp4'
    },
    { id: 423,
      autor: 'Rafael Pombo',
      coleccion: 'Cuentos narrados',
      titulo: 'El niño y la mariposa - video',
      describe: 'Un niño le pide a la mariposa que le regale sus alas. Descubre lo que hará el niño para hacerla feliz. ¿Sóbre que hablarías tu con una mariposa?',
      url: '423-ninomariposa.mp4'
    },
    { id: 424,
      autor: 'Joseph Jacobs',
      coleccion: 'Cuentos narrados',
      titulo: 'La historia de los tres cerditos - video',
      describe: 'Tres cerditos hermanos se encuentran con el lobo. ¿Qué les sucederá al de la casa de paja y al de la casa de ramas? ¿Qué hará al cerdito que construyó su casa con ladrillos? ¿Cómo construirías una casa que un lobo nunca pudiera derribar?',
      url: '424-trescerditos.mp4'
    },
    { id: 425,
      autor: 'Rafael Pombo',
      coleccion: 'Cuentos narrados',
      titulo: 'La pobre viejecita - video',
      describe: 'Esta es la historia de una pobre viejecita que de pobre no tenía nada. Descubre todo lo que guardaba esta dama en su casa',
      url: '425-viejecita.mp4'
    },
    { id: 426,
      autor: 'Hans Christian Andersen',
      coleccion: 'Cuentos narrados',
      titulo: 'La princesa y la alverja - video',
      describe: 'Esta es la historia de un príncipe que desea encontrar una princesa de verdad. En una noche de tormenta, una joven princesa llama a las puertas de la ciudad y la anciana reina descubrirá si en realidad se trata de una princesa auténtica. ¿Qué te gustaría hacer si fueras el rey o la reina de un castillo?',
      url: '426-princesaalverja.mp4'
    },
    { id: 463,
      autor: 'Ministerio de Cultura',
      coleccion: '',
      titulo: 'La pijamada de Saimiri',
      describe: 'Un día Saimiri invitó a sus amigos a la casa del árbol para hacer una pijamada, pero cada uno quería jugar una cosa diferente. ¿Será que lograron ponerse de acuerdo?',
      url: '463-pijamadasaimiri.mp4'
    },
    { id: 632,
      autor: 'Ricardo Prado, Neyber Lenis',
      coleccion: 'Karaokes de Maguaré en La Ceiba',
      titulo: 'La fiesta de Arma DJ - Karaoke',
      describe: 'Arma DJ es un armadillo que desde temprano toca su música para que todos se pongan a cantar y a bailar. Es el mejor DJ de La Ceiba y todos aman asistir a sus fiestas. ¿Y a ti, te gustó esta canción?.',
      url: '632-armadj.mp4'
    },
    { id: 633,
      autor: 'Ricardo Prado, Neyber Lenis',
      coleccion: 'Karaokes de Maguaré en La Ceiba',
      titulo: 'Ñame, ñame, ummm - Karaoke',
      describe: '¿Cuáles son tus platos favoritos?, ¿prefieres tamales o un buen sancocho?. Con Bertilda y Edilberto sabrás cómo se preparan deliciosos platos colombianos.',
      url: '633-namename.mp4'
    },
    { id: 634,
      autor: 'Ricardo Prado, Neyber Lenis',
      coleccion: 'Karaokes de Maguaré en La Ceiba',
      titulo: 'Los menjurjes de Gildardo - Karaoke',
      describe: 'Gildardo es un olinguito que vende desde bolitas de vidrio hasta remedios para el dolor de barriga. ¡Te retamos para que cantes esta canción sin soltar una carcajada!.',
      url: '634-menjurjes.mp4'
    },
    { id: 635,
      autor: 'Ricardo Prado, Neyber Lenis',
      coleccion: 'Karaokes de Maguaré en La Ceiba',
      titulo: '27 guagüitas - Karaoke',
      describe: 'Un papá y una mamá siempre están pendientes de sus hijitos, de darles de comer, de bañarlos y acostarlos a dormir… ¿pero como hacen los papás de 27 cuyecitos?.',
      url: '635-guaguitas.mp4'
    },
    { id: 636,
      autor: 'Ricardo Prado, Neyber Lenis',
      coleccion: 'Karaokes de Maguaré en La Ceiba',
      titulo: 'El convite en la ceiba - Karaoke',
      describe: 'Saimiri el monito ardilla de La Ceiba nos presenta a todos y cada uno de los vecinos de la comunidad, con la ayuda del abuelo Emiliano los invita a… a… a... ¿a qué es que los invita?.',
      url: 'URL'
    },
    { id: 637,
      autor: 'Ricardo Prado, Neyber Lenis',
      coleccion: 'Karaokes de Maguaré en La Ceiba',
      titulo: 'Pite que repite - Karaoke',
      describe: 'Maya la guacamaya todo lo quiere contar, no se puede quedar calladita porque todo lo que pasa en La Ceiba para ella es una gran noticia. ¿Te atreves a cantar como lo hace Maya?.',
      url: '637-piterepite.mp4'
    },
    { id: 638,
      autor: 'Ricardo Prado, Neyber Lenis',
      coleccion: 'Karaokes de Maguaré en La Ceiba',
      titulo: 'Me encanta ser actriz - Karaoke',
      describe: 'Rani es una rana que viene del Chocó y es una gran diva, ella es la reina del drama en La Ceiba. En esta canción Rani nos muestra como transmitir las emociones más intensas.',
      url: '638-rani.mp4'
    },
    { id: 639,
      autor: 'Ricardo Prado, Neyber Lenis',
      coleccion: 'Karaokes de Maguaré en La Ceiba',
      titulo: 'La canción sin canción - Karaoke',
      describe: 'Eliana no puede oir, Adriana no puede ver y a Juliana le falta un diente. Sin embargo las tres juntas son las más poderosas. ¡Con ustedes, las terrillizas!.',
      url: 'URL'
    },
    { id: 0,
      autor: 'AUTHOR',
      coleccion: 'Karaokes',
      titulo: 'Las olas del mar - karaoke',
      describe: 'DESCRIBBE',
      url: 'URL'
    },{ id: 0,
      autor: 'AUTHOR',
      coleccion: 'Karaokes',
      titulo: 'Cartas del río - Karaoke',
      describe: 'DESCRIBBE',
      url: 'URL'
    },{ id: 0,
      autor: 'AUTHOR',
      coleccion: 'Karaokes',
      titulo: 'El delfín rosado - karaoke',
      describe: 'DESCRIBBE',
      url: 'URL'
    },{ id: 0,
      autor: 'AUTHOR',
      coleccion: 'Karaokes',
      titulo: 'Caminando va - karaoke',
      describe: 'DESCRIBBE',
      url: 'URL'
    },{ id: 0,
      autor: 'AUTHOR',
      coleccion: 'Karaokes',
      titulo: 'Los ratones- karaoke',
      describe: 'DESCRIBBE',
      url: 'URL'
    },{ id: 0,
      autor: 'AUTHOR',
      coleccion: 'Karaokes',
      titulo: 'Zumba que zumba - karaoke',
      describe: 'DESCRIBBE',
      url: 'URL'
    },{ id: 0,
      autor: 'AUTHOR',
      coleccion: 'Karaokes',
      titulo: 'La casa de Valentín - Karaoke',
      describe: 'DESCRIBBE',
      url: 'URL'
    },{ id: 0,
      autor: 'AUTHOR',
      coleccion: 'Karaokes',
      titulo: 'La araña - karaoke',
      describe: 'DESCRIBBE',
      url: 'URL'
    },{ id: 0,
      autor: 'AUTHOR',
      coleccion: 'Karaokes',
      titulo: 'Niña bonita - karaoke',
      describe: 'DESCRIBBE',
      url: 'URL'
    },{ id: 0,
      autor: 'AUTHOR',
      coleccion: 'Karaokes',
      titulo: 'Mi pequeño morral - video',
      describe: 'DESCRIBBE',
      url: 'URL'
    },{ id: 0,
      autor: 'AUTHOR',
      coleccion: 'Karaokes',
      titulo: 'A los monos les duele la barriga - karaoke',
      describe: 'DESCRIBBE',
      url: 'URL'
    },{ id: 0,
      autor: 'AUTHOR',
      coleccion: 'Karaokes',
      titulo: 'Saludo bonito',
      describe: 'DESCRIBBE',
      url: 'URL'
    },{ id: 0,
      autor: 'AUTHOR',
      coleccion: 'Zumba que zumba',
      titulo: 'El bebé león - video',
      describe: 'DESCRIBBE',
      url: 'URL'
    },{ id: 0,
      autor: 'AUTHOR',
      coleccion: 'Zumba que zumba',
      titulo: 'Cuento Zumba que Zumba',
      describe: 'DESCRIBBE',
      url: 'URL'
    },{ id: 0,
      autor: 'AUTHOR',
      coleccion: 'Zumba que zumba',
      titulo: 'Tuc Nopa Pip',
      describe: 'DESCRIBBE',
      url: 'URL'
    },{ id: 0,
      autor: 'AUTHOR',
      coleccion: 'Zumba que zumba',
      titulo: 'Tiburón azul',
      describe: 'DESCRIBBE',
      url: 'URL'
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
    vidAllKar: state => {
      return state.videos.filter(video => video.coleccion.startsWith('Kara'))
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
