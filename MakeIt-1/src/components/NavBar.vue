<template>
    <div class="nav">
        <section class="left">
            <RouterLink class="headLink" to="/" >MakeIt-1</RouterLink>
        </section>
        <section class="right">
            
                    <div class="div-right" v-if="!store.user" >
                        <h2>
                            <RouterLink class="link" to="/signup">Sign Up</RouterLink>

                        </h2>

                        <h2>

                            <RouterLink class="link"  to="/login" >Login</RouterLink>
                        </h2>

                    </div>

                    <div v-if="store.user" > 
                        <RouterLink class="link" @click="store.signOut" to="/login" v-if="store.user" >Sign Out</RouterLink>
                        <RouterLink class="link" to="/create" >Create</RouterLink>
                        <RouterLink class="link" to="/main">Main</RouterLink>
                        
                    </div>

                
                        
        </section>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router';
import { useStore } from '@/stores/store';
export default defineComponent({
    setup () {
        const store = useStore()

        return {store}
    }
})
</script>

<style scoped> 
    .nav{
        max-width: 100vw;
        height: 5vh;
        position: sticky;
        top: 0%;
        display: flex;
        z-index: 3;

    }

    .headLink{
        font-size: 2rem;
        font-weight: 600;
    }
    .left{
        width: 50%;
        text-align: left;
        display: flex;
        align-items: center;

    }
    .right{
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: right;
        
    }

    .right div{
        display: flex;
   
    }
    .right div a{
        text-decoration: none;
        margin-right: 2rem;
    }

    a{
        color: white;
        text-decoration: none;
    }

</style>