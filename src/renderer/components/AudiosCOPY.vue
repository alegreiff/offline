<template>
<div class="internamusica">

  <div class="seleccion">

    Hay {{ coleccion.length }} audiosa
    <select class="" name="" v-model="selected" @change="onChange()">

      <option value="inicio">Seleccione una canción</option>
      <option v-for="(cancion, index) in coleccion" :key="index" :value="cancion">{{ cancion.titulo }}</option>
    </select>
    <div class="" v-if="selected && selected!=='inicio'">
      <audio controls ref="playame" class="audiofull">
        <!--<source :src="getAudio(selected.url)" type="audio/mpeg">-->
        <source :src="'static/audio/'+selected.url" type="audio/mpeg">
        Este producto NO es compatible con su computador
      </audio>
      <!--<img v-if="selected && selected!=='inicio'" :src="getImage(selected.id)" :alt="getImage(selected.id)" class="miniatura">-->
      <img v-if="selected && selected!=='inicio'" :src="'static/miniaturas/'+selected.id+'.jpg'" :alt="getImage(selected.id)" class="miniatura">
    </div>
  </div>
  <div class="lirica">
    <div class="" v-if="selected && selected!=='inicio'">
      <h1 class="titulo">{{ selected.titulo }}</h1>
      <p v-html="selected.letra" class="lyrics"></p>
    </div>
  </div>
  <div class="imagenesmodelo" v-if="selected=='inicio'">
    <audio controls ref="playame1" class="audiofull">
      <!--<source :src="getAudio(selected.url)" type="audio/mpeg">-->
      <source :src="quesuena" type="audio/mpeg">
      Este producto NO es compatible con su computador
    </audio>
    <!--<img v-for="(cancion, index) in coleccion" :key="index" :src="getImage(cancion.id)" :alt="cancion.id">-->
    <img v-for="(cancion, index) in coleccion" :key="index" :src="'static/miniaturas/'+cancion.id+'.jpg'" :alt="cancion.id" class="miniatura" @click.prevent="playSound('static/audio/'+cancion.url)">
  </div>
</div>
</template>

<script>
import SystemInformation from './LandingPage/SystemInformation'
import { mapState, mapGetters } from 'vuex'
import path from 'path'

export default {
  //components: { SystemInformation },
  data: function () {
    return {
      selected: 'inicio',
      coleccion: [],
      quesuena: ''
    }
  },
  created() {

    //this.id = this.$route.params.id;
    //alert(this.$route.params.id)
    this.coleccionactiva(this.$route.params.id);
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
      this.selected ='inicio';

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
        this.$refs.playame.play()
      }

    },
    playSound (sound) {
      this.quesuena = sound;
      this.$refs.playame1.load()
      this.$refs.playame1.play()
      /*if(sound) {
        var audio = new Audio(sound);
        audio.play();
      }*/
    }
}
}
</script>

<style lang="css">
  .internamusica{
    background-color: white;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  audio{
    min-width: 100%;
    padding: 1em;
    margin-top: 3em;
  }
  p.lyrics{
    padding: 1em;
    white-space:pre-line;
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
  }
  .imagenesmodelo{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1em;
    background-color: crimson;
  }
</style>
