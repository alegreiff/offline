<template>
<div class="">
  <v-layout row wrap>
    <v-flex xs12 class="text-xs-center">
      <v-card>
              <v-card-title primary-title style="height:auto">
                <div>
                  <div>{{ describeseccion }}</div>
                </div>
              </v-card-title>
        </v-card>
    </v-flex>
  <v-flex xs3 v-for="(app, index) in tutorialespdf" :key="index" class="pa-1">
<!--<span class="authormag">{{ app.autor }}</span>-->
    <!--<v-card>
            <v-img :src="'static/miniaturas/'+app.id+'.jpg'" :alt="app.titulo" ></v-img>
            <v-card-title primary-title>
              <div>
                <h3 class="mb-0">{{ app.titulo }}</h3>

                  <v-tooltip bottom max-width="200px">
                      <v-icon
                        slot="activator"
                        color="primary"
                        dark
                      >info</v-icon>
                      <span>{{ app.autor }}</span>
                    </v-tooltip>

                <div>{{ app.describe }}</div>
              </div>
            </v-card-title>

            <v-card-actions>

                <v-layout>
                  <v-flex xs6 class="pa-1">
                    <v-tooltip top color="magrojo">
                      <v-btn dark block color="magazul" :href="'static/'+app.url"
                      :download="app.descarga+'.pdf'"
                      slot="activator">
                      <v-icon dark>arrow_drop_down_circle</v-icon>
                    </v-btn><span>Descargar el tutorial</span></v-tooltip>
                  </v-flex>
                  <v-flex xs6 class="pa-1">
                    <v-tooltip top color="magrojo">
                      <v-btn dark block color="magazul" @click="muestraPDF('/'+app.url)" slot="activator">
                      <v-icon dark>pageview</v-icon>
                    </v-btn><span>Ver el tutorial</span></v-tooltip>
                  </v-flex>
                </v-layout>
            </v-card-actions>
      </v-card>-->

      <v-card  height="100%" class="flexcard" ripple hover>
        <div class="grow">
          <v-img :src="'static/miniaturas/'+app.id+'.jpg'" class="card-imagen"></v-img>
          <v-card-title><h2 class="card-titulo">{{ app.titulo }}</h2></v-card-title>
          <v-card-text class="card-texto">{{ app.describe }}</v-card-text>
        </div>
        <v-card-actions class="justify-center accionescard">
          <v-tooltip top color="magrojo" class="pa-1">
            <v-btn fab small dark color="magazul"
            @click="pdfdescarga('static/'+app.url, app.descarga+'.pdf')"
            slot="activator">
            <v-icon medium dark>arrow_drop_down_circle</v-icon>
          </v-btn><span>Descargar el tutorial</span></v-tooltip>
          <v-tooltip top color="magrojo" class="pa-1">
            <v-btn fab small dark color="magazul" @click="muestraPDF('/'+app.url)" slot="activator">
            <v-icon medium dark>pageview</v-icon>
          </v-btn><span>Ver el tutorial</span></v-tooltip>
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

export default {
  //components: { SystemInformation },
  data: function () {
    return {
      describeseccion: 'Sugerencias de uso',
      tutorialespdf: [],
      ventana: null
    }
  },
  created() {
    //this.interactivos = this.apps;
    EventBus.$emit('TITULO', 'Sugerencias');
    this.tutorialespdf = _.sortBy(this.tutoriales, ['titulo']);
    },
    watch: {

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
          transparent: false,
          width: 800,
          backgroundColor: '#e0541e',
          show: false
        })
        this.ventana.on('closed', () => {
          this.ventana = null
        })
        PDFWindow.addSupport(this.ventana)
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

<style lang="css" scoped>


</style>
