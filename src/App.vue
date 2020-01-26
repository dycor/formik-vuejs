<template>
  <v-app>
    <Login/>
  </v-app>
</template>

<script>

import Login from './views/Login'

export default {
  name: 'app',
  components: {
    Login
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
