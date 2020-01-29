<template>
  <v-container v-if="votes.length">
      <v-card class="mx-auto" max-width="700" style="margin-top: -64px;">
      <v-toolbar flat>
        <v-toolbar-title class="black--text" align-center>Votes</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn rounded class="btn btn-primary">
          <router-link to="/add-vote">Créer un vote</router-link>
        </v-btn>
      </v-toolbar>
      <v-divider></v-divider>
          <v-card v-for="vote in votes" :key="vote.id" class="elevation-12" style="margin-top: 20px;">
                <v-toolbar dark color="blue">
                  <v-toolbar-title>
                    Identifiant du vote : {{vote.uuid}}
                  </v-toolbar-title>  
                </v-toolbar>
                <v-card-title class="headline">{{vote.title}}</v-card-title>
                <v-card-subtitle>
                  {{vote.description}}
                </v-card-subtitle>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn rounded class="btn btn-primary">
                <router-link :to="'/vote/'+vote.uuid">Voir plus</router-link>
              </v-btn>
            </v-card-actions>
          </v-card>   
          <v-divider light></v-divider>
    </v-card>
  </v-container>
  <v-container v-else>
      <v-card class="mx-auto" max-width="700" style="margin-top: -64px;">
      <v-toolbar flat>
        <v-btn rounded class="btn btn-primary">
          <router-link to="/add-vote">Créer un vote</router-link>
        </v-btn>
      </v-toolbar>
      <v-divider></v-divider>
          <v-card class="elevation-12" style="margin-top: 20px;">
                <v-toolbar dark color="blue">
                  <v-toolbar-title>
                    Il est nécessaire de créer un vote pour pouvoir continuer
                  </v-toolbar-title>  
                </v-toolbar>
          </v-card>   
          <v-divider light></v-divider>
    </v-card>
  </v-container>
</template>

<script>
  
import axios from '../helpers/axios';

export default {
    name: 'Votes',
    data() {
    return {
      votes: {}
    };
  },
    created() {
    axios
      .get(`/vote`)
      .then(response => {
        if (response.status === 200) {
          this.votes = response.data;
        }
      })
      .catch(response => {
        // eslint-disable-next-line no-console
        console.log(response);
      });
  }
}
</script>

<style>

</style>