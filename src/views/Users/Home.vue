<template> 

    <div class="view-container"> 
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
      </div>
</template>
<script>
import $ from 'jquery'
import Utility from '../../js/functions'
  export default {
    name: "Users",
    components: {
    },
    data () {
      return { 
        users: [],
      }
    },
    mounted() {
      this.loadUsers()
    }, 
    methods: {
      loadUsers() {
        let that = this
        Utility.getReq('users', {}, function(response) {
          that.users = response.users
         }, function(err) {
          console.log(err)
        })
        

      }
    }
  }
</script>

<style scoped>

</style>