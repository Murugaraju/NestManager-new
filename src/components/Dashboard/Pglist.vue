<template>
  <v-container fluid>
    <v-row class="px-3" justify="space-between">
      <h2 class="grey--text">Dashboard</h2>
      <v-tooltip left>
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" fab dark color="green" right icon :to="{name:'pgcreate'}">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </template>
        <span>Create Pg</span>
      </v-tooltip>
    </v-row>
    <v-overlay v-if="loading" :value="loading">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
    <template v-else>
      <v-row>
        <v-col
        lg="4"
        md="6" 
        sm="12"
        :key="pg.id" 
        v-for="pg in data.pgList"
        >
          <v-card height="300px" @click="onTabCliked(pg.id)" class="mb-2">
            <v-card-title>
              <h1 class="orange--text">{{pg.name}}</h1>
              <v-spacer></v-spacer>
              <h1 class="orange--text">{{pg.location}}</h1>

            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </template>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Pglist",
  components: {},
  data: () => {
    return {
      drawer: null,
      id: null,
      //Below PGs is temp
      PGs: [
        { id: 1, name: "PG 1" },

        { id: 2, name: "PG 2" },
        { id: 3, name: "PG 3" },
        { id: 4, name: "PG 4" },
        { id: 5, name: "PG 5" },
        { id: 6, name: "PG 5" }
      ]
    };
  },

  computed: {
    ...mapGetters("PgListStore", ["data", "loading", "status"])
  },
  props: {
    source: String
  },
  mounted: function() {
    console.log("mounted in pglist", this.data);
    this.pgListGet();
  },
  methods: {
    ...mapActions("PgListStore", ["pgListGet", "loadingReset"]),

    onTabCliked: function(pgId) {
      console.log("tab clicked----->");
      this.$router.push({ name: "floors", params: { pgId: pgId } });
    }
  },

  watch: {
    status: function(n, o) {
      console.log("observing for the status value change", n, o);
      if (n == 404) {
        this.$router.push({ name: "pnf404" });
      }
    }
  },
  destroyed: function() {
    console.log("Destroyed of the component PgList");
    this.loadingReset();
  }
};
</script>

<style>
</style>