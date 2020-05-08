import Vue from 'vue'
import Vuex, { mapActions } from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        contributions: undefined
    },
    actions: {
        populate() {
            axios
                .get("https://github-calendar.now.sh/v1/brellin")
                .then(res => this.state.contributions = res.data.contributions)
                .catch(err => console.log(err))
        }
    },
    mutations: {
        ...mapActions(['populate'])
    }
})
