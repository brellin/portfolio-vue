import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home'
import About from './components/About'
import Work from './components/Work/Work'
import Projects from './components/Work/Projects'
import Activity from './components/Work/Activity'

Vue.use(Router)

export default new Router({
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
