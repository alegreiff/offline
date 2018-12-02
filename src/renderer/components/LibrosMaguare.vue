<template>
<div class="">
  <v-layout row wrap>
    <v-flex xs12 class="text-xs-center">
      <v-card>
              <v-card-title primary-title style="height:auto">
                <div>
                  <div>{{ describeseccion }} {{ coleccion.length }}</div>
                </div>
              </v-card-title>
        </v-card>
    </v-flex>
  <v-flex xs3 v-for="(libro, index) in coleccion" :key="index" class="pa-1">
    <v-card>
            <!--<v-img :src="'static/miniaturas/'+libro.id+'.jpg'" :alt="libro.titulo" ></v-img>-->
            i m a g e n 

            <v-card-title primary-title style="height:auto">
              <div>
                <h3 class="mb-0">{{ libro.titulo }}</h3>
                <span>{{ libro.autor }}</span>
                <div style="height: 160px">{{ libro.describe }}</div>
              </div>
            </v-card-title>

            <v-card-actions >

                <v-btn style="100%" small class="white--text" color="blue" block :href="'static/'+libro.url" target="_self">
                  Descargar el libro
                </v-btn>

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
      describeseccion: 'Presentación de los seis libros de Maguaré en La Ceiba',
      //librosmaguarepdf: [],
      coleccion: [],
    }
  },
  /*mounted(){
      alert("TDN")
  },*/
  created() {

    this.coleccionactiva(this.$route.params.id);
    },
    watch: {
      '$route.params.id': function (id) {
        //alert(id)
        this.coleccionactiva(id)

      },
    },
  computed: {
    ...mapState('Varios', ['libros']),
    ...mapGetters('Varios', ['librosCeiba', 'librosFiesta', 'librosLEMC']),
  },
  methods: {
    coleccionactiva(id){

      if(id =='librosCeiba'){
        this.coleccion = this.librosCeiba
        EventBus.$emit('TITULO', 'Libros - Maguaré en La Ceiba');
      }else if (id =='librosFiesta') {
        this.coleccion = this.librosFiesta
        EventBus.$emit('TITULO', 'Libros - Fiesta de la lectura');
      }else if (id =='librosLEMC') {
        this.coleccion = this.librosLEMC
        EventBus.$emit('TITULO', 'Libros - Leer es mi cuento');
      }else{
        this.coleccion = this.libros
        EventBus.$emit('TITULO', 'Libros');
      }
      this.coleccion = _.sortBy(this.coleccion, ['titulo']);


    },
}
}
</script>

<style lang="css" scoped>


</style>
