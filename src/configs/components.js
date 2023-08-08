
/* Components Imports */
import TopBar from '../components/TopBar.vue'
import Breadcrumbs from '../components/Breadcrumbs.vue' 
import Button from "primevue/button"
import Calendar from 'primevue/calendar';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import FontAwesomeIcon from './icons'; // Icons imports

export function loadComponents(app) {
    app .component('font-awesome-icon', FontAwesomeIcon)
        .component('siine-topbar', TopBar)
        .component('siine-breadcrumbs', Breadcrumbs)
        .component('Button', Button)
        .component('Calendar', Calendar)
        .component('DataTable', DataTable)
        .component('Column', Column)
        .component('InputText', InputText)
        .component('Password', Password);
    return app;
}