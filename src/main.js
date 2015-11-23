import Vue from 'vue'
import Router from 'vue-router'
import App from './app.vue'
import Library from './views/library.vue'

// install router
Vue.use(Router)

// routing
var router = new Router({
    //hashbang : false,
    //history : true
})

router.map({
    '/library': {
        component: Library
    }
})

router.redirect({
    '*': '/library'
})

router.start(App, '#app')