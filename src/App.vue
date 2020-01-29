<template>
  <v-app>
    <v-card v-if="isConnected()" flat>
      <v-toolbar color="primary" dark extended flat>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-spacer></v-spacer>
          <v-btn text color='white'>
            <router-link class="white-text" to="/votes">Votes List</router-link>
          </v-btn>
          <v-btn text color='white'>
            <router-link class="white-text" to="/profile">Profile</router-link>
          </v-btn>
          <v-btn text v-on:click="logout" color='white'>
            Logout
          </v-btn>
      </v-toolbar>
    </v-card>
    <router-view></router-view>
  </v-app>
</template>

<script>

export default {
  name: 'app',
  components: {
  },
   methods: {
    isConnected() {
      return localStorage.token;
    },
    isAdmin() {
      if(localStorage.accessLevel == 1 ) return true
    },
    logout: function () {
      localStorage.removeItem('token');
      localStorage.removeItem('accessLevel');
      this.$router.push('/login');
    }
  }
}
</script>

<style lang="css">
.white-text{
  color: white !important;
  text-decoration: none !important;
}
</style>


  