<template>
<div class="">
  <v-layout row wrap>
    <v-flex xs12 class="text-xs-center">
      <v-card>
              <v-card-title primary-title style="height:auto">
                <div>
                  <div>{{ describeseccion }} {{ coleccion.length }}</div>
                  <div class="">

                  </div>
                </div>
              </v-card-title>
        </v-card>
    </v-flex>
  <v-flex xs3 v-for="(app, index) in coleccion" :key="index" class="pa-1">
    <!--<v-card>
            <v-img :src="'static/miniaturas/'+libro.id+'.jpg'" :alt="libro.titulo" ></v-img>


            <v-card-title primary-title style="height:auto">
              <div>
                <h3 class="mb-0">{{ libro.titulo }}</h3>
                <span>{{ libro.autor }}</span>
                <div style="height: 160px">{{ libro.describe }}</div>

              </div>
            </v-card-title>

            <v-card-actions >

                <v-btn small class="white--text" color="blue" block :href="'static/'+libro.url" target="_self" :download="libro.descarga">
                  Descargar el libro
                </v-btn>
                <v-btn small class="white--text" color="blue" block @click="muestraPDF('/'+libro.url)" target="_self">
                  Muestra INLINE
                </v-btn>


            </v-card-actions>
      </v-card>-->

      <v-card  height="100%" class="flexcard" ripple hover>
        <div class="grow">
          <v-img :src="'static/miniaturas/'+app.id+'.jpg'" class="card-imagen"></v-img>
          <v-card-title><h2 class="card-titulo">{{ app.id }} :: {{ app.titulo }}</h2></v-card-title>
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
      ventana: null

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
      ...mapGetters('Varios', ['librosTodosLeeresmicuento']),
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
    coleccionactiva(id){

      if(id =='librosTodosLeeresmicuento'){
        this.coleccion = this.librosTodosLeeresmicuento
        EventBus.$emit('TITULO', 'Libros - Maguaré en La Ceiba');
      }else if (id =='librosFiesta') {
        this.coleccion = this.librosFiesta
        EventBus.$emit('TITULO', 'Libros - Fiesta de la lectura');
      }else if (id =='librosLEMC') {
        this.coleccion = this.librosLEMC
        EventBus.$emit('TITULO', 'Libros - Leer es mi cuento');
      }else{
        this.coleccion = this.librosmaguare
        EventBus.$emit('TITULO', 'Libros');
      }
      this.coleccion = _.sortBy(this.coleccion, ['titulo']);
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

</style>
