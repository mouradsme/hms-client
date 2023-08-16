<template> 

    <div class="view-container"> 
      <siine-viewcontrols :routes='[
          { route: "/clients", class: "back", title: this.$t("buttons.back"), icon: "backward"}
        ]'/>


            <div class="form">
            <div class="radios"> 

                <label  v-tooltip.top="$t('tooltips.clients.type_individual')"  for="individual" class="radio-item">
                    <RadioButton v-model="client_type" inputId="individual" name="client_type" value="0" selected="true" />
                    <span>{{ $t('clients.types.individual') }}</span>
                </label>  
                <label  v-tooltip.top="$t('tooltips.clients.type_enterprise')"  for="enterprise" class="radio-item">
                    <RadioButton v-model="client_type" inputId="enterprise" name="client_type" value="1" />
                    <span>{{ $t('clients.types.enterprise') }}</span>
                </label>
                
            </div>
          <hr> 
            </div>
            <siine-client-form-individual v-if="client_type == 0"/>
            
      </div>
</template>
<script>
import Utility from '../../js/functions'
  export default {
    name: "Add Client",
    components: {
    },
    data () {
      return { 
        first_name: '',
        last_name: '',
        middle_name: '',
        client_type: 0,
        is_db_full: true,
        dob: null,
        yob: null,
        
        loading: false,
       }
    },
    mounted() {
     }, 
    methods: {
      addClient() {
        let that = this
        let data = {
          name: that.user_name,
          username: that.user_username,
          password: that.user_password,
          confirm: that.user_password_confirmation,
          type: that.client_type
        } 
        this.loading = true
        Utility.postReq('users', data, function(response) {
          that.loading = false
         }, function(err) {
          that.loading = false
        })

      }
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