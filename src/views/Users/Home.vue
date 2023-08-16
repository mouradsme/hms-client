<template> 

    <div class="view-container"> 
        <siine-viewcontrols :routes='[
          { route: "/users/add", class: "add", title: this.$t("buttons.create"), icon: "plus"}
        ]'/>
        
        <DataTable :value="users" tableStyle="min-width: 50rem">
          <Column field="id" :header="$t('users.user.id')"></Column>
          <Column field="name" :header="$t('users.user.name')"></Column>
          <Column field="username" :header="$t('users.user.username')"></Column>
          <Column field="role" :header="$t('users.user.role')">
            <template #body="slotProps">
                {{ $t("users.user.role_" + slotProps.data.role) }}
            </template> 
          </Column>
     
      </DataTable>       
      <siine-loading v-if="loading" />
      </div>
</template>
<script> 
import Utility from '../../js/functions'
  export default {
    name: "Users",
    components: {
    },
    data () {
       return { 
        loading: true,
        users: [],
      }
    },
    beforeMount() {
      let that = this
      Utility.getDeferredReq('users', {}).then( response => that.loadUsers(response) )
    }, 
    methods: {
      loadUsers(data) {
        this.users = data.status == 'success' ? data.users : []
        this.loading = false
      } 
    }
  }
</script>
 