<template>
<div class="">
<p>{{ this.$route.params.id }}</p>
<!--<select class="" name="" v-model="selected" @change="onChange()">-->


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
        <audio controls ref="playame1" class="audiofull" autoplay v-if="quesuena!=''">
          <source :src="quesuena" type="audio/mpeg">
          Este producto NO es compatible con su computador
        </audio>
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
        this.playSound(value)
        //this.$refs.playame.play();
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
      this.selected='inicio';

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

.datoscancion{

  z-index: 1;
}

/* Reset Select */
select {
  appearance: none;
  outline: 0;
  box-shadow: none;
  border: 0 !important;
  background: #2c3e50;
  background-image: none;
}
/* Custom Select */
.select {
  margin-top: 120px;
  position: relative;
  display: block;
  width: 20em;
  height: 3em;
  line-height: 3;
  background: #2c3e50;
  overflow: hidden;
  border-radius: .25em;
  z-index: 0;
  font-size: 22px;

}

select {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0 0 0 .5em;
  color: #fff;
  cursor: pointer;
}
select::-ms-expand {
  display: none;
}
/* Arrow */
.select::after {
  content: '\25BC';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding: 0 1em;
  background: #34495e;
  pointer-events: none;
}
/* Transition */
.select:hover::after {
  color: #f39c12;
}
.select::after {
  -webkit-transition: .25s all ease;
  -o-transition: .25s all ease;
  transition: .25s all ease;
}
select option{
  font-size: 2em;
}

</style>
