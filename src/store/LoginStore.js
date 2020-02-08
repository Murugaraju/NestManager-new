import { router } from '../router';
import nestaxios from "../Repo" // imported axios object
const user = JSON.parse(localStorage.getItem('NestManager')); // Getting data from Local Storage
const state = user ? { status: { loggedIn: true }, user ,error: '' , loder: false} : { status: {}, user: null, error: '' , loder: false }; // Create Vuex store value
const getters = {
    geterror: (state) => state.error,
    getloader: (state) => state.loder,
    getlogedinusername: (state) => state.user ? state.user.data.fullname : "Anonymous",
    getlogedInusername: (state) => state.user ? state.user.data.Int : ""
}
const actions = {
    get_token_api({commit }, { username, password }) { // function will take username and password 
        commit('enableloader')
        nestaxios.post('pg/api-token-auth/',{username: username,password: password})
        .then(data => {
            if (data.status == 200){
                localStorage.setItem('NestManager', JSON.stringify(data.data));
                commit('loginSuccess', data.data);
                router.push('/dashboard');
            }
            commit('disableloader')

            })
        .catch(err => {
            commit('seterror', err.response)
            commit('disableloader')

            })
    }
};

const mutations = {
    loginRequest(state, user) {
        state.status = { loggingIn: true };
        state.user = user;
    },
    loginSuccess(state, user) {
        state.status = { loggedIn: true };
        state.user = user;
    },
    loginFailure(state, error) {
        state.status = {};
        state.user = null;
        state.error = error;
    },
    logout(state) {
        state.status = {};
        state.user = null;
    },
    enableloader(state){
        state.loder = true
    },
    disableloader(state){
        state.loder = false
    },
    seterror(state, error){
        state.error =  error

    }
};


export const Loginstore = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};