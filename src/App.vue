<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>

export default {
  name: 'app',
  components: {
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
