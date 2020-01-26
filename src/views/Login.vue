<template>
    <v-container fill-height >
      <v-layout align-center justify-content>
        <v-flex xs12 sm8 md4>
          <Formik :initial-values="{ email: 'email@email.com', color: 'blue', password: 'Oui' }" @onSubmit="handleSubmit">
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
                        Sign In
                      </v-btn>
                      <v-spacer></v-spacer>
                      <v-btn rounded color='primary' dark>
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
import Formik from '@/components/Form.vue';
import Field from '@/components/Field.vue';
//import axios from '@/utils/axios';
//import store from '@/store';
export default {
  name: 'Login',
  components: {
    Formik,
    Field
  },
  methods: {
    handleSubmit({ event }) {
      event.preventDefault();
    }
  }
};
</script>