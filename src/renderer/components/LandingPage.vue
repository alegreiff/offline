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

      <h4 class="text-xs-center">Texto de presentación del COMO SE LLAME</h4>

      <div class="">
        <h3>Novedades</h3>
        <p>Audios infinitos (termina uno y sigue el siguiente dentro de la colección. Se acaba y vuelve a empezar)</p>
        <p>Videos infinitos (termina uno y sigue el siguiente dentro de la colección. Se acaba y vuelve a empezar)</p>
        <p>Todos los videos propuestos están cargados</p>
        <p>Todos los audios propuestos están cargados</p>
        <p>Todos los interactivos y libros propuestos están cargados</p>
        <p>Todos los contenidos (salvo audios y videos) tienen un número visible antes del título. Si hay algún cambio o ajuste, citen este número. Para los audios y videos citen el nombre</p>
        <p>Los enlaces del Footer deben abrir la web respectiva en el navegador por defecto del usuario</p>
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
