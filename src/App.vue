<template>
  <v-app>
        <Snackbar/>

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
import Snackbar from './components/Snackbar'

export default {
  name: 'App',

  components: {
    
    Main,
    Snackbar
  },

  data: () => ({
    //
  }),
};
</script>
