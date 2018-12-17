<template>
<div class="pa-4 seccionaudios seccionprincipal">

    <v-layout row wrap>
      <v-flex xs12>

        <div id="waveform"></div>
      </v-flex>
      <!--<v-flex xs3 v-for="(video, index) in allvideos" class="allvideoslista">
        <v-card color="white" class="text-xs-center" height="100%" ripple hover>
          <v-img :src="'static/miniaturas/'+video.id+'.jpg'" class="card-imagen" @click="cambioVideo(video.id)"></v-img>
          <p @click="cambioVideo(video.id)">{{ video.titulo }}</p>
        </v-card>
      </v-flex>-->
      <v-flex xs4 v-for="(video, index) in allvideos" class="allvideoslista">
      <aplayer
      v-on:playing="sonando(video.titulo)"
      :volume=parseInt(1)
      theme='#c6c74f'
      preload = "auto"
      :music="{
        title: video.titulo,
        artist: ' ',
        src: 'static/audio/'+video.url,
        pic: 'static/miniaturas/'+video.id+'.jpg',
        }"
  />
  </v-flex>
    </v-layout>
  </div>
</template>

<script>
import { mapState} from 'vuex'
import EventBus from './eventos'
import Aplayer from 'vue-aplayer'

export default {
  data: function () {
    return {
      videoactivo: null,
      allvideos: null,
      cancionactiva: null,
      datosgenerales: null,
      quesuena: '',
      selectedIndex: [],
    }
  },
  watch: {


  },
  created() {
    this.datosgenerales = this.describe.filter(dato => dato.id == 664)
    EventBus.$emit('TITULO', this.datosgenerales[0].titulobreve);
    EventBus.$emit('SECCION', 'Selecciona una canción');
    EventBus.$emit('ICONOBARRA', 'fas fa-music', 'maglima');
    this.allvideos = _.sortBy(this.canciones, ['titulo']);


    },
    components: {
          Aplayer
      },
  computed: {
      ...mapState('Audios', ['canciones']),
      ...mapState('Describe', ['describe']),

    },

    methods: {
      sonando(titulo){
        EventBus.$emit('SECCION', titulo);
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
audio::-webkit-media-controls-enclosure {
    overflow:hidden;
}

audio::-webkit-media-controls-panel {
    width: calc(100% + 30px);
}
#waveform{
  background: white;
}
/*.aplayer-pic{
  width: 170px !important;
  min-height: 90px !important;
}*/
</style>
