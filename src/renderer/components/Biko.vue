<template>
  <div class="interna">
    <h3>hola, soy Biko de {{ nombre }}</h3>
      <!-- <img src="~@/assets/miniaturas/22.jpg" alt="imagos"> -->
      <div class="">
        <h1>Selected: {{ selected.titulo }}</h1>
        <select class="" name="" v-model="selected" @change="onChange()">

          <option value="">Seleccione una opción</option>
          <option v-for="(cancion, index) in canciones" :key="index" :value="cancion">{{ cancion.titulo }}</option>
        </select>
        <div class="" v-if="selected">
          <p>{{ getAudio(selected.url) }}</p>
          <img :src="getImage(selected.id)" :alt="getImage(selected.id)">
          <audio controls ref="playame">

            <source :src="getAudio(selected.url)" type="audio/mpeg">
              Your browser does not support the audio tag.
          </audio>
        </div>
      </div>
        <div class="fase2">
          <h2>empieza la fase 2</h2>
        <ul>

        <li v-for="(cancion, index) in canciones" :key="index">
          <p v-html="cancion.url"></p>
          <audio controls>
            <source :src="getAudio(cancion.url)" type="audio/mpeg">
              Your browser does not support the audio tag.
          </audio>
          <img :src="getImage(cancion.id)" :alt="getImage(cancion.id)">
          <p>{{ getImage(cancion.id) }}</p>
        </li>
      </ul>
        </div>
    <!--<video width="400px" height="auto" controls>
    <source src="~@/assets/videos/guasa.mp4" type="video/mp4">
      Your browser does not support the video tag.
  </video>-->
  </div>
</template>

<script>
import SystemInformation from './LandingPage/SystemInformation'
import { mapState } from 'vuex'
import path from 'path'

export default {
  //components: { SystemInformation },
  data: function () {
    return {
      selected: []
    }
  },
  computed: {
    ...mapState('Audios', ['main', 'nombre', 'canciones'])
  },
  methods: {
    getImage: function (imageData) {
        return path.join(__static, 'miniaturas/'+imageData + '.jpg')
    },
    getAudio: function (imageData) {
        return path.join(__static, 'audio/'+imageData)
    },
    onChange: function(){
      /*alert("jaime");*/
      this.$refs.playame.load()
      this.$refs.playame.play()
    }
}
}
</script>

<style lang="css">
.fase2{
  padding: 1em;
  background-color: lime;
}
</style>
