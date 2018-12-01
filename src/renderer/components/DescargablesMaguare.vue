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
  <v-flex xs4 v-for="(app, index) in descargablesmaguarepdf" class="pa-1">
    <v-card>
            <v-img :src="'static/miniaturas/'+app.id+'.jpg'" :alt="app.titulo" ></v-img>
            <v-card-title primary-title style="height:auto">
              <div>
                <h3 class="mb-0">{{ app.titulo }}</h3>
                <div style="height: 100px">{{ app.describe }}</div>
              </div>
            </v-card-title>

            <v-card-actions >

                <v-btn style="100%" small class="white--text" color="blue" block :href="'static/'+app.url" target="_self">
                  Descargar el coloreable
                </v-btn>

            </v-card-actions>
      </v-card>




  </v-flex>

  </v-layout>

</div>
</template>

<script>
import { mapState } from 'vuex'
/*import _ from 'lodash';*/

export default {
  //components: { SystemInformation },
  data: function () {
    return {
      describeseccion: 'Descripción de los dos coloreableses',
      descargablesmaguarepdf: []
    }
  },
  created() {
    //this.interactivos = this.apps;
    this.descargablesmaguarepdf = _.sortBy(this.descargablesmaguare, ['titulo']);
    },
    watch: {

    },
  computed: {
    ...mapState('Varios', ['descargablesmaguare']),
    /*...mapGetters('Videos', ['videoskaraokes', 'videossimples', 'videosall', 'videoscuentosnarrados', 'videoslistos']),*/
  },
  methods: {

}
}
</script>

<style lang="css" scoped>


</style>
