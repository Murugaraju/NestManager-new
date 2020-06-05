import ax from '../../axios';

const state={
    loading:false,
    status:200,
    data:{
        pgList:[]
    } ,//always the api success 2xx response,
    error:{} //always the api 4xx and 5xx response
    
}


const getters={
    //mapping all state keys to respective components getters or extent of data of the componet
    loading:state=>state.loading,
    status:state=>state.status,
    data:state=>state.data,
    error:state=>state.error
   
}



const actions={
    //actions methods first argumet as object
    //will do object destructure to get commit only
    pgListGet: function({commit}){
        
        //initiating the loading animation
        commit('setLoadingTrue')
        ax.get('/dashboard/pg').then((res)=>{
            console.log('I am successfull',res);
            commit('setPgList',res.data);
            commit('setLoadingFalse');
            
        }).
        catch(
            (error)=>{
                console.log('error occured',Object.keys(error),error.response);
                commit('setLoadingFalse',error.response.status);

            }
        )
    },
}



const mutations={
    setPgList(state,data){
        console.log('came in mutation to set pgList')
        state.data.pgList=[...data]
    },
    setLoadingTrue(state){
        state.loading=true
    },
    setLoadingFalse(state,status){
        //this is alway trigger at end of loading so we use it set error, status
        state.loading=false
        console.log('in loading false',status)
        if(status != undefined){
            state.status=status
        }else{
            state.status=200
        }

    }

}



export const PgListStore= {
namespaced:true,
state,
getters,
actions,
mutations

}