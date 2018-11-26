import Vue from 'vue'
import Router from 'vue-router'
import Biko from '@/components/Biko'
import Audios from '@/components/Audios'
import Videos from '@/components/Videos'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/LandingPage').default
    },
    { path: '/biko', component: Biko },

    { path: '/videos/:id', component: Videos, name: 'vid' },
    { path: '/audios/:id', component: Audios, name: 'coleccion' },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
