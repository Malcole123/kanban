<template>
    <div class="app-main-container">
        <div class="app-auth-wrapper">
            <div class="app-auth-illustration">

            </div>
            <div class="app-auth-action-wrapper">
                <div class="app-auth-header">
                    <h1 class="app-prim-text-color app-auth-heading">{{ authInstructions.type }}</h1>
                </div>
                <form class="app-auth-body" @submit.prevent="submitForm">
                    <div class="app-auth-name" v-if="authInstructions.nameEntry">
                                <MazInput 
                                placeholder="First Name"
                                required
                                color="third"
                                :loading="state.inputLoading"
                                v-model="form.name.first"
                                />
                                <MazInput 
                                placeholder="Last Name"
                                required
                                color="third"
                                :loading="state.inputLoading"
                                v-model="form.name.last"
                                />
                    </div>
                    <MazInput 
                    placeholder="Email"
                    required
                    color="third"
                    :loading="state.inputLoading"
                    v-model="form.email"
                    />
                    <MazInput 
                    placeholder="Password"
                    required
                    type="password"
                    color="third"
                    :loading="state.inputLoading"
                    v-model="form.password"
                    />
                    <h3 class="app-prim-text-color" v-if="authInstructions.forgetPrompt">Forgot your password ?</h3>
                    <MazBtn 
                    type="submit"
                    color="third"
                    :loading="state.inputLoading"
                    >{{ authInstructions.type }}</MazBtn>
                    <NuxtLink :to="authInstructions.footerLink">
                        <h3 class="app-prim-text-color">{{ authInstructions.footerMsg }}</h3>
                    </NuxtLink>
                </form>
            </div>
        </div>
    </div>

</template>

<script>

export default {
    layout:'auth_layout',
    components:{
     
    },
    computed:{
        authInstructions(){
            let return_val = {
                type:'',
                footerMsg:'',
                footerLink:'',
                forgetPrompt:false,
                nameEntry:false,
            }
            let path_ = this.$route.path;
            if(path_.includes('register')){
                return_val.type ='Sign Up';
                return_val.footerMsg = "Already have an account ? Log In";
                return_val.footerLink = "/auth/login";
                return_val.nameEntry = true;
                this.authType = 'register';
            }else{
                return_val.type = 'Log In';
                return_val.footerMsg = "Don't have an account ? Sign Up";
                return_val.footerLink = "/auth/register";
                return_val.forgetPrompt = true;
                this.authType = 'login';

            };
            return return_val;
        }
    },
    data(){
        return {
            state:{
                inputLoading:false,
            },
            authType:"login",
            form:{
                name:{
                    first:"",
                    last:"",
                },
                email:"",
                password:"",
            }
        }
    },
    methods:{
        async submitForm(){
            this.state.inputLoading = true;
            let ret_form = {
                ok:false,
            }
            if(this.authType === 'login'){
                ret_form = await this.logInUser();
            }else{
                ret_form = await this.signUpUser();
            }
            if(ret_form.ok){

            }else{

            }
        },
        async logInUser(){
            await this.$auth.loginWith('local',{
                data:{
                    email:this.form.email,
                    password:this.form.password,
                }
            }).then(data=>{
                return {
                    ok:true,
                }
            }).catch(err=>{
                return {
                    ok:false,
                }
            })
        },
        async signUpUser(){
            const { email , password , name } = this.form ;
            let req = await this.$store.dispatch('user/userSignUp', {
                email,
                password,
                name,
            });
        }
    }
}
</script>

<style>
    .app-auth-wrapper{
        width:100%;
        display:grid;
        grid-template-columns:2fr 1fr;
        gap:1em;
    }

    .app-auth-action-wrapper, .app-auth-illustration{
        width:100%;
        display:flex;
        flex-direction:column;
        gap:1em;
    }

    .app-auth-heading{
        font-size:var(--app-text-2xl);
        font-weight:600;
    }

    .app-auth-body{
        display:flex;
        flex-direction:column;
        gap:1em;
    }

    .app-auth-name{
        width:100%;
        display:grid;
        grid-template-columns:repeat(2,1fr);
        gap:0.5em;
    }

    @media (max-width:992px) {
        .app-auth-wrapper{
            width:100%;
            display:grid;
            grid-template-columns:1fr;
            gap:1em;
        }
    }
</style>