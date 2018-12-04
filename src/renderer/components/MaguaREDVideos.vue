<template>
<div class="">
  <v-layout row wrap>
    <v-flex xs12 class="text-xs-center">
      <v-card>
              <v-card-title primary-title style="height:auto">
                <div>
                  <div>{{ datosgenerales[0].descripcion }}</div>
                </div>
              </v-card-title>
        </v-card>
    </v-flex>
        <v-flex xs12>
          <v-card>
            <v-card-text class="">
              <span>Seleccione un video</span>
              <p>{{ coleccion.length }}</p>
            </v-card-text>

              <v-select class="px-4 ma-0"

                :items="coleccion"
                v-model="selected"
                color="primary"

                item-text="titulo"
                item-value="id"
                >
              </v-select>

          </v-card>
        </v-flex>
      </v-layout>
      <v-layout row wrap v-if="cancionactiva">
        <v-flex xs12>
        <v-card dark color="primary">
          <v-card-text class="pa-2">
            <h2 class="" ref="tituloref">{{ cancionactiva.titulo }}</h2> <h5>{{ cancionactiva.autor }}</h5>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs4 class="pa-2 grey--text">
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
          <v-card>
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
      datosgenerales: []

    }
  },
  created() {
    EventBus.$emit('TITULO', 'Videos');
    this.coleccion = this.videos
    this.coleccion = _.sortBy(this.coleccion, ['titulo']);
    this.selected = this.coleccion[0].id;
    this.datosgenerales = this.describe.filter(dato => dato.id == 0)

    if(this.selected !='inicio'){
      var t = this.coleccion.find(x => x.id === this.selected)
      this.playSound(t)
    }
    },
    watch: {

      selected: function(value){
        if(value !='inicio'){
          var t = this.coleccion.find(x => x.id === value)
          this.playSound(t)
        }
      }
    },
  computed: {
    ...mapState('Maguared', ['videos']),
    ...mapState('Describe', ['describe']),

  },
  methods: {
    /*
    coleccionactiva(id){
      if(this.$refs.playame1){
        this.quesuena= '';
        this.$refs.playame1.pause()
      }
      if(id =='vidKaraokes'){
        this.coleccion = this.vidKaraokes
      }else if (id =='vidSweet') {
        this.coleccion = this.vidSweet
      }else if (id =='vidCuentos') {
        this.coleccion = this.vidCuentos
      }else if (id =='vidFiesta') {
        this.coleccion = this.vidFiesta
      }else if (id =='vidCeiba') {
        this.coleccion = this.vidCeiba
      }else if (id =='vidAllKar') {
        this.coleccion = this.vidAllKar
      }else if (id =='vidZumba') {
        this.coleccion = this.vidZumba
      }else{
        this.coleccion = this.videos
      }
      this.coleccion = _.sortBy(this.coleccion, ['titulo']);
      this.selected = this.coleccion[0].id;

    },*/

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
