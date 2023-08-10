<template> 

    <div class="view-container"> 
      <siine-viewcontrols :routes='[
          { route: "/users", class: "back", title: this.$t("buttons.back"), icon: "backward"}
        ]'/>


        <div class="form">
            <div class="p-inputgroup flex-1">
                <span class="p-inputgroup-addon">
                    <font-awesome-icon :icon="['fa', 'person']" />
                </span>
                <InputText v-model="user_name"  :placeholder="$t('users.user.name')" />
            </div>
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
                    <RadioButton v-model="role" inputId="admin" name="role" value="0" />
                    <span>{{ $t('roles.admin') }}</span>
                </label>  
                <label for="normal" class="radio-item">
                    <RadioButton v-model="role" inputId="normal" name="role" value="1" />
                    <span>{{ $t('roles.normal') }}</span>
                </label>
                <label for="other" class="radio-item">
                    <RadioButton v-model="role" inputId="other" name="role" value="2" />
                    <span>{{ $t('roles.other') }}</span>
                </label> 
                
            </div>
            <div class="buttons">
              <Button v-on:click="addUser()" severity="success" >{{ $t('buttons.create')  }}</Button>
            </div>  
            <div class="loader-container">
                <ProgressSpinner style="width: 50px; height: 50px" strokeWidth="8" fill="var(--main-color)"
                    animationDuration=".5s" v-if="loading" />
            </div>


        </div>
      </div>
</template>
<script>
import Utility from '../../js/functions'
  export default {
    name: "Add User",
    components: {
    },
    data () {
      return { 
        user_password: '',
        user_username: '',
        user_name: '',
        user_password_confirmation: '',
        role: 2,
        loading: false,
       }
    },
    mounted() {
     }, 
    methods: {
      addUser() {
        let that = this
        let data = {
          name: that.user_name,
          username: that.user_username,
          password: that.user_password,
          confirm: that.user_password_confirmation,
          role: that.role
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

.loader-container {
  width: 100%;
  text-align: center;
}
</style>