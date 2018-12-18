<template>
<div class="pa-4 secciondescargables seccionprincipal">
  <v-layout row wrap>
  <v-flex xs3 v-for="(app, index) in tutorialespdf" :key="index" class="pa-1">
      <v-card  height="100%" class="flexcard" ripple hover>
        <div class="grow">
          <v-img :src="'static/miniaturas/'+app.id+'.jpg'" class="card-imagen"></v-img>
          <v-card-title><h2 class="card-titulo">{{ app.titulo }}</h2></v-card-title>
          <v-card-text class="card-texto">{{ app.describe }}</v-card-text>

        </div>
        <v-card-actions class="justify-center accionescard">

          <v-tooltip top color="magrojo" class="pa-1" v-if="app.video">
            <v-btn fab small dark color="magnaranja"
            @click="muestravideo(app)"
            slot="activator">
            <v-icon medium dark>fas fa-play-circle</v-icon>
          </v-btn><span>Ver el video tutorial</span></v-tooltip>

          <v-tooltip top color="magrojo" class="pa-1">
            <v-btn fab small dark color="magazul"
            @click="pdfdescarga('static/'+app.url, app.descarga+'.pdf')"
            slot="activator">
            <v-icon medium dark>fas fa-download</v-icon>
          </v-btn><span>Descargar el tutorial en PDF</span></v-tooltip>
          <v-tooltip top color="magrojo" class="pa-1">
            <v-btn fab small dark color="magazul" @click="muestraPDF('/'+app.url)" slot="activator">
            <v-icon medium dark>pageview</v-icon>
          </v-btn><span>Ver el tutorial en PDF</span></v-tooltip>
            <v-tooltip top color="magrojo" class="pa-1" max-width="200px">
              <v-btn fab small dark color="magazul" slot="activator">
              <v-icon medium dark>info</v-icon>
            </v-btn><span><b>Autor: </b>{{ app.autor }}</span></v-tooltip>
        </v-card-actions>
      </v-card>

  </v-flex>
  <v-dialog v-model="dialog" max-width="85%">
    <v-card v-if="tutorialactivo">
      <v-card-title><h2>{{ tutorialactivo.titulo }}</h2> </v-card-title>

      <v-card-text>
        <p>{{ tutorialactivo.describe }}</p>

          <video
          @ended='dialog=false'
          class="centrovideo"
          width="80%" height="auto" controls autoplay
          ref="vidtutto"
          controlsList="nodownload nofullscreen">
              <source :src="'static/video/'+tutorialactivo.video" type="video/mp4">
          Your browser does not support the video tag.
          </video>


      </v-card-text>
      <v-card-actions class="justify-center accionescard">
        <v-tooltip top color="magrojo" class="pa-1">
          <v-btn fab small dark color="magazul"
          @click="pdfdescarga('static/'+tutorialactivo.url, tutorialactivo.descarga+'.pdf')"
          slot="activator">
          <v-icon medium dark>fas fa-download</v-icon>
        </v-btn><span>Descargar el tutorial en PDF</span></v-tooltip>
        <v-tooltip top color="magrojo" class="pa-1">
          <v-btn fab small dark color="magazul" @click="muestraPDF('/'+tutorialactivo.url)" slot="activator">
          <v-icon medium dark>pageview</v-icon>
        </v-btn><span>Ver el tutorial en PDF</span></v-tooltip>
          <v-tooltip top color="magrojo" class="pa-1" max-width="200px">
            <v-btn fab small dark color="magazul" slot="activator">
            <v-icon medium dark>info</v-icon>
          </v-btn><span><b>Autor: </b>{{ tutorialactivo.autor }}</span></v-tooltip>
          <v-spacer></v-spacer>

          <v-btn color="magazul" small @click="dialog=false">Cerrar</v-btn>
      </v-card-actions>

    </v-card>
  </v-dialog>
  </v-layout>

</div>
</template>

<script>
import { mapState } from 'vuex'
import EventBus from './eventos';
const electron = require('electron');
const BrowserWindow = electron.remote.BrowserWindow;
const PDFWindow = require('electron-pdf-window')
import path from 'path'

export default {
  //components: { SystemInformation },
  data: function () {
    return {
      describeseccion: 'Sugerencias de uso',
      tutorialespdf: [],
      ventana: null,
      datosgenerales: [],
      dialog: false,
      tutorialactivo: null
    }
  },
  created() {
    //this.interactivos = this.apps;
    this.datosgenerales = this.describe.filter(dato => dato.id == 900)
    EventBus.$emit('TITULO', this.datosgenerales[0].titulobreve);
    EventBus.$emit('SECCION', this.datosgenerales[0].descripcion);
    EventBus.$emit('ICONOBARRA', 'fas fa-download', 'light-blue darken-3');
    this.tutorialespdf = _.sortBy(this.tutoriales, ['titulo']);
    },
    watch: {
      dialog (val) {
            //!val && alert('Dialog is closing')
            if(this.$refs.vidtutto && !val){
              this.$refs.vidtutto.pause()
            }
          }
    },
  computed: {
    ...mapState('Maguared', ['tutoriales']),
    ...mapState('Describe', ['describe']),
  },
  methods: {
    creacontenedorPDF(){
      this.ventana = new BrowserWindow({
          webPreferences: {
          },
          height: 600,
          frame: true,
          titleBarStyle: 'hidden',
          transparent: true,
          width: 800,
          backgroundColor: '#e0541e',
          show: false
        })
        /*
        this.ventana = new BrowserWindow({
            webPreferences: {
            },
            height: 600,
            frame: true,
            transparent: true,
            width: 800,
            backgroundColor: '#e0541e',
            show: false
          })
        */
        this.ventana.on('closed', () => {
          this.ventana = null
        })
        PDFWindow.addSupport(this.ventana)
    },
    muestravideo(video){
      this.dialog = true
      this.tutorialactivo=video
      //this.$refs.vidtutto.play()
      //this.videotutorial = 'static/video/'+video.video
      if(this.$refs.vidtutto){
        this.$refs.vidtutto.load()
        //this.$refs.playame1.play()

      }
    },
    muestraPDF(link){
      //console.log(this.ventana.id + " <=========")
      if(this.ventana === null){
        //console.log(' es null ahora ')
        this.creacontenedorPDF()
      }
      //console.log(this.ventana)
        var filex = path.join(__static, link)

        //console.log(filex)

        this.ventana.loadURL(filex)
        this.ventana.show()
        //alert(this.ventana.id)

    },
    pdfdescarga(ruta, nombre){
      //alert(ruta)
      //window.location.href= ruta
      var link = document.createElement("a");
      link.download = nombre;
      link.href = ruta;
      link.click();
    }
}
}
</script>
