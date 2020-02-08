import Vue from 'vue';
import Vuex from 'vuex';
import { Loginstore } from './LoginStore';
import { Utility } from './UtilityStore';

Vue.use(Vuex);
export const store = new Vuex.Store({
    modules: {
        Loginstore,
        Utility
    }
});
