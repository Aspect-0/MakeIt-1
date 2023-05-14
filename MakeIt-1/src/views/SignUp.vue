<template>
  <div class="form" >
    <h1>Sign Up</h1>
    <h2>Username</h2>
    <input type="text" v-model="usernameValue" placeholder="Username" >
    <h2>Password</h2>
    <input type="password" v-model="passwordValue" placeholder="Password">
    <button @click="sendSignupData({username: usernameValue, password: passwordValue})" >Submit</button>
  </div>
</template>

<script lang="ts">
import router from '@/router';
import { useRouter } from 'vue-router';
import { useStore } from '@/stores/store';
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    const store = useStore()
    const usernameValue = ref("")
    const passwordValue = ref("")
    const router = useRouter()
    return {store, usernameValue, passwordValue, router
    }
  },
  methods:{
    async sendSignupData(p:{username: string, password: string}){
      try {
        await this.store.signup(p.username, p.password)
        
        router.push('/')
      } catch (error) {
        console.log(error)
      }


    },
    b(){
      console.log(this.store.user)
    }
  }
})
</script>

<style scoped>
 
</style>