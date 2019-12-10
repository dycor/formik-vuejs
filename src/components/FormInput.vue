<template>
    <div>
        <input :type="type"
               :value="value"
               :id="id"
               :name="name"
               :required="required"
               :disabled="disabled"/>
    </div>
</template>

<script>
  export default {
    name: "FormInput",
    inject: ['setFormValue','getFormInitialValue'],
    data(){
      return {
        value : ''
      }
    },
    props : {
      name : String,
      type : String,
      id : String,
      required : Boolean,
      disabled : Boolean,
    },
    created() {
      // console.log('helllo',this.setFormValue)

      this.value = this.getFormInitialValue(this.id);
      this.setFormValue(this.id,this.value);
    }

  }
</script>

<style scoped>

</style>