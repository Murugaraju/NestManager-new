<template>
  <fragment>
     <v-container
        class="fill-height"
        fluid
        id="container"
      >
        <v-row
          align="left"
          justify="left"
        >
          <v-col class="text-center">
    <v-tabs 
    color="#FF7F00"
    grow
    v-model="id"
    
    >
      <v-tab :key="pg.id" v-for="pg in PGs" >
            {{pg.name}}
      </v-tab>
            
    </v-tabs>
      <v-tabs-items v-model="id">
        <v-tab-item
          v-for="item in PGs"
          :key="item.id"
        > 
             
          <Floors :id="item.id" />


        </v-tab-item>
      </v-tabs-items>
          </v-col>
        </v-row>
     </v-container>
    
  </fragment> 
           
           
           
            
              
          
       
   
   
 
</template>

<script>
import Floors from './Floors';

  export default {
      name:'Dashboard',
      components:{
        Floors
      },
       data: () =>{ return {
      drawer: null,
      id:null,
      PGs:[
        {id:1,name:'PG 1'},

        {id:2,name:'PG 2'},
        {id:3,name:'PG 3'},
        {id:4,name:'PG 4'},
        {id:5,name:'PG 5'},


      ]
    }},
    props: {
      source: String,
    },
   
    methods:{
      onTabCliked: function(ev){
          console.log("tab clicked----->",ev)
      }
    },
    watch:{
      id:function(){
        console.log("came in because id data changed",this.id)
      }
    },
    
  }
</script>

<style  scoped>
#container{
  margin:0;
 
}
</style>