<template>
  <fragment>
    <v-navigation-drawer v-model="drawer" app class="grey lighten-4">
      <v-col >
        <v-row class="mt-5 pb-5" align="center" justify="center">
          <v-avatar color="orange" size="100">
            <span class="white--text headline">62</span>
          </v-avatar>
        </v-row>
      </v-col>

      <v-list class="mt-5" rounded>
        <v-list-item  :to="{name:'pgs'}">
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
       
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="green" dark hide-on-scroll>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>
  </fragment>
</template>
<script>
export default {
  name: "Navbar",
  data: () => {
    return {
      drawer: null
    };
  },
  props: {
    source: String
  },
  watch: {
    drawer: function() {
      console.log("came in drawer");
    }
  }
};
</script>

<style scoped>
</style>