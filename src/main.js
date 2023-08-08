/* Globals */
window.API_PATH = "/public/api/v1/"
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
/* UI Library Imports */
import PrimeVue from 'primevue/config';

/* Styles imports  */
import "./styles.css";
import "primevue/resources/themes/lara-light-indigo/theme.css";

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
        { path: '/', component: Dashboard, name: "dashboard" }, 
        { path: '/bookings', component: BookingsHome, name: "bookings"  },
        { path: '/users', component: UsersHome, name: "users"  },
    ]
});


/* Init. i18n  */
const i18n = createI18n({
    locale: "fr",
    fallbackLocale: "fr",
    messages: { fr },
  });


/* Components Imports */
import TopBar from './components/TopBar.vue'
import Breadcrumbs from './components/Breadcrumbs.vue' 
import Button from "primevue/button"
import Calendar from 'primevue/calendar';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

/* Init. App  */
const app = createApp(App) 
    .use(router)
    .use(i18n)
    .use(PrimeVue)
    .component('font-awesome-icon', FontAwesomeIcon)
    .component('siine-topbar', TopBar)
    .component('siine-breadcrumbs', Breadcrumbs)
    .component('Button', Button)
    .component('Calendar', Calendar)
    .component('DataTable', DataTable)
    .component('Column', Column)

/* Mount App  */
app.mount('#app')