<template>
<!--<v-app id="sandbox" style="background: crimson;">-->
<v-app id="sandbox">
  <v-navigation-drawer mobile-break-point="1800" v-model="primaryDrawer.model"
  overflow app>
    <Menu/>
  </v-navigation-drawer>
  <!--<v-toolbar :clipped-left="primaryDrawer.clipped" app absolute>-->
  <v-toolbar app dark color="blue-grey lighten-2">

    <v-toolbar-side-icon v-if="primaryDrawer.type !== 'permanent'" @click.stop="primaryDrawer.model = !primaryDrawer.model">
      <v-icon medium>fas fa-bars</v-icon>
    </v-toolbar-side-icon>
    <v-toolbar-title ><strong>Maguaré - MaguaRED - {{ tituloapp }}</strong> <span class="seccion_describe">{{ seccion_describe }}</span>

    </v-toolbar-title>
    <v-spacer></v-spacer><v-icon large class="bigcola" :color="coloricono">{{ iconobarra }}</v-icon>
  </v-toolbar>
  <v-content>
    <v-container fluid ma-0 pa-0>

      <router-view></router-view>

    </v-container>
  </v-content>
  <v-footer inset app height="80" class="px-2 ma-0" color="blue-grey lighten-5">
    <v-flex xs4> <img class="imlogo" id="logo" src="~@/assets/logosfooter/logoministerio.png"
      v-on:click="webexterna('http://www.mincultura.gov.co/Paginas/default.aspx')"> </v-flex>
    <v-flex xs2> <img class="imlogo" id="logo" src="~@/assets/logosfooter/unimedios.png"

      v-on:click="webexterna('http://unimedios.unal.edu.co/index.php?id=268')"> </v-flex>
    <!--<v-flex xs1> <img class="imlogo" id="logo" src="~@/assets/logosfooter/cero.png"> </v-flex>
    <v-flex xs1> <img class="imlogo" id="logo" src="~@/assets/logosfooter/leer.png"> </v-flex>-->
    <v-flex xs2> <img class="imlogo" id="logo" src="~@/assets/logosfooter/maguare.png"
      v-on:click="webexterna('https://maguare.gov.co/')"> </v-flex>
    <v-flex xs2> <img class="imlogo" id="logo" src="~@/assets/logosfooter/maguared.png"
      v-on:click="webexterna('https://maguared.gov.co/')"> </v-flex>
    <v-flex xs2> <img class="imlogo" id="logo" src="~@/assets/logosfooter/premio.png" v-on:click="webexterna('https://maguared.gov.co/maguare-y-maguared-reciben-distincion-en-el-festival-comkids/')"> </v-flex>

  </v-footer>
      <v-dialog v-model="dialog"max-width="450">
        <v-card>
          <v-card-title><strong>Enlace externo</strong> </v-card-title>

          <v-card-text>
            ¿Desea abrir su navegador para visitar el sitio web  {{ enlace }}?
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="magazul" small @click="cancelaenlace">Regresar</v-btn>
            <v-btn color="maglima" small @click="abreenlaceexterno">Visitar</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog v-model="infoffline"max-width="450">
        <v-card>
          <v-card-title><strong>Enlace externo</strong> </v-card-title>

          <v-card-text>
            <SystemInformation />
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

          </v-card-actions>
        </v-card>
      </v-dialog>
</v-app>
</template>

