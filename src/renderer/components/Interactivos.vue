<template>
<div class="pa-4 seccioninteractivos">
  <v-layout row wrap>
        <v-flex xs3 v-for="(app, index) in coleccion" :key="index" class="pa-1">
            <v-card  height="100%" class="flexcard" ripple hover>
              <div class="grow">
                <v-img :src="'static/miniaturas/'+app.id+'.jpg'" class=""></v-img>
                <v-card-title><h2 class="card-titulo">{{ app.titulo }}</h2></v-card-title>
                <v-card-text class="card-texto">{{ app.describe }}</v-card-text>
              </div>
              <v-card-actions class="justify-center accionescard">
                  <v-btn small class="white--text" color="magmorado" block :href="'static/web/'+app.url" target="maguared">Ver interactivo</v-btn>
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
      EventBus.$emit('SECCION', this.datosgenerales[0].descripcion);
      this.coleccion = _.sortBy(this.coleccion, ['titulo']);
    },
}
}
</script>
<style>
.seccioninteractivos{
  background-image: url("~@/assets/morado.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  min-height: calc(100vh - 10px);
}
</style>
