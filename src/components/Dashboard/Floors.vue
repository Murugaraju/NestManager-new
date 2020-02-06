<template>
    <v-app id="floors">
            working floors  {{id}}
    </v-app>
</template>
<script>
export default {
    props:{
        id:Number,
    }, 
    mounted:function(){console.log("came in ",this)}
}

</script>
<style lang="stylus" scoped>

</style>