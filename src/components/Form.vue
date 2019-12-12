<template>
    <div @submit="handleSubmit" >
<!--        {{initialValues}}-->
        <slot />
        <!--        {{form.values}}-->
    </div>
</template>

<script>
  export default {
    name: "Form",
    props : {
      initialValues : Object
    },
    data :function() {
      return {
        form: {
          initialValues : this.initialValues,
          values : {},
        }
      }
    },
    methods : {
      setFormValue: function (key,value) { this.form.values[key] = value },
      getFormInitialValue : function (key) { return this.initialValues[key] },
      handleSubmit : function (e) {
        this.$emit('onSubmit', {
          values: this.form.values,
          event: e,
        });
      }
    },
    provide: function () {
      return {
        setFormValue: this.setFormValue,
        getFormInitialValue : this.getFormInitialValue
      }
    }
  }
</script>

<style scoped>

</style>