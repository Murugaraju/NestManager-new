import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import {router} from './router';
//store import 
import {store} from './store/index';
//importing Fragments feauter by install npm on those,
// to mimic same feature of reactjs for root less component, https://www.npmjs.com/package/vue-fragments
import Fragment from 'vue-fragment'
Vue.use(Fragment.Plugin)
Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
