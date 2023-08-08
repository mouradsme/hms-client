<template>
        
    <div id="breadcrumbs-container"> 
        <img src="../assets/Logo.png" alt="Siine" class="logo">

        <span class="breadcrumbs-title">{{ route }}</span>
    </div> 
    
</template>

<script>  

export default {
    name: "Breadcrumbs",
    props: {
        route: String
    },
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
#breadcrumbs-container {
    display: grid; 
    grid-template-columns: var(--breadcrumbs-height) auto;
    gap: calc(var(--breadcrumbs-height) * 0.5);
    width: 100%;
    height: var(--breadcrumbs-height);
    margin-bottom: .5rem;
    background-color: var(--white-color);
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.33);
}  
#breadcrumbs-container .breadcrumbs-title { 
    font-size: calc(var(--breadcrumbs-height) * 0.36);
    color: var(--black-color);
    text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.33);
    display: grid;
    align-content: center;
}
#breadcrumbs-container .logo {
    height: var(--breadcrumbs-height);
    width: var(--breadcrumbs-height); 
}
</style>
