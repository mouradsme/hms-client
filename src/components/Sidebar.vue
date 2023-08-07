<template>
    <div>
        <div id="main-sidebar" title="Sidebar">
            <button @click="toggleSidebar()" class="toggle" id="toggle-sidebar">    
                <font-awesome-icon :icon="['fas', 'bars']" />
            </button>
            <img src="../assets/Logo.png" alt="Siine" class="logo">
            <div class="px-3 py-2">
                <router-link to="/about" @click="closeSidebar()"><h6><b>About</b></h6></router-link>
                <button id="restart" @click="logout()"><font-awesome-icon :icon="['fas', 'right-from-bracket']" /></button>

            </div>
        </div>
    </div> 
  </template>

<script>
import $ from 'jquery'

export default {
    data() {
        return {

        }
    },
    mounted() {

    },
    methods: {
        toggleSidebar() {
            $('#main-sidebar').toggleClass('closed')
        },
        closeSidebar() {
            $('#main-sidebar').removeClass('closed')

        },
        logout() {
            localStorage.setItem('loggedIn', false);
            localStorage.setItem('User', null); 
            this.$emit('loggedOut')
         }, 
    }
}
</script>
<style   scoped> 
    .logo {
        width: 5rem;
        height: auto;
    }
    #main-sidebar {
        width: 12.5rem;
        position: fixed;
        left: -14.5rem;
        top: 0;
        height: 100vh;
        display: grid;
        background-color: white;
        box-shadow: 1px 1px 7px rgba(0, 0, 0, 0.23);
        padding: 1rem;
        box-sizing: content-box;
        transition: all .2s ease-in-out;
        justify-items: center;
        grid-template-rows: min-content;
    } 
    #main-sidebar.closed {
        left: 0;
    }

    #toggle-sidebar {
        position: absolute;
        left: 14rem;
        width: 3rem;
        height: 3rem; 
    }
</style>
