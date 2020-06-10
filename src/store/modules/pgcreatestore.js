import ax from '../../axios';
const state ={
    loading:false,
    name:undefined,
    location:undefined,
    status:200
}

const getters ={
    loading: state=>state.loading,
    name:state=>state.name,
    location:state=>state.location,
    status:state=>state.status
}

const actions ={
    pgCreate({commit},data){
        
        commit('setLoadingTrue');
        console.log(data)
        ax.post('/dashboard/pg/',data).
        then(
            (res)=>{
                console.log('pgitem get call success',res);
                commit('setReset');
                commit('setLoadingFalse',res.status);


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
    setLoadingFalse(state,status){
        state.loading=false;
        if(status!=undefined){
            state.status=status
        }else{
            state.status=200
        }
    },
    setReset(){
        state.name=undefined;
        state.location=undefined;
    }

}

export const PgCreateStore={
    namespaced:true,
    state,
    getters,
    mutations,
    actions
}