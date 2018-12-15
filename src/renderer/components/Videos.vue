<template>
<div class="pa-4 seccionvideos seccionprincipal">
  <v-layout row wrap >
        <v-flex xs12 pa-1>

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
        <v-flex xs12 pa-1>
        <v-card dark color="primary">
          <v-card-text class="pa-2">
            <h2 class="" ref="tituloref">{{ cancionactiva.titulo }}</h2> <h5>{{ cancionactiva.autor }}</h5>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs4 class="pa-2 text-xs-center">
        <v-card color="white" class="text-xs-center">

          <v-img :src="'static/miniaturas/'+cancionactiva.id+'.jpg'" class="card-imagen"></v-img>
          <v-card-text class="card-texto text-xs-left">{{ cancionactiva.describe }}</v-card-text>

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
      cancionactiva: '',
      datosgenerales: [],
      selectedIndex: []
    }
  },
  created() {

    //this.id = this.$route.params.id;
    //alert(this.$route.params.id)
    this.coleccionactiva(this.$route.params.id);
    //EventBus.$emit('TITULO', 'Videos');
    //this.selected= 'inicio'
    EventBus.$emit('ICONOBARRA', 'fas fa-play-circle', 'magnaranja');
    },
    watch: {
      '$route.params.id': function (id) {
        //alert(id)
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
    ...mapState('Videos', ['videos']),
    ...mapState('Describe', ['describe']),
    //...mapGetters('Videos', ['videoskaraokes', 'videossimples', 'videosall', 'videoscuentosnarrados', 'videoslistos']),
    ...mapGetters('Videos', ['vidKaraokes', 'vidSweet', 'vidFiesta', 'vidCeiba', 'vidAllKar', 'vidCuentos', 'vidZumba']),

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
