<template>
 <v-card width='400' raised class='mx-auto mt-5'>
    <v-card-title>Login to NestManager PG</v-card-title>
    <v-card-text>
        <v-form>
            <v-text-field 
                label='Username'
                
                prepend-icon="mdi-account-circle"
            
            />
            <v-text-field 
            label='Password'
            
            prepend-icon="mdi-lock"
            :type="showPassword?'text':'password'"
            :append-icon="showPassword?'mdi-eye':'mdi-eye-off'"
            @click:append="showPassword=!showPassword"
        
            
            />

        </v-form>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
        <v-btn color="success">Register</v-btn>
        <v-spacer/>
        <v-btn color="info">Login</v-btn>

        
    </v-card-actions>

</v-card>
</template>
<script>
export default {
    name:'Login',
    data:()=>{
        return{
            showPassword:false,
        }
    }
}
</script>