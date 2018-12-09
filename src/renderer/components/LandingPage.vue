<template>
  <div id="wrapper">
    <div class="logosm">
      <img id="logo" src="static/maguare.png" alt="electron-vue" class="logosmag">
      <img id="logo" src="static/maguared.png" alt="electron-vue" class="logosmag" v-on:click="emitMethod">
    </div>
    <h1>Versión 0.062 "laculturaesdetodos"</h1>
    <button v-on:click="emitMethod">
      Enlarge text
    </button>
    <button v-on:click="open('/librosmaguare/maguare-sopa-fiesta.pdf')">
      abre archivo pdf
    </button>
    <button v-on:click="open('/librosmaguare/maguare-sopa-fiesta.pdf')">
      abre pdf con slash
    </button>
    <button v-on:click="webexterna('http://eltiempo.com')">
      el tiempo
    </button>

  </div>
</template>

<script>
  import SystemInformation from './LandingPage/SystemInformation'
  import EventBus from './eventos';
  const electron = require('electron');
  import path from 'path'

  export default {
    data: function () {
      return {
        drawer: null
      }
    },
    created () {
      EventBus.$emit('TITULO', 'Inicio');
      EventBus.$emit('SECCION', 'Bienvenidos');
    },
    watch: {

      drawer: function(value){

      }
    },
    name: 'landing-page',
    components: { SystemInformation },
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

       EventBus.$emit('EVENT_NAME', 'Hooola');
    }
    }
  }
</script>

<style scoped>
.wrapper{
  background-color: orange !important;
}
.logosm{
  display: grid;
  padding: 1em;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1em;
}
.logosmag{
  width: 100%;
  margin: 0 auto;
}
</style>
