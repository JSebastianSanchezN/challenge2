<template>
    <div class="container">
        <div v-if="error" class="alert alert-danger">{{error}}</div>

        <form @submit.prevent="Signup()">
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input
                    id="email" type="email" class="form-control"
                    name="email" required autofocus v-model="email"
                />
            </div>

            <div class="mb-3">
                <label for="password" class="form-label"
                >Password</label>
                <input 
                    id="password" type="password" class="form-control"
                    name="password" required v-model="password"
                />
            </div>

            <div class="form-group row mb-0">
                <div class="col-md-8 offset-md-4">
                    <button type="submit" class="btn btn-primary">Signup</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    import {useStore} from 'vuex'
    import {useRouter} from 'vue-router'

    export default{
        name: "Signup",
        data(){
            return{
                email:'',
                password:'',
                error: null,
                store: useStore(),
                router: useRouter()
            }
        },
        methods:{
            async Signup(){
                try{
                    await this.store.dispatch('user/signUp',{
                        email:this.email,
                        password:this.password
                    })
                    this.router.push('/')
                }
                catch (err){
                    this.error=err.message
                }
            }
        }
    }
</script>