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
  <v-flex xs3 v-for="(libro, index) in coleccion" :key="index" class="pa-1">
    <v-card>
            <!--<v-img :src="'static/miniaturas/'+libro.id+'.jpg'" :alt="libro.titulo" ></v-img>-->
            i m a g e n

            <v-card-title primary-title style="height:auto">
              <div>
                <h3 class="mb-0">{{ libro.titulo }}</h3>
                <span>{{ libro.autor }}</span>
                <div style="height: 160px">{{ libro.describe }}</div>

              </div>
            </v-card-title>

            <v-card-actions >

                <v-btn style="100%" small class="white--text" color="blue" block :href="'static/'+libro.url" target="_self">
                  Descargar el libro
                </v-btn>
                <v-btn style="100%" small class="white--text" color="blue" block @click="muestraPDF('/'+libro.url)" target="_self">
                  Muestra INLINE
                </v-btn>


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
      ...mapGetters('Varios', ['librosCeiba', 'librosFiesta', 'librosLEMC', 'librosmaguare']),
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

      if(id =='librosCeiba'){
        this.coleccion = this.librosCeiba
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
  }
}
</script>
<style lang="css" scoped>
</style>
