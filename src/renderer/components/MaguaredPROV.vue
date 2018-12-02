<template>
<div class="">
  <v-layout row wrap>
    <v-flex xs12 class="text-xs-center">
      <v-card>
              <v-card-title primary-title style="height:auto">
                <div>
                  <div>{{ describeseccion }}</div>
                </div>
              </v-card-title>
        </v-card>
    </v-flex>
  <v-flex xs12 v-for="(video, index) in otrosdocumentospdf" :key="index" class="pa-1">
    {{ video.id }}*** {{ video.coleccion }}*** {{ video.autor }}*** {{ video.titulo}}*** {{ video.describe}}
</v-flex>

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
      otrosdocumentospdf: []
    }
  },
  created() {
    this.sugerenciaspdf = _.sortBy(this.sugerencias, ['titulo']);
    this.videosmag = _.sortBy(this.videos, ['titulo']);
    this.tutorialesmag = _.sortBy(this.tutoriales, ['titulo']);
    this.otrosdocumentospdf = _.sortBy(this.otrosdocumentos, ['titulo']);
    EventBus.$emit('TITULO', 'ProviXXXional');
    },
    watch: {

    },
  computed: {
    ...mapState('Varios', ['sugerencias']),
    ...mapState('Maguared', ['videos', 'tutoriales', 'otrosdocumentos']),
  },
  methods: {

}
}
</script>

<style lang="css" scoped>


</style>