<script>
import SystemInformation from './components/LandingPage/SystemInformation'
import Menu from './components/Menu/Menu'
import Vue from 'vue';
import EventBus from './components/eventos';
const electron = require('electron');
export default {
  data: function () {
    return {
      infoffline: false,
      dialog: false,
      enlace: '',
      coloricono: 'white',
      iconobarra: 'fas fa-home',
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

  components: { Menu, SystemInformation },
  methods: {
    cambio() {
      let self=this;
      Vue.nextTick(function () {
      self.primaryDrawer.model = !self.primaryDrawer.model

      });
    },
    webexterna (link) {
      this.enlace = link
      //alert(link)
      //this.$electron.shell.openExternal(link)
      this.dialog=true

    },
    abreenlaceexterno(){
      this.$electron.shell.openExternal(this.enlace)
      this.dialog = false
    },
    cancelaenlace(){
      this.enlace = ''
      this.dialog = false
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
    EventBus.$on('ICONOBARRA', function (a, b) {
      self.iconobarra= a;
      self.coloricono = b;
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
  --magcafe:        #772705;
  --magrojo:        #e0541e;
  --magnaranja:     #f19741;
  --maglima:        #c6c74f;
  --magverde:       #8bceaf;
  --magazul:        #1db5cc;
  --magmorado:      #785395;
  --magfondogris:   #f2f2f2;
  --magfondocards:  #e9f9fc;
  --maggris:        #137786
}
*, html{
/*select or not to select text*/
  user-select: none;
}

.container{
  margin: 0;
  padding: 0;
}
#sandbox{
  background-image: url("~@/assets/gris.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;


}

.accionescard{
  background: var(--magfondogris);
}
.card-titulo{
  font-size: 1.0em;
  text-align: center;
  margin: 0 auto;
}
.card-imagen{
  max-width: 100%;
  margin: 0.2em auto;
  border-radius: 0.3em;
}
.card-texto{
  font-size: 1.2em !important;
}
  img.logomini{
    max-height: 60px;
    margin: 0.5em auto;
    display: block;
  }
  img.logominim{
    max-height: 40px;
    margin: 0.5em auto;
    display: block;
  }
  .menu_interactivos{
    border-bottom: var(--magmorado) 3px solid;
  }
  .menu_videos{
    border-bottom: var(--magnaranja) 3px solid;
  }
  .menu_audios{
    border-bottom: var(--maglima) 3px solid;
  }
  .menu_libros{
    border-bottom: var(--magazul) 3px solid;
  }
span.authormag{
  font-size: 0.8em;
  color: var(--maggris);
  font-weight: 800;
}

img.imlogo {
  max-width: 100%;
  cursor: pointer;
}
img.toolsimagen{
  max-width: 100%;
  margin: 0 auto;

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
.bigcola{
  font-size: 3.67em !important;
  /*background-color: white;
  padding: 5px;*/

}



::-webkit-scrollbar
{
	width: 18px;
}

::-webkit-scrollbar-track {
      background-color: #8fe2ef;
} /* the new scrollbar will have a flat appearance with the set background color */

::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, 0.2);
} /* this will style the thumb, ignoring the track */

::-webkit-scrollbar-button {
      background-color: #168a9c;
} /* optionally, you can style the top and the bottom buttons (left and right for horizontal bars) */

::-webkit-scrollbar-corner {
      background-color: black;
}
.seccionprincipal{

  background-repeat: repeat;
  background-position: center;
  background-attachment: fixed;
  min-height: calc(100vh - 140px);

}

.card-texto{
  font-size: 1.0em;
}

p.lyrics{
  padding: 1em;
  margin: 0 auto;
  white-space:pre-line;
  font-size: 1.2em;
}

.centrovideo {
    margin-left: auto;
    margin-right: auto;
    display: block
}
/*MARCADORES COLOR SECCION*/
.seccionaudios{
  background-image: url("~@/assets/lima.png");
}
.acercade, .rojomg{
  background-image: url("~@/assets/rojo.png");
}
.secciondescargables{
  background-image: url("~@/assets/azul.png");
}
.seccioninteractivos{
  background-image: url("~@/assets/morado.png");
}
.seccionlibros{
  background-image: url("~@/assets/azul.png");
}
.seccionvideos{
  background-image: url("~@/assets/naranja.png");
}
.allvideoslista{
  padding: 0.2em;
  margin-bottom: 0.2em;
}
.botonestrategia{
  margin: -20px 0 1em 0;
}


.politicasdeuso{
margin-bottom: 1em;
}


audio::-webkit-media-controls-volume-slider, video::-webkit-media-controls-volume-slider{
  cursor: pointer;
}
audio::-webkit-media-controls-timeline, video::-webkit-media-controls-timeline{

  max-width: calc(100% - 300px);
  cursor: pointer;
}
video::-webkit-media-controls-play-button, audio::-webkit-media-controls-play-button{
  cursor: pointer;
}
video::-webkit-media-controls-mute-button, audio::-webkit-media-controls-mute-button{
  cursor: pointer;
}





audio{
  min-width: 100%;
}



audio::-webkit-media-controls-enclosure {
    overflow:hidden;
}
</style>
