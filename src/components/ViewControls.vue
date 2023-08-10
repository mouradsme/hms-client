<template>
      
    <div id="view-options">
      <div class="controls">
        <template v-for="item in this.$props.routes" :key="item">
            <router-link :to="item.route" :class="'control ' + item.class " :title="item.title">
                <font-awesome-icon :icon="['fa', item.icon]" />
            </router-link>
        </template>
      </div>
    </div>
    
</template>

<script>  

export default {
    name: "ViewControls",
    props: {
        routes: Array
    },
data() {
     return { 
     }
},
beforeMount() {
},
mounted() {

}, 
methods: {
}
}
</script>
<style>  

#view-options .controls {
  display: grid; 
  grid-auto-flow: column;
  height:  var(--breadcrumbs-height);
  justify-items: end;
  
}
#view-options .controls .control {
  display: grid; 
  place-content: center;
  height: var(--breadcrumbs-height);
  width: var(--breadcrumbs-height); 
}
#view-options .controls .control.add {
  background-color: var(--success-color);
  color: var(--white-color);
}
#view-options .controls .control.back {
  background-color: var(--main-color);
  color: var(--white-color);
}
</style>
