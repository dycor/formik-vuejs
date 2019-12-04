<template>
    <div>
        <span >Hello Dylan</span>
        <form @submit="checkForm" @input="handleInput">
            <slot>
                No content
            </slot>
        </form>
        {{test}}
    </div>
</template>

<script>

  export default {
    name: 'Formik',
    props : {
      initialValues : Object,
      onSubmit : Function,
      validator : Object
    },
    data :function() {
        return {...this.initialValues}
    },
    methods : {
      loger : function (...val) {
        //eslint-disable-next-line
        console.log('checkForm d',...val)
      },
      checkForm : function (e) {
        e.preventDefault();
        this.loger('-----------')

        // Object.keys(this.initialValues).forEach( key => this.loger(key,'->',this[key]));
        // const errors =  Object.keys(this.initialValues).map( key => this.loger(key,'->',this[key]));
        const formErrrors = Object.keys(this.validator).map(key => {
          // this.loger('key',key)
          // this.loger('value',key,this[key])
          const errors = [];
          // this.loger('high',key,this.validator[key].required)
          // this.loger('ca passe',this.validator[key].required && !this[key],this.validator[key].required ,!this[key])
          if(this.validator[key].required && !this[key]){
            errors.push(`${key} is required`);
          }

          if('minLength' in this.validator[key]  && this.validator[key].minLength >= this[key].length ){
            errors.push(`${key} must have minimum ${this.validator[key].minLength} characters.`);
          }
          if('maxLength' in this.validator[key]  && this.validator[key].maxLength <= this[key].length ){
            errors.push(`${key} must have maximum ${this.validator[key].maxLength} characters.`);
          }
          // this.loger('yes',errors)
          return { [key] : errors};

        });

        // this.loger(formErrrors)
        this.loger('-----------')
        if(formErrrors.length){
            return formErrrors;
        } else {
          this.onSubmit(e);
        }

      },
      handleInput (e) {
        // this.loger(e.target.id , e.target.value)
        this[e.target.id] = e.target.value;
      }
    },
  }
</script>

<style>
</style>
