<template>
<div class="">
<p>{{ this.$route.params.id }}</p>
<audio controls ref="playame1" class="audiofull" autoplay v-if="quesuena!=''">
  <source :src="quesuena" type="audio/mpeg">
  Este producto NO es compatible con su computador
</audio>
  <div class="internamusica">

    <div class="seleccion">
      <div class="imagenesmodelo" v-if="selected=='inicio'">

        <div class="" v-for="(cancion, index) in coleccion" :key="index">
          <h4>{{ cancion.titulo }}</h4>
          <img :src="'static/miniaturas/'+cancion.id+'.jpg'" :alt="cancion.id" class="miniatura" @click.prevent="playSound(cancion)">
        </div>
      </div>
    </div>
    <div class="lirica" v-if="quesuena!=''">
      <div class="audiosonando">
        
      </div>
      <div class="datoscancion" v-if="cancionactiva">
        <p class="describe">{{ cancionactiva.describe }}</p>
        <h3>{{ cancionactiva.titulo }}</h3>
        <h6>{{ cancionactiva.autor }}</h6>

        <p v-if="cancionactiva.letra" v-html="cancionactiva.letra" class="lyrics"></p>


      </div>
    </div>

  </div>
</div>
</template>

<script>
import SystemInformation from './LandingPage/SystemInformation'
import { mapState, mapGetters } from 'vuex'
import path from 'path'
import _ from 'lodash';

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

    //this.id = this.$route.params.id;
    //alert(this.$route.params.id)
    this.coleccionactiva(this.$route.params.id);
    //this.selected= 'inicio'
    },
    watch: {
      '$route.params.id': function (id) {
        //alert(id)
        this.coleccionactiva(id)

      },
      selected: function(value){
        console.log("ffff... " + value)
        this.$refs.playame.play();
      }
    },
  computed: {
    ...mapState('Audios', ['main', 'nombre', 'canciones']),
    ...mapGetters('Audios', ['audiosCeiba', 'audiosCuentosaloido', 'audiosCuentoencanto', 'audiosSincoleccion']),
  },
  methods: {
    coleccionactiva(id){
      if(this.$refs.playame1){
        this.quesuena= '';
        this.$refs.playame1.pause()
      }
      if(id =='audiosCeiba'){
        this.coleccion = this.audiosCeiba
      }else if (id =='audiosCuentosaloido') {
        this.coleccion = this.audiosCuentosaloido
      }else if (id =='audiosCuentoencanto') {
        this.coleccion = this.audiosCuentoencanto
      }else if (id =='audiosSincoleccion') {
        this.coleccion = this.audiosSincoleccion
      }else{
        this.coleccion = this.canciones
      }
      this.coleccion = _.sortBy(this.coleccion, ['titulo']);

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
  .internamusica{
    background-color: white;
    display: grid;
    grid-template-columns: 4fr 3fr;
  }
  audio{
    min-width: 100%;
    padding: 1em;
    margin-top: 3em;
  }
  p.lyrics{
    padding: 1em;
    margin: 0 auto;
    white-space:pre-line;
    height: 40vw;
    width: 95%;
    overflow: auto;

  }
  h1.titulo{
    padding-left: 1em;
    padding-top: 1em;
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


</style>
