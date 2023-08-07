import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faBars, faRightFromBracket, faRotate } from '@fortawesome/free-solid-svg-icons'

 import App from './App.vue' 
import Home from './views/Home.vue'
import About from './views/About.vue'
import "./styles.css";

 const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/about', component: About },
        { path: '/home', component: Home },
    ]
});
library.add(faBars)
library.add(faRotate)
library.add(faRightFromBracket)

const app = createApp(App) 
.use(router)
.component('font-awesome-icon', FontAwesomeIcon)


app.mount('#app')