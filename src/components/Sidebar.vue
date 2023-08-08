<template>
    <div>
        <div id="main-sidebar" >
            <button @click="toggleSidebar()" class="toggle" id="toggle-sidebar">    
                <font-awesome-icon :icon="['fas', 'bars']" />
            </button>
            <img src="../assets/Logo.png" alt="Siine" class="logo">

            <div class="sidebar-items">

                <router-link to="/" class="sidebar-item" @click="closeSidebar()" :title="$t('dashboard.title')">
                    <font-awesome-icon :icon="['fa', 'dashboard']" />{{ $t('dashboard.title') }}
                </router-link>

                <router-link to="/bookings" class="sidebar-item" @click="closeSidebar()" :title="$t('bookings.title')">
                    <font-awesome-icon :icon="['fas', 'calendar-days']" />{{ $t('bookings.title') }}
                </router-link>

                <router-link to="/users" class="sidebar-item" @click="closeSidebar()" :title="$t('users.title')">
                    <font-awesome-icon :icon="['fa', 'users']" />{{ $t('users.title') }}
                </router-link>


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
    #main-sidebar  .logo {
        width: 5rem;
        height: auto;
    }
    #main-sidebar {
        z-index: 99999;
        width: 12.5rem;
        position: fixed;
        left: -14.5rem;
        top: 0;
        height: 100vh;
        display: grid;
        background-color: var(--white-color);
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

    .toggle {
        all: unset;
        cursor: pointer;
        outline: none;
        background-color: var(--white-color);
        border: 1px rgba(0, 0, 0, 0.23) solid;
        border-left: none;
        text-align: center;
    }
    #toggle-sidebar {
        position: absolute;
        left: 14rem;
        width: 3rem;
        height: 3rem; 
        top: .7rem;
    }
    .sidebar-items {
        width: 100%;
        display: grid;
        height: fit-content;
        gap: 1rem;
    }
    .sidebar-item {
        display: grid;
        grid-template-columns: 1fr 4fr;
        width: 100%;
        height: 3.5rem;
        border-radius: .5rem;
        padding-left: 10px;
        padding-right: 10px;
        place-content: center;
        place-items: center;
        background-color: rgba(0, 0, 0, 0.05);
        color: var(--dark-color);
        box-shadow: 5px 5px 1px var(--dark-color);
        transition: all .25s ease-in-out;
        
    }
    .sidebar-item:hover {
        background-color: var(--dark-color);
        color: var(--white-color);
        box-shadow: 0px 0px 0px var(--dark-color);
    }
</style>
