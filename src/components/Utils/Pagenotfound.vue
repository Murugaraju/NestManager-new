<template>
  
      <v-row :align="'center'" justify="center" class="blue darken1" >
        
              <v-card width="30%" height="50%" raised>
                  <v-card-title>
                      Page Not Found404
                  </v-card-title>
                  <v-card-subtitle>
                      Opps! broken url
                  </v-card-subtitle>
                  <v-card-text>
                      Looks like you've followed a broken link or entered a URL that doesn't exist on this site.
                  </v-card-text>
                  <v-card-actions>
                      <v-btn @click="()=>{this.$router.go(-1)}" text  color="indigo">
                          <v-icon>mdi-arrow-left</v-icon>
                          Back to our site
                          </v-btn>
                  </v-card-actions>
              </v-card>
       
      </v-row>

</template>

<script>
export default {
    name:"PageNotFound"
}
</script>

<style>

</style>