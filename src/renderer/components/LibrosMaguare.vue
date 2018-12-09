<template>
<div class="pa-4 seccionlibros">
  <v-layout row wrap>

  <v-flex xs3 v-for="(app, index) in coleccion" :key="index" class="pa-1">
    <v-card  height="100%" class="flexcard" ripple hover>
      <div class="grow">
        <v-img :src="'static/miniaturas/'+app.id+'.jpg'" class="card-imagen"></v-img>
        <v-card-title><h2 class="card-titulo">{{ app.id }} ---  {{ app.titulo }}</h2></v-card-title>
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
      <v-card-actions class="maggris justify-center accionescard" v-if="app.urlbn">
        <v-tooltip top color="magrojo" class="pa-1">
          <v-btn fab small  color="magazul"
          @click="pdfdescarga('static/'+app.urlbn, app.descarga+'BN.pdf')"
          slot="activator">
          <v-icon medium dark>arrow_drop_down_circle</v-icon>
        </v-btn><span>Descargar el libro en blanco y negro</span></v-tooltip>
        <v-tooltip top color="magrojo" class="pa-1">
          <v-btn fab small  color="magazul" @click="muestraPDF('/'+app.urlbn)" slot="activator">
          <v-icon medium dark>pageview</v-icon>
        </v-btn><span>Ver el libro en blanco y negro</span></v-tooltip>
      </v-card-actions>
    </v-card>
</v-flex>

  </v-layout>

</div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import EventBus from './eventos'
const electron = require('electron');
const BrowserWindow = electron.remote.BrowserWindow;
const PDFWindow = require('electron-pdf-window')

import path from 'path'

export default {
  //components: { SystemInformation },
  data: function () {
    return {
      describeseccion: 'Presentación de los seis libros de Maguaré en La Ceiba',
      //librosmaguarepdf: [],
      coleccion: [],
      ventana: null,
      datosgenerales: []

    }
  },

    created() {
      this.coleccionactiva(this.$route.params.id);

    },
    watch: {
      '$route.params.id': function (id) {
        //alert(id)
        this.coleccionactiva(id)
        //this.ventana=close();
        //this.ventana = null;
        if(this.ventana !==null){
          this.ventana.close()
          this.ventana = null
        }

      },
    },
    computed: {
      //...mapState('Varios', ['libros']),
      ...mapGetters('Varios', ['librosCeiba', 'librosFiesta', 'librosLEMC', 'librosmaguare']),
      ...mapState('Describe', ['describe']),
    },
  methods: {

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
    },
    coleccionactiva(id){

      if(id =='librosCeiba'){
        this.datosgenerales = this.describe.filter(dato => dato.id == 201)
        this.coleccion = this.librosCeiba

      }else if (id =='librosFiesta') {
        this.datosgenerales = this.describe.filter(dato => dato.id == 203)
        this.coleccion = this.librosFiesta

      }else if (id =='librosLEMC') {
        this.datosgenerales = this.describe.filter(dato => dato.id == 202)
        this.coleccion = this.librosLEMC

      }else{
        this.datosgenerales = this.describe.filter(dato => dato.id == 200)
        this.coleccion = this.librosmaguare

      }
      EventBus.$emit('TITULO', this.datosgenerales[0].titulobreve);
      EventBus.$emit('SECCION', this.datosgenerales[0].descripcion);
      this.coleccion = _.sortBy(this.coleccion, ['titulo']);
    },
  }
}
</script>
<style>
.seccionlibros{
  background-image: url("~@/assets/azul.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  /*height: 100vh;*/
}
</style>
