/* App imports  */
import { createApp } from 'vue'
import { createI18n } from "vue-i18n";
import { createRouter, createWebHistory } from 'vue-router'

/* FontAwesome imports  */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faRightFromBracket, faRotate, faDashboard, faUsers, faCalendarDays } from '@fortawesome/free-solid-svg-icons'

/* I18n imports  */
import fr from "./locales/fr.json";

/* Views imports  */
import App from './App.vue'  
import Dashboard from './views/Dashboard.vue'
import BookingsHome from './views/Bookings/Home.vue'
import UsersHome from './views/Users/Home.vue'
/* Styles imports  */
import "./styles.css";

/* Used FA Icons  */
library.add(faBars)
library.add(faRotate)
library.add(faRightFromBracket)
library.add(faDashboard)
library.add(faUsers)
library.add(faCalendarDays)


/* Prep. Router  */
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Dashboard }, 
        { path: '/bookings', component: BookingsHome },
        { path: '/users', component: UsersHome },
    ]
});


/* Init. i18n  */
const i18n = createI18n({
    locale: "fr",
    fallbackLocale: "fr",
    messages: { fr },
  });

/* Init. App  */
const app = createApp(App) 
.use(router)
.use(i18n)
.component('font-awesome-icon', FontAwesomeIcon)

/* Mount App  */
app.mount('#app')