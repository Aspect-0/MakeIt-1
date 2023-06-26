<template>
    <div>
        <section class="top">
            <div class="createCard">
                <h3>Create</h3>
            </div>
        </section>
        <section class="mid">
            <h2>Your Cards</h2>
            <div v-for="term in store.termList" >{{ term.title }}</div>
        </section>
  
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from '@/stores/store';
export default defineComponent({
    setup () {
        const store = useStore()
        store.readUserData(store.user)

        return {store}
    },
    methods:{

    }
})
</script>

<style scoped>

.createCard{
    height: 20rem;
    width: 40rem;
    background-color: aliceblue;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 10px;
}

</style>