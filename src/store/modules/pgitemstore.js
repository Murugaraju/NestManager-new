import ax from '../../axios';
const state ={
    loading:false,
    data:{
        floorList:[]
    }
}

const getters ={
    loading: state=>state.loading,
    floorList:state=>state.data.floorList,
}

const actions ={
    pgItemGet({commit},pgId){
        console.log('printing in pgitem',pgId);
        commit('setLoadingTrue');
        ax.get('http://127.0.0.1:8000/dashboard/'+pgId+'/floor/').
        then(
            (res)=>{
                console.log('pgitem get call success',res);
                commit('setFloorList',res.data);
                commit('setLoadingFalse');


            }
        ).
        catch(
            (error)=>{
                console.log('pgitem get call failure',error);
                commit('setLoadingFalse');

                
            }
        )
    }
}

const mutations= {
    setLoadingTrue(state){
        state.loading=true
    },
    setLoadingFalse(state){
        state.loading=false
    },
    setFloorList(state,data){
        state.data.floorList=[...data]
    }
}

export const PgItemStore={
    namespaced:true,
    state,
    getters,
    mutations,
    actions
}