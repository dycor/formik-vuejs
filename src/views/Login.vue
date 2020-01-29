<template>
  <v-container fill-height>
    <v-layout align-center justify-content>
      <v-flex xs12 sm8 md4>
        <v-card class="mx-auto" max-width="700" style="margin-top: -64px;">
          <v-toolbar flat color="blue">
            <v-toolbar-title class="black--text" align-center>Login</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-divider></v-divider>
          <v-card class="elevation-12" style="margin-top: 20px;">
            <Formik
              :initial-values="{ email: '', password: '' }"
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
                    label="Password"
                    type="password"
                    name="password"
                    placeholder="Password"
                    id="password"
                  />
                </v-card-text>
                <v-divider light></v-divider>
                <v-card-actions>
                  <v-btn rounded color="indigo" dark>
                    <router-link color="white" to="/register"
                      >Registrer</router-link
                    >
                  </v-btn>
                  <v-spacer></v-spacer>
                  <v-btn rounded color="primary" dark type="submit">
                    Login
                  </v-btn>
                </v-card-actions>
              </v-form>
            </Formik>
          </v-card>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Formik from "../components/Form.vue";
import Field from "../components/Field.vue";
import axios from "../helpers/axios";

export default {
  name: "Login",
  components: {
    Formik,
    Field
  },
  methods: {
    handleSubmit({ event, values }) {
      // eslint-disable-next-line no-console
      console.log(window.location.pathname);
      event.preventDefault();
      axios
        .post("/login", {
          email: values.email,
          password: values.password
        })
        .then(response => {
          if (response.status === 200) {
            //permet de stocker le token de la personne connectée
            localStorage.token = response.data.JWT;
            // eslint-disable-next-line no-console
            console.log(response.data);
            localStorage.accessLevel = response.data.AccessLevel;
            this.$router.push("/votes");
            // eslint-disable-next-line no-console
            console.log("Connected");
          }
        })
        .catch(response => {
          alert("Email or password invalid");
          // eslint-disable-next-line no-console
          console.log(response);
        });
    }
  }
};
</script>
