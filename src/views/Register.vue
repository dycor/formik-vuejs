<template>
  <v-container fluid fill-height>
      <v-layout align-center justify-content>
          <v-flex xs12 sm8 md4>
              <Formik :initial-values="{ email: '', firstname: '', lastname: '', password: ''}" @onSubmit="handleSubmit">
                <v-form>
                    <v-card class="elevation-12">
                        <v-toolbar dark color="blue">
                            <v-toolbar-title>
                                Register form
                            </v-toolbar-title>
                        </v-toolbar>
                        <v-card-text>
                            <Field component="FormInput" label="Email" type="email" name="email" placeholder="Email" id="email"/>
                        </v-card-text>
                        <v-card-text>
                            <Field component="FormInput" label="Firstname" type="text" name="firstname" placeholder="Firstname" id="firstname"/>
                        </v-card-text>
                        <v-card-text>
                            <Field component="FormInput" label="Lastname" type="text" name="lastname" placeholder="Lastname" id="lastname"/>
                        </v-card-text>
                        <v-card-text>
                             <Field component="FormInput" label="Password" type="password" name="password" placeholder="Password" id="password"/>
                        </v-card-text>
                        <v-divider light></v-divider>
                        <v-card-actions>
                            <v-btn rounded color='indigo' dark>
                                <router-link to="/login">Back</router-link>
                            </v-btn>
                      <v-spacer></v-spacer>
                            <v-btn rounded color='primary' dark type="submit">
                                Register
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

export default {
name: 'Register',
  components: {
    Formik,
    Field
  },
  methods: {
    handleSubmit({ event, values }) {
      event.preventDefault();
      axios
        .post('/user', {
            email: values.email,
            firstname: values.firstname,
            lastname: values.lastname,
            password: values.password,
            accessLevel: window.location.pathname == '/register/admin' ? 1 : 0
        })
        .then(response => {
          if (response.status === 200) {
            window.location.pathname == '/register/admin' ? this.$router.push('/votes') : this.$router.push('/login');
            // eslint-disable-next-line no-console
            console.log("user added")
          }
        })
        .catch(response => {
          // eslint-disable-next-line no-console
          console.log(response);
        });
    }
  }

}
</script>

<style>

</style>