<template>
    <div class="nav">
        <div v-if="!store.user" >
            <RouterLink to="/signup">Sign Up</RouterLink>
            <RouterLink  to="/login" >Login</RouterLink>
        </div>
            <RouterLink @click="store.signOut" to="/login" v-if="store.user" >Sign Out</RouterLink>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router';
import { useCounterStore } from '@/stores/counter';
export default defineComponent({
    setup () {
        const store = useCounterStore()

        return {store}
    }
})
</script>

<style scoped>
    .nav{
        max-width: 100vw;
        height: 5vh;
        position: static;
        top: 0%;
    }
</style>