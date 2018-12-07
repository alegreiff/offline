<template>
<div class="pa-1 blanco">
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
  <v-flex xs12 v-for="(video, index) in videosmag" :key="index" class="pa-1">
    {{ video.id }}***{{ video.titulo }}***{{ video.autor }}
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
    this.videosmag = _.sortBy(this.videos, ['id']);
    this.tutorialesmag = _.sortBy(this.tutoriales, ['titulo']);
    this.otrosdocumentospdf = _.sortBy(this.otrosdocumentos, ['titulo']);
    EventBus.$emit('TITULO', 'ProviXXXional');
    },
    watch: {

    },
  computed: {
    ...mapState('Varios', ['sugerencias']),
    ...mapState('Maguared', ['tutoriales', 'otrosdocumentos']),
    ...mapState('Videos', ['videos']),
  },
  methods: {

}
}
</script>

<style lang="css" scoped>
.blanco{
  background-color: white;
}

</style>
