<template>
<div class="pa-4 secciondescargables">
  <v-layout row wrap>
    <v-flex xs3 v-for="(app, index) in sugerenciaspdf" :key="index" class="pa-1">
        <v-card  height="100%" class="flexcard" ripple hover>
          <div class="grow">
            <v-img :src="'static/miniaturas/'+app.id+'.jpg'" class="card-imagen"></v-img>
            <v-card-title><h2 class="card-titulo">{{ index+1 }} :: {{ app.id }} :: {{ app.titulo }}</h2></v-card-title>
            <v-card-text class="card-texto">{{ app.describe }}</v-card-text>
          </div>
          <v-card-actions class="justify-center accionescard">
            <v-tooltip top color="magrojo" class="pa-1">
              <v-btn fab small dark color="magazul"
              @click="pdfdescarga('static/'+app.url, app.descarga+'.pdf')"
              slot="activator">
              <v-icon medium dark>arrow_drop_down_circle</v-icon>
            </v-btn><span>Descargar el libro</span></v-tooltip>
            <v-tooltip top color="magrojo" class="pa-1">
              <v-btn fab small dark color="magazul" @click="muestraPDF('/'+app.url)" slot="activator">
              <v-icon medium dark>pageview</v-icon>
            </v-btn><span>Ver el libro</span></v-tooltip>
              <v-tooltip top color="magrojo" class="pa-1" max-width="200px">
                <v-btn fab small dark color="magazul" slot="activator">
                <v-icon medium dark>info</v-icon>
              </v-btn><span><b>Autor: </b>{{ app.autor }}</span></v-tooltip>
          </v-card-actions>
        </v-card>
    </v-flex>

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


/*import _ from 'lodash';*/

export default {
  //components: { SystemInformation },
  data: function () {
    return {
      describeseccion: 'Sugerencias de uso',
      sugerenciaspdf: [],
      datosgenerales: [],
      ventana: null,
    }
  },
  created() {
    //this.interactivos = this.apps;
    this.datosgenerales = this.describe.filter(dato => dato.id == 800)
    EventBus.$emit('TITULO', this.datosgenerales[0].titulobreve);
    EventBus.$emit('SECCION', this.datosgenerales[0].descripcion);
    EventBus.$emit('ICONOBARRA', 'fas fa-download', 'light-blue darken-3');
    this.sugerenciaspdf = _.sortBy(this.sugerencias, ['titulo']);
    },
    watch: {

    },
  computed: {
    ...mapState('Varios', ['sugerencias', 'descargables']),
    ...mapState('Describe', ['describe']),
    /*...mapGetters('Videos', ['videoskaraokes', 'videossimples', 'videosall', 'videoscuentosnarrados', 'videoslistos']),*/
  },
  methods: {
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
    creacontenedorPDF(){

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
        this.ventana.on('closed', () => {
          this.ventana = null
        })
        PDFWindow.addSupport(this.ventana)
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

<style>
.secciondescargables{
  background-image: url("~@/assets/azul.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  min-height: calc(100vh - 164px);
}

</style>
