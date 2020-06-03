<template>
    <fragment>
     <v-navigation-drawer
      v-model="drawer"
      app
     
   
      class="blue lighten-4 "
   
     
    >
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title  >Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="green"
      dark
     hide-on-scroll
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    </fragment>
</template>
<script>
export default {
    name:"Navbar",
    data:()=>{ return{
          drawer: null,
    }
    },
    props: {
      source: String,
    },
    watch:{
      drawer:function(){
        console.log('came in drawer')
      }
    }
}
</script>

<style scoped>
 
</style>