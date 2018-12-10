<template>
<!--<v-app id="sandbox" style="background: crimson;">-->
<v-app id="sandbox">
  <v-navigation-drawer mobile-break-point="1800" v-model="primaryDrawer.model"
  overflow app>
    <Menu/>
  </v-navigation-drawer>
  <!--<v-toolbar :clipped-left="primaryDrawer.clipped" app absolute>-->
  <v-toolbar app>

    <v-toolbar-side-icon v-if="primaryDrawer.type !== 'permanent'" @click.stop="primaryDrawer.model = !primaryDrawer.model"></v-toolbar-side-icon>
    <v-toolbar-title>Maguaré - MaguaRED - {{ tituloapp }} <span class="seccion_describe">{{ seccion_describe }}</span>


    </v-toolbar-title>
  </v-toolbar>
  <v-content>
    <v-container fluid ma-0 pa-0>
      <router-view></router-view>
    </v-container>
  </v-content>
  <v-footer inset app height="80" class="px-2 ma-0">
    <v-flex xs4> <img class="imlogo" id="logo" src="~@/assets/logosfooter/logoministerio.png"
      v-on:click="webexterna('http://www.mincultura.gov.co')"> </v-flex>
    <v-flex xs2> <img class="imlogo" id="logo" src="~@/assets/logosfooter/unimedios.png"

      v-on:click="webexterna('http://unimedios.unal.edu.co/index.php?id=268')"> </v-flex>
    <!--<v-flex xs1> <img class="imlogo" id="logo" src="~@/assets/logosfooter/cero.png"> </v-flex>
    <v-flex xs1> <img class="imlogo" id="logo" src="~@/assets/logosfooter/leer.png"> </v-flex>-->
    <v-flex xs2> <img class="imlogo" id="logo" src="~@/assets/logosfooter/maguare.png"
      v-on:click="webexterna('https://maguare.gov.co/')"> </v-flex>
    <v-flex xs2> <img class="imlogo" id="logo" src="~@/assets/logosfooter/maguared.png"
      v-on:click="webexterna('https://maguared.gov.co/')"> </v-flex>
    <v-flex xs2> <img class="imlogo" id="logo" src="~@/assets/logosfooter/premio.png"> </v-flex>

  </v-footer>
</v-app>
</template>

<script>
import Menu from './components/Menu/Menu'
import Vue from 'vue';
import EventBus from './components/eventos';
const electron = require('electron');
export default {
  data: function () {
    return {
      tituloapp: '',
      seccion_describe: '',
      dark: false,
      drawers: ['Default (no property)', 'Permanent', 'Temporary'],
      primaryDrawer: {
        model: null,
        type: 'default (no property)',

      },
      footer: {
        inset: true
      }
    }
  },

  components: { Menu },
  methods: {
    cambio() {
      let self=this;
      Vue.nextTick(function () {
      self.primaryDrawer.model = !self.primaryDrawer.model

      });
    },
    webexterna (link) {
      this.$electron.shell.openExternal(link)
      //this.$electron.shell.openItem(path.join(__static, link))
      //this.$electron.shell.showItemInFolder(link)

    },
  },
  created () {
    let self=this;
    EventBus.$on('visiblemenu', function (payLoad) {
      self.cambio();
      //cambio()

    });
    EventBus.$on('TITULO', function (payLoad) {
      self.tituloapp= payLoad;
      //cambio()

    });
    EventBus.$on('SECCION', function (payLoad) {
      self.seccion_describe= payLoad;
      //cambio()

    });

  }
}
</script>
<style >
/*
*, html
   { font: caption; }
*/
:root {
  --main-bg-color: brown;
  --magcafe:      #772705;
  --magrojo:      #e0541e;
  --magnaranja:   #f19741;
  --maglima:      #c6c74f;
  --magverde:     #8bceaf;
  --magazul:      #1db5cc;
  --magmorado:    #785395;
  --magfondogris: #f2f2f2;
  --magfondocards: #e9f9fc;
  --maggris:      #137786
}
*, html{
  user-select: none; /* Standard */
}

.container{
  margin: 0;
  padding: 0;
}
#sandbox{
  /*background-image: url("~@/assets/playa.jpg");
  background-repeat: no-repeat;
  background-size: cover;*/
  background-image: url("~@/assets/gris.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;


}

img.imlogo {
  max-width: 100%;
  cursor: pointer;
}


.flexcard {
  display: flex !important;
  background-color: var(--magfondocards) !important;
  flex-direction: column !important;
}

.cred-entidad{
  font-size: 1.6em;
  font-weight: bolder;
  text-align: center;
}
.cred-persona{
  margin: 0;
  font-weight: 800;
  text-align: center;
}
.cred-cargo{
  margin: 0 0 1em 0;
  text-align: center;
}
.seccion_describe{
  display: block;
  font-size: 0.7em;
}

</style>
