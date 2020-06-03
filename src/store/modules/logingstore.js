

const state={
    loader:false,
    status:0,
    data:{} ,//always the api success 2xx response,
    error:{} //always the api 4xx and 5xx response
    
}


const getters={
    //mapping all state keys to respective components getters or extent of data of the componet
    loader:state=>state.loader,
    status:state=>state.status,
    data:state=>state.data,
    error:state=>state.error
   
}



const actions={}



// const mutations={}



export const LoginStore= {
namespaced:true,
state,
getters,
actions

}