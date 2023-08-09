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
          <div class="loader-container">
              <ProgressSpinner style="width: 50px; height: 50px" strokeWidth="8" fill="var(--main-color)"
                  animationDuration=".5s" v-if="loading" />
          </div>
      
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
        loading: true,
        users: [],
      }
    },
    mounted() {
      this.loadUsers()
    }, 
    methods: {
      loadUsers() {
        let that = this
        this.loading = true
        Utility.getReq('users', {}, function(response) {
          that.users = response.users
          that.loading = false
         }, function(err) {
          console.log(err)
          that.loading = false
        })
        

      }
    }
  }
</script>

<style >
.loader-container {
  width: 100%;
  text-align: center;
}
</style>