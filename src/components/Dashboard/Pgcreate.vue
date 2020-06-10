<template>
<fragment>
<v-overlay v-if="loading" :value="loading">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
  <v-list v-else>
    <v-list-item>
      <v-tooltip right>
        <template v-slot:activator="{on}">
          <v-btn icon v-on="on" :to="{name:'pgs'}">
            <v-icon>mdi-arrow-left</v-icon>
          </v-btn>
        </template>
        <span>Back/Cancel</span>
      </v-tooltip>
    </v-list-item>
    <v-list-item >
        <v-row justify="center">
           <v-card class="px-4 grey--text" width="60%" flat>
               <v-card-title>
                   Create Pg
               </v-card-title>
               <v-form v-on:submit.prevent="create()" >
                   <v-text-field v-model="name" label="Pg name">
                       <v-icon slot="prepend">mdi-home</v-icon>
                   </v-text-field>
                  
                    <v-text-field v-model="location" label="Location">
                       <v-icon slot="prepend">mdi-map</v-icon>
                        
                   </v-text-field>
               </v-form>
               <v-card-actions>
                   <v-spacer></v-spacer>
                   <v-btn text >Cancel</v-btn>
                   <v-btn type="submit" v-on:click="create()" color="green darken-1" class="white--text">Create</v-btn>

               </v-card-actions>
           </v-card>
        </v-row>
    </v-list-item>
   
  </v-list>
  </fragment>
</template>

<script>
import {mapActions,mapGetters} from 'vuex';
export default {
  name: "PgCreate",
  data(){
      return{
         name:undefined,
         location:undefined
      }
  },
  computed:{
      ...mapGetters('PgCreateStore',['loading','status'])
  },
  methods:{
      ...mapActions('PgCreateStore',['pgCreate']),
      create(){
            this.pgCreate({name:this.name,location:this.location})
      }
  },
watch:{
    status(n){
        if(n==201){
            this.name=undefined,
            this.location=undefined,

            this.$router.push({name:'pgs'})
        }
    }
},
  destroyed:function(){console.log('PgCreate  component ------> destroyed cycle')},

};
</script>

<style>
</style>