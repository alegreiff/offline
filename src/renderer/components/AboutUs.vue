<template>
  <div class="pa-4 acercade seccionprincipal">
    <v-layout>
    <v-flex xs12 sm8 offset-sm2>
      <v-card class="cardo">
        <!--<v-img
          class="white--text"
          height="200px"
          src="static/creditos.jpg">
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline"></span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-img>-->
        <v-card-text>
          <v-tabs>
            <v-tab>
              Maguaré - MaguaRED

            </v-tab>
            <v-tab-item>
              <div class="text-xs-center">
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
            </v-tab-item>
            <v-tab>
              Desarrollo
            </v-tab>
            <v-tab-item>

              <p class="cred-persona">Marcela Benavides Estévez</p>
              <p class="cred-cargo">Coordinadora Estrategia Digital de Cultura y Primera Infancia Maguaré y MaguaRED</p>
              <p class="cred-persona">Edna Katerine Moreno Velandia</p>
              <p class="cred-cargo">Selección y curaduría de contenidos - Maguaré</p>
              <p class="cred-persona">Juan Sebastián Salazar Piedrahita</p>
              <p class="cred-cargo">Selección y curaduría de contenidos - MaguaRED</p>
              <p class="cred-persona">Mario Cubillos Peña</p>
              <p class="cred-cargo">Producción general</p>
              <p class="cred-persona">Jaime Augusto de Greiff Cabezas</p>
              <p class="cred-cargo">Diseño, desarrollo y programación</p>
            </v-tab-item>
            <v-tab>
              Herramientas
            </v-tab>
            <v-tab-item>
              <span @click="sumajaime()"><img class="imlogo" id="logo" src="~@/assets/tools.png"></span>


            </v-tab-item>
          </v-tabs>

        </v-card-text>
        <v-card-actions>
          <v-dialog v-model="jaime"max-width="1600" persistent>
            <v-card class="magrojo">


              <v-card-text class="white--text text-xs-center" style="font-size: 3em;">
                
                <img class="imlogo" id="logo" src="~@/assets/futbol.jpg">
                <p style="font-size: 0.5em">Diseño, desarrollo, programación: Jaime de Greiff - Noviembre - diciembre de 2018</p>
                <br><br>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>

              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import EventBus from './eventos';
  const electron = require('electron');
  import path from 'path'

  export default {
    data: function () {
      return {
        jaime: false,
        cuenta: 0,
        drawer: null,
        datosgenerales: []
      }
    },
    watch: {
      cuenta: function (id) {
        if(id === 21){
          this.jaime = true;
        }


      },
    },
    created () {
      this.datosgenerales = this.describe.filter(dato => dato.id == 501)
      EventBus.$emit('TITULO', this.datosgenerales[0].titulobreve);
      EventBus.$emit('SECCION', this.datosgenerales[0].descripcion);
      EventBus.$emit('ICONOBARRA', 'fas fa-user-friends', 'magrojo');
    },

    name: 'acerca-de',
    methods: {
      sumajaime(){
        this.cuenta++
      },
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

    },
    computed: {

      ...mapState('Describe', ['describe']),
    }
  }
</script>
