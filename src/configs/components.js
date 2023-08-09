
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
import ProgressSpinner from 'primevue/progressspinner';
import RadioButton from 'primevue/radiobutton';
import DataView from 'primevue/dataview';
import DataViewLayoutOptions from 'primevue/dataviewlayoutoptions'   // optional

export function loadComponents(app) {
    app .component('font-awesome-icon', FontAwesomeIcon)
        .component('siine-topbar', TopBar)
        .component('siine-breadcrumbs', Breadcrumbs)
        .component('Button', Button)
        .component('Calendar', Calendar)
        .component('DataTable', DataTable)
        .component('Column', Column)
        .component('InputText', InputText)
        .component('Password', Password)
        .component('ProgressSpinner', ProgressSpinner)
        .component('RadioButton', RadioButton)
        .component('DataView', DataView)
        .component('DataViewLayoutOptions', DataViewLayoutOptions)
    return app;
}