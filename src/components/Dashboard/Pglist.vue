<template>
  <v-container fluid>
    <v-overlay v-if="loading" :value="loading">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
    <template v-else>
   <v-card width="100%"  @click="onTabCliked(pg.id)" class="mb-2"
   :key="pg.id" 
   v-for="pg in data.pgList"
    >
      <v-card-title>
        <h1>{{pg.name}}</h1>
        <h1>{{pg.location}}</h1>
      </v-card-title>
    </v-card>
    
    </template>
  </v-container>
</template>

<script>
import {mapActions,mapGetters} from 'vuex';
// import Pgitem from './Pgt';

export default {
     name: "Pglist",
  components: {
    // Pgitem
  },
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
        { id: 6, name: "PG 5" },
     

      ]
    };
  },
  computed:{
    ...mapGetters('PgListStore',['data','loading'])
  },
  props: {
    source: String
  },
  mounted:function() {
     console.log('mounted in pglist',this.data);
      this.pgListGet();
      
   
  },
  methods: {
    ...mapActions('PgListStore',['pgListGet']),
    
    onTabCliked: function(pgId) {
      console.log("tab clicked----->");
      this.$router.push({name:'floors',params:{pgId:pgId}})
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