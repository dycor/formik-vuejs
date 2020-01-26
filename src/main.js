import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'
import "./plugins/vuetify.js"

Vue.config.productionTip = false;
Vue.use(Vuetify)
const requireComponent = require.context(
  // The relative path of the components folder
  './components',
  // Whether or not to look in subfolders
  false,
  // The regular expression used to match form component filenames
  /Form[A-Z]\w+\.(vue|js)$/
);

requireComponent.keys().forEach(fileName => {
  // Get component config
  const componentConfig = requireComponent(fileName)
  // console.log('fileName',fileName
  //   .split('/')
  //   .pop()
  //   .replace(/\.\w+$/, ''))

  // Get PascalCase name of component
  const componentName = fileName
    .split('/')
    .pop()
    .replace(/\.\w+$/, '');


  // Register component globally
  Vue.component(
    componentName,
    // Look for the component options on `.default`, which will
    // exist if the component was exported with `export default`,
    // otherwise fall back to module's root.
    componentConfig.default || componentConfig
  )
});

export default new Vuetify({ })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  render: h => h(App)
})