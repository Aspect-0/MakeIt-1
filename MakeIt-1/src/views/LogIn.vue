<template>
    <div class="form">
        <div class="mainDiv">
            <h1 class="mainTitle" >Login</h1>

        </div>
        <div class="subDiv">

            <div class="username">

                <h2 class="subTitle">Username</h2>
                <input class="input" type="text" v-model="loginusernameValue" placeholder="Username" >
            </div>
            <div class="password">
                <h2 class="subTitle">Password</h2>
                <input class="input" type="password" v-model="loginpasswordValue" placeholder="Password" >

            </div>
        </div>
        
        <button class="button" @click="login(loginusernameValue, loginpasswordValue)" >
            <div>Login</div>
        </button>

    </div>

    <div class="svg-bottom"></div>
</template>

<script lang="ts">
import { useStore } from '@/stores/store'
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
    setup () {
        const store = useStore()
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

.form{
    position: relative;     
    width: 40vw;
    margin: auto;
    margin-top: 20vh;
    height: 45vh;
    display: flex;
    flex-direction: column;
    z-index: 3; 
    
}

.mainDiv{
    width: 20vw;
    text-align: center;
    margin: auto; 
}
.subDiv{
    position: relative;
    height: 100%;
    margin-top: 3rem;
    display: flex;
    
    flex-direction: column;

}

.input{
    height: 1.6rem;
    font-size: 1rem;
    background-color: transparent;
    border: none;
    border-bottom: 3px solid var(--color4);
    outline: none;
    
}

.input:focus{
    box-shadow:  0 4px 10px 0px var(--color4);
}
input::placeholder{
    color: white;
    opacity: 0.8;
}

.username, .password{
    line-height: 2rem;
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
}

.button{
    position: absolute;
    width: 12rem;
    height: 3rem;
    right: 0;
    bottom: 0;
    margin-top: 2rem;

    font-size: 1.3rem;
  
    transition: all 0.5s;
    background-color: var(--color4);
    outline: none;
    border: none;
    border-radius: 0.5rem;
    color: var(--color5);
    

}
.button div{
    position: relative;
    z-index: 3;
}

.button:before{
    content: "";
    position: absolute;
    height: 100%;
    width: 1rem;
    left: 0;
    top: 0;
    background-color: var(--color7) ;
    transition: all 0.5s;
    z-index: 1;
    border-radius: 0.5rem;
}

.button:hover:before{
    width: 100%;
    
}

.svg-bottom{
    position: absolute;
    z-index: 0;
    bottom: 0;
    aspect-ratio: 16/9;
    width: 100%;
  
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;


    background-image: url(../assets/login-bottom-wave.svg);
}



</style>