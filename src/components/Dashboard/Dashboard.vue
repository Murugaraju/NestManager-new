<template>
  <fragment>
     <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      app
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>NestManager</v-toolbar-title>
    </v-app-bar>
    
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