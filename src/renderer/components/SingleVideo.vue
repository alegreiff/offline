<template>
  <div class="pa-4 seccionvideos seccionprincipal">
          <v-layout row wrap v-if="cancionactiva">
            <v-flex xs12>
            <v-card dark color="primary">
              <v-card-text class="pa-2">
                <h2 class="" ref="tituloref">{{ cancionactiva.titulo }}</h2> <h5>{{ cancionactiva.autor }}</h5>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs4 class="pa-2 grey--text">
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
          <v-layout row wrap>
            <v-flex xs3 v-for="(video, index) in allvideos" class="allvideoslista">
              <v-card color="white" class="text-xs-center" height="100%" ripple hover>
                <v-img :src="'static/miniaturas/'+video.id+'.jpg'" class="card-imagen" @click="cambioVideo(video.id)"></v-img>
                <p @click="cambioVideo(video.id)">{{ video.titulo }}</p>
              </v-card>
            </v-flex>
          </v-layout>

  </div>

</template>

<script>

import { mapState, mapGetters} from 'vuex'
import EventBus from './eventos';
export default {
  data: function () {
    return {
      videoactivo: null,
      allvideos: null,
      cancionactiva: null,
      datosgenerales: null,
      quesuena: '',
      selectedIndex: []

    }
  },
  watch: {
    '$route.params.id': function (id) {
      this.cambioVideo(id)
    },

  },
  created() {
    this.datosgenerales = this.describe.filter(dato => dato.id == 665)
    EventBus.$emit('TITULO', this.datosgenerales[0].titulobreve);

    EventBus.$emit('ICONOBARRA', 'fas fa-play-circle', 'magnaranja');
    this.videoactivo = this.$route.params.id;
    this.allvideos=this.videos.concat(this.fullmaguarevideos).concat(this.videosque);
    this.allvideos = _.sortBy(this.allvideos, ['titulo']);
    //this.media = this.allvideos.filter(dato => dato.id == this.videoactivo)
    this.cambioVideo(this.videoactivo)

    },
  computed: {
      ...mapState('Maguared', ['videos']),
      ...mapGetters('Videos', ['fullmaguarevideos']),
      ...mapState('Queesvideos', ['videosque']),
      ...mapState('Describe', ['describe']),
    },
    methods: {
      findepista(){
        var nuevoelemento = this.selectedIndex+1;
        if(nuevoelemento >= this.allvideos.length){

            this.cambioVideo(this.allvideos[0].id)
        }else{

          this.cambioVideo(this.allvideos[nuevoelemento].id)
        }
      },
      cambioVideo(value){
        window.scrollTo(0, 0);
        this.cancionactiva = this.allvideos.filter(dato => dato.id == value)

        if(this.cancionactiva){

          EventBus.$emit('SECCION', this.cancionactiva[0].titulo);
        }else{
          EventBus.$emit('SECCION', "-----------------");
        }


        //this.playSound(this.cancionactiva)
        var t = this.allvideos.find(x => x.id === this.cancionactiva[0].id)
        this.selectedIndex = this.allvideos.indexOf(t)
        this.playSound(t)
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
