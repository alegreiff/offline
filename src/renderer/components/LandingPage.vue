<template>
  <div id="wrapper">
    <div class="logosm">
      <img id="logo" src="static/maguare.png" alt="electron-vue" class="logosmag">
      <img id="logo" src="static/maguared.png" alt="electron-vue" class="logosmag" v-on:click="emitMethod">
    </div>
    <button v-on:click="emitMethod">
      Enlarge text
    </button>
    <button v-on:click="open('static/librosmaguare/maguare-sopa-fiesta.pdf')">
      pdf
    </button>
    <button v-on:click="open('http://eltiempo.com')">
      el tiempo
    </button>

  </div>
</template>

<script>
  import SystemInformation from './LandingPage/SystemInformation'
  import EventBus from './eventos';
  export default {
    data: function () {
      return {
        drawer: null
      }
    },
    created () {
      EventBus.$emit('TITULO', 'Inicio');
    },
    watch: {

      drawer: function(value){
        console.log("dhsaj dkhsadjhsajd k");
        this.$parent.palabra = 'aaa';

        //this.$refs.playame.play();
      }
    },
    name: 'landing-page',
    components: { SystemInformation },
    methods: {
      open (link) {
        console.log(link)
        this.$electron.shell.openExternal(link)
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
