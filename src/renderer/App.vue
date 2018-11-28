<template>
<v-app id="sandbox" :dark="dark">
  <v-navigation-drawer mobile-break-point="6000" v-model="primaryDrawer.model" absolute overflow app>
    <v-list one-line dense>
      <v-list-tile :to="{path: '/'}">
        <v-list-tile-action>
          <v-icon>home</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Inicio</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <!--<v-list-tile :to="{path: '/interactivos'}" >
            <v-list-tile-action><v-icon>more_horiz</v-icon></v-list-tile-action>
            <v-list-tile-content><v-list-tile-title>Ensayos</v-list-tile-title></v-list-tile-content>
        </v-list-tile>-->
        <v-divider></v-divider>
      <v-subheader inset><strong>Maguaré</strong></v-subheader>
      <v-divider></v-divider>
      <v-subheader inset>Audios</v-subheader>
      <v-list-tile :to="{name: 'coleccion', params: { id: 'audiosSincoleccion'}}">
        <v-list-tile-action>
          <v-icon>audiotrack</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Sin colección</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile :to="{name: 'coleccion', params: { id: 'audiosCuentoencanto'}}">
        <v-list-tile-action>
          <v-icon>audiotrack</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Con mi cuento encanto</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile :to="{name: 'coleccion', params: { id: 'audiosCuentosaloido'}}">
        <v-list-tile-action>
          <v-icon>audiotrack</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Cuentos al oído</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile :to="{name: 'coleccion', params: { id: 'audiosCeiba'}}">
        <v-list-tile-action>
          <v-icon>audiotrack</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Maguaré en La Ceiba</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-subheader inset>Videos</v-subheader>
      <v-list-tile :to="{name: 'vid', params: { id: 'videoslistos'}}">
        <v-list-tile-action>
          <v-icon>music_video</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Videos OK</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-subheader inset>Interactivos</v-subheader>
      <v-list-tile :to="{path: '/interactivos'}" >
          <v-list-tile-action><v-icon>extension</v-icon></v-list-tile-action>
          <v-list-tile-content><v-list-tile-title>Interactivos</v-list-tile-title></v-list-tile-content>
        </v-list-tile>
      <v-divider></v-divider>
      <v-subheader inset>MaguaRED</v-subheader>

    </v-list>
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
    <v-flex xs1> <a href="static/cs.pdf" target="_blank">
      <img class="imlogo" id="logo" src="~@/assets/logosfooter/leer.png">
    </a> </v-flex>
    <v-flex xs2> <a href="static/web/bailaconelarmadj/index.html" target="_blank">
      <img class="imlogo" id="logo" src="~@/assets/logosfooter/maguare.png">
    </a> </v-flex>
    <v-flex xs2> <a href="https://maguared.gov.co" target="_blank">
        <img class="imlogo" id="logo" src="~@/assets/logosfooter/maguared.png">
      </a> </v-flex>
    <v-flex xs2> <img class="imlogo" id="logo" src="~@/assets/logosfooter/premio.png"> </v-flex>

  </v-footer>
</v-app>
</template>

<script>
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
  })
}
</script>
<style >
img.imlogo {
  max-width: 100%;
}
</style>
