<template>
  <fragment> 
    <v-overlay v-if="loading" :value="loading">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
    <template v-else> 
    <v-list class="pt-2">
      <v-list-item>
        <!-- breadgrum area -->
        <a href>Pg{{pgId}}</a>/
        <a href>Floors</a>
      </v-list-item>
    </v-list>
    <v-list >
      <v-list-item 
      @click="floorClicked()"
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
         floorClicked:function () {
             console.log('came in floor clicked',this.$router,this.$route)
             
      this.$router.push({name:'rooms',params:{pgId:1,flId:2}})
        
      }
    },
    mounted:function(){
      console.log("came in ",this.$route);
      this.pgId=this.$route.params.pgId;
      this.pgItemGet(this.pgId);

    }
}
</script>

<style>

</style>