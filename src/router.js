import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import Projects from '@/components/Projects.vue'
import Contact from '@/components/Contact.vue'

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/Home',
            name: 'Home',
            component: Home
        },
        {
            path: '/Projects',
            name: 'Projects',
            component: Projects
        },
        {
            path: '/Contact',
            name: 'Contact',
            component: Contact
        }
    ]
});