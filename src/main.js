/* Globals */
window.API_PATH = "/public/api/v1/"
/* App, Components & Plugins imports  */
import { createApp } from 'vue'
import { loadComponents } from './configs/components';
import { loadPlugins } from './configs/plugins';

/* Styles imports  */
import "./styles.css";
import "primevue/resources/themes/lara-light-indigo/theme.css";

/* Main App View Import  */  
import App from './App.vue' 

/* Init. App  */
const app = createApp(App) 
    
loadComponents(loadPlugins(app)).mount('#app')