<template>
 <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>Login to NestManager PG</v-toolbar-title>
              
               
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Login"
                    name="login"
                    v-model="username"
                    prepend-icon="mdi-account-circle"
                    type="text"
                      dense
                    outlined
                  />
                   
                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    v-model="password"
                    prepend-icon="mdi-lock"
                    :append-icon="showPassword?'mdi-eye':'mdi-eye-off'"
                    v-on:click:append="showPassword=!showPassword"
                    :type="showPassword?'text':'password'"
                    dense
                    outlined

                  />
                </v-form>
              </v-card-text>
              <v-divider/>
              <v-card-actions>
                <v-spacer />
                <v-btn color="primary">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
    

 
  </v-container>
</template>
<script>
export default {
    name:'Login',
    data:()=>{
        return{
            showPassword:false,
            username:'',
            password:''
        }
    },
  
    methods:{
        
    },
    watch:{
        
    }
   
}
</script>