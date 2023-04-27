<template>
    <div class="form">
        <h1>Login</h1>
        <h2>Username</h2>
        <input type="text" v-model="loginusernameValue" placeholder="Username" >
        <h2>Password</h2>
        <input type="password" v-model="loginpasswordValue" placeholder="Password" >
        <button @click="login(loginusernameValue, loginpasswordValue)" >Login</button>

    </div>
</template>

<script lang="ts">
import { useCounterStore } from '@/stores/counter'
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
    setup () {
        const store = useCounterStore()
        const loginusernameValue = ref('')
        const loginpasswordValue = ref('')
        const router = useRouter()
        return {loginusernameValue, store, loginpasswordValue, router}
    },
    methods:{
        async login(username:string, password:string){
            try {
                await this.store.login(username, password)
                this.router.push('/')
            } catch (error) {
                console.log(error)
                alert(error)
            }

        }
    }
})
</script>

<style scoped>

</style>