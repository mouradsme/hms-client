
import { createI18n } from "vue-i18n";
import { createRouter, createWebHistory } from 'vue-router'
import fr from "../locales/fr.json"; // I18n imports
import routes from './routes'; // Routes imports
import PrimeVue from 'primevue/config'; // UI Library Imports



export function loadPlugins(app) {
    
    /* Prep. Router  */
    const router = createRouter({
        history: createWebHistory(),
        routes: routes
    });

    /* Init. i18n  */
    const i18n = createI18n({
        locale: "fr",
        fallbackLocale: "fr",
        messages: { fr },
    });
    app .use(router)
        .use(i18n)
        .use(PrimeVue);
    return app;
}