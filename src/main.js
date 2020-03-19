import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { CalendarHeatmap } from 'vue-calendar-heatmap'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faAt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import App from './App.vue'
import Home from './components/Home'
import About from './components/About'
import Work from './components/Work/Work'
import Projects from './components/Work/Projects'
import Activity from './components/Work/Activity'

library.add(fab, faAt)

Vue.config.productionTip = false

Vue.use(Router)
Vue.use(VueAxios, axios)

Vue.component('Github', CalendarHeatmap)
Vue.component('FontAwesomeIcon', FontAwesomeIcon)

const router = new Router({
  routes: [
    {
      path: '/',
      component: Home,
      name: 'Home'
    },
    {
      path: '/about',
      component: About,
      name: 'About'
    },
    {
      path: '/work',
      component: Work,
      name: 'Work',
      children: [
        {
          path: '',
          name: 'Projects',
          component: Projects
        },
        {
          path: 'activity',
          name: 'Activity',
          component: Activity
        }
      ]
    }
  ],
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
