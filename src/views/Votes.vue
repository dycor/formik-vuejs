<template>
  <v-container>
      <v-card class="mx-auto" max-width="700" style="margin-top: -64px;">
      <v-toolbar flat>
        <v-toolbar-title class="black--text" align-center>Votes</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn rounded class="btn btn-primary">
          <router-link to="/add-vote">Créer un vote</router-link>
        </v-btn>
      </v-toolbar>
      <v-divider></v-divider>
        <v-card class="elevation-12" style="margin-top: 20px;">
                <v-toolbar dark color="blue">
                  <v-toolbar-title>
                    Réforme des retraites
                  </v-toolbar-title>  
                </v-toolbar>
                <v-card-title class="headline">Description</v-card-title>
                <v-card-subtitle>
                  Ceci est une petite description de la nouvelle reforme des retraites.
                </v-card-subtitle>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn text color='indigo' dark>Suite</v-btn>
            </v-card-actions>
          </v-card>   
          <v-divider light></v-divider>
        <v-card class="elevation-12" style="margin-top: 20px;">
                <v-toolbar dark color="blue">
                  <v-toolbar-title>
                    Entrée de la concurrence sur les rails français
                  </v-toolbar-title>  
                </v-toolbar>
                <v-card-title class="headline">Description</v-card-title>
                <v-card-subtitle>
                  Fuck la SNCF, baissez les prix bande de con !!!!!
                </v-card-subtitle>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn text color='indigo' dark>Suite</v-btn>
            </v-card-actions>
          </v-card> 
    </v-card>
  </v-container>
</template>

<script>
export default {

}
</script>

<style>

</style>