<template>
<div class="pa-4 seccionaudios">
  <v-layout row wrap>
        <v-flex xs12 pa-1>
          <v-card>
              <span class="pa-1">Seleccione un audio</span><v-select class="px-4 ma-0"

                :items="coleccion"
                v-model="selected"
                color="primary"

                item-text="titulo"
                item-value="id"
                >
              </v-select>

          </v-card>
        </v-flex>
      </v-layout>
      <v-layout row wrap v-if="cancionactiva">
        <v-flex xs12 pa-1>
        <v-card dark color="primary">
          <v-card-text class="pa-2">
            <h2 class="" ref="tituloref">{{ cancionactiva.titulo }}</h2> <h4>{{ cancionactiva.autor }}</h4>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs6 class="pa-2 text-xs-center">
        <v-card dark color="white" class="text-xs-center">
          <img :src="'static/miniaturas/'+cancionactiva.id+'.jpg'"
          :alt="cancionactiva.titulo"
          class="miniatura">

          <v-card-text class="px-0 grey--text">
            <h3 class="describe text-xs-center pa-1">{{ cancionactiva.describe }}</h3>

          </v-card-text>


        </v-card>
      </v-flex>
      <v-flex xs6 class="pa-2">
          <v-card dark color="white" class="my-0 px-2">

                <audio controls ref="playame1" class="audiofull" autoplay v-if="quesuena!=''" controlsList="nodownload">
                  <source :src="quesuena" type="audio/mpeg">
                  Este producto NO es compatible con su computador
                </audio>

            <v-card-text class="px-0 grey--text">
              <p v-if="cancionactiva.letra" v-html="cancionactiva.letra" class="lyrics"></p>
            </v-card-text>
          </v-card>
        </v-flex>

      </v-layout>
</div>
</template>

<script>
import SystemInformation from './LandingPage/SystemInformation'
import { mapState, mapGetters } from 'vuex'
import path from 'path'
import _ from 'lodash';
import EventBus from './eventos';

export default {
  //components: { SystemInformation },
  data: function () {
    return {
      selected: 'inicio',
      coleccion: [],
      quesuena: '',
      cancionactiva: '',
      datosgenerales: []
    }
  },
  created() {

    this.coleccionactiva(this.$route.params.id);


    //this.selected= 'inicio'
    },
    watch: {
      '$route.params.id': function (id) {
        //alert(id)
        this.coleccionactiva(id)

      },
      selected: function(value){

        if(value !='inicio'){
          var t = this.coleccion.find(x => x.id === value)
          this.playSound(t)
        }

        //this.$refs.playame.play();
      }
    },
  computed: {
    ...mapState('Audios', ['main', 'nombre', 'canciones']),
    ...mapState('Describe', ['describe']),
    ...mapGetters('Audios', ['audiosCeiba', 'audiosCuentosaloido', 'audiosCuentoencanto', 'audiosSweetsongs', 'audiosSincoleccion', 'audiosFiesta', 'audiosKamentsa']),
  },
  methods: {
    coleccionactiva(id){
      if(this.$refs.playame1){
        this.quesuena= '';
        this.$refs.playame1.pause()
      }
      if(id =='audiosCeiba'){
        this.datosgenerales = this.describe.filter(dato => dato.id == 1)
        this.coleccion = this.audiosCeiba

      }else if (id =='audiosCuentosaloido') {
        this.datosgenerales = this.describe.filter(dato => dato.id == 3)
        this.coleccion = this.audiosCuentosaloido

      }else if (id =='audiosCuentoencanto') {
        this.datosgenerales = this.describe.filter(dato => dato.id == 2)
        this.coleccion = this.audiosCuentoencanto

      }else if (id =='audiosSweetsongs') {
        this.datosgenerales = this.describe.filter(dato => dato.id == 5)
        this.coleccion = this.audiosSweetsongs
      }else if (id =='audiosKamentsa') {
        this.datosgenerales = this.describe.filter(dato => dato.id == 6)
        this.coleccion = this.audiosKamentsa

      }else if (id =='audiosFiesta') {
        this.datosgenerales = this.describe.filter(dato => dato.id == 4)
        this.coleccion = this.audiosFiesta
      }else{
        this.datosgenerales = this.describe.filter(dato => dato.id == 0)
        this.coleccion = this.canciones

      }
      EventBus.$emit('TITULO', this.datosgenerales[0].titulobreve);
      EventBus.$emit('SECCION', this.datosgenerales[0].descripcion);
      this.coleccion = _.sortBy(this.coleccion, ['titulo']);
      this.selected = this.coleccion[0].id;
      //this.selected='inicio';
      //this.cancionactiva = '';

    },
    getImage: function (imageData) {
        return path.join(__static, 'miniaturas/'+imageData + '.jpg')
    },
    getAudio: function (imageData) {
        return path.join(__static, 'audio/'+imageData)
    },
    onChange: function(){

      if(this.$refs.playame){
        this.$refs.playame.load()
        //this.$refs.playame.play()
      }

    },
    cambia(e){
      console.log(e)
    },
    playSound (cancion) {
      var sonido = 'static/audio/'+cancion.url;
      this.quesuena = sonido;
      this.cancionactiva = cancion;
      if(this.$refs.playame1){
        this.$refs.playame1.load()

        //this.$refs.playame1.play()

      }

    }
}
}
</script>

<style lang="css">
audio{
  min-width: 100%;
}
  p.lyrics{
    padding: 1em;
    margin: 0 auto;
    white-space:pre-line;


  }
  img.miniatura{

    max-width: 100%;
    border: 2px white solid;
    border-radius: 0.5em;
    margin: 0 auto;
    cursor: pointer;

  }
  .imagenesmodelo{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1em;

  }
p.describe{
  padding: 0.6em;

}

.seccionaudios{
  background-image: url("~@/assets/lima.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  background-attachment: fixed;
  min-height: calc(100vh - 10px);
}
</style>
