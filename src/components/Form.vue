<template>
    <div>
<!--        {{initialValues}}-->
        <slot>

        </slot>
        <button @click.prevent="handleSubmit">Click</button>
        {{form.values}}
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
          errors : []
        }
      }
    },
    methods : {
      setFormValue: function (key,value) { this.form.values[key] = value },
      getFormInitialValue : function (key) { return this.initialValues[key] },
      handleSubmit : function () {
        // eslint-disable-next-line no-console
        console.log(this.form.values)
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