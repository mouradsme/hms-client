<template> 

    <div class="view-container"> 
        <siine-viewcontrols :routes='[
          { route: "/clients/add", class: "add", title: this.$t("buttons.create"), icon: "plus"}
        ]'/>

        

<TabView>
                <TabPanel :header="$t('clients.types.individual')">
                  <DataTable :value="clients" tableStyle="min-width: 50rem">
                      <Column field="id" :header="$t('clients.client.id')"></Column>
                      
                      <Column field="type" :header="$t('clients.client.type')">
                        <template #body="slotProps">
                            <span v-if="slotProps.data.type == 0">{{ $t('clients.types.individual') }}</span>
                            <span v-else>{{ $t('clients.types.enterprise') }}</span>
                        </template> 
                      </Column>

                      <Column field="last_name" :header="$t('clients.client.fullname')">
                        <template #body="slotProps">
                            {{ slotProps.data.last_name }} {{ slotProps.data.middle_name }} {{ slotProps.data.first_name }}
                        </template> 
                      </Column>
                
                  </DataTable>  
                  
                  
                </TabPanel>
                <TabPanel :header="$t('clients.types.enterprise')">
                  <DataTable :value="eclients" tableStyle="min-width: 50rem">
                    <Column field="id" :header="$t('clients.client.id')"></Column>
                    
                    <Column field="type" :header="$t('clients.client.type')">
                      <template #body="slotProps">
                          <span v-if="slotProps.data.type == 0">{{ $t('clients.types.individual') }}</span>
                          <span v-else>{{ $t('clients.types.enterprise') }}</span>
                      </template> 
                    </Column>

                    <Column field="last_name" :header="$t('clients.client.fullname')">
                      <template #body="slotProps">
                          {{ slotProps.data.company_name }}
                      </template> 
                    </Column>
              
                </DataTable>  
                  
                </TabPanel>
                
            </TabView>
        
             
      <siine-loading v-if="loading" />
      </div>
</template>
<script> 
import Utility from '../../js/functions'
  export default {
    name: "Clients",
    components: {
    },
    data () {
       return { 
        loading: true,
        clients: [],
        eclients: [],
        client_type: 0
      }
    },
    beforeMount() {
      let that = this
      Utility.getDeferredReq('clients/individual', {}).then( response => that.loadClients(response) )
      Utility.getDeferredReq('clients/enterprise', {}).then( response => that.loadEClients(response) )
    }, 
    methods: {
      loadClients(data) {
        this.clients = data.status == 'success' ? data.clients : []
        this.loading = false
      },
      loadEClients(data) {
        this.eclients = data.status == 'success' ? data.clients : []
        this.loading = false
      },
    }
  }
</script>
 