<template>
<div class="">
  <v-layout row wrap>
    <v-flex xs12 class="text-xs-center">
      <v-card>
              <v-card-title primary-title style="height:auto">
                <div>
                  <div>{{ datosgenerales[0].descripcion }}</div>
                </div>
              </v-card-title>
        </v-card>
    </v-flex>
        <v-flex xs3 v-for="(app, index) in coleccion" :key="index" class="pa-1">

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
import { mapState, mapGetters } from 'vuex'
import EventBus from './eventos';
/*import _ from 'lodash';*/

export default {
  //components: { SystemInformation },
  data: function () {
    return {
      tipo: 'Interactivos',
      interactivos: [],
      coleccion: [],
      datosgenerales: []
    }
  },
  created() {
    this.coleccionactiva(this.$route.params.id);
    //this.interactivos = _.sortBy(this.apps, ['titulo']);
    //EventBus.$emit('TITULO', 'Interactivos');
    },
    watch: {

    },

  computed: {
    ...mapState('Interactivos', ['apps']),
    ...mapState('Describe', ['describe']),
    ...mapGetters('Interactivos', ['appsJuegos', 'appsAdivinanzas', 'appsRompecabezas', 'appsTrabalenguas']),
  },
  watch: {
    '$route.params.id': function (id) {
      //alert(id)
      this.coleccionactiva(id)

    },

  },
  methods: {
    coleccionactiva(id){

      if(id =='appsJuegos'){
        this.datosgenerales = this.describe.filter(dato => dato.id == 301)
        this.coleccion = this.appsJuegos

      }else if (id =='appsAdivinanzas') {
        this.datosgenerales = this.describe.filter(dato => dato.id == 302)
        this.coleccion = this.appsAdivinanzas

      }else if (id =='appsRompecabezas') {
        this.datosgenerales = this.describe.filter(dato => dato.id == 303)
        this.coleccion = this.appsRompecabezas

      }else if (id =='appsTrabalenguas') {
        this.datosgenerales = this.describe.filter(dato => dato.id == 304)
        this.coleccion = this.appsTrabalenguas

      }else{
        this.datosgenerales = this.describe.filter(dato => dato.id == 300)
        this.coleccion = this.apps

      }
      EventBus.$emit('TITULO', this.datosgenerales[0].titulobreve);
      this.coleccion = _.sortBy(this.coleccion, ['titulo']);
      //this.selected = this.coleccion[0].id;
      //this.selected='inicio';
      //this.cancionactiva = '';

    },
}
}
</script>

<style lang="css" scoped>


</style>
