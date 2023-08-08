<template> 

    <div class="view-container"> 
        <div class="form">
            <div class="p-inputgroup flex-1">
                <span class="p-inputgroup-addon">
                    <font-awesome-icon :icon="['fa', 'user']" />
                </span>
                <InputText v-model="user_username"  :placeholder="$t('users.user.username')" />
            </div>
            <div class="p-inputgroup flex-1">
                <span class="p-inputgroup-addon">
                    <font-awesome-icon :icon="['fa', 'lock']" />
                </span>
                <Password 
                v-model="user_password"  
                :promptLabel="$t('users.password.choose')" 
                :weakLabel="$t('users.password.weak')" 
                :mediumLabel="$t('users.password.medium')" 
                :strongLabel="$t('users.password.strong')"
                :placeholder="$t('users.user.password')"/>
            </div>




        </div>
      </div>
</template>
<script>
import $ from 'jquery'
  export default {
    name: "Add User",
    components: {
    },
    data () {
      return { 
        user_password: '',
        user_username: ''
       }
    },
    mounted() {
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

<style>
.form {
    width: 40rem;
}
</style>