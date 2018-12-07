<template>
  <div id="acercade" class="pa-4">
  </div>
</template>

<script>
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
      EventBus.$emit('TITULO', 'Acerca de...');
    },
    watch: {

    },
    name: 'acerca-de',
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

#acercade{
  background-image: url("~@/assets/ceiba.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 100vh;
}
.container{
  backgroound-color: lime !important;
  min-height: 100% !important;
}
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
