<template>
  <div id="acercade" class="pa-4">
    <v-layout>
    <v-flex xs12 sm8 offset-sm2>
      <v-card class="cardo">
        <v-img
          class="white--text"
          height="200px"
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">Top 10 Australian beaches</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-img>
        <v-card-title >
          <div class="">
            <p class="cred-entidad">Ministerio de Cultura</p>
<p class="cred-persona">Carmen Inés Vásquez Camacho</p>
<p class="cred-cargo">Ministra de Cultura</p>

<p class="cred-persona">Claudia Isabel Victoria Niño Izquierdo</p>
<p class="cred-cargo">Secretaria General</p>

<p class="cred-persona">David Melo Torres</p>
<p class="cred-cargo">Viceministro</p>

<p class="cred-persona">Guiomar Acevedo Gómez</p>
<p class="cred-cargo">Directora de Artes</p>

<p class="cred-persona">Sandra Patricia Argel Raciny</p>
<p class="cred-cargo">Asesora Programa de Primera Infancia</p>

<p class="cred-persona">Marcela Benavides Estévez</p>
<p class="cred-cargo">Coordinadora Estrategia Digital de Cultura y Primera Infancia Maguaré y MaguaRED</p>

<p class="cred-persona">Mario Cubillos Peña</p>
<p class="cred-cargo">Productor Estrategia Digital de Cultura y Primera Infancia Maguaré y MaguaRED</p>

<p class="cred-persona">Katerine Moreno Velandia</p>
<p class="cred-cargo">Directora de contenidos www.maguare.gov.co</p>

<p class="cred-persona">Juan Sebastián Salazar Piedrahita</p>
<p class="cred-cargo">Director de contenidos www.MaguaRED.gov.co</p>

<p class="cred-persona">Nibeth Adriana Duarte Camacho</p>
<p class="cred-cargo">Periodista y gestora digital www.maguaRED.gov.co</p>

<p class="cred-persona">Cristina Arévalo Yandar</p>
<p class="cred-cargo">Estratega digital</p>

<p class="cred-persona">Yuyu Velasco</p>
<p class="cred-cargo">Diseñadora gráfica</p>

<p class="cred-persona">Liliana Casas Pardo</p>
<p class="cred-cargo">Alianzas y socializaciones</p>

<p class="cred-persona">Jaime Augusto de Greiff Cabezas</p>
<p class="cred-cargo">Desarrollo y administración WordPress</p>

<p class="cred-entidad">Universidad Nacional de Colombia</p>
<p class="cred-persona">Dolly Montoya Castaño</p>
<p class="cred-cargo">Rectora</p>

<p class="cred-persona">Fredy Fernando Chaparro Sanabria</p>
<p class="cred-cargo">Director Unimedios</p>

<p class="cred-persona">Liseth Paola Sáyago Cortes</p>
<p class="cred-cargo">Jefe Oficina de producción y realización audiovisual Unimedios</p>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
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
.cardo{
  opacity: 0.8;
}
#acercade{
  background-image: url("~@/assets/ceiba.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;


  background-attachment: fixed;
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
