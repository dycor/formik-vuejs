<template>
  <v-app>
    <v-card v-if="isConnected()" flat>
      <v-toolbar color="primary" dark extended flat>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-spacer></v-spacer>
          <v-btn v-if="isAdmin()" text>Add admin</v-btn>
          <v-btn text v-on:click="logout">
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
      return localStorage.accessLevel;
    },
    logout: function () {
      localStorage.removeItem('token');
      //localStorage.AccessLevel = 0;
      this.$router.push('/login');
    }
  }
}
</script>


  