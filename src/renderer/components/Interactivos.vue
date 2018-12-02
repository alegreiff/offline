<template>
<div class="">
  <v-layout row wrap>
        <v-flex xs3 v-for="(app, index) in interactivos" :key="index" class="pa-1">

          <v-card>
                  <v-img :src="'static/miniaturas/'+app.id+'.jpg'" :alt="app.titulo" ></v-img>

                  <v-card-title primary-title style="height:200px">
                    <div>
                      <h3 class="mb-0">{{ app.titulo }}</h3>
                      <div>{{ app.describe }}</div>
                    </div>
                  </v-card-title>

                  <v-card-actions >

                      <v-btn style="100%" small class="white--text" color="blue" block :href="'static/web/'+app.url" target="maguared">Ver interactivo</v-btn>

                  </v-card-actions>
            </v-card>




        </v-flex>
      </v-layout>

</div>
</template>

<script>
import { mapState } from 'vuex'
import EventBus from './eventos';
/*import _ from 'lodash';*/

export default {
  //components: { SystemInformation },
  data: function () {
    return {
      tipo: 'Interactivos',
      interactivos: []
    }
  },
  created() {
    //this.interactivos = this.apps;
    this.interactivos = _.sortBy(this.apps, ['titulo']);
    EventBus.$emit('TITULO', 'Interactivos');
    },
    watch: {

    },

  computed: {
    ...mapState('Interactivos', ['apps']),
    /*...mapGetters('Videos', ['videoskaraokes', 'videossimples', 'videosall', 'videoscuentosnarrados', 'videoslistos']),*/
  },
  methods: {

}
}
</script>

<style lang="css" scoped>


</style>
