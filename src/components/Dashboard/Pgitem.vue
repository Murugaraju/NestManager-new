<template>
  <fragment> 
    <v-overlay v-if="loading" :value="loading">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
    <template v-else> 
    <v-list class="pt-2">
      <v-list-item>
        <!-- breadgrum area -->
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on" color="blue" :to="{name:'pgs'}"><v-icon >mdi-arrow-left</v-icon></v-btn>
          </template>
           <span>Back</span>
        </v-tooltip>
       
       <v-btn text to="{name:'pgs'}" >Pgs</v-btn>/
       <v-btn text  :disabled="true">Floors</v-btn>

      </v-list-item>
    </v-list>
    <v-list >
      <v-list-item 
      @click="floorClicked(floor.id)"
       :key="floor.id"
        v-for="floor in floorList">
        <v-card width="100%"  class="mb-1">
            <v-card-title>{{floor.name}}</v-card-title>
        </v-card>
      </v-list-item>
    </v-list>
    </template>
  </fragment>
</template>

<script>

import {mapGetters,mapActions} from 'vuex';

export default {
    name:'Pgitem',
    props:{
        id:{type:Number,
            required:false,
            
            },
    }, 
    data:()=>{
        return {
            Floors:[
                {id:1,floor:1},
                {id:2,floor:2},
                {id:3,floor:3}
            ],
            pgId:undefined,
            
        }
    },
    computed:{
      ...mapGetters('PgItemStore',['loading','floorList']),
      
      
    },

    methods:{
        ...mapActions('PgItemStore',['pgItemGet']),
         floorClicked:function (flId) {
             
             
      this.$router.push({name:'rooms',params:{pgId:this.pgId,flId:flId}})
        
      }
    },
    mounted:function(){
      // console.log("came in ",this.$route);
      this.pgId=this.$route.params.pgId;
      
      this.pgItemGet(this.pgId);

    }
}
</script>

<style>

</style>