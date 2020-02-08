<template>
    <v-app   id="content">

      
            <Navbar/>
                <v-content 
              
                >
                    <router-view class="body" ></router-view>
                </v-content>``
             <Footer />
            <!-- <router-view class="footer" name="footer"></router-view> -->
           
      
        



     
    </v-app>
</template>

<script>

import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

export default {
    name:'Main',
    components:{
        Navbar,
        Footer
    }
}
</script>

<style scoped>
    #content{
      padding:0px
    }
</style>