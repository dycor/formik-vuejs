<template>
  <Formik :initial-values="{ email: '', color: 'red', firstName: '', test: 'Oui' }">
    <input type="text"/>
    <component v-bind:is="`FormInput`" id="color" ></component>
    <component v-bind:is="`FormInput`" id="check"  type="checkbox"></component>
  </Formik>
</template>

<script>
import Formik from './components/Form.vue'
export default {
  name: 'app',
  components: {
    Formik,
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
