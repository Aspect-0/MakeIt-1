<template>
    <div>
        <section class="top">
            <div class="createCard">
                <h3>Create</h3>
            </div>
        </section>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup () {
        

        return {}
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