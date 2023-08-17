
/* Components Imports */
import TopBar from '../components/TopBar.vue'
import Breadcrumbs from '../components/Breadcrumbs.vue' 
import ViewControls from '../components/ViewControls.vue'
import Loading from '../components/Loading.vue'

import Individual from '../components/Clients/Individual.vue'
import Enterprise from '../components/Clients/Enterprise.vue'
/* 3rd Party Components */
import Button from "primevue/button"
import Calendar from 'primevue/calendar';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber';
import InputSwitch from 'primevue/inputswitch';
import Dropdown from 'primevue/dropdown';
import Password from 'primevue/password';
import FontAwesomeIcon from './icons'; // Icons imports
import ProgressSpinner from 'primevue/progressspinner';
import RadioButton from 'primevue/radiobutton';
import DataView from 'primevue/dataview';
import DataViewLayoutOptions from 'primevue/dataviewlayoutoptions'   // optional
import Editor from 'primevue/editor';
import InputMask from 'primevue/inputmask';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';

/* 3rd Party directives */
import Tooltip from 'primevue/tooltip';

export function loadComponents(app) {
    app .component('font-awesome-icon', FontAwesomeIcon)
        .component('siine-topbar', TopBar)
        .component('siine-breadcrumbs', Breadcrumbs)
        .component('siine-viewcontrols', ViewControls)
        .component('siine-loading', Loading)
        .component('siine-client-form-individual', Individual)
        .component('siine-client-form-enterprise', Enterprise)

        
        .component('Button', Button)
        .component('Calendar', Calendar)
        .component('DataTable', DataTable)
        .component('Column', Column)
        .component('InputText', InputText)
        .component('InputNumber', InputNumber)
        .component('Password', Password)
        .component('ProgressSpinner', ProgressSpinner)
        .component('RadioButton', RadioButton)
        .component('DataView', DataView)
        .component('DataViewLayoutOptions', DataViewLayoutOptions)
        .component('Dropdown', Dropdown)
        .component('Editor', Editor) 
        .component('InputSwitch', InputSwitch) 
        .component('InputMask', InputMask)
        .component('TabView', TabView)
        .component('TabPanel', TabPanel)
        .directive('tooltip', Tooltip)

        
    return app;
}