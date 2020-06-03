<template>
  <fragment>  
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
        v-for="floor in Floors">
        <v-card width="100%"  class="mb-1">
            <v-card-title>{{floor.floor}}</v-card-title>
        </v-card>
      </v-list-item>
    </v-list>
  </fragment>
</template>

<script>
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
    methods:{
         floorClicked:function () {
             console.log('came in floor clicked',this.$router,this.$route)
             
      this.$router.push({name:'rooms',params:{pgId:1,flId:2}})
        
      }
    },
    mounted:function(){console.log("came in ",this.$route);
    this.pgId=this.$route.params.pgId
    }
}
</script>

<style>

</style>