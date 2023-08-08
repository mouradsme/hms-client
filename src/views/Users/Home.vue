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
        $.ajax({
          type: "GET",
          url:  window.API_URL + "users",
          data: {},
          dataType: "json",
          success: function (response) {
            that.users = response.users
          }
        });

      }
    }
  }
</script>

<style scoped>

</style>