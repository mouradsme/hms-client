<template>
        
        <div class="header-container"> 
            <div class="breadcrumbs">
                <h3 class="breadcrumbs-title">{{ $t("dashboard.title") }}</h3>
            </div>
        </div> 
        
  </template>

<script>  

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
<style>  
.header-container {
  display: grid;
  grid-template-columns: 1fr 3fr 3fr 1fr; 
  height: 3.5rem;
  grid-template-rows: 3.5rem;
  
  }  
.breadcrumbs-title { 
  font-size: 1rem;
  color:#3490dc;
  text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.33);
}

</style>
