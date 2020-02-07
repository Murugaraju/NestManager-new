<template>
    <v-app>
        
          
            <router-view class="body" ></router-view>

     
            <!-- <router-view class="footer" name="footer"></router-view> -->
            <Footer />
      
        




    </v-app>
</template>

<script>

import Footer from '../Footer/Footer';

export default {
    name:'Main',
    components:{
     
        Footer
    }
}
</script>

<style scoped>

</style>