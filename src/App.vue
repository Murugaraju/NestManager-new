<template>
  <v-app>
    
    <v-content>
      
      <!-- <Login/> -->
<!-- <Dashboard/> -->
    <router-view/>

     

    </v-content>
  </v-app>
</template>

<script>
  
// import Dashboard from './components/Dashboard/Dashboard';
// import Login from './components/Login/Login'
export default {
  name: 'App',

  components: {
    
    // Dashboard
    // Login
  },

  data: () => ({
    //
  }),
};
</script>
