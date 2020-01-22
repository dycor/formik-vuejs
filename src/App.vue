<template>
  <Formik :initial-values="{ email: '', color: 'red', firstName: '', password: 'Oui' }" @onSubmit="handleSubmit">
    <form>
      <Field component="FormInput" label="Password" type="password" name="password" placeholder="Password" id="password"/>
      <Field component="FormInput" label="check" type="checkbox" name="password" id="check" checked/>
      <Field component="FormInput" id="color"/>
      <input type="submit" value="submit">
    </form>
  </Formik>
</template>

<script>
import Formik from './components/Form.vue'
import Field from "./components/Field";
export default {
  name: 'app',
  components: {
    Formik,
    Field
  },
  methods : {
    handleSubmit : function ({values,event}) {
      // eslint-disable-next-line no-console
      console.log('submit from app',values);
      event.preventDefault();
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
