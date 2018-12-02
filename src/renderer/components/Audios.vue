<template>
<div class="">
  <v-layout row wrap>
        <v-flex xs12>
          <v-card>
            <v-card-text class="">
              <span>Seleccione un audio</span>
              <p>{{ coleccion.length }}</p>
            </v-card-text>

              <v-select class="px-4 ma-0"

                :items="coleccion"
                v-model="selected"
                color="primary"

                item-text="titulo"
                item-value="id"
                >
              </v-select>

          </v-card>
        </v-flex>

        <!--
        <v-flex xs6>
          <v-card dark color="orange">
            <v-card-text class="px-0">
                <p>{{ this.$route.params.id }} --- QUE SUENA:  {{ quesuena }}</p>
                <pre> SELECTED: {{ selected }}</pre>
                <pre>{{ this.$refs }}</pre>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs6>
          <v-card dark color="orange">
            <v-card-text class="px-0">
              <pre>{{ cancionactiva }}</pre>
            </v-card-text>
          </v-card>
        </v-flex>-->
      </v-layout>
      <v-layout row wrap v-if="cancionactiva">
        <v-flex xs12>
        <v-card dark color="primary">
          <v-card-text class="pa-2">
            <h2 class="" ref="tituloref">{{ cancionactiva.titulo }}</h2> <h5>{{ cancionactiva.autor }}</h5>
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
      cancionactiva: ''
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
    ...mapGetters('Audios', ['audiosCeiba', 'audiosCuentosaloido', 'audiosCuentoencanto', 'audiosSweetsongs', 'audiosSincoleccion']),
  },
  methods: {
    coleccionactiva(id){
      if(this.$refs.playame1){
        this.quesuena= '';
        this.$refs.playame1.pause()
      }
      if(id =='audiosCeiba'){
        this.coleccion = this.audiosCeiba
        EventBus.$emit('TITULO', 'Audios - Canciones de Maguaré en La Ceiba');
      }else if (id =='audiosCuentosaloido') {
        this.coleccion = this.audiosCuentosaloido
        EventBus.$emit('TITULO', 'Audios - Cuentos al oído');
      }else if (id =='audiosCuentoencanto') {
        this.coleccion = this.audiosCuentoencanto
        EventBus.$emit('TITULO', 'Audios - Con mi cuento encanto');
      }else if (id =='audiosSweetsongs') {
        this.coleccion = this.audiosSweetsongs
        EventBus.$emit('TITULO', 'Audios - Canciones dulces para niños');
      }else if (id =='audiosSincoleccion') {
        this.coleccion = this.audiosSincoleccion
      }else{
        this.coleccion = this.canciones
        EventBus.$emit('TITULO', 'Audios - Lista completa');
      }
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
    border-radius: 0.5em;


  }
  .imagenesmodelo{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1em;

  }
p.describe{
  padding: 0.6em;

}


</style>
