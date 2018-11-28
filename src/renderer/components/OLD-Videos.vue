<template>
<div class="">
<h2>Meros videos</h2>
{{ videos.length }}
{{ coleccion.length}}
<div v-for="(video, index) in coleccion">
<h1>{{ index + 1 }}</h1>
<p>Título:   {{ video.titulo }}</p>
<p>Autor: {{ video.autor}}</p>
<img :src="'static/miniaturas/'+video.id+'.jpg'" :alt="video.id" class="miniatura">

</div>
</div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
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
    ...mapState('Videos', ['videos']),
    ...mapGetters('Videos', ['videoskaraokes', 'videossimples', 'videosall', 'videoscuentosnarrados', 'videoslistos']),
  },
  methods: {
    coleccionactiva(id){
      if(this.$refs.playame1){
        this.quesuena= '';
        this.$refs.playame1.pause()
      }
      if(id =='videoskaraokes'){
        this.coleccion = this.videoskaraokes
      }else if (id =='videossimples') {
        this.coleccion = this.videossimples
      }else if (id =='videoscuentosnarrados') {
        this.coleccion = this.videoscuentosnarrados
      }else if (id =='videoslistos') {
        this.coleccion = this.videoslistos
      }else{
        this.coleccion = this.videos
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

<style lang="css" scoped>
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
