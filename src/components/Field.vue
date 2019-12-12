<template>
    <div>
        <label v-if="label">{{label}}</label>
        <component  v-bind:is="component" v-bind="$props"></component>
    </div>
</template>

<script>
  export default {
    name: 'Field',
    props : {
      name : String,
      label : String,
      type : String,
      id : String,
      required : Boolean,
      component : String
    },
    methods : {
      loger : function () {
        //eslint-disable-next-line
        console.log(this.name,this.label)
      }
    },
    // created() {
    //   // eslint-disable-next-line no-console
    //   console.log(this.$props)
    // }
  }
</script>

<style>
</style>