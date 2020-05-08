import Vue from 'vue'
import { CalendarHeatmap } from 'vue-calendar-heatmap'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faAt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import router from './router'
import store from './store'
import App from './App.vue'

library.add(fab, faAt)

Vue.config.productionTip = false

Vue.component('Github', CalendarHeatmap)
Vue.component('FontAwesomeIcon', FontAwesomeIcon)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
