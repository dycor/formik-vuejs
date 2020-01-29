<template>
  <v-container fluid fill-height>
      <v-layout align-center justify-content>
          <v-flex xs12 sm8 md4>
              <Formik :initial-values="{ email: '', firstname: '', lastname: '', password: ''}" @onSubmit="handleSubmit">
                <v-form>
                    <v-card class="elevation-12">
                        <v-toolbar dark color="blue">
                            <v-toolbar-title>
                                Add vote
                            </v-toolbar-title>
                        </v-toolbar>
                        <v-card-text>
                            <Field component="FormInput" label="Title" type="text" name="title" placeholder="Title" id="title" class="longtext"/>
                        </v-card-text>
                        <v-card-text>
                            <Field component="FormInput" label="Description" type="text" name="desc" placeholder="Description" id="desc"/>
                        </v-card-text>
                        <v-divider light></v-divider>
                        <v-card-actions>
                            <v-btn rounded>
                                <router-link to="/votes">Vote list</router-link>
                            </v-btn>
                      <v-spacer></v-spacer>
                            <v-btn rounded color='primary' dark type="submit">
                                Submit
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
name: 'AddVote',
  components: {
    Formik,
    Field
  },
  methods: {
    showurl : function () {
        // eslint-disable-next-line no-console
      console.log(this.$route.query.page)
    },
    handleSubmit({ event, values }) {
      event.preventDefault();
      axios
      //a remplpacer par /user pour créer des users avec l'api
      //commentaire a decommenter pour l'api
        .post('/vote', {
            title: values.title,
            description: values.desc
            //name: values.firstname,
            //job: values.lastname
        })
        .then(response => {
            //remplacer 201 par 200
          if (response.status === 200) {
            this.$router.push('/votes');
            // eslint-disable-next-line no-console
            console.log("vote added")
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