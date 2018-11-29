import Vue from 'vue'
import Router from 'vue-router'
import Biko from '@/components/Biko'
import Audios from '@/components/Audios'
import Videos from '@/components/Videos'
import Interactivos from '@/components/Interactivos'
import Sugerencias from '@/components/Sugerencias'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/LandingPage').default
    },
    { path: '/biko', component: Biko },
    { path: '/interactivos', component: Interactivos },
    { path: '/sugerencias', component: Sugerencias },

    { path: '/videos/:id', component: Videos, name: 'vid' },
    { path: '/audios/:id', component: Audios, name: 'coleccion' },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
