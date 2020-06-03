<template>
  <v-row class="pa-1">
    <v-col cols="12">
         <a href>Pg{{pgId}}</a>/
        <a href>Floors</a>
    </v-col>
    <v-col 
    :key="room.id" 
    v-for="room in rooms"
    lg="3"
    md="4"
    sm="6"
    cols="12"
    >
      <v-card>
          <v-card-title>{{room.no}}</v-card-title>
      </v-card>
    </v-col>
  </v-row>
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
      ]
    };
  }
};
</script>

<style>
</style>