<template> 

    <div class="view-container"> 
        <siine-viewcontrols :routes='[
          { route: "/clients/add", class: "add", title: this.$t("buttons.create"), icon: "plus"}
        ]'/>
        
        <DataTable :value="clients" tableStyle="min-width: 50rem">
          <Column field="id" :header="$t('clients.client.id')"></Column>
          <Column field="type" :header="$t('clients.client.type')"></Column>
          <Column field="last_name" :header="$t('clients.client.fullname')">
            <template #body="slotProps">
                {{ slotProps.data.last_name }} {{ slotProps.data.middle_name }} {{ slotProps.data.first_name }}
            </template> 
          </Column>
     
      </DataTable>       
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
      }
    },
    beforeMount() {
      let that = this
      Utility.getDeferredReq('clients', {}).then( response => that.loadUsers(response) )
    }, 
    methods: {
      loadUsers(data) {
        this.clients = data.status == 'success' ? data.clients : []
        this.loading = false
      } 
    }
  }
</script>
 