<template>
<div>
    <v-snackbar right top
      v-model="snackbar"
    >
      {{ text.msg }}
      <v-btn
        color="pink"
        text
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </v-snackbar>
 
</div>
   
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    data() {
        return {
            snackbar: false,
            text: 'Hello'
        }
    },
    computed: {
        ...mapGetters('Utility', ['getmasg'])
    },
    watch:{
        getmasg(value){
            console.log('changes')
            this.snackbar = true
            this.text = value
        }
    }
    
}
</script>