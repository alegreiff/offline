<template>
<!--<v-app id="sandbox" style="background: crimson;">-->
<v-app id="sandbox">
  <v-navigation-drawer mobile-break-point="1800" v-model="primaryDrawer.model"  overflow app>
    <Menu/>
  </v-navigation-drawer>
  <!--<v-toolbar :clipped-left="primaryDrawer.clipped" app absolute>-->
  <v-toolbar :clipped-left="primaryDrawer.clipped" app>

    <v-toolbar-side-icon v-if="primaryDrawer.type !== 'permanent'" @click.stop="primaryDrawer.model = !primaryDrawer.model"></v-toolbar-side-icon>
    <v-toolbar-title>Maguaré - MaguaRED - {{ tituloapp }}

    </v-toolbar-title>
  </v-toolbar>
  <v-content>
    <v-container fluid ma-0 pa-0>
      <router-view></router-view>
    </v-container>
  </v-content>
  <v-footer :inset="footer.inset" app height="100" class="px-2 ma-0">
    <v-flex xs4> <img class="imlogo" id="logo" src="~@/assets/logosfooter/logoministerio.png"> </v-flex>
    <v-flex xs2> <img class="imlogo" id="logo" src="~@/assets/logosfooter/unimedios.png"> </v-flex>
    <!--<v-flex xs1> <img class="imlogo" id="logo" src="~@/assets/logosfooter/cero.png"> </v-flex>
    <v-flex xs1> <img class="imlogo" id="logo" src="~@/assets/logosfooter/leer.png"> </v-flex>-->
    <v-flex xs2> <img class="imlogo" id="logo" src="~@/assets/logosfooter/maguare.png"> </v-flex>
    <v-flex xs2> <img class="imlogo" id="logo" src="~@/assets/logosfooter/maguared.png"> </v-flex>
    <v-flex xs2> <img class="imlogo" id="logo" src="~@/assets/logosfooter/premio.png"> </v-flex>

  </v-footer>
</v-app>
</template>

<script>
import Menu from './components/Menu/Menu'
import Vue from 'vue';
import EventBus from './components/eventos';
export default {
  data: function () {
    return {
      tituloapp: '',
      //k: 'aaa',
      dark: false,
      drawers: ['Default (no property)', 'Permanent', 'Temporary'],
      primaryDrawer: {
        model: null,
        type: 'default (no property)',
        clipped: false,
        floating: false,
        mini: false
      },
      footer: {
        inset: true
      }
    }
  },

  components: { Menu },
  methods: {
    cambio(payLoad) {
      let self=this;
      Vue.nextTick(function () {
      self.primaryDrawer.model = !self.primaryDrawer.model

      });
    }
  },
  created () {
    let self=this;
    EventBus.$on('EVENT_NAME', function (payLoad) {
      self.cambio(payLoad);
      //cambio()

    });
    EventBus.$on('TITULO', function (payLoad) {
      self.tituloapp= payLoad;
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
  --maggris:      #137786;
  --magfondogris: #f2f2f2;
  --magfondocards: #e9f9fc
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
  background-image: url("~@/assets/cama.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;


}

img.imlogo {
  max-width: 100%;
}


.flexcard {
  display: flex !important;
  background-color: var(--magfondocards) !important;
  flex-direction: column !important;
}
</style>
