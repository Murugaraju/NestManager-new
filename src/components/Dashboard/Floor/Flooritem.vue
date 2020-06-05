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
          <v-btn icon v-on="on" color="blue" :to="{name:'floors',params:{pgId:pgId}}">
            <v-icon>mdi-arrow-left</v-icon>
          </v-btn>
        </template>
        <span>Back</span>
      </v-tooltip>

      <v-btn text :to="{name:'pgs'}">Pgs</v-btn>/
      <v-btn text :to="{name:'floors',params:{pgId:pgId}}">Floors</v-btn>/
      <v-btn text :disabled="true">Rooms</v-btn>
    </v-list-item>
    <v-list-item>
      <v-row class="pa-1">
        <v-col :key="room.id" v-for="room in roomList" lg="3" md="4" sm="6" cols="12">
          <v-card>
            <v-card-title>{{room.number_or_name}}</v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-list-item>
  </v-list>
  </template>
</fragment>
</template>

<script>
import {mapActions,mapGetters} from 'vuex';
export default {
  name: "FloorItem",
  data: () => {
    return {
      rooms: [
        { id: 1, no: 1 },
        { id: 2, no: 1 },
        { id: 3, no: 1 },
        { id: 4, no: 1 },
        { id: 5, no: 1 },
        { id: 6, no: 1 },
        { id: 7, no: 1 },
        { id: 8, no: 1 }
      ],
      pgId: undefined,
      flId: undefined,
    };
  },
  created:function(){
    //Made the changes here after seing the life cycle templates loaded after created cycle
    console.log('printing in flooritem created',this.$route.params)
    this.pgId = this.$route.params.pgId;
    this.flId = this.$route.params.flId;

    console.log('came in created',this.flId)
  },
  computed:{
    ...mapGetters('FloorItemStore',['roomList','loading','status'])
  },
  methods:{
    ...mapActions('FloorItemStore',['roomListGet'])

  },
  watch:{
    status: function(n,o){
      console.log('observing for the status value change',n,o)
      if(n==404){
        this.$router.push({name:'pnf404'})
      }
    }
  },
  mounted: function() {
    
    console.log("printing the flId", this.flId);
    this.roomListGet({pgId:this.pgId,flId:this.flId});
  }
};
</script>

<style>
</style>