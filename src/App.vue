<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <Formik :initial-values="{ email: '', color: 'red', firstName: '', test: 'Oui' }" :on-submit="submitForm" :validator="validator">
          <Field label="Test" type="email" name="test" placeholder="Email" id="test" />
          <Field label="Password" type="password" name="password" placeholder="Password" id="password"/>
          <label htmlFor="email">Email</label>
          <input id="email" placeholder="Enter your email" type="text" v-model="bonjour"/>
          <button type="button">Reset</button>
          <button type="submit" @click="handleSubmit"> Submit</button>
    </Formik>

  </div>
</template>

<script>
import Formik from './components/Formik.vue'
import Field from "./components/Field";
export default {
  name: 'app',
  components: {
    Formik,
    Field
  },
  data : () => ({
    validator : {
      test : {
        required : true,
        minLength : 3,
        maxLength : 255
      },
      password : {
        required : true
      }
    },
    bonjour : ''
  }),
  methods: {
    submitForm() {
      this.console.log('submit form')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
