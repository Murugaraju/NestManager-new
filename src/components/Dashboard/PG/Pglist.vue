<template>
  <v-container fluid>
    <v-card width="100%"  @click="onTabCliked()" class="mb-2" :key="pg.id" v-for="pg in PGs">
      <v-card-title>
        <h1>{{pg.name}}</h1>
      </v-card-title>
    </v-card>
  </v-container>
</template>

<script>
export default {
     name: "Pglist",
  components: {
    // Floors
  },
  data: () => {
    return {
      drawer: null,
      id: null,
      PGs: [
        { id: 1, name: "PG 1" },

        { id: 2, name: "PG 2" },
        { id: 3, name: "PG 3" },
        { id: 4, name: "PG 4" },
        { id: 5, name: "PG 5" },
        { id: 6, name: "PG 5" },
     

      ]
    };
  },
  props: {
    source: String
  },

  methods: {
    onTabCliked: function(ev) {
      console.log("tab clicked----->", ev);
      this.$router.push({path:'Dashboard/1/Floors'})
    }
  },
  watch: {
    id: function() {
      console.log("came in because id data changed", this.id);
    }
  }
};

</script>

<style>

</style>