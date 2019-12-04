<template>
    <div>
        <label v-if="label">{{label}}</label>
        <input :type="type" :id="id">
        <label class="error" :name="`error-${label}`"></label>
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
    },
    methods : {
      loger : function () {
        //eslint-disable-next-line
        console.log(this.name,this.label)
      }
    }
  }
</script>

<style>
</style>
