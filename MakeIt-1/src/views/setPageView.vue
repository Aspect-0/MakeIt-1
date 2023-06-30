<template>
    <div>
        This page is {{$route.params.setTitle}}
    </div>

    <div v-for="term in store.test.terms" > {{ term.term }} : {{ term.definition }}</div>

   
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from '@/stores/store'
import { useRoute } from 'vue-router'
export default defineComponent({
    
    setup () {
        const store = useStore()
        
        const route = useRoute()
        const param = route.params.setTitle as string
        store.readSpecificData(store.user, param)
        console.log(param)

        console.log(store.test)

        return {store, route, param}
    }
})
</script>

<style scoped>

</style>