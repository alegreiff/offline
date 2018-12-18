<template>
  <div class="pa-4 rojomg seccionprincipal">
    <v-layout row wrap>
      <v-flex xs12>
        <Flashcard
          imgFront="static/ceiba/ceiba.jpg"
          front="Maguaré en La Ceiba"
          back="Maguaré es un lugar entre la montaña y la selva donde prevalece la diversidad, diferentes costumbres, culturas, aficiones y maneras de ver el mundo que son representadas por los diferentes animales que conviven allí.

Una avalancha causada por la minería pirata provocó que muchos animales de diferentes especies fueran arrastrados lejos de su hábitat. Algunos de estos animales buscaron refugio al lado de una gran ceiba que estaba junto al río por el que fueron arrastrados. Se quedaron allí, ocuparon el árbol y junto con otros animales llegados de otros lugares, fueron construyendo una comunidad a la que llamaron: Maguaré, en honor al instrumento que los convoca todos los días.

Replicando una barriada, cuadra o conjunto de vecinos, Maguaré es una vecindad que maneja ciertas normas necesarias para el manejo del orden, en un grupo donde confluyen varias culturas, formas de ser, de reaccionar y de sentir.

Todos los días el abuelo Emiliano toca el maguaré y los animales que viven en La Ceiba, como es su costumbre, acuden al llamado, pero cuando están reunidos el abuelo ha olvidado el importante motivo por el que los ha convocado. La convocatoria es aprovechada por la mayoría de los animales para exponer problemas, contar algo nuevo que ha pasado en sus vidas o quejarse, como hace  siempre Rosalinda, la camaleona, una de las vecinas de Maguaré, que aprovecha que todos están reunidos para dirimir algún conflicto que tiene con uno de los vecinos. "

          >
        </Flashcard>
      </v-flex>
      <v-flex xs6 v-for="(person, index) in personajes" :key="index">



          <Flashcard
            :imgFront="'static/ceiba/'+person.imagen"
            :front="person.nombre"
            :back="person.describe"
            :bgback="'static/ceiba/'+person.imagenback"
            :imgBack="'static/ceiba/'+person.imagenback"
            >
          </Flashcard>
          <!--<img :src="'static/ceiba/'+person.imagen" alt="">-->

          <!--<p><strong>{{ person.nombre }}</strong> </p>
          <hr>
          <p class="lyrics">{{ person.describe }}</p>-->

      </v-flex>



  </v-layout>



  </div>
</template>

<script>
  import EventBus from './eventos';
  import { mapState } from 'vuex'
  import Flashcard from './shared/Flashcard'
  export default {
    data: function () {
      return {


      }
    },
    created () {
      this.datosgenerales = this.describe.filter(dato => dato.id == 666)
      EventBus.$emit('TITULO', this.datosgenerales[0].titulobreve);
      EventBus.$emit('SECCION', this.datosgenerales[0].descripcion);
      EventBus.$emit('ICONOBARRA', 'fas fa-home', 'white');
    },
    watch: {



    },
    name: 'maguare-en-la-ceiba',
    components: {  Flashcard },
    computed: {

      ...mapState('Describe', ['describe']),
      ...mapState('Ceiba', ['personajes']),
    },
    methods: {

    }
  }
</script>

<style scoped>


.logosmag{
  max-width: 100%;

}
.iniciomg{
  background-image: url("~@/assets/gris.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  background-attachment: fixed;

}
div.intromg{
  margin-top: 1em;
}
</style>
