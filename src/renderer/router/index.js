import Vue from 'vue'
import Router from 'vue-router'
import Audios from '@/components/Audios'
import Videos from '@/components/Videos'
import Interactivos from '@/components/Interactivos'
import Sugerencias from '@/components/Sugerencias'
import LibrosMaguare from '@/components/LibrosMaguare'
import DescargablesMaguare from '@/components/DescargablesMaguare'
import MaguPROV from '@/components/MaguaredPROV'
import MaguaREDVideos from '@/components/MaguaREDVideos'
import MaguaREDTutoriales from '@/components/MaguaREDTutoriales'
import MaguaREDLibros from '@/components/MaguaREDLibros'
import AboutUs from '@/components/AboutUs'




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'inicio-offline',
      component: require('@/components/Inicio').default
    },
    { path: '/acercade', component: AboutUs },
    { path: '/sugerencias', component: Sugerencias },
    { path: '/videosmaguared', component: MaguaREDVideos },
    { path: '/tutorialesmaguared', component: MaguaREDTutoriales },
    { path: '/descargablesmaguare', component: DescargablesMaguare },
    { path: '/provixional', component: MaguPROV },
    { path: '/interactivos/:id', component: Interactivos, name: 'app' },
    { path: '/videos/:id', component: Videos, name: 'vid' },
    { path: '/audios/:id', component: Audios, name: 'coleccion' },
    { path: '/librosmaguare/:id', component: LibrosMaguare, name: 'lib' },
    { path: '/librosmaguared/:id', component: MaguaREDLibros, name: 'maglib' },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
