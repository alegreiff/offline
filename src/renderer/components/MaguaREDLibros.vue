<template>
<div class="pa-4 seccionlibros seccionprincipal">
<v-layout v-if="$route.params.id==='librosTodosLeeresmicuento'">
  <v-flex xs8>
    <v-btn-toggle v-model="toggle_exclusive" mandatory class="pa-1 white">
      <v-btn class="magazul"  small  v-on:click="edad=0" >Todas las edades</v-btn>&nbsp;
      <v-btn class="magazul"  small  v-on:click="edad=1" > De 0 a 6 años</v-btn>&nbsp;
      <v-btn class="magazul"  small  v-on:click="edad=7" > De 7 a 10 años</v-btn>&nbsp;
      <v-btn class="magazul"  small  v-on:click="edad=10" > De 10 años en adelante</v-btn>&nbsp;
  </v-btn-toggle>

 <!-- {{ $route.params.id }} :: {{ coleccion.length }} :: {{ edad }}  -->
  </v-flex>

  <v-flex xs4>
  <h2 class="white--text text-xs-right" style="opacity: 0.3">{{ coleccionleer.length }} libros</h2>
  </v-flex>
</v-layout>
  <v-layout row wrap>
  <v-flex xs3 v-for="(app, index) in $route.params.id==='librosTodosLeeresmicuento' ? coleccionleer: coleccion" :key="index" class="pa-1">
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
            <v-icon medium dark>fas fa-download</v-icon>
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
      ventana: null,
      edad: 0,
      toggle_exclusive: 0,
      //todosloslibros: []

    }
  },

    created() {
      this.coleccionactiva(this.$route.params.id);
      //this.todosloslibros = this.librosTodosLeeresmicuento.concat(this.librosCuerpoSonoro).concat(this.librosCuentosDerechos);
      EventBus.$emit('ICONOBARRA', 'fas fa-book-open', 'magazul');

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
      ...mapGetters('Maguared', ['librosCuerpoSonoro', 'librosCuentosDerechos', 'librosDerechosOrientaciones']),
      ...mapGetters('Varios', ['librosTodosLeeresmicuento']),
      ...mapState('Describe', ['describe']),
      coleccionleer: function(){
        if(this.edad){
          return _.filter(this.coleccion, ['edad', this.edad]);
        }else{
          return this.coleccion;
        }
      }


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
      console.log("Kambia la koletsion")
      if(id =='librosTodosLeeresmicuento'){
        this.datosgenerales = this.describe.filter(dato => dato.id == 205)
        this.coleccion = this.librosTodosLeeresmicuento

      }else if (id =='librosCuerpoSonoro') {
        this.datosgenerales = this.describe.filter(dato => dato.id == 207)
        this.coleccion = this.librosCuerpoSonoro

      }else if (id =='librosCuentosDerechos') {
        this.datosgenerales = this.describe.filter(dato => dato.id == 206)
        this.coleccion = this.librosCuentosDerechos

      }else if (id =='librosDerechosOrientaciones') {
        this.datosgenerales = this.describe.filter(dato => dato.id == 208)
        this.coleccion = this.librosDerechosOrientaciones

      }else{
        this.datosgenerales = this.describe.filter(dato => dato.id == 204)
        //this.coleccion = this.todosloslibros
        this.coleccion =this.librosTodosLeeresmicuento.concat(this.librosCuerpoSonoro).concat(this.librosCuentosDerechos).concat(this.librosDerechosOrientaciones);

      }
      EventBus.$emit('TITULO', this.datosgenerales[0].titulobreve);
      EventBus.$emit('SECCION', this.datosgenerales[0].descripcion);
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
