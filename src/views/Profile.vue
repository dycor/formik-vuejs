<template>
  <v-container>
    <v-card class="mx-auto" max-width="700" style="margin-top: -64px;">
      <v-toolbar flat dark color="blue">
        <v-toolbar-title align-center>Profile</v-toolbar-title>
      </v-toolbar>
      <v-card class="elevation-12">
        <v-card-subtitle> Firstname : {{ user.firstname }} </v-card-subtitle>
        <v-card-subtitle> Lastname : {{ user.lastname }} </v-card-subtitle>
        <v-card-subtitle> Email : {{ user.email }} </v-card-subtitle>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text color="indigo" dark>
            <router-link class="blue-text" to="/profile/edit">Edit</router-link>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-card>
  </v-container>
</template>

<script>
import axios from "../helpers/axios";

export default {
  name: "Profile",
  data() {
    return {
      user: {}
    };
  },
  created() {
    axios
      .get(`/user/${localStorage.token}`)
      .then(response => {
        if (response.status === 200) {
          this.user = response.data;
        }
      })
      .catch(response => {
        // eslint-disable-next-line no-console
        console.log(response);
      });
  }
};
</script>

<style lang="css">
.blue-text {
  text-decoration: none !important;
}
</style>
