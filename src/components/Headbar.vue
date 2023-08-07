<template>
        
        <div class="header-container">
            <div class="logo-container">
                <img src="../assets/Logo.png" alt="Siine" class="logo">
            </div>
            <div class="breadcrumbs">
                <h3 class="breadcrumbs-title">{{ $t("dashboard.title") }}</h3>
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
    }
}
</script>
<style   scoped> 
    .logo {
        width: 5rem;
        height: auto;
    }

.header-container {
  display: grid;
  grid-template-columns: 1fr 3fr 3fr 1fr; 
  height: 3.5rem;
  grid-template-rows: 3.5rem;
  
  } 
  .header-container .logo-container {
    display: grid;
    grid-template-rows: 3rem;
    place-content: center;
    place-items: center;

  }
   .logo-container .logo {
    height: 100%;
    width: auto;
    border-radius: 2.1rem;
    
  }
.breadcrumbs-title { 
  font-size: 1rem;
  color:#3490dc;
  text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.33);
}

</style>
