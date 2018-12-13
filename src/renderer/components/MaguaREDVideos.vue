<template>
<div class="pa-4 seccionvideos">
  <v-layout row wrap>
        <v-flex xs12>
          <v-card class="pa-1">
            <v-select class="px-4 ma-0"
              :items="coleccion"
              v-model="selected"
              color="primary"
              item-text="titulo"
              item-value="id"
              hide-selected
              label="Seleccione un video">
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
              <video
              @ended='findepista'
              width="100%" height="auto" ref="playame1" controls autoplay v-if="quesuena!=''" controlsList="nodownload nofullscreen">
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
      datosgenerales: [],
      selectedIndex: []

    }
  },
  created() {
    this.coleccionactiva(this.$route.params.id);
    /*this.coleccion = this.videos
    this.coleccion = _.sortBy(this.coleccion, ['titulo']);
    this.selected = this.coleccion[0].id;
    this.datosgenerales = this.describe.filter(dato => dato.id == 700)*/
    /*EventBus.$emit('TITULO', this.datosgenerales[0].titulobreve);
    EventBus.$emit('SECCION', this.datosgenerales[0].descripcion);*/
    EventBus.$emit('ICONOBARRA', 'fas fa-play-circle', 'magnaranja');

    if(this.selected !='inicio'){
      var t = this.coleccion.find(x => x.id === this.selected)
      this.playSound(t)
    }
    },
    watch: {
      '$route.params.id': function (id) {
        this.coleccionactiva(id)

      },
      selected: function(value){
        if(value !='inicio'){
          var t = this.coleccion.find(x => x.id === value)
          this.selectedIndex = this.coleccion.indexOf(t)
          this.playSound(t)
        }
      }
    },
  computed: {
    ...mapState('Maguared', ['videos']),
    ...mapState('Describe', ['describe']),
    ...mapGetters('Maguared', ['videosQuePiensan', 'videosPrincipios', 'videosCuerposonoro', 'videosQueRecomiendan']),

  },
  methods: {
    findepista(){
      var nuevoelemento = this.selectedIndex+1;
      if(nuevoelemento >= this.coleccion.length){
          this.selected = this.coleccion[0].id;
      }else{
        this.selected = this.coleccion[nuevoelemento].id;
      }

    },
    coleccionactiva(id){
      /*if(this.$refs.playame1){
        this.quesuena= '';
        this.$refs.playame1.pause()
      }*/
      if(id =='videosQuePiensan'){
        this.datosgenerales = this.describe.filter(dato => dato.id == 704)
        this.coleccion = this.videosQuePiensan
      }else if (id =='videosPrincipios') {
        this.datosgenerales = this.describe.filter(dato => dato.id == 701)
        this.coleccion = this.videosPrincipios
      }else if (id =='videosCuerposonoro') {
        this.datosgenerales = this.describe.filter(dato => dato.id == 702)
        this.coleccion = this.videosCuerposonoro
      }else if (id =='videosQueRecomiendan') {
        this.datosgenerales = this.describe.filter(dato => dato.id == 703)
        this.coleccion = this.videosQueRecomiendan
      }else{
        this.coleccion = this.videos
        this.datosgenerales = this.describe.filter(dato => dato.id == 700)
      }
      EventBus.$emit('TITULO', this.datosgenerales[0].titulobreve);
      EventBus.$emit('SECCION', this.datosgenerales[0].descripcion);
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
<style>
.seccionvideos{
  background-image: url("~@/assets/naranja.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  min-height: calc(100vh - 10px);
}
</style>
