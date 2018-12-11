<template>
<div class="pa-4 politicas">
  <v-layout row wrap>



  </v-layout>

</div>
</template>

<script>
import { mapState } from 'vuex'
import EventBus from './eventos';
EventBus.$emit('TITULO', 'Descargables');

export default {
  data: function () {
    return {
      describeseccion: 'Descripción de los dos coloreableses',
      videosmag: [],
      tutorialesmag: [],
      sugerenciaspdf: [],
      otrosdocumentospdf: [],
      datosgenerales: []
    }
  },
  created() {
    this.datosgenerales = this.describe.filter(dato => dato.id == 500)
    EventBus.$emit('TITULO', this.datosgenerales[0].titulobreve);
    EventBus.$emit('SECCION', this.datosgenerales[0].descripcion);
    EventBus.$emit('ICONOBARRA', 'file_copy', 'magrojo');
    this.sugerenciaspdf = _.sortBy(this.sugerencias, ['titulo']);
    this.videosmag = _.sortBy(this.videos, ['id']);
    this.tutorialesmag = _.sortBy(this.tutoriales, ['titulo']);
    this.otrosdocumentospdf = _.sortBy(this.otrosdocumentos, ['titulo']);

    },
    watch: {

    },
  computed: {
    ...mapState('Varios', ['sugerencias']),
    ...mapState('Maguared', ['tutoriales', 'otrosdocumentos']),
    ...mapState('Videos', ['videos']),
    ...mapState('Describe', ['describe']),
  },
  methods: {

}
}
</script>

<style lang="css" scoped>
.politicas{
  background-image: url("~@/assets/rojo.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  background-attachment: fixed;
  min-height: calc(100vh - 10px);
}

</style>
