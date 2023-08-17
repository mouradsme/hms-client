<template> 

    <div class="view-container"> 
      <siine-viewcontrols :routes='[
          { route: "/clients", class: "back", title: this.$t("buttons.back"), icon: "backward"}
        ]'/>


            <div class="form">
            <div class="radios"> 

                <label  v-tooltip.top="$t('tooltips.clients.type_individual')"  for="individual" class="radio-item">
                    <RadioButton v-model="client_type" inputId="0" id="individual" value="individual"   />
                    <span>{{ $t('clients.types.individual') }}</span>
                </label>  
                <label  v-tooltip.top="$t('tooltips.clients.type_enterprise')"  for="enterprise" class="radio-item">
                    <RadioButton v-model="client_type" inputId="1" id="enterprise" value="enterprise" />
                    <span>{{ $t('clients.types.enterprise') }}</span>
                </label>
                
            </div>
          <hr> 
            </div>
            <siine-client-form-individual v-if="client_type == null || client_type == 'individual'"/>
            <siine-client-form-enterprise v-else/>
            
      </div>
</template>
<script>
import { ref } from 'vue'

  export default {
    name: "Add Client",
    components: {
    },
    data () {
      return { 
        client_type: 0
       }
    },
    mounted() {
      this.client_type = ref('individual')
     }, 
    methods: {
    }
  }
</script>

<style>
.form {
  margin: auto;
    width: 40rem;
    display: grid;
    gap: 1rem;
}
.radios {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
.radio-item {
  display: flex;
  gap: 1rem;
  margin: 5px;
  padding: 7px 22px;
  border: 1px solid rgba(0, 0, 0, 0.24);
  background-color:var(--white-color) ;
  cursor: pointer;
}
 
</style>