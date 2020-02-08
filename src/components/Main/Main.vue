<template>
   <fragment>

      
            <Navbar/>
               
                <router-view class="body" ></router-view>
               
             <Footer />
            
           
      
        


   </fragment>
   
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