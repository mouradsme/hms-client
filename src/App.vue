<template>
  <div  v-if="loggedIn" :key="loggedInKey">
    <Sidebar v-if="useSideBar" @loggedOut="userLoggedOut()" /> 
    <siine-topbar  @loggedOut="userLoggedOut()"  v-else/>
    <siine-breadcrumbs :route="$t($route.name + '.title')"/> 
    
    <router-view>
    </router-view>
  </div>
  <div v-else>
    <div id="login-container" :key="loginKey">
      <button id="restart" v-on:click="restartConn()"><font-awesome-icon :icon="['fas', 'rotate']" /></button>
      <img src="./assets/Logo.png" alt="Siine" class="login-logo">
      <h1 style="text-align: center">Siine Hostelo</h1>
      <div id="login-form">
        <input v-if="!connectionSuccessful" type="text" placeholder="Adresse IP" name="ip_address" id="ip_address" v-model="ip_address" required />
        <input v-if="connectionSuccessful" type="text" placeholder="Utilisateur" name="username" id="username" v-model="username" required />
        <input v-if="connectionSuccessful" type="password" placeholder="Mot de passe" name="password" id="password" v-model="password" required />
        <div class="buttons-list">
          <button class="success" v-on:click="testConnection()" v-if="!connectionSuccessful">{{ $t("boot.verify") }}</button>
          <button class="primary" v-on:click="login()" v-if="connectionSuccessful">{{ $t("boot.login") }}</button>

        </div>

      </div>
    </div>
  </div>
  
</template>
<script>
import Sidebar from './components/Sidebar.vue';
import Utility from './js/functions.js'; 
import Swal from 'sweetalert2'
import Logo from './assets/Logo.png'
 export default {
  components: {
    Sidebar
  },
  data() { 
    return {
      useSideBar: false,
      ip_address: '', // Server IP Address
      username: '',   // Login username
      password: '',   // Login Password
      loggedIn: false, // Login Status
      connectionSuccessful: false, // was IP Address Connection successful?
      loginKey: 0,    // A key used to update the login component
      loggedInKey: 0  // A key used to update the App component
    }
  },
  beforeMount() {
    // Prepare IP Address and Login Status if they've already been set up by the user
    this.ip_address = localStorage.getItem('ip_address') ?? ''
    window.API_URL = "http://" + this.ip_address + window.API_PATH
    this.loggedIn = localStorage.getItem('loggedIn') ?? false
  },  
  mounted() {
   },
  methods: { 
    userLoggedOut() {
          localStorage.setItem('loggedIn', false)
          this.loggedIn = false
          this.loggedInKey = (new Date()).getTime()

    },
    restartConn() {
      localStorage.setItem('ip_address', '');
      this.ip_address = ''
      window.API_URL = this.ip_address
      this.connectionSuccessful = false
      localStorage.setItem('loggedIn', false)
      this.loggedIn = false
      this.loginKey = (new Date()).getTime()
    },
    login() {
      let that = this 
      Utility.login(this.username, this.password, function(response) {
        if (response.status == 'success') {
          localStorage.setItem('loggedIn', true)
          localStorage.setItem('User', response.data)
           that.loggedIn = true
           that.loggedInKey = (new Date()).getTime()
        }  
      }, function(response) {
        
          
        if (response.code == 'wrong_credentials' || response.code == 'no_such_user') {
            Swal.fire({
              title: $("boot.titles.error"),
              text: $t("boot.messages.wrong_credentials_no_such_user"),
              icon: 'error',
              confirmButtonText: $t("boot.back")
            })
          } else
        Swal.fire({
          title: $("boot.titles.error"),
          text: $t("boot.messages.detected_error"),
          icon: 'error',
          confirmButtonText: $t("boot.back")
        })
        
      }
      )

    },
    testConnection() {
      let that = this 
      Utility.testConn(this.ip_address, function() {
        Swal.fire({
          title: $("boot.titles.success"),
          text: $t("boot.messages.connection_successful"),
          imageUrl: Logo,
          imageWidth: 75,
          imageHeight: 75,
          imageAlt: 'Siine Hostelo',
        })
        localStorage.setItem('ip_address', that.ip_address)
        that.connectionSuccessful = true
      }, function() {
        Swal.fire({
          title: $("boot.titles.success"),
          text: $t("boot.messages.connection_unsuccessful"),
          icon: 'error',
          confirmButtonText: $t("boot.back")
        })
        that.connectionSuccessful = false

      });
    }
  }
}
</script>

<style>
body, html {
  padding: 0;
  margin: 0;

}
.buttons-list {
  display: grid;
  grid-auto-flow: column;
  gap: 3px;
}
button.success {
  background-color: rgb(24, 179, 29);
  color: white;
} 
#login-container {
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: grid;
  place-content: center;
  place-items: center;
  
}
.login-logo {
  width: 5rem;
  border-radius: 2rem;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.25);

}
#login-form {
  display: grid;
  width: 60%;
  max-width: 40rem;
  min-width: 30rem; 
  place-content: center;
  place-items: center;
  gap: 1rem;

}

#login-form input {
  height: 2rem;
}


</style>