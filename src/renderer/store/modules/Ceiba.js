const state = {
  personajes: [
    {
        id: 0,
        order: 1,
        nombre: 'Saimiri',
        describe: 'En la copa de la ceiba viven el pequeño Saimiri y su familia de monos ardilla que emigraron desde el Amazonas. Saimiri tiene 5 años y es un chiquillo muy tierno, sensible, amable y empático; se preocupa por los problemas de todos, es conciliador, dulce y está muy apegado a su familia. Graba todo lo que hacen los habitantes de La Ceiba. Ese es su lenguaje expresivo principal, aunque no lo sabe, explora las expresiones de los demás y le gustaría encontrar su gran talento, porque admira mucho el de sus vecinos.',
        imagen: 'B01.jpg',
        imagenback: 'bg-00.png'
    },
    {
        id: 1,
        order: 2,
        nombre: 'Don Emiliano, el abuelo',
        describe: 'Es el abuelito de Saimiri y de la comunidad. Se encarga de tocar el Maguaré, que es el instrumento sagrado con el que se hace un llamado a los animales para un asunto importante. Este honor se pasa de generación en generación y lo lleva siempre la persona mayor de la comunidad. El abuelo Emiliano tiene principios de alzhéimer y olvida frecuentemente las cosas que tiene que hacer, como por ejemplo por qué citó a los animales después de tocar el maguaré.',
        imagen: 'B05.jpg',
        imagenback: 'bg-01.png'
    },
    {
        id: 2,
        order: 3,
        nombre: 'Bertilda y Edilberto',
        describe: 'Los tíos, como les dicen todos, son una pareja muy trabajadora. Se conocieron desde muy jóvenes, se entienden y respetan profundamente, pero sobre todo son una pareja que está súpersincronizada para ayudarse con las funciones del hogar y la crianza de sus hijas adoptivas, las trillizas, su hijo el bebé mono y Saimiri su sobrino. Cada labor para ellos es una misión que debe ser planeada hasta en el más pequeño detalle. Tienen un debilidad por la cocina, les encanta preparar alimentos, y aunque son unos meros aficionados, de vez en cuando logran unos platos dignos de cualquier profesional.',
        imagen: 'B10.jpg',
        imagenback: 'bg-02.png'
    },
    {
        id: 3,
        order: 4,
        nombre: 'Las terrillizas',
        describe: 'Eliana, Adriana y Juliana son unas trillizas muy creativas y "rebeldes", que cuestionan siempre la forma en la que se hacen las cosas en la comunidad de la Ceiba. Aún no han aprendido a relacionarse pacíficamente y a exponer sus puntos de vista amablemente, sino que lo hacen desde una posición siempre desafiante. Ellas hacen grafitis e instalaciones artísticas en torno a la ceiba, para lo cual utilizan todo lo que la selva tiene para ofrecer. Una de ellas es sorda, otra es muda y la otra tiene todos sus sentidos funcionales pero es mueca. La mezcla perfecta para hacer travesuras de gran nivel.',
        imagen: 'B03.jpg',
        imagenback: 'bg-03.png'
    },
    {
        id: 4,
        order: 5,
        nombre: 'Rosalinda la camaleona',
        describe: 'Rosalinda es española y su carácter es poco sociable, solitaria por naturaleza y territorial como suelen ser los camaleones, Rosalinda reniega de sus vecinos y en especial de la música popular que escuchan. Pero sus mejores composiciones provienen de los momentos de ira que le genera esa música tan estruendosa para ella. Rosalinda, como todos los camaleones, puede camuflarse y esconderse, vive corrigiendo la manera de hablar de todos, ya que es una purista del idioma. Por esa razón casi nunca la invitan a las fiestas que se organizan todos los viernes en casa de Arma - DJ. ',
        imagen: 'B08.jpg',
        imagenback: 'bg-04.png'
    },
    {
        id: 5,
        order: 6,
        nombre: 'Arma - DJ',
        describe: 'Nació en las sabanas de los llanos orientales. A Arma - DJ todo le rima, habla rapeando. Es el más popular de la comunidad, el amigo de todos; él encuentra la musicalidad en todo el entorno o en frases que dicen los demás. Está siempre muy enfocado en todo lo que suena, porque en la selva todo tiene ritmo musical: el viento, el agua, la lluvia, la madera, las hojas, etc. Está siempre abstraído y muy distraído con esa tarea.',
        imagen: 'B04.jpg',
        imagenback: 'bg-05.png'
    },
    {
        id: 6,
        order: 7,
        nombre: 'Chip la perezosa',
        describe: 'Viene de los bosques tropicales del Huila. Es la instructora de aeróbicos de La Ceiba; sus clases siempre terminan tarde. Ella tiene la paciencia para enseñarles a todos los pasos necesarios, lo cual se convierte en un gran problema porque entonces la clase se demora aún más. La perezosa conoce todos los pasos de todas las coreografías de canciones famosas. Y como los enseña tan despacio hasta el abuelo los comprende a la perfección.',
        imagen: 'B11.jpg',
        imagenback: 'bg-06.png'
    },
    {
        id: 7,
        order: 8,
        nombre: 'Rani',
        describe: `Rani es una rana verde de ojos rojos que nació en el bosque húmedo tropical del Chocó y que ahora vive en la parte baja de la Ceiba, en una bromelia. No se sabe bien si es él o ella; tiene mezcladas sus preferencias. Para él/ella todo es actuar, no concibe la vida sin este arte. Con un movimiento rápido de manos pasado por la cara, Rani transforma su rostro fácilmente. Es un actor/actriz natural que siempre está ensayando sus monólogos. El problema es que nadie sabe en qué momento está ensayando y todos se creen la historia detrás de cada diálogo, a lo que Rani siempre responde: "¡Qué buena actuación!, ¿verdad?"`,
        imagen: 'B12.jpg',
        imagenback: 'bg-07.png'
    },
    {
        id: 8,
        order: 9,
        nombre: 'Maya la guacamaya',
        describe: 'Maya viene del Caribe colombiano, del bosque tropical seco cerca de la Sierra Nevada de Santa Marta. Ella es el sistema de comunicaciones de la comunidad de la Ceiba. Es la que se encarga de enviar los correos electrónicos a todos, de la redacción de todos los mensajes de texto y hasta de las cartas de amor que circulan por la comunidad. Es la mejor para expresión literaria, oral y escrita. Se encarga de hacer los anuncios parroquiales, lleva los mensajes de un animal a otro y avisa cuando el Maguaré suena.',
        imagen: 'B09.jpg',
        imagenback: 'bg-08.png'
    },
    {
        id: 9,
        order: 10,
        nombre: 'Gigi la tortuga',
        describe: 'La señorita Gigi es el medio de transporte más antiguo de la comunidad de La Ceiba. Como guía de turismo formal sabe la historia de cada elemento que aparece por los caminos. Además, conoce la rutina de todos los animales, sus horarios, gustos, biografía, etc. Como los transporta a todos va diciéndoles la manera más rápida y segura de llegar de un lugar a otro, pero como ella es muy lenta, siempre llegan tarde. También es la bibliotecaria de la comunidad y suele llevar una biblioteca en su caparazón.',
        imagen: 'B06.jpg',
        imagenback: 'bg-09.png'
    },
    {
        id: 10,
        order: 11,
        nombre: 'Linio y Tulita',
        describe: `Tulita es profesora. Le gusta enseñar y es buena en ello; cuando habla, todos callan y ponen atención, es su don. Cuando llega de trabajar le ayuda a Linio, su esposo que es amo de casa, a calmar a sus 27 hijos; lo hace leyéndoles un cuento. Son una pareja de cuyes que vinieron desde Nariño con su familia, que cada vez es mayor. Ellos son los melosos de la comunidad. Suspiran cuando se miran, siempre se están diciéndose piropos de postres de frutas selváticas, mezclados con elementos de la selva:
        - "Postrecito de savia de árbol..."
        - "Dime, pastelito de bayas silvestres..."`,
        imagen: 'B02.jpg',
        imagenback: 'bg-10.png'
    },
    {
        id: 11,
        order: 12,
        nombre: 'Gildardo el olinguito',
        describe: 'Proveniente del departamento de Antioquia, es el vendedor que va de pueblo en pueblo con su mercado ambulante de mercancías, llevando las novedades de productos innovadores de otras partes del mundo. Siempre que llega a La Ceiba, todos los chicos corren rápido para ver qué novedades ha traído. Cuando Gildardo llega no solo trae objetos, sino historias fantásticas del mundo que deja boquiabiertos a la mayoría de los habitantes de la comunidad.',
        imagen: 'B07.jpg',
        imagenback: 'bg-11.png'
    }
    ],
}



export default {
  namespaced: true,
  state
}
