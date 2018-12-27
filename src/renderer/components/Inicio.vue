<template>
  <div class="pa-4 iniciomg">
    <v-layout row wrap>
      <v-flex xs6>
      <img id="logo" src="static/maguare.png" alt="electron-vue" class="logosmag">
    </v-flex>
    <v-flex xs6>
      <img id="logo" src="static/maguared.png" alt="electron-vue" class="logosmag logomaguared" >
    </v-flex>
    <v-flex xs10 offset-xs1>

      <h2 class="text-xs-center">Bienvenidos a la Estrategia Digital de Cultura y Primera Infancia del Ministerio de Cultura</h2>

      <div class="intromg">
        <p>La Estrategia Digital de Cultura y Primera Infancia del Ministerio de Cultura, EDCPI, ofrece contenidos especializados y de calidad en el entorno digital dirigido a niños menores de seis años y sus padres, familias, maestros y en general para todos los cuidadores de primera infancia.</p>

        <p class="text-xs-center botonestrategia"><v-btn dark color="magnaranja" small @click="muestravideo">¿Qué es la EDCPI? &nbsp;<v-icon small large>fas fa-play-circle</v-icon></v-btn></p>

        <p>En esta versión digital, que no necesita conexión a Internet, encontrarán una selección de los mejores contenidos de Maguaré y MaguaRED que promueven los derechos culturales y los lenguajes expresivos de los niños.</p>

        <p>A través del menú ubicado arriba a la izquierda <v-icon>fas fa-bars</v-icon> tendrán acceso a más de 250 videos, audios, libros y material descargable, completamente gratuito. </p>

        <p>Los invitamos a descubrir más contenidos y recursos en <v-btn flat style="text-transform: none; padding: 0; margin: 0; color: #137786; font-weight: bolder; font-size: 1.22em" small v-on:click="webexterna('https://www.maguare.gov.co')">www.maguare.gov.co</v-btn> y <v-btn flat style="text-transform: none; padding: 0; margin: 0; color: #137786; font-weight: bolder; font-size: 1.22em" small v-on:click="webexterna('https://www.maguared.gov.co')">www.maguared.gov.co</v-btn>, y a unirse a la comunidad a través de las redes sociales.</p>
      </div>
    </v-flex>
    <v-flex xs6 offset-xs3 class="text-xs-center">
      <v-btn dark small color="#4267b2" @click="webexterna('https://www.facebook.com/maguared/')">Facebook &nbsp;
        <v-icon dark>fab fa-facebook</v-icon>
      </v-btn>

      <v-btn dark small color="#38A1F3" @click="webexterna('https://twitter.com/maguared')">Twitter &nbsp;
        <v-icon dark>fab fa-twitter-square</v-icon>
      </v-btn>

      <v-btn dark small color="#ED3833" @click="webexterna('https://youtube.com/maguared')">YouTube &nbsp;
        <v-icon dark>fab fa-youtube-square</v-icon>
      </v-btn>
    </v-flex>

  </v-layout>
  <v-dialog v-model="dialog"max-width="450">
    <v-card>
      <v-card-title><strong>Enlace externo</strong> </v-card-title>

      <v-card-text>
        ¿Desea abrir su navegador para visitar el sitio web  {{ enlace }}?
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="magazul" small @click="cancelaenlace">Regresar</v-btn>
        <v-btn color="maglima" small @click="abreenlaceexterno">Visitar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <v-dialog v-model="videoedcpi" max-width="85%">
    <v-card>
      <v-card-title><h2>{{ videosque[2].titulo }}</h2> </v-card-title>

      <v-card-text>
        <p>{{ videosque[2].describe}}</p>

          <video autoplay
          @ended='videoedcpi=false'
          class="centrovideo"
          width="80%" height="auto" controls autoplay
          ref="vidtutto"
          controlsList="nodownload nofullscreen">
              <source src="static/video/1402.mp4" type="video/mp4">
          Your browser does not support the video tag.
          </video>


      </v-card-text>
      <v-card-actions class="justify-center accionescard">
          <v-btn color="magazul" small @click="videoedcpi=false">Cerrar</v-btn>
      </v-card-actions>

    </v-card>
  </v-dialog>



  </div>
</template>

<script>
  import SystemInformation from './LandingPage/SystemInformation'
  import EventBus from './eventos';
  import { mapState } from 'vuex'
  const electron = require('electron');
  import path from 'path'

  export default {
    data: function () {
      return {
        datosgenerales: [],
        dialog: false,
        enlace: '',
        videoedcpi: false

      }
    },
    created () {
      this.datosgenerales = this.describe.filter(dato => dato.id == 502)
      EventBus.$emit('TITULO', this.datosgenerales[0].titulobreve);
      EventBus.$emit('SECCION', this.datosgenerales[0].descripcion);
      EventBus.$emit('ICONOBARRA', 'fas fa-home', 'white');
    },

    watch: {
      videoedcpi (val) {
            //!val && alert('Dialog is closing')
            if(this.$refs.vidtutto && !val){
              this.$refs.vidtutto.pause()
            }
      },
      drawer: function(value){

      }
    },
    name: 'inicio-offline',
    components: { SystemInformation },
    computed: {

      ...mapState('Describe', ['describe']),
      ...mapState('Queesvideos', ['videosque']),
    },

    methods: {
      play () {
    	this.wavesurfer.playPause()
    },
      muestravideo(video){
        this.videoedcpi = true
        //this.tutorialactivo=video
        //this.$refs.vidtutto.play()
        //this.videotutorial = 'static/video/'+video.video
        if(this.$refs.vidtutto){
          this.$refs.vidtutto.load()
          //this.$refs.playame1.play()

        }
      },
      open (link) {
        console.log(link)
        /*this.$electron.shell.openExternal(link)*/
        this.$electron.shell.openItem(path.join(__static, link))
        //this.$electron.shell.showItemInFolder(link)

      },
      abrePDF (link) {
        console.log(link)

        this.$electron.shell.openItem(link)


      },
      webexterna (link) {
        console.log(link)
        this.enlace = link
        //this.$electron.shell.openExternal(link)
        this.dialog=true
        //this.$electron.shell.openItem(path.join(__static, link))
        //this.$electron.shell.showItemInFolder(link)

      },
      abreenlaceexterno(){
        this.$electron.shell.openExternal(this.enlace)
        this.dialog = false
      },
      cancelaenlace(){
        this.enlace = ''
        this.dialog = false
      },
      emitMethod () {
 EventBus.$emit('visiblemenu');

    }
    }
  }
</script>

<style scoped>


.logosmag{
  max-width: 100%;
}
.logomaguared{
  padding-top: 3em;
  max-width: 300px;
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
