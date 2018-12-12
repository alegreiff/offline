<template>
  <div class="pa-4 politicas">
    <v-layout>
    <v-flex xs12 sm8 offset-sm2>
      <v-card class="cardo">

        <v-card-text>
          <div class="text-xs-justify">
            <ul>
              <li>Los presentes Condiciones de Uso regulan el acceso y uso que el usuario hace del aplicativo de Maguaré y MaguaRED en su versión offline. Este aplicativo es propiedad del Ministerio de Cultura, en específico de la Estrategia Digital de Cultura y Primera Infancia, en adelante “EDCPI”.</li>
              <li>Este aplicativo desarrollado por la EDCPI es personal e intransferible, de cada usuario depende su correcto uso.</li>

              <li>El usuario podrá hacer uso pleno de los contenidos desde el dispositivo USB en el que se encuentra el contenido solo para uso cultural o pedagógico.</li>
              <li>Este aplicativo no requiere de conexión a Internet para su correcto funcionamiento.</li>

              <li>Los contenidos del aplicativo son de uso libre para los usuarios; sin embargo, los contenidos se deben reproducir desde el dispositivo entregado y hacer correcto uso del mismo.</li>
              <li>Si al conectarse a Internet presiona algunos de los íconos y se suscribe a las redes sociales o al boletín y remite la información a la EDCPI por medio de algún formulario, el usuario acepta que está utilizando un método confiable y apropiado a dichos efectos y por lo tanto el mensaje de datos que se envíe estará firmado conforme a los términos de la Ley 527 de 1999, artículo 7º.</li>
              <li>La EDCPI no se hace responsable por las actualizaciones de los contenidos, datos e informaciones que se encuentran en el aplicativo.</li>
              <li>La EDCPI no se hace responsable por el acceso y uso que terceras personas hagan del aplicativo.
              Cualquier uso indebido, intento de violación del sistema o en general cualquier acción que tenga por objeto dañar, desmontar o remplazar el aplicativo dará lugar a las sanciones previstas en las normas vigentes.</li>
              <li>Se prohíbe cualquier forma de uso de las obras contenidas en el aplicativo, a menos que se hubiere sido previa y expresamente autorizado por la EDCPI.</li>
              <li>El material digital del aplicativo es de distribución gratuita con fines didácticos y culturales. Queda prohibida su reproducción total o parcial con fines de lucro, por cualquier sistema o medio electrónico sin la autorización expresa para ello.</li>
              <li>La EDCPI no es responsable de los problemas ocasionados por errores de carácter técnico en los dispositivos o de los sistemas operativos en los que se cargue el aplicativo.</li>
              <li>Para mayor información sobre los contenidos y su uso, enviar un mensaje de correo a: </li>
            </ul>
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

<style lang="css" scoped>
.politicas{
  background-image: url("~@/assets/rojo.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  background-attachment: fixed;
  min-height: calc(100vh - 10px);
}

</style>
