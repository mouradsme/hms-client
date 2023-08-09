/* Globals */
import './configs/globals'

/* App, Components & Plugins imports  */
import { createApp } from 'vue'
// Do not change the order of these imports!
import { loadPlugins } from './configs/plugins'; 
import { loadComponents } from './configs/components';

/* Styles imports  */
import "primevue/resources/themes/lara-light-indigo/theme.css";
import 'primeflex/primeflex.css';
import "./styles.css";

/* Main App View Import  */  
import App from './App.vue' 

/* Init. App  */
const app = createApp(App) 
    
loadComponents(loadPlugins(app)).mount('#app')