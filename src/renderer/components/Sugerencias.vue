<template>
<div class="pa-4 secciondescargables">
  <v-layout row wrap>
  <v-flex xs3 v-for="(app, index) in sugerenciaspdf" :key="index" class="pa-1">
    <v-card>
            <v-img :src="'static/miniaturas/'+app.id+'.jpg'" :alt="app.titulo" ></v-img>
            <v-card-title primary-title style="height:auto">
              <div>
                <h3 class="mb-0">{{ app.titulo }}</h3>
                <div>{{ app.describe }}</div>
              </div>
            </v-card-title>

            <v-card-actions >

                <v-btn style="100%" small class="white--text" color="magazul" block :href="'static/'+app.url" target="_self">
                  Descargar el PDF
                </v-btn>

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
      describeseccion: 'Sugerencias de uso',
      sugerenciaspdf: [],
      datosgenerales: []
    }
  },
  created() {
    //this.interactivos = this.apps;
    this.datosgenerales = this.describe.filter(dato => dato.id == 800)
    EventBus.$emit('TITULO', this.datosgenerales[0].titulobreve);
    EventBus.$emit('SECCION', this.datosgenerales[0].descripcion);
    this.sugerenciaspdf = _.sortBy(this.sugerencias, ['titulo']);
    },
    watch: {

    },
  computed: {
    ...mapState('Varios', ['sugerencias', 'descargables']),
    ...mapState('Describe', ['describe']),
    /*...mapGetters('Videos', ['videoskaraokes', 'videossimples', 'videosall', 'videoscuentosnarrados', 'videoslistos']),*/
  },
  methods: {

}
}
</script>

<style>
.secciondescargables{
  background-image: url("~@/assets/azul.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  min-height: calc(100vh - 164px);
}

</style>
