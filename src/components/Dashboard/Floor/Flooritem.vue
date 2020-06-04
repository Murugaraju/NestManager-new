<template>
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
        <v-col :key="room.id" v-for="room in rooms" lg="3" md="4" sm="6" cols="12">
          <v-card>
            <v-card-title>{{room.no}}</v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-list-item>
  </v-list>
</template>

<script>
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
      pgId: undefined
    };
  },
  created:function(){
    this.pgId = this.$route.params.pgId;
    console.log('came in created',this.pgId)
  },
  mounted: function() {
    
    console.log("printing the pgId", this.pgId);
  }
};
</script>

<style>
</style>