import ax from '../../axios';

const state={
    loading:false,
    status:200,
    data:{
        roomList:[]
    } ,//always the api success 2xx response,
    error:{} //always the api 4xx and 5xx response
    
}


const getters={
    //mapping all state keys to respective components getters or extent of data of the componet
    loading:state=>state.loading,
    status:state=>state.status,
    roomList:state=>state.data.roomList,
    error:state=>state.error
   
}



const actions={
    //actions methods first argumet as object
    //will do object destructure to get commit only
    roomListGet: function({commit},{pgId,flId}){
        
        //initiating the loading animation
        console.log('I am successfull',flId);
        commit('setLoadingTrue')
        ax.get('/dashboard/'+pgId+'/floor/'+flId+'/room').then((res)=>{
            console.log('I am successfull',res);
            commit('setRoomList',res.data);
            commit('setLoadingFalse');
            
        }).
        catch(
            (error)=>{
                console.log('error occured',error);
                commit('setLoadingFalse',error.response.status);

            }
        )
    },
}



const mutations={
    setRoomList(state,data){
        console.log('came in mutation to set pgList')
        state.data.roomList=[...data]
    },
    setLoadingTrue(state){
        state.loading=true
    },
    setLoadingFalse(state,status){
        state.loading=false;
        if(status != undefined){
            state.status=status
        }else{
            state.status=200
        }
    }

}



export const FloorItemStore= {
namespaced:true,
state,
getters,
actions,
mutations

}