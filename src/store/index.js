import Vue from 'vue';
import Vuex from 'vuex';
// import store fo inidividual modules
import {Loginstore} from './logingstore';
Vue.use(Vuex)

export const store = new Vuex.Store({
    modules:{
        Loginstore,
    }
})
