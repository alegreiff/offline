<template>
  <div class="pa-4 politicas seccionprincipal">
    <v-layout>
    <v-flex xs12 sm8 offset-sm2>
      <v-card class="cardo">

        <v-card-text>
          <div class="text-xs-justify">
            <v-list three-line>

              <v-list-tile-content>
                <v-list-tile-sub-title class="politicasdeuso">
                  Los presentes Condiciones de Uso regulan el acceso y uso que el usuario hace del aplicativo de Maguaré y MaguaRED en su versión offline (no necesita conexión a internet). Este aplicativo es propiedad del Ministerio de Cultura, en específico de la Estrategia Digital de Cultura y Primera Infancia, en adelante <strong>EDCPI</strong>.
                </v-list-tile-sub-title>
              </v-list-tile-content>
              <v-divider></v-divider>

              <v-list-tile-content>
                <v-list-tile-sub-title class="politicasdeuso">
                  El material digital del aplicativo es de distribución gratuita con fines didácticos y culturales. Queda prohibida su reproducción total o parcial con fines de lucro por cualquier sistema o medio electrónico sin la autorización expresa para ello.
                </v-list-tile-sub-title>
              </v-list-tile-content>
              <v-divider></v-divider>

              <v-list-tile-content>
                <v-list-tile-sub-title class="politicasdeuso">
                  Este aplicativo desarrollado por la <strong>EDCPI</strong> es de uso libre para los usuarios de modo  personal e intransferible. El usuario podrá hacer uso pleno de los contenidos licenciados desde el dispositivo USB en el que se encuentran los videos, libros, interactivos, actividades sugeridas, que son de exclusivamente culturales  y de utilidad pedagógica.
                </v-list-tile-sub-title>
              </v-list-tile-content>
              <v-divider></v-divider>

              <v-list-tile-content>
                <v-list-tile-sub-title class="politicasdeuso">
                  Este aplicativo no requiere de conexión a Internet para su correcto funcionamiento.
                </v-list-tile-sub-title>
              </v-list-tile-content>
              <v-divider></v-divider>

              <v-list-tile-content>
                <v-list-tile-sub-title class="politicasdeuso">
                  Si el usuario está conectado a Internet y presiona algunos de los íconos o logos que se encuentran en el inicio del aplicativo, estos se dirigirán a las redes sociales oficiales o plataformas de la <strong>EDCPI</strong>. Si el usuario se suscribe a las redes sociales o decide recibir el boletín mensual, debe saber que: 1. Sus datos serán guardados con la mayor seguridad de acuerdo a la ley; 2. al completar alguno de los formularios de las plataformas, el usuario acepta que está utilizando un método confiable y apropiado y por lo tanto el mensaje de datos que se envíe estará amparado conforme al Artículo 7° de la Ley 527 de 1999.
                </v-list-tile-sub-title>
              </v-list-tile-content>
              <v-divider></v-divider>


              <v-list-tile-content>
                <v-list-tile-sub-title class="politicasdeuso">
                  La <strong>EDCPI</strong> no se hace responsable por las actualizaciones de los contenidos, datos e informaciones que se encuentran en el aplicativo.
                </v-list-tile-sub-title>
              </v-list-tile-content>
              <v-divider></v-divider>

              <v-list-tile-content>
                <v-list-tile-sub-title class="politicasdeuso">
                  La <strong>EDCPI</strong> no se hace responsable por el acceso y uso que terceras personas hagan del aplicativo.
                </v-list-tile-sub-title>
              </v-list-tile-content>
              <v-divider></v-divider>

              <v-list-tile-content>
                <v-list-tile-sub-title class="politicasdeuso">
                  Cualquier uso indebido, intento de violación del sistema o en general cualquier acción que tenga por objeto dañar, desmontar, reemplazar, copiar o duplicar el aplicativo dará lugar a las sanciones previstas en las normas vigentes.
                </v-list-tile-sub-title>
              </v-list-tile-content>
              <v-divider></v-divider>

              <v-list-tile-content>
                <v-list-tile-sub-title class="politicasdeuso">
                  Se prohíbe cualquier comercialización o uso indebido de las obras contenidas en el aplicativo, a menos que se hubiere sido previa y expresamente autorizado por la <strong>EDCPI</strong>.
                </v-list-tile-sub-title>
              </v-list-tile-content>
              <v-divider></v-divider>

              <v-list-tile-content>
                <v-list-tile-sub-title class="politicasdeuso">
                  La <strong>EDCPI</strong> no es responsable de los problemas ocasionados por errores de carácter técnico en los dispositivos o de los sistemas operativos en los que se cargue el aplicativo.
                </v-list-tile-sub-title>
              </v-list-tile-content>
              <v-divider></v-divider>

              <v-list-tile-content>
                <v-list-tile-sub-title class="politicasdeuso">
                  Para mayor información sobre los contenidos y su licenciamiento enviar un mensaje de correo a: maguared@gmail.com, escribiendo en el asunto: Información sobre el offline Maguaré.
                </v-list-tile-sub-title>
              </v-list-tile-content>
              <v-divider></v-divider>
            </v-list>
          </div>

        </v-card-text>
        <v-card-actions>

        </v-card-actions>
      </v-card>
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

<style lang="css">
.politicas{
  background-image: url("~@/assets/rojo.png");

}

</style>
