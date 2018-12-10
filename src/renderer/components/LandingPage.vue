<template>
  <div class="pa-4 iniciomg">
    <v-layout row wrap>
      <v-flex xs6>
      <img id="logo" src="static/maguare.png" alt="electron-vue" class="logosmag">
    </v-flex>
    <v-flex xs6>
<img id="logo" src="static/maguared.png" alt="electron-vue" class="logosmag" >
    </v-flex>
    <v-flex xs12 sm8 offset-sm2>
      <v-btn color="magazul" dark block v-on:click="emitMethod">Descubre los contenidos que hemos preparado</v-btn>
    </v-flex>
    <v-flex xs12 sm8 offset-sm2>

      <h4 class="text-xs-center">Bienvenidos a la Estrategia Digital de Cultura y Primera Infancia del Ministerio de Cultura</h4>

      <div class="">
        <p>La Estrategia Digital de Cultura y Primera Infancia del Ministerio de Cultura ofrece contenidos especializados y de calidad en el entorno digital dirigidos a niños menores de seis años, sus padres, familias, y maestros y en general para  todos los cuidadores de primera infancia.</p>

        <p>En esta versión digital que no necesita conexión a internet, encontrarán una selección de los mejores contenidos de Maguaré y MaguaRED que promueven los derechos culturales y los lenguajes expresivos de los niños.</p>

        <p>A través del menú de la izquierda (poner el ícono de las barritas para que no haya pierde) tendrán acceso a más de 150 videos, audios, libros y material descargable, completamente gratuito. </p>

        <p>Los invitamos a descubrir más contenidos y recursos en www.maguare.gov.co y www.maguared.gov.co, y únanse a la comunidad a través de las redes sociales FB, TW y YT (poner con los vínculos)</p>
      </div>
    </v-flex>
  </v-layout>


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
        datosgenerales: []
      }
    },
    created () {
      this.datosgenerales = this.describe.filter(dato => dato.id == 502)
      EventBus.$emit('TITULO', this.datosgenerales[0].titulobreve);
      EventBus.$emit('SECCION', this.datosgenerales[0].descripcion);
    },
    watch: {

      drawer: function(value){

      }
    },
    name: 'landing-page',
    components: { SystemInformation },
    computed: {

      ...mapState('Describe', ['describe']),
    },
    methods: {
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
        this.$electron.shell.openExternal(link)
        //this.$electron.shell.openItem(path.join(__static, link))
        //this.$electron.shell.showItemInFolder(link)

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
.iniciomg{
  background-image: url("~@/assets/gris.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  background-attachment: fixed;

}
</style>
