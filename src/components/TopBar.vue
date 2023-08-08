<template>
        <div id="main-topbar" >
            <div class="sidebar-items">

                <template v-for="menuItem in menuItems" :key="menuItem">
                    <router-link v-if="menuItem.show"  :to="menuItem.path" class="sidebar-item" :title="$t(menuItem.name + '.title')">
                        <font-awesome-icon :icon="menuItem.icon"  />
                    </router-link> 
                </template>


            </div>
            <button id="logout" @click="logout()"><font-awesome-icon :icon="['fas', 'right-from-bracket']" /></button>

        </div>
  </template>

<script>
import menuItems from '../configs/menu';
export default {
    name: "Topbar",

    data() {
        return {
            menuItems
        }
    },
    mounted() {

    },
    methods: {
        logout() {
            localStorage.setItem('loggedIn', false);
            localStorage.setItem('User', null); 
            this.$emit('loggedOut')
         }, 
    }
}
</script>
<style  >  
#main-topbar {
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    gap: 1rem;
    padding-left: 1rem; 
    height: var(--topbar-height);
    grid-template-rows: var(--topbar-height);
    background-color: var(--main-color);

}
#main-topbar .logo {
    height: var(--topbar-height);
    width: var(--topbar-height);
}
#main-topbar .sidebar-items {
    display: flex;
    width: 100%;
    gap: 1.2rem;
    place-items: center;
}
#main-topbar .sidebar-items .sidebar-item {
    color: var(--white-color);
    font-size: calc(var(--topbar-height) * 0.5);
}
#logout {
    all: unset;
    font-size: calc(var(--topbar-height) * 0.5);
    background-color: var(--white-color);
    padding-left: .4rem;
    padding-right: .4rem;
    cursor: pointer;
    color: var(--danger-color);

}
</style>
