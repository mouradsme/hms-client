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
                <Password 
                    v-model="user_password_confirmation"  
                    :placeholder="$t('users.user.password_confirmation')"/>
            </div>

            <div class="radios">
                <label for="admin" class="radio-item">
                    <RadioButton v-model="role" inputId="admin" name="role" :value="$t('roles.admin')" />
                    <span>{{ $t('roles.admin') }}</span>
                </label>  
                <label for="normal" class="radio-item">
                    <RadioButton v-model="role" inputId="normal" name="role" :value="$t('roles.normal')" />
                    <span>{{ $t('roles.normal') }}</span>
                </label>
                <label for="other" class="radio-item">
                    <RadioButton v-model="role" inputId="other" name="role" :value="$t('roles.other')" />
                    <span>{{ $t('roles.other') }}</span>
                </label> 
                
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
        user_username: '',
        user_password_confirmation: '',
        role: 'normal',
        errorMessage: 'cc'
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
