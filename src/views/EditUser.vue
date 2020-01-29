<template>
  <v-container>
    <v-card class="mx-auto" max-width="700" style="margin-top: -64px;">
      <v-toolbar flat>
        <v-toolbar-title class="black--text" align-center>Edit Profile</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-divider></v-divider>
      <v-card class="elevation-12" style="margin-top: 20px;">
        <Formik
          :initial-values="{
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
          }"
          @onSubmit="handleSubmit"
        >
          <v-form>
            <v-card-text>
              <Field
                component="FormInput"
                label="Email"
                type="email"
                name="email"
                placeholder="Email"
                id="email"
              />
            </v-card-text>
            <v-card-text>
              <Field
                component="FormInput"
                label="Firstname"
                type="text"
                name="firstname"
                placeholder="Firstname"
                id="firstname"
              />
            </v-card-text>
            <v-card-text>
              <Field
                component="FormInput"
                label="Lastname"
                type="text"
                name="lastname"
                placeholder="Lastname"
                id="lastname"
              />
            </v-card-text>
            <v-divider light></v-divider>
            <v-card-actions>
              <v-btn color="indigo" dark>
                <router-link to="/profile">Back</router-link>
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn text color="indigo" dark type="submit">Save</v-btn>
            </v-card-actions>
          </v-form>
        </Formik>
      </v-card>
    </v-card>
  </v-container>
</template>

<script>
import axios from "../helpers/axios";
import Formik from "../components/Form.vue";
import Field from "../components/Field.vue";
export default {
  name: "EditUser",
  components: {
    Formik,
    Field
  },
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
  },
  methods: {
    handleSubmit({ event, values }) {
      event.preventDefault();
      let data = {};
      for (const value in values) {
        if (values[value]) data[value] = values[value];
      }
      axios
        .put(`/user/${localStorage.token}`, data)
        .then(response => {
          if (response.status === 200) {
            // eslint-disable-next-line no-console
            console.log("Update done", response.data);
            this.user = response.data;
            this.$router.push("/profile");
          }
        })
        .catch(response => {
          // eslint-disable-next-line no-console
          console.log(response);
        });
    }
  }
};
</script>

<style></style>
