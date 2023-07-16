<template>
    <div class="nav">
        <section class="left">
            <h2>MakeIt-1</h2>
        </section>
        <section class="right">
            
                    <div class="div-right" v-if="!store.user" >
                        <h2>
                            <RouterLink to="/signup">Sign Up</RouterLink>

                        </h2>

                        <h2>

                            <RouterLink  to="/login" >Login</RouterLink>
                        </h2>

                    </div>

                    <div v-if="store.user" > 
                        <RouterLink @click="store.signOut" to="/login" v-if="store.user" >Sign Out</RouterLink>
                        <RouterLink to="/create" >Create</RouterLink>
                        <RouterLink to="/main">Main</RouterLink>
                        
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
        border-bottom: 1px solid black;
      
        transition: transform .5s cubic-bezier(.4,0,.2,1);

    }

    .nav:hover{
        transform: translateY(0);
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
</style>