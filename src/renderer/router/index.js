import Vue from 'vue'
import Router from 'vue-router'
import Audios from '@/components/Audios'
import Videos from '@/components/Videos'
import Interactivos from '@/components/Interactivos'
import Sugerencias from '@/components/Sugerencias'
import LibrosMaguare from '@/components/LibrosMaguare'
import DescargablesMaguare from '@/components/DescargablesMaguare'
import Politicas from '@/components/Politicas'
import MaguaREDVideos from '@/components/MaguaREDVideos'
import MaguaREDTutoriales from '@/components/MaguaREDTutoriales'
import MaguaREDLibros from '@/components/MaguaREDLibros'
import AboutUs from '@/components/AboutUs'
import Ceiba from '@/components/Ceiba'
import SingleVideo from '@/components/SingleVideo'

Vue.use(Router)

export default new Router({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '/',
      name: 'inicio-offline',
      component: require('@/components/Inicio').default
    },
    { path: '/acercade', component: AboutUs },
    { path: '/sugerencias', component: Sugerencias },
    { path: '/videosmaguared/:id', component: MaguaREDVideos, name: 'magvid' },
    { path: '/tutorialesmaguared', component: MaguaREDTutoriales },
    { path: '/descargablesmaguare', component: DescargablesMaguare },
    { path: '/politicas', component: Politicas },
    { path: '/ceiba', component: Ceiba },
    { path: '/interactivos/:id', component: Interactivos, name: 'app' },
    { path: '/videos/:id', component: Videos, name: 'vid' },
    { path: '/audios/:id', component: Audios, name: 'coleccion' },
    { path: '/librosmaguare/:id', component: LibrosMaguare, name: 'lib' },
    { path: '/librosmaguared/:id', component: MaguaREDLibros, name: 'maglib' },
    { path: '/vervideo/:id', component: SingleVideo, name: 'idvideo' },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
