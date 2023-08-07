// store/index.js
import { createApp } from 'vue'

const Vue = createApp( ) 
import Vuex from "vuex";
 
Vue.use(Vuex);
 
export default new Vuex.Store({
 state: {
    loggedIn: false
 },
 getters: {},
 mutations: {
    authToggle(state, payload) {
        state.loggedIn = payload
    }
 },
 actions: {}
});