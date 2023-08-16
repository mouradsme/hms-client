<template> 
        <div class="form" >
            <div class="p-inputgroup flex-1">
                <span class="p-inputgroup-addon">
                    <font-awesome-icon :icon="['fa', 'user']" />
                </span>
                <InputText v-model="last_name" :placeholder="$t('clients.client.last_name')" />
                <InputText v-model="first_name" :placeholder="$t('clients.client.first_name')" />
                <InputText v-model="middle_name" :placeholder="$t('clients.client.middle_name')" />
            </div>
            <div class="p-inputgroup flex-1">
                <span v-tooltip.top="$t('tooltips.clients.is_db_full')" class="p-inputgroup-addon" style="gap: 10px">
                  {{ $t('clients.client.is_db_full')  }}
                <InputSwitch v-model="is_db_full" />
                </span> 
                <Calendar v-if="is_db_full" v-model="dob" :placeholder="$t('clients.client.dob')" showIcon  />
                <Calendar v-else v-model="yob" :placeholder="$t('clients.client.yob')" view="year" :dateFormat="'yy'" showIcon  />

            </div>
            <div class="p-inputgroup flex-1">
                <span v-tooltip.top="$t('tooltips.clients.is_db_full')" class="p-inputgroup-addon">
                  {{ $t('clients.client.is_db_full')  }}
                </span> 
                

            </div>


            
            <div class="p-inputgroup flex-1">
                <label for="phone" class="p-inputgroup-addon">
                    <font-awesome-icon :icon="['fa', 'phone']" />
                </label>
                <InputText id="phone" v-model="phone" :placeholder="$t('clients.client.phone')" />
                <label for="email" class="p-inputgroup-addon">
                    <font-awesome-icon :icon="['fa', 'envelope']" />
                </label>
                <InputText id="email" v-model="email" :placeholder="$t('clients.client.email')" />

            </div>
            


            <TabView>
                <TabPanel :header="$t('clients.cards.id')">
                  <div class="p-inputgroup flex-1">
                      <label for="authority" class="p-inputgroup-addon">
                       </label>
                      <InputText id="phone" v-model="phone" :placeholder="$t('clients.client.phone')" />
                      <label for="email" class="p-inputgroup-addon">
                          <font-awesome-icon :icon="['fa', 'envelope']" />
                      </label>
                      <InputText id="email" v-model="email" :placeholder="$t('clients.client.email')" />

                  </div>
                  
                </TabPanel>
                <TabPanel :header="$t('clients.cards.passport')">
                </TabPanel>
                <TabPanel :header="$t('clients.cards.other')">
                </TabPanel>
            </TabView>
            <div class="buttons">
              <Button v-on:click="addClient()" severity="success" >{{ $t('buttons.create')  }}</Button>
            </div>  


        </div> 
</template>
<script>
import Utility from '../../js/functions'
  export default { 
    name: "individual-Form",
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
 
</style>