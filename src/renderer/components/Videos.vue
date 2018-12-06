<template>
<div class="">
  <v-layout row wrap>
    <v-flex xs12 class="text-xs-center py-2">
      <v-card>
              <v-card-title primary-title style="height:auto" class="magnaranja">
                <div>
                  <div>{{ datosgenerales[0].descripcion }}</div>
                </div>
              </v-card-title>
        </v-card>
    </v-flex>
        <v-flex xs12>
          <v-card>


              <span class="pa-1">Seleccione un video</span><v-select class="px-4 ma-0"

                :items="coleccion"
                v-model="selected"
                color="primary"

                item-text="titulo"
                item-value="id"
                >
              </v-select>

          </v-card>
        </v-flex>


        <!--
        <v-flex xs6>
          <v-card dark color="orange">
            <v-card-text class="px-0">
                <p>{{ this.$route.params.id }} --- QUE SUENA:  {{ quesuena }}</p>
                <pre> SELECTED: {{ selected }}</pre>
                <pre>{{ this.$refs }}</pre>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs6>
          <v-card dark color="orange">
            <v-card-text class="px-0">
              <pre>{{ cancionactiva }}</pre>
            </v-card-text>
          </v-card>
        </v-flex>
      -->

      </v-layout>
      <v-layout row wrap v-if="cancionactiva">
        <v-flex xs12>
        <v-card dark color="primary">
          <v-card-text class="pa-2">
            <h2 class="" ref="tituloref">{{ cancionactiva.titulo }}</h2> <h5>{{ cancionactiva.autor }}</h5>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs4 class="pa-2 text-xs-center">
        <v-card dark color="white" class="text-xs-center">
          <img :src="'static/miniaturas/'+cancionactiva.id+'.jpg'"
          :alt="cancionactiva.titulo"
          class="miniatura">

          <v-card-text class="px-0 grey--text">
            <h3 class="describe text-xs-center pa-1">{{ cancionactiva.describe }}</h3>

          </v-card-text>


        </v-card>
      </v-flex>
      <v-flex xs8 class="pa-2">
          <!--<v-card dark color="white">
            <v-card-text class="px-0 grey--text">
              <p v-if="cancionactiva.letra" v-html="cancionactiva.letra" class="lyrics"></p>
            </v-card-text>
          </v-card>-->
          <v-card>

              <!--<audio controls ref="playame1" class="audiofull" autoplay v-if="quesuena!=''">
                <source :src="quesuena" type="audio/mpeg">
                Este producto NO es compatible con su computador
              </audio>-->
              <video width="100%" height="auto" ref="playame1" controls autoplay v-if="quesuena!=''" controlsList="nodownload nofullscreen">
                  <source :src="quesuena" type="video/mp4">
              Your browser does not support the video tag.
              </video>

          </v-card>
        </v-flex>

      </v-layout>
</div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import _ from 'lodash';
import EventBus from './eventos';

export default {
  //components: { SystemInformation },
  data: function () {
    return {
      selected: 'inicio',
      coleccion: [],
      quesuena: '',
      cancionactiva: '',
      datosgenerales: []
    }
  },
  created() {

    //this.id = this.$route.params.id;
    //alert(this.$route.params.id)
    this.coleccionactiva(this.$route.params.id);
    EventBus.$emit('TITULO', 'Videos');
    //this.selected= 'inicio'
    },
    watch: {
      '$route.params.id': function (id) {
        //alert(id)
        this.coleccionactiva(id)

      },
      selected: function(value){
        if(value !='inicio'){
          var t = this.coleccion.find(x => x.id === value)
          this.playSound(t)
        }
      }
    },
  computed: {
    ...mapState('Videos', ['videos']),
    ...mapState('Describe', ['describe']),
    //...mapGetters('Videos', ['videoskaraokes', 'videossimples', 'videosall', 'videoscuentosnarrados', 'videoslistos']),
    ...mapGetters('Videos', ['vidKaraokes', 'vidSweet', 'vidFiesta', 'vidCeiba', 'vidAllKar', 'vidCuentos', 'vidZumba']),

  },
  methods: {
    coleccionactiva(id){
      if(this.$refs.playame1){
        this.quesuena= '';
        this.$refs.playame1.pause()
      }
      if(id =='vidKaraokes'){
        this.datosgenerales = this.describe.filter(dato => dato.id == 102)
        this.coleccion = this.vidKaraokes
      }else if (id =='vidSweet') {
        this.datosgenerales = this.describe.filter(dato => dato.id == 103)
        this.coleccion = this.vidSweet
      }else if (id =='vidCuentos') {
        this.datosgenerales = this.describe.filter(dato => dato.id == 105)
        this.coleccion = this.vidCuentos
      }else if (id =='vidFiesta') {
        this.datosgenerales = this.describe.filter(dato => dato.id == 104)
        this.coleccion = this.vidFiesta
      }else if (id =='vidCeiba') {
        this.datosgenerales = this.describe.filter(dato => dato.id == 106)
        this.coleccion = this.vidCeiba
      }else if (id =='vidAllKar') {
        this.datosgenerales = this.describe.filter(dato => dato.id == 107)
        this.coleccion = this.vidAllKar
      }else if (id =='vidZumba') {
        this.datosgenerales = this.describe.filter(dato => dato.id == 101)
        this.coleccion = this.vidZumba
      }else{
        this.coleccion = this.videos
        this.datosgenerales = this.describe.filter(dato => dato.id == 100)
      }
      EventBus.$emit('TITULO', this.datosgenerales[0].titulobreve);
      this.coleccion = _.sortBy(this.coleccion, ['titulo']);
      this.selected = this.coleccion[0].id;

    },
    playSound (cancion) {
      var sonido = 'static/video/'+cancion.url;
      this.quesuena = sonido;
      this.cancionactiva = cancion;
      if(this.$refs.playame1){
        this.$refs.playame1.load()
        //this.$refs.playame1.play()

      }
    }
}
}
</script>

<style lang="css" scoped>
  .internamusica{
    background-color: white;
    display: grid;
    grid-template-columns: 4fr 3fr;
  }
  p.lyrics{
    padding: 1em;
    margin: 0 auto;
    white-space:pre-line;
    height: 40vw;
    width: 95%;
    overflow: auto;

  }
  h1.titulo{
    padding-left: 1em;
    padding-top: 1em;
  }
  img.miniatura{
    max-width: 100%;
    border: 2px white solid;
    border-radius: 0.5em;
    margin: 0 auto;
    cursor: pointer;
  }
  .imagenesmodelo{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1em;

  }
p.describe{
  padding: 0.6em;

}


</style>
