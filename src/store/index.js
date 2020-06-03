import Vue from 'vue';
import Vuex from 'vuex';
// import store fo inidividual modules
import {LoginStore} from './modules/logingstore';
import {PgListStore} from './modules/pgliststore';
import {CentralLoaderStore} from './centralloaderstore';
import {PgItemStore} from './modules/pgitemstore';
Vue.use(Vuex)

export const store = new Vuex.Store({
    modules:{
        LoginStore,
        PgListStore,
        CentralLoaderStore,
        PgItemStore,

    }
})
  