<template>
<div class="pa-4 secciondescargables seccionprincipal">
  <v-layout row wrap>
  <v-flex xs3 v-for="(app, index) in descargablesmaguarepdf" :key="index" class="pa-1">
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
import EventBus from './eventos';

/*import _ from 'lodash';*/

export default {
  //components: { SystemInformation },
  data: function () {
    return {
      describeseccion: 'Descripción de los dos coloreableses',
      descargablesmaguarepdf: [],
      datosgenerales: []
    }
  },
  created() {
    //this.interactivos = this.apps;
    this.datosgenerales = this.describe.filter(dato => dato.id == 400)
    EventBus.$emit('TITULO', this.datosgenerales[0].titulobreve);
    EventBus.$emit('SECCION', this.datosgenerales[0].descripcion);
    EventBus.$emit('ICONOBARRA', 'fas fa-download', 'light-blue darken-3');
    this.descargablesmaguarepdf = _.sortBy(this.descargablesmaguare, ['titulo']);
    //EventBus.$emit('TITULO', 'Descargables');
    },
    watch: {

    },
  computed: {
    ...mapState('Varios', ['descargablesmaguare']),
    ...mapState('Describe', ['describe']),
    /*...mapGetters('Videos', ['videoskaraokes', 'videossimples', 'videosall', 'videoscuentosnarrados', 'videoslistos']),*/
  },
  methods: {

}
}
</script>
