
const state = { msg: '' };

const getters = {
    getmasg: (state) => state.msg,
}
const actions = {
    notification({commit}, msg){
        commit('triger_notification',  {msg} );
    }
 
};

const mutations = {
    triger_notification(state, test) {
        console.log('mutations', test)
        state.msg = test;
    },
   
};


export const Utility = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};