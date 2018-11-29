<template>
<v-app id="sandbox" :dark="dark">
  <v-navigation-drawer mobile-break-point="1800" v-model="primaryDrawer.model" absolute overflow app>
    <Menu/>
  </v-navigation-drawer>
  <v-toolbar :clipped-left="primaryDrawer.clipped" app absolute>
    <v-toolbar-side-icon v-if="primaryDrawer.type !== 'permanent'" @click.stop="primaryDrawer.model = !primaryDrawer.model"></v-toolbar-side-icon>
    <v-toolbar-title>Maguaré - MaguaRED</v-toolbar-title>
  </v-toolbar>
  <v-content>
    <v-container fluid>
      <router-view></router-view>
    </v-container>
  </v-content>
  <v-footer :inset="footer.inset" app height="100" class="px-2 ma-0">
    <v-flex xs2> <img class="imlogo" id="logo" src="~@/assets/logosfooter/gobiernodecolombia.png"> </v-flex>
    <v-flex xs2> <img class="imlogo" id="logo" src="~@/assets/logosfooter/unimedios.png"> </v-flex>
    <v-flex xs1> <img class="imlogo" id="logo" src="~@/assets/logosfooter/cero.png"> </v-flex>
    <v-flex xs1> <img class="imlogo" id="logo" src="~@/assets/logosfooter/leer.png"> </v-flex>
    <v-flex xs2> <img class="imlogo" id="logo" src="~@/assets/logosfooter/maguare.png"> </v-flex>
    <v-flex xs2> <img class="imlogo" id="logo" src="~@/assets/logosfooter/maguared.png"> </v-flex>
    <v-flex xs2> <img class="imlogo" id="logo" src="~@/assets/logosfooter/premio.png"> </v-flex>

  </v-footer>
</v-app>
</template>

<script>
import Menu from './components/Menu/Menu'
export default {
  data: () => ({
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
  }),
  components: { Menu },
}
</script>
<style >
img.imlogo {
  max-width: 100%;
}
</style>
