<template>
  <v-app>
    
    <v-content>
      
      <!-- <Login/> -->
<!-- <Dashboard/> -->
    <!-- <router-view/> -->
      <Main />
     

    </v-content>
  </v-app>
</template>

<script>
  
// import Dashboard from './components/Dashboard/Dashboard';
// import Login from './components/Login/Login'
import Main from './components/Main/Main';
export default {
  name: 'App',

  components: {
    
    Main
  },

  data: () => ({
    //
  }),
};
</script>
