<template>
    <v-container fill-height >
      <v-layout align-center justify-content>
        <v-flex xs12 sm8 md4>
          <Formik :initial-values="{ email: '', password: '' }" @onSubmit="handleSubmit">
            <v-form>
              <v-card class="elevation-12">
                <v-toolbar dark color="blue">
                  <v-toolbar-title>
                    Login form
                  </v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                  <Field component="FormInput" label="Email" type="email" name="email" placeholder="Email" id="email"/>
                </v-card-text>
                <v-card-text>
                  <Field component="FormInput" label="Password" type="password" name="password" placeholder="Password" id="password"/>
                </v-card-text>
                <v-divider light></v-divider>
                  <v-card-actions>
                      <v-btn rounded color='indigo' dark>
                        <router-link color="white" to="/register">Registrer</router-link>
                      </v-btn>
                      <v-spacer></v-spacer>
                      <v-btn rounded color='primary' dark type="submit">
                        Login
                      </v-btn>
                  </v-card-actions>
             </v-card>         
            </v-form>
        </Formik>
        </v-flex>
      </v-layout>
    </v-container>
</template>

<script>
import Formik from '../components/Form.vue';
import Field from '../components/Field.vue';
import axios from '../helpers/axios';
//import store from '@/store';
export default {
  name: 'Login',
  components: {
    Formik,
    Field
  },
  methods: {
    handleSubmit({ event, values }) {
      event.preventDefault();
      //post a remplacer par les /login pour l'api
      axios
        .post('/login', {
          email: values.email,
          password: values.password
        })
        .then(response => {
          if (response.status === 200) {
            //permet de stocker le token de la personne connectée
            localStorage.token = response.data.JWT;
            //Access level a decommenter pour recuperer l'acceslevel du gars
            localStorage.accessLevel = response.data.AccessLevel;
            this.$router.push('/votes');
            // eslint-disable-next-line no-console
            console.log("Connected")
          }
        })
        .catch(response => {
          alert("Email or password invalid")
          // eslint-disable-next-line no-console
          console.log(response);
        });
    }
  }
};
</script>