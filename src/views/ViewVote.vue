<template>
  <v-container>
    <v-card class="mx-auto" max-width="700" style="margin-top: -64px;">
      <v-toolbar flat dark color="blue">
        <v-toolbar-title align-center>{{vote.title}}</v-toolbar-title>
      </v-toolbar>
      <v-card class="elevation-12">
        <v-card-subtitle>{{vote.description}}</v-card-subtitle>
        <v-card-subtitle>
            <p>
                {{ voteCount === 0 || voteCount === 1 ? 'Vote' : 'Votes' }} : {{ voteCount }}
                
            </p>
        </v-card-subtitle>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text color="indigo" dark @click="handleSubmitVote">
            {{state}}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-card>
  </v-container>
</template>

<script>
import axios from "../helpers/axios";

export default {
  name: "ViewVote",
  data() {
    return {
      vote: {},
      voteCount: 0,
      stateVote: "Vote !"
    };
  },
  created() {
    axios
      .get(`/vote/${this.$route.params.uuid}`)
      .then(response => {
        if (response.status === 200) {
          this.vote = response.data;
          let arrayUUID = response.data.uuid_votes;
          if(arrayUUID) {
              this.voteCount = arrayUUID.length;
              if(arrayUUID.includes(this.$route.params.uuid)) {
                    this.state = "Well done, you voted !";
                } else {
                    this.state = "Vote !";
                }
          }
        }
      })
      .catch(response => {
        // eslint-disable-next-line no-console
        console.log(response);
      });
  }, 
  methods: {
    handleSubmitVote() {
      axios
        .put('vote/' + this.$route.params.uuid)
        .then(response => {
          if (response.status === 200) {
            this.voteCount = this.voteCount + 1;
          }
        })
        .catch(({ response }) => {
          if (response.status === 401) {
            // eslint-disable-next-line no-console
            this.stateVote = 'Sorry, you can only vote once !';
          }
          if (response.status === 400) {
            // eslint-disable-next-line no-console
            this.stateVote = "You are an admin, so you can't vote !";
          }
        });
    }
  }
};
</script>

<style lang="css">
.blue-text {
  text-decoration: none !important;
}
</style>
